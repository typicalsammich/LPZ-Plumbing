import * as THREE from 'three';

export type ModelKind='construction'|'remodel'|'emergency'|'diagnostics'|'specialty';
export function createPlumbingModel(kind:ModelKind){
  const root=new THREE.Group();
  const chrome=new THREE.MeshStandardMaterial({color:0xb7c9d7,metalness:.92,roughness:.22});
  const steel=new THREE.MeshStandardMaterial({color:0x485a67,metalness:.85,roughness:.34});
  const blue=new THREE.MeshStandardMaterial({color:0x027fc4,metalness:.45,roughness:.3});
  const red=new THREE.MeshStandardMaterial({color:0xa52324,metalness:.4,roughness:.4});
  const white=new THREE.MeshStandardMaterial({color:0xe4edf0,metalness:.15,roughness:.28});
  const dark=new THREE.MeshStandardMaterial({color:0x172733,metalness:.4,roughness:.5});
  const concrete=new THREE.MeshStandardMaterial({color:0x52616b,roughness:.98});
  const wood=new THREE.MeshStandardMaterial({color:0x887358,roughness:.85});
  const light=new THREE.MeshStandardMaterial({color:0x2dbfff,emissive:0x109be0,emissiveIntensity:2,metalness:.2,roughness:.2});
  const water=new THREE.MeshPhysicalMaterial({color:0x23baff,metalness:.1,roughness:.1,transparent:true,opacity:.72,clearcoat:1});
  const mesh=(g:THREE.BufferGeometry,m:THREE.Material,p:THREE.Vector3|number[]=[],parent:THREE.Object3D=root)=>{const o=new THREE.Mesh(g,m);if(p instanceof THREE.Vector3)o.position.copy(p);else o.position.set(p[0]||0,p[1]||0,p[2]||0);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o};
  const box=(w:number,h:number,d:number,x:number,y:number,z:number,m:THREE.Material=chrome,parent:THREE.Object3D=root)=>mesh(new THREE.BoxGeometry(w,h,d),m,[x,y,z],parent);
  const tube=(points:number[][],radius=.07,m:THREE.Material=chrome,parent:THREE.Object3D=root)=>{const curve=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p as [number,number,number])),false,'centripetal');return mesh(new THREE.TubeGeometry(curve,48,radius,12,false),m,[],parent)};
  const cylinder=(r:number,h:number,x:number,y:number,z:number,m:THREE.Material=chrome,parent:THREE.Object3D=root)=>mesh(new THREE.CylinderGeometry(r,r,h,40),m,[x,y,z],parent);
  const collar=(x:number,y:number,z:number,r=.14,parent:THREE.Object3D=root)=>{const c=cylinder(r,.12,x,y,z,chrome,parent);c.rotation.z=Math.PI/2;return c};
  const bolt=(x:number,y:number,z:number,parent:THREE.Object3D=root)=>{const c=mesh(new THREE.CylinderGeometry(.045,.045,.08,6),chrome,[x,y,z],parent);c.rotation.z=Math.PI/2;return c};
  const moving:THREE.Mesh[]=[];
  let probe:THREE.Group|undefined,outer:THREE.Mesh|undefined,beam:THREE.Mesh|undefined;
  if(kind==='construction'){
    box(4.2,.2,3.1,0,-.92,0,concrete);
    box(4.1,.13,.15,0,-.74,-1.25,wood);box(.13,2.35,.13,-1.85,.4,-1.25,wood);box(.13,2.35,.13,1.85,.4,-1.25,wood);box(3.8,.13,.13,0,1.57,-1.25,wood);
    for(let i=0;i<5;i++)box(.065,2.15,.08,-1.3+i*.65,.4,-1.25,wood);
    tube([[-1.9,-.57,1],[-.8,-.57,1],[-.7,-.57,.8],[-.7,-.57,-.8],[-.7,-.3,-.95],[-.7,.85,-.95]],.1,blue);
    tube([[-1.9,-.57,.55],[.65,-.57,.55],[.85,-.57,.35],[.85,-.57,-.85],[.85,-.3,-.95],[.85,1.1,-.95]],.08,chrome);
    tube([[1.8,-.52,1.2],[.2,-.52,1.2],[.05,-.52,1],[.05,-.52,-.4],[.05,-.2,-.55],[.05,.35,-.55]],.15,dark);
    for(const x of [-.7,.85]){cylinder(.12,.18,x,.88,-.95,chrome);box(.25,.1,.13,x,.5,-.96,blue)}
    for(let i=0;i<4;i++)box(.16,.035,.4,-1.4+i*.8,-.79,.7,chrome);
  }else if(kind==='remodel'){
    box(3.8,.16,2.7,0,-1,0,concrete);box(3.8,2.5,.12,0,.23,-1.05,white);
    for(let i=0;i<7;i++)box(.008,2.4,.01,-1.65+i*.55,.25,-.982,steel);
    for(let i=0;i<5;i++)box(3.7,.008,.01,0,-.7+i*.52,-.982,steel);
    box(2.55,1.1,1.15,0,-.26,-.2,dark);box(2.75,.13,1.3,0,.37,-.2,chrome);
    const bowl=mesh(new THREE.SphereGeometry(.55,48,24,0,Math.PI*2,0,Math.PI/2),white,[0,.49,-.18]);bowl.rotation.x=Math.PI;bowl.scale.set(1,.38,.7);bowl.material=new THREE.MeshStandardMaterial({color:0xebf3f4,metalness:.15,roughness:.18,side:THREE.DoubleSide});
    const rim=mesh(new THREE.TorusGeometry(.5,.045,12,48),white,[0,.5,-.18]);rim.rotation.x=Math.PI/2;rim.scale.y=.7;
    tube([[0,.46,-.72],[0,1.04,-.72],[0,1.13,-.64],[0,1.13,-.32],[0,1.03,-.24]],.055,chrome);
    cylinder(.095,.03,0,.45,-.72);box(.22,.045,.04,.23,.53,-.72,chrome);
    for(const x of [-.64,.64])box(.36,.024,.035,x,.14,.387,chrome);
    box(.008,.94,.013,0,-.28,.38,steel);
    const mirror=box(1.9,.8,.05,0,1.04,-.955,chrome);mirror.material=new THREE.MeshPhysicalMaterial({color:0x7ca2b8,metalness:1,roughness:.06});
  }else if(kind==='emergency'){
    box(4,.15,2.6,0,-.93,0,concrete);
    tube([[-2,.1,0],[-.5,.1,0]],.24,chrome);tube([[-.33,.1,0],[1.8,.1,0]],.24,chrome);
    for(const x of [-1.7,-.9,.8,1.65])collar(x,.1,0,.3);
    cylinder(.13,.48,1.13,.42,0,steel);const wheel=mesh(new THREE.TorusGeometry(.35,.047,10,32),red,[1.13,.68,0]);wheel.rotation.x=Math.PI/2;
    box(.66,.04,.045,1.13,.68,0,red);box(.045,.04,.66,1.13,.68,0,red);
    tube([[-.43,.2,.05],[-.45,.47,.23],[-.49,.5,.43],[-.56,.28,.67],[-.64,-.76,.92]],.035,water);
    for(let i=0;i<25;i++){const d=mesh(new THREE.SphereGeometry(.025+(i%3)*.009,10,8),water,[-.43,.45,.2]);d.userData.seed=i/25;moving.push(d)}
    for(let i=0;i<3;i++){const r=mesh(new THREE.TorusGeometry(.23+i*.16,.008,6,48),water,[-.65,-.84,.92]);r.rotation.x=Math.PI/2;r.scale.y=.6;moving.push(r);r.userData.ripple=true}
  }else if(kind==='diagnostics'){
    const shell=mesh(new THREE.CylinderGeometry(.79,.79,4.6,64,1,true,1.8,4.15),steel);shell.rotation.z=Math.PI/2;
    const inner=mesh(new THREE.CylinderGeometry(.735,.735,4.6,64,1,true,1.8,4.15),new THREE.MeshStandardMaterial({color:0x263c49,metalness:.65,roughness:.43,side:THREE.DoubleSide}));inner.rotation.copy(shell.rotation);
    outer=mesh(new THREE.CylinderGeometry(.79,.79,4.6,64,1,true),new THREE.MeshStandardMaterial({color:0x92a5b0,metalness:.92,roughness:.25,transparent:true,opacity:.95,side:THREE.DoubleSide}));outer.rotation.z=Math.PI/2;
    for(const x of [-2.23,2.23]){const rim=mesh(new THREE.TorusGeometry(.79,.08,12,64),chrome,[x,0,0]);rim.rotation.y=Math.PI/2;for(let i=0;i<8;i++)bolt(x,Math.cos(i*Math.PI/4)*.91,Math.sin(i*Math.PI/4)*.91)}
    tube([[-3,-.28,.05],[-2.4,-.2,0],[-1.4,-.15,0],[-.9,-.1,0]],.037,blue);
    probe=new THREE.Group();root.add(probe);probe.position.set(-1,-.1,0);
    const body=cylinder(.17,.48,0,0,0,chrome,probe);body.rotation.z=Math.PI/2;
    collar(.18,0,0,.19,probe);const lens=cylinder(.125,.025,.26,0,0,dark,probe);lens.rotation.z=Math.PI/2;
    const lensRing=mesh(new THREE.TorusGeometry(.13,.015,10,32),light,[.28,0,0],probe);lensRing.rotation.y=Math.PI/2;
    for(let i=0;i<6;i++)mesh(new THREE.SphereGeometry(.024,10,8),light,[.265,Math.cos(i*Math.PI/3)*.16,Math.sin(i*Math.PI/3)*.16],probe);
    beam=mesh(new THREE.ConeGeometry(.62,1.65,40,1,true),new THREE.MeshBasicMaterial({color:0x1fbcff,transparent:true,opacity:.06,side:THREE.DoubleSide,depthWrite:false}),[1.1,0,0],probe);beam.rotation.z=Math.PI/2;
    for(let i=0;i<6;i++)tube([[1.2,-.68,-.4+i*.15],[1.05+Math.sin(i)*.12,-.48,-.34+i*.13],[1.15,-.17,-.24+i*.1],[1.3,-.02,-.15+i*.07]],.025,new THREE.MeshStandardMaterial({color:0x957458,roughness:.95}));
    box(4.7,.1,1.5,0,-1.08,0,dark);for(const x of [-1.6,1.6])box(.12,.2,1.3,x,-.96,0,steel);
  }else{
    box(3.5,.12,2.6,0,-1.1,0,concrete);box(2.7,2.3,.09,0,.15,-.7,dark);
    for(const x of [-.83,-.13,.57]){cylinder(.24,1.24,x,-.14,-.22,white);cylinder(.29,.18,x,.57,-.22,blue);cylinder(.23,.1,x,-.81,-.22,chrome);box(.22,.36,.018,x,-.02,.025,blue)}
    tube([[-1.5,.63,-.2],[-1.3,.73,-.2],[.9,.73,-.2],[1.12,.63,-.2],[1.12,-.42,.55]],.055,chrome);
    cylinder(.45,1.25,1.15,-.37,.57,blue);mesh(new THREE.SphereGeometry(.45,32,16),blue,[1.15,.25,.57]).scale.y=.38;
    const gauge=cylinder(.16,.07,-1.18,.92,-.2,chrome);gauge.rotation.x=Math.PI/2;
    const face=cylinder(.13,.008,-1.18,.92,-.158,white);face.rotation.x=Math.PI/2;box(.01,.1,.01,-1.18,.95,-.15,red);
    box(2.6,.12,.43,-.15,.76,-.4,chrome);
  }
  return {root,update:(t:number,scan:number)=>{if(outer)(outer.material as THREE.MeshStandardMaterial).opacity=.95-scan*.93;if(probe){probe.position.x=-1+scan*.55+Math.sin(t*.4)*scan*.035;if(beam)(beam.material as THREE.MeshBasicMaterial).opacity=.02+scan*.13}moving.forEach((m,i)=>{if(m.userData.ripple){const p=((t*.45+i*.25)%1);m.scale.set(1+p*.7,1+p*.7,1);return}const p=(t*.45+m.userData.seed)%1;m.position.set(-.43-.38*p,.36+Math.sin(p*Math.PI)*.6-p*1.3,.1+p*1.15);m.scale.setScalar(1-p*.4)})}};
}

