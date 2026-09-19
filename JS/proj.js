// document.addEventListener("DOMContentLoaded", function() {
// let file = document.getElementByld("medicailfile");
// let button = document.getElementByld("uploadbtn");
// if(button && file){
//    button.onclick = function() {
//     if(file.files.length == 0){
//         alert("يرجئ ادخال التقرير الطبي")
//     }
//     else{
//  alert("تم اختيار التقرير الطبي بنجاح ")
//     }
// }
//     else{
//         console.error("لم يتم العثور علئ عناصر");
//     }
   
// }
// })

const hospitals = {
    heart: [
        {
            name: "مستشفى القلب",
            city: "القاهرة",
            rating: "4.8",
            price: "من 500 دولار"
        },
        {
            name: "مركز أمراض القلب",
            city: "الجيزة",
            rating: "4.6",
            price: "من 450 دولار"
        },
        {
            name: "مستشفى متخصص للقلب",
            city: "الإسكندرية",
            rating: "4.5",
            price: "من 400 دولار"
        }
    ],

    lung: [
        {
            name: "مستشفى أمراض الصدر والرئة",
            city: "القاهرة",
            rating: "4.7",
            price: "من 450 دولار"
        },
        {
            name: "مركز علاج أمراض الرئة",
            city: "الجيزة",
            rating: "4.5",
            price: "من 400 دولار"
        },
        {
            name: "مستشفى متخصص للجهاز التنفسي",
            city: "الإسكندرية",
            rating: "4.4",
            price: "من 350 دولار"
        }
    ],

    cancer: [
        {
            name: "مركز علاج الأورام",
            city: "القاهرة",
            rating: "4.9",
            price: "من 1000 دولار"
        },
        {
            name: "مستشفى علاج السرطان",
            city: "الجيزة",
            rating: "4.7",
            price: "من 900 دولار"
        },
        {
            name: "مركز متخصص في الأورام",
            city: "الإسكندرية",
            rating: "4.6",
            price: "من 800 دولار"
        }
    ],

    eyes: [
        {
            name: "مستشفى العيون التخصصي",
            city: "القاهرة",
            rating: "4.8",
            price: "من 350 دولار"
        },
        {
            name: "مركز طب وجراحة العيون",
            city: "الجيزة",
            rating: "4.6",
            price: "من 300 دولار"
        },
        {
            name: "مستشفى متخصص للعيون",
            city: "الإسكندرية",
            rating: "4.5",
            price: "من 280 دولار"
        }
    ],

    bones: [
        {
            name: "مستشفى جراحة العظام والمفاصل",
            city: "القاهرة",
            rating: "4.8",
            price: "من 600 دولار"
        },
        {
            name: "مركز العظام والمفاصل",
            city: "الجيزة",
            rating: "4.6",
            price: "من 500 دولار"
        },
        {
            name: "مستشفى جراحة العظام",
            city: "الإسكندرية",
            rating: "4.5",
            price: "من 450 دولار"
        }
    ],

    neurology: [
        {
            name: "مستشفى المخ والأعصاب",
            city: "القاهرة",
            rating: "4.9",
            price: "من 700 دولار"
        },
        {
            name: "مركز جراحة المخ والأعصاب",
            city: "الجيزة",
            rating: "4.7",
            price: "من 650 دولار"
        },
        {
            name: "مستشفى الأعصاب التخصصي",
            city: "الإسكندرية",
            rating: "4.6",
            price: "من 550 دولار"
        }
    ]
};

const diseaseButtons = document.querySelectorAll("button.diseases");

diseaseButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const disease = button.getAttribute("data-diseases");
        localStorage.setItem("selectedDisease", disease);
        window.location.href = "suitable-hospitals.html";
    });
});

const selectedDisease = localStorage.getItem("selectedDisease");
const hospitalsContainer = document.getElementById("hospitals-container");

if (hospitalsContainer && selectedDisease) {
    const selectedHospitals = hospitals[selectedDisease];

    if (selectedHospitals) {
        hospitalsContainer.innerHTML = "";

        selectedHospitals.forEach(function(hospital) {
            const hospitalCard = document.createElement("div");

            hospitalCard.className = "hospital-card";

            hospitalCard.innerHTML = `
                <h2>${hospital.name}</h2>
                <p><strong>المدينة:</strong> ${hospital.city}</p>
                <p><strong>التقييم:</strong> ⭐ ${hospital.rating}</p>
                <p><strong>السعر التقريبي:</strong> ${hospital.price}</p>
                <button class="choose-hospital">اختيار المستشفى</button>
            `;

            hospitalsContainer.appendChild(hospitalCard);
        });
    }
} else if (hospitalsContainer) {
    hospitalsContainer.innerHTML = `
        <p>يرجى اختيار المرض أولاً لعرض المستشفيات المناسبة.</p>
    `;
}


const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event){
      event.preventDefault();
      
      alert("تم الارسال بنجاح");

      contactForm.reset();
     });
}