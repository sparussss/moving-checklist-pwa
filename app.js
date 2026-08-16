const SDK='12.17.1';
const items=[
{id:'clp',title:'電力｜中電',group:'now',tag:'需要',desc:'網上開戶／轉名；安排新地址生效日。'},
{id:'towngas',title:'煤氣｜香港中華煤氣',group:'now',tag:'需要',desc:'網上開新戶口；如需要接駁，預約技術員。'},
{id:'water',title:'食水｜水務署',group:'now',tag:'需要',desc:'申請承接用水帳戶；保存承接日水錶讀數。'},
{id:'management_move',title:'管理處｜搬屋申請',group:'now',tag:'優先',desc:'確認搬屋時段、升降機安排及搬屋按金。'},
{id:'management_resident',title:'管理處｜住戶登記',group:'now',tag:'需要',desc:'準備租約及管理處要求的住戶資料。'},
{id:'broadband',title:'家居寬頻 / Wi‑Fi',group:'now',tag:'需要',desc:'比較可用網絡及預約安裝日期。'},
{id:'simmons_mattress',title:'蓆夢思床褥',group:'now',tag:'需要',desc:'床褥安排／送貨資料。',fields:2},
{id:'osim_sofa',title:'OSIM小天后',group:'now',tag:'需要',desc:'按摩椅安排／送貨資料。',fields:2},
{id:'whirlpool_washer',title:'Whirlpool洗衣機',group:'now',tag:'需要',desc:'洗衣機安排／送貨及安裝資料。',fields:2},
{id:'lg_tv',title:'LG電視',group:'now',tag:'需要',desc:'電視安排／送貨及安裝資料。',fields:2},
{id:'table_chairs',title:'枱凳',group:'now',tag:'需要',desc:'枱凳安排／送貨資料。',fields:2},
{id:'microwave',title:'微波爐',group:'now',tag:'需要',desc:'微波爐安排／送貨資料。',fields:2},
{id:'pets',title:'確認租約／屋苑寵物規則',group:'now',tag:'優先',desc:'確認兩隻貓相關租約及管理規則。'},
{id:'mail',title:'香港郵政｜郵件轉遞',group:'now',tag:'建議',desc:'舊址郵件暫時轉寄新址。'},
{id:'meter_power',title:'電錶讀數及相片',group:'day',tag:'需要',desc:'收樓／搬入當日影低錶號及讀數。'},
{id:'meter_gas',title:'煤氣錶讀數及相片',group:'day',tag:'需要',desc:'影低錶號及讀數。'},
{id:'meter_water',title:'水錶讀數及相片',group:'day',tag:'需要',desc:'影低錶號及讀數。'},
{id:'condition',title:'全屋狀況拍照／影片',group:'day',tag:'優先',desc:'未搬入傢俬前記錄牆身、地板、門窗、廚廁及已有損壞。'},
{id:'keys',title:'點算鎖匙／信箱匙／住戶卡',group:'day',tag:'需要',desc:'記錄實際收到數量。'},
{id:'appliances_main',title:'測試冷氣／熱水爐／煮食爐',group:'day',tag:'需要',desc:'確認業主提供設備運作正常。'},
{id:'appliances_other',title:'測試雪櫃／洗衣機等業主電器',group:'day',tag:'需要',desc:'如租約包含家電，搬入時逐件測試。'},
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
const groups={now:'現在處理',day:'搬屋當日',after:'搬入後',optional:'視乎需要／通常不用'};
let filter='all';
let state=loadLocal();
let firebaseCtx=null, unsub=null, remoteReady=false;
let settings=loadSettings();

const $=s=>document.querySelector(s);
function esc(s=''){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));}
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
function loadSettings(){try{return JSON.parse(localStorage.getItem('firebaseSettingsV11')||'null');}catch{return null;}}
function saveSettingsObj(v){settings=v;localStorage.setItem('firebaseSettingsV11',JSON.stringify(v));}
function fmtTime(ms){if(!ms)return'';try{return new Intl.DateTimeFormat('zh-HK',{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'}).format(new Date(ms));}catch{return'';}}
function badgeClass(tag){return tag==='優先'?'urgent':(['視乎需要','可選','查租約','通常業主'].includes(tag)?'optional':'');}
function render(){
  const box=$('#list'); box.innerHTML='';
  Object.entries(groups).forEach(([key,label])=>{
    if(filter!=='all'&&filter!==key)return;
    const sec=document.createElement('section'); sec.innerHTML=`<h2>${label}</h2>`;
    items.filter(it=>it.group===key).forEach(it=>{
      const st=state[it.id]||{}; const d=document.createElement('div'); d.className='card '+(st.done?'done':'');
      const stamp=st.updatedBy?`最後更新：${esc(st.updatedBy)}${st.updatedAtMs?'・'+fmtTime(st.updatedAtMs):''}`:'';
      const fields=(it.fields===2)
        ? `<div class="dualFields"><textarea class="note note1" rows="1" placeholder="輸入資料 1…">${esc(st.note||'')}</textarea><textarea class="note note2" rows="1" placeholder="輸入資料 2…">${esc(st.note2||'')}</textarea></div>`
        : `<textarea class="note note1" rows="1" placeholder="備註／申請編號／預約時間…">${esc(st.note||'')}</textarea>`;
      d.innerHTML=`<div class="row"><input class="check" type="checkbox" ${st.done?'checked':''}><div style="flex:1"><div class="title">${esc(it.title)}</div><div class="meta"><span class="badge ${badgeClass(it.tag)}">${esc(it.tag)}</span>${esc(it.desc)}</div><div class="stamp">${stamp}</div>${fields}</div></div>`;
      d.querySelector('.check').addEventListener('change',e=>updateItem(it.id,{done:e.target.checked}));
      let timer1; d.querySelector('.note1').addEventListener('input',e=>{clearTimeout(timer1);timer1=setTimeout(()=>updateItem(it.id,{note:e.target.value}),500)});
      const note2=d.querySelector('.note2'); if(note2){let timer2;note2.addEventListener('input',e=>{clearTimeout(timer2);timer2=setTimeout(()=>updateItem(it.id,{note2:e.target.value}),500)});}
      sec.appendChild(d);
    }); box.appendChild(sec);
  }); updateProgress();
}
function updateProgress(){
  const n=items.filter(it=>state[it.id]?.done).length; $('#ptext').textContent=`${n} / ${items.length} 已完成`; $('#fill').style.width=(n/items.length*100)+'%';
  $('#who').textContent=settings?.displayName?`使用者：${settings.displayName}`:'';
}
async function updateItem(id,patch){
  const now=Date.now(); const by=settings?.displayName||'本機使用者';
  state[id]={...(state[id]||{}),...patch,updatedBy:by,updatedAtMs:now}; saveLocal(); render();
  if(firebaseCtx&&remoteReady){
    try{
      const {docRef,updateDoc,serverTimestamp}=firebaseCtx;
      await updateDoc(docRef,{[`states.${id}`]:state[id],updatedAt:serverTimestamp(),updatedBy:by});
      setStatus('ok','● 已同步');
    }catch(e){setStatus('err','● 等待同步'); console.warn(e);}
  }
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
    if(firstSnap.exists() && firstSnap.data().states){
      state={...state,...firstSnap.data().states}; saveLocal(); render();
      await fsMod.setDoc(docRef,{title:'叠茵庭搬屋 Checklist',moveInDate:'2026-08-22',updatedAt:fsMod.serverTimestamp(),updatedBy:s.displayName||'家庭成員'},{merge:true});
    }else{
      await fsMod.setDoc(docRef,{title:'叠茵庭搬屋 Checklist',moveInDate:'2026-08-22',states:state,updatedAt:fsMod.serverTimestamp(),updatedBy:s.displayName||'家庭成員'},{merge:true});
    }
    firebaseCtx={docRef,updateDoc:fsMod.updateDoc,serverTimestamp:fsMod.serverTimestamp};
    unsub=fsMod.onSnapshot(docRef,{includeMetadataChanges:true},snap=>{
      if(snap.exists()){
        const data=snap.data(); if(data.states){state={...state,...data.states};saveLocal();render();}
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
$('#reset').onclick=()=>{if(confirm('只清除這部手機的本機完成紀錄及備註？\n\n如已啟用家人同步，雲端資料不會被刪除，稍後會再次同步回來。')){state={};saveLocal();render();}};
document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));b.classList.add('active');filter=b.dataset.filter;render();});
window.addEventListener('online',()=>{if(settings)connectFirebase(settings)}); window.addEventListener('offline',()=>setStatus('wait','● 離線使用'));
render(); if(settings)connectFirebase(settings);
