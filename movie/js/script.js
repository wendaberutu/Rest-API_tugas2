function searchMovie(){
    $('#movie-list').html('');

    $.ajax({
        url:'http://omdbapi.com',
        type:'get',
        dataType :'json',
        data: {
            'apikey' :'cee70945',
            's' : $('#search-input').val()
        },
        success : function(result){
            if(result.Response =="True"){
                let movies = result.Search;

                $.each(movies, function(i,data){
                    $('#movie-list').append(`
                        <div class="col-md-4">
                       <div class="card" style="width: 18rem;">
                        <img src="`+data.Poster+`" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">`+data.Title+`</h5>
                           <h6 class="card-subtitle mb-2 text-body-secondary">`+data.Year+`</h6>
                         <a href="#" class="card-link" data-bs-toggle="modal" data-bs-target="#exampleModal">Detail</a>
                          </div>
                            </div> 
                            </div>`
                    );
                });

                $('#search-input').val('');

            }else {
                $('#movie-list').html(`
                    <div class="col>
                    <h1 class ="text-center">`+ result.Error+ `<h1>
                    </div>
                    `)
            }

        }
    });
}
$('#search-button').on('click',function(){
   searchMovie();
});
$('#search-input').on('keyup',function(e){
    if(e.keyCode ===13){
        searchMovie();
    }
});