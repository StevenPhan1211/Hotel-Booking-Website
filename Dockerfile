# Sử dụng Node.js phiên bản nhẹ (alpine) để giảm dung lượng image
FROM node:18-alpine

# Đặt thư mục làm việc trong container
WORKDIR /app

# Copy các file cấu hình package.json và package-lock.json (nếu có) để cài đặt dependencies
COPY package.json package-lock.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ mã nguồn dự án (bao gồm cả thư mục src) vào container
COPY . .

# Build ứng dụng Next.js (lệnh này sẽ dựa vào script build trong package.json)
RUN npm run build

# Mở cổng mặc định của Next.js (3000)
EXPOSE 3000

# Chạy ứng dụng Next.js ở chế độ production
CMD ["npm", "run", "dev"]
