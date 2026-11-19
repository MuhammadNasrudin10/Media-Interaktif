(function () {
    const KOLOM = ["No", "Nama Siswa", "Total Nilai", "Waktu Submit", "Hari/Tanggal"];

    function ambilBaris() {
        if (!window.jQuery) return [];
        if (!$.fn.DataTable.isDataTable("#datasiswa")) return [];
        return $("#datasiswa").DataTable().rows().data().toArray().map(function (r, i) {
            return [i + 1, r.Nama, String(r.Nilai), r.Waktu, r.Hari, (r.jawabannya || []).join(", ")];
        });
    }

    function peringatanKosong() {
        if (typeof swal === "function") {
            swal("Perhatian!", "Belum ada data siswa untuk diekspor.", "warning");
        } else {
            alert("Belum ada data siswa untuk diekspor.");
        }
    }

    window.exportHasilExcel = function (namaFile) {
        const data = ambilBaris();
        if (!data.length) { peringatanKosong(); return; }
        const ws = XLSX.utils.aoa_to_sheet([KOLOM.concat(["Jawaban Siswa"])].concat(data));
        ws["!cols"] = [{ wch: 5 }, { wch: 30 }, { wch: 12 }, { wch: 14 }, { wch: 24 }, { wch: 60 }];
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Hasil");
        XLSX.writeFile(wb, namaFile + ".xlsx");
    };

    window.exportHasilPdf = function (judul, namaFile) {
        const data = ambilBaris();
        if (!data.length) { peringatanKosong(); return; }
        const doc = new jspdf.jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
        doc.setFontSize(14);
        doc.text(judul, 14, 15);
        doc.autoTable({
            startY: 22,
            head: [KOLOM],
            body: data.map(function (b) { return b.slice(0, 5); }),
            styles: { fontSize: 10, cellPadding: 2 },
            headStyles: { fillColor: [37, 99, 235] },
            alternateRowStyles: { fillColor: [245, 247, 250] }
        });
        doc.save(namaFile + ".pdf");
    };

    const KOLOM_REKAP = ["No", "Nama Siswa", "Nilai Kuis 1", "Nilai Kuis 2", "Nilai Evaluasi"];

    function ambilBarisRekap() {
        let trs = [];
        if (window.jQuery && window.$.fn.DataTable.isDataTable("#datasiswa")) {
            trs = window.$("#datasiswa").DataTable().rows().data().toArray();
        }
        if (!trs.length) {
            trs = Array.prototype.slice.call(document.querySelectorAll("#datasiswa tbody tr"));
        }
        return trs.map(function (tr, i) {
            const td = tr.querySelectorAll("td");
            const ambil = function (n) { return td[n] ? td[n].textContent.trim() : ""; };
            return [i + 1, ambil(0), ambil(1), ambil(2), ambil(3)];
        });
    }

    window.exportRekapExcel = function (namaFile) {
        const data = ambilBarisRekap();
        if (!data.length) { peringatanKosong(); return; }
        const ws = XLSX.utils.aoa_to_sheet([KOLOM_REKAP].concat(data));
        ws["!cols"] = [{ wch: 5 }, { wch: 30 }, { wch: 14 }, { wch: 14 }, { wch: 14 }];
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Rekapitulasi");
        XLSX.writeFile(wb, namaFile + ".xlsx");
    };

    window.exportRekapPdf = function (judul, namaFile) {
        const data = ambilBarisRekap();
        if (!data.length) { peringatanKosong(); return; }
        const doc = new jspdf.jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
        doc.setFontSize(14);
        doc.text(judul, 14, 15);
        doc.autoTable({
            startY: 22,
            head: [KOLOM_REKAP],
            body: data,
            styles: { fontSize: 10, cellPadding: 2, halign: "center" },
            headStyles: { fillColor: [37, 99, 235] },
            alternateRowStyles: { fillColor: [245, 247, 250] },
            columnStyles: { 1: { halign: "left" } }
        });
        doc.save(namaFile + ".pdf");
    };
})();
