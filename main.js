  function add(){
      var d = new Date();
      //alert(d);
        //alert(row);
         var id = document.getElementById("id").value;
        var title = document.getElementById("title").value;
        var author = document.getElementById("author").value;
          var category = document.getElementById("category").value;
           var files = sessionStorage.getItem('img');
         var content = document.getElementById("content").value;
        var date = document.getElementById("date").value;

        if( title != '' && author != '' && content != '' && date != '' ){
          //addSession(nickname1);
          $('#table').prepend(
          `<tr>
                        <td>`+id+`</td>
                        <td>`+ author +`</td>
                        <td>`+category+`</td>
                        <td>` +title+ `</td>
                         <td><img src="`+ files +`" style="width: 70px; height: 70px;"></td>
                        <td>`+ content+ `</td>
                        <td>` + date+ `</td>
                        <td>
                         <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal1" data-whatever="@mdo" ><i class="fa fa-eye"></i></button>
                         <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1" data-whatever="@fat"  > <i class="fa fa-edit"></i></button>  
                          <a class="btn btn-danger" href="#" ><i class="fa fa-trash"></i></a> </td>
                          </tr>`
          );

          //alert(sessionStorage.getItem("yourName"));
        //window.location= 'post.html#comments';
        $("#success-alert").show();
        window.setTimeout(function (){
          $("#success-alert").hide();
        },2000);
        document.getElementById("id").value = '';
        document.getElementById("title").value = '';
        document.getElementById("author").value = '';
        document.getElementById("category").value = '';
        document.getElementById("content").value = '';
        document.getElementById("date").value = '';
        }
        else{
           $("#success-alert2").show();
        window.setTimeout(function (){
          $("#success-alert2").hide();
        },2000);
        }   
    }

     function addCa(){
        var d = new Date();
       // alert(d);
        //alert(row);
          var ti = document.getElementById("titleCa").value;
         var des = document.getElementById("descriptionCa").value;
       
       //var admin = $("input[name='drone']:checked").val();
        //alert(admin);
        if( ti != '' && des != '' ){
            //addSession(nickname1);
            //alert("OK");
            $('#tableCa').prepend(
            `<tr>
      <td>`+ti+`</td>
      <td>`+d+`</td>
      <td></td>
      <td></td>
      <td>
        <div class="btn-group">
                         <button type="button" onclick="showedit()"  class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@fat"  > <i class="fa fa-edit"></i></button>  
                          <a class="btn btn-danger" href="#" ><i class="fa fa-trash"></i></a> 
        </div>
      </td>
    </tr>`
            );

            //alert(sessionStorage.getItem("yourName"));
        //window.location= 'post.html#comments';
        $("#success-alert").show();
        window.setTimeout(function (){
            $("#success-alert").hide();
        },2000);
        // document.getElementById("id").value = '';
        // document.getElementById("title").value = '';
        // document.getElementById("author").value = '';
        // document.getElementById("category").value = '';
        // document.getElementById("content").value = '';
        // document.getElementById("date").value = '';
        }
        else{
             $("#success-alert2").show();
        window.setTimeout(function (){
            $("#success-alert2").hide();
        },2000);
        }   
    }

      function addUser(){
        var d = new Date();
        //alert(d);
        //alert(row);
          var id = document.getElementById("id").value;
         var username = document.getElementById("username").value;
        var fullname = document.getElementById("fullname").value;
        var email = document.getElementById("email").value;
          var date = document.getElementById("date").value;
         var files = sessionStorage.getItem('img');
        var password = document.getElementById("password").value;
        var repassword = document.getElementById("repassword").value;
        //alert


       var admin = $("input[name='drone']:checked").val();
        //alert(admin);
        if( username != '' && email != '' && password != '' && repassword != '' ){
            //addSession(nickname1);
            $('#table').prepend(
            ` <tr>
                      <td>`+id+`</td>
                      <td>`+fullname+`</td>
                      <td><img src="`+ files +`" style="width: 70px; height: 70px;"></td>
                      <td>`+date+`</td>
                      <td>`+ email +`</td>
                      <td>`+ admin +`</td>
                       <td>
                         <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" ><i class="fa fa-eye"></i></button>
                         <button type="button" onclick="showedit()"  class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@fat"  > <i class="fa fa-edit"></i></button>  
                          <a class="btn btn-danger" href="#" ><i class="fa fa-trash"></i></a> </td>
                    </tr>`
            );

            //alert(sessionStorage.getItem("yourName"));
        //window.location= 'post.html#comments';
        $("#success-alert").show();
        window.setTimeout(function (){
            $("#success-alert").hide();
        },2000);
        document.getElementById("id").value = '';
        document.getElementById("title").value = '';
        document.getElementById("author").value = '';
        document.getElementById("category").value = '';
        document.getElementById("content").value = '';
        document.getElementById("date").value = '';
        }
        else{
             $("#success-alert2").show();
        window.setTimeout(function (){
            $("#success-alert2").hide();
        },2000);
        }   
    }

    function addRole(){
        var d = new Date();
        //alert(d);
        //alert(row);
          var nameRole = document.getElementById("nameRole").value;
         var description = document.getElementById("description").value;
       
       //var admin = $("input[name='drone']:checked").val();
        //alert(admin);
        if( nameRole != '' && description != '' ){
            //addSession(nickname1);
            $('#tab').prepend(
            `<tr>
      <td>`+nameRole+`</td>
      <td>`+d+`</td>
      <td></td>
      <td>`+description+`</td>
      <td>
        <div class="btn-group">
                         <button type="button" onclick="showedit()"  class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@fat"  > <i class="fa fa-edit"></i></button>  
                          <a class="btn btn-danger" href="#" ><i class="fa fa-trash"></i></a> 
        </div>
      </td>
    </tr>`
            );

            //alert(sessionStorage.getItem("yourName"));
        //window.location= 'post.html#comments';
        $("#success-alert").show();
        window.setTimeout(function (){
            $("#success-alert").hide();
        },2000);
        // document.getElementById("id").value = '';
        // document.getElementById("title").value = '';
        // document.getElementById("author").value = '';
        // document.getElementById("category").value = '';
        // document.getElementById("content").value = '';
        // document.getElementById("date").value = '';
        }
        else{
             $("#success-alert2").show();
        window.setTimeout(function (){
            $("#success-alert2").hide();
        },2000);
        }   
    }
    // function addSession(val){
    //  sessionStorage.setItem("yourName", val);
    // }
    function showedit(){
                 //var selectedRow = $(this).closest('tr');
        //   var selectedRow = $(this).closest('tr').find('td:nth-child(1)').text();;
        //   // var row = selectedRow;
        //    // var child = row.children();
        //     console.log(selectedRow);
        //     //alert(child.eq(1).text());
           
        // //     var CGName = child.eq(0).text();
        // //     var CGName = child.eq(1).text();
        // //     var CGName = child.eq(2).text();
        // //     var CGName = child.eq(3).text();
        // // alert("ok");
        //  document.getElementById("title1").value = child.eq(0).text();
        // document.getElementById("author1").value = child.eq(1).text();
        //   document.getElementById("category1").value = child.eq(2).text();
        //  document.getElementById("content1").value = child.eq(3).text();
        // document.getElementById("date1").value = child.eq(4).text();
    }
    function edit(){
       
        var id = document.getElementById("id1").value;
        var title = document.getElementById("title1").value;
        var author = document.getElementById("author1").value;
          var category = document.getElementById("category1").value;
         var content = document.getElementById("content1").value;
        var date = document.getElementById("date1").value;

                $('#table').prepend(
            `<tr>
                        <td>`+id+`</td>
                        <td>`+ author +`</td>
                        <td>`+category+`</td>
                        <td>` +title+ `</td>
                        <td>`+ content+ `</td>
                        <td>` + date+ `</td>
                        <td>
                         <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal1" data-whatever="@mdo" ><i class="fa fa-eye"></i></button>
                         <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1" data-whatever="@fat"  > <i class="fa fa-edit"></i></button>  
                          <a class="btn btn-danger" href="#" ><i class="fa fa-trash"></i></a> </td>
                          </tr>`
            );
            //alert(sessionStorage.getItem("yourName"));
        //window.location= 'post.html#comments';
        $("#success-alert1").show();
        window.setTimeout(function (){
            $("#success-alert1").hide();
        },2000);
                                   
      //});
    }

    $(function() {
                $('#dtHorizontalExample').on('click', 'tbody tr', function(event) {
                   // document.getElementById("postForm").action= "admin.php?controller=product_researcher&act=edit";

                $(this).addClass('highlight').siblings().removeClass('highlight');
                var id = $(this).closest('.highlight').find('td:nth-child(1)').text();
                var title = $(this).closest('.highlight').find('td:nth-child(4)').text();
                var author = $(this).closest('.highlight').find('td:nth-child(2)').text();
                var category = $(this).closest('.highlight').find('td:nth-child(3)').text();
                var content = $(this).closest('.highlight').find('td:nth-child(5)').text();
                var date = $(this).closest('.highlight').find('td:nth-child(6)').text();
               //alert(idProduct); 
                document.getElementById("id1").value = id;
                document.getElementById("title1").value = title;
                document.getElementById("author1").value = author;
                document.getElementById("category1").value = category;
                document.getElementById("content1").value = content;
                document.getElementById("date1").value = date;

                //$(this).closest('.highlight').find('td:nth-child(4)').val("ok");
                                   
      });
    });

     $(function() {
                $('#dtHorizontalExample').on('click', 'tbody tr', function(event) {
                   // document.getElementById("postForm").action= "admin.php?controller=product_researcher&act=edit";

                $(this).addClass('highlight').siblings().removeClass('highlight');
                var id = $(this).closest('.highlight').find('td:nth-child(1)').text();
                var title = $(this).closest('.highlight').find('td:nth-child(4)').text();
                var author = $(this).closest('.highlight').find('td:nth-child(2)').text();
                var category = $(this).closest('.highlight').find('td:nth-child(3)').text();
                var content = $(this).closest('.highlight').find('td:nth-child(5)').text();
                var date = $(this).closest('.highlight').find('td:nth-child(6)').text();
               //alert(idProduct); 
                document.getElementById("id1").value = id;
                document.getElementById("title1").value = title;
                document.getElementById("author1").value = author;
                document.getElementById("category1").value = category;
                document.getElementById("content1").value = content;
                document.getElementById("date1").value = date;

                //$(this).closest('.highlight').find('td:nth-child(4)').val("ok");
                                   
      });
    });

    function subscribe(){
      var yourName = document.getElementById("yourName").value;
        var email = document.getElementById("email").value;
      if( yourName != '' && email != ''){
       $("#success-alert1").show();
        window.setTimeout(function (){
          $("#success-alert1").hide();
        },2000);
      }
      else{
        $("#success-alert2").show();
        window.setTimeout(function (){
          $("#success-alert2").hide();
        },2000);
      }
       
    }
    function reply(a){
        var name = sessionStorage.getItem("yourName");
        var reply = document.getElementById("reply"+a).value;
            var d = new Date();

 $('.reply'+ a).append(
        `<ul class="children">
        <li class="comment">
          <div class="comment-block">
          <a href="#" class="image-avatar">
            <img src="images/photos/avatar-1.jpg" data-ot-retina="images/photos/avatar-1@2x.jpg" alt="" title="" />
          </a>
          <div class="comment-text">
            <span class="time-stamp right">` + d + `</span>
              <strong class="user-nick"><a href="#">`+ name +`</a></strong>
              <div class="shortcode-content">
              <p>` + reply + `</p>
                              </div>
                            
                            </div>
                          </div>
                        </li>
                      </ul>`);

    }
   
    $(document).ready (function(){
      $("#success-alert").hide();
      $("#success-alert1").hide();
      $("#success-alert2").hide();
      $("#success-alert3").hide();
      //alert(email);
   //   var email = sessionStorage.getItem("email");
      //alert(email);
      if(email == null )
      {
   //     window.location = 'https://hanu98.github.io/Admin/';
      }
      // $("#myWish").click(function showAlert(){
      //  $("#success-alert").alert();
      // })
    });

     $('#table').on('click', '.fa-trash', function (e) {
                var selectedRow = $(this).closest('tr');
                selectedRow.remove();
                $("#success-alert3").show();
            window.setTimeout(function (){
              $("#success-alert3").hide();
            },2000);
            });

     $('#tableCa').on('click', '.fa-trash', function (e) {
                var selectedRow = $(this).closest('tr');
                selectedRow.remove();
                $("#success-alert3").show();
            window.setTimeout(function (){
              $("#success-alert3").hide();
            },2000);
            });


     function logout(){
  sessionStorage.removeItem("email");
  window.location = 'https://hanu98.github.io/Admin/';
 }


     function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          var span = document.createElement('span');

          sessionStorage.setItem("img", e.target.result);
          span.innerHTML = ['<img class="thumb" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
          document.getElementById('list').insertBefore(span, null);
        };


      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }

  document.getElementById('files').addEventListener('change', handleFileSelect, false);

     