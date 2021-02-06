$(document).ready(function(){
    $.each([
        "#report-type",
        "#discipline",
        "#teacher",
        "#Caphedre"
    ], function (index, sel) {
        $(sel).val("").selectize({
            create: true,
            sortField: 'text',
        })
    })

    $.each($(".column-6"), function (index, el) {
        el.innerText = el.innerText.replace("Кафедра ", "")
        el.innerText = el.innerText.charAt(0).toUpperCase() + el.innerText.slice(1);
    })

    $("<input/>", {
        type: "text",
        id: "searchInput"
    }).appendTo(".header-add-content")
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
