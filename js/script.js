/* ---------- hero decorative keys ---------- */
const heroKeys = document.getElementById('heroKeys');
for(let i=0;i<9;i++){
  const k = document.createElement('div');
  k.className = 'key' + (i===3?' on':'');
  heroKeys.appendChild(k);
}

/* ---------- keyboard detail photo slots ----------
   실사 이미지는 저작권 문제로 임의로 가져올 수 없어서,
   나중에 실제 촬영/구매한 사진 URL을 넣을 수 있도록 자리만 만들어둠.
   photoSrc가 있으면 그 이미지를, 없으면 placeholder를 보여줌. */
const photoSrc = {}; // 예: photoSrc['기계식'] = 'https://.../mechanical.jpg';
photoSrc['리무버'] = 'images/keycapswitch puller.jpg';
photoSrc['보관함'] = 'images/Storage Box.jpg';
photoSrc['진열대'] = 'images/Display Stand.jpg';
photoSrc['팜레스트'] = 'images/Palm Rest.jpg';
photoSrc['오테뮤 스위치 갈축'] = 'images/Outemu Brown.png';
photoSrc['오테뮤 스위치 적축'] = 'images/Outemu Red.png';
photoSrc['오테뮤 스위치 청축'] = 'images/Outemu Blue.png';
photoSrc['오테뮤 피치 V3'] = 'images/Outemu Peach V3.png';
photoSrc['오테뮤 라임 V3'] = 'images/Outemu Lime V3.png';
photoSrc['TTC 아이스프로즌 V2'] = 'images/TTC Ice Frozen V2.png';
photoSrc['카일 BOX V2 백축'] = 'images/Kailh BOX V2 White.png';
photoSrc['카일 BOX V2 갈축'] = 'images/Kailh BOX V2 Brown.png';
photoSrc['카일 마시엘로우 클릭'] = 'images/Kailh Marshmallow Click.png';
photoSrc['카일 마시멜로우 택타일'] = 'images/Kailh Marshmallow Tactile.png';
photoSrc['기계식'] = 'images/Mechanical.png';
photoSrc['로우프로파일(팬터그래프)'] = 'images/Pantograph.png';
photoSrc['풀사이즈 (106/108키)'] = 'images/108 layout.jpg';
photoSrc['TKL (87키)'] = 'images/TKL layout.jpg';
photoSrc['75%'] = 'images/75 layout.jpg';
photoSrc['65%'] = 'images/65 layout.jpg';
photoSrc['60%'] = 'images/60 layout.jpg';
photoSrc['40%대'] = 'images/40 layout.jpg';
photoSrc['앨리스/스플릿'] = 'images/Alice layout.jpg';
photoSrc['95% (95키)'] = 'images/95 layout.jpg';
photoSrc['CHERRY'] = 'images/CHERRY.jpg';
photoSrc['OEM'] = 'images/OEM.jpg';
photoSrc['SA'] = 'images/SA.jpg';
photoSrc['XDA'] = 'images/XDA.jpg';
photoSrc['CBSA'] = 'images/CBSA.jpg';
photoSrc['MDA'] = 'images/MDA.jpg';
photoSrc['MOA'] = 'images/MOA.jpg';
photoSrc['MAO'] = 'images/MAO.jpg';

function photoSlot(name){
  const src = photoSrc[name];
  if(src){
    return `<div class="d-photo"><img src="${src}" alt="${name}"/></div>`;
  }
  return `<div class="d-photo placeholder"><span>사진<br>준비 중</span></div>`;
}

/* ---------- switch sound preview ----------
   실제 타건음 오디오 파일이 준비되면 soundSrc에 연결해서 재생하면 됨.
   지금은 자리만 만들어두고 눌러도 준비중 안내만 표시. */
const soundSrc = {}; // 예: soundSrc['리니어'] = 'https://.../linear.mp3';
soundSrc['오테뮤 스위치 갈축'] = 'audio/Outemu Brown.mp4';
soundSrc['오테뮤 스위치 적축'] = 'audio/Outemu Red.mp4';
soundSrc['오테뮤 스위치 청축'] = 'audio/Outemu Blue.mp4';
soundSrc['오테뮤 피치 V3'] = 'audio/Outemu Peach V3.mp4';
soundSrc['오테뮤 라임 V3'] = 'audio/Outemu Lime V3.mp4';
soundSrc['TTC 아이스프로즌 V2'] = 'audio/TTC Ice Frozen V2.mp4';
soundSrc['카일 BOX V2 백축'] = 'audio/Kailh BOX V2 White.mp4';
soundSrc['카일 BOX V2 갈축'] = 'audio/Kailh BOX V2 Brown.mp4';
soundSrc['카일 마시엘로우 클릭'] = 'audio/Kailh Marshmallow Click.mp4';
soundSrc['카일 마시멜로우 택타일'] = 'audio/Kailh Marshmallow Tactile.mp4';

function playPreview(name){
  const src = soundSrc[name];
  if(src){
    const audio = document.getElementById('switchPreviewAudio');
    audio.pause();
    audio.src = src;
    audio.currentTime = 0;
    audio.play().catch(() => {
      alert('타건음 재생에 실패했어요. 기기 볼륨을 확인해주세요.');
    });
  } else {
    alert(`${name} 타건음 미리듣기는 준비 중이에요`);
  }
}

function stopSwitchPreview(){
  const audio = document.getElementById('switchPreviewAudio');
  if(audio && !audio.paused){
    audio.pause();
    audio.currentTime = 0;
  }
}

/* ---------- category detail data ---------- */
const categoryData = {
  keyboard:{
    title:'키보드',
    sections:[
      { label:'키보드 종류', items:[
        {name:'기계식', desc:'스위치를 하나씩 교체할 수 있는 구조예요. 커스텀 키보드는 대부분 이 방식이에요.'},
        {name:'멤브레인', desc:'고무 돔이 회로 시트를 눌러 입력을 인식해요. 저가형 키보드에 가장 많이 쓰여요.'},
        {name:'정전용량무접점', desc:'스프링과 러버돔이 결합된 구조로 부드럽고 묵직한 타건감이 특징이에요. 토프레가 대표적이에요.'},
        {name:'광축', desc:'빛을 차단해 입력을 인식하는 방식이에요. 반응 속도가 빨라 게이밍 키보드에서 자주 써요.'},
        {name:'로우프로파일(팬터그래프)', desc:'얇은 지지대 구조로 키 흔들림이 적어요. 노트북 키보드 대부분이 이 방식이에요.'}
      ]},
      { label:'배열', items:[
        {name:'풀사이즈 (106/108키)', desc:'숫자패드까지 포함된 가장 기본 배열이에요.'},
        {name:'95% (95키)', desc:'풀사이즈에서 넘패드 폭만 줄여 압축한 배열이에요. 숫자패드는 유지하면서 폭은 살짝 줄일 수 있어요.'},
        {name:'TKL (87키)', desc:'숫자패드를 뺀 배열로 책상 공간을 좀 더 확보할 수 있어요.'},
        {name:'75%', desc:'TKL에서 방향키·기능키는 유지하면서 더 좁힌 배열이에요.'},
        {name:'65%', desc:'방향키만 남기고 기능키 줄을 없앤 컴팩트 배열이에요.'},
        {name:'60%', desc:'방향키까지 없앤 가장 작은 표준 배열, 조합키로 대체해서 써요.'},
        {name:'40%대', desc:'숫자 줄까지 생략한 초소형 배열이에요. 별도 세팅이 필요해요.'},
        {name:'앨리스/스플릿', desc:'좌우가 벌어지거나 완전히 분리된 인체공학형 배열이에요.'}
      ]}
    ]
  },
  switch:{
    title:'스위치',
    sections:[
      { label:'타입', items:[
        {name:'리니어', accent:'--linear', desc:'누르는 내내 걸림 없이 부드럽게 눌려요. 상대적으로 조용한 편이에요.', variants:['오테뮤 스위치 적축','오테뮤 피치 V3','TTC 아이스프로즌 V2']},
        {name:'택타일', accent:'--tactile', desc:'누르는 중간에 턱 걸리는 느낌이 있어요. 손끝으로 입력을 확인하기 좋아요.', variants:['오테뮤 스위치 갈축','오테뮤 라임 V3','카일 BOX V2 갈축','카일 마시멜로우 택타일']},
        {name:'클릭', accent:'--clicky', desc:'택타일 느낌에 또렷한 클릭 소리까지 더해진 타입이에요.', variants:['오테뮤 스위치 청축','카일 마시엘로우 클릭','카일 BOX V2 백축']}
      ]}
    ]
  },
  keycap:{
    title:'키캡',
    sections:[
      { label:'프로파일', items:[
        {name:'CHERRY', desc:'낮고 완만한 곡선의 조각형 프로파일. 가장 대중적이에요.'},
        {name:'OEM', desc:'CHERRY보다 살짝 높은 조각형 프로파일. 일반 완제품 키보드에 많이 쓰여요.'},
        {name:'MAO', desc:'낮은 편의 조각형 프로파일로 고양이 실루엣이 특징이에요.'},
        {name:'SA', desc:'손끝을 감싸는 듯한 깊고 높은 조각형 프로파일이에요.'},
        {name:'XDA', desc:'행 구분 없이 균일한 높이의 넓적한 프로파일이에요.'},
        {name:'CBSA', desc:'SA와 비슷하게 깊지만 조금 더 낮은 조각형 프로파일이에요.'},
        {name:'MDA', desc:'구형(스페리컬) 형태로 행 높이가 균일한 프로파일이에요.'},
        {name:'MOA', desc:'완만한 돔형 상단의 조각형 프로파일로, 부드럽게 도드라진 촉감이에요.'}
      ]},
      { label:'호환성', items:[
        {step:'STEP 1', name:'스위치 모양 확인하기', desc:'대부분의 기계식·커스텀 키보드는 스위치 위가 십자(+) 모양이라 문제없이 호환돼요. 다만 정전용량 무접점(토프레)이나 로우프로파일 키보드는 스위치 모양 자체가 달라서 전용 키캡이 필요해요. 헷갈리면 키보드에 있는 키캡을 하나 제거해서 스위치 위 모양을 직접 확인하거나, 메뉴의 "호환 여부 확인하기"에서 모델명으로 검색해보세요.'},
        {step:'STEP 2', name:'특수 키 사이즈 재보기', desc:'Shift · Ctrl · Enter · 스페이스바 같은 키는 제조사·배열마다 길이가 조금씩 달라요. 상세페이지나 매뉴얼에서 내 키보드의 사이즈를 확인하고, 구매하려는 세트에 그 사이즈가 포함돼 있는지 함께 체크하세요.'},
        {step:'STEP 3', name:'ISO / ANSI 배열 맞추기', desc:'엔터키가 일자형이면 ANSI, ㄱ자로 꺾여 있으면 ISO예요. 세트 상세페이지에서 어떤 배열용인지 확인하고 내 키보드와 같은 배열인지 맞춰보세요.'},
        {step:'STEP 4', name:'로우프로파일 여부 체크하기', desc:'노트북이나 로우프로파일(저프로파일) 키보드는 스위치 자체가 낮게 설계돼 있어서 일반 키캡이 물리적으로 맞지 않아요. 구매 전 "로우프로파일 전용" 표시가 있는 세트인지 꼭 확인하세요.'}
      ]}
    ]
  },
  custom:{
    title:'커스텀',
    sections:[
      { label:'커스텀 주문', items:[
        {name:'승화전사', desc:'염료를 키캡 안쪽까지 스며들게 하는 방식이에요. 화려한 컬러와 매끄러운 인쇄가 강점이고, 키캡 본연의 매끄러운 촉감이 그대로 남아있어요. 반영구적이라 화려한 캐릭터·패턴 커스텀에 잘 어울려요.', orderLink:true},
        {name:'레이저 각인', desc:'레이저로 표면을 직접 새기는 방식이에요. 날카로운 선과 깔끔한 로고·심볼 표현이 강점이고, 미세하게 파여있는 입체감이 느껴져요. 반영구적이라 심플한 이니셜이나 기업 로고 각인에 잘 어울려요.', orderLink:true}
      ]},
      { label:'기성품', items:[
        {name:'이중사출', desc:'서로 다른 색 플라스틱을 두 번 겹쳐 사출하는 방식이에요. 글자 자체가 다른 색 플라스틱이라 닳아서 지워지거나 번지는 일이 없어요. 다만 색 조합이 보통 2가지 정도로 제한적이에요.'},
        {name:'염료승화', desc:'열로 염료를 소재 안까지 스며들게 하는 인쇄 방식이에요. 잉크가 표면이 아니라 안쪽에 스며드는 거라 벗겨지지 않고 반영구적으로 유지돼요. 다만 밝은색 소재에서 표현이 잘 나와요.'},
        {name:'UV인쇄', desc:'UV프린터로 표면에 직접 인쇄하고 자외선으로 굳히는 방식이에요. 색상·그라데이션 표현이 자유로운 대신, 잉크가 표면 위에 얹히는 방식이라 오래 쓰면 미세하게 마모될 수 있어요.'},
        {name:'포인트키캡', desc:'키보드의 일부 키에 포인트를 주기 위해 사용하는 낱개 키캡이에요. 그중에서도 캐릭터나 오브제를 입체적으로 표현한 아티산 키캡이 대표적이며, 이외에도 일반 인쇄 키캡부터 레진·실리콘·금속 등 다양한 소재와 제작 방식의 키캡이 있어요.', buyUrl:'https://mkt.shopping.naver.com/link/6a9521b9aeac3553bb292240'}
      ]}
    ]
  },
  accessories:{
    title:'용품',
    sections:[
      { label:'왜 필요한가요?', items:[
        {name:'리무버', desc:'키캡이나 스위치를 손으로 억지로 뽑지 않고 안전하게 분리할 수 있는 도구예요. 힘을 고르게 분산시켜서 부품이 상하는 걸 막아줘요.', buyUrl:'https://mkt.shopping.naver.com/link/6aa36fa68a20a72cfec88678'},
        {name:'진열대', desc:'키보드를 세워서 보기 좋게 진열할 수 있는 소품이에요. 책상 위에 깔끔하게 정리되고, 먼지도 덜 쌓여요.', buyUrl:'https://mkt.shopping.naver.com/link/6aa36fb1a6c15e1319580bc0'},
        {name:'보관함', desc:'여분 키캡이나 교체하면서 뺀 기존 키캡을 넣어서 보관할 수 있는 용품이에요. 종류별로 나눠두면 나중에 찾기도 쉽고 분실·파손도 줄어요.', buyUrl:'https://mkt.shopping.naver.com/link/6aa36fbd7c3acb4dfa6f3cd7'},
        {name:'팜레스트', desc:'키보드 앞에 놓고 손목을 받쳐주는 소품이에요. 장시간 타이핑할 때 손목 각도를 편하게 잡아줘서 손목 피로를 줄여줘요.', buyUrl:'https://mkt.shopping.naver.com/link/6aa36fc8cc78491a7acb608f'}
      ]}
    ]
  }
};

/* ---------- horizontal scroll row arrows ---------- */
let rowIdCounter = 0;
function nextRowId(){ return 'scrollrow-' + (rowIdCounter++); }
function scrollRowBy(id, dir){
  const el = document.getElementById(id);
  if(!el) return;
  const amount = Math.max(el.clientWidth * 0.8, 200);
  el.scrollBy({left: dir * amount, behavior:'smooth'});
}

function renderCategory(key){
  const data = categoryData[key];
  let html = `<div class="eyebrow" style="margin-bottom:8px;">CATEGORY</div><h2 style="font-size:22px; margin-bottom:20px;">${data.title}</h2>`;
  data.sections.forEach((sec, idx)=>{
    if(key==='custom' && idx>0){ html += `<div class="section-divider"></div>`; }
    const isCompat = key==='keycap' && sec.label==='호환성';
    html += isCompat ? `<div class="sub-label" id="compatAnchor">${sec.label}</div>` : `<div class="sub-label">${sec.label}</div>`;
    const isCarousel = key==='keyboard' && (sec.label==='키보드 종류' || sec.label==='배열');
    const isSwitchGrid = key==='switch' && sec.label==='타입';
    const isPhotoList = key==='keycap' && sec.label==='프로파일';
    if(isCarousel){
      const rowId = nextRowId();
      html += `<div class="scroll-wrap">
        <button class="scroll-arrow left" onclick="scrollRowBy('${rowId}',-1)" aria-label="이전"><span class="scroll-arrow-icon"></span></button>
        <div class="card-row" id="${rowId}">`;
      sec.items.forEach(it=>{
        const cardClass = sec.label==='배열' ? 'h-card h-card-layout' : 'h-card';
        html += `<div class="${cardClass}">${photoSlot(it.name)}<div class="h-body"><div class="d-name">${it.name}</div><div class="d-desc">${it.desc}</div></div></div>`;
      });
      html += `</div>
        <button class="scroll-arrow right" onclick="scrollRowBy('${rowId}',1)" aria-label="다음"><span class="scroll-arrow-icon"></span></button>
      </div>`;
    } else if(isSwitchGrid){
      html += `<div class="switch-grid">`;
      sec.items.forEach(it=>{
        html += `<div class="switch-card" style="border-color:var(${it.accent})">
          <div class="sc-body">
            <div class="d-name" style="color:var(${it.accent})">${it.name}</div>
            <div class="d-desc">${it.desc}</div>
            <button class="variant-toggle" data-type="${it.name}" onclick="toggleVariantPanel('${it.name}')">축 종류 보기</button>
          </div>
        </div>`;
      });
      html += `</div><div id="variantPanel"></div>`;
    } else if(isPhotoList){
      html += `<div class="profile-list">`;
      sec.items.forEach(it=>{
        html += `<div class="compat-item">${photoSlot(it.name)}<div class="compat-body"><div class="d-name">${it.name}</div><div class="d-desc">${it.desc}</div></div></div>`;
      });
      html += `</div>`;
    } else if(isCompat){
      const rowId = nextRowId();
      html += `<div class="scroll-wrap">
        <button class="scroll-arrow left" onclick="scrollRowBy('${rowId}',-1)" aria-label="이전"><span class="scroll-arrow-icon"></span></button>
        <div class="compat-slider" id="${rowId}">`;
      sec.items.forEach(it=>{
        html += `<div class="compat-item compat-slide"><div class="compat-body"><div class="compat-step">${it.step}</div><div class="d-name">${it.name}</div><div class="d-desc">${it.desc}</div></div></div>`;
      });
      html += `</div>
        <button class="scroll-arrow right" onclick="scrollRowBy('${rowId}',1)" aria-label="다음"><span class="scroll-arrow-icon"></span></button>
      </div>`;
    } else {
      sec.items.forEach(it=>{
        const border = it.accent ? `border-left:3px solid var(${it.accent});` : '';
        const ctaBtn = it.orderLink ? `<button class="detail-cta" onclick="goCustomOrder('${it.name}')">커스텀 바로가기 →</button>` : '';
        const buyBtn = it.buyUrl ? `<button class="detail-cta" onclick="window.open('${it.buyUrl}', '_blank')">구매하기 →</button>` : '';
        const hasPhoto = !!photoSrc[it.name];
        const photo = hasPhoto ? photoSlot(it.name) : '';
        const itemClass = hasPhoto ? 'detail-item has-icon' : 'detail-item';
        html += `<div class="${itemClass}" style="${border}">${photo}<div class="d-body"><div class="d-name">${it.name}</div><div class="d-desc">${it.desc}</div>${ctaBtn}${buyBtn}</div></div>`;
      });
    }
  });
  document.getElementById('categoryContent').innerHTML = html;
}

function showCategory(key){
  stopSwitchPreview();
  openVariantType = null;
  closeSpecModal();
  renderCategory(key);
  document.getElementById('homeView').classList.add('hidden');
  document.getElementById('quizView').classList.add('hidden');
  document.getElementById('compatCheckView').classList.add('hidden');
  document.getElementById('categoryView').classList.remove('hidden');
  setTopBack(true);
  window.scrollTo(0,0);
  setHash(key);
  document.title = `${categoryData[key].title} · KIDI ARCHIVE`;
}

/* ---------- switch variant panel (축 종류 보기) ---------- */
let openVariantType = null;
/* ---------- 축 종류별 상세 스펙 (엑셀 자료 기준) ---------- */
const SWITCH_SPECS = {
  '오테뮤 스위치 갈축': [['타입','택타일'],['핀','3핀'],['작동압','45±10gf'],['구분압','65gf'],['입력 지점','2.0±0.6mm'],['총 이동거리','4.0mm']],
  '오테뮤 스위치 적축': [['타입','리니어'],['핀','3핀'],['작동압','45±10gf'],['구분압','60gf'],['입력 지점','2.0±0.6mm'],['총 이동거리','4.0mm']],
  '오테뮤 스위치 청축': [['타입','클릭'],['핀','3핀'],['작동압','50±10gf'],['구분압','60gf'],['입력 지점','2.2±0.6mm'],['총 이동거리','4.0mm']],
  '오테뮤 피치 V3': [['타입','저소음 리니어'],['핀','5핀'],['작동압','40±10gf'],['구분압','50±10gf'],['입력 지점','2.0±0.6mm'],['총 이동거리','3.3mm']],
  '오테뮤 라임 V3': [['타입','저소음 택타일'],['핀','5핀'],['작동압','35±10gf'],['구분압','50±10gf'],['입력 지점','1.8±0.6mm'],['총 이동거리','3.3mm']],
  'TTC 아이스프로즌 V2': [['타입','저소음 리니어'],['핀','3핀'],['작동압','39gf'],['구분압','43gf'],['입력 지점','2.0mm'],['총 이동거리','3.5mm']],
  '카일 BOX V2 백축': [['타입','클릭'],['핀','5핀'],['작동압','45gf'],['구분압','55gf'],['입력 지점','1.8±0.4mm'],['총 이동거리','3.6±0.3mm']],
  '카일 BOX V2 갈축': [['타입','택타일'],['핀','5핀'],['작동압','45gf'],['구분압','68gf'],['입력 지점','1.8±0.4mm'],['총 이동거리','3.6±0.3mm']],
  '카일 마시엘로우 클릭': [['타입','클릭'],['핀','5핀'],['작동압','50±10gf'],['구분압','55±10gf'],['입력 지점','1.8±0.4mm'],['총 이동거리','3.6±0.3mm']],
  '카일 마시멜로우 택타일': [['타입','택타일'],['핀','5핀'],['작동압','38±10gf'],['구분압','55±10gf'],['입력 지점','2.0±0.4mm'],['총 이동거리','3.4±0.3mm']],
};

function showSpecModal(name){
  const rows = SWITCH_SPECS[name];
  if(!rows) return;
  const modal = document.getElementById('specModal');
  modal.innerHTML = `
    <div class="spec-modal-head">
      <span>${name}</span>
      <button class="spec-modal-close" onclick="closeSpecModal()">✕</button>
    </div>
    <div class="spec-modal-body">
      ${rows.map(([k,v])=>`<div class="vi-spec-row"><span>${k}</span><span>${v}</span></div>`).join('')}
    </div>
  `;
  modal.classList.remove('hidden');
  document.getElementById('specModalBackdrop').classList.remove('hidden');
}
function closeSpecModal(){
  document.getElementById('specModal').classList.add('hidden');
  document.getElementById('specModalBackdrop').classList.add('hidden');
}

function toggleVariantPanel(typeName){
  const panel = document.getElementById('variantPanel');
  if(!panel) return;
  stopSwitchPreview();
  if(openVariantType === typeName){
    openVariantType = null;
    panel.innerHTML = '';
    syncVariantButtons();
    return;
  }
  openVariantType = typeName;
  const typeItem = categoryData.switch.sections[0].items.find(it=>it.name===typeName);
  let html = `<div class="sub-label">${typeName} 축 종류</div><div class="preview-tip">🎧 미리듣기는 이어폰으로 들으면 더 선명해요</div><div class="variant-list">`;
  (typeItem.variants||[]).forEach(name=>{
    const specRows = SWITCH_SPECS[name];
    const isQuiet = specRows && specRows[0][1].includes('저소음');
    const quietBadge = isQuiet ? `<span class="vi-quiet">저소음</span>` : '';
    const specFab = specRows ? `<button class="vi-spec-fab" onclick="showSpecModal('${name}')">스펙</button>` : '';
    html += `<div class="variant-item">
      <div class="vi-photo-wrap">${photoSlot(name)}${specFab}</div>
      <div class="vi-row"><span class="d-name">${name}${quietBadge}</span><button class="vi-play" onclick="playPreview('${name}')">🔊 미리듣기</button></div>
    </div>`;
  });
  html += `</div>`;
  panel.innerHTML = html;
  syncVariantButtons();
}
function syncVariantButtons(){
  document.querySelectorAll('.variant-toggle').forEach(btn=>{
    const t = btn.dataset.type;
    const open = openVariantType === t;
    btn.textContent = open ? '축 종류 접기' : '축 종류 보기';
    btn.classList.toggle('active', open);
  });
}

function setTopBack(show){
  document.getElementById('topBackBtn').classList.toggle('hidden', !show);
}

function goHome(){
  stopSwitchPreview();
  closeSpecModal();
  document.getElementById('categoryView').classList.add('hidden');
  document.getElementById('quizView').classList.add('hidden');
  document.getElementById('compatCheckView').classList.add('hidden');
  document.getElementById('homeView').classList.remove('hidden');
  setTopBack(false);
  window.scrollTo(0,0);
  setHash('');
  document.title = 'KIDI ARCHIVE';
}
const backHome = goHome; // 카테고리 페이지의 "← 홈으로" 버튼에서 계속 사용

/* ---------- URL 해시 라우팅 (뒤로가기·새로고침·링크 공유 지원) ---------- */
let routingInternal = false;
function setHash(h){
  if(routingInternal) return;
  const curHash = location.hash.replace('#', '');
  if(curHash === h) return;
  const url = h ? '#' + h : location.pathname + location.search;
  try{
    history.pushState(null, '', url);
  }catch(e){
    /* 샌드박스 미리보기 등 History API가 막힌 환경에서도 나머지 기능은 계속 동작하도록 무시 */
  }
}
function routeFromHash(){
  const h = location.hash.replace('#', '');
  routingInternal = true;
  try{
    if(h === 'quiz'){ startQuiz(); }
    else if(h === 'compat'){ startCompatCheck(); }
    else if(['keyboard','switch','keycap','custom','accessories'].includes(h)){ showCategory(h); }
    else { goHome(); }
  } finally {
    routingInternal = false;
  }
}
window.addEventListener('popstate', routeFromHash);

/* ---------- hamburger menu ---------- */
function toggleMenu(){
  document.getElementById('navMenu').classList.toggle('open');
  document.getElementById('menuBackdrop').classList.toggle('open');
  document.querySelector('.hamburger-btn').classList.toggle('open');
}
function closeMenu(){
  document.getElementById('navMenu').classList.remove('open');
  document.getElementById('menuBackdrop').classList.remove('open');
  document.querySelector('.hamburger-btn').classList.remove('open');
}
function navGo(dest){
  closeMenu();
  if(dest==='home'){ goHome(); }
  else if(dest==='quiz'){ startQuiz(); }
  else if(dest==='compat'){ startCompatCheck(); }
  else { showCategory(dest); }
}

/* ---------- compat checker: 키보드 이름 검색 → 호환 판정 ----------
   실제로는 훨씬 많은 모델이 필요해서, 지금은 대표 모델 몇 개만 넣어둠.
   나중에 이 객체에 계속 추가하면 됨. */
const OK_REASON = '기계식이라 일반 키캡과 잘 맞아요.';
const LP_REASON = '로우프로파일 전용 스위치라 일반 키캡이 맞지 않아요.';

const keyboardCompatDB = {
  /* ---------- Keychron / Lemokey ---------- */
  'Keychron K8': {brand:'Keychron(키크론)', verdict:'ok', reason:OK_REASON},
  'Keychron Q1': {brand:'Keychron(키크론)', verdict:'ok', reason:OK_REASON},
  'Keychron Q2': {brand:'Keychron(키크론)', verdict:'ok', reason:OK_REASON},
  'Keychron Q3': {brand:'Keychron(키크론)', verdict:'ok', reason:OK_REASON},
  'Keychron Q4': {brand:'Keychron(키크론)', verdict:'ok', reason:OK_REASON},
  'Keychron K15 Pro SE ZMK': {brand:'Keychron(키크론)', verdict:'ok', reason:OK_REASON},
  'Lemokey X3': {brand:'Keychron(키크론)', verdict:'warn', reason:'자료가 엇갈려서 구매 전 판매처 확인을 추천해요.'},
  'Lemokey L1': {brand:'Keychron(키크론)', verdict:'warn', reason:'자료가 엇갈려서 구매 전 판매처 확인을 추천해요.'},
  'Keychron B1 Pro': {brand:'Keychron(키크론)', verdict:'no', reason:'팬터그래프 방식이라 키캡 교체가 어려워요.'},
  'Keychron K5 SE': {brand:'Keychron(키크론)', verdict:'no', reason:LP_REASON},
  'Keychron K5 SE ZMK': {brand:'Keychron(키크론)', verdict:'no', reason:LP_REASON},
  'Keychron Extreme eX75': {brand:'Keychron(키크론)', verdict:'no', reason:LP_REASON},
  'Keychron Extreme eX99': {brand:'Keychron(키크론)', verdict:'no', reason:LP_REASON},
  'Keychron Extreme eX67': {brand:'Keychron(키크론)', verdict:'no', reason:LP_REASON},
  'Keychron K2 HE': {brand:'Keychron(키크론)', verdict:'no', reason:LP_REASON},
  'Keychron K4 HE': {brand:'Keychron(키크론)', verdict:'no', reason:LP_REASON},
  'Keychron K10 HE': {brand:'Keychron(키크론)', verdict:'no', reason:LP_REASON},
  'Keychron K8 HE': {brand:'Keychron(키크론)', verdict:'no', reason:LP_REASON},
  'Keychron K6 HE': {brand:'Keychron(키크론)', verdict:'no', reason:LP_REASON},

  /* ---------- Glorious ---------- */
  'GMMK Pro': {brand:'GLORIOUS(글로리어스)', verdict:'warn', reason:'기계식이지만 모델별로 조금씩 달라 구매 전 확인이 필요해요.'},
  'GMMK3 Pro': {brand:'GLORIOUS(글로리어스)', verdict:'ok', reason:OK_REASON},
  'GMMK3 HE': {brand:'GLORIOUS(글로리어스)', verdict:'ok', reason:OK_REASON},
  'GMMK': {brand:'GLORIOUS(글로리어스)', verdict:'no', reason:'멤브레인 방식이라 스위치 모양이 달라요.'},

  /* ---------- Logitech ---------- */
  'Logitech Alto Keys K98M': {brand:'Logitech(로지텍)', verdict:'ok', reason:OK_REASON},
  'Logitech G Pro': {brand:'Logitech(로지텍)', verdict:'ok', reason:OK_REASON},
  'Logitech G316': {brand:'Logitech(로지텍)', verdict:'ok', reason:OK_REASON},
  'Logitech G512': {brand:'Logitech(로지텍)', verdict:'ok', reason:OK_REASON},
  'Logitech G413 SE': {brand:'Logitech(로지텍)', verdict:'ok', reason:OK_REASON},
  'Logitech G913': {brand:'Logitech(로지텍)', verdict:'no', reason:LP_REASON},
  'Logitech G915': {brand:'Logitech(로지텍)', verdict:'no', reason:'G913과 같은 로우프로파일(GL) 라인이라 일반 키캡이 맞지 않아요.'},
  'Logitech G515': {brand:'Logitech(로지텍)', verdict:'no', reason:'마그네틱·택타일·리니어 全 라인업이 로우프로파일(22mm)이라 일반 키캡이 맞지 않아요.'},
  'Logitech MX Mechanical': {brand:'Logitech(로지텍)', verdict:'no', reason:LP_REASON},
  'Logitech MX Mechanical Mini': {brand:'Logitech(로지텍)', verdict:'no', reason:LP_REASON},
  'Logitech MX Mechanical Mini for Mac': {brand:'Logitech(로지텍)', verdict:'no', reason:LP_REASON},
  'Logitech MX Keys Mini': {brand:'Logitech(로지텍)', verdict:'no', reason:'시저(팬터그래프) 방식이라 키캡 교체가 어려워요.'},
  'Logitech MX Keys S': {brand:'Logitech(로지텍)', verdict:'no', reason:'시저(팬터그래프) 방식이라 키캡 교체가 어려워요.'},
  'Logitech MX Keys S for Mac': {brand:'Logitech(로지텍)', verdict:'no', reason:'시저(팬터그래프) 방식이라 키캡 교체가 어려워요.'},
  'Logitech K580': {brand:'Logitech(로지텍)', verdict:'no', reason:'시저(팬터그래프) 방식이라 키캡 교체가 어려워요.'},
  'Logitech POP ICON Keys': {brand:'Logitech(로지텍)', verdict:'no', reason:'시저(팬터그래프) 방식이라 키캡 교체가 어려워요.'},
  'Logitech Pebble K380s': {brand:'Logitech(로지텍)', verdict:'no', reason:'시저(팬터그래프) 방식이라 키캡 교체가 어려워요.'},
  'Logitech K780': {brand:'Logitech(로지텍)', verdict:'no', reason:'시저(팬터그래프) 방식이라 키캡 교체가 어려워요.'},
  'Logitech K120': {brand:'Logitech(로지텍)', verdict:'no', reason:'멤브레인 방식이라 스위치 모양이 달라요.'},

  /* ---------- 레오폴드 ---------- */
  '레오폴드 FC750': {brand:'LEOPOLD(레오폴드)', verdict:'ok', reason:OK_REASON},
  '레오폴드 FC900': {brand:'LEOPOLD(레오폴드)', verdict:'ok', reason:OK_REASON},
  '레오폴드 FC980': {brand:'LEOPOLD(레오폴드)', verdict:'ok', reason:OK_REASON},
  '레오폴드 FC630': {brand:'LEOPOLD(레오폴드)', verdict:'ok', reason:OK_REASON},
  '레오폴드 FC730': {brand:'LEOPOLD(레오폴드)', verdict:'ok', reason:OK_REASON},
  '레오폴드 FC650': {brand:'LEOPOLD(레오폴드)', verdict:'ok', reason:OK_REASON},
  '레오폴드 FC660': {brand:'LEOPOLD(레오폴드)', verdict:'ok', reason:OK_REASON},
  '레오폴드 R3TL': {brand:'LEOPOLD(레오폴드)', verdict:'warn', reason:'정전용량 무접점(토프레) 방식이라 스위치 모양이 달라요. 전용 키캡인지 확인하세요.'},
  '레오폴드 R4 TKL': {brand:'LEOPOLD(레오폴드)', verdict:'warn', reason:'정전용량 무접점(토프레) 방식이라 스위치 모양이 달라요. 전용 키캡인지 확인하세요.'},
  '레오폴드 R4 BT': {brand:'LEOPOLD(레오폴드)', verdict:'warn', reason:'정전용량 무접점(토프레) 방식이라 스위치 모양이 달라요. 전용 키캡인지 확인하세요.'},
  '레오폴드 R3TLM': {brand:'LEOPOLD(레오폴드)', verdict:'warn', reason:'정전용량 무접점(토프레) 방식이라 스위치 모양이 달라요. 전용 키캡인지 확인하세요.'},
  '레오폴드 R3TLS': {brand:'LEOPOLD(레오폴드)', verdict:'warn', reason:'정전용량 무접점(토프레) 방식이라 스위치 모양이 달라요. 전용 키캡인지 확인하세요.'},

  /* ---------- Apple ---------- */
  'Apple Magic Keyboard': {brand:'Apple(애플)', verdict:'no', reason:'팬터그래프 방식이라 키캡 교체가 어려워요.'},

  /* ---------- 한성 ---------- */
  '한성 TFG Magnetox': {brand:'한성컴퓨터', verdict:'ok', reason:OK_REASON},
  '한성 TFG Magnetox 2XL': {brand:'한성컴퓨터', verdict:'ok', reason:OK_REASON},
  '한성 TFG Cloud Max': {brand:'한성컴퓨터', verdict:'ok', reason:OK_REASON},
  '한성 TFG Cloud Max CF': {brand:'한성컴퓨터', verdict:'ok', reason:OK_REASON},
  '한성 GK798PRO': {brand:'한성컴퓨터', verdict:'ok', reason:OK_REASON},
  '한성 GK797PRO': {brand:'한성컴퓨터', verdict:'ok', reason:OK_REASON},
  '한성 TFG Cloud': {brand:'한성컴퓨터', verdict:'ok', reason:OK_REASON},
  '한성 GK204': {brand:'한성컴퓨터', verdict:'ok', reason:OK_REASON},
  '한성 TFG ART WL V2': {brand:'한성컴퓨터', verdict:'ok', reason:OK_REASON},
  '한성 GK903B': {brand:'한성컴퓨터', verdict:'ok', reason:OK_REASON},
  '한성 GK787SE': {brand:'한성컴퓨터', verdict:'ok', reason:OK_REASON},
  '한성 GK777SE': {brand:'한성컴퓨터', verdict:'ok', reason:OK_REASON},
  '한성 TFX GTO Wireless': {brand:'한성컴퓨터', verdict:'ok', reason:OK_REASON},
  '한성 GK993B': {brand:'한성컴퓨터', verdict:'ok', reason:OK_REASON},
  '한성 archon K75': {brand:'한성컴퓨터', verdict:'ok', reason:OK_REASON},
  '한성 archon K77': {brand:'한성컴퓨터', verdict:'ok', reason:OK_REASON},
  '한성 GK898B PRO': {brand:'한성컴퓨터', verdict:'ok', reason:OK_REASON},
  '한성 GK896B PRO': {brand:'한성컴퓨터', verdict:'warn', reason:'"한무무"로 불리는 무접점 라인이에요. 자석축(호환)인지 정전용량(비호환)인지 버전에 따라 달라서 구매 전 확인이 필요해요.'},
  '한성 GK893B PRO': {brand:'한성컴퓨터', verdict:'warn', reason:'"한무무"로 불리는 무접점 라인이에요. 자석축(호환)인지 정전용량(비호환)인지 버전에 따라 달라서 구매 전 확인이 필요해요.'},
  '한성 GK868B PRO': {brand:'한성컴퓨터', verdict:'warn', reason:'"한무무"로 불리는 무접점 라인이에요. 자석축(호환)인지 정전용량(비호환)인지 버전에 따라 달라서 구매 전 확인이 필요해요.'},
  '한성 TFX GTO': {brand:'한성컴퓨터', verdict:'ok', reason:OK_REASON},
  '한성 GK989B': {brand:'한성컴퓨터', verdict:'ok', reason:OK_REASON},
  '한성 GK698': {brand:'한성컴퓨터', verdict:'no', reason:'멤브레인 방식이라 스위치 모양이 달라요.'},
  '한성 GK104': {brand:'한성컴퓨터', verdict:'no', reason:'멤브레인 방식이라 스위치 모양이 달라요.'},
  '한성 GK101': {brand:'한성컴퓨터', verdict:'no', reason:'멤브레인 방식이라 스위치 모양이 달라요.'},
  '한성 HKM1000K': {brand:'한성컴퓨터', verdict:'no', reason:'멤브레인 방식이라 스위치 모양이 달라요.'},
  '한성 TFG ARF Optik LP': {brand:'한성컴퓨터', verdict:'no', reason:LP_REASON},

  /* ---------- 앱코 ---------- */
  '앱코 A108K': {brand:'ABKO(앱코)', verdict:'ok', reason:OK_REASON},
  '앱코 K561': {brand:'ABKO(앱코)', verdict:'ok', reason:OK_REASON},
  '앱코 AS104': {brand:'ABKO(앱코)', verdict:'ok', reason:OK_REASON},
  '앱코 ACH105': {brand:'ABKO(앱코)', verdict:'ok', reason:OK_REASON},
  '앱코 KN30BT': {brand:'ABKO(앱코)', verdict:'ok', reason:OK_REASON},
  '앱코 ACH108': {brand:'ABKO(앱코)', verdict:'ok', reason:OK_REASON},
  '앱코 AF108PRO': {brand:'ABKO(앱코)', verdict:'ok', reason:OK_REASON},
  '앱코 AO98': {brand:'ABKO(앱코)', verdict:'ok', reason:OK_REASON},
  '앱코 APK82BT': {brand:'ABKO(앱코)', verdict:'ok', reason:OK_REASON},
  '앱코 AN94BT': {brand:'ABKO(앱코)', verdict:'ok', reason:OK_REASON},
  '앱코 AR108G': {brand:'ABKO(앱코)', verdict:'ok', reason:OK_REASON},
  '앱코 AK87': {brand:'ABKO(앱코)', verdict:'ok', reason:OK_REASON},
  '앱코 K562': {brand:'ABKO(앱코)', verdict:'ok', reason:OK_REASON},
  '앱코 KN35BT': {brand:'ABKO(앱코)', verdict:'ok', reason:OK_REASON},
  '앱코 KN03BT': {brand:'ABKO(앱코)', verdict:'ok', reason:OK_REASON},
  '앱코 LKN99': {brand:'ABKO(앱코)', verdict:'ok', reason:OK_REASON},
  '앱코 AK84': {brand:'ABKO(앱코)', verdict:'ok', reason:OK_REASON},
  '앱코 AK94': {brand:'ABKO(앱코)', verdict:'ok', reason:OK_REASON},
  '앱코 AS87': {brand:'ABKO(앱코)', verdict:'ok', reason:OK_REASON},
  '앱코 LKN84': {brand:'ABKO(앱코)', verdict:'ok', reason:OK_REASON},
  '앱코 AG75W': {brand:'ABKO(앱코)', verdict:'ok', reason:OK_REASON},
  '앱코 K660': {brand:'ABKO(앱코)', verdict:'warn', reason:'기계식이지만 모델별로 조금씩 달라 구매 전 확인이 필요해요.'},
  '앱코 MK108': {brand:'ABKO(앱코)', verdict:'no', reason:'멤브레인 방식이라 스위치 모양이 달라요.'},
  '앱코 MK98': {brand:'ABKO(앱코)', verdict:'no', reason:'멤브레인 방식이라 스위치 모양이 달라요.'},
  '앱코 AK10': {brand:'ABKO(앱코)', verdict:'no', reason:'멤브레인 방식이라 스위치 모양이 달라요.'},
  '앱코 WKM40': {brand:'ABKO(앱코)', verdict:'no', reason:'멤브레인 방식이라 스위치 모양이 달라요.'},
  '앱코 AMK108': {brand:'ABKO(앱코)', verdict:'no', reason:'멤브레인 방식이라 스위치 모양이 달라요.'},
  '앱코 ACM105': {brand:'ABKO(앱코)', verdict:'no', reason:'멤브레인 방식이라 스위치 모양이 달라요.'},
  '앱코 MK108W': {brand:'ABKO(앱코)', verdict:'no', reason:'멤브레인 방식이라 스위치 모양이 달라요.'},
  '앱코 NTP84': {brand:'ABKO(앱코)', verdict:'no', reason:LP_REASON},
  '앱코 K150': {brand:'ABKO(앱코)', verdict:'no', reason:'멤브레인 방식이라 스위치 모양이 달라요.'},
  '앱코 MK87': {brand:'ABKO(앱코)', verdict:'no', reason:'멤브레인 방식이라 스위치 모양이 달라요.'},
  '앱코 KM400': {brand:'ABKO(앱코)', verdict:'no', reason:'멤브레인 방식이라 스위치 모양이 달라요.'},

  /* ---------- AULA(독거미) ---------- */
  'AULA F108 Pro': {brand:'AULA(독거미)', verdict:'ok', reason:OK_REASON},
  'AULA F87 Pro': {brand:'AULA(독거미)', verdict:'ok', reason:OK_REASON},
  'AULA F75': {brand:'AULA(독거미)', verdict:'ok', reason:OK_REASON},
  'AULA F87': {brand:'AULA(독거미)', verdict:'ok', reason:OK_REASON},
  'AULA F99': {brand:'AULA(독거미)', verdict:'ok', reason:OK_REASON},
  'AULA F65': {brand:'AULA(독거미)', verdict:'ok', reason:OK_REASON},
  'AULA S102': {brand:'AULA(독거미)', verdict:'no', reason:'스위치 모양이 달라 일반 키캡이 맞지 않아요.'},
  'AULA HERO 84HE': {brand:'AULA(독거미)', verdict:'ok', reason:OK_REASON},
  'AULA F108': {brand:'AULA(독거미)', verdict:'ok', reason:OK_REASON},
  'AULA AG75': {brand:'AULA(독거미)', verdict:'ok', reason:OK_REASON},

  /* ---------- 긱스타 ---------- */
  '긱스타 GKG108': {brand:'GEEKSTAR(긱스타)', verdict:'ok', reason:OK_REASON},
  '긱스타 GKG87': {brand:'GEEKSTAR(긱스타)', verdict:'ok', reason:OK_REASON},
  '긱스타 JK08': {brand:'GEEKSTAR(긱스타)', verdict:'ok', reason:OK_REASON},
  '긱스타 파운데이션': {brand:'GEEKSTAR(긱스타)', verdict:'no', reason:'멤브레인 방식이라 스위치 모양이 달라요.'},
  '긱스타 GK03 PRO': {brand:'GEEKSTAR(긱스타)', verdict:'no', reason:'멤브레인 방식이라 스위치 모양이 달라요.'},
  '긱스타 GK108FE': {brand:'GEEKSTAR(긱스타)', verdict:'no', reason:'멤브레인 방식이라 스위치 모양이 달라요.'},
  '긱스타 GK02': {brand:'GEEKSTAR(긱스타)', verdict:'no', reason:'멤브레인 방식이라 스위치 모양이 달라요.'},
  '긱스타 GK01': {brand:'GEEKSTAR(긱스타)', verdict:'no', reason:'멤브레인 방식이라 스위치 모양이 달라요.'},

  /* ---------- Rainy (WOB) ---------- */
  'Rainy75': {brand:'Rainy(레이니)', verdict:'ok', reason:OK_REASON},
  'Rainy87': {brand:'Rainy(레이니)', verdict:'ok', reason:OK_REASON},

  /* ---------- 프리플로우 ---------- */
  '프리플로우 아콘 AK74': {brand:'PREFLOW(프리플로우)', verdict:'ok', reason:OK_REASON},
  '프리플로우 MCHOSE Ace68': {brand:'PREFLOW(프리플로우)', verdict:'ok', reason:OK_REASON},

  /* ---------- Dareu ---------- */
  'Dareu COOL68 8K': {brand:'DAREU(다얼유)', verdict:'ok', reason:OK_REASON},

  /* ---------- Lofree ---------- */
  'Lofree Flow 2': {brand:'LOFREE(로프리)', verdict:'ok', reason:OK_REASON},

  /* ---------- YUNZII ---------- */
  'YUNZII X71': {brand:'YUNZII(윤지)', verdict:'ok', reason:OK_REASON},

  /* ---------- SWAGKEY ---------- */
  'SWAGKEY QK80MK2': {brand:'SWAGKEY(스웨그키)', verdict:'ok', reason:OK_REASON},

  /* ---------- VARO ---------- */
  'VARO V104': {brand:'VARO(바로)', verdict:'ok', reason:OK_REASON},

  /* ---------- MONSTARGEAR(몬스타기어) ---------- */
  '몬스타 가츠 닌자87 SE': {brand:'MONSTARGEAR(몬스타기어)', verdict:'ok', reason:OK_REASON},

  /* ---------- ATK ---------- */
  'ATK RS7 Air': {brand:'ATK', verdict:'ok', reason:OK_REASON},

  /* ---------- CHERRY(체리) ---------- */
  'CHERRY MX BOARD 2.0S': {brand:'CHERRY(체리)', verdict:'ok', reason:OK_REASON},

  /* ---------- g-clicker(지클릭커) ---------- */
  'g-clicker GTR87': {brand:'g-clicker(지클릭커)', verdict:'ok', reason:OK_REASON},

  /* ---------- Gravastar(그라바스타) ---------- */
  'Gravastar Mercury K98 Pro': {brand:'Gravastar(그라바스타)', verdict:'ok', reason:OK_REASON},

  /* ---------- Razer ---------- */
  'Razer BlackWidow V4 75': {brand:'Razer(레이저)', verdict:'ok', reason:OK_REASON},

  /* ---------- GDEVIL(지데빌) ---------- */
  'GDEVIL G917 SCUD': {brand:'GDEVIL(지데빌)', verdict:'ok', reason:OK_REASON},

  /* ---------- Womier ---------- */
  'Womier WK98': {brand:'Womier(우미어)', verdict:'ok', reason:OK_REASON},
  'Womier L98': {brand:'Womier(우미어)', verdict:'ok', reason:OK_REASON},
  'Womier X98': {brand:'Womier(우미어)', verdict:'ok', reason:OK_REASON},
  'Womier M98': {brand:'Womier(우미어)', verdict:'ok', reason:OK_REASON},
  'Womier M99': {brand:'Womier(우미어)', verdict:'ok', reason:OK_REASON},
  'Womier WD99': {brand:'Womier(우미어)', verdict:'ok', reason:OK_REASON},
  'Womier DUO87': {brand:'Womier(우미어)', verdict:'ok', reason:OK_REASON},
  'Womier M87 Pro': {brand:'Womier(우미어)', verdict:'ok', reason:OK_REASON},
  'Womier QK87': {brand:'Womier(우미어)', verdict:'ok', reason:OK_REASON},
  'Womier SK75 TMR': {brand:'Womier(우미어)', verdict:'ok', reason:OK_REASON},
  'Womier RD75': {brand:'Womier(우미어)', verdict:'ok', reason:OK_REASON},
  'Womier SK75': {brand:'Womier(우미어)', verdict:'ok', reason:OK_REASON},
  'Womier WD75': {brand:'Womier(우미어)', verdict:'ok', reason:OK_REASON},
  'Womier L75': {brand:'Womier(우미어)', verdict:'ok', reason:OK_REASON},
  'Womier WK75': {brand:'Womier(우미어)', verdict:'ok', reason:OK_REASON},
  'Womier ERA75': {brand:'Womier(우미어)', verdict:'ok', reason:OK_REASON},
  'Womier SK71 Pro': {brand:'Womier(우미어)', verdict:'ok', reason:OK_REASON},
  'Womier Q75': {brand:'Womier(우미어)', verdict:'ok', reason:OK_REASON},
  'Womier SK80': {brand:'Womier(우미어)', verdict:'ok', reason:OK_REASON},
  'Womier MT75': {brand:'Womier(우미어)', verdict:'ok', reason:OK_REASON},
  'Womier K80': {brand:'Womier(우미어)', verdict:'ok', reason:OK_REASON},
  'Womier L80': {brand:'Womier(우미어)', verdict:'ok', reason:OK_REASON},
  'Womier Q61 V2': {brand:'Womier(우미어)', verdict:'ok', reason:OK_REASON},
  'Womier VK66 Pro': {brand:'Womier(우미어)', verdict:'ok', reason:OK_REASON},
  'Womier SK65 V2': {brand:'Womier(우미어)', verdict:'ok', reason:OK_REASON},
  'Womier M68 HE V2': {brand:'Womier(우미어)', verdict:'ok', reason:OK_REASON},
  'Womier M68 HE PRO': {brand:'Womier(우미어)', verdict:'ok', reason:OK_REASON},
  'Womier L65': {brand:'Womier(우미어)', verdict:'ok', reason:OK_REASON},
  'Womier SK61 HE': {brand:'Womier(우미어)', verdict:'ok', reason:OK_REASON},
  'Womier Q61 Pro': {brand:'Womier(우미어)', verdict:'ok', reason:OK_REASON},
  'Womier WK61': {brand:'Womier(우미어)', verdict:'ok', reason:OK_REASON},
  'Womier SK30': {brand:'Womier(우미어)', verdict:'ok', reason:OK_REASON}
};

function startCompatCheck(){
  stopSwitchPreview();
  document.getElementById('homeView').classList.add('hidden');
  document.getElementById('categoryView').classList.add('hidden');
  document.getElementById('quizView').classList.add('hidden');
  document.getElementById('compatCheckView').classList.remove('hidden');
  setTopBack(true);
  window.scrollTo(0,0);
  setHash('compat');
  document.title = '호환 가능 여부 · KIDI ARCHIVE';
  setCompatMode('search');
  document.getElementById('compatSearchInput').value = '';
  renderCompatSearch('');
  setTimeout(()=>document.getElementById('compatSearchInput').focus(), 200);
}

const VERDICT_META = {
  ok:{label:'호환 가능'},
  warn:{label:'확인 요망'},
  no:{label:'호환 불가'}
};

/* 한글 → 영문 → 숫자 순 정렬 */
function charRank(ch){
  if(/[가-힣]/.test(ch)) return 0;
  if(/[a-zA-Z]/.test(ch)) return 1;
  if(/[0-9]/.test(ch)) return 2;
  return 3;
}
function koSort(a, b){
  const ra = charRank(a.charAt(0)), rb = charRank(b.charAt(0));
  if(ra !== rb) return ra - rb;
  return a.localeCompare(b, 'ko');
}

/* ---------- 문의 채널 설정 ----------
   네이버 톡톡 링크가 확정되면 아래 따옴표 안에 넣으세요.
   예: const TALKTALK_URL = 'https://talk.naver.com/ct/abcdef';
   비어있으면 요청 내용은 브라우저에 임시 저장돼요. */
const TALKTALK_URL = 'https://talk.naver.com/WCDSZF';

/* ---------- 키캡 커스텀 주문 링크 설정 ----------
   항목 이름별로 실제 주문 페이지 URL을 넣어두면 버튼 누를 때 그 링크로 연결돼요.
   링크가 없는 항목은 눌러도 "준비 중" 안내만 떠요. */
const CUSTOM_ORDER_URLS = {
  '승화전사': 'https://mkt.shopping.naver.com/link/696efb2c33b09901146a01d8',
  '레이저 각인': 'https://mkt.shopping.naver.com/link/696efb3e354f1231a4e06603',
};

function goCustomOrder(name){
  const url = CUSTOM_ORDER_URLS[name];
  if(url){
    window.open(url, '_blank');
  } else {
    alert(`"${name}" 커스텀 주문 페이지를 준비 중이에요. 조금만 기다려주세요!`);
  }
}

/* ---------- 모델 등록 요청 ---------- */
function requestModelAdd(name){
  if(!name) return;
  if(TALKTALK_URL){
    const msg = `[KIDI ARCHIVE] 모델 등록 요청: ${name}`;
    try{ navigator.clipboard.writeText(msg); }catch(e){}
    alert(`요청 문구가 복사됐어요:\n"${msg}"\n\n톡톡 대화창에 붙여넣어 보내주세요!`);
    window.open(TALKTALK_URL, '_blank');
  } else {
    alert('등록 요청 접수 채널을 준비 중이에요. 조금만 기다려주세요!');
  }
}

/* ---------- 일반 문의하기 (톡톡) ---------- */
function openInquiry(){
  if(TALKTALK_URL){
    window.open(TALKTALK_URL, '_blank');
  } else {
    alert('문의 채널 연결 준비 중이에요. 조금만 기다려주세요!');
  }
}

function renderCompatSearch(query){
  const box = document.getElementById('compatSearchResults');
  const q = query.trim().toLowerCase();

  if(!q){
    box.innerHTML = `<div class="compat-empty">키보드 브랜드를 입력해주세요.</div>`;
    return;
  }

  const matches = Object.keys(keyboardCompatDB)
    .filter(name => name.toLowerCase().includes(q))
    .sort(koSort);

  if(matches.length === 0){
    const escaped = query.trim().replace(/'/g, "\\'");
    box.innerHTML = `<div class="compat-empty">
      아직 데이터가 없는 모델이에요.
      <div class="compat-empty-actions">
        <button class="btn primary" onclick="requestModelAdd('${escaped}')">"${query.trim()}" 등록 요청하기</button>
      </div>
    </div>`;
    return;
  }

  box.innerHTML = matches.map(name=>{
    const data = keyboardCompatDB[name];
    const v = VERDICT_META[data.verdict];
    return `<div class="compat-result-card">
      <div class="compat-result-name">${name}</div>
      <div class="compat-verdict ${data.verdict}">${v.label}</div>
      <div class="compat-result-reason">${data.reason}</div>
    </div>`;
  }).join('');
}

/* ---------- 브랜드별 보기 ---------- */
function setCompatMode(mode){
  const isSearch = mode === 'search';
  document.getElementById('compatSearchPane').classList.toggle('hidden', !isSearch);
  document.getElementById('compatBrandPane').classList.toggle('hidden', isSearch);
  document.getElementById('tabSearch').classList.toggle('active', isSearch);
  document.getElementById('tabBrand').classList.toggle('active', !isSearch);
  if(!isSearch) renderCompatBrandView();
}

function renderCompatBrandView(){
  const box = document.getElementById('compatBrandResults');
  const byBrand = {};
  Object.keys(keyboardCompatDB).forEach(name=>{
    const item = keyboardCompatDB[name];
    const brand = item.brand || '기타';
    const displayName = name.startsWith(brand) ? name.slice(brand.length).trim() : name;
    if(!byBrand[brand]) byBrand[brand] = [];
    byBrand[brand].push({displayName, ...item});
  });

  const brands = Object.keys(byBrand).sort(koSort);

  box.innerHTML = brands.map(brand=>{
    const models = byBrand[brand].sort((a,b)=>koSort(a.displayName, b.displayName));
    const rows = models.map(m=>`
      <div class="brand-model-row">
        <span class="bm-name">${m.displayName}</span>
        <span class="bm-badge ${m.verdict}">${VERDICT_META[m.verdict].label}</span>
      </div>
    `).join('');
    return `
      <div class="brand-group" id="brand-${brand}">
        <button class="brand-header" onclick="toggleBrandGroup('${brand}')">
          <span>${brand}</span>
          <span class="brand-count">${models.length}개</span>
          <span class="brand-chevron"></span>
        </button>
        <div class="brand-models">${rows}</div>
      </div>
    `;
  }).join('');
}

function toggleBrandGroup(brand){
  const el = document.getElementById('brand-' + brand);
  if(!el) return;
  const wasOpen = el.classList.contains('open');
  document.querySelectorAll('.brand-group.open').forEach(g => g.classList.remove('open'));
  if(!wasOpen) el.classList.add('open');
}

/* ---------- quiz data ---------- */
const questions = [
  {
    id:'q1', eyebrow:'01 / 06',
    title:'주로 어디서 사용하실 예정인가요?',
    options:[
      {label:'책상이 넓어서 여유있게', effects:{layout:{fullsize:2, tkl:1, '75':1}}},
      {label:'책상이 좁거나 들고 다닐 일이 많음', effects:{layout:{'60':2, '65':1, '40':1}}}
    ]
  },
  {
    id:'q2', eyebrow:'02 / 06',
    title:'숫자패드(넘패드)를 자주 쓰시나요?',
    options:[
      {label:'네, 숫자 많이 입력해요', effects:{layout:{fullsize:2, tkl:1}}},
      {label:'아니요, 거의 안 써요', effects:{layout:{'65':1, '60':1}}}
    ]
  },
  {
    id:'q3', eyebrow:'03 / 06',
    title:'타이핑할 때 소리는 어떤 게 좋으세요?',
    options:[
      {label:'조용한 게 좋아요', effects:{sw:{linear:2}}},
      {label:'상관없어요', effects:{sw:{tactile:2}}},
      {label:'경쾌한 소리가 좋아요', effects:{sw:{clicky:2}}}
    ]
  },
  {
    id:'q4', eyebrow:'04 / 06',
    title:'손끝에 느껴지는 감각은요?',
    options:[
      {label:'끝까지 부드럽게 눌리는 느낌', effects:{sw:{linear:1}}},
      {label:'누를 때 턱 걸리는 느낌이 있으면 좋음', effects:{sw:{tactile:1, clicky:1}}}
    ]
  },
  {
    id:'q5', eyebrow:'05 / 06',
    title:'키캡을 눌렀을 때 손끝 느낌은?',
    options:[
      {label:'낮고 평평한 게 좋음', effects:{profile:{CHERRY:2, OEM:1}}},
      {label:'손끝을 오목하게 감싸는 느낌', effects:{profile:{SA:2, MDA:1}}},
      {label:'높고 또렷한 타건감', effects:{profile:{XDA:2, MOA:1}}}
    ]
  },
  {
    id:'q6', eyebrow:'06 / 06',
    title:'키보드 입문 정도는요?',
    options:[
      {label:'이번이 처음이에요', effects:{drive:{'기계식':2}}},
      {label:'이미 하나 이상 써봤어요', effects:{drive:{'기계식':1, '광축':1, '정전용량무접점':1}}}
    ]
  }
];

// R1~R4 (참고용 상대 높이, 실측 스펙 아님)
const profileRowHeights = {
  CHERRY:[5,6,7,7], OEM:[6,7,8,8], MAO:[6,6,7,7], SA:[10,12,13,12],
  MDA:[9,9,9,9], MOA:[7,8,8,7], XDA:[8,8,8,8], CBSA:[9,10,11,10]
};

let current = 0;
let answers = {};
let scores = { layout:{}, sw:{}, profile:{}, drive:{} };

function startQuiz(){
  stopSwitchPreview();
  document.getElementById('homeView').classList.add('hidden');
  document.getElementById('categoryView').classList.add('hidden');
  document.getElementById('compatCheckView').classList.add('hidden');
  document.getElementById('quizView').classList.remove('hidden');
  setTopBack(true);
  window.scrollTo(0,0);
  setHash('quiz');
  document.title = '나에게 맞는 조합 찾기 · KIDI ARCHIVE';
  renderQuestion();
}

function resetQuiz(){
  current = 0; answers = {}; scores = { layout:{}, sw:{}, profile:{}, drive:{} };
  document.getElementById('resultWrap').classList.add('hidden');
  document.getElementById('questionsWrap').classList.remove('hidden');
  renderQuestion();
  window.scrollTo(0,0);
}

function renderQuestion(){
  const q = questions[current];
  const wrap = document.getElementById('questionsWrap');
  const filledDots = Array.from({length:questions.length}, (_,i)=>
    `<div class="dot ${i<=current?'filled':''}"></div>`).join('');

  wrap.innerHTML = `
    <div class="progress">${filledDots}</div>
    <div class="q-card">
      <div class="eyebrow q-eyebrow">${q.eyebrow}</div>
      <div class="q-title">${q.title}</div>
      <div id="optsWrap">
        ${q.options.map((o,i)=>`
          <button class="opt ${answers[q.id]===i?'selected':''}" onclick="selectOpt(${i})">${o.label}</button>
        `).join('')}
      </div>
      <div class="quiz-nav">
        <button onclick="prevQ()" ${current===0?'disabled':''}>← 이전</button>
      </div>
    </div>
  `;
}

function computeScores(){
  scores = { layout:{}, sw:{}, profile:{}, drive:{} };
  questions.forEach(q=>{
    const i = answers[q.id];
    if(i===undefined) return;
    const eff = q.options[i].effects;
    for(const cat in eff){
      for(const key in eff[cat]){
        scores[cat][key] = (scores[cat][key]||0) + eff[cat][key];
      }
    }
  });
}

function selectOpt(i){
  const q = questions[current];
  answers[q.id] = i;
  renderQuestion(); // instant highlight
  setTimeout(()=>{
    computeScores();
    if(current < questions.length-1){
      current++;
      renderQuestion();
    } else {
      showResult();
    }
  }, 280);
}

function prevQ(){ if(current>0){ current--; renderQuestion(); } }

function top2(obj, fallbackList){
  let entries = Object.entries(obj);
  fallbackList.forEach(f=>{ if(!obj[f]) entries.push([f,0]); });
  entries.sort((a,b)=>b[1]-a[1]);
  return entries.slice(0,2).map(e=>e[0]);
}

function profileRowsSvg(name, colorVar){
  const rows = profileRowHeights[name] || [7,8,8,9];
  const barW=20, gap=8, scale=3.2, baseY=48;
  const color = `var(${colorVar||'--accent'})`;
  let bars = '', labels = '';
  rows.forEach((h,i)=>{
    const x = i*(barW+gap);
    const barH = h*scale;
    const y = baseY - barH;
    bars += `<rect x="${x}" y="${y}" width="${barW}" height="${barH}" rx="3" fill="none" stroke="${color}" stroke-width="2"/>`;
    labels += `<text x="${x+barW/2}" y="${baseY+16}" font-size="9" fill="var(--paper-dim)" text-anchor="middle" font-family="'Space Grotesk',monospace">R${i+1}</text>`;
  });
  const width = rows.length*(barW+gap)-gap;
  return `<svg width="${width}" height="${baseY+22}" viewBox="0 0 ${width} ${baseY+22}">${bars}${labels}</svg>`;
}

function showResult(){
  document.getElementById('questionsWrap').classList.add('hidden');
  const rw = document.getElementById('resultWrap');
  rw.classList.remove('hidden');

  const layouts = top2(scores.layout, ['65','60']);
  const sws = top2(scores.sw, ['tactile','linear']);
  const profiles = top2(scores.profile, ['OEM','CHERRY']);
  const drives = top2(scores.drive, ['기계식']);

  const layoutLabel = {fullsize:'풀사이즈', tkl:'TKL', '75':'75%', '65':'65%', '60':'60%', '40':'40%대'};
  const swLabel = {linear:'리니어', tactile:'택타일', clicky:'클릭'};
  const swVar = {linear:'--linear', tactile:'--tactile', clicky:'--clicky'};

  const cards = [0].map(rank=>{
    const layout = layoutLabel[layouts[rank]] || layouts[rank];
    const sw = sws[rank];
    const profile = profiles[rank];
    const drive = drives[Math.min(rank, drives.length-1)];
    lastResult = { drive, layout, sw: swLabel[sw], profile };
    return `
      <div class="result-card">
        <div class="result-rank">✨ 최적의 조합</div>
        <div class="result-grid">
          <div class="result-item"><div class="label">키보드 종류</div><div class="value">${drive}</div></div>
          <div class="result-item"><div class="label">배열</div><div class="value">${layout}</div></div>
          <div class="result-item"><div class="label">스위치</div><div class="value" style="color:var(${swVar[sw]})">${swLabel[sw]}</div></div>
          <div class="result-item"><div class="label">프로파일</div><div class="value">${profile}</div></div>
        </div>
        <div class="profile-viz">
          ${profileRowsSvg(profile, swVar[sw])}
          <div class="pv-label">${profile} 프로파일<br>R1~R4 열별 높이 참고용 실루엣</div>
        </div>
      </div>
    `;
  }).join('');

  document.getElementById('resultCards').innerHTML = cards;
}

let lastResult = null;

let html2canvasLoadPromise = null;
function loadHtml2Canvas(){
  if(window.html2canvas) return Promise.resolve();
  if(html2canvasLoadPromise) return html2canvasLoadPromise;
  html2canvasLoadPromise = new Promise((resolve, reject)=>{
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('load failed'));
    document.head.appendChild(s);
  });
  return html2canvasLoadPromise;
}

function saveResultImage(){
  const el = document.querySelector('#resultCards .result-card');
  if(!el) return;
  loadHtml2Canvas().then(()=>{
    return window.html2canvas(el, { backgroundColor: '#1D2027', scale: 2 });
  }).then(canvas=>{
    const link = document.createElement('a');
    link.download = 'kidi-archive-result.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }).catch(()=>{
    alert('이미지 저장에 실패했어요. 스크린샷으로 저장해주세요!');
  });
}

/* 페이지 로드시 현재 URL 해시에 맞는 화면으로 진입 (링크 공유·새로고침 대응) */
routeFromHash();