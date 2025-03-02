# Sử dụng Node.js LTS phiên bản mới nhất
FROM node:18-alpine

# Đặt thư mục làm việc trong container
WORKDIR /app

# Copy package.json vào container
COPY package.json package-lock.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ code vào container
COPY . .

# Mở cổng chạy backend (có thể là 5000)
EXPOSE 5000

# Lệnh chạy ứng dụng
CMD ["npm", "run", "dev"]
