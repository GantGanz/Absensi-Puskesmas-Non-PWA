const _0x59a706=_0x12ab;(function(_0x5d8e79,_0x627ada){const _0x2ecddd=_0x12ab,_0x2075b9=_0x5d8e79();while(!![]){try{const _0x1fc7be=-parseInt(_0x2ecddd(0xd3))/0x1*(-parseInt(_0x2ecddd(0x10e))/0x2)+-parseInt(_0x2ecddd(0x11c))/0x3*(parseInt(_0x2ecddd(0xc9))/0x4)+parseInt(_0x2ecddd(0xf8))/0x5*(parseInt(_0x2ecddd(0x11e))/0x6)+-parseInt(_0x2ecddd(0xca))/0x7+-parseInt(_0x2ecddd(0xbc))/0x8*(parseInt(_0x2ecddd(0xbd))/0x9)+-parseInt(_0x2ecddd(0xdf))/0xa*(parseInt(_0x2ecddd(0xe8))/0xb)+parseInt(_0x2ecddd(0x106))/0xc*(parseInt(_0x2ecddd(0xf6))/0xd);if(_0x1fc7be===_0x627ada)break;else _0x2075b9['push'](_0x2075b9['shift']());}catch(_0x53180f){_0x2075b9['push'](_0x2075b9['shift']());}}}(_0x14ec,0x2861a));const signupForm=document[_0x59a706(0x125)](_0x59a706(0x10b)),logout=document[_0x59a706(0x125)]('#logout'),loginForm=document[_0x59a706(0x125)]('#login-form'),captureForm=document[_0x59a706(0x125)](_0x59a706(0x122));let capture=document['querySelector'](_0x59a706(0x102)),submitCapture=document[_0x59a706(0x125)](_0x59a706(0xd2)),fotoCaptured=document['querySelector'](_0x59a706(0x115)),fotoPresensi=null;var file=null,storageRef=null;function _0x14ec(){const _0x1d95b2=['.png','#pesan-signup','target','onload','username','#submit-capture','245087EPcvpN','display','signup-nip','className','alert\x20alert-danger\x20mx-auto','createObjectURL','none','now','Timestamp','Password','login-username','Nama','667300CeecFs','location','File\x20yang\x20sudah\x20dikirim\x20tidak\x20dapat\x20dihapus.\x20Lanjutkan?','login.html','forEach','createElement','Maaf,\x20koneksi\x20anda\x20bermasalah\x20atau\x20server\x20down','src','width','11GvIVZR','URL','toDate','level','alert-presensi','catch','Maaf,\x20Username\x20sudah\x20terdaftar','alert-login','alert-signup','block','bg-loader','get','collection','getElementById','19903XohGNL','height','5860rcdGmO','style','getMonth','addEventListener','password','image/png','Akun\x20berhasil\x20didaftarkan','drawImage','submit','ref','#capture','loader','change','Level','516yaQWRe','signup-nama','signup-username','log','/\x2023:59:59','#signup-form','readAsDataURL','firestore','2eocWOA','files','Username','Error\x20checking\x20document','signup-password','getItem','size','#foto-captured','docs','toDataURL','canvas','getFullYear','getDate','where','468lbeFuq','setItem','1242lZqCbV','login-password','Admin','split','#capture-form','reset','href','querySelector','/\x2000:00:00','reload','preventDefault','getContext','data','foto_presensi/','value','onSnapshot','removeItem','img','put','name','2616eklkXG','6273hdSNWL','innerHTML','NIP','slice','presensi','users','message','add','length','index.html','valueOf','then','544lVBuNl','505799gLZOqJ','Mohon\x20masukkan\x20foto\x20hari\x20ini\x20dengan\x20menggunakan\x20smartphone','nama'];_0x14ec=function(){return _0x1d95b2;};return _0x14ec();}function _0x12ab(_0x11acfb,_0x2ff9b9){const _0x14ecb3=_0x14ec();return _0x12ab=function(_0x12abc8,_0x40791c){_0x12abc8=_0x12abc8-0xb1;let _0xfe8844=_0x14ecb3[_0x12abc8];return _0xfe8844;},_0x12ab(_0x11acfb,_0x2ff9b9);}fotoCaptured&&(capture[_0x59a706(0xfb)](_0x59a706(0x104),_0x876d23=>{const _0x50af96=_0x59a706;fotoPresensi=window[_0x50af96(0xe9)][_0x50af96(0xd8)](capture[_0x50af96(0x10f)][0x0]),fotoCaptured[_0x50af96(0xe6)]=fotoPresensi,file=_0x876d23[_0x50af96(0xcf)]['files'][0x0],submitCapture['disabled']=![];}),captureForm['addEventListener'](_0x59a706(0x100),_0x4a3dd3=>{const _0x12ee95=_0x59a706;var _0x58da56=confirm(_0x12ee95(0xe1));if(_0x58da56==!![]){_0x4a3dd3[_0x12ee95(0xb2)](),document[_0x12ee95(0xf5)]('loader')[_0x12ee95(0xf9)][_0x12ee95(0xd4)]=_0x12ee95(0xf1),waktuSekarang=firebase[_0x12ee95(0x10d)][_0x12ee95(0xdb)][_0x12ee95(0xda)]();let _0x341af6=0x1,_0x63fca2=waktuSekarang[_0x12ee95(0xea)](),_0x49ce47=_0x63fca2[_0x12ee95(0x11a)](),_0x470702=_0x63fca2[_0x12ee95(0xfa)]()+0x1,_0xbe1be5=_0x63fca2[_0x12ee95(0x119)](),_0x2dcf91=_0xbe1be5+'/'+_0x470702+'/'+_0x49ce47,_0x3c1433=new Date(_0xbe1be5+'/'+_0x470702+'/'+_0x49ce47+_0x12ee95(0x126)),_0x3a618c=new Date(_0xbe1be5+'/'+_0x470702+'/'+_0x49ce47+_0x12ee95(0x10a)),_0x2d3361=new Date(parseInt(file[_0x12ee95(0xbb)][_0x12ee95(0xc0)](0x0,0xd))),_0x3509f5=_0x2d3361[_0x12ee95(0x119)]()+'/'+(_0x2d3361['getMonth']()+0x1)+'/'+_0x2d3361[_0x12ee95(0x11a)](),_0x593701=localStorage[_0x12ee95(0x113)](_0x12ee95(0x110))+'/'+_0x3509f5;storageRef=storage[_0x12ee95(0x101)](_0x12ee95(0xb5)+_0x593701+_0x12ee95(0xcd)),db[_0x12ee95(0xf4)](_0x12ee95(0xc1))[_0x12ee95(0x11b)]('username','==',localStorage['getItem'](_0x12ee95(0x110)))[_0x12ee95(0xf3)]()[_0x12ee95(0xc8)](async _0x27aea2=>{const _0x28db04=_0x12ee95;_0x27aea2[_0x28db04(0xe3)](_0x1a6c12=>{const _0xd36cdb=_0x28db04;if(_0x1a6c12['data']()['waktu'][_0xd36cdb(0xea)]()['valueOf']()>=_0x3c1433[_0xd36cdb(0xc7)]()&&_0x1a6c12[_0xd36cdb(0xb4)]()['waktu'][_0xd36cdb(0xea)]()[_0xd36cdb(0xc7)]()<=_0x3a618c['valueOf']()){_0x341af6==0x1&&(document[_0xd36cdb(0xf5)](_0xd36cdb(0x103))['style'][_0xd36cdb(0xd4)]=_0xd36cdb(0xd9),document[_0xd36cdb(0xf5)](_0xd36cdb(0xec))[_0xd36cdb(0xf9)]['display']=_0xd36cdb(0xf1),submitCapture['disabled']=!![],setTimeout(()=>{const _0x52e47a=_0xd36cdb;document[_0x52e47a(0xf5)](_0x52e47a(0xec))[_0x52e47a(0xf9)][_0x52e47a(0xd4)]=_0x52e47a(0xd9);},0xbb8),_0x341af6++);;}});if(_0x341af6==0x1){if(_0x2dcf91==_0x3509f5){const _0x29b7a4=new FileReader();_0x29b7a4[_0x28db04(0x10c)](file),_0x29b7a4[_0x28db04(0xd0)]=async function(_0xe994d3){const _0x3105f0=_0x28db04,_0x372a80=document[_0x3105f0(0xe4)](_0x3105f0(0xb9));_0x372a80[_0x3105f0(0xe6)]=_0xe994d3['target']['result'],_0x372a80[_0x3105f0(0xd0)]=async function(_0x3464fc){const _0x5d8998=_0x3105f0,_0x430855=document[_0x5d8998(0xe4)](_0x5d8998(0x118)),_0x52cfe0=0x190,_0xc26b99=_0x52cfe0/_0x3464fc[_0x5d8998(0xcf)][_0x5d8998(0xe7)];_0x430855[_0x5d8998(0xe7)]=_0x52cfe0,_0x430855[_0x5d8998(0xf7)]=_0x3464fc[_0x5d8998(0xcf)][_0x5d8998(0xf7)]*_0xc26b99;const _0x1068cd=_0x430855[_0x5d8998(0xb3)]('2d');_0x1068cd[_0x5d8998(0xff)](_0x3464fc[_0x5d8998(0xcf)],0x0,0x0,_0x430855[_0x5d8998(0xe7)],_0x430855[_0x5d8998(0xf7)]);const _0x417cbd=_0x1068cd[_0x5d8998(0x118)][_0x5d8998(0x117)]();var _0x42ae51=atob(_0x417cbd[_0x5d8998(0x121)](',')[0x1]),_0x273f72=new ArrayBuffer(_0x42ae51['length']),_0x13b07a=new Uint8Array(_0x273f72);for(var _0x2cfa2f=0x0;_0x2cfa2f<_0x42ae51[_0x5d8998(0xc5)];_0x2cfa2f++){_0x13b07a[_0x2cfa2f]=_0x42ae51['charCodeAt'](_0x2cfa2f);}var _0x468e86=new Blob([_0x13b07a],{'type':'image/png'}),_0x4cec65=new File([_0x468e86],file[_0x5d8998(0xbb)]),_0x82d691={'cotentType':_0x5d8998(0xfd)};await storageRef[_0x5d8998(0xba)](_0x4cec65,_0x82d691);var _0x5c3e25=await storageRef['getDownloadURL']();db['collection']('presensi')[_0x5d8998(0xc4)]({'username':localStorage[_0x5d8998(0x113)](_0x5d8998(0x110)),'foto':_0x5c3e25,'nama':localStorage['getItem'](_0x5d8998(0xde)),'nip':localStorage['getItem'](_0x5d8998(0xbf)),'waktu':waktuSekarang})[_0x5d8998(0xc8)](()=>location[_0x5d8998(0xb1)]());};};}else document[_0x28db04(0xf5)]('loader')[_0x28db04(0xf9)][_0x28db04(0xd4)]=_0x28db04(0xd9),document[_0x28db04(0x125)]('#alert-presensi-text')[_0x28db04(0xbe)]=_0x28db04(0xcb),document[_0x28db04(0xf5)](_0x28db04(0xec))[_0x28db04(0xf9)][_0x28db04(0xd4)]=_0x28db04(0xf1),setTimeout(()=>{const _0x1fcb20=_0x28db04;document[_0x1fcb20(0xf5)](_0x1fcb20(0xec))[_0x1fcb20(0xf9)][_0x1fcb20(0xd4)]=_0x1fcb20(0xd9);},0xbb8);};})[_0x12ee95(0xed)](_0x4cd66e=>{const _0x280019=_0x12ee95;console[_0x280019(0x109)](_0x280019(0x111),_0x4cd66e);});}}));localStorage['getItem'](_0x59a706(0x105))==_0x59a706(0x120)&&(signupForm&&signupForm[_0x59a706(0xfb)]('submit',_0x42bf67=>{const _0x24362f=_0x59a706;_0x42bf67[_0x24362f(0xb2)](),document[_0x24362f(0xf5)](_0x24362f(0xf0))[_0x24362f(0xf9)][_0x24362f(0xd4)]='none';const _0x2b26ae=signupForm[_0x24362f(0x107)][_0x24362f(0xb6)],_0x1b5e5e=signupForm[_0x24362f(0xd5)]['value'],_0x3103bd=signupForm[_0x24362f(0x108)][_0x24362f(0xb6)],_0x5a35a1=signupForm[_0x24362f(0x112)]['value'],_0x1cbc94=signupForm['signup-level'][_0x24362f(0xb6)];db[_0x24362f(0xf4)](_0x24362f(0xc2))[_0x24362f(0x11b)]('username','==',_0x3103bd)[_0x24362f(0xf3)]()[_0x24362f(0xc8)](_0x5cc36c=>{const _0x40bfd6=_0x24362f;_0x5cc36c[_0x40bfd6(0x114)]>0x0?(document[_0x40bfd6(0xf5)](_0x40bfd6(0xf0))['style'][_0x40bfd6(0xd4)]=_0x40bfd6(0xf1),document[_0x40bfd6(0x125)](_0x40bfd6(0xce))[_0x40bfd6(0xbe)]=_0x40bfd6(0xee),document[_0x40bfd6(0xf5)](_0x40bfd6(0xf0))['className']=_0x40bfd6(0xd7),setTimeout(()=>{const _0x13ee6c=_0x40bfd6;document[_0x13ee6c(0xf5)]('alert-signup')[_0x13ee6c(0xf9)][_0x13ee6c(0xd4)]=_0x13ee6c(0xd9);},0xbb8)):(document[_0x40bfd6(0xf5)]('alert-signup')['style']['display']=_0x40bfd6(0xd9),db['collection'](_0x40bfd6(0xc2))[_0x40bfd6(0xc4)]({'username':_0x3103bd,'nama':_0x2b26ae,'nip':_0x1b5e5e,'password':_0x5a35a1,'level':_0x1cbc94})[_0x40bfd6(0xc8)](()=>{const _0x49a06c=_0x40bfd6;document['querySelector'](_0x49a06c(0xce))[_0x49a06c(0xbe)]=_0x49a06c(0xfe),document[_0x49a06c(0xf5)](_0x49a06c(0xf0))[_0x49a06c(0xd6)]='alert\x20alert-success\x20mx-auto',document['getElementById'](_0x49a06c(0xf0))[_0x49a06c(0xf9)][_0x49a06c(0xd4)]='block',setTimeout(()=>{const _0x5ae3a0=_0x49a06c;document[_0x5ae3a0(0xf5)](_0x5ae3a0(0xf0))[_0x5ae3a0(0xf9)][_0x5ae3a0(0xd4)]=_0x5ae3a0(0xd9);},0xbb8),signupForm[_0x49a06c(0x123)]();})[_0x40bfd6(0xed)](_0x2641a6=>console[_0x40bfd6(0x109)](_0x2641a6[_0x40bfd6(0xc3)])));})['catch'](_0x1e83d7=>{const _0x5612f2=_0x24362f;console[_0x5612f2(0x109)](_0x5612f2(0x111),_0x1e83d7),document[_0x5612f2(0x125)](_0x5612f2(0xce))[_0x5612f2(0xbe)]=_0x5612f2(0xe5);});}));logout&&logout[_0x59a706(0xfb)]('click',_0x2b1d62=>{const _0x1e01bf=_0x59a706;localStorage[_0x1e01bf(0xb8)]('Username'),localStorage[_0x1e01bf(0xb8)](_0x1e01bf(0xde)),localStorage[_0x1e01bf(0xb8)](_0x1e01bf(0xbf)),localStorage[_0x1e01bf(0xb8)](_0x1e01bf(0xdc)),localStorage[_0x1e01bf(0xb8)](_0x1e01bf(0x105)),window['location'][_0x1e01bf(0x124)]='login.html';});loginForm?(db['collection']('users')[_0x59a706(0x11b)](_0x59a706(0xd1),'==',localStorage[_0x59a706(0x113)](_0x59a706(0x110)))[_0x59a706(0x11b)]('password','==',localStorage[_0x59a706(0x113)](_0x59a706(0xdc)))[_0x59a706(0xb7)](_0x2d44b4=>{const _0xb7d972=_0x59a706;_0x2d44b4[_0xb7d972(0x114)]>0x0&&(window['location'][_0xb7d972(0x124)]=_0xb7d972(0xc6));}),loginForm[_0x59a706(0xfb)](_0x59a706(0x100),_0x29dcc0=>{const _0x3ae247=_0x59a706;document[_0x3ae247(0xf5)](_0x3ae247(0x103))['style'][_0x3ae247(0xd4)]=_0x3ae247(0xf1),document[_0x3ae247(0xf5)](_0x3ae247(0xf2))[_0x3ae247(0xf9)]['display']=_0x3ae247(0xf1),_0x29dcc0[_0x3ae247(0xb2)]();const _0x4511cf=loginForm[_0x3ae247(0xdd)][_0x3ae247(0xb6)],_0xda3033=loginForm[_0x3ae247(0x11f)][_0x3ae247(0xb6)];db[_0x3ae247(0xf4)](_0x3ae247(0xc2))[_0x3ae247(0x11b)](_0x3ae247(0xd1),'==',_0x4511cf)[_0x3ae247(0x11b)](_0x3ae247(0xfc),'==',_0xda3033)[_0x3ae247(0xf3)]()[_0x3ae247(0xc8)](_0x4c45b1=>{const _0x23139b=_0x3ae247;_0x4c45b1['size']>0x0?(localStorage[_0x23139b(0x11d)](_0x23139b(0x110),_0x4c45b1['docs'][0x0][_0x23139b(0xb4)]()[_0x23139b(0xd1)]),localStorage[_0x23139b(0x11d)](_0x23139b(0xde),_0x4c45b1['docs'][0x0][_0x23139b(0xb4)]()[_0x23139b(0xcc)]),localStorage['setItem'](_0x23139b(0xbf),_0x4c45b1[_0x23139b(0x116)][0x0]['data']()['nip']),localStorage[_0x23139b(0x11d)](_0x23139b(0xdc),_0x4c45b1['docs'][0x0][_0x23139b(0xb4)]()[_0x23139b(0xfc)]),localStorage[_0x23139b(0x11d)](_0x23139b(0x105),_0x4c45b1[_0x23139b(0x116)][0x0]['data']()[_0x23139b(0xeb)]),window[_0x23139b(0xe0)][_0x23139b(0x124)]=_0x23139b(0xc6)):(document[_0x23139b(0xf5)](_0x23139b(0x103))[_0x23139b(0xf9)]['display']=_0x23139b(0xd9),document[_0x23139b(0xf5)](_0x23139b(0xf2))[_0x23139b(0xf9)]['display']=_0x23139b(0xd9),document[_0x23139b(0xf5)]('alert-login')[_0x23139b(0xf9)][_0x23139b(0xd4)]=_0x23139b(0xf1));})[_0x3ae247(0xed)](function(_0x5d4c86){const _0x5859ae=_0x3ae247;console[_0x5859ae(0x109)]('Error\x20getting\x20document:',_0x5d4c86),document[_0x5859ae(0x125)]('#pesan-login')[_0x5859ae(0xbe)]=_0x5859ae(0xe5),document[_0x5859ae(0xf5)](_0x5859ae(0x103))[_0x5859ae(0xf9)][_0x5859ae(0xd4)]=_0x5859ae(0xd9),document[_0x5859ae(0xf5)](_0x5859ae(0xf2))[_0x5859ae(0xf9)][_0x5859ae(0xd4)]=_0x5859ae(0xd9),document[_0x5859ae(0xf5)](_0x5859ae(0xef))[_0x5859ae(0xf9)][_0x5859ae(0xd4)]=_0x5859ae(0xf1);});})):!localStorage[_0x59a706(0x113)]('Username')?(localStorage['removeItem'](_0x59a706(0x110)),localStorage['removeItem'](_0x59a706(0xde)),localStorage['removeItem'](_0x59a706(0xbf)),localStorage[_0x59a706(0xb8)](_0x59a706(0xdc)),localStorage[_0x59a706(0xb8)](_0x59a706(0x105)),window[_0x59a706(0xe0)]['href']=_0x59a706(0xe2)):db[_0x59a706(0xf4)](_0x59a706(0xc2))[_0x59a706(0x11b)](_0x59a706(0xd1),'==',localStorage[_0x59a706(0x113)](_0x59a706(0x110)))[_0x59a706(0x11b)](_0x59a706(0xfc),'==',localStorage['getItem'](_0x59a706(0xdc)))[_0x59a706(0xb7)](_0x81dfe2=>{const _0x441c8c=_0x59a706;_0x81dfe2['size']<0x1&&(localStorage[_0x441c8c(0xb8)](_0x441c8c(0x110)),localStorage['removeItem'](_0x441c8c(0xde)),localStorage['removeItem'](_0x441c8c(0xbf)),localStorage['removeItem'](_0x441c8c(0xdc)),localStorage['removeItem']('Level'),window[_0x441c8c(0xe0)][_0x441c8c(0x124)]=_0x441c8c(0xe2));});
