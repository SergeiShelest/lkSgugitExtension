$(document).ready(function(){
    $('#report-type').selectize({
        create: true,
        sortField: 'text'
    })
    $('#discipline').selectize({
        create: true,
        sortField: 'text'
    });
    $('#teacher').selectize({
        create: true,
        sortField: 'text'
    })
    $('#Caphedre').selectize({
        create: true,
        sortField: 'text'
    })

    $('<input/>',{
        type: 'text',
        id: "searchInput"
    }).appendTo('.header-add-content')
        .keyup(function() {
            let inputVal = $(this).val().toLowerCase()

            $.each($(".content-list"), function(index, content){
                let text = content.innerText.toLowerCase()

                if(text.includes(inputVal)){
                    $(content).css("display", "flex")
                }
                else {
                    $(content).css("display", "none")
                }
            })
        })
})
