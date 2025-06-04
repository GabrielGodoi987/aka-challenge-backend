  #!/bin/bash

  until mysqladmin ping -h "localhost" -u "root" -p "docker" "-pdocker" --silent; do
    echo "Waiting for MySQL to be available..."
    sleep 2
  done

  echo "MySQL is up and running."

  npm run build
  npm run prisma:generate
  npm run prisma:migrate
  npx prisma db seed
  npm run dev