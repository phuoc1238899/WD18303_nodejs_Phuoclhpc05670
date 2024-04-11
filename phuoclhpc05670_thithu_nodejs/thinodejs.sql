-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th4 10, 2024 lúc 08:44 AM
-- Phiên bản máy phục vụ: 8.0.31
-- Phiên bản PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `thinodejs`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hop_dong`
--

CREATE TABLE `hop_dong` (
  `id` int NOT NULL,
  `ten_nguoi_mua` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `ten_nguoi_ban` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `gia_tien` decimal(10,2) NOT NULL,
  `ngay_ky` date NOT NULL,
  `trang_thai` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Đang đổ dữ liệu cho bảng `hop_dong`
--

INSERT INTO `hop_dong` (`id`, `ten_nguoi_mua`, `ten_nguoi_ban`, `gia_tien`, `ngay_ky`, `trang_thai`) VALUES
(1, 'Phuoc', 'Nhi', 20000.00, '2024-04-10', 1),
(4, 'nam', 'toan', 3809.00, '2024-04-01', 2),
(5, 'luong', 'toan', 3809.00, '2024-04-01', 2),
(7, 'phuoc', 'nhi', 3809.00, '2024-04-01', 2);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `hop_dong`
--
ALTER TABLE `hop_dong`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `hop_dong`
--
ALTER TABLE `hop_dong`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
