provider "aws" {
  region = "us-east-1"
}

resource "aws_vpc" "shopping_app_vpc" {
  cidr_block = "10.0.0.0/16"

  tags = {
    Name = "shopping-app-vpc"
  }
}

resource "aws_subnet" "shopping_app_subnet" {
  vpc_id            = aws_vpc.shopping_app_vpc.id
  cidr_block        = "10.0.1.0/24"
  availability_zone = "us-east-1a"

  tags = {
    Name = "shopping-app-subnet"
  }
}

resource "aws_internet_gateway" "shopping_app_igw" {
  vpc_id = aws_vpc.shopping_app_vpc.id

  tags = {
    Name = "shopping-app-igw"
  }
}

resource "aws_route_table" "shopping_app_route_table" {
  vpc_id = aws_vpc.shopping_app_vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.shopping_app_igw.id
  }

  tags = {
    Name = "shopping-app-route-table"
  }
}

resource "aws_route_table_association" "shopping_app_route_table_association" {
  subnet_id      = aws_subnet.shopping_app_subnet.id
  route_table_id = aws_route_table.shopping_app_route_table.id
}

resource "aws_security_group" "shopping_app_sg" {
  vpc_id = aws_vpc.shopping_app_vpc.id

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  
  }

  ingress {
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  
  }

  ingress {
    from_port   = 3001
    to_port     = 3001
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  
  }

  ingress {
    from_port   = 5173
    to_port     = 5173
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "shopping-app-security-group"
  }
}

resource "tls_private_key" "example" {
  algorithm = "RSA"
  rsa_bits  = 4096
}

resource "aws_key_pair" "generated_key" {
  key_name   = "shopping-app-key-pair"
  public_key = tls_private_key.example.public_key_openssh
}

resource "local_file" "private_key" {
  content  = tls_private_key.example.private_key_pem
  filename = "${path.module}/key-pair/shopping-app-key-pair.pem"
}

resource "aws_instance" "base_instance" {
  ami           = "ami-012967cc5a8c9f891"  
  instance_type = "t3a.2xlarge"
  key_name      = aws_key_pair.generated_key.key_name
  subnet_id     = aws_subnet.shopping_app_subnet.id
  vpc_security_group_ids = [aws_security_group.shopping_app_sg.id]

  associate_public_ip_address = true

  tags = {
    Name = "shopping-app-base-instance"
  }
}

output "instance_id" {
  value = aws_instance.base_instance.id
}

output "instance_public_ip" {
  value = aws_instance.base_instance.public_ip
}
