            var images = [];
            var names =[];
            var i = 0;

            function update() {
                i++;
                var numbers_of_people = 5
                if (i > numbers_of_people) {
                    i = 0;
                }
                var updatedImage = images[i];
               
                document.getElementById("family_member_image").src = updatedImage;
                
            }
