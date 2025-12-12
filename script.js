/*
  Full JavaScript for Kelas 25A3
  (Tanpa tombol tambah foto & edit + IG clickable + tanpa tanggal lahir + hamburger berfungsi)
*/

/* ---------- Data: 25 siswa ---------- */
const STORAGE_KEY = 'kelas25a3_students_v1';

const defaultStudents = [
  { id: 1, name: 'ACHMAD DANIEL', nickname: 'Ahmed', birthDate: '2007-01-16', username: '@161ahmedd', motivation: 'tidak ada karena saya gak tau ah males', photo: '' },
  { id: 2, name: 'FATTAH SYAIFULLOH', nickname: 'Fattah', birthDate: '2006-06-12', username: 'ftthsyfllh', motivation: 'aku mencintaimu sederas hujan, tapi kamu menganggap aku hanya sebatas teman. HIDUP BLONDEEE', photo: '' },
  { id: 3, name: 'ANINDIA PRADITA MEIDA', nickname: 'Anin', birthDate: '2006-05-11', username: 'anienzxy', motivation: 'ga butuh motivasi, butuhnya diskon Shopee', photo: '' },
  { id: 4, name: 'ARDIAN FIRMANSYAH', nickname: 'Ardian', birthDate: '2007-10-15', username: 'arrdd_fr', motivation: 'Berjalan tak seperti rencana adalah jalan yang sudah biasa, dan jalan satu-satunya jalani sebaik kau bisa - FSTVLST', photo: '' },
  { id: 5, name: 'BAGAS NUGRAHA ENDIANSYAH', nickname: 'Bagas', birthDate: '2007-01-18', username: 'bagas31.co', motivation: 'LANANG KUI "PIYE CARANE" ORA "CARANE PIYE?"', photo: '' },
  { id: 6, name: 'DANUAR ILHAM KURNYAWAN', nickname: 'Danuar', birthDate: '2007-01-18', username: 'danuarilham', motivation: 'Living a life of getting wide no wiser, Chasing some dimes. Saving it for then waster - The Sigit', photo: '' },
  { id: 7, name: 'DENOK DWI HIDAYATI', nickname: 'Denok', birthDate: '2005-12-10', username: 'den_hida', motivation: '"Besi yang dingin ditempa di ujung jalan; cahaya yang menyendiri muncul di tengah malam yang panjang."', photo: '' },
  { id: 8, name: 'EKA WIDIASTUTI', nickname: 'Eka', birthDate: '2007-03-08', username: 'xwidiiiaa_07', motivation: 'Gagal itu wajar,yang penting jangan gagal move on 😜', photo: '' },
  { id: 9, name: 'FAIZAL SAPUTRA', nickname: 'Faizal', birthDate: '2006-10-21', username: '@izaloafonso', motivation: 'Sampai lupa pernah punya cita-cita, karena sekarang hidupnya cuman bekerja, bertahan dan berdoa', photo: '' },
  { id: 10, name: 'AKBAR WAHYU FEBRIYANTO', nickname: 'Akbar', birthDate: '2007-02-10', username: 'akbrwahy._', motivation: 'tiada hidup tanpa masalah, tiada perjuangan tanpa rasa lelah, tetap semangatlah sampai bismillah mu menjadi alhamdulillah', photo: '' },
  { id: 11, name: 'GOLEOVI AL-FAUZI', nickname: 'Ovi', birthDate: '2006-05-26', username: '@goleo.pille', motivation: 'Uang memang tidak dibawa mati. Tapi kalau nggak ada uang, rasanya mau mati.', photo: '' },
  { id: 12, name: 'JOFAN HANDIKA ADYAKSA', nickname: 'Jofan', birthDate: '2006-07-25', username: 'jofanhandikaaa', motivation: '"Selagi masih dikasih nyawa jangan lupa coding. Kegagalan hari ini bisa jadi bahan cerita lucu besok"', photo: '' },
  { id: 13, name: 'MAGNUS FREDICSEN AMIGI DA COSTA XIMENES', nickname: 'Magnos', birthDate: '2007-10-18', username: 'magnosxi_18', motivation: 'keberhasilan bukanlah milik orang pintar, keberhasilan adalah milik Mereka yang sanantiasa berusaha🤟', photo: '' },
  { id: 14, name: 'MISYELA AMANDO AYU SAPUTRI', nickname: 'Misyela', birthDate: '2006-12-21', username: 'msyelamnda', motivation: 'Jika kamu sudah berada di plan b, ingat masih ada plan c plan d plan e dan seterusnya. Tetap semangat', photo: '' },
  { id: 15, name: 'MUHAMMAD LUQMAN AL BUKHORI', nickname: 'Luqman', birthDate: '2007-03-28', username: 'Ailzee007', motivation: 'tidak ada kata kata hanya ada bukti nyata', photo: '' },
  { id: 16, name: 'NAYANDA HALSEMA', nickname: 'Naya', birthDate: '2005-02-05', username: 'halsema.nayanda', motivation: 'Pendidikan adalah paspor ke masa depan, karena besok milik mereka yang mempersiapkannya hari ini', photo: '' },
  { id: 17, name: 'PRATIWI', nickname: 'Tiwi', birthDate: '2006-06-15', username: 'oneof_tiwi', motivation: 'kepercayaan diri tumbuh dari keberanian untuk mencoba', photo: '' },
  { id: 18, name: 'PYPYT RHAKHIMINATUN KHASANAH', nickname: 'Pypyt', birthDate: '2007-07-24', username: 'x.lupy', motivation: 'The death will smile at every man, All one can do is to smile back - The Sigit', photo: '' },
  { id: 19, name: 'RATRI NUR PRASINTA', nickname: 'Ratri', birthDate: '2005-07-22', username: 'ratrii.np', motivation: 'semangkok mi ayam dan es jeruk lalu lanjutkan perjalanan mu', photo: '' },
  { id: 20, name: 'REZA MICHAEL ALVANDO', nickname: 'Reza', birthDate: '2007-07-01', username: 'reza_mikell', motivation: 'penting urip ngono wae', photo: '' },
  { id: 21, name: 'SAVIRA DIVA AZZAHRA', nickname: 'Savira', birthDate: '2007-01-31', username: 'saviradivaaz', motivation: 'di dunia informasi, setiap data memiliki cerita yang menanti untuk diceritakan', photo: '' },
  { id: 22, name: 'SYIFA DAMAR ARUM', nickname: 'Syifa', birthDate: '2007-05-04', username: 'ciipssyifa', motivation: 'tidak ada jalan tanpa debu dan tidak ada kesuksesan tanpa doa ibu', photo: '' },
  { id: 23, name: 'VICKY REGA SYAPUTRA', nickname: 'Vicky', birthDate: '2007-06-15', username: 'pikiii_r', motivation: 'fisik bisa dirubah, materi cari di google', photo: '' },
  { id: 24, name: 'MOHAMMED NABIL AL SELMI', nickname: 'Al Selmi', birthDate: '2001-05-24', username: 'al selmi', motivation: '', photo: '' },
  { id: 25, name: 'NINA FIFI ANDHANI', nickname: 'Nina', birthDate: '2007-06-30', username: 'ninafifii_', motivation: 'Sabar itu penting, tapi makan itu lebih penting', photo: '' }
];

let students = loadStudentsFromStorage();

function loadStudentsFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return JSON.parse(JSON.stringify(defaultStudents));
}

/* ---------- Save ---------- */
function saveStudentsToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
}

/* ---------- DOM Elements ---------- */
let showGrid = false;
const studentGrid = document.getElementById('student-grid');
const featured = document.getElementById('featured-students');
const studentCountEl = document.getElementById('student-count');

/* ---------- Helper ---------- */
function initials(name) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
}

/* ---------- Create Card ---------- */
function createStudentCard(student) {
  const card = document.createElement('div');
  card.className = 'bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover-lift fade-in';

  const photoWrap = document.createElement('div');
  photoWrap.className = 'w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden flex items-center justify-center';

  if (student.photo) {
    const img = document.createElement('img');
    img.src = student.photo;
    img.className = 'w-full h-full object-cover';
    photoWrap.appendChild(img);
  } else {
    photoWrap.classList.add('bg-gradient-to-br','from-amber-600','to-orange-700');
    const span = document.createElement('span');
    span.className = 'text-white font-bold text-xl';
    span.innerText = initials(student.name);
    photoWrap.appendChild(span);
  }

  const nameEl = document.createElement('h3');
  nameEl.className = 'text-xl font-bold text-center text-gray-800 mb-1';
  nameEl.innerText = student.name;

  const nickEl = document.createElement('p');
  nickEl.className = 'text-amber-700 text-center font-semibold mb-1';
  nickEl.innerText = student.nickname;

  const userEl = document.createElement('p');
  userEl.className = 'text-center text-sm mb-1';
  if (student.username) {
    const igLink = document.createElement('a');
    igLink.href = `https://instagram.com/${student.username.replace('@','')}`;
    igLink.target = "_blank";
    igLink.className = "text-blue-600 underline hover:text-blue-800";
    igLink.innerText = `IG: ${student.username}`;
    userEl.appendChild(igLink);
  }

  const motivEl = document.createElement('p');
  motivEl.className = 'text-gray-600 text-sm text-center mt-2';
  motivEl.innerText = student.motivation;

  card.appendChild(photoWrap);
  card.appendChild(nameEl);
  card.appendChild(nickEl);
  card.appendChild(userEl);
  card.appendChild(motivEl);

  return card;
}

/* ---------- Render Grid ---------- */
function renderGrid() {
  studentGrid.innerHTML = '';
  students.forEach(s => studentGrid.appendChild(createStudentCard(s)));
}

/* ---------- Featured ---------- */
function renderFeatured() {
  featured.innerHTML = '';

  const first = students[0];
  const second = students[1];

  function createFeaturedCard(s, label, grad) {
    const el = document.createElement('div');
    el.className = 'bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover-lift text-center fade-in';

    const photo = document.createElement('div');
    photo.className = `w-20 h-20 rounded-full mx-auto mb-4 bg-gradient-to-br ${grad} flex items-center justify-center`;

    if (s.photo) {
      const img = document.createElement('img');
      img.src = s.photo;
      img.className = 'w-full h-full rounded-full object-cover';
      photo.innerHTML = '';
      photo.appendChild(img);
    } else {
      const span = document.createElement('span');
      span.className = 'text-white font-bold text-xl';
      span.innerText = initials(s.name);
      photo.appendChild(span);
    }

    const name = document.createElement('h3');
    name.className = 'text-xl font-bold text-gray-800';
    name.innerText = s.name;

    const role = document.createElement('p');
    role.className = 'text-amber-700 font-semibold mb-2';
    role.innerText = label;

    const ig = document.createElement('p');
    ig.className = 'text-center mb-2';

    if (s.username) {
      const link = document.createElement('a');
      link.href = `https://instagram.com/${s.username.replace('@','')}`;
      link.target = "_blank";
      link.className = "text-blue-600 underline hover:text-blue-800";
      link.innerText = `IG: ${s.username}`;
      ig.appendChild(link);
    }

    const desc = document.createElement('p');
    desc.className = 'text-gray-600 text-sm';
    desc.innerText = label === 'Ketua Kelas'
      ? 'Pemimpin yang inspiratif dan selalu siap membantu kelas.'
      : 'Sosok yang dapat diandalkan dan mendukung kegiatan kelas.';

    el.appendChild(photo);
    el.appendChild(name);
    el.appendChild(role);
    el.appendChild(ig);
    el.appendChild(desc);
    return el;
  }

  featured.appendChild(createFeaturedCard(first, 'Ketua Kelas', 'from-amber-600 to-orange-700'));
  featured.appendChild(createFeaturedCard(second, 'Wakil Ketua', 'from-orange-500 to-red-700'));

  const others = document.createElement('div');
  others.className = 'bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl text-center fade-in';
  others.innerHTML = `
    <div class="w-20 h-20 rounded-full mx-auto mb-4 bg-gradient-to-br from-purple-600 to-pink-700 flex items-center justify-center">
      <span class="text-white text-xl font-bold">👥</span>
    </div>
    <h3 class="text-xl font-bold text-gray-800">${students.length - 2} Siswa Lainnya</h3>
    <p class="text-purple-700 font-semibold mb-2">Anggota Kelas</p>
    <p class="text-gray-600 text-sm">Setiap Mahasiswa memiliki keunikan luar biasa.</p>
  `;
  featured.appendChild(others);
}

/* ================================================================
   FITUR BARU — LIHAT SEMUA PROFIL → SEMBUNYIKAN 3 CARD UTAMA
   ================================================================ */
function showAllStudents() {
  featured.classList.add("hidden");     // Sembunyikan card ketua, wakil, 23 lainnya
  studentGrid.classList.remove("hidden"); 
  renderGrid();
}

/* ---------- Toggle Grid (optional tetap ada) ---------- */
function toggleStudentList() {
  showAllStudents(); // override: langsung gunakan fitur baru
}

/* ---------- Update Count ---------- */
function updateStudentCount() {
  studentCountEl.innerText = `${students.length} Siswa Luar Biasa di Kelas 25A3`;
}

/* ---------- Instagram Button ---------- */
function openInstagram() {
  window.open("https://instagram.com/systematic.a3", "_blank");
}

/* ---------- Scroll ke Students ---------- */
function goToAbout() {
  document.getElementById("students").scrollIntoView({
    behavior: "smooth"
  });
}

/* ---------- HAMBURGER MENU ---------- */
const mobileBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

/* ---------- Init ---------- */
updateStudentCount();
renderFeatured();

/* ---------- Expose for HTML ---------- */
window.toggleStudentList = toggleStudentList;
window.showAllStudents = showAllStudents;
window.goToAbout = goToAbout;
window.openInstagram = openInstagram;
