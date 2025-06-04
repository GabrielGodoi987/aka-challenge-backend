  #!/bin/bash

  until mysqladmin ping -h "mysql" -u "root" -p "docker" --silent; do
    echo "Waiting for MySQL to be available..."
    sleep 2
  done

  echo "MySQL is up and running."