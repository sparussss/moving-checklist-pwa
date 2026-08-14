const SDK='12.17.1';
const items=[
{id:'clp',title:'電力｜中電',group:'now',tag:'需要',desc:'網上開戶／轉名；安排新地址生效日。'},
{id:'towngas',title:'煤氣｜香港中華煤氣',group:'now',tag:'需要',desc:'網上開新戶口；如需要接駁，預約技術員。'},
{id:'water',title:'食水｜水務署',group:'now',tag:'需要',desc:'申請承接用水帳戶；保存承接日水錶讀數。'},
{id:'management_move',title:'管理處｜搬屋申請',group:'now',tag:'優先',desc:'確認搬屋時段、升降機安排及搬屋按金。'},
{id:'management_resident',title:'管理處｜住戶登記',group:'now',tag:'需要',desc:'準備租約及管理處要求的住戶資料。'},
{id:'broadband',title:'家居寬頻 / Wi‑Fi',group:'now',tag:'需要',desc:'比較可用網絡及預約安裝日期。'},
{id:'pets',title:'確認租約／屋苑寵物規則',group:'now',tag:'優先',desc:'確認兩隻貓相關租約及管理規則。'},
{id:'mail',title:'香港郵政｜郵件轉遞',group:'now',tag:'建議',desc:'舊址郵件暫時轉寄新址。'},
{id:'lg_tv',title:'LG 電視',group:'now',tag:'家電',desc:'確認購買、送貨及安裝安排；型號及日期可記錄在備註。'},
{id:'osim_chair',title:'OSIM 小天后',group:'now',tag:'傢俬',desc:'確認送貨日期、擺位及電源位置。'},
{id:'table_chairs',title:'枱凳',group:'now',tag:'傢俬',desc:'確認購買／送貨安排、尺寸及客飯廳最終擺位。'},
{id:'whirlpool_washer',title:'Whirlpool 洗衣機',group:'now',tag:'家電',desc:'確認尺寸、送貨及安裝安排。'},
{id:'cheung_yick',title:'祥益地產',group:'now',tag:'聯絡',desc:'交樓、鎖匙、文件或其他相關事項可記錄在備註。'},
{id:'landlord_deposit',title:'業主\n2按1上',group:'now',tag:'付款',desc:'確認兩個月按金＋一個月上期，以及保留付款／收據紀錄。'},
{id:'simmons_mattress',title:'蓆夢思床褥',group:'ritual',tag:'安床',desc:'確認 8/23 送貨／到位安排；安床時使用新床褥。'},
{id:'ritual_arrive',title:'12:30–12:50｜到達新屋',group:'ritual',tag:'準備',desc:'先開門、開窗通風；正式象徵式入宅動作留待 13:00 後開始。'},
{id:'ritual_items',title:'入門物品準備',group:'ritual',tag:'準備',desc:'米、食油、樽裝水、利是、保溫壺熱水。濾水機留在舊屋，8/28 才搬。'},
{id:'ritual_rice',title:'13:00｜第一樣帶米入門',group:'ritual',tag:'入宅',desc:'用米作第一件正式帶入屋的象徵物品。'},
{id:'ritual_lights',title:'13:00｜開主要燈',group:'ritual',tag:'入宅',desc:'開客廳、主人房、廚房、廁所主要燈。'},
{id:'ritual_water',title:'13:00｜開水',group:'ritual',tag:'入宅',desc:'廚房及廁所水龍頭各開約 10–30 秒；可沖一次廁所，之後關好。'},
{id:'ritual_hotwater',title:'13:05｜飲一杯熱水',group:'ritual',tag:'入宅',desc:'用舊屋預先準備、由保溫壺帶過去的熱水即可；毋須在新屋煲水。'},
{id:'ritual_bedframe',title:'13:10–13:30｜床架最後定位',group:'ritual',tag:'安床',desc:'將床架移到最終位置、校正床頭及方向；完成後盡量不要再搬位。'},
{id:'ritual_mattress',title:'13:30–14:00｜新床褥正式平放',group:'ritual',tag:'安床',desc:'拆走運輸包裝、床褥擺正並正式放上床架。只有新床褥亦可以，床單、枕頭、被可 8/28 後再補。'},
{id:'ritual_finish',title:'14:00–15:00｜完成象徵式入宅',group:'ritual',tag:'完成',desc:'可在客廳坐一陣、飲水／茶；主要燈可開至離開。23 號當晚不用留宿。'},
{id:'ritual_leave',title:'離開前｜安全檢查',group:'ritual',tag:'需要',desc:'確認水龍頭已關、門窗鎖好；燈可正常熄掉，毋須開足一晚。'},
{id:'uncle_mover',title:'搬屋公司',group:'move',tag:'8/28',desc:'確認 8/28 搬屋時間、佐敦舊址樓梯搬運，以及疊茵庭升降機／管理處安排。'},
{id:'meter_power',title:'電錶讀數及相片',group:'move',tag:'需要',desc:'搬屋前後影低錶號及讀數。'},
{id:'meter_gas',title:'煤氣錶讀數及相片',group:'move',tag:'需要',desc:'影低錶號及讀數。'},
{id:'meter_water',title:'水錶讀數及相片',group:'move',tag:'需要',desc:'影低錶號及讀數。'},
{id:'condition',title:'全屋狀況拍照／影片',group:'move',tag:'優先',desc:'在大量物件搬入前記錄牆身、地板、門窗、廚廁及已有損壞。'},
{id:'keys',title:'點算鎖匙／信箱匙／住戶卡',group:'move',tag:'需要',desc:'記錄實際收到數量。'},
{id:'appliances_main',title:'測試冷氣／熱水爐／煮食爐',group:'move',tag:'需要',desc:'確認業主提供設備運作正常。'},
{id:'appliances_other',title:'測試業主提供的其他電器',group:'move',tag:'需要',desc:'如租約包含其他家電，逐件測試。'},
{id:'bank',title:'銀行／信用卡地址',group:'after',tag:'需要',desc:'搬入後更新通訊地址。'},
{id:'insurance_address',title:'保險地址',group:'after',tag:'視乎需要',desc:'有相關保單才處理。'},
{id:'mpf',title:'強積金 MPF 地址',group:'after',tag:'視乎需要',desc:'按所用受託人更新資料。'},
{id:'telco',title:'手機／電訊商登記地址',group:'after',tag:'建議',desc:'搬入後更新。'},
{id:'gov',title:'政府部門地址紀錄',group:'after',tag:'視乎需要',desc:'按持有的政府服務／牌照更新。'},
{id:'td',title:'運輸署地址',group:'after',tag:'視乎需要',desc:'如持駕駛執照／登記車輛，記得更新。'},
{id:'voter',title:'選民登記地址',group:'after',tag:'視乎需要',desc:'需要時更新。'},
{id:'tv',title:'收費電視 / Now TV',group:'optional',tag:'可選',desc:'唔使用可跳過。'},
{id:'parking',title:'停車場／車位',group:'optional',tag:'可選',desc:'有需要才申請。'},
{id:'tenant_insurance',title:'家居／租客保險',group:'optional',tag:'可選',desc:'非必要，可按需要考慮。'},
{id:'management_fee',title:'管理費',group:'optional',tag:'查租約',desc:'一般按租約由業主或租客負責。'},
{id:'rates',title:'差餉／地租',group:'optional',tag:'通常業主',desc:'租客一般毋須轉名，按租約確認。'}
];

const groups={
  now:'現在處理',
  ritual:'8/23 安床＋象徵式入宅',
  move:'8/28 搬屋',
  after:'搬入後',
  optional:'視乎需要／通常不用'
};

let filter='all';
let state=loadLocal();
let orderState=loadOrderLocal();
let firebaseCtx=null, unsub=null, remoteReady=false;
let settings=loadSettings();
let isDragging=false;
let editingNoteId=null;

const $=s=>document.querySelector(s);
function esc(s=''){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));}
function normalizeOrder(raw={}){
  // orderState 同時代表「所屬分類」及「分類內排序」，因此可跨分類拖移。
  const validIds=new Set(items.map(it=>it.id));
  const seen=new Set();
  const out={};
  for(const group of Object.keys(groups)){
    out[group]=[];
    for(const id of (raw[group]||[])){
      if(validIds.has(id)&&!seen.has(id)){out[group].push(id);seen.add(id);}
    }
  }
  // 新增項目或未存在於舊排序資料的項目，回到預設分類。
  for(const it of items){
    if(!seen.has(it.id)){out[it.group].push(it.id);seen.add(it.id);}
  }
  return out;
}
function orderedItems(group){
  const map=new Map(items.map(it=>[it.id,it]));
  return (orderState[group]||[]).map(id=>map.get(id)).filter(Boolean);
}
function loadLocal(){
  const current=JSON.parse(localStorage.getItem('moveChecklistLocalV11')||'{}');
  if(Object.keys(current).length) return current;
  const old=JSON.parse(localStorage.getItem('moveChecklist')||'{}');
  if(Object.keys(old).length){
    const migrated={}; items.forEach((it,i)=>{if(old[i]) migrated[it.id]={done:!!old[i].done,note:old[i].note||'',updatedBy:'本機舊紀錄',updatedAtMs:Date.now()};});
    localStorage.setItem('moveChecklistLocalV11',JSON.stringify(migrated)); return migrated;
  }
  return {};
}
function saveLocal(){localStorage.setItem('moveChecklistLocalV11',JSON.stringify(state));}
function loadOrderLocal(){
  try{return normalizeOrder(JSON.parse(localStorage.getItem('moveChecklistOrderV12')||'{}'));}
  catch{return normalizeOrder({});}
}
function saveOrderLocal(){localStorage.setItem('moveChecklistOrderV12',JSON.stringify(orderState));}
function loadSettings(){try{return JSON.parse(localStorage.getItem('firebaseSettingsV11')||'null');}catch{return null;}}
function saveSettingsObj(v){settings=v;localStorage.setItem('firebaseSettingsV11',JSON.stringify(v));}
function fmtTime(ms){if(!ms)return'';try{return new Intl.DateTimeFormat('zh-HK',{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'}).format(new Date(ms));}catch{return'';}}
function badgeClass(tag){return tag==='優先'?'urgent':(['視乎需要','可選','查租約','通常業主'].includes(tag)?'optional':'');}

function render(){
  if(isDragging)return;
  const box=$('#list'); box.innerHTML='';
  Object.entries(groups).forEach(([key,label])=>{
    if(filter!=='all'&&filter!==key)return;
    const sec=document.createElement('section');
    sec.dataset.group=key;
    const heading=document.createElement('div'); heading.className='sectionHead';
    heading.innerHTML=`<h2>${esc(label)}</h2><span>長按 ☰ 可跨分類拖移</span>`;
    const cardList=document.createElement('div'); cardList.className='cardlist'; cardList.dataset.group=key;
    orderedItems(key).forEach(it=>{
      const st=state[it.id]||{}; const d=document.createElement('div'); d.className='card '+(st.done?'done':''); d.dataset.id=it.id;
      const stamp=st.updatedBy?`最後更新：${esc(st.updatedBy)}${st.updatedAtMs?'・'+fmtTime(st.updatedAtMs):''}`:'';
      const isLandlord=it.id==='landlord_deposit';
      const noteHtml=isLandlord
        ? `<div class="splitNotes"><label class="noteField"><textarea class="note" data-note-field="ownerNote" rows="1" placeholder="業主，例如：1上(8/10 $13000)✅">${esc(st.ownerNote ?? st.note ?? '')}</textarea></label><label class="noteField"><textarea class="note" data-note-field="depositNote" rows="1" placeholder="2按1上，例如：2按(8/21 $26000)">${esc(st.depositNote||'')}</textarea></label></div>`
        : `<textarea class="note" data-note-field="note" rows="1" placeholder="備註／申請編號／預約時間…">${esc(st.note||'')}</textarea>`;
      d.innerHTML=`<div class="row"><button class="dragHandle" type="button" aria-label="拖移 ${esc(it.title)}">☰</button><input class="check" type="checkbox" ${st.done?'checked':''}><div class="cardBody"><div class="title">${esc(it.title)}</div><div class="meta"><span class="badge ${badgeClass(it.tag)}">${esc(it.tag)}</span>${esc(it.desc)}</div><div class="stamp">${stamp}</div>${noteHtml}</div></div>`;
      d.querySelector('.check').addEventListener('change',e=>updateItem(it.id,{done:e.target.checked}));
      d.querySelectorAll('.note').forEach(noteEl=>{
        let timer;
        const field=noteEl.dataset.noteField||'note';
        const editKey=`${it.id}:${field}`;
        noteEl.addEventListener('focus',()=>{editingNoteId=editKey;});
        noteEl.addEventListener('input',e=>{
          // iPhone 輸入期間只更新資料，不重新 render DOM，避免鍵盤／游標被打斷。
          const value=e.target.value;
          state[it.id]={...(state[it.id]||{}),[field]:value};
          saveLocal();
          clearTimeout(timer);
          timer=setTimeout(()=>updateItem(it.id,{[field]:value},false),700);
        });
        noteEl.addEventListener('blur',e=>{
          clearTimeout(timer);
          const value=e.target.value;
          updateItem(it.id,{[field]:value},false);
          setTimeout(()=>{
            if(!document.activeElement?.classList?.contains('note')) editingNoteId=null;
          },80);
        });
      });
      enableDrag(d.querySelector('.dragHandle'),d,key);
      cardList.appendChild(d);
    });
    sec.append(heading,cardList); box.appendChild(sec);
  });
  updateProgress();
}

function updateProgress(){
  const n=items.filter(it=>state[it.id]?.done).length; $('#ptext').textContent=`${n} / ${items.length} 已完成`; $('#fill').style.width=(n/items.length*100)+'%';
  $('#who').textContent=settings?.displayName?`使用者：${settings.displayName}`:'';
}

async function updateItem(id,patch,rerender=true){
  const now=Date.now(); const by=settings?.displayName||'本機使用者';
  state[id]={...(state[id]||{}),...patch,updatedBy:by,updatedAtMs:now}; saveLocal(); if(rerender&&!editingNoteId)render();
  if(firebaseCtx&&remoteReady){
    try{
      const {docRef,updateDoc,serverTimestamp}=firebaseCtx;
      await updateDoc(docRef,{[`states.${id}`]:state[id],updatedAt:serverTimestamp(),updatedBy:by});
      setStatus('ok','● 已同步');
    }catch(e){setStatus('err','● 等待同步'); console.warn(e);}
  }
}

async function syncOrder(){
  saveOrderLocal();
  if(firebaseCtx&&remoteReady){
    try{
      const by=settings?.displayName||'本機使用者';
      const {docRef,updateDoc,serverTimestamp}=firebaseCtx;
      // 跨分類拖移會同時改變來源及目的分類，因此一次同步完整 order。
      await updateDoc(docRef,{order:orderState,updatedAt:serverTimestamp(),updatedBy:by});
      setStatus('ok','● 已同步');
    }catch(e){setStatus('err','● 排序等待同步'); console.warn(e);}
  }
}

function enableDrag(handle,card,group){
  handle.addEventListener('pointerdown',e=>{
    if(e.pointerType==='mouse'&&e.button!==0)return;
    e.preventDefault();
    const sourceContainer=card.parentElement;
    const sourceGroup=sourceContainer.dataset.group;
    const rect=card.getBoundingClientRect();
    const placeholder=document.createElement('div');
    placeholder.className='dragPlaceholder';
    placeholder.style.height=rect.height+'px';
    const offsetY=e.clientY-rect.top;
    const pointerId=e.pointerId;
    card.after(placeholder);
    isDragging=true;
    document.body.classList.add('reordering');
    card.classList.add('dragging');
    Object.assign(card.style,{position:'fixed',left:rect.left+'px',top:rect.top+'px',width:rect.width+'px',zIndex:'9999',margin:'0'});
    try{handle.setPointerCapture(pointerId);}catch{}

    const chooseContainer=(x,y)=>{
      const el=document.elementFromPoint(x,y);
      let target=el?.closest?.('.cardlist');
      if(!target){
        const sec=el?.closest?.('section');
        target=sec?.querySelector?.('.cardlist')||null;
      }
      return target;
    };

    const move=ev=>{
      if(ev.pointerId!==pointerId)return;
      ev.preventDefault();
      const x=ev.clientX, y=ev.clientY;
      card.style.top=(y-offsetY)+'px';

      // 在「全部」畫面，拖到另一個 section 即可跨分類。
      const targetContainer=chooseContainer(x,y) || placeholder.parentElement;
      const candidates=[...targetContainer.querySelectorAll('.card:not(.dragging)')];
      let placed=false;
      for(const c of candidates){
        const r=c.getBoundingClientRect();
        if(y<r.top+r.height/2){targetContainer.insertBefore(placeholder,c);placed=true;break;}
      }
      if(!placed)targetContainer.appendChild(placeholder);

      if(y<90)window.scrollBy(0,-12);
      else if(y>window.innerHeight-90)window.scrollBy(0,12);
    };

    const end=async ev=>{
      if(ev.pointerId!==pointerId)return;
      handle.removeEventListener('pointermove',move);
      handle.removeEventListener('pointerup',end);
      handle.removeEventListener('pointercancel',end);
      try{handle.releasePointerCapture(pointerId);}catch{}

      const targetContainer=placeholder.parentElement;
      const targetGroup=targetContainer.dataset.group;
      placeholder.replaceWith(card);
      card.classList.remove('dragging');
      card.removeAttribute('style');
      document.body.classList.remove('reordering');
      isDragging=false;

      orderState[sourceGroup]=[...sourceContainer.querySelectorAll('.card')].map(el=>el.dataset.id);
      orderState[targetGroup]=[...targetContainer.querySelectorAll('.card')].map(el=>el.dataset.id);
      orderState=normalizeOrder(orderState);
      await syncOrder();
      render();
    };

    handle.addEventListener('pointermove',move);
    handle.addEventListener('pointerup',end);
    handle.addEventListener('pointercancel',end);
  });
}

function setStatus(type,text){const el=$('#syncBadge');el.className='sync '+type;el.textContent=text;}
function parseConfig(text){
  const keys=['apiKey','authDomain','projectId','storageBucket','messagingSenderId','appId','measurementId']; const out={};
  for(const k of keys){const m=text.match(new RegExp(k+'\\s*:\\s*["\\\']([^"\\\']+)["\\\']')); if(m)out[k]=m[1];}
  if(!out.apiKey||!out.projectId||!out.appId) throw new Error('未能讀取 apiKey、projectId 或 appId。請完整貼上 firebaseConfig。');
  return out;
}
function configToText(c){return `const firebaseConfig = {\n  apiKey: "${c.apiKey||''}",\n  authDomain: "${c.authDomain||''}",\n  projectId: "${c.projectId||''}",\n  storageBucket: "${c.storageBucket||''}",\n  messagingSenderId: "${c.messagingSenderId||''}",\n  appId: "${c.appId||''}"${c.measurementId?`,\n  measurementId: "${c.measurementId}"`:''}\n};`;}
function randomCode(){const chars='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';let s='';crypto.getRandomValues(new Uint32Array(12)).forEach(n=>s+=chars[n%chars.length]);return s;}
function packSettings(s){return btoa(unescape(encodeURIComponent(JSON.stringify({v:1,config:s.config,familyCode:s.familyCode}))));}
function unpackSettings(p){return JSON.parse(decodeURIComponent(escape(atob(p.trim()))));}

async function connectFirebase(s){
  if(unsub){unsub();unsub=null;} remoteReady=false; setStatus('wait','● 連線中');
  try{
    const appMod=await import(`https://www.gstatic.com/firebasejs/${SDK}/firebase-app.js`);
    const authMod=await import(`https://www.gstatic.com/firebasejs/${SDK}/firebase-auth.js`);
    const fsMod=await import(`https://www.gstatic.com/firebasejs/${SDK}/firebase-firestore.js`);
    const app=appMod.initializeApp(s.config,'move-checklist-'+Date.now());
    const auth=authMod.getAuth(app); await authMod.signInAnonymously(auth);
    const db=fsMod.initializeFirestore(app,{localCache:fsMod.persistentLocalCache({tabManager:fsMod.persistentMultipleTabManager()})});
    const docRef=fsMod.doc(db,'moveChecklists',s.familyCode);
    const firstSnap=await fsMod.getDoc(docRef);
    if(firstSnap.exists()){
      const data=firstSnap.data();
      if(data.states)state={...state,...data.states};
      if(data.order)orderState=normalizeOrder({...orderState,...data.order});
      saveLocal(); saveOrderLocal(); render();
      await fsMod.setDoc(docRef,{title:'叠茵庭搬屋 Checklist',symbolicMoveInDate:'2026-08-23',moveInDate:'2026-08-28',order:orderState,updatedAt:fsMod.serverTimestamp(),updatedBy:s.displayName||'家庭成員'},{merge:true});
    }else{
      await fsMod.setDoc(docRef,{title:'叠茵庭搬屋 Checklist',symbolicMoveInDate:'2026-08-23',moveInDate:'2026-08-28',states:state,order:orderState,updatedAt:fsMod.serverTimestamp(),updatedBy:s.displayName||'家庭成員'},{merge:true});
    }
    firebaseCtx={docRef,updateDoc:fsMod.updateDoc,serverTimestamp:fsMod.serverTimestamp};
    unsub=fsMod.onSnapshot(docRef,{includeMetadataChanges:true},snap=>{
      if(snap.exists()){
        const data=snap.data();
        if(data.states){state={...state,...data.states};saveLocal();}
        if(data.order){orderState=normalizeOrder({...orderState,...data.order});saveOrderLocal();}
        if(!isDragging&&!editingNoteId)render();
        remoteReady=true; const fromCache=snap.metadata.fromCache; setStatus(fromCache?'wait':'ok',fromCache?'● 離線快取':'● 已同步');
        $('#lastSync').textContent='最後同步 '+new Date().toLocaleTimeString('zh-HK',{hour:'2-digit',minute:'2-digit'});
      }
    },err=>{console.error(err);setStatus('err','● 同步錯誤');$('#lastSync').textContent=err.code||'';});
  }catch(e){console.error(e);setStatus('err','● 連線失敗');$('#lastSync').textContent=e.message||String(e);}
}

function fillSettings(){
  $('#displayName').value=settings?.displayName||''; $('#familyCode').value=settings?.familyCode||'';
  $('#firebaseConfig').value=settings?.config?configToText(settings.config):''; $('#familyPack').value=settings?.config&&settings?.familyCode?packSettings(settings):'';
}
$('#settingsBtn').onclick=()=>{fillSettings();$('#settingsMsg').textContent='';$('#settingsDialog').showModal();};
$('#generateCode').onclick=()=>{$('#familyCode').value=randomCode();};
$('#copyPack').onclick=async()=>{const v=$('#familyPack').value.trim();if(!v)return;try{await navigator.clipboard.writeText(v);$('#settingsMsg').className='msg good';$('#settingsMsg').textContent='已複製家庭設定碼。';}catch{$('#familyPack').select();}};
$('#importPack').onclick=()=>{try{const p=unpackSettings($('#familyPack').value);$('#familyCode').value=p.familyCode||'';$('#firebaseConfig').value=configToText(p.config||{});$('#settingsMsg').className='msg good';$('#settingsMsg').textContent='已匯入。請填你的名稱，再按「儲存並連線」。';}catch(e){$('#settingsMsg').className='msg error';$('#settingsMsg').textContent='家庭設定碼格式不正確。';}};
$('#saveSettings').onclick=async()=>{
  try{
    const displayName=$('#displayName').value.trim()||'家庭成員'; const familyCode=$('#familyCode').value.trim().toUpperCase(); if(!/^[A-Z2-9]{12}$/.test(familyCode))throw new Error('家庭共用碼要有 12 位英文字母／數字。');
    const config=parseConfig($('#firebaseConfig').value); const s={displayName,familyCode,config}; saveSettingsObj(s); $('#familyPack').value=packSettings(s); $('#settingsMsg').className='msg good';$('#settingsMsg').textContent='設定已儲存，正在連線…'; updateProgress(); await connectFirebase(s);
  }catch(e){$('#settingsMsg').className='msg error';$('#settingsMsg').textContent=e.message||String(e);}
};
$('#disconnectBtn').onclick=()=>{if(unsub){unsub();unsub=null;}firebaseCtx=null;remoteReady=false;localStorage.removeItem('firebaseSettingsV11');settings=null;setStatus('local','● 本機模式');$('#lastSync').textContent='';$('#settingsDialog').close();render();};
$('#reset').onclick=()=>{if(confirm('只清除這部手機的本機完成紀錄及備註？\n\n如已啟用家人同步，雲端資料不會被刪除，稍後會再次同步回來。\n\n拖移排序不會被清除。')){state={};saveLocal();render();}};
document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));b.classList.add('active');filter=b.dataset.filter;render();});
window.addEventListener('online',()=>{if(settings)connectFirebase(settings)}); window.addEventListener('offline',()=>setStatus('wait','● 離線使用'));
render(); if(settings)connectFirebase(settings);
