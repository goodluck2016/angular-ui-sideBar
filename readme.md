Angular Screenfull
==================
## Author
	yangxi(fangke) fangke@mogujie.com||599321378@qq.com

## Install

#### Download via bower or look for the files in the dist folder

    bower install --save-dev angular-ui-sideBar

#### Import it to your page

    <script src="bower_components/angular-ui-sideBar/sideBar.js"></script>

#### Enable it on your app

    angular.module('myModule', ['$fangkeBar']);

## Use it
	
	...
	var ctrl = this;
	var demo1 = {
		init: function() {
			ctrl.name = "demo1";
			ctrl.open = this.open.bind(this);
			ctrl.close = this.close.bind(this);
		},
		open: function() {
			$fangkeBar.open({
				id: 'fangke',
				templateUrl: "app/demo/demo1/tmp.html",
				//is not necessary
				position:{
					top:50,//default => 0
					bottom:0, //default => 0
					width:500	//default => 400
				},
				//is not necessary
				speed: 100 //open speed, default => 300
			}, $scope);
		},
		close: function() {
			$fangkeBar.close(100);//close speed, default => 300
		}
	};
	demo1.init();
	...

```html
