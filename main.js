var canvas=new fabric.canvas("myCanvas");
block_width=30;
block_height=30;
player_image="";
block_image="";

function player_update(){
    fabric.Image.fromURL("player.jpg",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            left:player_x,
            top:player_y

        });
        canvas.add(player_object);
    });
}
function new_image(){
    fabric.Image.fromURL(getImage,function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            left:player_x,
            top:player_y

        });
        canvas.add(block_object);
    });
}