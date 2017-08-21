
console.log("使用-闭包;");


;(function( window, $ ){
    
    var chapterSet = [
        {
            'chapter_id':"1001",
            'chapter_name':"第一章 乾坤",
            'is_download': false,
        },
        {
            'chapter_id':"1002",
            'chapter_name':"第二章 天地",
            'is_download': false,
        },
        {
            'chapter_id':"1003",
            'chapter_name':"第三章 阴阳",
            'is_download': false,
        }
    ];
    
    // "https://www.gonglong.com",
    var mockURL = "https://www.gonglong.com";
    
    downloadChapters_error( chapterSet );
    
    /**
     * 下载 章节 -- 错误示例.<br/>
     * 
     * @param {Array}   chapters 
     * @param {String}  chapters[].chapter_id    章节id.
     * @param {String}  chapters[].chapter_name  章节名.
     * @param {Boolean} chapters[].is_download   下载标记.
     * 
     **/
    function downloadChapters_error (chapters) {
        
        console.log( "下载 章节 -- 错误示例!" );
        console.log( "%c数组:" + chapters.length , "background:yellow;font-size:30px;");
        
        $.ajax({
        	type:"get",
        	url: mockURL, 
        	timeout:800,
        	async:true,
        	success:function( result ){
        	    console.log("%c 请求成功!", "background:green;font-size:25px;");
        	},
        	error:function( result ){
                console.log("%c 请求失败!", "background:red;font-size:25px;");
                
                
                console.log("%c本次处理数据:" + JSON.stringify( chapters[0] ), "background:#6bda6b;" );
                
                chapters.shift();
                
                if( chapters.length > 0 ) {
                    downloadChapters_error(chapters);
                }
            },
        	
        });
        
        
        var temp=[];
        for(var i=0,len=9; i<len;i++){
            temp.push({
                'name': "john_"+i,
                'age': 18+i,
            });
        }
        
        console.log( JSON.stringify(temp) );
    };
    
    /**
     * 下载 章节 -- 正确示例.<br/>
     * 
     * @param {Array}   chapters 
     * @param {String}  chapters[].chapter_id    章节id.
     * @param {String}  chapters[].chapter_name  章节名.
     * @param {Boolean} chapters[].is_download   下载标记.
     * 
     **/
    function downloadChapters_correct (chapters) {
        
    };
    
    
}(window, jQuery));
