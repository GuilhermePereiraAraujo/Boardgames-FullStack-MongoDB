(this.webpackJsonpexemplo=this.webpackJsonpexemplo||[]).push([[0],{13:function(e,o,a){},14:function(e,o,a){},16:function(e,o,a){"use strict";a.r(o);var i=a(1),t=a.n(i),s=a(3),r=a.n(s),n=(a(13),a(6)),c=a(4),m=a(5),g=a(8),d=a(7),l=(a(14),a(0)),p=function(e){Object(g.a)(a,e);var o=Object(d.a)(a);function a(e){var i;return Object(c.a)(this,a),(i=o.call(this,e)).onSubmit=function(e){e.preventDefault();var o=i.state,a=o.boardgames,t=o.editando,s=o.indexEditando,r=o.nomeBG,c=o.imagemUrlBG,m=o.estiloBG,g=o.jogadoresMinBG,d=o.jogadoresMaxBG,l=o.tempoEstimadoBG,p=o.scoreBGGBG,j=o.anoBG;if(t){var G=a.map((function(e,o){return s===o&&(e.nome=r,e.imagemUrl=c,e.estilo=m,e.jogadoresMin=g,e.jogadoresMax=d,e.tempoEstimado=l,e.scoreBGG=p,e.ano=j),e}));i.setState({boardgames:G,indexEditando:null,editando:!1})}else i.setState({boardgames:[].concat(Object(n.a)(a),[{nome:r,imagemUrl:c,estilo:m,jogadoresMin:g,jogadoresMax:d,tempoEstimado:l,scoreBGG:p,ano:j}])});i.setState({nomeBG:"",imagemUrlBG:"",estiloBG:"",jogadoresMinBG:"",jogadoresMaxBG:"",tempoEstimadoBG:"",scoreBGGBG:"",anoBG:""})},i.deletar=function(e){var o=i.state.boardgames;i.setState({boardgames:o.filter((function(o,a){return a!==e}))})},i.state={boardgames:[{id:"1",nome:"Caverna: The Cave Farmers",imagemUrl:"https://cf.geekdo-images.com/rz22tqa5PCYvK9oDjIbvxg__imagepage/img/asnC8cfJxGNI0hSJkfCGKaRNd6w=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1790789.jpg",estilo:"Euro",jogadoresMin:"1",jogadoresMax:"7",tempoEstimado:"210",scoreBGG:"8.0",ano:"2013"},{id:"2",nome:"Legendary: A Marvel Deck Building Game",imagemUrl:"https://cf.geekdo-images.com/ZrRidumkzu62HuwKdgQpHA__imagepage/img/rEh0oKbvD45eDIZqPZOfx0UmfhA=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1430769.jpg",estilo:"Deckbuilding",jogadoresMin:"1",jogadoresMax:"5",tempoEstimado:"60",scoreBGG:"7.6",ano:"2012"},{id:"3",nome:"Stone Age",imagemUrl:"https://cf.geekdo-images.com/elmZegVZ6gp4_5izUgxGQQ__imagepage/img/rC8YvN1x0vj-3ot8WK9YDzDxORU=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1632539.jpg",estilo:"Euro",jogadoresMin:"2",jogadoresMax:"4",tempoEstimado:"90",scoreBGG:"7.6",ano:"2008"},{id:"4",nome:"Alhambra",imagemUrl:"https://cf.geekdo-images.com/OiqKsYDh7pqeRYKG__kMSw__imagepage/img/DgfcCRh3qcOFt2jQDfCQ99AaDNI=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4893652.jpg",estilo:"Euro",jogadoresMin:"2",jogadoresMax:"6",tempoEstimado:"60",scoreBGG:"7.0",ano:"2003"},{id:"5",nome:"Five Tribes",imagemUrl:"https://cf.geekdo-images.com/dmo-WD6HZHVUPrbVHunaTw__imagepage/img/6Zrd6v5Z7gukQ-18akZ2hesGr_c=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2055255.jpg",estilo:"Euro",jogadoresMin:"1",jogadoresMax:"4",tempoEstimado:"80",scoreBGG:"7.8",ano:"2014"},{id:"6",nome:"Carcassonne",imagemUrl:"https://cf.geekdo-images.com/Z3upN53-fsVPUDimN9SpOA__imagepagezoom/img/J0mztz56j5-UZ4-V4_ekPDrCjeM=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic2337577.jpg",estilo:"Euro",jogadoresMin:"2",jogadoresMax:"5",tempoEstimado:"45",scoreBGG:"7.4",ano:"2000"},{id:"7",nome:"The Voyages of Marco Polo",imagemUrl:"https://cf.geekdo-images.com/n1G7_aWToLAAB7Mqt8iwyA__imagepage/img/Br9Czi58HojFg6EK5AIgsZh4lW0=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2461346.png",estilo:"Euro",jogadoresMin:"2",jogadoresMax:"4",tempoEstimado:"100",scoreBGG:"7.9",ano:"2015"},{id:"8",nome:"Village",imagemUrl:"https://cf.geekdo-images.com/5FBIAvZi3Sw8dvmfwwJTjg__imagepage/img/FDa_unt0cz22oYwTc5L57JpkIlE=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2760568.jpg",estilo:"Euro",jogadoresMin:"2",jogadoresMax:"4",tempoEstimado:"90",scoreBGG:"7.5",ano:"2011"},{id:"9",nome:"Sushi Go!",imagemUrl:"https://cf.geekdo-images.com/EPdI2KbLVtpGWLgL_eJLFg__imagepagezoom/img/vrTcARFssf6amFwSqs5PGgt5VQs=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic5885690.jpg",estilo:"Party",jogadoresMin:"2",jogadoresMax:"5",tempoEstimado:"15",scoreBGG:"7.0",ano:"2013"},{id:"10",nome:"Smallworld",imagemUrl:"https://cf.geekdo-images.com/aoPM07XzoceB-RydLh08zA__imagepage/img/lHmv0ddOrUvpiLcPeQbZdT5yCEA=/fit-in/900x600/filters:no_upscale():strip_icc()/pic428828.jpg",estilo:"Strategia",jogadoresMin:"2",jogadoresMax:"5",tempoEstimado:"80",scoreBGG:"7.3",ano:"2009"},{id:"11",nome:"Le Havre",imagemUrl:"https://cf.geekdo-images.com/mU-YdL_-3Fm4RvNv-y5WJg__imagepage/img/7DqfKklmURAJpDV_CWHeYE2-sgE=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3330230.jpg",estilo:"Strategia",jogadoresMin:"1",jogadoresMax:"5",tempoEstimado:"150",scoreBGG:"7.9",ano:"2008"},{id:"12",nome:"Karuba",imagemUrl:"https://cf.geekdo-images.com/hhV3JiYZUHEi_glLhC0v8w__imagepage/img/2VFdnIlLpNfJkJpMKVkA1F18oak=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2727088.jpg",estilo:"Familia",jogadoresMin:"2",jogadoresMax:"4",tempoEstimado:"40",scoreBGG:"7.2",ano:"2015"},{id:"13",nome:"Love Letter",imagemUrl:"https://cf.geekdo-images.com/T1ltXwapFUtghS9A7_tf4g__imagepage/img/wf3HgW2e24O0mcsB5OIHJnxaeIM=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1401448.jpg",estilo:"Familia",jogadoresMin:"2",jogadoresMax:"4",tempoEstimado:"20",scoreBGG:"7.2",ano:"2012"},{id:"14",nome:"Quarriors",imagemUrl:"https://cf.geekdo-images.com/12Bgvi0MpA10redngwI5MA__imagepage/img/FcwDVoX-vyF_eXPlw5AZelrnqus=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1604985.jpg",estilo:"Strategy",jogadoresMin:"2",jogadoresMax:"4",tempoEstimado:"30",scoreBGG:"6.8",ano:"2011"},{id:"15",nome:"Zombicide",imagemUrl:"https://cf.geekdo-images.com/ZqjfzvtaTIT5FYp1D2CfKw__imagepage/img/2TYuxSAUY8qpo066xG15mrxw_X4=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1196191.jpg",estilo:"Sobreviv\xeancia",jogadoresMin:"1",jogadoresMax:"6",tempoEstimado:"60",scoreBGG:"7.2",ano:"2012"},{id:"16",nome:"Epic Spell Wars",imagemUrl:"https://cf.geekdo-images.com/Da8TXGBq3UjKINgTRIZY9A__imagepage/img/RHaGhriDSnGO1KwYugXqWJevDRE=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1170265.jpg",estilo:"Party",jogadoresMin:"2",jogadoresMax:"6",tempoEstimado:"30",scoreBGG:"6.5",ano:"2012"},{id:"17",nome:"Forbidden Desert",imagemUrl:"https://cf.geekdo-images.com/OU26qQZoHJodxSFKiR5IzA__imagepage/img/SE0hRE7vK9YgJANkVIlu34Lf-YU=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1528722.jpg",estilo:"Family",jogadoresMin:"2",jogadoresMax:"5",tempoEstimado:"45",scoreBGG:"7.1",ano:"2013"},{id:"18",nome:"Harbour",imagemUrl:"https://cf.geekdo-images.com/ECislQBZPHzEiCHOb1H3Bg__imagepage/img/51CgyrNj5ZA5kpfvLAVQvOE-Qt0=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2726915.jpg",estilo:"Strategia",jogadoresMin:"1",jogadoresMax:"4",tempoEstimado:"60",scoreBGG:"6,5",ano:"2015"},{id:"19",nome:"Munchkin",imagemUrl:"https://cf.geekdo-images.com/wowx1P_-CUf_ZP6CK9fWpw__imagepage/img/dvrrXOCBx7q4AWs4vt3IBEiZrlA=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2358779.jpg",estilo:"Party",jogadoresMin:"3",jogadoresMax:"6",tempoEstimado:"120",scoreBGG:"6.6",ano:"2014"}],nomeBG:"",imagemUrlBG:"",estiloBG:"",jogadoresMinBG:"",jogadoresMaxBG:"",tempoEstimadoBG:"",scoreBGGBG:"",anoBG:"",editando:!1,indexEditando:null},i}return Object(m.a)(a,[{key:"render",value:function(){var e,o=this,a=this.state,i=a.boardgames,t=a.editando,s=a.indexEditando,r=a.nomeBG,n=a.imagemUrlBG,c=a.estiloBG,m=a.jogadoresMinBG,g=a.jogadoresMaxBG,d=a.tempoEstimadoBG,p=a.scoreBGGBG,j=a.anoBG;return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("header",{children:Object(l.jsx)("h1",{children:"Boardgames"})}),Object(l.jsxs)("main",{className:"main",children:[Object(l.jsx)("hr",{}),Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"cadastro",children:t?"Editando:\n          ".concat(null===(e=i[s])||void 0===e?void 0:e.nome):"Cadastre um novo jogo"})}),Object(l.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(l.jsx)("input",{placeholder:"Nome",value:r,onChange:function(e){o.setState({nomeBG:e.target.value})}}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{placeholder:"Url da Imagem",value:n,onChange:function(e){o.setState({imagemUrlBG:e.target.value})}}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{placeholder:"Estilo",value:c,onChange:function(e){o.setState({estiloBG:e.target.value})}}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{placeholder:"Minimo de Jogadores",value:m,onChange:function(e){o.setState({jogadoresMinBG:e.target.value})}}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{placeholder:"M\xe1ximo de Jogadores",value:g,onChange:function(e){o.setState({jogadoresMaxBG:e.target.value})}}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{placeholder:"Tempo Estimado",value:d,onChange:function(e){o.setState({tempoEstimadoBG:e.target.value})}}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{placeholder:"Score no BoardgameGeek",value:p,onChange:function(e){o.setState({scoreBGGBG:e.target.value})}}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{placeholder:"Ano de Lan\xe7amento",value:j,onChange:function(e){o.setState({anoBG:e.target.value})}}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{type:"submit",children:"Salvar"})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("h2",{children:"Boardgames"}),Object(l.jsx)("ul",{children:i.map((function(e,a){return Object(l.jsxs)("div",{className:"fichaDoJogo",children:[Object(l.jsx)("p",{className:"nome",children:e.nome}),Object(l.jsx)("div",{className:"ficha",children:Object(l.jsx)("img",{src:e.imagemUrl,alt:e.nome,className:"capa"})}),Object(l.jsxs)("div",{className:"detalhes",children:[Object(l.jsxs)("h3",{children:["Estilo: ",e.estilo]}),Object(l.jsxs)("h3",{children:["N\xb0 de jogadores: ",e.jogadoresMin," - ",e.jogadoresMax]}),Object(l.jsxs)("h3",{children:["Tempo estimado: ",e.tempoEstimado," min"]}),Object(l.jsxs)("h3",{children:["Pontua\xe7\xe3o m\xe9dia: ",e.scoreBGG]}),Object(l.jsxs)("h3",{children:["Ano de publica\xe7\xe3o: ",e.ano]}),Object(l.jsxs)("div",{className:"containerBotoes",children:[Object(l.jsx)("button",{className:"botao",onClick:function(){return o.deletar(a)},children:"Deletar"}),Object(l.jsx)("button",{className:"botao",onClick:function(){o.setState({editando:!0,indexEditando:a,nomeBG:e.nome,imagemUrlBG:e.imagemUrl,estiloBG:e.estilo,jogadoresMinBG:e.jogadoresMin,jogadoresMaxBG:e.jogadoresMax,tempoEstimadoBG:e.tempoEstimado,scoreBGGBG:e.scoreBGG,anoBG:e.ano})},children:"Editar"})]})]})]})}))})]})]})}}]),a}(t.a.Component),j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(o){var a=o.getCLS,i=o.getFID,t=o.getFCP,s=o.getLCP,r=o.getTTFB;a(e),i(e),t(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(t.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),j()}},[[16,1,2]]]);
//# sourceMappingURL=main.d3f6f25a.chunk.js.map