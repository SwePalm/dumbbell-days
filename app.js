const days = ['M', 'W', 'F'];
const dayNames = { M: 'Monday', W: 'Wednesday', F: 'Friday' };
const schedule = [
  { legs:['A','A','B'], chest:['C','','B'], shoulders:['','A','B'], back:['C','','C'], arms:['A','C',''], abs:['A','A','A'], calves:['A','A','A'] },
  { legs:['C','','B'], chest:['A','A','B'], shoulders:['C','','B'], back:['A','A','B'], arms:['A','C',''], abs:['A','A','A'], calves:['A','A','A'] },
  { legs:['A','A','B'], chest:['C','','B'], shoulders:['A','A','B'], back:['C','','B'], arms:['A','C',''], abs:['A','A','A'], calves:['A','A','A'] },
  { legs:['C','','B'], chest:['A','A','B'], shoulders:['C','','B'], back:['A','A','C'], arms:['A','C',''], abs:['A','A','A'], calves:['A','A','A'] },
  { legs:['A','A','B'], chest:['C','','B'], shoulders:['','A','B'], back:['','A','B'], arms:['C','',''], abs:['A','A','A'], calves:['A','A','A'] },
  { legs:['C','','B'], chest:['A','A','B'], shoulders:['C','','B'], back:['A','A','B'], arms:['A','C',''], abs:['A','A','A'], calves:['A','A','A'] },
  { legs:['A','A','B'], chest:['C','','B'], shoulders:['A','A','B'], back:['C','','B'], arms:['A','C',''], abs:['A','A','A'], calves:['A','A','A'] },
  { legs:['C','','B'], chest:['A','A','B'], shoulders:['C','','B'], back:['A','A','B'], arms:['','A','B'], abs:['A','A','A'], calves:['A','A','A'] }
];
const labels = { legs:'Legs', chest:'Chest', shoulders:'Shoulders', back:'Back', arms:'Arms', abs:'Abs', calves:'Calves' };
const plans = {
 legs: { A:[['Keystone Dumbbell Deadlift','65% · 6 reps · 3 sets']], B:[['Keystone Dumbbell Deadlift','75% · 6 reps · 3 sets'],['Sissy Squat','8 reps · 2 sets']], C:[['Keystone Dumbbell Deadlift','80% · 5 reps'],['Dumbbell Lunges','65% · 12 reps'],['Free Squats','Bodyweight · 40 reps']] },
 chest: { A:[['Dumbbell Bench Press','65% · 6 reps · 3 sets']], B:[['Dumbbell Bench Press','75% · 6 reps · 3 sets'],['Chest Fly','65% · 12 reps · 2 sets']], C:[['Dumbbell Bench Press','80% · 5 reps'],['Chest Fly','65% · 12 reps'],['Dumbbell Reverse-grip Bench','35% · 40 reps']] },
 shoulders: { A:[['Front Raise','6 reps · 3 sets']], B:[['Front Raise','6 reps · 3 sets'],['Lateral Raise','12 reps · 2 sets']], C:[['Front Raise','6 reps'],['Lateral Raise','12 reps'],['Dumbbell Overhead Press','40 reps']] },
 triceps: { A:[['Decline Dumbbell Triceps Extension','12 reps · 3 sets']], B:[['Decline Dumbbell Triceps Extension','12 reps · 2 sets'],['Bar Dip','6 reps · 2 sets']], C:[['Bar Dip','6 reps'],['Decline Dumbbell Triceps Extension','6 reps'],['Tate Press','40 reps']] },
 biceps: { A:[['Dumbbell Curl','6 reps · 3 sets']], B:[['Dumbbell Curl','6 reps · 3 sets'],['Zottman Curl','12 reps · 2 sets']], C:[['Dumbbell Curl','6 reps'],['Zottman Curl','12 reps'],['Incline Dumbbell Curl','40 reps']] },
 back: { A:[['Dumbbell Bent Row','6 reps · 3 sets']], B:[['Supported Dumbbell Row','6 reps · 3 sets'],['Dumbbell Bent Row','6 reps · 3 sets'],['Seated Dumbbell Shrug','12 reps · 2 sets']], C:[['Supported Dumbbell Row','12 reps'],['Dumbbell Bent Row','6 reps'],['Reverse Fly','12 reps'],['Dumbbell Pullover','40 reps'],['Seated Dumbbell Shrug','12 reps · 2 sets']] },
 abs: { A:[['Crunch','Choose a comfortable set'],['Russian Twist','Choose a comfortable set'],['Side Bend','Choose a comfortable set']] },
 calves: { A:[['Calf Raise','Choose a comfortable set']] }
};
const tips = {
 'Keystone Dumbbell Deadlift':['Hinge, don’t squat','Hold the dumbbells by your sides. Keep a soft bend in the knees and push your hips back until you feel your hamstrings. Stand by squeezing your glutes; keep the weights close.'],
 'Sissy Squat':['Knees forward, torso long','Hold a support if needed. Rise onto the balls of your feet, let knees travel forward while your body stays in one long line, then press back up. Start shallow.'],
 'Dumbbell Lunges':['Long, quiet steps','Step back or forward, lower straight down and keep the front knee tracking over toes. Push through the whole front foot to stand.'],
 'Free Squats':['Smooth, steady rhythm','Feet about shoulder-width. Sit down between your hips, keep chest comfortably tall, and stand through your mid-foot.'],
 'Dumbbell Bench Press':['Press slightly in and up','Lie stable with feet planted. Lower the dumbbells with control to chest level, elbows roughly 30–60° from your body, then press.'],
 'Chest Fly':['Hug a barrel','Keep a small bend in the elbows. Open only as far as the shoulders feel good, then bring the weights together using the chest—not a straight-arm swing.'],
 'Dumbbell Reverse-grip Bench':['Palms face you','Use a lighter load. Keep wrists stacked and elbows close to your sides. The reverse grip shifts emphasis toward the upper chest and triceps.'],
 'Front Raise':['Lift to shoulder height','Brace your ribs down. Raise with a slight elbow bend, stop around shoulder height, and lower slowly—no leaning back.'],
 'Lateral Raise':['Lead with elbows','Raise the dumbbells out and slightly forward in the shoulder-blade plane. Keep shoulders down and use a light weight.'],
 'Dumbbell Overhead Press':['Stack over your shoulders','Start at shoulder height, brace your midsection, and press overhead without flaring your ribs. Lower slowly.'],
 'Decline Dumbbell Triceps Extension':['Only bend at the elbow','On a decline bench, keep upper arms mostly still. Lower dumbbells beside the head, then straighten elbows fully without locking hard.'],
 'Bar Dip':['Shoulders down, chest proud','Support yourself with straight arms. Lower only as far as your shoulders feel comfortable, then press the bars away. Avoid dropping into the bottom.'],
 'Tate Press':['Dumbbells meet above the chest','Lie on a bench. Start with dumbbells over your chest, palms facing your feet; lower toward the chest by bending elbows out, then extend back up. Light weight first.'],
 'Dumbbell Bent Row':['Row toward your hip','Hinge until your torso is near parallel to the floor. Keep your spine long, pull elbows toward the hips, pause, then lower fully.'],
 'Supported Dumbbell Row':['Row toward your hip','Place one hand and the same-side knee on a stable bench. Keep your back long and row the dumbbell toward your hip; lower it slowly without twisting the torso.'],
 'Seated Dumbbell Shrug':['Straight up and down','Sit tall with dumbbells at your sides. Lift shoulders toward ears, pause briefly, and lower slowly. Do not roll the shoulders.'],
 'Reverse Fly':['Open wide, stay light','Hinge forward and keep a gentle elbow bend. Sweep arms out until in line with your body; focus on the back of the shoulders.'],
 'Dumbbell Pullover':['Ribs down, arc behind you','Lie across or along a bench. With softly bent elbows, lower one dumbbell behind your head only as far as shoulders allow, then pull it back over chest.'],
 'Dumbbell Curl':['Elbows stay by your sides','Curl without swinging the torso, squeeze at the top, and take 2–3 seconds to lower.'],
 'Zottman Curl':['Curl up, rotate down','Curl with palms up. At the top rotate palms down, then lower slowly with the overhand grip—great for forearms.'],
 'Incline Dumbbell Curl':['Let the arms hang back','On an incline bench, let arms hang naturally behind the torso. Curl without moving your upper arm; keep it light.'],
 'Crunch':['Small curl, not a sit-up','Keep chin gently tucked, exhale as you curl ribs toward hips, and avoid pulling on your neck.'],
 'Russian Twist':['Rotate your ribs','Sit tall, lean back slightly, and rotate from the torso side to side. Keep the motion controlled; feet can stay down.'],
 'Side Bend':['Slide, don’t twist','Hold one dumbbell and slowly bend directly to that side, then use your obliques to return upright.'],
 'Calf Raise':['Pause at both ends','Press through the big toe to rise high, hold briefly, then lower until you feel a gentle stretch.']
};
const formImages = {
 'Calf Raise':'calf-raise-form.png',
 'Keystone Dumbbell Deadlift':'keystone-dumbbell-deadlift-form.png',
 'Sissy Squat':'sissy-squat-form.png',
 'Dumbbell Lunges':'dumbbell-lunge-form.png',
 'Free Squats':'free-squat-form.png',
 'Dumbbell Bench Press':'dumbbell-bench-press-form.png',
 'Chest Fly':'chest-fly-form.png',
 'Dumbbell Reverse-grip Bench':'dumbbell-reverse-grip-bench-form.png',
 'Front Raise':'front-raise-form.png',
 'Lateral Raise':'lateral-raise-form.png',
 'Dumbbell Overhead Press':'dumbbell-overhead-press-form.png',
 'Decline Dumbbell Triceps Extension':'decline-dumbbell-triceps-extension-form.png',
 'Bar Dip':'bar-dip-form.png',
 'Tate Press':'tate-press-form.png',
 'Dumbbell Bent Row':'dumbbell-bent-row-form.png',
 'Supported Dumbbell Row':'pull-up-form.png',
 'Seated Dumbbell Shrug':'seated-dumbbell-shrug-form.png',
 'Reverse Fly':'reverse-fly-form.png',
 'Dumbbell Pullover':'dumbbell-pullover-form.png',
 'Dumbbell Curl':'dumbbell-curl-form.png',
 'Zottman Curl':'zottman-curl-form.png',
 'Incline Dumbbell Curl':'incline-dumbbell-curl-form.png',
 'Crunch':'crunch-form.png',
 'Russian Twist':'russian-twist-form.png',
 'Side Bend':'side-bend-form.png'
};
let week = Number(localStorage.getItem('dd-week') || 1), selected = null;
let expandedBlocks = new Set();
const completionKey = (w,d) => `dd-complete-${w}-${d}`;
const read = (w,d) => JSON.parse(localStorage.getItem(completionKey(w,d)) || '[]');
const write = (w,d,value) => localStorage.setItem(completionKey(w,d), JSON.stringify(value));
function entriesFor(day) { const s=schedule[week-1], i=days.indexOf(day); return Object.entries(s).filter(([,v])=>v[i]).flatMap(([part,v]) => part==='arms' ? [['biceps',v[i]],['triceps',v[i]]] : [[part,v[i]]]); }
function icon() { return `<svg class="move" viewBox="0 0 100 90" aria-hidden="true"><circle cx="50" cy="15" r="8"/><path d="M50 23v28m0-20L30 44m20-13 20 13M50 51 35 75m15-24 15 24" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round"/><path d="M22 42h16m24 0h16" stroke="#d9ff36" stroke-width="5" stroke-linecap="round"/></svg>`; }
function render() { const today=new Date().getDay(), day=days.find((_,i)=>[1,3,5][i]===today) || 'M'; const done=days.filter(d=>{const e=entriesFor(d);return e.length && read(week,d).length>=e.flatMap(([p,l])=>plans[p][l]).length}).length;
 document.querySelector('#app').innerHTML = `
 <section class="home"><div class="brand"><span class="brand-mark">—◉—</span><span>DUMBBELL DAYS</span></div><div class="weekline"><button id="prev" aria-label="Previous week">‹</button><div><p>YOUR PROGRAM</p><h1>Week ${week}<span>/ 8</span></h1></div><button id="next" aria-label="Next week">›</button></div>
 <div class="progress"><span>WEEKLY RHYTHM</span><b>${done} / 3 sessions complete</b><div class="bar"><i style="width:${done/3*100}%"></i></div></div>
 <div class="days">${days.map(d=>{const es=entriesFor(d), complete=es.length&&read(week,d).length>=es.flatMap(([p,l])=>plans[p][l]).length; return `<button class="day ${complete?'complete':''} ${!es.length?'rest':''}" data-day="${d}"><span>${d}</span><strong>${complete?'✓ DONE':es.length?'TRAIN':'REST'}</strong><small>${es.map(([p])=>labels[p]||p).join(' + ')||'Rest day'}</small></button>`}).join('')}</div>
 <div class="hint">Tap a day to see your session</div><button class="reset" id="reset">Reset program</button></section>
 <section class="session ${selected?'show':''}">${selected ? session(selected) : ''}</section>
 <div class="modal" id="modal"></div>`;
 document.querySelector('#prev').onclick=()=>{week=week===1?8:week-1;localStorage.setItem('dd-week',week);render()}; document.querySelector('#next').onclick=()=>{week=week===8?1:week+1;localStorage.setItem('dd-week',week);render()};
 document.querySelectorAll('[data-day]').forEach(b=>b.onclick=()=>{ if(!entriesFor(b.dataset.day).length)return; selected=b.dataset.day; expandedBlocks=new Set(); render(); requestAnimationFrame(()=>document.querySelector('.session').scrollIntoView({behavior:'smooth',block:'start'}))});
 document.querySelector('#reset').onclick=()=>{if(!confirm('Reset the entire 8-week program? This clears all completed exercises on this device.'))return;Object.keys(localStorage).filter(key=>key.startsWith('dd-complete-')||key==='dd-week').forEach(key=>localStorage.removeItem(key));week=1;selected=null;expandedBlocks=new Set();render();window.scrollTo({top:0,behavior:'smooth'})};
 bindSession();
}
function session(day) { const completed=read(week,day), sections=entriesFor(day); const all=sections.flatMap(([p,l])=>plans[p][l]); return `<div class="session-head"><div><p>${dayNames[day]} · WEEK ${week}</p><h2>${sections.map(([p])=>labels[p]||p).join(' + ')}</h2></div><button id="close" aria-label="Close session">×</button></div><p class="intro">Tap an exercise for a quick form reminder. Check it when the work is done.</p>${sections.map(([part,level])=>{const blockId=`${part}-${level}`, exercises=plans[part][level], done=exercises.every((_,idx)=>completed.includes(`${blockId}-${idx}`)), folded=done&&!expandedBlocks.has(blockId);return `<div class="block ${folded?'folded':''}"><button class="block-title" data-toggle="${blockId}"><span>${done?'✓ ':''}${labels[part]||part}</span><b>${done?'COMPLETE · ':'Phase '}${level}${level==='C'?' · 2 giant sets':''}${done?' · show':''}</b></button><div class="block-exercises">${exercises.map(([name,detail],idx)=>{let id=`${blockId}-${idx}`;return `<label class="exercise ${completed.includes(id)?'checked':''}"><input type="checkbox" data-check="${id}" ${completed.includes(id)?'checked':''}/><span class="check"></span><span class="exercise-copy"><b>${name}</b><small>${detail}</small></span><button class="help" data-help="${name}" aria-label="Help with ${name}">?</button></label>`}).join('')}</div></div>`}).join('')}<div class="complete-note">${completed.length===all.length?'Session complete — nice work.':'Move well. Leave a rep in reserve when form changes.'}</div>`; }
function bindSession(){ const close=document.querySelector('#close');if(close)close.onclick=()=>{selected=null;render();window.scrollTo({top:0,behavior:'smooth'})};document.querySelectorAll('[data-check]').forEach(input=>input.onchange=()=>{let v=read(week,selected),id=input.dataset.check;v=input.checked?[...new Set([...v,id])]:v.filter(x=>x!==id);write(week,selected,v);render()});document.querySelectorAll('[data-help]').forEach(b=>b.onclick=e=>{e.preventDefault();e.stopPropagation();showHelp(b.dataset.help)});document.querySelectorAll('[data-toggle]').forEach(button=>button.onclick=()=>{const id=button.dataset.toggle;expandedBlocks.has(id)?expandedBlocks.delete(id):expandedBlocks.add(id);render()}); }
function showHelp(name){const [title,body]=tips[name]||['A deliberate, controlled rep','Choose a weight that lets you keep the movement smooth and pain-free.'];const image=formImages[name];const visual=image?`<img src="assets/${image}" alt="Illustration of ${name}">`:`${icon()}`;const modal=document.querySelector('#modal');modal.className='modal open';modal.innerHTML=`<div class="sheet"><button class="sheet-close" aria-label="Close exercise guide" title="Close">×</button><div class="diagram ${image?'illustrated':''}">${visual}<span>FORM CUE</span></div><p>EXERCISE GUIDE</p><h2>${name}</h2><h3>${title}</h3><div class="rule"></div><p class="tip">${body}</p><div class="safety">If you feel sharp pain, stop. Adjust range, load, or choose an alternative.</div></div>`;modal.onclick=e=>{if(e.target===modal||e.target.closest('.sheet-close')){modal.className='modal';modal.innerHTML=''}}}
if ('serviceWorker' in navigator) navigator.serviceWorker.register('./service-worker.js');
render();
