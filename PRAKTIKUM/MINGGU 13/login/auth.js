//buat fungsi
// ambil value / nilai inputan username dan password
// kita cek kondisinya apakah username dan password yang diinputkan sama
// dengan nlai yang kita tentukan (kondisi pertama)

// jika benar arahkan ke dashboard admin
// jika salah berikan alert username dan password

// jika tidak inputan untuk username dan password (kondisi kedua)
// tampilkan alert username dan passweord tudaj boleh kosong.

//  commnet code
function login(){
    var user = document.getElementById("username").value;
    var pass = documene.getElementById("password").value;

    if (user == "admin" && pass == "123456") {
        alert('selamat anda berhasil login');
        window.location = "../backend_admin/index.html"
        return false;
    } else if (user == "" || pass == "") {
        alert('username & password tidak boleh kosong');
        return false;
    } else {
        alert('username & password salah');
        return false;
    }
}