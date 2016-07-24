angular.module('app').factory('$fangkeBar', function($compile) {
		return {
			open: function(_obj, scope) {
				if($('#fangke_sideBar_12032331').length !=0){
					return false;
				}
				if(!_obj){
					console.log('请添加sideBar－open方法的第一个配置参数');
					return false;
				}
				if(!scope){
					console.log('请将控制器的作用域设置为open方法第二个参数');
					return false;
				}
				//设置侧边栏默认位置
				if(!_obj.position){
					_obj.position = {
						width:400,
						top:0,
						bottom:0
					}
				}
				var tpl1 = "<div id='fangke_sideBar_12032331' style='position: fixed;background: #fff;overflow:hidden;";
				var tpl_top = "top: " + _obj.position.top + "px;"
				var tpl_bottom = "bottom: " + _obj.position.bottom + "px;"
				var tpl_width = "width: " + _obj.position.width + "px;"
				var tpl_right = "right: " + _obj.position.width*-1 + "px;"
				var tpl2 = "box-shadow: -2px 0 4px rgba(0, 0, 0, 0.2);z-index: 2000;'><div style='width;100%;height:100%' data-ng-include=";
				var tpl_url = "'" + _obj.templateUrl + "'";
				var tpl3 = "></div></div>";
				var tpl4 = '"';
				//组装html dom模版，规避引号的多次套用
				var tpl = tpl1 + tpl_top + tpl_bottom + tpl_width + tpl_right + tpl2 + tpl4 + tpl_url + tpl4 + tpl3;
				console.log(tpl);
				$('#'+_obj.id).after($compile(tpl)(scope));
				$('#fangke_sideBar_12032331').animate({'right': '0'}, _obj.speed||300);
			},
			close: function(_speed){
				if($('#fangke_sideBar_12032331').length !=0){
					var _right = $('#fangke_sideBar_12032331').width() * -1;
					$('#fangke_sideBar_12032331').animate({'right': _right}, _speed||300, function(){
						$('#fangke_sideBar_12032331').remove();
					});
				}else{
					return false;
				}
			}
		};
	});
