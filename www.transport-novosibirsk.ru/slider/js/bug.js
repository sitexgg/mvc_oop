    
        jssor_1_slider_init = function() {
            
            var jssor_1_SlideshowTransitions = [
              {$Duration:1000,$Delay:80,$Cols:8,$Rows:4,$Clip:15,$SlideOut:true,$Easing:$Jease$.$OutQuad},
              {$Duration:1200,y:0.3,$Cols:2,$During:{$Top:[0.3,0.7]},$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1000,x:-1,y:2,$Rows:2,$Zoom:11,$Rotate:1,$SlideOut:true,$Assembly:2049,$ChessMode:{$Row:15},$Easing:{$Left:$Jease$.$InExpo,$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InExpo},$Opacity:2,$Round:{$Rotate:0.85}},
              {$Duration:1200,x:4,$Cols:2,$Zoom:11,$SlideOut:true,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1000,x:4,y:-4,$Zoom:11,$Rotate:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InExpo,$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InExpo},$Opacity:2,$Round:{$Rotate:0.8}},
              {$Duration:1500,x:0.3,y:-0.3,$Delay:80,$Cols:8,$Rows:4,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Clip:$Jease$.$OutQuad},$Round:{$Left:0.8,$Top:2.5}},
              {$Duration:1000,x:-3,y:1,$Rows:2,$Zoom:11,$Rotate:1,$SlideOut:true,$Assembly:2049,$ChessMode:{$Row:28},$Easing:{$Left:$Jease$.$InExpo,$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InExpo},$Opacity:2,$Round:{$Rotate:0.7}},
              {$Duration:1200,y:-1,$Cols:8,$Rows:4,$Clip:15,$During:{$Top:[0.5,0.5],$Clip:[0,0.5]},$Formation:$JssorSlideshowFormations$.$FormationStraight,$ChessMode:{$Column:12},$ScaleClip:0.5},
              {$Duration:1000,x:0.5,y:0.5,$Zoom:1,$Rotate:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.5}},
              {$Duration:1200,x:-0.6,y:-0.6,$Zoom:1,$Rotate:1,$During:{$Left:[0.2,0.8],$Top:[0.2,0.8],$Zoom:[0.2,0.8],$Rotate:[0.2,0.8]},$Easing:{$Zoom:$Jease$.$Swing,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$Swing},$Opacity:2,$Round:{$Rotate:0.5}},
              {$Duration:1500,y:-0.5,$Delay:60,$Cols:15,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationCircle,$Easing:$Jease$.$InWave,$Round:{$Top:1.5}},
              {$Duration:1000,$Delay:30,$Cols:8,$Rows:4,$Clip:15,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:2050,$Easing:$Jease$.$InQuad},
              {$Duration:1200,$Delay:20,$Clip:3,$SlideOut:true,$Assembly:260,$Easing:{$Clip:$Jease$.$OutCubic,$Opacity:$Jease$.$Linear},$Opacity:2}
            ];
            
            var jssor_1_SlideoTransitions = [
              [{b:-1,d:1,rY:90},{b:8500,d:1000,o:-1,rY:-90}],
              [{b:-1,d:1,o:-1},{b:0,d:480,x:-300,o:1},{b:1000,d:500,x:-370}],
              [{b:480,d:520,x:100,y:-320}],
              [{b:1500,d:500,y:250},{b:8500,d:1000,x:600}],
              [{b:-1,d:1,o:-1,sX:-0.6,sY:-0.6},{b:2000,d:500,o:1,r:360,sX:0.6,sY:0.6},{b:8500,d:1000,y:-150}],
              [{b:-1,d:1,o:-1,tZ:-200},{b:2500,d:1000,o:1,tZ:200},{b:3500,d:1000,o:-1,tZ:200}],
              [{b:-1,d:1,o:-1,tZ:-200},{b:3500,d:1000,o:1,tZ:200},{b:4500,d:1000,o:-1,tZ:200}],
              [{b:-1,d:1,o:-1,tZ:-200},{b:4500,d:1000,o:1,tZ:200},{b:5500,d:1000,o:-1,tZ:200}],
              [{b:-1,d:1,o:-1,tZ:-200},{b:5500,d:1000,o:1,tZ:200},{b:6500,d:1000,o:-1,tZ:200}],
              [{b:-1,d:1,o:-1,tZ:-200},{b:6500,d:1000,o:1,tZ:200},{b:7500,d:1000,o:-1,tZ:200}],
              [{b:-1,d:1,o:-1,tZ:-200},{b:7500,d:1000,o:1,tZ:200},{b:8500,d:1000,o:-1,tZ:200}],
              [{b:-1,d:1,c:{x:250.0,t:-250.0}},{b:0,d:1000,c:{x:-250.0,t:250.0}},{b:5000,d:1000,y:100}],
              [{b:-1,d:1,o:-1},{b:1000,d:1000,o:1},{b:5000,d:1000,y:280}],
              [{b:2000,d:1000,y:190,e:{y:28}},{b:5000,d:1000,x:280}],
              [{b:3000,d:520,y:50},{b:5000,d:1000,y:-50}],
              [{b:3520,d:480,x:-400},{b:5000,d:800,x:400,e:{x:7}}],
              [{b:4000,d:500,x:-400},{b:5000,d:800,x:400,e:{x:7}}],
              [{b:4500,d:500,x:-400},{b:5000,d:800,x:400,e:{x:7}}],
              [{b:-1,d:1,c:{x:250.0,t:-250.0}},{b:0,d:1000,c:{x:-250.0,t:250.0}},{b:10000,d:500,y:90}],
              [{b:-1,d:1,c:{x:150.0,t:-150.0}},{b:1000,d:1000,c:{x:-150.0,t:150.0}},{b:10000,d:500,c:{y:150.0,m:-150.0}}],
              [{b:2000,d:500,x:220}],
              [{b:3500,d:500,rX:-20},{b:4000,d:1000,rX:40},{b:5000,d:500,rX:-10},{b:9500,d:500,o:-1}],
              [{b:3500,d:2000,r:360}],
              [{b:-1,d:1,o:-1},{b:2500,d:500,x:76,y:-25,o:1}],
              [{b:-1,d:1,o:-1},{b:2500,d:500,x:47,y:65,o:1}],
              [{b:-1,d:1,o:-1},{b:2500,d:500,x:-47,y:65,o:1}],
              [{b:-1,d:1,o:-1},{b:2500,d:500,x:-76,y:-25,o:1}],
              [{b:-1,d:1,o:-1},{b:2500,d:500,y:-80,o:1}],
              [{b:-1,d:1,c:{x:120.0,t:-120.0}},{b:6100,d:400,c:{x:-120.0,t:120.0}},{b:10000,d:500,y:-120}],
              [{b:6500,d:500,x:220}],
              [{b:-1,d:1,o:-1,r:180,sX:-0.5,sY:-0.5},{b:7000,d:500,o:1,r:180,sX:0.5,sY:0.5},{b:8000,d:500,o:-1,r:180,sX:9,sY:9}],
              [{b:-1,d:1,o:-1,r:180,sX:-0.5,sY:-0.5},{b:8000,d:500,o:1,r:180,sX:0.5,sY:0.5},{b:9000,d:500,o:-1,r:180,sX:9,sY:9}],
              [{b:-1,d:1,o:-1,r:180,sX:-0.5,sY:-0.5},{b:9000,d:500,o:1,r:180,sX:0.5,sY:0.5},{b:9500,d:500,o:-1,r:180,sX:9,sY:9}]
            ];
            
            var jssor_1_options = {
              $AutoPlay: true,
              $SlideDuration: 800,
              $SlideEasing: $Jease$.$OutQuint,
              $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: jssor_1_SlideshowTransitions,
                $TransitionsOrder: 1
              },
              $CaptionSliderOptions: {
                $Class: $JssorCaptionSlideo$,
                $Transitions: jssor_1_SlideoTransitions,
                $Breaks: [
                  [{d:3000,b:8500,t:2}],
                  [{d:2000,b:5000}],
                  [{d:3000,b:9500,t:2}]
                ]
              },
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };
            
            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
            
            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizing
            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 980);
                    jssor_1_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", ScaleSlider);
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            //responsive code end
        };


   