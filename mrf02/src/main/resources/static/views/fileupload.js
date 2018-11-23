//图片上传初始化fileinput
function FileInput () {
    var oFile = new Object();

    //初始化fileinput控件（第一次初始化）
    oFile.Init = function(ctrlName, uploadUrl, pic ,checkFlag,picSize) {
        var control = $('#' + ctrlName);

        //初始化上传控件的样式
        control.fileinput({
            uploadAsync: false, //默认异步上传
            language: 'zh', //设置语言
            uploadUrl: uploadUrl, //上传的地址
            allowedFileExtensions: ['jpg', 'gif', 'png'],//接收的文件后缀
            uploadExtraData:function (){
                var data = {
                    transCode : "upload"
                }
                return data;
            },
            showUpload: false, //是否显示上传按钮
            showRemove: false,
            showCaption: false,//是否显示标题
            browseClass: "btn btn-primary", //按钮样式
            //dropZoneEnabled: false,//是否显示拖拽区域
            minImageWidth:picSize.minImageWidth, //图片的最小宽度
            minImageHeight:picSize.minImageHeight,//图片的最小高度
            maxImageWidth: picSize.maxImageWidth,//图片的最大宽度
            maxImageHeight: picSize.maxImageHeight,//图片的最大高度
            maxFileSize: 0,//单位为kb，如果为0表示不限制文件大小
            //minFileCount: 0,
            maxFileCount: 1, //表示允许同时上传的最大文件个数
            enctype: 'multipart/form-data',
            validateInitialCount:true,
            previewFileIcon: "<i class='glyphicon glyphicon-king'></i>",
            msgFilesTooMany: "只能上传一个文件",
            layoutTemplates:{
                // actionDelete :'',
                //actionUpload:''
            },
            initialPreview: [        //这里配置需要初始展示的图片连接数组，字符串类型的，通常是通过后台获取后然后组装成数组直接赋给initialPreview就行了
                //"http://......img",
                // "http://......img",
            ],
            initialPreviewConfig: [ //配置预览中的一些参数
                {caption: "transport-1.jpg", size: 329892, width: "120px", url: "deletePic", key: 1},
                {caption: "transport-2.jpg", size: 872378, width: "120px", url: "deletePic", key: 2}
            ],
            autoReplace:true
        }).on('fileuploaded',function(event,data,previewid,index){
            if(data.response.body.fileName){
                pic['url']= data.response.body.fileName;
            }
            pic['checkFlag']= checkFlag;

            if(checkFlag){
                $('.previewPic').attr('src',CONFIG.MK_PICURL+data.response.body.fileName);
            }
            $('#' + ctrlName).parent().hide();
            //   $('#active-small-pic').attr('disabled',true)

        }).on("filesuccessremove", function (event, data, previewId, index) {
            //$('#' + ctrlName).attr('disabled',false)
            pic.url ='';
            $('#' + ctrlName).parent().show();
        }).on("filedelete", function (event, data, previewId, index) {
            console.log('filedelete');
            //pic.url ='';
        }).on("filepreremove", function (event, data, previewId, index) {
            console.log('filepreremove');
            pic.url ='';
        })

    }
    return oFile;
}
