-- MySQL db have name employee wwith STT, HoTen, NgaySinh, SoCMT, VanHoa(12/12), ChuyenMon, SuPham, HangGPLX
CREATE DATABASE IF NOT EXISTS employee;
USE employee;
CREATE TABLE IF NOT EXISTS employee (
    STT INT PRIMARY KEY AUTO_INCREMENT,
    HoTen VARCHAR(255) NOT NULL,
    NgaySinh DATE NOT NULL,
    SoCMT VARCHAR(12) NOT NULL,
    VanHoa VARCHAR(12) NOT NULL,
    ChuyenMon VARCHAR(128) NOT NULL,
    SuPham VARCHAR(128) NOT NULL,
    HangGPLX VARCHAR(10) NOT NULL
);
-- import data
INSERT INTO employee (HoTen, NgaySinh, SoCMT, VanHoa, ChuyenMon, SuPham, HangGPLX) VALUES
('Nguyễn Trung Chính', '1983-07-02', '040083167707', '12/12', 'Thạc sĩ khoa học giáo dục', 'Đại học sư phạm', 'B2'),
('Thái Thanh Chương', '1985-05-29', '040085025893', '12/12', 'Đại học Tin học', 'Sư phạm đại học', 'B2'),
('Nguyễn An Đức', '1989-10-21', '040089039783', '12/12', 'Kỹ sư công nghệ kỹ thuật ô tô', 'Sư phạm dạy nghề', 'C'),
('Nguyễn Phi Dũng', '1988-06-01', '042088022069', '12/12', 'Trung  cấp sư phạm âm nhạc', 'Đại học sư phạm', 'D'),
('Hà Quang Dũng', '1982-02-02', '040082033642', '12/12', 'Trung cấp kế toán', 'Sư phạm sơ cấp', 'C'),
('Hoàng Dũng Hà', '1979-04-02', '042079003854', '12/12', 'Đại học sư phạm Địa lý', 'Đại học sư phạm', 'B2'),
('Nguyễn Công Hậu', '1987-09-15', '040087034222', '12/13', 'Trung cấp công nghệ ô tô', 'Sư phạm sơ cấp', 'C'),
('Lữ Văn Hoà', '1977-12-02', '040077799956', '12/13', 'Đại học sư phạm', 'Đại học sư phạm', 'B2'),
('Phạm Đăng Hoài', '1972-04-05', '042072012306', '12/12', 'Sư phạm sơ cấp', 'Sư phạm sơ cấp', 'B2'),
('Nguyễn Thị Thanh Huệ', '1982-07-11', '040307687556', '12/12', 'Sư phạm dạy nghề', 'Sư phạm dạy nghề', 'B2'),
('Đặng Viết Hùng', '1972-03-28', '040072019055', '12/12', 'Sư phạm Bậc 1', 'Sư phạm Bậc 1', 'C'),
('Nguyễn Văn Huy', '1985-06-22', '040085006009', '12/12', 'Sư phạm sơ cấp', 'Sư phạm sơ cấp', 'B2'),
('Thái Bá Lĩnh', '1968-04-17', '040068038015', '12/12', 'Sư phạm sơ cấp', 'Sư phạm sơ cấp', 'C'),
('Bùi Xuân Ngọc', '1983-08-19', '040083017685', '12/12', 'Sư phạm sơ cấp', 'Sư phạm sơ cấp', 'C'),
('Hồ Sỹ Minh Tâm', '1981-10-17', '040081020563', '12/12', 'Sư phạm sơ cấp', 'Sư phạm sơ cấp', 'B2'),
('Nguyễn Cảnh Thanh', '1980-06-20', '040080019308', '12/12', 'Sư phạm sơ cấp', 'Sư phạm sơ cấp', 'E'),
('Nguyễn Tiến Thành', '1984-01-20', '042084005578', '12/12', 'Sư phạm sơ cấp', 'Sư phạm sơ cấp', 'D'),
('Đậu Xuân Thiều', '1959-06-11', '040059017439', '12/12', 'Trung cấp sư phạm', 'Trung cấp sư phạm', 'C'),
('Phạm Xuân Giáp', '1994-06-15', '040094027790', '12/12', 'Cao đẳng công nghệ ô tô', 'Sư phạm sơ cấp', 'B2');
