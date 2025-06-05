#!/bin/bash

echo "MySQL is up and running."
npm run prisma:generate
npm run prisma:migrate
npx prisma db seed
npm run dev
npm run prisma:studio