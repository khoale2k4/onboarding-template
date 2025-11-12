# My Expo App

Ứng dụng mẫu sử dụng **React Native + Expo** với các tính năng cơ bản:

- Trang **Onboarding** chỉ chạy lần đầu mở app.
- Trang **Home** sau khi hoàn tất Onboarding.
- Lưu trạng thái đã xem Onboarding bằng **AsyncStorage**.

---

## Yêu cầu

- Node.js >= 16
- npm hoặc yarn
- Expo CLI: `npm install -g expo-cli`
- Điện thoại với **Expo Go** (Android / iOS)
- Cả máy tính và điện thoại đều **cùng mạng Wi-Fi** nếu dùng LAN

---

## Cài đặt

1. Clone repository:

```bash
git clone https://github.com/username/my-expo-app.git
cd my-expo-app
```

2. Cài dependencies:

```bash
npm install
```
hoặc nếu dùng yarn:

```bash
yarn install
```

---

## Chạy ứng dụng
1. Khởi chạy dev server:

``` bash
npm run start
```
hoặc:

```bash
yarn start
```

2. Mở Expo Go trên điện thoại.

3. Quét QR code hiển thị trên terminal.

4. App sẽ load trên điện thoại:

- Nếu là lần đầu mở → sẽ hiển thị Onboarding Screen.

- Lần tiếp theo → sẽ trực tiếp vào Home Screen.

---

## Thư mục chính
```bash
MyApp/
├── App.tsx               # Entry point
├── src/
│   ├── screens/          # Các màn hình Onboarding, Home
│   ├── navigation/       # RootNavigator
│   └── storage/          # AsyncStorage helper
├── package.json
└── README.md
```