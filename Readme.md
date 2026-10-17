ช่วยสร้างโค้ดสำหรับเว็บไซต์ Portfolio ส่วนตัว โดยมีเป้าหมายเพื่อนำไป Deploy บน GitHub Pages 
โปรดเขียนโค้ดด้วย Vanilla HTML, CSS และ JavaScript (แยกไฟล์เป็น index.html, style.css, script.js) ให้เข้าใจง่าย เป็นระเบียบ และพร้อมใช้งานจริง

### 1. ธีมและสไตล์งานดีไซน์ (Design Theme & Aesthetics)
* **Theme Concept:** "Retro Desktop OS / Vintage 90s OS" (จำลองหน้าจอระบบปฏิบัติการคลาสสิก ผสมผสานความเป็นศิลปะเรโทรและตัวตนสาย Developer)
* **โทนสีและองค์ประกอบ:**
  - สีพื้นหลังเดสก์ท็อป: โทนสี Teal เข้มวินเทจ (`#008080`) หรือ Dark Desktop Grey
  - กรอบหน้าต่าง (Window Frame): สไตล์ 90s แบบมีมิติ Bevel (ขอบนูน/ขอบจม) มีแถบ Title Bar ด้านบนสีน้ำเงินเข้ม พร้อมปุ่ม `[_] [X]`
  - ฟอนต์: ผสมผสานระหว่างฟอนต์ Sans-Serif ที่อ่านง่ายสำหรับเนื้อหา และ Monospace สำหรับส่วนโค้ด/Terminal
  - ไอคอน: เน้นความรู้สึกแบบ Pixel Art หรือไอคอนโฟลเดอร์แบบเรโทร

### 2. โครงสร้างและการจัดวางหน้าเว็บ (Layout & Sections)
หน้าแรก (index.html) จะจำลองเป็นหน้าเดสก์ท็อปที่มีแถบเมนู (Navbar / Taskbar) อยู่ด้านบน และแบ่งเนื้อหาเป็น 5 ส่วนหลัก:

1. **Navbar (Top Taskbar):**
   - มีปุ่มทางลัดแบบแท็บสไตล์เรโทร: `Intro` | `About` | `Project` | `Exper` | `Contact`
   - เมื่อคลิก ให้ทำ Smooth Scroll เลื่อนไปยัง Section หน้าต่างนั้นๆ อย่างลื่นไหล

2. **Section 1: Intro (Hero Window):**
   - หน้าต่างแรกต้อนรับ จัดวางเป็น 2 ฝั่ง:
     - ฝั่งซ้าย: กรอบรูปภาพโปรไฟล์ (Avatar Frame)
     - ฝั่งขวา: หน้าต่างย่อยสไตล์ Terminal / Command Prompt แสดงข้อมูลแบบพิมพ์:
       - `> Name:` [ชื่อเจ้าของเว็บ]
       - `> Job:` Computer Engineering Student / Developer
       - `> Slogan:` [สโลแกนหรือประโยคแนะนำตัว]

3. **Section 2: About Me (Document Window):**
   - หน้าต่างคล้ายโปรแกรม Notepad เล่าประวัติการศึกษา ความสนใจ และความหลงใหลในเทคโนโลยี
   - มีกล่องแสดงทักษะ (Skill Tags / Inventory) เช่น C++, Python, Web Dev, Linux, Tools ต่างๆ

4. **Section 3: Project / Achievements (File Manager Window):**
   - แสดงรายการผลงานเป็น Grid รูปไอคอนโฟลเดอร์ (Folder Cards)
   - มีโฟลเดอร์หลักคือ **"Comprog Solutions"** และโฟลเดอร์สำหรับโปรเจกต์อื่นๆ
   - เมื่อผู้ใช้คลิกที่โฟลเดอร์แต่ละอัน จะต้องลิงก์เปิดไปยังหน้ารายละเอียดแยก (เช่น `projects/comprog.html`) เพื่อเข้าไปดูรายการโจทย์ ซอร์สโค้ด และเอกสารโจทย์ PDF ต่อไปได้

5. **Section 4: Experience / Competitions (Event Log Window):**
   - แสดงรายการการแข่งขันและกิจกรรม (เช่น การแข่งขัน Cybersecurity / CTF, กิจกรรมค่าย)
   - การ์ดแต่ละใบมีรูปภาพ/ไอคอนด้านซ้าย และข้อมูลหัวข้อสรุปด้านขวา
   - เมื่อคลิกที่การ์ด จะต้องลิงก์เปิดไปยังหน้ารายละเอียดแบบเต็ม (เช่น `experiences/event-detail.html`) เพื่ออ่านเรื่องเล่า ดูเกียรติบัตร และภาพบรรยากาศ

6. **Section 5: Contact (Mail Window):**
   - กล่องหน้าต่างจำลองโปรแกรมส่งอีเมลวินเทจ รวมช่องทางการติดต่อ: Email, GitHub, Social Links

### 3. สิ่งที่ต้องการให้สร้าง (Deliverables)
1. โค้ด **`index.html`** โครงสร้างหน้าแรกครบทั้ง 5 Section พร้อมแท็ก Semantic HTML
2. โค้ด **`style.css`** สำหรับตกแต่งธีม Retro OS (Window frames, Title bars, Bevel borders, Buttons, Terminal box, Responsive Layout ที่รองรับ Mobile)
3. โค้ด **`projects/comprog.html`** (หน้าตัวอย่างสำหรับแสดงรายการโจทย์ Comprog มีกล่องแสดงโค้ด C++ พร้อม Syntax Highlighting/ปุ่ม Copy และปุ่มลิงก์ดาวน์โหลดไฟล์ PDF)
4. โค้ด **`experiences/detail-template.html`** (หน้าเทมเพลตสำหรับเล่ารายละเอียดกิจกรรม/การแข่งขัน มีปุ่มย้อนกลับหน้าแรก)
5. คำแนะนำโครงสร้างโฟลเดอร์ในโปรเจกต์ (Folder Structure) ที่เหมาะสมสำหรับการนำขึ้น GitHub Pages