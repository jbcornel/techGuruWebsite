
    
    
    var iphoneModal = document.getElementById('shopModal')
    $(document).ready(function(){

        
        $('#shopModal').on('show.bs.modal', function (event) {
        var $modal = $(this)
          $modal.find('.modal-body').val("hi")

          var button = event.relatedTarget
          var category = button.getAttribute('data-bs-category')
          var phone = button.getAttribute('data-bs-phone')
          
          var modalTitle = iphoneModal.querySelector('.modal-title')
          var modalBody = iphoneModal.querySelector('.modal-body')
          modalTitle.textContent = phone
          console.log(phone)
          
          if(category ==='iphone')
        {

          
                var iphone = arrayOfIphones.find(x => x.pid === phone);
                console.log(iphone);
      
                modalTitle.textContent = iphone.name
                  modalBody.innerHTML = `
                <ul>
                      <li>Screen replacement: ${iphone.screenRepairPrice}</li>
                      <li>Battery replacement: ${iphone.batteryPrice}</li>
                      <li>Charging port replacement: ${iphone.chargingPortPrice}</li>
                      <li>Home button replacement: ${iphone.homeButtonPrice}</li>
                      <li>Front camera replacement: ${iphone.frontCameraPrice}</li>
                  </ul>
                  `
      
            }
          else if(category === "samsung"){
            var samsung = arrayOfSamsungs.find(x => x.pid === phone);
            console.log(samsung);
  
            modalTitle.textContent = samsung.name
              modalBody.innerHTML = `
            <ul>
                  <li>Screen replacement: ${samsung.screenRepairPrice}</li>
                  <li>Battery replacement: ${samsung.batteryPrice}</li>
                  
              </ul>`
          
          }
          else{
            
            var otherPhone = arrayOfOther.find(x => x.name === phone);
          console.log(otherPhone);


            modalBody.innerHTML = `
          <ul>
                <li>Screen replacement: ${otherPhone.screenRepairPrice}</li>
                <li>Battery replacement: ${otherPhone.batteryPrice}</li>
                <li>Charging port replacement: ${otherPhone.chargingPortPrice}</li>
                <li>Home button replacement: ${otherPhone.homeButtonPrice}</li>
                <li>Front camera replacement: ${otherPhone.frontCameraPrice}</li>
            </ul>
            `

          }
              
})


    });

    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      })
    //your code here
//pid stands for phone identification

const arrayOfOther = [
    {
        pid: 'lgstylo6',
        name: 'LG Stylo 6',
        screenRepairPrice: '$119',//edit these values later
        batteryPrice: '$69',
        chargingPortPrice: '$79',
        homeButtonPrice: 'N/A',
        frontCameraPrice: '$75',
    },
]
    const arrayOfIphones = [
        {
            pid: 'i13promax',
            name: 'iPhone 13 Pro Max',
            screenRepairPrice: '$459',
            batteryPrice: '$99',
            chargingPortPrice: '$119',
            homeButtonPrice: 'N/A',
            frontCameraPrice: '$75',
        },
        {
            pid: 'i13pro',
            name: 'iPhone 13 Pro',
            screenRepairPrice: '$249',
            batteryPrice: '$89',
            chargingPortPrice: '$99',
            homeButtonPrice: 'N/A',
            frontCameraPrice: '$75',
        },
        {
            pid: 'i13',
            name: 'iPhone 13',
            screenRepairPrice: '$229',
            batteryPrice: '$79',
            chargingPortPrice: '$89',
            homeButtonPrice: 'N/A',
            frontCameraPrice: '$75',
        },
        {
            pid: 'i12promax',
            name: 'iPhone 12 Pro Max',
            screenRepairPrice: '$229',
            batteryPrice: '$99',
            chargingPortPrice: '$79',
            homeButtonPrice: 'N/A',
            frontCameraPrice: '$75',
        },
        {
            pid: 'i12pro',
            name: 'iPhone 12 Pro',
            screenRepairPrice: '$209',
            batteryPrice: '$79',
            chargingPortPrice: '$79',
            homeButtonPrice: 'N/A',
            frontCameraPrice: '$75',
        },
        {
            pid: 'i12',
            name: 'iPhone 12',
            screenRepairPrice: '$189',
            batteryPrice: '$79',
            chargingPortPrice: '$79',
            homeButtonPrice: 'N/A',
            frontCameraPrice: '$75',
        },
        {
            pid: 'i11promax',
            name: 'iPhone 11 Pro Max',
            screenRepairPrice: '$139',
            batteryPrice: '$69',
            chargingPortPrice: '$99',
            homeButtonPrice: 'N/A',
            frontCameraPrice: '$75',
        },
        {
            pid: 'i11pro',
            name: 'iPhone 11 Pro',
            screenRepairPrice: '$119',
            batteryPrice: '$69',
            chargingPortPrice: '$99',
            homeButtonPrice: 'N/A',
            frontCameraPrice: 'N/A',
        },
        {
            pid: 'i11',
            name: 'iPhone 11',
            screenRepairPrice: '$109',
            batteryPrice: '$59',
            chargingPortPrice: '$79',
            homeButtonPrice: 'N/A',
            frontCameraPrice: 'N/A',
        },
        {
            pid: 'iXSMax',
            name: 'iPhone XS MAX',
            screenRepairPrice: '$109',
            batteryPrice: '$49',
            chargingPortPrice: '$79',
            homeButtonPrice: 'N/A',
            frontCameraPrice: 'N/A',
        },
        {
            pid: 'iXS',
            name: 'iPhone XS',
            screenRepairPrice: '$99',
            batteryPrice: '$49',
            chargingPortPrice: '$69',
            homeButtonPrice: 'N/A',
            frontCameraPrice: 'N/A',
            
        },
        {
            pid: 'iX',
            name: 'iPhone X',
            screenRepairPrice: '$99',
            batteryPrice: '$65',
            chargingPortPrice: '$69',
            homeButtonPrice: 'N/A',
            frontCameraPrice: 'N/A',
        },
        {
            pid: 'iXR',
            name: 'iPhone XR',
            screenRepairPrice: '$99',
            batteryPrice: '$65',
            chargingPortPrice: '$79',
            homeButtonPrice: 'N/A',
            frontCameraPrice: '$65',
    
        },
        {
            pid: 'i8P',
            name: 'iPhone 8+',
            screenRepairPrice: '$79',
            batteryPrice: '$55',
            chargingPortPrice: '$69',
            homeButtonPrice: '$49',
            frontCameraPrice: '$59',
    
        },
        {   
            pid: 'i8',
            name: 'iPhone 8',
            screenRepairPrice: '$79',
            batteryPrice: '$55',
            chargingPortPrice: '$69',
            homeButtonPrice: '$49',
            frontCameraPrice: '$59',
    
        },
        {
            pid: 'i7P',
            name: 'iPhone 7+',
            screenRepairPrice: '$69',
            batteryPrice: '$49',
            chargingPortPrice: '$65',
            homeButtonPrice: '$49',
            frontCameraPrice: '$55',
    
        },
        {
            pid: 'i7',
            name: 'iPhone 7',
            screenRepairPrice: '$69',
            batteryPrice: '$49',
            chargingPortPrice: '$65',
            homeButtonPrice: '$49',
            frontCameraPrice: '$55',
    
        },
        {   
            pid: 'i6SP',
            name: 'iPhone 6S Plus',
            screenRepairPrice: '$69',
            batteryPrice: '$49',
            chargingPortPrice: '$65',
            homeButtonPrice: '$39',
            frontCameraPrice: '$49',
    
        },
        {
            pid: 'i6S',
            name: 'iPhone 6S',
            screenRepairPrice: '$69',
            batteryPrice: '$49',
            chargingPortPrice: '$65',
            homeButtonPrice: '$39',
            frontCameraPrice: '$49',
    
        },
        {
            pid: 'i6P',
            name: 'iPhone 6 Plus',
            screenRepairPrice: '$69',
            batteryPrice: '$49',
            chargingPortPrice: '$65',
            homeButtonPrice: '$39',
            frontCameraPrice: '$49',
    
        },
        {
            pid: 'i6',
            name: 'iPhone 6',
            screenRepairPrice: '$69',
            batteryPrice: '$49',
            chargingPortPrice: '$65',
            homeButtonPrice: '$39',
            frontCameraPrice: '$49',
    
        },

    
    
]


const arrayOfSamsungs = [
    {
        pid: 'S21U',
        name:'S21 Ultra 5G',
        screenRepairPrice: '$369',
        batteryPrice: '$99'
    },
    {
        pid: 'S21P',
        name:'S21 Plus 5G',
        screenRepairPrice: '$299',
        batteryPrice: '$89'
    },
    {
        pid: 'S21',
        name:'S21 5G',
        screenRepairPrice: '$279',
        batteryPrice: '$79'
    },
    {
        pid: 'S20',
        name:'S20',
        screenRepairPrice: '$329',
        batteryPrice: '$69'
    },
    {
        pid: 'S20FE',
        name:'S20 FE 5G',
        screenRepairPrice: '$199',
        batteryPrice: '$69'
    },
    {
        pid: 'S20U',
        name:'S20 Ultra 5G',
        screenRepairPrice: '$329',
        batteryPrice: '$69'
    },
    {
        pid: 'S20P',
        name:'S20 Plus 5G',
        screenRepairPrice: '$319',
        batteryPrice: '$69'
    },
    
    {
        pid: 'S20',
        name:'S20 5G',
        screenRepairPrice: '$299',
        batteryPrice: '$69'
    },
    {
        pid: 'S105G',
        name:'S10 5G',
        screenRepairPrice: '$299',
        batteryPrice: '$59'
    },
    {
        pid: 'S10P',
        name:'S10 Plus',
        screenRepairPrice: '$319',
        batteryPrice: '$59'
    },
    {
        pid: 'S10',
        name:'S10',
        screenRepairPrice: '$299',
        batteryPrice: '$59'
    },
    {
        pid: 'S10e',
        name:'S10e',
        screenRepairPrice: '$189',
        batteryPrice: '$59'
    },
    {
        pid: 'S9P',
        name:'S9+',
        screenRepairPrice: '$219',
        batteryPrice: '$59'
    },
    {
        pid: 'S9',
        name:'S9',
        screenRepairPrice: '$199',
        batteryPrice: '$59'
    },
    {
        pid: 'S8P',
        name:'S8+',
        screenRepairPrice: '$219',
        batteryPrice: '$59'
    },
    {
        pid: 'S8',
        name:'S8',
        screenRepairPrice: '$199',
        batteryPrice: '$59'
    },
    {
        pid: 'S7',
        name:'S7',
        screenRepairPrice: '$159',
        batteryPrice: '$59'
    },
    {
        pid: 'S7E',
        name:'S7 Edge',
        screenRepairPrice: '$199',
        batteryPrice: '$'
    },
    {
        pid: 'N20U',
        name:'Note 20 Ultra 5G',
        screenRepairPrice: '$449',
        batteryPrice: '$89'
    },
    {
        pid: 'N20',
        name:'Note 20 5G',
        screenRepairPrice: '$289',
        batteryPrice: '$79'
    },
    {
        pid: 'N10P5G',
        name:'Note 10 Plus 5G',
        screenRepairPrice: '$319',
        batteryPrice: '$79'
    },
    {
        pid: 'N10P',
        name:'Note 10 Plus',
        screenRepairPrice: '$319',
        batteryPrice: '$79'
    },
    {
        pid: 'N10',
        name:'Note 10',
        screenRepairPrice: '$299',
        batteryPrice: '$79'
    },
    {
        pid: 'N9',
        name:'Note 9',
        screenRepairPrice: '$259',
        batteryPrice: '$69'
    },
    {
        pid: 'N8',
        name:'Note 8',
        screenRepairPrice: '$239',
        batteryPrice: '$69'
    },
    
]
