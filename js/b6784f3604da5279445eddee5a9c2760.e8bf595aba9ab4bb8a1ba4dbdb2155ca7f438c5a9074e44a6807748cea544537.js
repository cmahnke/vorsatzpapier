(()=>{function P(n,t){if(!n)throw new Error(t)}var lt={UNKNOWN:0,INTERSECTING:1,ABOVE:2,RIGHT:4,BELOW:8,LEFT:16};function Lr(n){let t=Ot();for(let e=0,i=n.length;e<i;++e)Nn(t,n[e]);return t}function Zh(n,t,e){let i=Math.min.apply(null,n),r=Math.min.apply(null,t),s=Math.max.apply(null,n),o=Math.max.apply(null,t);return pe(i,r,s,o,e)}function va(n,t){return t?(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t):n.slice()}function pi(n,t,e){let i,r;return t<n[0]?i=n[0]-t:n[2]<t?i=t-n[2]:i=0,e<n[1]?r=n[1]-e:n[3]<e?r=e-n[3]:r=0,i*i+r*r}function Ze(n,t){return Mr(n,t[0],t[1])}function qh(n,t){return n[0]<=t[0]&&t[2]<=n[2]&&n[1]<=t[1]&&t[3]<=n[3]}function Mr(n,t,e){return n[0]<=t&&t<=n[2]&&n[1]<=e&&e<=n[3]}function Ca(n,t){let e=n[0],i=n[1],r=n[2],s=n[3],o=t[0],a=t[1],l=lt.UNKNOWN;return o<e?l=l|lt.LEFT:o>r&&(l=l|lt.RIGHT),a<i?l=l|lt.BELOW:a>s&&(l=l|lt.ABOVE),l===lt.UNKNOWN&&(l=lt.INTERSECTING),l}function Ot(){return[1/0,1/0,-1/0,-1/0]}function pe(n,t,e,i,r){return r?(r[0]=n,r[1]=t,r[2]=e,r[3]=i,r):[n,t,e,i]}function be(n){return pe(1/0,1/0,-1/0,-1/0,n)}function Ra(n,t){let e=n[0],i=n[1];return pe(e,i,e,i,t)}function Ta(n,t,e,i,r){let s=be(r);return br(s,n,t,e,i)}function Dn(n,t){return n[0]==t[0]&&n[2]==t[2]&&n[1]==t[1]&&n[3]==t[3]}function Ia(n,t){return t[0]<n[0]&&(n[0]=t[0]),t[2]>n[2]&&(n[2]=t[2]),t[1]<n[1]&&(n[1]=t[1]),t[3]>n[3]&&(n[3]=t[3]),n}function Nn(n,t){t[0]<n[0]&&(n[0]=t[0]),t[0]>n[2]&&(n[2]=t[0]),t[1]<n[1]&&(n[1]=t[1]),t[1]>n[3]&&(n[3]=t[1])}function br(n,t,e,i,r){for(;e<i;e+=r)Hh(n,t[e],t[e+1]);return n}function Hh(n,t,e){n[0]=Math.min(n[0],t),n[1]=Math.min(n[1],e),n[2]=Math.max(n[2],t),n[3]=Math.max(n[3],e)}function _i(n,t){let e;return e=t(qe(n)),e||(e=t(He(n)),e)||(e=t($e(n)),e)||(e=t(Tt(n)),e)?e:!1}function Fn(n){let t=0;return _e(n)||(t=k(n)*rt(n)),t}function qe(n){return[n[0],n[1]]}function He(n){return[n[2],n[1]]}function jt(n){return[(n[0]+n[2])/2,(n[1]+n[3])/2]}function Aa(n,t){let e;if(t==="bottom-left")e=qe(n);else if(t==="bottom-right")e=He(n);else if(t==="top-left")e=Tt(n);else if(t==="top-right")e=$e(n);else throw new Error("Invalid corner");return e}function zn(n,t,e,i,r){let[s,o,a,l,c,h,u,f]=Pr(n,t,e,i);return pe(Math.min(s,a,c,u),Math.min(o,l,h,f),Math.max(s,a,c,u),Math.max(o,l,h,f),r)}function Pr(n,t,e,i){let r=t*i[0]/2,s=t*i[1]/2,o=Math.cos(e),a=Math.sin(e),l=r*o,c=r*a,h=s*o,u=s*a,f=n[0],d=n[1];return[f-l+u,d-c-h,f-l-u,d-c+h,f+l-u,d+c+h,f+l+u,d+c-h,f-l+u,d-c-h]}function rt(n){return n[3]-n[1]}function Wt(n,t,e){let i=e||Ot();return Yt(n,t)?(n[0]>t[0]?i[0]=n[0]:i[0]=t[0],n[1]>t[1]?i[1]=n[1]:i[1]=t[1],n[2]<t[2]?i[2]=n[2]:i[2]=t[2],n[3]<t[3]?i[3]=n[3]:i[3]=t[3]):be(i),i}function $h(n,t){if(!Yt(n,t))return[n.slice()];if(qh(t,n))return[];let[e,i,r,s]=n,o=Math.max(e,t[0]),a=Math.max(i,t[1]),l=Math.min(r,t[2]),c=Math.min(s,t[3]),h=[];return o>e&&h.push([e,i,o,s]),l<r&&h.push([l,i,r,s]),a>i&&h.push([o,i,l,a]),c<s&&h.push([o,c,l,s]),h}function Tt(n){return[n[0],n[3]]}function $e(n){return[n[2],n[3]]}function k(n){return n[2]-n[0]}function Yt(n,t){return n[0]<=t[2]&&n[2]>=t[0]&&n[1]<=t[3]&&n[3]>=t[1]}function _e(n){return n[2]<n[0]||n[3]<n[1]}function Sa(n,t){return t?(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t):n}function La(n,t,e){let i=!1,r=Ca(n,t),s=Ca(n,e);if(r===lt.INTERSECTING||s===lt.INTERSECTING)i=!0;else{let o=n[0],a=n[1],l=n[2],c=n[3],h=t[0],u=t[1],f=e[0],d=e[1],g=(d-u)/(f-h),m,_;s&lt.ABOVE&&!(r&lt.ABOVE)&&(m=f-(d-c)/g,i=m>=o&&m<=l),!i&&s&lt.RIGHT&&!(r&lt.RIGHT)&&(_=d-(f-l)*g,i=_>=a&&_<=c),!i&&s&lt.BELOW&&!(r&lt.BELOW)&&(m=f-(d-a)/g,i=m>=o&&m<=l),!i&&s&lt.LEFT&&!(r&lt.LEFT)&&(_=d-(f-o)*g,i=_>=a&&_<=c)}return i}function Ma(n,t,e,i){if(_e(n))return be(e);let r=[];if(i>1){let a=n[2]-n[0],l=n[3]-n[1];for(let c=0;c<i;++c)r.push(n[0]+a*c/i,n[1],n[2],n[1]+l*c/i,n[2]-a*c/i,n[3],n[0],n[3]-l*c/i)}else r=[n[0],n[1],n[2],n[1],n[2],n[3],n[0],n[3]];t(r,r,2);let s=[],o=[];for(let a=0,l=r.length;a<l;a+=2)s.push(r[a]),o.push(r[a+1]);return Zh(s,o,e)}function Jh(n,t){let e=t.getExtent(),i=jt(n);if(t.canWrapX()&&(i[0]<e[0]||i[0]>=e[2])){let r=k(e),o=Math.floor((i[0]-e[0])/r)*r;n[0]-=o,n[2]-=o}return n}function ba(n,t,e){if(t.canWrapX()){let i=t.getExtent();if(!isFinite(n[0])||!isFinite(n[2]))return[[i[0],n[1],i[2],n[3]]];Jh(n,t);let r=k(i);if(k(n)>r&&!e)return[[i[0],n[1],i[2],n[3]]];if(n[0]<i[0])return[[n[0]+r,n[1],i[2],n[3]],[i[0],n[1],n[2],n[3]]];if(n[2]>i[2])return[[n[0],n[1],i[2],n[3]],[i[0],n[1],n[2]-r,n[3]]]}return[n]}function Pa(n,t){let e=[n];for(let i=0,r=t.length;i<r&&e.length>0;++i){let s=[];for(let o=0,a=e.length;o<a;++o)s.push(...$h(e[o],t[i]));e=s}return e}var nt={VERSION1:"version1",VERSION2:"version2",VERSION3:"version3"},Pe={};Pe[nt.VERSION1]={level0:{supports:[],formats:[],qualities:["native"]},level1:{supports:["regionByPx","sizeByW","sizeByH","sizeByPct"],formats:["jpg"],qualities:["native"]},level2:{supports:["regionByPx","regionByPct","sizeByW","sizeByH","sizeByPct","sizeByConfinedWh","sizeByWh"],formats:["jpg","png"],qualities:["native","color","grey","bitonal"]}};Pe[nt.VERSION2]={level0:{supports:[],formats:["jpg"],qualities:["default"]},level1:{supports:["regionByPx","sizeByW","sizeByH","sizeByPct"],formats:["jpg"],qualities:["default"]},level2:{supports:["regionByPx","regionByPct","sizeByW","sizeByH","sizeByPct","sizeByConfinedWh","sizeByDistortedWh","sizeByWh"],formats:["jpg","png"],qualities:["default","bitonal"]}};Pe[nt.VERSION3]={level0:{supports:[],formats:["jpg"],qualities:["default"]},level1:{supports:["regionByPx","regionSquare","sizeByW","sizeByH","sizeByWh"],formats:["jpg"],qualities:["default"]},level2:{supports:["regionByPx","regionSquare","regionByPct","sizeByW","sizeByH","sizeByPct","sizeByConfinedWh","sizeByWh"],formats:["jpg","png"],qualities:["default"]}};Pe.none={none:{supports:[],formats:[],qualities:[]}};var Qh=/^https?:\/\/library\.stanford\.edu\/iiif\/image-api\/(?:1\.1\/)?compliance\.html#level[0-2]$/,Oa=/^https?:\/\/iiif\.io\/api\/image\/2\/level[0-2](?:\.json)?$/,tu=/(^https?:\/\/iiif\.io\/api\/image\/3\/level[0-2](?:\.json)?$)|(^level[0-2]$)/;function eu(n){let t=n.getComplianceLevelSupportedFeatures();return t===void 0&&(t=Pe[nt.VERSION1].level0),{url:n.imageInfo["@id"]===void 0?void 0:n.imageInfo["@id"].replace(/\/?(?:info\.json)?$/g,""),supports:t.supports,formats:[...t.formats,n.imageInfo.formats===void 0?[]:n.imageInfo.formats],qualities:[...t.qualities,n.imageInfo.qualities===void 0?[]:n.imageInfo.qualities],resolutions:n.imageInfo.scale_factors,tileSize:n.imageInfo.tile_width!==void 0?n.imageInfo.tile_height!==void 0?[n.imageInfo.tile_width,n.imageInfo.tile_height]:[n.imageInfo.tile_width,n.imageInfo.tile_width]:n.imageInfo.tile_height!=null?[n.imageInfo.tile_height,n.imageInfo.tile_height]:void 0}}function nu(n){let t=n.getComplianceLevelSupportedFeatures(),e=Array.isArray(n.imageInfo.profile)&&n.imageInfo.profile.length>1,i=e&&n.imageInfo.profile[1].supports?n.imageInfo.profile[1].supports:[],r=e&&n.imageInfo.profile[1].formats?n.imageInfo.profile[1].formats:[],s=e&&n.imageInfo.profile[1].qualities?n.imageInfo.profile[1].qualities:[];return{url:n.imageInfo["@id"].replace(/\/?(?:info\.json)?$/g,""),sizes:n.imageInfo.sizes===void 0?void 0:n.imageInfo.sizes.map(function(o){return[o.width,o.height]}),tileSize:n.imageInfo.tiles===void 0?void 0:[n.imageInfo.tiles.map(function(o){return o.width})[0],n.imageInfo.tiles.map(function(o){return o.height===void 0?o.width:o.height})[0]],resolutions:n.imageInfo.tiles===void 0?void 0:n.imageInfo.tiles.map(function(o){return o.scaleFactors})[0],supports:[...t.supports,...i],formats:[...t.formats,...r],qualities:[...t.qualities,...s]}}function iu(n){let t=n.getComplianceLevelSupportedFeatures(),e=n.imageInfo.extraFormats===void 0?t.formats:[...t.formats,...n.imageInfo.extraFormats],i=n.imageInfo.preferredFormats!==void 0&&Array.isArray(n.imageInfo.preferredFormats)&&n.imageInfo.preferredFormats.length>0?n.imageInfo.preferredFormats.filter(function(r){return["jpg","png","gif"].includes(r)}).reduce(function(r,s){return r===void 0&&e.includes(s)?s:r},void 0):void 0;return{url:n.imageInfo.id,sizes:n.imageInfo.sizes===void 0?void 0:n.imageInfo.sizes.map(function(r){return[r.width,r.height]}),tileSize:n.imageInfo.tiles===void 0?void 0:[n.imageInfo.tiles.map(function(r){return r.width})[0],n.imageInfo.tiles.map(function(r){return r.height})[0]],resolutions:n.imageInfo.tiles===void 0?void 0:n.imageInfo.tiles.map(function(r){return r.scaleFactors})[0],supports:n.imageInfo.extraFeatures===void 0?t.supports:[...t.supports,...n.imageInfo.extraFeatures],formats:e,qualities:n.imageInfo.extraQualities===void 0?t.qualities:[...t.qualities,...n.imageInfo.extraQualities],preferredFormat:i}}var yi={};yi[nt.VERSION1]=eu;yi[nt.VERSION2]=nu;yi[nt.VERSION3]=iu;var Or=class{constructor(t){this.setImageInfo(t)}setImageInfo(t){typeof t=="string"?this.imageInfo=JSON.parse(t):this.imageInfo=t}getImageApiVersion(){if(this.imageInfo===void 0)return;let t=this.imageInfo["@context"]||"ol-no-context";typeof t=="string"&&(t=[t]);for(let e=0;e<t.length;e++)switch(t[e]){case"http://library.stanford.edu/iiif/image-api/1.1/context.json":case"http://iiif.io/api/image/1/context.json":return nt.VERSION1;case"http://iiif.io/api/image/2/context.json":return nt.VERSION2;case"http://iiif.io/api/image/3/context.json":return nt.VERSION3;case"ol-no-context":if(this.getComplianceLevelEntryFromProfile(nt.VERSION1)&&this.imageInfo.identifier)return nt.VERSION1;break;default:}P(!1,"Cannot determine IIIF Image API version from provided image information JSON")}getComplianceLevelEntryFromProfile(t){if(!(this.imageInfo===void 0||this.imageInfo.profile===void 0))switch(t===void 0&&(t=this.getImageApiVersion()),t){case nt.VERSION1:if(Qh.test(this.imageInfo.profile))return this.imageInfo.profile;break;case nt.VERSION3:if(tu.test(this.imageInfo.profile))return this.imageInfo.profile;break;case nt.VERSION2:if(typeof this.imageInfo.profile=="string"&&Oa.test(this.imageInfo.profile))return this.imageInfo.profile;if(Array.isArray(this.imageInfo.profile)&&this.imageInfo.profile.length>0&&typeof this.imageInfo.profile[0]=="string"&&Oa.test(this.imageInfo.profile[0]))return this.imageInfo.profile[0];break;default:}}getComplianceLevelFromProfile(t){let e=this.getComplianceLevelEntryFromProfile(t);if(e===void 0)return;let i=e.match(/level[0-2](?:\.json)?$/g);return Array.isArray(i)?i[0].replace(".json",""):void 0}getComplianceLevelSupportedFeatures(){if(this.imageInfo===void 0)return;let t=this.getImageApiVersion(),e=this.getComplianceLevelFromProfile(t);return e===void 0?Pe.none.none:Pe[t][e]}getTileSourceOptions(t){let e=t||{},i=this.getImageApiVersion();if(i===void 0)return;let r=i===void 0?void 0:yi[i](this);if(r!==void 0)return{url:r.url,version:i,size:[this.imageInfo.width,this.imageInfo.height],sizes:r.sizes,format:e.format!==void 0&&r.formats.includes(e.format)?e.format:r.preferredFormat!==void 0?r.preferredFormat:"jpg",supports:r.supports,quality:e.quality&&r.qualities.includes(e.quality)?e.quality:r.qualities.includes("native")?"native":"default",resolutions:Array.isArray(r.resolutions)?r.resolutions.sort(function(s,o){return o-s}):void 0,tileSize:r.tileSize}}},Dr=Or;function Nr(n){return n[0]>0&&n[1]>0}function Da(n,t,e){return e===void 0&&(e=[0,0]),e[0]=n[0]*t+.5|0,e[1]=n[1]*t+.5|0,e}function H(n,t){return Array.isArray(n)?n:(t===void 0?t=[n,n]:(t[0]=n,t[1]=n),t)}var Ei=class{constructor(t,e,i,r){this.minX=t,this.maxX=e,this.minY=i,this.maxY=r}contains(t){return this.containsXY(t[1],t[2])}containsTileRange(t){return this.minX<=t.minX&&t.maxX<=this.maxX&&this.minY<=t.minY&&t.maxY<=this.maxY}containsXY(t,e){return this.minX<=t&&t<=this.maxX&&this.minY<=e&&e<=this.maxY}equals(t){return this.minX==t.minX&&this.minY==t.minY&&this.maxX==t.maxX&&this.maxY==t.maxY}extend(t){t.minX<this.minX&&(this.minX=t.minX),t.maxX>this.maxX&&(this.maxX=t.maxX),t.minY<this.minY&&(this.minY=t.minY),t.maxY>this.maxY&&(this.maxY=t.maxY)}getHeight(){return this.maxY-this.minY+1}getSize(){return[this.getWidth(),this.getHeight()]}getWidth(){return this.maxX-this.minX+1}intersects(t){return this.minX<=t.maxX&&this.maxX>=t.minX&&this.minY<=t.maxY&&this.maxY>=t.minY}};function Oe(n,t,e,i,r){return r!==void 0?(r.minX=n,r.maxX=t,r.minY=e,r.maxY=i,r):new Ei(n,t,e,i)}var xi=Ei;function De(n,t){return n>t?1:n<t?-1:0}function Je(n,t,e){if(n[0]<=t)return 0;let i=n.length;if(t<=n[i-1])return i-1;if(typeof e=="function"){for(let r=1;r<i;++r){let s=n[r];if(s===t)return r;if(s<t)return e(t,n[r-1],s)>0?r-1:r}return i-1}if(e>0){for(let r=1;r<i;++r)if(n[r]<t)return r-1;return i-1}if(e<0){for(let r=1;r<i;++r)if(n[r]<=t)return r;return i-1}for(let r=1;r<i;++r){if(n[r]==t)return r;if(n[r]<t)return n[r-1]-t<t-n[r]?r-1:r}return i-1}function Na(n,t){let e=Array.isArray(t)?t:[t],i=e.length;for(let r=0;r<i;r++)n[n.length]=e[r]}function ye(n,t){let e=n.length;if(e!==t.length)return!1;for(let i=0;i<e;i++)if(n[i]!==t[i])return!1;return!0}function Fa(n,t,e){let i=t||De;return n.every(function(r,s){if(s===0)return!0;let o=i(n[s-1],r);return!(o>0||e&&o===0)})}function za(n,t,e,i,r){return!_i(r,function(o){return!Ee(n,t,e,i,o[0],o[1])})}function Ee(n,t,e,i,r,s){let o=0,a=n[e-i],l=n[e-i+1];for(;t<e;t+=i){let c=n[t],h=n[t+1];l<=s?h>s&&(c-a)*(s-l)-(r-a)*(h-l)>0&&o++:h<=s&&(c-a)*(s-l)-(r-a)*(h-l)<0&&o--,a=c,l=h}return o!==0}function wi(n,t,e,i,r,s){if(e.length===0||!Ee(n,t,e[0],i,r,s))return!1;for(let o=1,a=e.length;o<a;++o)if(Ee(n,e[o-1],e[o],i,r,s))return!1;return!0}function ka(n,t,e,i,r){let s;for(t+=i;t<e;t+=i)if(s=r(n.slice(t-i,t),n.slice(t,t+i)),s)return s;return!1}function Ci(n,t,e,i,r,s){return s=s??br(Ot(),n,t,e,i),Yt(r,s)?s[0]>=r[0]&&s[2]<=r[2]||s[1]>=r[1]&&s[3]<=r[3]?!0:ka(n,t,e,i,function(o,a){return La(r,o,a)}):!1}function Fr(n,t,e,i,r){return!!(Ci(n,t,e,i,r)||Ee(n,t,e,i,r[0],r[1])||Ee(n,t,e,i,r[0],r[3])||Ee(n,t,e,i,r[2],r[1])||Ee(n,t,e,i,r[2],r[3]))}function Ga(n,t,e,i,r){if(!Fr(n,t,e[0],i,r))return!1;if(e.length===1)return!0;for(let s=1,o=e.length;s<o;++s)if(za(n,e[s-1],e[s],i,r)&&!Ci(n,e[s-1],e[s],i,r))return!1;return!0}function j(n,t,e){return Math.min(Math.max(n,t),e)}function Ua(n,t,e,i,r,s){let o=r-e,a=s-i;if(o!==0||a!==0){let l=((n-e)*o+(t-i)*a)/(o*o+a*a);l>1?(e=r,i=s):l>0&&(e+=o*l,i+=a*l)}return ne(n,t,e,i)}function ne(n,t,e,i){let r=e-n,s=i-t;return r*r+s*s}function Xa(n){let t=n.length;for(let i=0;i<t;i++){let r=i,s=Math.abs(n[i][i]);for(let a=i+1;a<t;a++){let l=Math.abs(n[a][i]);l>s&&(s=l,r=a)}if(s===0)return null;let o=n[r];n[r]=n[i],n[i]=o;for(let a=i+1;a<t;a++){let l=-n[a][i]/n[i][i];for(let c=i;c<t+1;c++)i==c?n[a][c]=0:n[a][c]+=l*n[i][c]}}let e=new Array(t);for(let i=t-1;i>=0;i--){e[i]=n[i][t]/n[i][i];for(let r=i-1;r>=0;r--)n[r][t]-=n[r][i]*e[i]}return e}function vi(n){return n*180/Math.PI}function Gt(n){return n*Math.PI/180}function ie(n,t){let e=n%t;return e*t<0?e+t:e}function Va(n,t,e){return n+e*(t-n)}function Ri(n,t){let e=Math.pow(10,t);return Math.round(n*e)/e}function kn(n,t){return Math.floor(Ri(n,t))}function Gn(n,t){return Math.ceil(Ri(n,t))}function Ti(n,t,e){if(n>=t&&n<e)return n;let i=e-t;return((n-t)%i+i)%i+t}function O(){throw new Error("Unimplemented abstract method.")}var ru=0;function B(n){return n.ol_uid||(n.ol_uid=String(++ru))}function Qe(n,t,e,i){return i!==void 0?(i[0]=n,i[1]=t,i[2]=e,i):[n,t,e]}function su(n,t,e){return n+"/"+t+"/"+e}function tn(n,t,e,i,r){return`${B(n)},${t},${su(e,i,r)}`}function Ka(n){return ou(n[0],n[1],n[2])}function ou(n,t,e){return(t<<n)+e}function ja(n,t){let e=n[0],i=n[1],r=n[2];if(t.getMinZoom()>e||e>t.getMaxZoom())return!1;let s=t.getFullTileRange(e);return s?s.containsXY(i,r):!0}var en=[0,0,0],xe=5,zr=class{constructor(t){let e=t.minZoom,i=t.resolutions;e===void 0&&i&&(e=i.findIndex(o=>o!==void 0)),this.minZoom=e!==void 0?e:0,this.resolutions_=i,P(Fa(this.resolutions_,(o,a)=>a-o,!0),"`resolutions` must be sorted in descending order");let r;if(!t.origins){for(let o=0,a=this.resolutions_.length-1;o<a;++o)if(!r)r=this.resolutions_[o]/this.resolutions_[o+1];else if(this.resolutions_[o]/this.resolutions_[o+1]!==r){r=void 0;break}}this.zoomFactor_=r,this.maxZoom=this.resolutions_.length-1,this.origin_=t.origin!==void 0?t.origin:null,this.origins_=null,t.origins!==void 0&&(this.origins_=t.origins,P(this.origins_.length==this.resolutions_.length,"Number of `origins` and `resolutions` must be equal"));let s=t.extent;s!==void 0&&!this.origin_&&!this.origins_&&(this.origin_=Tt(s)),P(!this.origin_&&this.origins_||this.origin_&&!this.origins_,"Either `origin` or `origins` must be configured, never both"),this.tileSizes_=null,t.tileSizes!==void 0&&(this.tileSizes_=t.tileSizes,P(this.tileSizes_.length==this.resolutions_.length,"Number of `tileSizes` and `resolutions` must be equal")),this.tileSize_=t.tileSize!==void 0?t.tileSize:this.tileSizes_?null:256,P(!this.tileSize_&&this.tileSizes_||this.tileSize_&&!this.tileSizes_,"Either `tileSize` or `tileSizes` must be configured, never both"),this.extent_=s!==void 0?s:null,this.fullTileRanges_=null,this.tmpSize_=[0,0],this.tmpExtent_=[0,0,0,0],t.tileRanges!==void 0?this.fullTileRanges_=t.tileRanges:t.sizes!==void 0?this.fullTileRanges_=t.sizes.map((o,a)=>{let l=new xi(Math.min(0,o[0]),Math.max(o[0]-1,-1),Math.min(0,o[1]),Math.max(o[1]-1,-1));if(s){let c=this.getTileRangeForExtentAndZ(s,a);l.minX=Math.max(c.minX,l.minX),l.maxX=Math.min(c.maxX,l.maxX),l.minY=Math.max(c.minY,l.minY),l.maxY=Math.min(c.maxY,l.maxY)}return l}):s&&this.calculateTileRanges_(s)}forEachTileCoord(t,e,i){let r=this.getTileRangeForExtentAndZ(t,e);for(let s=r.minX,o=r.maxX;s<=o;++s)for(let a=r.minY,l=r.maxY;a<=l;++a)i([e,s,a])}forEachTileCoordParentTileRange(t,e,i,r){let s,o,a,l=null,c=t[0]-1;for(this.zoomFactor_===2?(o=t[1],a=t[2]):l=this.getTileCoordExtent(t,r);c>=this.minZoom;){if(o!==void 0&&a!==void 0?(o=Math.floor(o/2),a=Math.floor(a/2),s=Oe(o,o,a,a,i)):s=this.getTileRangeForExtentAndZ(l,c,i),e(c,s))return!0;--c}return!1}getExtent(){return this.extent_}getMaxZoom(){return this.maxZoom}getMinZoom(){return this.minZoom}getOrigin(t){return this.origin_?this.origin_:this.origins_[t]}getOrigins(){return this.origins_}getResolution(t){return this.resolutions_[t]}getResolutions(){return this.resolutions_}getTileCoordChildTileRange(t,e,i){if(t[0]<this.maxZoom){if(this.zoomFactor_===2){let s=t[1]*2,o=t[2]*2;return Oe(s,s+1,o,o+1,e)}let r=this.getTileCoordExtent(t,i||this.tmpExtent_);return this.getTileRangeForExtentAndZ(r,t[0]+1,e)}return null}getTileRangeForTileCoordAndZ(t,e,i){if(e>this.maxZoom||e<this.minZoom)return null;let r=t[0],s=t[1],o=t[2];if(e===r)return Oe(s,o,s,o,i);if(this.zoomFactor_){let l=Math.pow(this.zoomFactor_,e-r),c=Math.floor(s*l),h=Math.floor(o*l);if(e<r)return Oe(c,c,h,h,i);let u=Math.floor(l*(s+1))-1,f=Math.floor(l*(o+1))-1;return Oe(c,u,h,f,i)}let a=this.getTileCoordExtent(t,this.tmpExtent_);return this.getTileRangeForExtentAndZ(a,e,i)}getTileRangeForExtentAndZ(t,e,i){this.getTileCoordForXYAndZ_(t[0],t[3],e,!1,en);let r=en[1],s=en[2];this.getTileCoordForXYAndZ_(t[2],t[1],e,!0,en);let o=en[1],a=en[2];return Oe(r,o,s,a,i)}getTileCoordCenter(t){let e=this.getOrigin(t[0]),i=this.getResolution(t[0]),r=H(this.getTileSize(t[0]),this.tmpSize_);return[e[0]+(t[1]+.5)*r[0]*i,e[1]-(t[2]+.5)*r[1]*i]}getTileCoordExtent(t,e){let i=this.getOrigin(t[0]),r=this.getResolution(t[0]),s=H(this.getTileSize(t[0]),this.tmpSize_),o=i[0]+t[1]*s[0]*r,a=i[1]-(t[2]+1)*s[1]*r,l=o+s[0]*r,c=a+s[1]*r;return pe(o,a,l,c,e)}getTileCoordForCoordAndResolution(t,e,i){return this.getTileCoordForXYAndResolution_(t[0],t[1],e,!1,i)}getTileCoordForXYAndResolution_(t,e,i,r,s){let o=this.getZForResolution(i),a=i/this.getResolution(o),l=this.getOrigin(o),c=H(this.getTileSize(o),this.tmpSize_),h=a*(t-l[0])/i/c[0],u=a*(l[1]-e)/i/c[1];return r?(h=Gn(h,xe)-1,u=Gn(u,xe)-1):(h=kn(h,xe),u=kn(u,xe)),Qe(o,h,u,s)}getTileCoordForXYAndZ_(t,e,i,r,s){let o=this.getOrigin(i),a=this.getResolution(i),l=H(this.getTileSize(i),this.tmpSize_),c=(t-o[0])/a/l[0],h=(o[1]-e)/a/l[1];return r?(c=Gn(c,xe)-1,h=Gn(h,xe)-1):(c=kn(c,xe),h=kn(h,xe)),Qe(i,c,h,s)}getTileCoordForCoordAndZ(t,e,i){return this.getTileCoordForXYAndZ_(t[0],t[1],e,!1,i)}getTileCoordResolution(t){return this.resolutions_[t[0]]}getTileSize(t){return this.tileSize_?this.tileSize_:this.tileSizes_[t]}getFullTileRange(t){return this.fullTileRanges_?this.fullTileRanges_[t]:this.extent_?this.getTileRangeForExtentAndZ(this.extent_,t):null}getZForResolution(t,e){let i=Je(this.resolutions_,t,e||0);return j(i,this.minZoom,this.maxZoom)}tileCoordIntersectsViewport(t,e){return Fr(e,0,e.length,2,this.getTileCoordExtent(t))}calculateTileRanges_(t){let e=this.resolutions_.length,i=new Array(e);for(let r=this.minZoom;r<e;++r)i[r]=this.getTileRangeForExtentAndZ(t,r);this.fullTileRanges_=i}},Ai=zr;var M={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4};function we(n){for(let t in n)delete n[t]}function Si(n){let t;for(t in n)return!1;return!t}function b(n,t,e,i,r){if(r){let o=e;e=function(a){return n.removeEventListener(t,e),o.call(i??this,a)}}else i&&i!==n&&(e=e.bind(i));let s={target:n,type:t,listener:e};return n.addEventListener(t,e),s}function nn(n,t,e,i){return b(n,t,e,i,!0)}function G(n){n&&n.target&&(n.target.removeEventListener(n.type,n.listener),we(n))}var A={CHANGE:"change",ERROR:"error",BLUR:"blur",CLEAR:"clear",CONTEXTMENU:"contextmenu",CLICK:"click",DBLCLICK:"dblclick",DRAGENTER:"dragenter",DRAGOVER:"dragover",DROP:"drop",FOCUS:"focus",KEYDOWN:"keydown",KEYPRESS:"keypress",LOAD:"load",RESIZE:"resize",TOUCHMOVE:"touchmove",WHEEL:"wheel"};var kr=class{constructor(){this.disposed=!1}dispose(){this.disposed||(this.disposed=!0,this.disposeInternal())}disposeInternal(){}},Ce=kr;function Ne(){return!0}function re(){return!1}function Fe(){}function Wa(n){let t,e,i;return function(){let r=Array.prototype.slice.call(arguments);return(!e||this!==i||!ye(r,e))&&(i=this,e=r,t=n.apply(this,arguments)),t}}function Ya(n){function t(){let e;try{e=n()}catch(i){return Promise.reject(i)}return e instanceof Promise?e:Promise.resolve(e)}return t()}var Gr=class{constructor(t){this.propagationStopped,this.defaultPrevented,this.type=t,this.target=null}preventDefault(){this.defaultPrevented=!0}stopPropagation(){this.propagationStopped=!0}};var dt=Gr;var Ur=class extends Ce{constructor(t){super(),this.eventTarget_=t,this.pendingRemovals_=null,this.dispatching_=null,this.listeners_=null}addEventListener(t,e){if(!t||!e)return;let i=this.listeners_||(this.listeners_={}),r=i[t]||(i[t]=[]);r.includes(e)||r.push(e)}dispatchEvent(t){let e=typeof t=="string",i=e?t:t.type,r=this.listeners_&&this.listeners_[i];if(!r)return;let s=e?new dt(t):t;s.target||(s.target=this.eventTarget_||this);let o=this.dispatching_||(this.dispatching_={}),a=this.pendingRemovals_||(this.pendingRemovals_={});i in o||(o[i]=0,a[i]=0),++o[i];let l;for(let c=0,h=r.length;c<h;++c)if("handleEvent"in r[c]?l=r[c].handleEvent(s):l=r[c].call(this,s),l===!1||s.propagationStopped){l=!1;break}if(--o[i]===0){let c=a[i];for(delete a[i];c--;)this.removeEventListener(i,Fe);delete o[i]}return l}disposeInternal(){this.listeners_&&we(this.listeners_)}getListeners(t){return this.listeners_&&this.listeners_[t]||void 0}hasListener(t){return this.listeners_?t?t in this.listeners_:Object.keys(this.listeners_).length>0:!1}removeEventListener(t,e){if(!this.listeners_)return;let i=this.listeners_[t];if(!i)return;let r=i.indexOf(e);r!==-1&&(this.pendingRemovals_&&t in this.pendingRemovals_?(i[r]=Fe,++this.pendingRemovals_[t]):(i.splice(r,1),i.length===0&&delete this.listeners_[t]))}},ve=Ur;var ze=typeof navigator<"u"&&typeof navigator.userAgent<"u"?navigator.userAgent.toLowerCase():"",au=ze.includes("safari")&&!ze.includes("chrom"),_g=au&&(ze.includes("version/15.4")||/cpu (os|iphone os) 15_4 like mac os x/.test(ze)),Ba=ze.includes("webkit")&&!ze.includes("edge"),Xr=ze.includes("macintosh"),Za=typeof devicePixelRatio<"u"?devicePixelRatio:1,gt=typeof WorkerGlobalScope<"u"&&typeof OffscreenCanvas<"u"&&self instanceof WorkerGlobalScope,Vr=typeof Image<"u"&&Image.prototype.decode;var Li=(function(){let n=!1;try{let t=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("_",null,t),window.removeEventListener("_",null,t)}catch{}return n})();function qa(n,t,e){let i=n,r=!0,s=!1,o=!1,a=[nn(i,A.LOAD,function(){o=!0,s||t()})];return i.src&&Vr?(s=!0,i.decode().then(function(){r&&t()}).catch(function(l){r&&(o?t():e())})):a.push(nn(i,A.ERROR,e)),function(){r=!1,a.forEach(G)}}function lu(n,t){return new Promise((e,i)=>{function r(){o(),e(n)}function s(){o(),i(new Error("Image load error"))}function o(){n.removeEventListener("load",r),n.removeEventListener("error",s)}n.addEventListener("load",r),n.addEventListener("error",s),t&&(n.src=t)})}function Ha(n,t){return t&&(n.src=t),n.src&&Vr?new Promise((e,i)=>n.decode().then(()=>e(n)).catch(r=>n.complete&&n.width?e(n):i(r))):lu(n)}var I={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4};function Kr(n){return Math.pow(n,3)}function Dt(n){return 1-Kr(1-n)}function $a(n){return 3*n*n-2*n*n*n}function Ja(n){return n}var jr=class extends ve{constructor(t,e,i){super(),i=i||{},this.tileCoord=t,this.state=e,this.key="",this.transition_=i.transition===void 0?250:i.transition,this.transitionStarts_={},this.interpolate=!!i.interpolate}changed(){this.dispatchEvent(A.CHANGE)}release(){this.setState(I.EMPTY)}getKey(){return this.key+"/"+this.tileCoord}getTileCoord(){return this.tileCoord}getState(){return this.state}setState(t){if(this.state!==I.EMPTY){if(this.state!==I.ERROR&&this.state>t)throw new Error("Tile load sequence violation");this.state=t,this.changed()}}load(){O()}getAlpha(t,e){if(!this.transition_)return 1;let i=this.transitionStarts_[t];if(!i)i=e,this.transitionStarts_[t]=i;else if(i===-1)return 1;let r=e-i+1e3/60;return r>=this.transition_?1:Kr(r/this.transition_)}inTransition(t){return this.transition_?this.transitionStarts_[t]!==-1:!1}endTransition(t){this.transition_&&(this.transitionStarts_[t]=-1)}disposeInternal(){this.release(),super.disposeInternal()}},rn=jr;function J(n,t,e,i){let r;return e&&e.length?r=e.shift():gt?r=new class extends OffscreenCanvas{style={}}(n??300,t??150):r=document.createElement("canvas"),n&&(r.width=n),t&&(r.height=t),r.getContext("2d",i)}var Wr;function Un(){return Wr||(Wr=J(1,1)),Wr}function Xn(n){let t=n.canvas;t.width=1,t.height=1,n.clearRect(0,0,1,1)}function sn(n,t){let e=t.parentNode;e&&e.replaceChild(n,t)}function Qa(n){for(;n.lastChild;)n.lastChild.remove()}function tl(n,t){let e=n.childNodes;for(let i=0;;++i){let r=e[i],s=t[i];if(!r&&!s)break;if(r!==s){if(!r){n.appendChild(s);continue}if(!s){n.removeChild(r),--i;continue}n.insertBefore(s,r)}}}function Mi(){return new Proxy({childNodes:[],appendChild:function(t){return this.childNodes.push(t),t},remove:function(){},removeChild:function(t){let e=this.childNodes.indexOf(t);if(e===-1)throw new Error("Node to remove was not found");return this.childNodes.splice(e,1),t},insertBefore:function(t,e){let i=this.childNodes.indexOf(e);if(i===-1)throw new Error("Reference node not found");return this.childNodes.splice(i,0,t),t},style:{}},{get(t,e,i){return e==="firstElementChild"?t.childNodes.length>0?t.childNodes[0]:null:Reflect.get(t,e,i)}})}function Lt(n){return typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas}var Yr=class extends rn{constructor(t,e,i,r,s,o){super(t,e,o),this.crossOrigin_=r?.crossOrigin,this.referrerPolicy_=r?.referrerPolicy,this.src_=i,this.key=i,this.image_,gt?this.image_=new OffscreenCanvas(1,1):(this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_),this.referrerPolicy_!==void 0&&(this.image_.referrerPolicy=this.referrerPolicy_)),this.unlisten_=null,this.tileLoadFunction_=s}getImage(){return this.image_}setImage(t){this.image_=t,this.state=I.LOADED,this.unlistenImage_(),this.changed()}getCrossOrigin(){return this.crossOrigin_}getReferrerPolicy(){return this.referrerPolicy_}handleImageError_(){this.state=I.ERROR,this.unlistenImage_(),this.image_=cu(),this.changed()}handleImageLoad_(){if(gt)this.state=I.LOADED;else{let t=this.image_;t.naturalWidth&&t.naturalHeight?this.state=I.LOADED:this.state=I.EMPTY}this.unlistenImage_(),this.changed()}load(){this.state==I.ERROR&&(this.state=I.IDLE,this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_),this.referrerPolicy_!==void 0&&(this.image_.referrerPolicy=this.referrerPolicy_)),this.state==I.IDLE&&(this.state=I.LOADING,this.changed(),this.tileLoadFunction_(this,this.src_),this.unlisten_=qa(this.image_,this.handleImageLoad_.bind(this),this.handleImageError_.bind(this)))}unlistenImage_(){this.unlisten_&&(this.unlisten_(),this.unlisten_=null)}disposeInternal(){this.unlistenImage_(),this.image_=null,super.disposeInternal()}};function cu(){let n=J(1,1);return n.fillStyle="rgba(0,0,0,0)",n.fillRect(0,0,1,1),n.canvas}var on=Yr;var el={info:1,warn:2,error:3,none:4},hu=el.info;function bi(...n){hu>el.warn||console.warn(...n)}function nl(n,t){return n[0]+=+t[0],n[1]+=+t[1],n}function ke(n,t){let e=!0;for(let i=n.length-1;i>=0;--i)if(n[i]!=t[i]){e=!1;break}return e}function an(n,t){let e=Math.cos(t),i=Math.sin(t),r=n[0]*e-n[1]*i,s=n[1]*e+n[0]*i;return n[0]=r,n[1]=s,n}function il(n,t){return n[0]*=t,n[1]*=t,n}function rl(n,t){if(t.canWrapX()){let e=k(t.getExtent()),i=sl(n,t,e);i&&(n[0]-=i*e)}return n}function sl(n,t,e){let i=t.getExtent(),r=0;return t.canWrapX()&&(n[0]<i[0]||n[0]>i[2])&&(e=e||k(i),r=Math.floor((n[0]-i[0])/e)),r}var se={radians:6370997/(2*Math.PI),degrees:2*Math.PI*6370997/360,ft:.3048,m:1,"us-ft":1200/3937};var Br=class{constructor(t){this.code_=t.code,this.units_=t.units,this.extent_=t.extent!==void 0?t.extent:null,this.worldExtent_=t.worldExtent!==void 0?t.worldExtent:null,this.axisOrientation_=t.axisOrientation!==void 0?t.axisOrientation:"enu",this.global_=t.global!==void 0?t.global:!1,this.canWrapX_=!!(this.global_&&this.extent_),this.getPointResolutionFunc_=t.getPointResolution,this.defaultTileGrid_=null,this.metersPerUnit_=t.metersPerUnit}canWrapX(){return this.canWrapX_}getCode(){return this.code_}getExtent(){return this.extent_}getUnits(){return this.units_}getMetersPerUnit(){return this.metersPerUnit_||se[this.units_]}getWorldExtent(){return this.worldExtent_}getAxisOrientation(){return this.axisOrientation_}isGlobal(){return this.global_}setGlobal(t){this.global_=t,this.canWrapX_=!!(t&&this.extent_)}getDefaultTileGrid(){return this.defaultTileGrid_}setDefaultTileGrid(t){this.defaultTileGrid_=t}setExtent(t){this.extent_=t,this.canWrapX_=!!(this.global_&&t)}setWorldExtent(t){this.worldExtent_=t}setGetPointResolution(t){this.getPointResolutionFunc_=t}getPointResolutionFunc(){return this.getPointResolutionFunc_}},ln=Br;var Vn=6378137,cn=Math.PI*Vn,uu=[-cn,-cn,cn,cn],fu=[-180,-85,180,85],Pi=Vn*Math.log(Math.tan(Math.PI/2)),Re=class extends ln{constructor(t){super({code:t,units:"m",extent:uu,global:!0,worldExtent:fu,getPointResolution:function(e,i){return e/Math.cosh(i[1]/Vn)}})}},Zr=[new Re("EPSG:3857"),new Re("EPSG:102100"),new Re("EPSG:102113"),new Re("EPSG:900913"),new Re("http://www.opengis.net/def/crs/EPSG/0/3857"),new Re("http://www.opengis.net/gml/srs/epsg.xml#3857")];function ol(n,t,e,i){let r=n.length;e=e>1?e:2,i=i??e,t===void 0&&(e>2?t=n.slice():t=new Array(r));for(let s=0;s<r;s+=i){t[s]=cn*n[s]/180;let o=Vn*Math.log(Math.tan(Math.PI*(+n[s+1]+90)/360));o>Pi?o=Pi:o<-Pi&&(o=-Pi),t[s+1]=o}return t}function al(n,t,e,i){let r=n.length;e=e>1?e:2,i=i??e,t===void 0&&(e>2?t=n.slice():t=new Array(r));for(let s=0;s<r;s+=i)t[s]=180*n[s]/cn,t[s+1]=360*Math.atan(Math.exp(n[s+1]/Vn))/Math.PI-90;return t}var du=6378137,ll=[-180,-90,180,90],gu=Math.PI*du/180,oe=class extends ln{constructor(t,e){super({code:t,units:"degrees",extent:ll,axisOrientation:e,global:!0,metersPerUnit:gu,worldExtent:ll})}},qr=[new oe("CRS:84"),new oe("EPSG:4326","neu"),new oe("urn:ogc:def:crs:OGC:1.3:CRS84"),new oe("urn:ogc:def:crs:OGC:2:84"),new oe("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),new oe("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new oe("http://www.opengis.net/def/crs/EPSG/0/4326","neu")];var Hr={};function cl(n){return Hr[n]||Hr[n.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/,"EPSG:$3")]||null}function hl(n,t){Hr[n]=t}var hn={};function un(n,t,e){let i=n.getCode(),r=t.getCode();i in hn||(hn[i]={}),hn[i][r]=e}function Oi(n,t){return n in hn&&t in hn[n]?hn[n][t]:null}var Di=.9996,Nt=.00669438,Fi=Nt*Nt,zi=Fi*Nt,Ge=Nt/(1-Nt),ul=Math.sqrt(1-Nt),fn=(1-ul)/(1+ul),ml=fn*fn,$r=ml*fn,Jr=$r*fn,pl=Jr*fn,_l=1-Nt/4-3*Fi/64-5*zi/256,mu=3*Nt/8+3*Fi/32+45*zi/1024,pu=15*Fi/256+45*zi/1024,_u=35*zi/3072,yu=3/2*fn-27/32*$r+269/512*pl,Eu=21/16*ml-55/32*Jr,xu=151/96*$r-417/128*pl,wu=1097/512*Jr,Ni=6378137;function Cu(n,t,e){let i=n-5e5,o=(e.north?t:t-1e7)/Di/(Ni*_l),a=o+yu*Math.sin(2*o)+Eu*Math.sin(4*o)+xu*Math.sin(6*o)+wu*Math.sin(8*o),l=Math.sin(a),c=l*l,h=Math.cos(a),u=l/h,f=u*u,d=f*f,g=1-Nt*c,m=Math.sqrt(1-Nt*c),_=Ni/m,w=(1-Nt)/g,x=Ge*h**2,C=x*x,y=i/(_*Di),E=y*y,S=E*y,z=S*y,T=z*y,v=T*y,R=a-u/w*(E/2-z/24*(5+3*f+10*x-4*C-9*Ge))+v/720*(61+90*f+298*x+45*d-252*Ge-3*C),U=(y-S/6*(1+2*f+x)+T/120*(5-2*x+28*f-3*C+8*Ge+24*d))/h;return U=Ti(U+Gt(yl(e.number)),-Math.PI,Math.PI),[vi(U),vi(R)]}var fl=-80,dl=84,vu=-180,Ru=180;function Tu(n,t,e){n=Ti(n,vu,Ru),t<fl?t=fl:t>dl&&(t=dl);let i=Gt(t),r=Math.sin(i),s=Math.cos(i),o=r/s,a=o*o,l=a*a,c=Gt(n),h=yl(e.number),u=Gt(h),f=Ni/Math.sqrt(1-Nt*r**2),d=Ge*s**2,g=s*Ti(c-u,-Math.PI,Math.PI),m=g*g,_=m*g,w=_*g,x=w*g,C=x*g,y=Ni*(_l*i-mu*Math.sin(2*i)+pu*Math.sin(4*i)-_u*Math.sin(6*i)),E=Di*f*(g+_/6*(1-a+d)+x/120*(5-18*a+l+72*d-58*Ge))+5e5,S=Di*(y+f*o*(m/2+w/24*(5-a+9*d+4*d**2)+C/720*(61-58*a+l+600*d-330*Ge)));return e.north||(S+=1e7),[E,S]}function yl(n){return(n-1)*6-180+3}var Iu=[/^EPSG:(\d+)$/,/^urn:ogc:def:crs:EPSG::(\d+)$/,/^http:\/\/www\.opengis\.net\/def\/crs\/EPSG\/0\/(\d+)$/];function El(n){let t=0;for(let r of Iu){let s=n.match(r);if(s){t=parseInt(s[1]);break}}if(!t)return null;let e=0,i=!1;return t>32700&&t<32761?e=t-32700:t>32600&&t<32661&&(i=!0,e=t-32600),e?{number:e,north:i}:null}function gl(n,t){return function(e,i,r,s){let o=e.length;r=r>1?r:2,s=s??r,i||(r>2?i=e.slice():i=new Array(o));for(let a=0;a<o;a+=s){let l=e[a],c=e[a+1],h=n(l,c,t);i[a]=h[0],i[a+1]=h[1]}return i}}function xl(n){return El(n)?new ln({code:n,units:"m"}):null}function wl(n){let t=El(n.getCode());return t?{forward:gl(Tu,t),inverse:gl(Cu,t)}:null}var Au=63710088e-1;function Qr(n,t,e){e=e||Au;let i=Gt(n[1]),r=Gt(t[1]),s=(r-i)/2,o=Gt(t[0]-n[0])/2,a=Math.sin(s)*Math.sin(s)+Math.sin(o)*Math.sin(o)*Math.cos(i)*Math.cos(r);return 2*e*Math.atan2(Math.sqrt(a),Math.sqrt(1-a))}var Su=[wl],Lu=[xl];var es=!0;function vl(n){es=!(n===void 0?!0:n)}function is(n,t){if(t!==void 0){for(let e=0,i=n.length;e<i;++e)t[e]=n[e];t=t}else t=n.slice();return t}function ns(n){hl(n.getCode(),n),un(n,n,is)}function Mu(n){n.forEach(ns)}function mt(n){if(typeof n!="string")return n;let t=cl(n);if(t)return t;for(let e of Lu){let i=e(n);if(i)return i}return null}function rs(n,t,e,i){n=mt(n);let r,s=n.getPointResolutionFunc();if(s){if(r=s(t,e),i&&i!==n.getUnits()){let o=n.getMetersPerUnit();o&&(r=r*o/se[i])}}else{let o=n.getUnits();if(o=="degrees"&&!i||i=="degrees")r=t;else{let a=ss(n,mt("EPSG:4326"));if(!a&&o!=="degrees")r=t*n.getMetersPerUnit();else{let c=[e[0]-t/2,e[1],e[0]+t/2,e[1],e[0],e[1]-t/2,e[0],e[1]+t/2];c=a(c,c,2);let h=Qr(c.slice(0,2),c.slice(2,4)),u=Qr(c.slice(4,6),c.slice(6,8));r=(h+u)/2}let l=i?se[i]:n.getMetersPerUnit();l!==void 0&&(r/=l)}}return r}function Cl(n){Mu(n),n.forEach(function(t){n.forEach(function(e){t!==e&&un(t,e,is)})})}function bu(n,t,e,i){n.forEach(function(r){t.forEach(function(s){un(r,s,e),un(s,r,i)})})}function ki(n,t){return n?typeof n=="string"?mt(n):n:mt(t)}function Rl(n){return(function(t,e,i,r){let s=t.length;i=i!==void 0?i:2,r=r??i,e=e!==void 0?e:new Array(s);for(let o=0;o<s;o+=r){let a=n(t.slice(o,o+i)),l=a.length;for(let c=0,h=r;c<h;++c)e[o+c]=c>=l?t[o+c]:a[c]}return e})}function dn(n,t){if(n===t)return!0;let e=n.getUnits()===t.getUnits();return(n.getCode()===t.getCode()||ss(n,t)===is)&&e}function ss(n,t){let e=n.getCode(),i=t.getCode(),r=Oi(e,i);if(r)return r;let s=null,o=null;for(let l of Su)s||(s=l(n)),o||(o=l(t));if(!s&&!o)return null;let a="EPSG:4326";if(o)if(s)r=ts(s.inverse,o.forward);else{let l=Oi(e,a);l&&(r=ts(l,o.forward))}else{let l=Oi(a,i);l&&(r=ts(s.inverse,l))}return r&&(ns(n),ns(t),un(n,t,r)),r}function ts(n,t){return function(e,i,r,s){return i=n(e,i,r,s),t(i,i,r,s)}}function Ue(n,t){let e=mt(n),i=mt(t);return ss(e,i)}function gn(n,t,e){let i=Ue(t,e);if(!i){let r=mt(t).getCode(),s=mt(e).getCode();throw new Error(`No transform available between ${r} and ${s}`)}return i(n,void 0,n.length)}function Tl(n,t,e,i){let r=Ue(t,e);return Ma(n,r,void 0,i)}var ae=null;function Il(){return ae}function Kn(n,t){return ae?gn(n,t,ae):n}function Mt(n,t){return ae?gn(n,ae,t):(es&&!ke(n,[0,0])&&n[0]>=-180&&n[0]<=180&&n[1]>=-90&&n[1]<=90&&(es=!1,bi("Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.")),n)}function Al(n,t){return ae?Tl(n,t,ae):n}function Bt(n,t){return ae?Tl(n,ae,t):n}function Pu(){Cl(Zr),Cl(qr),bu(qr,Zr,ol,al)}Pu();var os,Xe=[];function Sl(n,t,e,i,r){n.beginPath(),n.moveTo(0,0),n.lineTo(t,e),n.lineTo(i,r),n.closePath(),n.save(),n.clip(),n.fillRect(0,0,Math.max(t,i)+1,Math.max(e,r)),n.restore()}function as(n,t){return Math.abs(n[t*4]-210)>2||Math.abs(n[t*4+3]-.75*255)>2}function Ou(){if(os===void 0){let n=J(6,6,Xe);n.globalCompositeOperation="lighter",n.fillStyle="rgba(210, 0, 0, 0.75)",Sl(n,4,5,4,0),Sl(n,4,5,0,5);let t=n.getImageData(0,0,3,3).data;os=as(t,0)||as(t,4)||as(t,8),Xn(n),Xe.push(n.canvas)}return os}function Ll(n,t,e,i){let r=gn(e,t,n),s=rs(t,i,e),o=t.getMetersPerUnit();o!==void 0&&(s*=o);let a=n.getMetersPerUnit();a!==void 0&&(s/=a);let l=n.getExtent();if(!l||Ze(l,r)){let c=rs(n,s,r)/s;isFinite(c)&&c>0&&(s/=c)}return s}function Ml(n,t,e,i){let r=jt(e),s=Ll(n,t,r,i);return(!isFinite(s)||s<=0)&&_i(e,function(o){return s=Ll(n,t,o,i),isFinite(s)&&s>0}),s}function bl(n,t,e,i,r,s,o,a,l,c,h,u,f,d){let g=J(Math.round(e*n),Math.round(e*t),Xe);if(u||(g.imageSmoothingEnabled=!1),l.length===0)return g.canvas;g.scale(e,e);function m(E){return Math.round(E*e)/e}g.globalCompositeOperation="lighter";let _=Ot();l.forEach(function(E,S,z){Ia(_,E.extent)});let w,x=e/i,C=(u?1:1+Math.pow(2,-24))/x;if(!f||l.length!==1||c!==0){if(w=J(Math.round(k(_)*x),Math.round(rt(_)*x),Xe),u||(w.imageSmoothingEnabled=!1),r&&d){let E=(r[0]-_[0])*x,S=-(r[3]-_[3])*x,z=k(r)*x,T=rt(r)*x;w.rect(E,S,z,T),w.clip()}l.forEach(function(E,S,z){if(E.image.width>0&&E.image.height>0){if(E.clipExtent){w.save();let q=(E.clipExtent[0]-_[0])*x,K=-(E.clipExtent[3]-_[3])*x,ft=k(E.clipExtent)*x,Et=rt(E.clipExtent)*x;w.rect(u?q:Math.round(q),u?K:Math.round(K),u?ft:Math.round(q+ft)-Math.round(q),u?Et:Math.round(K+Et)-Math.round(K)),w.clip()}let T=(E.extent[0]-_[0])*x,v=-(E.extent[3]-_[3])*x,R=k(E.extent)*x,U=rt(E.extent)*x;w.drawImage(E.image,c,c,E.image.width-2*c,E.image.height-2*c,u?T:Math.round(T),u?v:Math.round(v),u?R:Math.round(T+R)-Math.round(T),u?U:Math.round(v+U)-Math.round(v)),E.clipExtent&&w.restore()}})}let y=Tt(o);return a.getTriangles().forEach(function(E,S,z){let T=E.source,v=E.target,R=T[0][0],U=T[0][1],q=T[1][0],K=T[1][1],ft=T[2][0],Et=T[2][1],Y=m((v[0][0]-y[0])/s),N=m(-(v[0][1]-y[1])/s),V=m((v[1][0]-y[0])/s),$=m(-(v[1][1]-y[1])/s),st=m((v[2][0]-y[0])/s),ot=m(-(v[2][1]-y[1])/s),at=R,xt=U;R=0,U=0,q-=at,K-=xt,ft-=at,Et-=xt;let Be=[[q,K,0,0,V-Y],[ft,Et,0,0,st-Y],[0,0,q,K,$-N],[0,0,ft,Et,ot-N]],Pt=Xa(Be);if(!Pt)return;if(g.save(),g.beginPath(),Ou()||!u){g.moveTo(V,$);let et=4,me=Y-V,Mn=N-$;for(let ee=0;ee<et;ee++)g.lineTo(V+m((ee+1)*me/et),$+m(ee*Mn/(et-1))),ee!=et-1&&g.lineTo(V+m((ee+1)*me/et),$+m((ee+1)*Mn/(et-1)));g.lineTo(st,ot)}else g.moveTo(V,$),g.lineTo(Y,N),g.lineTo(st,ot);g.clip(),g.transform(Pt[0],Pt[2],Pt[1],Pt[3],Y,N),g.translate(_[0]-at,_[3]-xt);let Kt;if(w)Kt=w.canvas,g.scale(C,-C);else{let et=l[0],me=et.extent;Kt=et.image,g.scale(k(me)/Kt.width,-rt(me)/Kt.height)}g.drawImage(Kt,0,0),g.restore()}),w&&(Xn(w),Xe.push(w.canvas)),h&&(g.save(),g.globalCompositeOperation="source-over",g.strokeStyle="black",g.lineWidth=1,a.getTriangles().forEach(function(E,S,z){let T=E.target,v=(T[0][0]-y[0])/s,R=-(T[0][1]-y[1])/s,U=(T[1][0]-y[0])/s,q=-(T[1][1]-y[1])/s,K=(T[2][0]-y[0])/s,ft=-(T[2][1]-y[1])/s;g.beginPath(),g.moveTo(U,q),g.lineTo(v,R),g.lineTo(K,ft),g.closePath(),g.stroke()}),g.restore()),g.canvas}var Du=[1,0,0,1,0,0],vm=new Array(6);function le(){return Du.slice(0)}function ht(n,t){let e=t[0],i=t[1];return t[0]=n[0]*e+n[2]*i+n[4],t[1]=n[1]*e+n[3]*i+n[5],t}function ce(n,t,e,i,r,s,o,a){let l=Math.sin(s),c=Math.cos(s);return n[0]=i*c,n[1]=r*l,n[2]=-i*l,n[3]=r*c,n[4]=o*i*c-a*i*l+t,n[5]=o*r*l+a*r*c+e,n}function Ui(n,t){let e=Nu(t);P(e!==0,"Transformation matrix cannot be inverted");let i=t[0],r=t[1],s=t[2],o=t[3],a=t[4],l=t[5];return n[0]=o/e,n[1]=-r/e,n[2]=-s/e,n[3]=i/e,n[4]=(s*l-o*a)/e,n[5]=-(i*l-r*a)/e,n}function Nu(n){return n[0]*n[3]-n[1]*n[2]}var Fu=[1e5,1e5,1e5,1e5,2,2];function Pl(n){return"matrix("+n.join(", ")+")"}function Gi(n){return n.substring(7,n.length-1).split(",").map(parseFloat)}function Ol(n,t){let e=Gi(n),i=Gi(t);for(let r=0;r<6;++r)if(Math.round((e[r]-i[r])*Fu[r])!==0)return!1;return!0}var zu=10,Dl=.25,ls=class{constructor(t,e,i,r,s,o,a){this.sourceProj_=t,this.targetProj_=e;let l={},c=a?Rl(C=>ht(a,gn(C,this.targetProj_,this.sourceProj_))):Ue(this.targetProj_,this.sourceProj_);this.transformInv_=function(C){let y=C[0]+"/"+C[1];return l[y]||(l[y]=c(C)),l[y]},this.maxSourceExtent_=r,this.errorThresholdSquared_=s*s,this.triangles_=[],this.wrapsXInSource_=!1,this.canWrapXInSource_=this.sourceProj_.canWrapX()&&!!r&&!!this.sourceProj_.getExtent()&&k(r)>=k(this.sourceProj_.getExtent()),this.sourceWorldWidth_=this.sourceProj_.getExtent()?k(this.sourceProj_.getExtent()):null,this.targetWorldWidth_=this.targetProj_.getExtent()?k(this.targetProj_.getExtent()):null;let h=Tt(i),u=$e(i),f=He(i),d=qe(i),g=this.transformInv_(h),m=this.transformInv_(u),_=this.transformInv_(f),w=this.transformInv_(d),x=zu+(o?Math.max(0,Math.ceil(Math.log2(Fn(i)/(o*o*256*256)))):0);if(this.addQuad_(h,u,f,d,g,m,_,w,x),this.wrapsXInSource_){let C=1/0;this.triangles_.forEach(function(y,E,S){C=Math.min(C,y.source[0][0],y.source[1][0],y.source[2][0])}),this.triangles_.forEach(y=>{if(Math.max(y.source[0][0],y.source[1][0],y.source[2][0])-C>this.sourceWorldWidth_/2){let E=[[y.source[0][0],y.source[0][1]],[y.source[1][0],y.source[1][1]],[y.source[2][0],y.source[2][1]]];E[0][0]-C>this.sourceWorldWidth_/2&&(E[0][0]-=this.sourceWorldWidth_),E[1][0]-C>this.sourceWorldWidth_/2&&(E[1][0]-=this.sourceWorldWidth_),E[2][0]-C>this.sourceWorldWidth_/2&&(E[2][0]-=this.sourceWorldWidth_);let S=Math.min(E[0][0],E[1][0],E[2][0]);Math.max(E[0][0],E[1][0],E[2][0])-S<this.sourceWorldWidth_/2&&(y.source=E)}})}l={}}addTriangle_(t,e,i,r,s,o){this.triangles_.push({source:[r,s,o],target:[t,e,i]})}addQuad_(t,e,i,r,s,o,a,l,c){let h=Lr([s,o,a,l]),u=this.sourceWorldWidth_?k(h)/this.sourceWorldWidth_:null,f=this.sourceWorldWidth_,d=this.sourceProj_.canWrapX()&&u>.5&&u<1,g=!1;if(c>0){if(this.targetProj_.isGlobal()&&this.targetWorldWidth_){let _=Lr([t,e,i,r]);g=k(_)/this.targetWorldWidth_>Dl||g}!d&&this.sourceProj_.isGlobal()&&u&&(g=u>Dl||g)}if(!g&&this.maxSourceExtent_&&isFinite(h[0])&&isFinite(h[1])&&isFinite(h[2])&&isFinite(h[3])&&!Yt(h,this.maxSourceExtent_))return;let m=0;if(!g&&(!isFinite(s[0])||!isFinite(s[1])||!isFinite(o[0])||!isFinite(o[1])||!isFinite(a[0])||!isFinite(a[1])||!isFinite(l[0])||!isFinite(l[1]))){if(c>0)g=!0;else if(m=(!isFinite(s[0])||!isFinite(s[1])?8:0)+(!isFinite(o[0])||!isFinite(o[1])?4:0)+(!isFinite(a[0])||!isFinite(a[1])?2:0)+(!isFinite(l[0])||!isFinite(l[1])?1:0),m!=1&&m!=2&&m!=4&&m!=8)return}if(c>0){if(!g){let _=[(t[0]+i[0])/2,(t[1]+i[1])/2],w=this.transformInv_(_),x;d?x=(ie(s[0],f)+ie(a[0],f))/2-ie(w[0],f):x=(s[0]+a[0])/2-w[0];let C=(s[1]+a[1])/2-w[1];g=x*x+C*C>this.errorThresholdSquared_}if(g){if(Math.abs(t[0]-i[0])<=Math.abs(t[1]-i[1])){let _=[(e[0]+i[0])/2,(e[1]+i[1])/2],w=this.transformInv_(_),x=[(r[0]+t[0])/2,(r[1]+t[1])/2],C=this.transformInv_(x);this.addQuad_(t,e,_,x,s,o,w,C,c-1),this.addQuad_(x,_,i,r,C,w,a,l,c-1)}else{let _=[(t[0]+e[0])/2,(t[1]+e[1])/2],w=this.transformInv_(_),x=[(i[0]+r[0])/2,(i[1]+r[1])/2],C=this.transformInv_(x);this.addQuad_(t,_,x,r,s,w,C,l,c-1),this.addQuad_(_,e,i,x,w,o,a,C,c-1)}return}}if(d){if(!this.canWrapXInSource_)return;this.wrapsXInSource_=!0}(m&11)==0&&this.addTriangle_(t,i,r,s,a,l),(m&14)==0&&this.addTriangle_(t,i,e,s,a,o),m&&((m&13)==0&&this.addTriangle_(e,r,t,o,l,s),(m&7)==0&&this.addTriangle_(e,r,i,o,l,a))}calculateSourceExtent(){let t=Ot();return this.triangles_.forEach(function(e,i,r){let s=e.source;Nn(t,s[0]),Nn(t,s[1]),Nn(t,s[2])}),t}getTriangles(){return this.triangles_}},Nl=ls;var cs=class extends rn{constructor(t,e,i,r,s,o,a,l,c,h,u,f){super(s,I.IDLE,f),this.renderEdges_=u!==void 0?u:!1,this.pixelRatio_=a,this.gutter_=l,this.canvas_=null,this.sourceTileGrid_=e,this.targetTileGrid_=r,this.wrappedTileCoord_=o||s,this.sourceTiles_=[],this.sourcesListenerKeys_=null,this.sourceZ_=0,this.clipExtent_=t.canWrapX()?t.getExtent():void 0;let d=r.getTileCoordExtent(this.wrappedTileCoord_),g=this.targetTileGrid_.getExtent(),m=this.sourceTileGrid_.getExtent(),_=g?Wt(d,g):d;if(Fn(_)===0){this.state=I.EMPTY;return}let w=t.getExtent();w&&(m?m=Wt(m,w):m=w);let x=r.getResolution(this.wrappedTileCoord_[0]),C=Ml(t,i,_,x);if(!isFinite(C)||C<=0){this.state=I.EMPTY;return}let y=h!==void 0?h:.5;if(this.triangulation_=new Nl(t,i,_,m,C*y,x),this.triangulation_.getTriangles().length===0){this.state=I.EMPTY;return}this.sourceZ_=e.getZForResolution(C);let E=this.triangulation_.calculateSourceExtent();if(m&&(t.canWrapX()?(E[1]=j(E[1],m[1],m[3]),E[3]=j(E[3],m[1],m[3])):E=Wt(E,m)),!Fn(E))this.state=I.EMPTY;else{let S=0,z=0;t.canWrapX()&&(S=k(w),z=Math.floor((E[0]-w[0])/S)),ba(E.slice(),t,!0).forEach(v=>{let R=e.getTileRangeForExtentAndZ(v,this.sourceZ_);for(let U=R.minX;U<=R.maxX;U++)for(let q=R.minY;q<=R.maxY;q++){let K=z*S;this.sourceTiles_.push({getTile:()=>c(this.sourceZ_,U,q,a),offset:K})}++z}),this.sourceTiles_.length===0&&(this.state=I.EMPTY)}}getImage(){return this.canvas_}reproject_(){let t=[];if(this.sourceTiles_.forEach(e=>{let i=e.tile;if(i&&i.getState()==I.LOADED){let r=this.sourceTileGrid_.getTileCoordExtent(i.tileCoord);r[0]+=e.offset,r[2]+=e.offset;let s=this.clipExtent_?.slice();s&&(s[0]+=e.offset,s[2]+=e.offset),t.push({extent:r,clipExtent:s,image:i.getImage()})}}),this.sourceTiles_.length=0,t.length===0)this.state=I.ERROR;else{let e=this.wrappedTileCoord_[0],i=this.targetTileGrid_.getTileSize(e),r=typeof i=="number"?i:i[0],s=typeof i=="number"?i:i[1],o=this.targetTileGrid_.getResolution(e),a=this.sourceTileGrid_.getResolution(this.sourceZ_),l=this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);this.canvas_=bl(r,s,this.pixelRatio_,a,this.sourceTileGrid_.getExtent(),o,l,this.triangulation_,t,this.gutter_,this.renderEdges_,this.interpolate),this.state=I.LOADED}this.changed()}load(){for(let t of this.sourceTiles_)t.tile=t.getTile();if(this.state==I.IDLE){this.state=I.LOADING,this.changed();let t=0;this.sourcesListenerKeys_=[],this.sourceTiles_.forEach(({tile:e})=>{let i=e.getState();if(i==I.IDLE||i==I.LOADING){t++;let r=b(e,A.CHANGE,s=>{let o=e.getState();(o==I.LOADED||o==I.ERROR||o==I.EMPTY)&&(G(r),t--,t===0&&(this.unlistenSources_(),this.reproject_()))});this.sourcesListenerKeys_.push(r)}}),t===0?setTimeout(this.reproject_.bind(this),0):this.sourceTiles_.forEach(function({tile:e},i,r){e.getState()==I.IDLE&&e.load()})}}unlistenSources_(){this.sourcesListenerKeys_.forEach(G),this.sourcesListenerKeys_=null}release(){this.canvas_&&(Xn(this.canvas_.getContext("2d")),Xe.push(this.canvas_),this.canvas_=null),this.sourceTiles_.length=0,super.release()}},Xi=cs;function Vi(n){let t=n.getDefaultTileGrid();return t||(t=Uu(n),n.setDefaultTileGrid(t)),t}function Fl(n,t,e){let i=t[0],r=n.getTileCoordCenter(t),s=zl(e);if(!Ze(s,r)){let o=k(s),a=Math.ceil((s[0]-r[0])/o);return r[0]+=o*a,n.getTileCoordForCoordAndZ(r,i)}return t}function ku(n,t,e,i){i=i!==void 0?i:"top-left";let r=Gu(n,t,e);return new Ai({extent:n,origin:Aa(n,i),resolutions:r,tileSize:e})}function Gu(n,t,e,i){t=t!==void 0?t:42,e=H(e!==void 0?e:256);let r=rt(n),s=k(n);i=i>0?i:Math.max(s/e[0],r/e[1]);let o=t+1,a=new Array(o);for(let l=0;l<o;++l)a[l]=i/Math.pow(2,l);return a}function Uu(n,t,e,i){let r=zl(n);return ku(r,t,e,i)}function zl(n){n=mt(n);let t=n.getExtent();if(!t){let e=180*se.degrees/n.getMetersPerUnit();t=pe(-e,-e,e,e)}return t}var Xu=/\{z\}/g,Vu=/\{x\}/g,Ku=/\{y\}/g,ju=/\{-y\}/g;function kl(n,t,e,i,r){return n.replace(Xu,t.toString()).replace(Vu,e.toString()).replace(Ku,i.toString()).replace(ju,function(){if(r===void 0)throw new Error("If the URL template has a {-y} placeholder, the grid extent must be known");return(r-i).toString()})}function Gl(n){let t=[],e=/\{([a-z])-([a-z])\}/.exec(n);if(e){let i=e[1].charCodeAt(0),r=e[2].charCodeAt(0),s;for(s=i;s<=r;++s)t.push(n.replace(e[0],String.fromCharCode(s)));return t}if(e=/\{(\d+)-(\d+)\}/.exec(n),e){let i=parseInt(e[2],10);for(let r=parseInt(e[1],10);r<=i;r++)t.push(n.replace(e[0],r.toString()));return t}return t.push(n),t}function Wu(n,t){return(function(e,i,r){if(!e)return;let s,o=e[0];if(t){let a=t.getFullTileRange(o);a&&(s=a.getHeight()-1)}return kl(n,o,e[1],e[2],s)})}function Ul(n,t){let e=n.length,i=new Array(e);for(let r=0;r<e;++r)i[r]=Wu(n[r],t);return Yu(i)}function Yu(n){return n.length===1?n[0]:(function(t,e,i){if(!t)return;let r=Ka(t),s=ie(r,n.length);return n[s](t,e,i)})}var he={PROPERTYCHANGE:"propertychange"};var mn=class extends ve{constructor(){super(),this.on=this.onInternal,this.once=this.onceInternal,this.un=this.unInternal,this.revision_=0}changed(){++this.revision_,this.dispatchEvent(A.CHANGE)}getRevision(){return this.revision_}onInternal(t,e){if(Array.isArray(t)){let i=t.length,r=new Array(i);for(let s=0;s<i;++s)r[s]=b(this,t[s],e);return r}return b(this,t,e)}onceInternal(t,e){let i;if(Array.isArray(t)){let r=t.length;i=new Array(r);for(let s=0;s<r;++s)i[s]=nn(this,t[s],e)}else i=nn(this,t,e);return e.ol_key=i,i}unInternal(t,e){let i=e.ol_key;if(i)Bu(i);else if(Array.isArray(t))for(let r=0,s=t.length;r<s;++r)this.removeEventListener(t[r],e);else this.removeEventListener(t,e)}};mn.prototype.on;mn.prototype.once;mn.prototype.un;function Bu(n){if(Array.isArray(n))for(let t=0,e=n.length;t<e;++t)G(n[t]);else G(n)}var Ki=mn;var ji=class extends dt{constructor(t,e,i){super(t),this.key=e,this.oldValue=i}},hs=class extends Ki{constructor(t){super(),this.on,this.once,this.un,B(this),this.values_=null,t!==void 0&&this.setProperties(t)}get(t){let e;return this.values_&&this.values_.hasOwnProperty(t)&&(e=this.values_[t]),e}getKeys(){return this.values_&&Object.keys(this.values_)||[]}getProperties(){return this.values_&&Object.assign({},this.values_)||{}}getPropertiesInternal(){return this.values_}hasProperties(){return!!this.values_}notify(t,e){let i;i=`change:${t}`,this.hasListener(i)&&this.dispatchEvent(new ji(i,t,e)),i=he.PROPERTYCHANGE,this.hasListener(i)&&this.dispatchEvent(new ji(i,t,e))}addChangeListener(t,e){this.addEventListener(`change:${t}`,e)}removeChangeListener(t,e){this.removeEventListener(`change:${t}`,e)}set(t,e,i){let r=this.values_||(this.values_={});if(i)r[t]=e;else{let s=r[t];r[t]=e,s!==e&&this.notify(t,s)}}setProperties(t,e){for(let i in t)this.set(i,t[i],e)}applyProperties(t){t.values_&&Object.assign(this.values_||(this.values_={}),t.values_)}unset(t,e){if(this.values_&&t in this.values_){let i=this.values_[t];delete this.values_[t],Si(this.values_)&&(this.values_=null),e||this.notify(t,i)}}},ct=hs;var us=class extends ct{constructor(t){super(),this.projection=mt(t.projection),this.attributions_=Xl(t.attributions),this.attributionsCollapsible_=t.attributionsCollapsible??!0,this.loading=!1,this.state_=t.state!==void 0?t.state:"ready",this.wrapX_=t.wrapX!==void 0?t.wrapX:!1,this.interpolate_=!!t.interpolate,this.viewResolver=null,this.viewRejector=null;let e=this;this.viewPromise_=new Promise(function(i,r){e.viewResolver=i,e.viewRejector=r})}getAttributions(){return this.attributions_}getAttributionsCollapsible(){return this.attributionsCollapsible_}getProjection(){return this.projection}getResolutions(t){return null}getView(){return this.viewPromise_}ready(){let t=this.getState();return t==="ready"?Promise.resolve():t==="error"?Promise.reject(new Error("Source failed to load")):new Promise((e,i)=>{let r=()=>{let s=this.getState();s==="ready"?(this.un("change",r),e()):s==="error"&&(this.un("change",r),i(new Error("Source failed to load")))};this.on("change",r)})}getState(){return this.state_}getWrapX(){return this.wrapX_}getInterpolate(){return this.interpolate_}refresh(){this.changed()}setAttributions(t){this.attributions_=Xl(t),this.changed()}setState(t){this.state_=t,this.changed()}};function Xl(n){return n?typeof n=="function"?n:(Array.isArray(n)||(n=[n]),t=>n):null}var Vl=us;var fs=class extends Vl{constructor(t){super({attributions:t.attributions,attributionsCollapsible:t.attributionsCollapsible,projection:t.projection,state:t.state,wrapX:t.wrapX,interpolate:t.interpolate}),this.on,this.once,this.un,this.tilePixelRatio_=t.tilePixelRatio!==void 0?t.tilePixelRatio:1,this.tileGrid=t.tileGrid!==void 0?t.tileGrid:null;let e=[256,256];this.tileGrid&&H(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()),e),this.tmpSize=[0,0],this.key_=t.key||B(this),this.tileOptions={transition:t.transition,interpolate:t.interpolate},this.zDirection=t.zDirection?t.zDirection:0}getGutterForProjection(t){return 0}getKey(){return this.key_}setKey(t){this.key_!==t&&(this.key_=t,this.changed())}getResolutions(t){let e=t?this.getTileGridForProjection(t):this.tileGrid;return e?e.getResolutions():null}getTile(t,e,i,r,s,o){return O()}getTileGrid(){return this.tileGrid}getTileGridForProjection(t){return this.tileGrid?this.tileGrid:Vi(t)}getTilePixelRatio(t){return this.tilePixelRatio_}getTilePixelSize(t,e,i){let r=this.getTileGridForProjection(i),s=this.getTilePixelRatio(e),o=H(r.getTileSize(t),this.tmpSize);return s==1?o:Da(o,s,this.tmpSize)}getTileCoordForTileUrlFunction(t,e){let i=e!==void 0?e:this.getProjection(),r=e!==void 0?this.getTileGridForProjection(i):this.tileGrid||this.getTileGridForProjection(i);return this.getWrapX()&&i.isGlobal()&&(t=Fl(r,t,i)),ja(t,r)?t:null}clear(){}refresh(){this.clear(),super.refresh()}},Wi=class extends dt{constructor(t,e){super(t),this.tile=e}},Kl=fs;var Yi={TILELOADSTART:"tileloadstart",TILELOADEND:"tileloadend",TILELOADERROR:"tileloaderror"};var ds=class n extends Kl{constructor(t){super({attributions:t.attributions,cacheSize:t.cacheSize,projection:t.projection,state:t.state,tileGrid:t.tileGrid,tilePixelRatio:t.tilePixelRatio,wrapX:t.wrapX,transition:t.transition,interpolate:t.interpolate,key:t.key,attributionsCollapsible:t.attributionsCollapsible,zDirection:t.zDirection}),this.generateTileUrlFunction_=this.tileUrlFunction===n.prototype.tileUrlFunction,this.tileLoadFunction=t.tileLoadFunction,t.tileUrlFunction&&(this.tileUrlFunction=t.tileUrlFunction),this.urls=null,t.urls?this.setUrls(t.urls):t.url&&this.setUrl(t.url),this.tileLoadingKeys_={}}getTileLoadFunction(){return this.tileLoadFunction}getTileUrlFunction(){return Object.getPrototypeOf(this).tileUrlFunction===this.tileUrlFunction?this.tileUrlFunction.bind(this):this.tileUrlFunction}getUrls(){return this.urls}handleTileChange(t){let e=t.target,i=B(e),r=e.getState(),s;r==I.LOADING?(this.tileLoadingKeys_[i]=!0,s=Yi.TILELOADSTART):i in this.tileLoadingKeys_&&(delete this.tileLoadingKeys_[i],s=r==I.ERROR?Yi.TILELOADERROR:r==I.LOADED?Yi.TILELOADEND:void 0),s!=null&&this.dispatchEvent(new Wi(s,e))}setTileLoadFunction(t){this.tileLoadFunction=t,this.changed()}setTileUrlFunction(t,e){this.tileUrlFunction=t,typeof e<"u"?this.setKey(e):this.changed()}setUrl(t){let e=Gl(t);this.urls=e,this.setUrls(e)}setUrls(t){this.urls=t;let e=t.join(`
`);this.generateTileUrlFunction_?this.setTileUrlFunction(Ul(t,this.tileGrid),e):this.setKey(e)}tileUrlFunction(t,e,i){}},jl=ds;var gs=class extends jl{constructor(t){super({attributions:t.attributions,cacheSize:t.cacheSize,projection:t.projection,state:t.state,tileGrid:t.tileGrid,tileLoadFunction:t.tileLoadFunction?t.tileLoadFunction:Zu,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:t.wrapX,transition:t.transition,interpolate:t.interpolate!==void 0?t.interpolate:!0,key:t.key,attributionsCollapsible:t.attributionsCollapsible,zDirection:t.zDirection}),this.crossOrigin=t.crossOrigin!==void 0?t.crossOrigin:null,this.referrerPolicy=t.referrerPolicy,this.tileClass=t.tileClass!==void 0?t.tileClass:on,this.tileGridForProjection={},this.reprojectionErrorThreshold_=t.reprojectionErrorThreshold,this.renderReprojectionEdges_=!1}getGutterForProjection(t){return this.getProjection()&&t&&!dn(this.getProjection(),t)?0:this.getGutter()}getGutter(){return 0}getKey(){let t=super.getKey();return this.getInterpolate()||(t+=":disable-interpolation"),t}getTileGridForProjection(t){let e=this.getProjection();if(this.tileGrid&&(!e||dn(e,t)))return this.tileGrid;let i=B(t);return i in this.tileGridForProjection||(this.tileGridForProjection[i]=Vi(t)),this.tileGridForProjection[i]}createTile_(t,e,i,r,s,o){let a=[t,e,i],l=this.getTileCoordForTileUrlFunction(a,s),c=l?this.tileUrlFunction(l,r,s):void 0,h=new this.tileClass(a,c!==void 0?I.IDLE:I.EMPTY,c!==void 0?c:"",{crossOrigin:this.crossOrigin,referrerPolicy:this.referrerPolicy},this.tileLoadFunction,this.tileOptions);return h.key=o,h.addEventListener(A.CHANGE,this.handleTileChange.bind(this)),h}getTile(t,e,i,r,s,o){let a=this.getProjection();if(!a||!s||dn(a,s))return this.getTileInternal(t,e,i,r,a||s);let l=[t,e,i],c=this.getKey(),h=this.getTileGridForProjection(a),u=this.getTileGridForProjection(s),f=this.getTileCoordForTileUrlFunction(l,s),d=new Xi(a,h,s,u,l,f,this.getTilePixelRatio(r),this.getGutter(),(g,m,_,w)=>this.getTileInternal(g,m,_,w,a,o),this.reprojectionErrorThreshold_,this.renderReprojectionEdges_,this.tileOptions);return d.key=c,d}getTileInternal(t,e,i,r,s,o){let a=this.getKey(),l=tn(this,a,t,e,i);if(o&&o.containsKey(l))return o.get(l);let c=this.createTile_(t,e,i,r,s,a);return o?.set(l,c),c}setRenderReprojectionEdges(t){this.renderReprojectionEdges_!=t&&(this.renderReprojectionEdges_=t,this.changed())}setTileGridForProjection(t,e){let i=mt(t);if(i){let r=B(i);r in this.tileGridForProjection||(this.tileGridForProjection[r]=e)}}};function Zu(n,t){if(gt){let e=n.getCrossOrigin(),i="same-origin",r="same-origin";e==="anonymous"||e===""?(i="cors",r="omit"):e==="use-credentials"&&(i="cors",r="include");let s={mode:i,credentials:r,referrerPolicy:n.getReferrerPolicy()};fetch(t,s).then(o=>{if(!o.ok)throw new Error(`HTTP ${o.status}`);return o.blob()}).then(o=>createImageBitmap(o)).then(o=>{let a=n.getImage();a.width=o.width,a.height=o.height,a.getContext("2d").drawImage(o,0,0),o.close?.(),a.dispatchEvent(new Event("load"))}).catch(()=>{n.getImage().dispatchEvent(new Event("error"))});return}n.getImage().src=t}var Wl=gs;var Bi=class extends on{constructor(t,e,i,r,s,o,a){super(e,i,r,s,o,a),this.zoomifyImage_=null,this.tileSize_=t}getImage(){if(this.zoomifyImage_)return this.zoomifyImage_;let t=super.getImage();if(this.state==I.LOADED){let e=this.tileSize_;if(t.width==e[0]&&t.height==e[1])return this.zoomifyImage_=t,t;let i=J(e[0],e[1]);return i.drawImage(t,0,0),this.zoomifyImage_=i.canvas,i.canvas}return t}};function jn(n){return n.toLocaleString("en",{maximumFractionDigits:10})}var ms=class extends Wl{constructor(t){let e=t||{},i=e.url||"";i=i+(i.lastIndexOf("/")===i.length-1||i===""?"":"/");let r=e.version||nt.VERSION2,s=e.sizes||[],o=e.size;P(o!=null&&Array.isArray(o)&&o.length==2&&!isNaN(o[0])&&o[0]>0&&!isNaN(o[1])&&o[1]>0,"Missing or invalid `size`");let a=o[0],l=o[1],c=e.tileSize,h=e.tilePixelRatio||1,u=e.format||"jpg",f=e.quality||(e.version==nt.VERSION1?"native":"default"),d=e.resolutions||[],g=e.supports||[],m=e.extent||[0,-l,a,0],_=s!=null&&Array.isArray(s)&&s.length>0,w=c!==void 0&&(typeof c=="number"&&Number.isInteger(c)&&c>0||Array.isArray(c)&&c.length>0),x=g!=null&&Array.isArray(g)&&(g.includes("regionByPx")||g.includes("regionByPct"))&&(g.includes("sizeByWh")||g.includes("sizeByH")||g.includes("sizeByW")||g.includes("sizeByPct")),C,y,E;if(d.sort(function(v,R){return R-v}),w||x)if(c!=null&&(typeof c=="number"&&Number.isInteger(c)&&c>0?(C=c,y=c):Array.isArray(c)&&c.length>0&&((c.length==1||c[1]==null&&Number.isInteger(c[0]))&&(C=c[0],y=c[0]),c.length==2&&(Number.isInteger(c[0])&&Number.isInteger(c[1])?(C=c[0],y=c[1]):c[0]==null&&Number.isInteger(c[1])&&(C=c[1],y=c[1])))),(C===void 0||y===void 0)&&(C=256,y=256),d.length==0){E=Math.max(Math.ceil(Math.log(a/C)/Math.LN2),Math.ceil(Math.log(l/y)/Math.LN2));for(let v=E;v>=0;v--)d.push(Math.pow(2,v))}else{let v=Math.max(...d);E=Math.round(Math.log(v)/Math.LN2)}else if(C=a,y=l,d=[],_){s.sort(function(R,U){return R[0]-U[0]}),E=-1;let v=[];for(let R=0;R<s.length;R++){let U=a/s[R][0];if(d.length>0&&d[d.length-1]==U){v.push(R);continue}d.push(U),E++}if(v.length>0)for(let R=0;R<v.length;R++)s.splice(v[R]-R,1)}else d.push(1),s.push([a,l]),E=0;let S=new Ai({tileSize:[C,y],extent:m,origin:Tt(m),resolutions:d}),z=function(v,R,U){let q,K,ft=v[0];if(ft>E)return;let Et=v[1],Y=v[2],N=d[ft];if(!(Et===void 0||Y===void 0||N===void 0||Et<0||Math.ceil(a/N/C)<=Et||Y<0||Math.ceil(l/N/y)<=Y)){if(x||w){let V=Et*C*N,$=Y*y*N,st=C*N,ot=y*N,at=C,xt=y;if(V+st>a&&(st=a-V),$+ot>l&&(ot=l-$),V+C*N>a&&(at=Math.floor((a-V+N-1)/N)),$+y*N>l&&(xt=Math.floor((l-$+N-1)/N)),V==0&&st==a&&$==0&&ot==l)q="full";else if(!x||g.includes("regionByPx"))q=V+","+$+","+st+","+ot;else if(g.includes("regionByPct")){let Be=jn(V/a*100),Pt=jn($/l*100),Kt=jn(st/a*100),et=jn(ot/l*100);q="pct:"+Be+","+Pt+","+Kt+","+et}r==nt.VERSION3&&(!x||g.includes("sizeByWh"))?K=at+","+xt:!x||g.includes("sizeByW")?K=at+",":g.includes("sizeByH")?K=","+xt:g.includes("sizeByWh")?K=at+","+xt:g.includes("sizeByPct")&&(K="pct:"+jn(100/N))}else if(q="full",_){let V=s[ft][0],$=s[ft][1];r==nt.VERSION3?V==a&&$==l?K="max":K=V+","+$:V==a?K="full":K=V+","}else K=r==nt.VERSION3?"max":"full";return i+q+"/"+K+"/0/"+f+"."+u}},T=Bi.bind(null,H(c||256).map(function(v){return v*h}));super({attributions:e.attributions,attributionsCollapsible:e.attributionsCollapsible,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,interpolate:e.interpolate,projection:e.projection,reprojectionErrorThreshold:e.reprojectionErrorThreshold,state:e.state,tileClass:T,tileGrid:S,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:z,transition:e.transition}),this.zDirection=e.zDirection}},ps=ms;var wt={ADD:"add",REMOVE:"remove"};var Yl={LENGTH:"length"},pn=class extends dt{constructor(t,e,i){super(t),this.element=e,this.index=i}},_s=class extends ct{constructor(t,e){if(super(),this.on,this.once,this.un,e=e||{},this.unique_=!!e.unique,this.array_=t??[],this.unique_)for(let i=1,r=this.array_.length;i<r;++i)this.assertUnique_(this.array_[i],i);this.updateLength_()}clear(){for(;this.getLength()>0;)this.pop()}extend(t){for(let e=0,i=t.length;e<i;++e)this.push(t[e]);return this}forEach(t){let e=this.array_;for(let i=0,r=e.length;i<r;++i)t(e[i],i,e)}getArray(){return this.array_}item(t){return this.array_[t]}getLength(){return this.get(Yl.LENGTH)}insertAt(t,e){if(t<0||t>this.getLength())throw new Error("Index out of bounds: "+t);this.unique_&&this.assertUnique_(e),this.array_.splice(t,0,e),this.updateLength_(),this.dispatchEvent(new pn(wt.ADD,e,t))}pop(){return this.removeAt(this.getLength()-1)}push(t){let e=this.getLength();return this.insertAt(e,t),this.getLength()}remove(t){let e=this.array_;for(let i=0,r=e.length;i<r;++i)if(e[i]===t)return this.removeAt(i)}removeAt(t){if(t<0||t>=this.getLength())return;let e=this.array_[t];return this.array_.splice(t,1),this.updateLength_(),this.dispatchEvent(new pn(wt.REMOVE,e,t)),e}setAt(t,e){let i=this.getLength();if(t>=i){this.insertAt(t,e);return}if(t<0)throw new Error("Index out of bounds: "+t);this.unique_&&this.assertUnique_(e,t);let r=this.array_[t];this.array_[t]=e,this.dispatchEvent(new pn(wt.REMOVE,r,t)),this.dispatchEvent(new pn(wt.ADD,e,t))}updateLength_(){this.set(Yl.LENGTH,this.array_.length)}assertUnique_(t,e){let i=this.array_;for(let r=0,s=i.length;r<s;++r)if(i[r]===t&&r!==e)throw new Error("Duplicate item added to a unique collection")}},Ct=_s;var ys=class extends dt{constructor(t,e,i){super(t),this.map=e,this.frameState=i!==void 0?i:null}},Te=ys;var Es=class extends Te{constructor(t,e,i,r,s,o){super(t,e,s),this.originalEvent=i,this.pixel_=null,this.coordinate_=null,this.dragging=r!==void 0?r:!1,this.activePointers=o}get pixel(){return this.pixel_||(this.pixel_=this.map.getEventPixel(this.originalEvent)),this.pixel_}set pixel(t){this.pixel_=t}get coordinate(){return this.coordinate_||(this.coordinate_=this.map.getCoordinateFromPixel(this.pixel)),this.coordinate_}set coordinate(t){this.coordinate_=t}preventDefault(){super.preventDefault(),"preventDefault"in this.originalEvent&&this.originalEvent.preventDefault()}stopPropagation(){super.stopPropagation(),"stopPropagation"in this.originalEvent&&this.originalEvent.stopPropagation()}},Zt=Es;var Z={SINGLECLICK:"singleclick",CLICK:A.CLICK,DBLCLICK:A.DBLCLICK,POINTERDRAG:"pointerdrag",POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"};var Wn={POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"};var xs=class extends ve{constructor(t,e){super(t),this.map_=t,this.clickTimeoutId_,this.emulateClicks_=!1,this.dragging_=!1,this.dragListenerKeys_=[],this.moveTolerance_=e===void 0?1:e,this.down_=null;let i=this.map_.getViewport();this.activePointers_=[],this.trackedTouches_={},this.element_=i,this.pointerdownListenerKey_=b(i,Wn.POINTERDOWN,this.handlePointerDown_,this),this.originalPointerMoveEvent_,this.relayedListenerKey_=b(i,Wn.POINTERMOVE,this.relayMoveEvent_,this),this.boundHandleTouchMove_=this.handleTouchMove_.bind(this),this.element_.addEventListener(A.TOUCHMOVE,this.boundHandleTouchMove_,Li?{passive:!1}:!1)}emulateClick_(t){let e=new Zt(Z.CLICK,this.map_,t);this.dispatchEvent(e),this.clickTimeoutId_!==void 0?(clearTimeout(this.clickTimeoutId_),this.clickTimeoutId_=void 0,e=new Zt(Z.DBLCLICK,this.map_,t),this.dispatchEvent(e)):this.clickTimeoutId_=setTimeout(()=>{this.clickTimeoutId_=void 0;let i=new Zt(Z.SINGLECLICK,this.map_,t);this.dispatchEvent(i)},250)}updateActivePointers_(t){let e=t,i=e.pointerId;if(e.type==Z.POINTERUP||e.type==Z.POINTERCANCEL){delete this.trackedTouches_[i];for(let r in this.trackedTouches_)if(this.trackedTouches_[r].target!==e.target){delete this.trackedTouches_[r];break}}else(e.type==Z.POINTERDOWN||e.type==Z.POINTERMOVE)&&(this.trackedTouches_[i]=e);this.activePointers_=Object.values(this.trackedTouches_)}handlePointerUp_(t){this.updateActivePointers_(t);let e=new Zt(Z.POINTERUP,this.map_,t,void 0,void 0,this.activePointers_);this.dispatchEvent(e),this.emulateClicks_&&!e.defaultPrevented&&!this.dragging_&&this.isMouseActionButton_(t)&&this.emulateClick_(this.down_),this.activePointers_.length===0&&(this.dragListenerKeys_.forEach(G),this.dragListenerKeys_.length=0,this.dragging_=!1,this.down_=null)}isMouseActionButton_(t){return t.button===0}handlePointerDown_(t){this.emulateClicks_=this.activePointers_.length===0,this.updateActivePointers_(t);let e=new Zt(Z.POINTERDOWN,this.map_,t,void 0,void 0,this.activePointers_);if(this.dispatchEvent(e),this.down_=new PointerEvent(t.type,t),Object.defineProperty(this.down_,"target",{writable:!1,value:t.target}),this.dragListenerKeys_.length===0){let i=this.map_.getOwnerDocument();this.dragListenerKeys_.push(b(i,Z.POINTERMOVE,this.handlePointerMove_,this),b(i,Z.POINTERUP,this.handlePointerUp_,this),b(this.element_,Z.POINTERCANCEL,this.handlePointerUp_,this)),this.element_.getRootNode&&this.element_.getRootNode()!==i&&this.dragListenerKeys_.push(b(this.element_.getRootNode(),Z.POINTERUP,this.handlePointerUp_,this))}}handlePointerMove_(t){if(this.isMoving_(t)){this.updateActivePointers_(t),this.dragging_=!0;let e=new Zt(Z.POINTERDRAG,this.map_,t,this.dragging_,void 0,this.activePointers_);this.dispatchEvent(e)}}relayMoveEvent_(t){this.originalPointerMoveEvent_=t;let e=!!(this.down_&&this.isMoving_(t));this.dispatchEvent(new Zt(Z.POINTERMOVE,this.map_,t,e))}handleTouchMove_(t){let e=this.originalPointerMoveEvent_;(!e||e.defaultPrevented)&&(typeof t.cancelable!="boolean"||t.cancelable===!0)&&t.preventDefault()}isMoving_(t){return this.dragging_||Math.abs(t.clientX-this.down_.clientX)>this.moveTolerance_||Math.abs(t.clientY-this.down_.clientY)>this.moveTolerance_}disposeInternal(){this.relayedListenerKey_&&(G(this.relayedListenerKey_),this.relayedListenerKey_=null),this.element_.removeEventListener(A.TOUCHMOVE,this.boundHandleTouchMove_),this.pointerdownListenerKey_&&(G(this.pointerdownListenerKey_),this.pointerdownListenerKey_=null),this.dragListenerKeys_.forEach(G),this.dragListenerKeys_.length=0,this.element_=null,super.disposeInternal()}},Bl=xs;var qt={POSTRENDER:"postrender",MOVESTART:"movestart",MOVEEND:"moveend",LOADSTART:"loadstart",LOADEND:"loadend"};var it={LAYERGROUP:"layergroup",SIZE:"size",TARGET:"target",VIEW:"view"};var Yn=1/0,ws=class{constructor(t,e){this.priorityFunction_=t,this.keyFunction_=e,this.elements_=[],this.priorities_=[],this.queuedElements_={}}clear(){this.elements_.length=0,this.priorities_.length=0,we(this.queuedElements_)}dequeue(){let t=this.elements_,e=this.priorities_,i=t[0];t.length==1?(t.length=0,e.length=0):(t[0]=t.pop(),e[0]=e.pop(),this.siftUp_(0));let r=this.keyFunction_(i);return delete this.queuedElements_[r],i}enqueue(t){P(!(this.keyFunction_(t)in this.queuedElements_),"Tried to enqueue an `element` that was already added to the queue");let e=this.priorityFunction_(t);return e!=Yn?(this.elements_.push(t),this.priorities_.push(e),this.queuedElements_[this.keyFunction_(t)]=!0,this.siftDown_(0,this.elements_.length-1),!0):!1}getCount(){return this.elements_.length}getLeftChildIndex_(t){return t*2+1}getRightChildIndex_(t){return t*2+2}getParentIndex_(t){return t-1>>1}heapify_(){let t;for(t=(this.elements_.length>>1)-1;t>=0;t--)this.siftUp_(t)}isEmpty(){return this.elements_.length===0}isKeyQueued(t){return t in this.queuedElements_}isQueued(t){return this.isKeyQueued(this.keyFunction_(t))}siftUp_(t){let e=this.elements_,i=this.priorities_,r=e.length,s=e[t],o=i[t],a=t;for(;t<r>>1;){let l=this.getLeftChildIndex_(t),c=this.getRightChildIndex_(t),h=c<r&&i[c]<i[l]?c:l;e[t]=e[h],i[t]=i[h],t=h}e[t]=s,i[t]=o,this.siftDown_(a,t)}siftDown_(t,e){let i=this.elements_,r=this.priorities_,s=i[e],o=r[e];for(;e>t;){let a=this.getParentIndex_(e);if(r[a]>o)i[e]=i[a],r[e]=r[a],e=a;else break}i[e]=s,r[e]=o}reprioritize(){let t=this.priorityFunction_,e=this.elements_,i=this.priorities_,r=0,s=e.length,o,a,l;for(a=0;a<s;++a)o=e[a],l=t(o),l==Yn?delete this.queuedElements_[this.keyFunction_(o)]:(i[r]=l,e[r++]=o);e.length=r,i.length=r,this.heapify_()}},Zl=ws;var Cs=class extends Zl{constructor(t,e){super(i=>t.apply(null,i),i=>i[0].getKey()),this.boundHandleTileChange_=this.handleTileChange.bind(this),this.tileChangeCallback_=e,this.tilesLoading_=0,this.tilesLoadingKeys_={}}enqueue(t){let e=super.enqueue(t);return e&&t[0].addEventListener(A.CHANGE,this.boundHandleTileChange_),e}getTilesLoading(){return this.tilesLoading_}handleTileChange(t){let e=t.target,i=e.getState();if(i===I.LOADED||i===I.ERROR||i===I.EMPTY){i!==I.ERROR&&e.removeEventListener(A.CHANGE,this.boundHandleTileChange_);let r=e.getKey();r in this.tilesLoadingKeys_&&(delete this.tilesLoadingKeys_[r],--this.tilesLoading_),this.tileChangeCallback_()}}loadMoreTiles(t,e){let i=0;for(;this.tilesLoading_<t&&i<e&&this.getCount()>0;){let r=this.dequeue()[0],s=r.getKey();r.getState()===I.IDLE&&!(s in this.tilesLoadingKeys_)&&(this.tilesLoadingKeys_[s]=!0,++this.tilesLoading_,++i,r.load())}}},ql=Cs;function Hl(n,t,e,i,r){if(!n||!(e in n.wantedTiles))return Yn;if(!n.wantedTiles[e][t.getKey()])return Yn;let s=n.viewState.center,o=i[0]-s[0],a=i[1]-s[1];return 65536*Math.log(r)+Math.sqrt(o*o+a*a)/r}var It={ANIMATING:0,INTERACTING:1};var Ft={CENTER:"center",RESOLUTION:"resolution",ROTATION:"rotation"};function vs(n,t,e){return(function(i,r,s,o,a){if(!i)return;if(!r&&!t)return i;let l=t?0:s[0]*r,c=t?0:s[1]*r,h=a?a[0]:0,u=a?a[1]:0,f=n[0]+l/2+h,d=n[2]-l/2+h,g=n[1]+c/2+u,m=n[3]-c/2+u;f>d&&(f=(d+f)/2,d=f),g>m&&(g=(m+g)/2,m=g);let _=j(i[0],f,d),w=j(i[1],g,m);if(o&&e&&r){let x=30*r;_+=-x*Math.log(1+Math.max(0,f-i[0])/x)+x*Math.log(1+Math.max(0,i[0]-d)/x),w+=-x*Math.log(1+Math.max(0,g-i[1])/x)+x*Math.log(1+Math.max(0,i[1]-m)/x)}return[_,w]})}function $l(n){return n}function Rs(n,t,e,i,r,s,o){s=s||[],o=o||2;let a=0;for(let l=t;l<e;l+=i){let c=n[l],h=n[l+1];s[a++]=r[0]*c+r[2]*h+r[4],s[a++]=r[1]*c+r[3]*h+r[5];for(let u=2;u<o;u++)s[a++]=n[l+u]}return s&&s.length!=a&&(s.length=a),s}function Jl(n,t,e,i,r,s,o){o=o||[];let a=Math.cos(r),l=Math.sin(r),c=s[0],h=s[1],u=0;for(let f=t;f<e;f+=i){let d=n[f]-c,g=n[f+1]-h;o[u++]=c+d*a-g*l,o[u++]=h+d*l+g*a;for(let m=f+2;m<f+i;++m)o[u++]=n[m]}return o&&o.length!=u&&(o.length=u),o}function Ql(n,t,e,i,r,s,o,a){a=a||[];let l=o[0],c=o[1],h=0;for(let u=t;u<e;u+=i){let f=n[u]-l,d=n[u+1]-c;a[h++]=l+r*f,a[h++]=c+s*d;for(let g=u+2;g<u+i;++g)a[h++]=n[g]}return a&&a.length!=h&&(a.length=h),a}function tc(n,t,e,i,r,s,o){o=o||[];let a=0;for(let l=t;l<e;l+=i){o[a++]=n[l]+r,o[a++]=n[l+1]+s;for(let c=l+2;c<l+i;++c)o[a++]=n[c]}return o&&o.length!=a&&(o.length=a),o}var ec=le(),qu=[NaN,NaN],Ts=class extends ct{constructor(){super(),this.extent_=Ot(),this.extentRevision_=-1,this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=0,this.simplifyTransformedInternal=Wa((t,e,i)=>{if(!i)return this.getSimplifiedGeometry(e);let r=this.clone();return r.applyTransform(i),r.getSimplifiedGeometry(e)})}simplifyTransformed(t,e){return this.simplifyTransformedInternal(this.getRevision(),t,e)}clone(){return O()}closestPointXY(t,e,i,r){return O()}containsXY(t,e){return this.closestPointXY(t,e,qu,Number.MIN_VALUE)===0}getClosestPoint(t,e){return e=e||[NaN,NaN],this.closestPointXY(t[0],t[1],e,1/0),e}intersectsCoordinate(t){return this.containsXY(t[0],t[1])}computeExtent(t){return O()}getExtent(t){if(this.extentRevision_!=this.getRevision()){let e=this.computeExtent(this.extent_);(isNaN(e[0])||isNaN(e[1]))&&be(e),this.extentRevision_=this.getRevision()}return Sa(this.extent_,t)}rotate(t,e){O()}scale(t,e,i){O()}simplify(t){return this.getSimplifiedGeometry(t*t)}getSimplifiedGeometry(t){return O()}getType(){return O()}applyTransform(t){O()}intersectsExtent(t){return O()}translate(t,e){O()}transform(t,e){let i=mt(t),r=i.getUnits()=="tile-pixels"?function(s,o,a){let l=i.getExtent(),c=i.getWorldExtent(),h=rt(c)/rt(l);ce(ec,c[0],c[3],h,-h,0,0,0);let u=Rs(s,0,s.length,a,ec,o),f=Ue(i,e);return f?f(u,u,a):u}:Ue(i,e);return this.applyTransform(r),this}},nc=Ts;var Is=class extends nc{constructor(){super(),this.layout="XY",this.stride=2,this.flatCoordinates}computeExtent(t){return Ta(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)}getCoordinates(){return O()}getFirstCoordinate(){return this.flatCoordinates.slice(0,this.stride)}getFlatCoordinates(){return this.flatCoordinates}getLastCoordinate(){return this.flatCoordinates.slice(this.flatCoordinates.length-this.stride)}getLayout(){return this.layout}getSimplifiedGeometry(t){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),t<0||this.simplifiedGeometryMaxMinSquaredTolerance!==0&&t<=this.simplifiedGeometryMaxMinSquaredTolerance)return this;let e=this.getSimplifiedGeometryInternal(t);return e.getFlatCoordinates().length<this.flatCoordinates.length?e:(this.simplifiedGeometryMaxMinSquaredTolerance=t,this)}getSimplifiedGeometryInternal(t){return this}getStride(){return this.stride}setFlatCoordinates(t,e){this.stride=ic(t),this.layout=t,this.flatCoordinates=e}setCoordinates(t,e){O()}setLayout(t,e,i){let r;if(t)r=ic(t);else{for(let s=0;s<i;++s){if(e.length===0){this.layout="XY",this.stride=2;return}e=e[0]}r=e.length,t=Hu(r)}this.layout=t,this.stride=r}applyTransform(t){this.flatCoordinates&&(t(this.flatCoordinates,this.flatCoordinates,this.layout.startsWith("XYZ")?3:2,this.stride),this.changed())}rotate(t,e){let i=this.getFlatCoordinates();if(i){let r=this.getStride();Jl(i,0,i.length,r,t,e,i),this.changed()}}scale(t,e,i){e===void 0&&(e=t),i||(i=jt(this.getExtent()));let r=this.getFlatCoordinates();if(r){let s=this.getStride();Ql(r,0,r.length,s,t,e,i,r),this.changed()}}translate(t,e){let i=this.getFlatCoordinates();if(i){let r=this.getStride();tc(i,0,i.length,r,t,e,i),this.changed()}}};function Hu(n){let t;return n==2?t="XY":n==3?t="XYZ":n==4&&(t="XYZM"),t}function ic(n){let t;return n=="XY"?t=2:n=="XYZ"||n=="XYM"?t=3:n=="XYZM"&&(t=4),t}var _n=Is;function As(n,t,e,i){let r=0,s=n[e-i],o=n[e-i+1],a=0,l=0;for(;t<e;t+=i){let c=n[t]-s,h=n[t+1]-o;r+=l*c-a*h,a=c,l=h}return r/2}function rc(n,t,e,i){let r=0;for(let s=0,o=e.length;s<o;++s){let a=e[s];r+=As(n,t,a,i),t=a}return r}function sc(n,t,e,i,r,s,o){let a=n[t],l=n[t+1],c=n[e]-a,h=n[e+1]-l,u;if(c===0&&h===0)u=t;else{let f=((r-a)*c+(s-l)*h)/(c*c+h*h);if(f>1)u=e;else if(f>0){for(let d=0;d<i;++d)o[d]=Va(n[t+d],n[e+d],f);o.length=i;return}else u=t}for(let f=0;f<i;++f)o[f]=n[u+f];o.length=i}function Ss(n,t,e,i,r){let s=n[t],o=n[t+1];for(t+=i;t<e;t+=i){let a=n[t],l=n[t+1],c=ne(s,o,a,l);c>r&&(r=c),s=a,o=l}return r}function oc(n,t,e,i,r){for(let s=0,o=e.length;s<o;++s){let a=e[s];r=Ss(n,t,a,i,r),t=a}return r}function Ls(n,t,e,i,r,s,o,a,l,c,h){if(t==e)return c;let u,f;if(r===0){if(f=ne(o,a,n[t],n[t+1]),f<c){for(u=0;u<i;++u)l[u]=n[t+u];return l.length=i,f}return c}h=h||[NaN,NaN];let d=t+i;for(;d<e;)if(sc(n,d-i,d,i,o,a,h),f=ne(o,a,h[0],h[1]),f<c){for(c=f,u=0;u<i;++u)l[u]=h[u];l.length=i,d+=i}else d+=i*Math.max((Math.sqrt(f)-Math.sqrt(c))/r|0,1);if(s&&(sc(n,e-i,t,i,o,a,h),f=ne(o,a,h[0],h[1]),f<c)){for(c=f,u=0;u<i;++u)l[u]=h[u];l.length=i}return c}function ac(n,t,e,i,r,s,o,a,l,c,h){h=h||[NaN,NaN];for(let u=0,f=e.length;u<f;++u){let d=e[u];c=Ls(n,t,d,i,r,s,o,a,l,c,h),t=d}return c}function lc(n,t,e,i){for(let r=0,s=e.length;r<s;++r)n[t++]=e[r];return t}function Ms(n,t,e,i){for(let r=0,s=e.length;r<s;++r){let o=e[r];for(let a=0;a<i;++a)n[t++]=o[a]}return t}function cc(n,t,e,i,r){r=r||[];let s=0;for(let o=0,a=e.length;o<a;++o){let l=Ms(n,t,e[o],i);r[s++]=l,t=l}return r.length=s,r}function bs(n,t,e,i,r){r=r!==void 0?r:[];let s=0;for(let o=t;o<e;o+=i)r[s++]=n.slice(o,o+i);return r.length=s,r}function hc(n,t,e,i,r){r=r!==void 0?r:[];let s=0;for(let o=0,a=e.length;o<a;++o){let l=e[o];r[s++]=bs(n,t,l,i,r[s]),t=l}return r.length=s,r}function uc(n,t,e,i,r,s,o){let a=(e-t)/i;if(a<3){for(;t<e;t+=i)s[o++]=n[t],s[o++]=n[t+1];return o}let l=new Array(a);l[0]=1,l[a-1]=1;let c=[t,e-i],h=0;for(;c.length>0;){let u=c.pop(),f=c.pop(),d=0,g=n[f],m=n[f+1],_=n[u],w=n[u+1];for(let x=f+i;x<u;x+=i){let C=n[x],y=n[x+1],E=Ua(C,y,g,m,_,w);E>d&&(h=x,d=E)}d>r&&(l[(h-t)/i]=1,f+i<h&&c.push(f,h),h+i<u&&c.push(h,u))}for(let u=0;u<a;++u)l[u]&&(s[o++]=n[t+u*i],s[o++]=n[t+u*i+1]);return o}function yn(n,t){return t*Math.round(n/t)}function $u(n,t,e,i,r,s,o){if(t==e)return o;let a=yn(n[t],r),l=yn(n[t+1],r);t+=i,s[o++]=a,s[o++]=l;let c,h;do if(c=yn(n[t],r),h=yn(n[t+1],r),t+=i,t==e)return s[o++]=c,s[o++]=h,o;while(c==a&&h==l);for(;t<e;){let u=yn(n[t],r),f=yn(n[t+1],r);if(t+=i,u==c&&f==h)continue;let d=c-a,g=h-l,m=u-a,_=f-l;if(d*_==g*m&&(d<0&&m<d||d==m||d>0&&m>d)&&(g<0&&_<g||g==_||g>0&&_>g)){c=u,h=f;continue}s[o++]=c,s[o++]=h,a=c,l=h,c=u,h=f}return s[o++]=c,s[o++]=h,o}function fc(n,t,e,i,r,s,o,a){for(let l=0,c=e.length;l<c;++l){let h=e[l];o=$u(n,t,h,i,r,s,o),a.push(o),t=h}return o}var Ps=class n extends _n{constructor(t,e){super(),this.maxDelta_=-1,this.maxDeltaRevision_=-1,e!==void 0&&!Array.isArray(t[0])?this.setFlatCoordinates(e,t):this.setCoordinates(t,e)}clone(){return new n(this.flatCoordinates.slice(),this.layout)}closestPointXY(t,e,i,r){return r<pi(this.getExtent(),t,e)?r:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Ss(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),Ls(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!0,t,e,i,r))}getArea(){return As(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getCoordinates(){return bs(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getSimplifiedGeometryInternal(t){let e=[];return e.length=uc(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,e,0),new n(e,"XY")}getType(){return"LinearRing"}intersectsExtent(t){return Ci(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)}setCoordinates(t,e){this.setLayout(e,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Ms(this.flatCoordinates,0,t,this.stride),this.changed()}},Os=Ps;var Ds=class n extends _n{constructor(t,e){super(),this.setCoordinates(t,e)}clone(){let t=new n(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t}closestPointXY(t,e,i,r){let s=this.flatCoordinates,o=ne(t,e,s[0],s[1]);if(o<r){let a=this.stride;for(let l=0;l<a;++l)i[l]=s[l];return i.length=a,o}return r}getCoordinates(){return this.flatCoordinates.slice()}computeExtent(t){return Ra(this.flatCoordinates,t)}getType(){return"Point"}intersectsExtent(t){return Mr(t,this.flatCoordinates[0],this.flatCoordinates[1])}setCoordinates(t,e){this.setLayout(e,t,0),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=lc(this.flatCoordinates,0,t,this.stride),this.changed()}},dc=Ds;function gc(n,t,e,i,r,s,o){let a,l,c,h,u,f,d,g=r[s+1],m=[];for(let x=0,C=e.length;x<C;++x){let y=e[x];for(h=n[y-i],f=n[y-i+1],a=t;a<y;a+=i)u=n[a],d=n[a+1],(g<=f&&d<=g||f<=g&&g<=d)&&(c=(g-f)/(d-f)*(u-h)+h,m.push(c)),h=u,f=d}let _=NaN,w=-1/0;for(m.sort(De),h=m[0],a=1,l=m.length;a<l;++a){u=m[a];let x=Math.abs(u-h);x>w&&(c=(h+u)/2,wi(n,t,e,i,c,g)&&(_=c,w=x)),h=u}return isNaN(_)&&(_=r[s]),o?(o.push(_,g,w),o):[_,g,w]}function mc(n,t,e,i){for(;t<e-i;){for(let r=0;r<i;++r){let s=n[t+r];n[t+r]=n[e-i+r],n[e-i+r]=s}t+=i,e-=i}}function pc(n,t,e,i){let r=0,s=n[e-i],o=n[e-i+1];for(;t<e;t+=i){let a=n[t],l=n[t+1];r+=(a-s)*(l+o),s=a,o=l}return r===0?void 0:r>0}function _c(n,t,e,i,r){r=r!==void 0?r:!1;for(let s=0,o=e.length;s<o;++s){let a=e[s],l=pc(n,t,a,i);if(s===0){if(r&&l||!r&&!l)return!1}else if(r&&!l||!r&&l)return!1;t=a}return!0}function Ns(n,t,e,i,r){r=r!==void 0?r:!1;for(let s=0,o=e.length;s<o;++s){let a=e[s],l=pc(n,t,a,i);(s===0?r&&l||!r&&!l:r&&!l||!r&&l)&&mc(n,t,a,i),t=a}return t}var Zi=class n extends _n{constructor(t,e,i){super(),this.ends_=[],this.flatInteriorPointRevision_=-1,this.flatInteriorPoint_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,e!==void 0&&i?(this.setFlatCoordinates(e,t),this.ends_=i):this.setCoordinates(t,e)}appendLinearRing(t){this.flatCoordinates?Na(this.flatCoordinates,t.getFlatCoordinates()):this.flatCoordinates=t.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()}clone(){let t=new n(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return t.applyProperties(this),t}closestPointXY(t,e,i,r){return r<pi(this.getExtent(),t,e)?r:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(oc(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),ac(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!0,t,e,i,r))}containsXY(t,e){return wi(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,t,e)}getArea(){return rc(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride)}getCoordinates(t){let e;return t!==void 0?(e=this.getOrientedFlatCoordinates().slice(),Ns(e,0,this.ends_,this.stride,t)):e=this.flatCoordinates,hc(e,0,this.ends_,this.stride)}getEnds(){return this.ends_}getFlatInteriorPoint(){if(this.flatInteriorPointRevision_!=this.getRevision()){let t=jt(this.getExtent());this.flatInteriorPoint_=gc(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,t,0),this.flatInteriorPointRevision_=this.getRevision()}return this.flatInteriorPoint_}getInteriorPoint(){return new dc(this.getFlatInteriorPoint(),"XYM")}getLinearRingCount(){return this.ends_.length}getLinearRing(t){return t<0||this.ends_.length<=t?null:new Os(this.flatCoordinates.slice(t===0?0:this.ends_[t-1],this.ends_[t]),this.layout)}getLinearRings(){let t=this.layout,e=this.flatCoordinates,i=this.ends_,r=[],s=0;for(let o=0,a=i.length;o<a;++o){let l=i[o],c=new Os(e.slice(s,l),t);r.push(c),s=l}return r}getOrientedFlatCoordinates(){if(this.orientedRevision_!=this.getRevision()){let t=this.flatCoordinates;_c(t,0,this.ends_,this.stride)?this.orientedFlatCoordinates_=t:(this.orientedFlatCoordinates_=t.slice(),this.orientedFlatCoordinates_.length=Ns(this.orientedFlatCoordinates_,0,this.ends_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_}getSimplifiedGeometryInternal(t){let e=[],i=[];return e.length=fc(this.flatCoordinates,0,this.ends_,this.stride,Math.sqrt(t),e,0,i),new n(e,"XY",i)}getType(){return"Polygon"}intersectsExtent(t){return Ga(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,t)}setCoordinates(t,e){this.setLayout(e,t,2),this.flatCoordinates||(this.flatCoordinates=[]);let i=cc(this.flatCoordinates,0,t,this.stride,this.ends_);this.flatCoordinates.length=i.length===0?0:i[i.length-1],this.changed()}},yc=Zi;function Fs(n){if(_e(n))throw new Error("Cannot create polygon from empty extent");let t=n[0],e=n[1],i=n[2],r=n[3],s=[t,e,t,r,i,r,i,e,t,e];return new Zi(s,"XY",[s.length])}function zs(n,t,e,i){let r=k(t)/e[0],s=rt(t)/e[1];return i?Math.min(n,Math.max(r,s)):Math.min(n,Math.min(r,s))}function ks(n,t,e){let i=Math.min(n,t),r=50;return i*=Math.log(1+r*Math.max(0,n/t-1))/r+1,e&&(i=Math.max(i,e),i/=Math.log(1+r*Math.max(0,e/n-1))/r+1),j(i,e/2,t*2)}function Ec(n,t,e,i){return t=t!==void 0?t:!0,(function(r,s,o,a){if(r!==void 0){let l=n[0],c=n[n.length-1],h=e?zs(l,e,o,i):l;if(a)return t?ks(r,h,c):j(r,c,h);let u=Math.min(h,r),f=Math.floor(Je(n,u,s));return n[f]>h&&f<n.length-1?n[f+1]:n[f]}})}function xc(n,t,e,i,r,s){return i=i!==void 0?i:!0,e=e!==void 0?e:0,(function(o,a,l,c){if(o!==void 0){let h=r?zs(t,r,l,s):t;if(c)return i?ks(o,h,e):j(o,e,h);let u=1e-9,f=Math.ceil(Math.log(t/h)/Math.log(n)-u),d=-a*(.5-u)+.5,g=Math.min(h,o),m=Math.floor(Math.log(t/g)/Math.log(n)+d),_=Math.max(f,m),w=t/Math.pow(n,_);return j(w,e,h)}})}function Gs(n,t,e,i,r){return e=e!==void 0?e:!0,(function(s,o,a,l){if(s!==void 0){let c=i?zs(n,i,a,r):n;return!e||!l?j(s,t,c):ks(s,c,t)}})}function En(n){if(n!==void 0)return 0}function Us(n){if(n!==void 0)return n}function wc(n){let t=2*Math.PI/n;return(function(e,i){if(i)return e;if(e!==void 0)return e=Math.floor(e/t+.5)*t,e})}function Cc(n){let t=n===void 0?Gt(5):n;return(function(e,i){return i||e===void 0?e:Math.abs(e)<=t?0:e})}var Xs=0,Ks=class extends ct{constructor(t){super(),this.on,this.once,this.un,t=Object.assign({},t),this.hints_=[0,0],this.animations_=[],this.updateAnimationKey_,this.projection_=ki(t.projection,"EPSG:3857"),this.viewportSize_=[100,100],this.targetCenter_=null,this.targetResolution_,this.targetRotation_,this.nextCenter_=null,this.nextResolution_,this.nextRotation_,this.cancelAnchor_=void 0,t.projection&&vl(),t.center&&(t.center=Mt(t.center,this.projection_)),t.extent&&(t.extent=Bt(t.extent,this.projection_)),this.applyOptions_(t)}applyOptions_(t){let e=Object.assign({},t);for(let a in Ft)delete e[a];this.setProperties(e,!0);let i=Qu(t);this.maxResolution_=i.maxResolution,this.minResolution_=i.minResolution,this.zoomFactor_=i.zoomFactor,this.resolutions_=t.resolutions,this.padding_=t.padding,this.minZoom_=i.minZoom;let r=Ju(t),s=i.constraint,o=tf(t);this.constraints_={center:r,resolution:s,rotation:o},this.setRotation(t.rotation!==void 0?t.rotation:0),this.setCenterInternal(t.center!==void 0?t.center:null),t.resolution!==void 0?this.setResolution(t.resolution):t.zoom!==void 0&&this.setZoom(t.zoom)}get padding(){return this.padding_}set padding(t){let e=this.padding_;this.padding_=t;let i=this.getCenterInternal();if(i){let r=t||[0,0,0,0];e=e||[0,0,0,0];let s=this.getResolution(),o=s/2*(r[3]-e[3]+e[1]-r[1]),a=s/2*(r[0]-e[0]+e[2]-r[2]);this.setCenterInternal([i[0]+o,i[1]-a])}}getUpdatedOptions_(t){let e=this.getProperties();return e.resolution!==void 0?e.resolution=this.getResolution():e.zoom=this.getZoom(),e.center=this.getCenterInternal(),e.rotation=this.getRotation(),Object.assign({},e,t)}animate(t){this.isDef()&&!this.getAnimating()&&this.resolveConstraints(0);let e=new Array(arguments.length);for(let i=0;i<e.length;++i){let r=arguments[i];r.center&&(r=Object.assign({},r),r.center=Mt(r.center,this.getProjection())),r.anchor&&(r=Object.assign({},r),r.anchor=Mt(r.anchor,this.getProjection())),e[i]=r}this.animateInternal.apply(this,e)}animateInternal(t){let e=arguments.length,i;e>1&&typeof arguments[e-1]=="function"&&(i=arguments[e-1],--e);let r=0;for(;r<e&&!this.isDef();++r){let h=arguments[r];h.center&&this.setCenterInternal(h.center),h.zoom!==void 0?this.setZoom(h.zoom):h.resolution&&this.setResolution(h.resolution),h.rotation!==void 0&&this.setRotation(h.rotation)}if(r===e){i&&qi(i,!0);return}let s=Date.now(),o=this.targetCenter_.slice(),a=this.targetResolution_,l=this.targetRotation_,c=[];for(;r<e;++r){let h=arguments[r],u={start:s,complete:!1,anchor:h.anchor,duration:h.duration!==void 0?h.duration:1e3,easing:h.easing||$a,callback:i};if(h.center&&(u.sourceCenter=o,u.targetCenter=h.center.slice(),o=u.targetCenter),h.zoom!==void 0?(u.sourceResolution=a,u.targetResolution=this.getResolutionForZoom(h.zoom),a=u.targetResolution):h.resolution&&(u.sourceResolution=a,u.targetResolution=h.resolution,a=u.targetResolution),h.rotation!==void 0){u.sourceRotation=l;let f=ie(h.rotation-l+Math.PI,2*Math.PI)-Math.PI;u.targetRotation=l+f,l=u.targetRotation}ef(u)?u.complete=!0:s+=u.duration,c.push(u)}this.animations_.push(c),this.setHint(It.ANIMATING,1),this.updateAnimations_()}getAnimating(){return this.hints_[It.ANIMATING]>0}getInteracting(){return this.hints_[It.INTERACTING]>0}cancelAnimations(){this.setHint(It.ANIMATING,-this.hints_[It.ANIMATING]);let t;for(let e=0,i=this.animations_.length;e<i;++e){let r=this.animations_[e];if(r[0].callback&&qi(r[0].callback,!1),!t)for(let s=0,o=r.length;s<o;++s){let a=r[s];if(!a.complete){t=a.anchor;break}}}this.animations_.length=0,this.cancelAnchor_=t,this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN}updateAnimations_(){if(this.updateAnimationKey_!==void 0&&(cancelAnimationFrame(this.updateAnimationKey_),this.updateAnimationKey_=void 0),!this.getAnimating())return;let t=Date.now(),e=!1;for(let i=this.animations_.length-1;i>=0;--i){let r=this.animations_[i],s=!0;for(let o=0,a=r.length;o<a;++o){let l=r[o];if(l.complete)continue;let c=t-l.start,h=l.duration>0?c/l.duration:1;h>=1?(l.complete=!0,h=1):s=!1;let u=l.easing(h);if(l.sourceCenter){let f=l.sourceCenter[0],d=l.sourceCenter[1],g=l.targetCenter[0],m=l.targetCenter[1];this.nextCenter_=l.targetCenter;let _=f+u*(g-f),w=d+u*(m-d);this.targetCenter_=[_,w]}if(l.sourceResolution&&l.targetResolution){let f=u===1?l.targetResolution:l.sourceResolution+u*(l.targetResolution-l.sourceResolution);if(l.anchor){let d=this.getViewportSize_(this.getRotation()),g=this.constraints_.resolution(f,0,d,!0);this.targetCenter_=this.calculateCenterZoom(g,l.anchor)}this.nextResolution_=l.targetResolution,this.targetResolution_=f,this.applyTargetState_(!0)}if(l.sourceRotation!==void 0&&l.targetRotation!==void 0){let f=u===1?ie(l.targetRotation+Math.PI,2*Math.PI)-Math.PI:l.sourceRotation+u*(l.targetRotation-l.sourceRotation);if(l.anchor){let d=this.constraints_.rotation(f,!0);this.targetCenter_=this.calculateCenterRotate(d,l.anchor)}this.nextRotation_=l.targetRotation,this.targetRotation_=f}if(this.applyTargetState_(!0),e=!0,!l.complete)break}if(s){this.animations_[i]=null,this.setHint(It.ANIMATING,-1),this.nextCenter_=null,this.nextResolution_=NaN,this.nextRotation_=NaN;let o=r[0].callback;o&&qi(o,!0)}}this.animations_=this.animations_.filter(Boolean),e&&this.updateAnimationKey_===void 0&&(this.updateAnimationKey_=requestAnimationFrame(this.updateAnimations_.bind(this)))}calculateCenterRotate(t,e){let i,r=this.getCenterInternal();return r!==void 0&&(i=[r[0]-e[0],r[1]-e[1]],an(i,t-this.getRotation()),nl(i,e)),i}calculateCenterZoom(t,e){let i,r=this.getCenterInternal(),s=this.getResolution();if(r!==void 0&&s!==void 0){let o=e[0]-t*(e[0]-r[0])/s,a=e[1]-t*(e[1]-r[1])/s;i=[o,a]}return i}getViewportSize_(t){let e=this.viewportSize_;if(t){let i=e[0],r=e[1];return[Math.abs(i*Math.cos(t))+Math.abs(r*Math.sin(t)),Math.abs(i*Math.sin(t))+Math.abs(r*Math.cos(t))]}return e}setViewportSize(t){this.viewportSize_=Array.isArray(t)?t.slice():[100,100],this.getAnimating()||this.resolveConstraints(0)}getCenter(){let t=this.getCenterInternal();return t&&Kn(t,this.getProjection())}getCenterInternal(){return this.get(Ft.CENTER)}getConstraints(){return this.constraints_}getConstrainResolution(){return this.get("constrainResolution")}getHints(t){return t!==void 0?(t[0]=this.hints_[0],t[1]=this.hints_[1],t):this.hints_.slice()}calculateExtent(t){let e=this.calculateExtentInternal(t);return Al(e,this.getProjection())}calculateExtentInternal(t){t=t||this.getViewportSizeMinusPadding_();let e=this.getCenterInternal();P(e,"The view center is not defined");let i=this.getResolution();P(i!==void 0,"The view resolution is not defined");let r=this.getRotation();return P(r!==void 0,"The view rotation is not defined"),zn(e,i,r,t)}getMaxResolution(){return this.maxResolution_}getMinResolution(){return this.minResolution_}getMaxZoom(){return this.getZoomForResolution(this.minResolution_)}setMaxZoom(t){this.applyOptions_(this.getUpdatedOptions_({maxZoom:t}))}getMinZoom(){return this.getZoomForResolution(this.maxResolution_)}setMinZoom(t){this.applyOptions_(this.getUpdatedOptions_({minZoom:t}))}setConstrainResolution(t){this.applyOptions_(this.getUpdatedOptions_({constrainResolution:t}))}getProjection(){return this.projection_}getResolution(){return this.get(Ft.RESOLUTION)}getResolutions(){return this.resolutions_}getResolutionForExtent(t,e){return this.getResolutionForExtentInternal(Bt(t,this.getProjection()),e)}getResolutionForExtentInternal(t,e){e=e||this.getViewportSizeMinusPadding_();let i=k(t)/e[0],r=rt(t)/e[1];return Math.max(i,r)}getResolutionForValueFunction(t){t=t||2;let e=this.getConstrainedResolution(this.maxResolution_),i=this.minResolution_,r=Math.log(e/i)/Math.log(t);return(function(s){return e/Math.pow(t,s*r)})}getRotation(){return this.get(Ft.ROTATION)}getValueForResolutionFunction(t){let e=Math.log(t||2),i=this.getConstrainedResolution(this.maxResolution_),r=this.minResolution_,s=Math.log(i/r)/e;return(function(o){return Math.log(i/o)/e/s})}getViewportSizeMinusPadding_(t){let e=this.getViewportSize_(t),i=this.padding_;return i&&(e=[e[0]-i[1]-i[3],e[1]-i[0]-i[2]]),e}getState(){let t=this.getProjection(),e=this.getResolution(),i=this.getRotation(),r=this.getCenterInternal(),s=this.padding_;if(s){let o=this.getViewportSizeMinusPadding_();r=Vs(r,this.getViewportSize_(),[o[0]/2+s[3],o[1]/2+s[0]],e,i)}return{center:r.slice(0),projection:t!==void 0?t:null,resolution:e,nextCenter:this.nextCenter_,nextResolution:this.nextResolution_,nextRotation:this.nextRotation_,rotation:i,zoom:this.getZoom()}}getViewStateAndExtent(){return{viewState:this.getState(),extent:this.calculateExtent()}}getZoom(){let t,e=this.getResolution();return e!==void 0&&(t=this.getZoomForResolution(e)),t}getZoomForResolution(t){let e=this.minZoom_||0,i,r;if(this.resolutions_){let s=Je(this.resolutions_,t,1);e=s,i=this.resolutions_[s],s==this.resolutions_.length-1?r=2:r=i/this.resolutions_[s+1]}else i=this.maxResolution_,r=this.zoomFactor_;return e+Math.log(i/t)/Math.log(r)}getResolutionForZoom(t){if(this.resolutions_?.length){if(this.resolutions_.length===1)return this.resolutions_[0];let e=j(Math.floor(t),0,this.resolutions_.length-2),i=this.resolutions_[e]/this.resolutions_[e+1];return this.resolutions_[e]/Math.pow(i,j(t-e,0,1))}return this.maxResolution_/Math.pow(this.zoomFactor_,t-this.minZoom_)}fit(t,e){let i;if(P(Array.isArray(t)||typeof t.getSimplifiedGeometry=="function","Invalid extent or geometry provided as `geometry`"),Array.isArray(t)){P(!_e(t),"Cannot fit empty extent provided as `geometry`");let r=Bt(t,this.getProjection());i=Fs(r)}else if(t.getType()==="Circle"){let r=Bt(t.getExtent(),this.getProjection());i=Fs(r),i.rotate(this.getRotation(),jt(r))}else{let r=Il();r?i=t.clone().transform(r,this.getProjection()):i=t}this.fitInternal(i,e)}rotatedExtentForGeometry(t){let e=this.getRotation(),i=Math.cos(e),r=Math.sin(-e),s=t.getFlatCoordinates(),o=t.getStride(),a=1/0,l=1/0,c=-1/0,h=-1/0;for(let u=0,f=s.length;u<f;u+=o){let d=s[u]*i-s[u+1]*r,g=s[u]*r+s[u+1]*i;a=Math.min(a,d),l=Math.min(l,g),c=Math.max(c,d),h=Math.max(h,g)}return[a,l,c,h]}fitInternal(t,e){e=e||{};let i=e.size;i||(i=this.getViewportSizeMinusPadding_());let r=e.padding!==void 0?e.padding:[0,0,0,0],s=e.nearest!==void 0?e.nearest:!1,o;e.minResolution!==void 0?o=e.minResolution:e.maxZoom!==void 0?o=this.getResolutionForZoom(e.maxZoom):o=0;let a=this.rotatedExtentForGeometry(t),l=this.getResolutionForExtentInternal(a,[i[0]-r[1]-r[3],i[1]-r[0]-r[2]]);l=isNaN(l)?o:Math.max(l,o),l=this.getConstrainedResolution(l,s?0:1);let c=this.getRotation(),h=Math.sin(c),u=Math.cos(c),f=jt(a);f[0]+=(r[1]-r[3])/2*l,f[1]+=(r[0]-r[2])/2*l;let d=f[0]*u-f[1]*h,g=f[1]*u+f[0]*h,m=this.getConstrainedCenter([d,g],l),_=e.callback?e.callback:Fe;e.duration!==void 0?this.animateInternal({resolution:l,center:m,duration:e.duration,easing:e.easing},_):(this.targetResolution_=l,this.targetCenter_=m,this.applyTargetState_(!1,!0),qi(_,!0))}centerOn(t,e,i){this.centerOnInternal(Mt(t,this.getProjection()),e,i)}centerOnInternal(t,e,i){this.setCenterInternal(Vs(t,e,i,this.getResolution(),this.getRotation()))}calculateCenterShift(t,e,i,r){let s,o=this.padding_;if(o&&t){let a=this.getViewportSizeMinusPadding_(-i),l=Vs(t,r,[a[0]/2+o[3],a[1]/2+o[0]],e,i);s=[t[0]-l[0],t[1]-l[1]]}return s}isDef(){return!!this.getCenterInternal()&&this.getResolution()!==void 0}adjustCenter(t){let e=Kn(this.targetCenter_,this.getProjection());this.setCenter([e[0]+t[0],e[1]+t[1]])}adjustCenterInternal(t){let e=this.targetCenter_;this.setCenterInternal([e[0]+t[0],e[1]+t[1]])}adjustResolution(t,e){e=e&&Mt(e,this.getProjection()),this.adjustResolutionInternal(t,e)}adjustResolutionInternal(t,e){let i=this.getAnimating()||this.getInteracting(),r=this.getViewportSize_(this.getRotation()),s=this.constraints_.resolution(this.targetResolution_*t,0,r,i);e&&(this.targetCenter_=this.calculateCenterZoom(s,e)),this.targetResolution_*=t,this.applyTargetState_()}adjustZoom(t,e){this.adjustResolution(Math.pow(this.zoomFactor_,-t),e)}adjustRotation(t,e){e&&(e=Mt(e,this.getProjection())),this.adjustRotationInternal(t,e)}adjustRotationInternal(t,e){let i=this.getAnimating()||this.getInteracting(),r=this.constraints_.rotation(this.targetRotation_+t,i);e&&(this.targetCenter_=this.calculateCenterRotate(r,e)),this.targetRotation_+=t,this.applyTargetState_()}setCenter(t){this.setCenterInternal(t&&Mt(t,this.getProjection()))}setCenterInternal(t){this.targetCenter_=t,this.applyTargetState_()}setHint(t,e){return this.hints_[t]+=e,this.changed(),this.hints_[t]}setResolution(t){this.targetResolution_=t,this.applyTargetState_()}setRotation(t){this.targetRotation_=t,this.applyTargetState_()}setZoom(t){this.setResolution(this.getResolutionForZoom(t))}applyTargetState_(t,e){let i=this.getAnimating()||this.getInteracting()||e,r=this.constraints_.rotation(this.targetRotation_,i),s=this.getViewportSize_(r),o=this.constraints_.resolution(this.targetResolution_,0,s,i),a=this.constraints_.center(this.targetCenter_,o,s,i,this.calculateCenterShift(this.targetCenter_,o,r,s));this.get(Ft.ROTATION)!==r&&this.set(Ft.ROTATION,r),this.get(Ft.RESOLUTION)!==o&&(this.set(Ft.RESOLUTION,o),this.set("zoom",this.getZoom(),!0)),(!a||!this.get(Ft.CENTER)||!ke(this.get(Ft.CENTER),a))&&this.set(Ft.CENTER,a),this.getAnimating()&&!t&&this.cancelAnimations(),this.cancelAnchor_=void 0}resolveConstraints(t,e,i){t=t!==void 0?t:200;let r=e||0,s=this.constraints_.rotation(this.targetRotation_),o=this.getViewportSize_(s),a=this.constraints_.resolution(this.targetResolution_,r,o),l=this.constraints_.center(this.targetCenter_,a,o,!1,this.calculateCenterShift(this.targetCenter_,a,s,o));if(t===0&&!this.cancelAnchor_){this.targetResolution_=a,this.targetRotation_=s,this.targetCenter_=l,this.applyTargetState_();return}i=i||(t===0?this.cancelAnchor_:void 0),this.cancelAnchor_=void 0,(this.getResolution()!==a||this.getRotation()!==s||!this.getCenterInternal()||!ke(this.getCenterInternal(),l))&&(this.getAnimating()&&this.cancelAnimations(),this.animateInternal({rotation:s,center:l,resolution:a,duration:t,easing:Dt,anchor:i}))}beginInteraction(){this.resolveConstraints(0),this.setHint(It.INTERACTING,1)}endInteraction(t,e,i){i=i&&Mt(i,this.getProjection()),this.endInteractionInternal(t,e,i)}endInteractionInternal(t,e,i){this.getInteracting()&&(this.setHint(It.INTERACTING,-1),this.resolveConstraints(t,e,i))}getConstrainedCenter(t,e){let i=this.getViewportSize_(this.getRotation());return this.constraints_.center(t,e||this.getResolution(),i)}getConstrainedZoom(t,e){let i=this.getResolutionForZoom(t);return this.getZoomForResolution(this.getConstrainedResolution(i,e))}getConstrainedResolution(t,e){e=e||0;let i=this.getViewportSize_(this.getRotation());return this.constraints_.resolution(t,e,i)}};function qi(n,t){setTimeout(function(){n(t)},0)}function Ju(n){if(n.extent!==void 0){let e=n.smoothExtentConstraint!==void 0?n.smoothExtentConstraint:!0;return vs(n.extent,n.constrainOnlyCenter,e)}let t=ki(n.projection,"EPSG:3857");if(n.multiWorld!==!0&&t.isGlobal()){let e=t.getExtent().slice();return e[0]=-1/0,e[2]=1/0,vs(e,!1,!1)}return $l}function Qu(n){let t,e,i,o=n.minZoom!==void 0?n.minZoom:Xs,a=n.maxZoom!==void 0?n.maxZoom:28,l=n.zoomFactor!==void 0?n.zoomFactor:2,c=n.multiWorld!==void 0?n.multiWorld:!1,h=n.smoothResolutionConstraint!==void 0?n.smoothResolutionConstraint:!0,u=n.showFullExtent!==void 0?n.showFullExtent:!1,f=ki(n.projection,"EPSG:3857"),d=f.getExtent(),g=n.constrainOnlyCenter,m=n.extent;if(!c&&!m&&f.isGlobal()&&(g=!1,m=d),n.resolutions!==void 0){let _=n.resolutions;e=_[o],i=_[a]!==void 0?_[a]:_[_.length-1],n.constrainResolution?t=Ec(_,h,!g&&m,u):t=Gs(e,i,h,!g&&m,u)}else{let w=(d?Math.max(k(d),rt(d)):360*se.degrees/f.getMetersPerUnit())/256/Math.pow(2,Xs),x=w/Math.pow(2,28-Xs);e=n.maxResolution,e!==void 0?o=0:e=w/Math.pow(l,o),i=n.minResolution,i===void 0&&(n.maxZoom!==void 0?n.maxResolution!==void 0?i=e/Math.pow(l,a):i=w/Math.pow(l,a):i=x),a=o+Math.floor(Math.log(e/i)/Math.log(l)),i=e/Math.pow(l,a-o),n.constrainResolution?t=xc(l,e,i,h,!g&&m,u):t=Gs(e,i,h,!g&&m,u)}return{constraint:t,maxResolution:e,minResolution:i,minZoom:o,zoomFactor:l}}function tf(n){if(n.enableRotation!==void 0?n.enableRotation:!0){let e=n.constrainRotation;return e===void 0||e===!0?Cc():e===!1?Us:typeof e=="number"?wc(e):Us}return En}function ef(n){return!(n.sourceCenter&&n.targetCenter&&!ke(n.sourceCenter,n.targetCenter)||n.sourceResolution!==n.targetResolution||n.sourceRotation!==n.targetRotation)}function Vs(n,t,e,i,r){let s=Math.cos(-r),o=Math.sin(-r),a=n[0]*s-n[1]*o,l=n[1]*s+n[0]*o;a+=(t[0]/2-e[0])*i,l+=(e[1]-t[1]/2)*i,o=-o;let c=a*s-l*o,h=l*s+a*o;return[c,h]}var At=Ks;var Bn="ol-hidden";var Ht="ol-unselectable",js="ol-unsupported",Ie="ol-control",Ws="ol-collapsed",Q0=new RegExp(["^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)","(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)","(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)","(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?","(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))","(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))",`?\\s*([-,\\"\\'\\sa-z0-9]+?)\\s*$`].join(""),"i");var Ys=class extends ct{constructor(t){super();let e=t.element;e&&!t.target&&!e.style.pointerEvents&&(e.style.pointerEvents="auto"),this.element=e||null,this.target_=null,this.map_=null,this.listenerKeys=[],t.render&&(this.render=t.render),t.target&&this.setTarget(t.target)}disposeInternal(){this.element?.remove(),super.disposeInternal()}getMap(){return this.map_}setMap(t){this.map_&&this.element?.remove();for(let e=0,i=this.listenerKeys.length;e<i;++e)G(this.listenerKeys[e]);if(this.listenerKeys.length=0,this.map_=t,t){let e=this.target_??t.getOverlayContainerStopEvent();this.element&&e.appendChild(this.element),this.render!==Fe&&this.listenerKeys.push(b(t,qt.POSTRENDER,this.render,this)),t.render()}}render(t){}setTarget(t){this.target_=typeof t=="string"?document.getElementById(t):t}},zt=Ys;var Bs=class extends zt{constructor(t){t=t||{},super({element:document.createElement("div"),render:t.render,target:t.target}),this.ulElement_=document.createElement("ul"),this.collapsed_=t.collapsed!==void 0?t.collapsed:!0,this.userCollapsed_=this.collapsed_,this.overrideCollapsible_=t.collapsible!==void 0,this.collapsible_=t.collapsible!==void 0?t.collapsible:!0,this.collapsible_||(this.collapsed_=!1),this.attributions_=t.attributions;let e=t.className!==void 0?t.className:"ol-attribution",i=t.tipLabel!==void 0?t.tipLabel:"Attributions",r=t.expandClassName!==void 0?t.expandClassName:e+"-expand",s=t.collapseLabel!==void 0?t.collapseLabel:"\u203A",o=t.collapseClassName!==void 0?t.collapseClassName:e+"-collapse";typeof s=="string"?(this.collapseLabel_=document.createElement("span"),this.collapseLabel_.textContent=s,this.collapseLabel_.className=o):this.collapseLabel_=s;let a=t.label!==void 0?t.label:"i";typeof a=="string"?(this.label_=document.createElement("span"),this.label_.textContent=a,this.label_.className=r):this.label_=a;let l=this.collapsible_&&!this.collapsed_?this.collapseLabel_:this.label_;this.toggleButton_=document.createElement("button"),this.toggleButton_.setAttribute("type","button"),this.toggleButton_.setAttribute("aria-expanded",String(!this.collapsed_)),this.toggleButton_.title=i,this.toggleButton_.appendChild(l),this.toggleButton_.addEventListener(A.CLICK,this.handleClick_.bind(this),!1);let c=e+" "+Ht+" "+Ie+(this.collapsed_&&this.collapsible_?" "+Ws:"")+(this.collapsible_?"":" ol-uncollapsible"),h=this.element;h.className=c,h.appendChild(this.toggleButton_),h.appendChild(this.ulElement_),this.renderedAttributions_=[],this.renderedVisible_=!0}collectSourceAttributions_(t){let e=this.getMap().getAllLayers(),i=new Set(e.flatMap(r=>r.getAttributions(t)));if(this.attributions_!==void 0&&(Array.isArray(this.attributions_)?this.attributions_.forEach(r=>i.add(r)):i.add(this.attributions_)),!this.overrideCollapsible_){let r=!e.some(s=>s.getSource()?.getAttributionsCollapsible()===!1);this.setCollapsible(r)}return Array.from(i)}async updateElement_(t){if(!t){this.renderedVisible_&&(this.element.style.display="none",this.renderedVisible_=!1);return}let e=await Promise.all(this.collectSourceAttributions_(t).map(r=>Ya(()=>r))),i=e.length>0;if(this.renderedVisible_!=i&&(this.element.style.display=i?"":"none",this.renderedVisible_=i),!ye(e,this.renderedAttributions_)){Qa(this.ulElement_);for(let r=0,s=e.length;r<s;++r){let o=document.createElement("li");o.innerHTML=e[r],this.ulElement_.appendChild(o)}this.renderedAttributions_=e}}handleClick_(t){t.preventDefault(),this.handleToggle_(),this.userCollapsed_=this.collapsed_}handleToggle_(){this.element.classList.toggle(Ws),this.collapsed_?sn(this.collapseLabel_,this.label_):sn(this.label_,this.collapseLabel_),this.collapsed_=!this.collapsed_,this.toggleButton_.setAttribute("aria-expanded",String(!this.collapsed_))}getCollapsible(){return this.collapsible_}setCollapsible(t){this.collapsible_!==t&&(this.collapsible_=t,this.element.classList.toggle("ol-uncollapsible"),this.userCollapsed_&&this.handleToggle_())}setCollapsed(t){this.userCollapsed_=t,!(!this.collapsible_||this.collapsed_===t)&&this.handleToggle_()}getCollapsed(){return this.collapsed_}render(t){this.updateElement_(t.frameState)}},vc=Bs;var Zs=class extends zt{constructor(t){t=t||{},super({element:document.createElement("div"),render:t.render,target:t.target});let e=t.className!==void 0?t.className:"ol-rotate",i=t.label!==void 0?t.label:"\u21E7",r=t.compassClassName!==void 0?t.compassClassName:"ol-compass";this.label_=null,typeof i=="string"?(this.label_=document.createElement("span"),this.label_.className=r,this.label_.textContent=i):(this.label_=i,this.label_.classList.add(r));let s=t.tipLabel?t.tipLabel:"Reset rotation",o=document.createElement("button");o.className=e+"-reset",o.setAttribute("type","button"),o.title=s,o.appendChild(this.label_),o.addEventListener(A.CLICK,this.handleClick_.bind(this),!1);let a=e+" "+Ht+" "+Ie,l=this.element;l.className=a,l.appendChild(o),this.callResetNorth_=t.resetNorth?t.resetNorth:void 0,this.duration_=t.duration!==void 0?t.duration:250,this.autoHide_=t.autoHide!==void 0?t.autoHide:!0,this.rotation_=void 0,this.autoHide_&&this.element.classList.add(Bn)}handleClick_(t){t.preventDefault(),this.callResetNorth_!==void 0?this.callResetNorth_():this.resetNorth_()}resetNorth_(){let e=this.getMap().getView();if(!e)return;let i=e.getRotation();i!==void 0&&(this.duration_>0&&i%(2*Math.PI)!==0?e.animate({rotation:0,duration:this.duration_,easing:Dt}):e.setRotation(0))}render(t){let e=t.frameState;if(!e)return;let i=e.viewState.rotation;if(i!=this.rotation_){let r="rotate("+i+"rad)";if(this.autoHide_){let s=this.element.classList.contains(Bn);!s&&i===0?this.element.classList.add(Bn):s&&i!==0&&this.element.classList.remove(Bn)}this.label_.style.transform=r}this.rotation_=i}},Zn=Zs;var qs=class extends zt{constructor(t){t=t||{},super({element:document.createElement("div"),target:t.target});let e=t.className!==void 0?t.className:"ol-zoom",i=t.delta!==void 0?t.delta:1,r=t.zoomInClassName!==void 0?t.zoomInClassName:e+"-in",s=t.zoomOutClassName!==void 0?t.zoomOutClassName:e+"-out",o=t.zoomInLabel!==void 0?t.zoomInLabel:"+",a=t.zoomOutLabel!==void 0?t.zoomOutLabel:"\u2013",l=t.zoomInTipLabel!==void 0?t.zoomInTipLabel:"Zoom in",c=t.zoomOutTipLabel!==void 0?t.zoomOutTipLabel:"Zoom out",h=document.createElement("button");h.className=r,h.setAttribute("type","button"),h.title=l,h.appendChild(typeof o=="string"?document.createTextNode(o):o),h.addEventListener(A.CLICK,this.handleClick_.bind(this,i),!1);let u=document.createElement("button");u.className=s,u.setAttribute("type","button"),u.title=c,u.appendChild(typeof a=="string"?document.createTextNode(a):a),u.addEventListener(A.CLICK,this.handleClick_.bind(this,-i),!1);let f=e+" "+Ht+" "+Ie,d=this.element;d.className=f,d.appendChild(h),d.appendChild(u),this.duration_=t.duration!==void 0?t.duration:250}handleClick_(t,e){e.preventDefault(),this.zoomByDelta_(t)}zoomByDelta_(t){let i=this.getMap().getView();if(!i)return;let r=i.getZoom();if(r!==void 0){let s=i.getConstrainedZoom(r+t);this.duration_>0?(i.getAnimating()&&i.cancelAnimations(),i.animate({zoom:s,duration:this.duration_,easing:Dt})):i.setZoom(s)}}},qn=qs;function Rc(n){n=n||{};let t=new Ct;return(n.zoom===void 0||n.zoom)&&t.push(new qn(n.zoomOptions)),(n.rotate===void 0||n.rotate)&&t.push(new Zn(n.rotateOptions)),(n.attribution===void 0||n.attribution)&&t.push(new vc(n.attributionOptions)),t}var Hs=class{constructor(t,e,i){this.decay_=t,this.minVelocity_=e,this.delay_=i,this.points_=[],this.angle_=0,this.initialVelocity_=0}begin(){this.points_.length=0,this.angle_=0,this.initialVelocity_=0}update(t,e){this.points_.push(t,e,Date.now())}end(){if(this.points_.length<6)return!1;let t=Date.now()-this.delay_,e=this.points_.length-3;if(this.points_[e+2]<t)return!1;let i=e-3;for(;i>0&&this.points_[i+2]>t;)i-=3;let r=this.points_[e+2]-this.points_[i+2];if(r<1e3/60)return!1;let s=this.points_[e]-this.points_[i],o=this.points_[e+1]-this.points_[i+1];return this.angle_=Math.atan2(o,s),this.initialVelocity_=Math.sqrt(s*s+o*o)/r,this.initialVelocity_>this.minVelocity_}getDistance(){return(this.minVelocity_-this.initialVelocity_)/this.decay_}getAngle(){return this.angle_}},Tc=Hs;var $s={ACTIVE:"active"};var Js=class extends ct{constructor(t){super(),this.on,this.once,this.un,t&&t.handleEvent&&(this.handleEvent=t.handleEvent),this.map_=null,this.setActive(!0)}getActive(){return this.get($s.ACTIVE)}getMap(){return this.map_}handleEvent(t){return!0}setActive(t){this.set($s.ACTIVE,t)}setMap(t){this.map_=t}};function Ic(n,t,e){let i=n.getCenterInternal();if(i){let r=[i[0]+t[0],i[1]+t[1]];n.animateInternal({duration:e!==void 0?e:250,easing:Ja,center:n.getConstrainedCenter(r)})}}function xn(n,t,e,i){let r=n.getZoom();if(r===void 0)return;let s=n.getConstrainedZoom(r+t),o=n.getResolutionForZoom(s);n.getAnimating()&&n.cancelAnimations(),n.animate({resolution:o,anchor:e,duration:i!==void 0?i:250,easing:Dt})}var $t=Js;var Qs=class extends $t{constructor(t){super(),t=t||{},this.delta_=t.delta?t.delta:1,this.duration_=t.duration!==void 0?t.duration:250}handleEvent(t){let e=!1;if(t.type==Z.DBLCLICK){let i=t.originalEvent,r=t.map,s=t.coordinate,o=i.shiftKey?-this.delta_:this.delta_,a=r.getView();xn(a,o,s,this.duration_),i.preventDefault(),e=!0}return!e}},Ac=Qs;function Hn(n){let t=arguments;return function(e){let i=!0;for(let r=0,s=t.length;r<s&&(i=i&&t[r](e),!!i);++r);return i}}var Sc=function(n){let t=n.originalEvent;return t.altKey&&!(t.metaKey||t.ctrlKey)&&t.shiftKey},nf=function(n){let t=n.map.getTargetElement(),e=t.getRootNode(),i=n.map.getOwnerDocument().activeElement;return e instanceof ShadowRoot?e.host.contains(i):t.contains(i)},Hi=function(n){let t=n.map.getTargetElement(),e=t.getRootNode();return(e instanceof ShadowRoot?e.host:t).hasAttribute("tabindex")?nf(n):!0},Lc=Ne;var $i=function(n){let t=n.originalEvent;return"pointerId"in t&&t.button==0&&!(Ba&&Xr&&t.ctrlKey)};var Ji=function(n){let t=n.originalEvent;return!t.altKey&&!(t.metaKey||t.ctrlKey)&&!t.shiftKey};var Mc=function(n){let t=n.originalEvent;return Xr?t.metaKey:t.ctrlKey},bc=function(n){let t=n.originalEvent;return!t.altKey&&!(t.metaKey||t.ctrlKey)&&t.shiftKey},Qi=function(n){let t=n.originalEvent,e=t.target.tagName;return e!=="INPUT"&&e!=="SELECT"&&e!=="TEXTAREA"&&!t.target.isContentEditable},tr=function(n){let t=n.originalEvent;return"pointerId"in t&&t.pointerType=="mouse"};var Pc=function(n){let t=n.originalEvent;return"pointerId"in t&&t.isPrimary&&t.button===0};var to=class extends $t{constructor(t){t=t||{},super(t),t.handleDownEvent&&(this.handleDownEvent=t.handleDownEvent),t.handleDragEvent&&(this.handleDragEvent=t.handleDragEvent),t.handleMoveEvent&&(this.handleMoveEvent=t.handleMoveEvent),t.handleUpEvent&&(this.handleUpEvent=t.handleUpEvent),t.stopDown&&(this.stopDown=t.stopDown),this.handlingDownUpSequence=!1,this.targetPointers=[]}getPointerCount(){return this.targetPointers.length}handleDownEvent(t){return!1}handleDragEvent(t){}handleEvent(t){if(!t.originalEvent)return!0;let e=!1;if(this.updateTrackedPointers_(t),this.handlingDownUpSequence){if(t.type==Z.POINTERDRAG)this.handleDragEvent(t),t.originalEvent.preventDefault();else if(t.type==Z.POINTERUP){let i=this.handleUpEvent(t);this.handlingDownUpSequence=i&&this.targetPointers.length>0}}else if(t.type==Z.POINTERDOWN){let i=this.handleDownEvent(t);this.handlingDownUpSequence=i,e=this.stopDown(i)}else t.type==Z.POINTERMOVE&&this.handleMoveEvent(t);return!e}handleMoveEvent(t){}handleUpEvent(t){return!1}stopDown(t){return t}updateTrackedPointers_(t){t.activePointers&&(this.targetPointers=t.activePointers)}};function wn(n){let t=n.length,e=0,i=0;for(let r=0;r<t;r++)e+=n[r].clientX,i+=n[r].clientY;return{clientX:e/t,clientY:i/t}}var Jt=to;var eo=class extends Jt{constructor(t){super({stopDown:re}),t=t||{},this.kinetic_=t.kinetic,this.lastCentroid=null,this.lastPointersCount_,this.panning_=!1;let e=t.condition?t.condition:Hn(Ji,Pc);this.condition_=t.onFocusOnly?Hn(Hi,e):e,this.noKinetic_=!1}handleDragEvent(t){let e=t.map;this.panning_||(this.panning_=!0,e.getView().beginInteraction());let i=this.targetPointers,r=e.getEventPixel(wn(i));if(i.length==this.lastPointersCount_){if(this.kinetic_&&this.kinetic_.update(r[0],r[1]),this.lastCentroid){let s=[this.lastCentroid[0]-r[0],r[1]-this.lastCentroid[1]],a=t.map.getView();il(s,a.getResolution()),an(s,a.getRotation()),a.adjustCenterInternal(s)}}else this.kinetic_&&this.kinetic_.begin();this.lastCentroid=r,this.lastPointersCount_=i.length,t.originalEvent.preventDefault()}handleUpEvent(t){let e=t.map,i=e.getView();if(this.targetPointers.length===0){if(!this.noKinetic_&&this.kinetic_&&this.kinetic_.end()){let r=this.kinetic_.getDistance(),s=this.kinetic_.getAngle(),o=i.getCenterInternal(),a=e.getPixelFromCoordinateInternal(o),l=e.getCoordinateFromPixelInternal([a[0]-r*Math.cos(s),a[1]-r*Math.sin(s)]);i.animateInternal({center:i.getConstrainedCenter(l),duration:500,easing:Dt})}return this.panning_&&(this.panning_=!1,i.endInteraction()),!1}return this.kinetic_&&this.kinetic_.begin(),this.lastCentroid=null,!0}handleDownEvent(t){if(this.targetPointers.length>0&&this.condition_(t)){let i=t.map.getView();return this.lastCentroid=null,i.getAnimating()&&i.cancelAnimations(),this.kinetic_&&this.kinetic_.begin(),this.noKinetic_=this.targetPointers.length>1,!0}return!1}},Oc=eo;var no=class extends Jt{constructor(t){t=t||{},super({stopDown:re}),this.condition_=t.condition?t.condition:Sc,this.lastAngle_=void 0,this.duration_=t.duration!==void 0?t.duration:250}handleDragEvent(t){if(!tr(t))return;let e=t.map,i=e.getView();if(i.getConstraints().rotation===En)return;let r=e.getSize(),s=t.pixel,o=Math.atan2(r[1]/2-s[1],s[0]-r[0]/2);if(this.lastAngle_!==void 0){let a=o-this.lastAngle_;i.adjustRotationInternal(-a)}this.lastAngle_=o}handleUpEvent(t){return tr(t)?(t.map.getView().endInteraction(this.duration_),!1):!0}handleDownEvent(t){return tr(t)&&$i(t)&&this.condition_(t)?(t.map.getView().beginInteraction(),this.lastAngle_=void 0,!0):!1}},Dc=no;var io=class extends Ce{constructor(t){super(),this.geometry_=null,this.element_=document.createElement("div"),this.element_.style.position="absolute",this.element_.style.pointerEvents="auto",this.element_.className="ol-box "+t,this.map_=null,this.startPixel_=null,this.endPixel_=null}disposeInternal(){this.setMap(null)}render_(){let t=this.startPixel_,e=this.endPixel_,i="px",r=this.element_.style;r.left=Math.min(t[0],e[0])+i,r.top=Math.min(t[1],e[1])+i,r.width=Math.abs(e[0]-t[0])+i,r.height=Math.abs(e[1]-t[1])+i}setMap(t){if(this.map_){this.map_.getOverlayContainer().removeChild(this.element_);let e=this.element_.style;e.left="inherit",e.top="inherit",e.width="inherit",e.height="inherit"}this.map_=t,this.map_&&this.map_.getOverlayContainer().appendChild(this.element_)}setPixels(t,e){this.startPixel_=t,this.endPixel_=e,this.createOrUpdateGeometry(),this.render_()}createOrUpdateGeometry(){if(!this.map_)return;let t=this.startPixel_,e=this.endPixel_,r=[t,[t[0],e[1]],e,[e[0],t[1]]].map(this.map_.getCoordinateFromPixelInternal,this.map_);r[4]=r[0].slice(),this.geometry_?this.geometry_.setCoordinates([r]):this.geometry_=new yc([r])}getGeometry(){return this.geometry_}},Nc=io;var Cn={BOXSTART:"boxstart",BOXDRAG:"boxdrag",BOXEND:"boxend",BOXCANCEL:"boxcancel"},Ve=class extends dt{constructor(t,e,i){super(t),this.coordinate=e,this.mapBrowserEvent=i}},ro=class extends Jt{constructor(t){super(),this.on,this.once,this.un,t=t??{},this.box_=new Nc(t.className||"ol-dragbox"),this.minArea_=t.minArea??64,t.onBoxEnd&&(this.onBoxEnd=t.onBoxEnd),this.startPixel_=null,this.condition_=t.condition??$i,this.boxEndCondition_=t.boxEndCondition??this.defaultBoxEndCondition}defaultBoxEndCondition(t,e,i){let r=i[0]-e[0],s=i[1]-e[1];return r*r+s*s>=this.minArea_}getGeometry(){return this.box_.getGeometry()}handleDragEvent(t){this.startPixel_&&(this.box_.setPixels(this.startPixel_,t.pixel),this.dispatchEvent(new Ve(Cn.BOXDRAG,t.coordinate,t)))}handleUpEvent(t){if(!this.startPixel_)return!1;let e=this.boxEndCondition_(t,this.startPixel_,t.pixel);return e&&this.onBoxEnd(t),this.dispatchEvent(new Ve(e?Cn.BOXEND:Cn.BOXCANCEL,t.coordinate,t)),this.box_.setMap(null),this.startPixel_=null,!1}handleDownEvent(t){return this.condition_(t)?(this.startPixel_=t.pixel,this.box_.setMap(t.map),this.box_.setPixels(this.startPixel_,this.startPixel_),this.dispatchEvent(new Ve(Cn.BOXSTART,t.coordinate,t)),!0):!1}onBoxEnd(t){}setActive(t){t||(this.box_.setMap(null),this.startPixel_&&(this.dispatchEvent(new Ve(Cn.BOXCANCEL,this.startPixel_,null)),this.startPixel_=null)),super.setActive(t)}setMap(t){this.getMap()&&(this.box_.setMap(null),this.startPixel_&&(this.dispatchEvent(new Ve(Cn.BOXCANCEL,this.startPixel_,null)),this.startPixel_=null)),super.setMap(t)}},Fc=ro;var so=class extends Fc{constructor(t){t=t||{};let e=t.condition?t.condition:bc;super({condition:e,className:t.className||"ol-dragzoom",minArea:t.minArea}),this.duration_=t.duration!==void 0?t.duration:200,this.out_=t.out!==void 0?t.out:!1}onBoxEnd(t){let i=this.getMap().getView(),r=this.getGeometry();if(this.out_){let s=i.rotatedExtentForGeometry(r),o=i.getResolutionForExtentInternal(s),a=i.getResolution()/o;r=r.clone(),r.scale(a*a)}i.fitInternal(r,{duration:this.duration_,easing:Dt})}},zc=so;var Ae={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",DOWN:"ArrowDown"};var oo=class extends $t{constructor(t){super(),t=t||{},this.defaultCondition_=function(e){return Ji(e)&&Qi(e)},this.condition_=t.condition!==void 0?t.condition:this.defaultCondition_,this.duration_=t.duration!==void 0?t.duration:100,this.pixelDelta_=t.pixelDelta!==void 0?t.pixelDelta:128}handleEvent(t){let e=!1;if(t.type==A.KEYDOWN){let i=t.originalEvent,r=i.key;if(this.condition_(t)&&(r==Ae.DOWN||r==Ae.LEFT||r==Ae.RIGHT||r==Ae.UP)){let o=t.map.getView(),a=o.getResolution()*this.pixelDelta_,l=0,c=0;r==Ae.DOWN?c=-a:r==Ae.LEFT?l=-a:r==Ae.RIGHT?l=a:c=a;let h=[l,c];an(h,o.getRotation()),Ic(o,h,this.duration_),i.preventDefault(),e=!0}}return!e}},kc=oo;var ao=class extends $t{constructor(t){super(),t=t||{},this.condition_=t.condition?t.condition:function(e){return!Mc(e)&&Qi(e)},this.delta_=t.delta?t.delta:1,this.duration_=t.duration!==void 0?t.duration:100}handleEvent(t){let e=!1;if(t.type==A.KEYDOWN||t.type==A.KEYPRESS){let i=t.originalEvent,r=i.key;if(this.condition_(t)&&(r==="+"||r==="-")){let s=t.map,o=r==="+"?this.delta_:-this.delta_,a=s.getView();xn(a,o,void 0,this.duration_),i.preventDefault(),e=!0}}return!e}},Gc=ao;var rf=40,sf=300,of=3,lo=class extends $t{constructor(t){t=t||{},super(t),this.totalDelta_=0,this.lastDelta_=0,this.maxDelta_=t.maxDelta!==void 0?t.maxDelta:1,this.duration_=t.duration!==void 0?t.duration:250,this.timeout_=t.timeout!==void 0?t.timeout:80,this.useAnchor_=t.useAnchor!==void 0?t.useAnchor:!0,this.constrainResolution_=t.constrainResolution!==void 0?t.constrainResolution:!1;let e=t.condition?t.condition:Lc;this.condition_=t.onFocusOnly?Hn(Hi,e):e,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_,this.mode_=void 0,this.trackpadEventGap_=400,this.trackpadTimeoutId_,this.deltaPerZoom_=300,this.ctrlKeyPressed_=!1,this.ctrlKeyListenerKeys_=[]}setMap(t){if(this.ctrlKeyListenerKeys_.forEach(G),this.ctrlKeyListenerKeys_.length=0,this.ctrlKeyPressed_=!1,super.setMap(t),t){let e=t.getOwnerDocument();this.ctrlKeyListenerKeys_.push(b(e,"keydown",i=>{i.key==="Control"&&(this.ctrlKeyPressed_=!0)}),b(e,"keyup",i=>{i.key==="Control"&&(this.ctrlKeyPressed_=!1)}))}}endInteraction_(){this.trackpadTimeoutId_=void 0;let t=this.getMap();if(!t)return;let e=t.getView(),i=this.lastDelta_?this.lastDelta_>0?1:-1:0;e.endInteraction(this.constrainResolution_||e.getConstrainResolution()?100:void 0,i,this.lastAnchor_?t.getCoordinateFromPixel(this.lastAnchor_):null)}handleEvent(t){if(!this.condition_(t)||t.type!==A.WHEEL)return!0;let i=t.map,r=t.originalEvent;r.preventDefault();let s=r.ctrlKey&&!this.ctrlKeyPressed_;r.ctrlKey||(this.ctrlKeyPressed_=!1),this.useAnchor_&&(this.lastAnchor_=t.pixel);let o=r.deltaY;switch(r.deltaMode){case WheelEvent.DOM_DELTA_LINE:o*=rf;break;case WheelEvent.DOM_DELTA_PAGE:o*=sf;break;default:}if(o===0)return!1;this.lastDelta_=o;let a=Date.now();this.startTime_===void 0&&(this.startTime_=a),(!this.mode_||a-this.startTime_>this.trackpadEventGap_)&&(this.mode_=Math.abs(o)<4?"trackpad":"wheel");let l=i.getView();if(this.mode_==="trackpad")return this.trackpadTimeoutId_?clearTimeout(this.trackpadTimeoutId_):(l.getAnimating()&&l.cancelAnimations(),l.beginInteraction()),this.trackpadTimeoutId_=setTimeout(this.endInteraction_.bind(this),this.timeout_),s&&(o=o*of),l.adjustZoom(-o/this.deltaPerZoom_,this.lastAnchor_?i.getCoordinateFromPixel(this.lastAnchor_):null),this.startTime_=a,!1;this.totalDelta_+=o;let c=Math.max(this.timeout_-(a-this.startTime_),0);return clearTimeout(this.timeoutId_),this.timeoutId_=setTimeout(this.handleWheelZoom_.bind(this,i),c),!1}handleWheelZoom_(t){let e=t.getView();e.getAnimating()&&e.cancelAnimations();let i=-j(this.totalDelta_,-this.maxDelta_*this.deltaPerZoom_,this.maxDelta_*this.deltaPerZoom_)/this.deltaPerZoom_;(e.getConstrainResolution()||this.constrainResolution_)&&(i=i?i>0?1:-1:0),xn(e,i,this.lastAnchor_?t.getCoordinateFromPixel(this.lastAnchor_):null,this.duration_),this.mode_=void 0,this.totalDelta_=0,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_=void 0}setMouseAnchor(t){this.useAnchor_=t,t||(this.lastAnchor_=null)}},Uc=lo;var co=class extends Jt{constructor(t){t=t||{};let e=t;e.stopDown||(e.stopDown=re),super(e),this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.threshold_=t.threshold!==void 0?t.threshold:.3,this.duration_=t.duration!==void 0?t.duration:250}handleDragEvent(t){let e=0,i=this.targetPointers[0],r=this.targetPointers[1],s=Math.atan2(r.clientY-i.clientY,r.clientX-i.clientX);if(this.lastAngle_!==void 0){let l=s-this.lastAngle_;this.rotationDelta_+=l,!this.rotating_&&Math.abs(this.rotationDelta_)>this.threshold_&&(this.rotating_=!0),e=l}this.lastAngle_=s;let o=t.map,a=o.getView();a.getConstraints().rotation!==En&&(this.anchor_=o.getCoordinateFromPixelInternal(o.getEventPixel(wn(this.targetPointers))),this.rotating_&&(o.render(),a.adjustRotationInternal(e,this.anchor_)))}handleUpEvent(t){return this.targetPointers.length<2?(t.map.getView().endInteraction(this.duration_),!1):!0}handleDownEvent(t){if(this.targetPointers.length>=2){let e=t.map;return this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.handlingDownUpSequence||e.getView().beginInteraction(),!0}return!1}},Xc=co;var ho=class extends Jt{constructor(t){t=t||{};let e=t;e.stopDown||(e.stopDown=re),super(e),this.anchor_=null,this.duration_=t.duration!==void 0?t.duration:400,this.lastDistance_=void 0,this.lastScaleDelta_=1}handleDragEvent(t){let e=1,i=this.targetPointers[0],r=this.targetPointers[1],s=i.clientX-r.clientX,o=i.clientY-r.clientY,a=Math.sqrt(s*s+o*o);this.lastDistance_!==void 0&&(e=this.lastDistance_/a),this.lastDistance_=a;let l=t.map,c=l.getView();e!=1&&(this.lastScaleDelta_=e),this.anchor_=l.getCoordinateFromPixelInternal(l.getEventPixel(wn(this.targetPointers))),l.render(),c.adjustResolutionInternal(e,this.anchor_)}handleUpEvent(t){if(this.targetPointers.length<2){let i=t.map.getView(),r=this.lastScaleDelta_>1?1:-1;return i.endInteraction(this.duration_,r),!1}return!0}handleDownEvent(t){if(this.targetPointers.length>=2){let e=t.map;return this.anchor_=null,this.lastDistance_=void 0,this.lastScaleDelta_=1,this.handlingDownUpSequence||e.getView().beginInteraction(),!0}return!1}},Vc=ho;function Kc(n){n=n||{};let t=new Ct,e=new Tc(-.005,.05,100);return(n.altShiftDragRotate===void 0||n.altShiftDragRotate)&&t.push(new Dc),(n.doubleClickZoom===void 0||n.doubleClickZoom)&&t.push(new Ac({delta:n.zoomDelta,duration:n.zoomDuration})),(n.dragPan===void 0||n.dragPan)&&t.push(new Oc({onFocusOnly:n.onFocusOnly,kinetic:e})),(n.pinchRotate===void 0||n.pinchRotate)&&t.push(new Xc),(n.pinchZoom===void 0||n.pinchZoom)&&t.push(new Vc({duration:n.zoomDuration})),(n.keyboard===void 0||n.keyboard)&&(t.push(new kc),t.push(new Gc({delta:n.zoomDelta,duration:n.zoomDuration}))),(n.mouseWheelZoom===void 0||n.mouseWheelZoom)&&t.push(new Uc({onFocusOnly:n.onFocusOnly,duration:n.zoomDuration})),(n.shiftDragZoom===void 0||n.shiftDragZoom)&&t.push(new zc({duration:n.zoomDuration})),t}var X={OPACITY:"opacity",VISIBLE:"visible",EXTENT:"extent",Z_INDEX:"zIndex",MAX_RESOLUTION:"maxResolution",MIN_RESOLUTION:"minResolution",MAX_ZOOM:"maxZoom",MIN_ZOOM:"minZoom",SOURCE:"source",MAP:"map"};var uo=class extends ct{constructor(t){super(),this.on,this.once,this.un,this.background_=t.background;let e=Object.assign({},t);typeof t.properties=="object"&&(delete e.properties,Object.assign(e,t.properties)),e[X.OPACITY]=t.opacity!==void 0?t.opacity:1,P(typeof e[X.OPACITY]=="number","Layer opacity must be a number"),e[X.VISIBLE]=t.visible!==void 0?t.visible:!0,e[X.Z_INDEX]=t.zIndex,e[X.MAX_RESOLUTION]=t.maxResolution!==void 0?t.maxResolution:1/0,e[X.MIN_RESOLUTION]=t.minResolution!==void 0?t.minResolution:0,e[X.MIN_ZOOM]=t.minZoom!==void 0?t.minZoom:-1/0,e[X.MAX_ZOOM]=t.maxZoom!==void 0?t.maxZoom:1/0,this.className_=e.className!==void 0?e.className:"ol-layer",delete e.className,this.setProperties(e),this.state_=null}getBackground(){return this.background_}getClassName(){return this.className_}getLayerState(t){let e=this.state_||{layer:this,managed:t===void 0?!0:t},i=this.getZIndex();return e.opacity=j(Math.round(this.getOpacity()*100)/100,0,1),e.visible=this.getVisible(),e.extent=this.getExtent(),e.zIndex=i===void 0&&!e.managed?1/0:i,e.maxResolution=this.getMaxResolution(),e.minResolution=Math.max(this.getMinResolution(),0),e.minZoom=this.getMinZoom(),e.maxZoom=this.getMaxZoom(),this.state_=e,e}getLayersArray(t){return O()}getLayerStatesArray(t){return O()}getExtent(){return this.get(X.EXTENT)}getMaxResolution(){return this.get(X.MAX_RESOLUTION)}getMinResolution(){return this.get(X.MIN_RESOLUTION)}getMinZoom(){return this.get(X.MIN_ZOOM)}getMaxZoom(){return this.get(X.MAX_ZOOM)}getOpacity(){return this.get(X.OPACITY)}getSourceState(){return O()}getVisible(){return this.get(X.VISIBLE)}getZIndex(){return this.get(X.Z_INDEX)}setBackground(t){this.background_=t,this.changed()}setExtent(t){this.set(X.EXTENT,t)}setMaxResolution(t){this.set(X.MAX_RESOLUTION,t)}setMinResolution(t){this.set(X.MIN_RESOLUTION,t)}setMaxZoom(t){this.set(X.MAX_ZOOM,t)}setMinZoom(t){this.set(X.MIN_ZOOM,t)}setOpacity(t){P(typeof t=="number","Layer opacity must be a number"),this.set(X.OPACITY,t)}setVisible(t){this.set(X.VISIBLE,t)}setZIndex(t){this.set(X.Z_INDEX,t)}disposeInternal(){this.state_&&(this.state_.layer=null,this.state_=null),super.disposeInternal()}},er=uo;var Se={ADDLAYER:"addlayer",REMOVELAYER:"removelayer"},Ut=class extends dt{constructor(t,e){super(t),this.layer=e}},fo={LAYERS:"layers"},go=class n extends er{constructor(t){t=t||{};let e=Object.assign({},t);delete e.layers;let i=t.layers;super(e),this.on,this.once,this.un,this.layersListenerKeys_=[],this.listenerKeys_={},this.addChangeListener(fo.LAYERS,this.handleLayersChanged_),i?Array.isArray(i)?i=new Ct(i.slice(),{unique:!0}):P(typeof i.getArray=="function","Expected `layers` to be an array or a `Collection`"):i=new Ct(void 0,{unique:!0}),this.setLayers(i)}handleLayerChange_(){this.changed()}handleLayersChanged_(){this.layersListenerKeys_.forEach(G),this.layersListenerKeys_.length=0;let t=this.getLayers();this.layersListenerKeys_.push(b(t,wt.ADD,this.handleLayersAdd_,this),b(t,wt.REMOVE,this.handleLayersRemove_,this));for(let i in this.listenerKeys_)this.listenerKeys_[i].forEach(G);we(this.listenerKeys_);let e=t.getArray();for(let i=0,r=e.length;i<r;i++){let s=e[i];this.registerLayerListeners_(s),this.dispatchEvent(new Ut(Se.ADDLAYER,s))}this.changed()}registerLayerListeners_(t){let e=[b(t,he.PROPERTYCHANGE,this.handleLayerChange_,this),b(t,A.CHANGE,this.handleLayerChange_,this)];t instanceof n&&e.push(b(t,Se.ADDLAYER,this.handleLayerGroupAdd_,this),b(t,Se.REMOVELAYER,this.handleLayerGroupRemove_,this)),this.listenerKeys_[B(t)]=e}handleLayerGroupAdd_(t){this.dispatchEvent(new Ut(Se.ADDLAYER,t.layer))}handleLayerGroupRemove_(t){this.dispatchEvent(new Ut(Se.REMOVELAYER,t.layer))}handleLayersAdd_(t){let e=t.element;this.registerLayerListeners_(e),this.dispatchEvent(new Ut(Se.ADDLAYER,e)),this.changed()}handleLayersRemove_(t){let e=t.element,i=B(e);this.listenerKeys_[i].forEach(G),delete this.listenerKeys_[i],this.dispatchEvent(new Ut(Se.REMOVELAYER,e)),this.changed()}getLayers(){return this.get(fo.LAYERS)}setLayers(t){let e=this.getLayers();if(e){let i=e.getArray();for(let r=0,s=i.length;r<s;++r)this.dispatchEvent(new Ut(Se.REMOVELAYER,i[r]))}this.set(fo.LAYERS,t)}getLayersArray(t){return t=t!==void 0?t:[],this.getLayers().forEach(function(e){e.getLayersArray(t)}),t}getLayerStatesArray(t){let e=t!==void 0?t:[],i=e.length;this.getLayers().forEach(function(o){o.getLayerStatesArray(e)});let r=this.getLayerState(),s=r.zIndex;!t&&r.zIndex===void 0&&(s=0);for(let o=i,a=e.length;o<a;o++){let l=e[o];l.opacity*=r.opacity,l.visible=l.visible&&r.visible,l.maxResolution=Math.min(l.maxResolution,r.maxResolution),l.minResolution=Math.max(l.minResolution,r.minResolution),l.minZoom=Math.max(l.minZoom,r.minZoom),l.maxZoom=Math.min(l.maxZoom,r.maxZoom),r.extent!==void 0&&(l.extent!==void 0?l.extent=Wt(l.extent,r.extent):l.extent=r.extent),l.zIndex===void 0&&(l.zIndex=s)}return e}getSourceState(){return"ready"}},$n=go;var St={PRERENDER:"prerender",POSTRENDER:"postrender",PRECOMPOSE:"precompose",POSTCOMPOSE:"postcompose",RENDERCOMPLETE:"rendercomplete"};var mo=class extends er{constructor(t){let e=Object.assign({},t);delete e.source,super(e),this.on,this.once,this.un,this.mapPrecomposeKey_=null,this.mapRenderKey_=null,this.sourceChangeKey_=null,this.renderer_=null,this.sourceReady_=!1,this.rendered=!1,t.render&&(this.render=t.render),t.map&&this.setMap(t.map),this.addChangeListener(X.SOURCE,this.handleSourcePropertyChange_);let i=t.source?t.source:null;this.setSource(i)}getLayersArray(t){return t=t||[],t.push(this),t}getLayerStatesArray(t){return t=t||[],t.push(this.getLayerState()),t}getSource(){return this.get(X.SOURCE)||null}getRenderSource(){return this.getSource()}getSourceState(){let t=this.getSource();return t?t.getState():"undefined"}handleSourceChange_(){this.changed(),!(this.sourceReady_||this.getSource().getState()!=="ready")&&(this.sourceReady_=!0,this.dispatchEvent("sourceready"))}handleSourcePropertyChange_(){this.sourceChangeKey_&&(G(this.sourceChangeKey_),this.sourceChangeKey_=null),this.sourceReady_=!1;let t=this.getSource();t&&(this.sourceChangeKey_=b(t,A.CHANGE,this.handleSourceChange_,this),t.getState()==="ready"&&(this.sourceReady_=!0,setTimeout(()=>{this.dispatchEvent("sourceready")},0))),this.changed()}getFeatures(t){return this.renderer_?this.renderer_.getFeatures(t):Promise.resolve([])}getData(t){return!this.renderer_||!this.rendered?null:this.renderer_.getData(t)}isVisible(t){let e,i=this.getMapInternal();!t&&i&&(t=i.getView()),t instanceof At?e={viewState:t.getState(),extent:t.calculateExtent()}:e=t,!e.layerStatesArray&&i&&(e.layerStatesArray=i.getLayerGroup().getLayerStatesArray());let r;if(e.layerStatesArray){if(r=e.layerStatesArray.find(o=>o.layer===this),!r)return!1}else r=this.getLayerState();let s=this.getExtent();return Jn(r,e.viewState)&&(!s||Yt(s,e.extent))}getAttributions(t){if(!this.isVisible(t))return[];let e=this.getSource()?.getAttributions();if(!e)return[];let i=t instanceof At?t.getViewStateAndExtent():t,r=e(i);return Array.isArray(r)||(r=[r]),r}render(t,e){let i=this.getRenderer();return i.prepareFrame(t)?(this.rendered=!0,i.renderFrame(t,e)):null}unrender(){this.rendered=!1}getDeclutter(){}renderDeclutter(t,e){}renderDeferred(t){let e=this.getRenderer();e&&e.renderDeferred(t)}setMapInternal(t){t||this.unrender(),this.set(X.MAP,t)}getMapInternal(){return this.get(X.MAP)}setMap(t){this.mapPrecomposeKey_&&(G(this.mapPrecomposeKey_),this.mapPrecomposeKey_=null),t||this.changed(),this.mapRenderKey_&&(G(this.mapRenderKey_),this.mapRenderKey_=null),t&&(this.mapPrecomposeKey_=b(t,St.PRECOMPOSE,this.handlePrecompose_,this),this.mapRenderKey_=b(this,A.CHANGE,t.render,t),this.changed())}handlePrecompose_(t){let e=t.frameState.layerStatesArray,i=this.getLayerState(!1);P(!e.some(r=>r.layer===i.layer),"A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both."),e.push(i)}setSource(t){this.set(X.SOURCE,t)}getRenderer(){return this.renderer_||(this.renderer_=this.createRenderer()),this.renderer_}hasRenderer(){return!!this.renderer_}createRenderer(){return null}clearRenderer(){this.renderer_&&(this.renderer_.dispose(),delete this.renderer_)}disposeInternal(){this.clearRenderer(),this.setSource(null),super.disposeInternal()}};function Jn(n,t){if(!n.visible)return!1;let e=t.resolution;if(e<n.minResolution||e>=n.maxResolution)return!1;let i=t.zoom;return i>n.minZoom&&i<=n.maxZoom}var Ke=mo;function nr(n,t,e=0,i=n.length-1,r=af){for(;i>e;){if(i-e>600){let l=i-e+1,c=t-e+1,h=Math.log(l),u=.5*Math.exp(2*h/3),f=.5*Math.sqrt(h*u*(l-u)/l)*(c-l/2<0?-1:1),d=Math.max(e,Math.floor(t-c*u/l+f)),g=Math.min(i,Math.floor(t+(l-c)*u/l+f));nr(n,t,d,g,r)}let s=n[t],o=e,a=i;for(Qn(n,e,t),r(n[i],s)>0&&Qn(n,e,i);o<a;){for(Qn(n,o,a),o++,a--;r(n[o],s)<0;)o++;for(;r(n[a],s)>0;)a--}r(n[e],s)===0?Qn(n,e,a):(a++,Qn(n,a,i)),a<=t&&(e=a+1),t<=a&&(i=a-1)}}function Qn(n,t,e){let i=n[t];n[t]=n[e],n[e]=i}function af(n,t){return n<t?-1:n>t?1:0}var ni=class{constructor(t=9){this._maxEntries=Math.max(4,t),this._minEntries=Math.max(2,Math.ceil(this._maxEntries*.4)),this.clear()}all(){return this._all(this.data,[])}search(t){let e=this.data,i=[];if(!rr(t,e))return i;let r=this.toBBox,s=[];for(;e;){for(let o=0;o<e.children.length;o++){let a=e.children[o],l=e.leaf?r(a):a;rr(t,l)&&(e.leaf?i.push(a):_o(t,l)?this._all(a,i):s.push(a))}e=s.pop()}return i}collides(t){let e=this.data;if(!rr(t,e))return!1;let i=[];for(;e;){for(let r=0;r<e.children.length;r++){let s=e.children[r],o=e.leaf?this.toBBox(s):s;if(rr(t,o)){if(e.leaf||_o(t,o))return!0;i.push(s)}}e=i.pop()}return!1}load(t){if(!(t&&t.length))return this;if(t.length<this._minEntries){for(let i=0;i<t.length;i++)this.insert(t[i]);return this}let e=this._build(t.slice(),0,t.length-1,0);if(!this.data.children.length)this.data=e;else if(this.data.height===e.height)this._splitRoot(this.data,e);else{if(this.data.height<e.height){let i=this.data;this.data=e,e=i}this._insert(e,this.data.height-e.height-1,!0)}return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=Rn([]),this}remove(t,e){if(!t)return this;let i=this.data,r=this.toBBox(t),s=[],o=[],a,l,c;for(;i||s.length;){if(i||(i=s.pop(),l=s[s.length-1],a=o.pop(),c=!0),i.leaf){let h=lf(t,i.children,e);if(h!==-1)return i.children.splice(h,1),s.push(i),this._condense(s),this}!c&&!i.leaf&&_o(i,r)?(s.push(i),o.push(a),a=0,l=i,i=i.children[0]):l?(a++,i=l.children[a],c=!1):i=null}return this}toBBox(t){return t}compareMinX(t,e){return t.minX-e.minX}compareMinY(t,e){return t.minY-e.minY}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,e){let i=[];for(;t;)t.leaf?e.push(...t.children):i.push(...t.children),t=i.pop();return e}_build(t,e,i,r){let s=i-e+1,o=this._maxEntries,a;if(s<=o)return a=Rn(t.slice(e,i+1)),vn(a,this.toBBox),a;r||(r=Math.ceil(Math.log(s)/Math.log(o)),o=Math.ceil(s/Math.pow(o,r-1))),a=Rn([]),a.leaf=!1,a.height=r;let l=Math.ceil(s/o),c=l*Math.ceil(Math.sqrt(o));jc(t,e,i,c,this.compareMinX);for(let h=e;h<=i;h+=c){let u=Math.min(h+c-1,i);jc(t,h,u,l,this.compareMinY);for(let f=h;f<=u;f+=l){let d=Math.min(f+l-1,u);a.children.push(this._build(t,f,d,r-1))}}return vn(a,this.toBBox),a}_chooseSubtree(t,e,i,r){for(;r.push(e),!(e.leaf||r.length-1===i);){let s=1/0,o=1/0,a;for(let l=0;l<e.children.length;l++){let c=e.children[l],h=po(c),u=uf(t,c)-h;u<o?(o=u,s=h<s?h:s,a=c):u===o&&h<s&&(s=h,a=c)}e=a||e.children[0]}return e}_insert(t,e,i){let r=i?t:this.toBBox(t),s=[],o=this._chooseSubtree(r,this.data,e,s);for(o.children.push(t),ei(o,r);e>=0&&s[e].children.length>this._maxEntries;)this._split(s,e),e--;this._adjustParentBBoxes(r,s,e)}_split(t,e){let i=t[e],r=i.children.length,s=this._minEntries;this._chooseSplitAxis(i,s,r);let o=this._chooseSplitIndex(i,s,r),a=Rn(i.children.splice(o,i.children.length-o));a.height=i.height,a.leaf=i.leaf,vn(i,this.toBBox),vn(a,this.toBBox),e?t[e-1].children.push(a):this._splitRoot(i,a)}_splitRoot(t,e){this.data=Rn([t,e]),this.data.height=t.height+1,this.data.leaf=!1,vn(this.data,this.toBBox)}_chooseSplitIndex(t,e,i){let r,s=1/0,o=1/0;for(let a=e;a<=i-e;a++){let l=ti(t,0,a,this.toBBox),c=ti(t,a,i,this.toBBox),h=ff(l,c),u=po(l)+po(c);h<s?(s=h,r=a,o=u<o?u:o):h===s&&u<o&&(o=u,r=a)}return r||i-e}_chooseSplitAxis(t,e,i){let r=t.leaf?this.compareMinX:cf,s=t.leaf?this.compareMinY:hf,o=this._allDistMargin(t,e,i,r),a=this._allDistMargin(t,e,i,s);o<a&&t.children.sort(r)}_allDistMargin(t,e,i,r){t.children.sort(r);let s=this.toBBox,o=ti(t,0,e,s),a=ti(t,i-e,i,s),l=ir(o)+ir(a);for(let c=e;c<i-e;c++){let h=t.children[c];ei(o,t.leaf?s(h):h),l+=ir(o)}for(let c=i-e-1;c>=e;c--){let h=t.children[c];ei(a,t.leaf?s(h):h),l+=ir(a)}return l}_adjustParentBBoxes(t,e,i){for(let r=i;r>=0;r--)ei(e[r],t)}_condense(t){for(let e=t.length-1,i;e>=0;e--)t[e].children.length===0?e>0?(i=t[e-1].children,i.splice(i.indexOf(t[e]),1)):this.clear():vn(t[e],this.toBBox)}};function lf(n,t,e){if(!e)return t.indexOf(n);for(let i=0;i<t.length;i++)if(e(n,t[i]))return i;return-1}function vn(n,t){ti(n,0,n.children.length,t,n)}function ti(n,t,e,i,r){r||(r=Rn(null)),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(let s=t;s<e;s++){let o=n.children[s];ei(r,n.leaf?i(o):o)}return r}function ei(n,t){return n.minX=Math.min(n.minX,t.minX),n.minY=Math.min(n.minY,t.minY),n.maxX=Math.max(n.maxX,t.maxX),n.maxY=Math.max(n.maxY,t.maxY),n}function cf(n,t){return n.minX-t.minX}function hf(n,t){return n.minY-t.minY}function po(n){return(n.maxX-n.minX)*(n.maxY-n.minY)}function ir(n){return n.maxX-n.minX+(n.maxY-n.minY)}function uf(n,t){return(Math.max(t.maxX,n.maxX)-Math.min(t.minX,n.minX))*(Math.max(t.maxY,n.maxY)-Math.min(t.minY,n.minY))}function ff(n,t){let e=Math.max(n.minX,t.minX),i=Math.max(n.minY,t.minY),r=Math.min(n.maxX,t.maxX),s=Math.min(n.maxY,t.maxY);return Math.max(0,r-e)*Math.max(0,s-i)}function _o(n,t){return n.minX<=t.minX&&n.minY<=t.minY&&t.maxX<=n.maxX&&t.maxY<=n.maxY}function rr(n,t){return t.minX<=n.maxX&&t.minY<=n.maxY&&t.maxX>=n.minX&&t.maxY>=n.minY}function Rn(n){return{children:n,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function jc(n,t,e,i,r){let s=[t,e];for(;s.length;){if(e=s.pop(),t=s.pop(),e-t<=i)continue;let o=t+Math.ceil((e-t)/i/2)*i;nr(n,o,t,e,r),s.push(t,o,o,e)}}var or=[NaN,NaN,NaN,0],yo;function df(){return yo||(yo=J(1,1,void 0,{willReadFrequently:!0,desynchronized:!0})),yo}var gf=/^rgba?\(\s*(\d+%?)\s+(\d+%?)\s+(\d+%?)(?:\s*\/\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i,mf=/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i,pf=/^rgba?\(\s*(\d+%)\s*,\s*(\d+%)\s*,\s*(\d+%)(?:\s*,\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i,_f=/^#([\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})$/i;function sr(n,t){return n.endsWith("%")?Number(n.substring(0,n.length-1))/t:Number(n)}function ri(n){throw new Error('failed to parse "'+n+'" as color')}function Wc(n){if(n.toLowerCase().startsWith("rgb")){let s=n.match(mf)||n.match(gf)||n.match(pf);if(s){let o=s[4],a=100/255;return[j(sr(s[1],a)+.5|0,0,255),j(sr(s[2],a)+.5|0,0,255),j(sr(s[3],a)+.5|0,0,255),o!==void 0?j(sr(o,100),0,1):1]}ri(n)}if(n.startsWith("#")){if(_f.test(n)){let s=n.substring(1),o=s.length<=4?1:2,a=[0,0,0,255];for(let l=0,c=s.length;l<c;l+=o){let h=parseInt(s.substring(l,l+o),16);o===1&&(h+=h<<4),a[l/o]=h}return a[3]=a[3]/255,a}ri(n)}let t=df();t.fillStyle="#abcdef";let e=t.fillStyle;t.fillStyle=n,t.fillStyle===e&&(t.fillStyle="#fedcba",e=t.fillStyle,t.fillStyle=n,t.fillStyle===e&&ri(n));let i=t.fillStyle;if(i.startsWith("#")||i.startsWith("rgba"))return Wc(i);t.clearRect(0,0,1,1),t.fillRect(0,0,1,1);let r=Array.from(t.getImageData(0,0,1,1).data);return r[3]=Ri(r[3]/255,3),r}function Yc(n){return typeof n=="string"?n:oi(n)}var yf=1024,ii={},Eo=0;function Bc(n){if(n.length===4)return n;let t=n.slice();return t[3]=1,t}function xo(n){return n>.0031308?Math.pow(n,1/2.4)*269.025-14.025:n*3294.6}function wo(n){return n>.2068965?Math.pow(n,3):(n-4/29)*(108/841)}function Co(n){return n>10.314724?Math.pow((n+14.025)/269.025,2.4):n/3294.6}function vo(n){return n>.0088564?Math.pow(n,1/3):n/(108/841)+4/29}function Ro(n){let t=Co(n[0]),e=Co(n[1]),i=Co(n[2]),r=vo(t*.222488403+e*.716873169+i*.06060791),s=500*(vo(t*.452247074+e*.399439023+i*.148375274)-r),o=200*(r-vo(t*.016863605+e*.117638439+i*.865350722)),a=Math.atan2(o,s)*(180/Math.PI);return[116*r-16,Math.sqrt(s*s+o*o),a<0?a+360:a,n[3]]}function Zc(n){let t=(n[0]+16)/116,e=n[1],i=n[2]*Math.PI/180,r=wo(t),s=wo(t+e/500*Math.cos(i)),o=wo(t-e/200*Math.sin(i)),a=xo(s*3.021973625-r*1.617392459-o*.404875592),l=xo(s*-.943766287+r*1.916279586+o*.027607165),c=xo(s*.069407491-r*.22898585+o*1.159737864);return[j(a+.5|0,0,255),j(l+.5|0,0,255),j(c+.5|0,0,255),n[3]]}function si(n){if(n==="none")return or;if(ii.hasOwnProperty(n))return ii[n];if(Eo>=yf){let e=0;for(let i in ii)(e++&3)===0&&(delete ii[i],--Eo)}let t=Wc(n);t.length!==4&&ri(n);for(let e of t)isNaN(e)&&ri(n);return ii[n]=t,++Eo,t}function kt(n){return Array.isArray(n)?n:si(n)}function oi(n){let t=n[0];t!=(t|0)&&(t=t+.5|0);let e=n[1];e!=(e|0)&&(e=e+.5|0);let i=n[2];i!=(i|0)&&(i=i+.5|0);let r=n[3]===void 0?1:Math.round(n[3]*1e3)/1e3;return"rgba("+t+","+e+","+i+","+r+")"}var We=0,lr=0,pt=1<<We++,F=1<<We++,_t=1<<We++,vt=1<<We++,fe=1<<We++,je=1<<We++,cr=Math.pow(2,We)-1,Io={[pt]:"boolean",[F]:"number",[_t]:"string",[vt]:"color",[fe]:"number[]",[je]:"size"},Ef=Object.keys(Io).map(Number).sort(De);function xf(n){return n in Io}function ue(n){let t=[];for(let e of Ef)ai(n,e)&&t.push(Io[e]);return t.length===0?"untyped":t.length<3?t.join(" or "):t.slice(0,-1).join(", ")+", or "+t[t.length-1]}function ai(n,t){return(n&t)===t}function ar(n,t){return!!(n&t)}function Le(n,t){return n===t}var Q=class{constructor(t,e){if(!xf(t))throw new Error(`literal expressions must have a specific type, got ${ue(t)}`);this.type=t,this.value=e}},hr=class{constructor(t,e,...i){this.type=t,this.operator=e,this.args=i}};function ur(n){return{variables:new Map,properties:new Map,featureId:!1,geometryType:!1,mCoordinate:!1,mapState:!1,inputVariables:n}}function tt(n,t,e){switch(typeof n){case"boolean":{if(Le(t,_t))return new Q(_t,n?"true":"false");if(!ai(t,pt))throw new Error(`got a boolean, but expected ${ue(t)}`);return new Q(pt,n)}case"number":{if(Le(t,je))return new Q(je,H(n));if(Le(t,pt))return new Q(pt,!!n);if(Le(t,_t))return new Q(_t,n.toString());if(!ai(t,F))throw new Error(`got a number, but expected ${ue(t)}`);return new Q(F,n)}case"string":{if(Le(t,vt))return new Q(vt,si(n));if(Le(t,pt))return new Q(pt,!!n);if(!ai(t,_t))throw new Error(`got a string, but expected ${ue(t)}`);return new Q(_t,n)}default:}if(!Array.isArray(n))throw new Error("expression must be an array or a primitive value");if(n.length===0)throw new Error("empty expression");if(typeof n[0]=="string")return Pf(n,t,e);for(let i of n)if(typeof i!="number")throw new Error("expected an array of numbers");if(Le(t,je)){if(n.length!==2)throw new Error(`expected an array of two values for a size, got ${n.length}`);return new Q(je,n)}if(Le(t,vt)){if(n.length===3)return new Q(vt,[...n,1]);if(n.length===4)return new Q(vt,n);throw new Error(`expected an array of 3 or 4 values for a color, got ${n.length}`)}if(!ai(t,fe))throw new Error(`got an array of numbers, but expected ${ue(t)}`);return new Q(fe,n)}var p={Get:"get",Var:"var",Concat:"concat",GeometryType:"geometry-type",LineMetric:"line-metric",Any:"any",All:"all",Not:"!",Resolution:"resolution",Zoom:"zoom",Time:"time",Equal:"==",NotEqual:"!=",GreaterThan:">",GreaterThanOrEqualTo:">=",LessThan:"<",LessThanOrEqualTo:"<=",Multiply:"*",Divide:"/",Add:"+",Subtract:"-",Clamp:"clamp",Mod:"%",Pow:"^",Abs:"abs",Floor:"floor",Ceil:"ceil",Round:"round",Sin:"sin",Cos:"cos",Atan:"atan",Sqrt:"sqrt",Match:"match",Between:"between",Interpolate:"interpolate",Coalesce:"coalesce",Case:"case",In:"in",Number:"number",String:"string",Array:"array",Color:"color",Id:"id",Band:"band",Palette:"palette",ToString:"to-string",Has:"has"},wf={[p.Get]:L(D(1,1/0),qc),[p.Var]:Cf(),[p.Has]:L(D(1,1/0),qc),[p.Id]:L(vf,Tn),[p.Concat]:L(D(2,1/0),W(_t)),[p.GeometryType]:L(Rf,Tn),[p.LineMetric]:L(Tf,Tn),[p.Resolution]:L(To,Tn),[p.Zoom]:L(To,Tn),[p.Time]:L(To,Tn),[p.Any]:L(D(2,1/0),W(pt)),[p.All]:L(D(2,1/0),W(pt)),[p.Not]:L(D(1,1),W(pt)),[p.Equal]:L(D(2,2),$c()),[p.NotEqual]:L(D(2,2),$c()),[p.GreaterThan]:L(D(2,2),W(F)),[p.GreaterThanOrEqualTo]:L(D(2,2),W(F)),[p.LessThan]:L(D(2,2),W(F)),[p.LessThanOrEqualTo]:L(D(2,2),W(F)),[p.Multiply]:L(D(2,1/0),Hc),[p.Coalesce]:L(D(2,1/0),Hc),[p.Divide]:L(D(2,2),W(F)),[p.Add]:L(D(2,1/0),W(F)),[p.Subtract]:L(D(2,2),W(F)),[p.Clamp]:L(D(3,3),W(F)),[p.Mod]:L(D(2,2),W(F)),[p.Pow]:L(D(2,2),W(F)),[p.Abs]:L(D(1,1),W(F)),[p.Floor]:L(D(1,1),W(F)),[p.Ceil]:L(D(1,1),W(F)),[p.Round]:L(D(1,1),W(F)),[p.Sin]:L(D(1,1),W(F)),[p.Cos]:L(D(1,1),W(F)),[p.Atan]:L(D(1,2),W(F)),[p.Sqrt]:L(D(1,1),W(F)),[p.Match]:L(D(4,1/0),Jc,Af),[p.Between]:L(D(3,3),W(F)),[p.Interpolate]:L(D(6,1/0),Jc,Sf),[p.Case]:L(D(3,1/0),If,Lf),[p.In]:L(D(2,2),Mf),[p.Number]:L(D(1,1/0),W(cr)),[p.String]:L(D(1,1/0),W(cr)),[p.Array]:L(D(1,1/0),W(F)),[p.Color]:L(D(1,4),W(F)),[p.Band]:L(D(1,3),W(F)),[p.Palette]:L(D(2,2),bf),[p.ToString]:L(D(1,1),W(pt|F|_t|vt))};function qc(n,t,e){let i=n.length-1,r=new Array(i);for(let s=0;s<i;++s){let o=n[s+1];switch(typeof o){case"number":{r[s]=new Q(F,o);break}case"string":{r[s]=new Q(_t,o);break}default:throw new Error(`expected a string key or numeric array index for a get operation, got ${o}`)}s===0&&e.properties.set(String(o),t)}return r}function Cf(){return function(n,t,e){let i=n[1];if(typeof i!="string")throw new Error("expected a string argument for var operation");let r=t,s=e.inputVariables?.[i];if(s!==void 0){let o=tt(s,cr,e);if(!(o instanceof Q))throw new Error(`style variables should only be literal values (no expressions!), variable name: ${i}`);let a=o.type;if(typeof s=="string"&&ar(r,vt)&&!ar(r,_t)?a=vt:Array.isArray(s)&&s.length===2&&ar(r,je)&&!ar(r,fe)&&(a=je),r&=a,r===lr)throw new Error(`the type expected from the var operator (${ue(t)}) did not have any overlap with the type of the corresponding style variables (${ue(a)}), variable name: ${i}`)}if(e.variables.has(i)){let o=e.variables.get(i);if(r&=o,r===lr)throw new Error(`a new type expected from the var operator (${ue(t)}) did not have any overlap with the previous type expected for it (${ue(o)}), variable name: ${i}`)}return e.variables.set(i,r),new hr(r,"var",new Q(_t,i))}}function vf(n,t,e){e.featureId=!0}function Rf(n,t,e){e.geometryType=!0}function Tf(n,t,e){e.mCoordinate=!0}function To(n,t,e){e.mapState=!0}function Tn(n,t,e){let i=n[0];if(n.length!==1)throw new Error(`expected no arguments for ${i} operation`);return[]}function D(n,t){return function(e,i,r){let s=e[0],o=e.length-1;if(n===t){if(o!==n){let a=n===1?"":"s";throw new Error(`expected ${n} argument${a} for ${s}, got ${o}`)}}else if(o<n||o>t){let a=t===1/0?`${n} or more`:`${n} to ${t}`;throw new Error(`expected ${a} arguments for ${s}, got ${o}`)}}}function Hc(n,t,e){let i=n.length-1,r=new Array(i);for(let s=0;s<i;++s){let o=tt(n[s+1],t,e);r[s]=o}return r}function W(n){return function(t,e,i){let r=t.length-1,s=new Array(r);for(let o=0;o<r;++o){let a=tt(t[o+1],n,i);s[o]=a}return s}}function $c(){return function(n,t,e){let i=n[0],r=n.length-1,s=new Array(r),o=cr;for(let a=0;a<r;++a){let l=tt(n[a+1],o,e);o&=l.type}if(o===lr)throw new Error(`no common type was found among the arguments of ${i}`);for(let a=0;a<r;++a){let l=tt(n[a+1],o,e);s[a]=l}return s}}function If(n,t,e){let i=n[0],r=n.length-1;if(r%2===0)throw new Error(`expected an odd number of arguments for ${i}, got ${r} instead`)}function Jc(n,t,e){let i=n[0],r=n.length-1;if(r%2===1)throw new Error(`expected an even number of arguments for operation ${i}, got ${r} instead`)}function Af(n,t,e){let i=n.length-1,r=tt(n[n.length-1],t,e),s=_t|F|pt,o=new Array(i-2);for(let l=0;l<i-2;l+=2){try{let c=tt(n[l+2],s,e);s&=c.type}catch(c){throw new Error(`failed to parse argument ${l+1} of match expression: ${c.message}`)}if(s===lr)throw new Error("no common type was found among the arguments of match expression")}for(let l=0;l<i-2;l+=2){try{let c=tt(n[l+2],s,e);o[l]=c}catch(c){throw new Error(`failed to parse argument ${l+1} of match expression: ${c.message}`)}try{let c=tt(n[l+3],r.type,e);o[l+1]=c}catch(c){throw new Error(`failed to parse argument ${l+2} of match expression: ${c.message}`)}}return[tt(n[1],s,e),...o,r]}function Sf(n,t,e){let i=n[1],r;switch(i[0]){case"linear":r=1;break;case"exponential":let l=i[1];if(typeof l!="number"||l<=0)throw new Error(`expected a number base for exponential interpolation, got ${JSON.stringify(l)} instead`);r=l;break;default:throw new Error(`invalid interpolation type: ${JSON.stringify(i)}`)}let s=new Q(F,r),o;try{o=tt(n[2],F,e)}catch(l){throw new Error(`failed to parse argument 1 in interpolate expression: ${l.message}`)}let a=new Array(n.length-3);for(let l=0;l<a.length;l+=2){try{let c=tt(n[l+3],F,e);a[l]=c}catch(c){throw new Error(`failed to parse argument ${l+2} for interpolate expression: ${c.message}`)}try{let c=tt(n[l+4],t,e);a[l+1]=c}catch(c){throw new Error(`failed to parse argument ${l+3} for interpolate expression: ${c.message}`)}}return[s,o,...a]}function Lf(n,t,e){let i=tt(n[n.length-1],t,e),r=new Array(n.length-1);for(let s=0;s<r.length-1;s+=2){try{let o=tt(n[s+1],pt,e);r[s]=o}catch(o){throw new Error(`failed to parse argument ${s} of case expression: ${o.message}`)}try{let o=tt(n[s+2],i.type,e);r[s+1]=o}catch(o){throw new Error(`failed to parse argument ${s+1} of case expression: ${o.message}`)}}return r[r.length-1]=i,r}function Mf(n,t,e){let i=n[2];if(!Array.isArray(i))throw new Error('the second argument for the "in" operator must be an array');let r;if(i[0]==="literal"){if(i=i[1],!Array.isArray(i))throw new Error('failed to parse "in" expression: the literal operator must be followed by an array')}else if(typeof i[0]=="string")throw new Error('for the "in" operator, a string array should be wrapped in a "literal" operator to disambiguate from expressions');typeof i[0]=="string"?r=_t:r=F;let s=new Array(i.length);for(let a=0;a<s.length;a++)try{let l=tt(i[a],r,e);s[a]=l}catch(l){throw new Error(`failed to parse haystack item ${a} for "in" expression: ${l.message}`)}return[tt(n[1],r,e),...s]}function bf(n,t,e){let i;try{i=tt(n[1],F,e)}catch(o){throw new Error(`failed to parse first argument in palette expression: ${o.message}`)}let r=n[2];if(!Array.isArray(r))throw new Error("the second argument of palette must be an array");let s=new Array(r.length);for(let o=0;o<s.length;o++){let a;try{a=tt(r[o],vt,e)}catch(l){throw new Error(`failed to parse color at index ${o} in palette expression: ${l.message}`)}if(!(a instanceof Q))throw new Error(`the palette color at index ${o} must be a literal value`);s[o]=a}return[i,...s]}function L(...n){return function(t,e,i){let r=t[0],s;for(let o=0;o<n.length;o++){let a=n[o](t,e,i);if(o==n.length-1){if(!a)throw new Error("expected last argument validator to return the parsed args");s=a}}return new hr(e,r,...s)}}function Pf(n,t,e){let i=n[0],r=wf[i];if(!r)throw new Error(`unknown operator: ${i}`);return r(n,t,e)}function fr(n){if(!n)return"";let t=n.getType();switch(t){case"Point":case"LineString":case"Polygon":return t;case"MultiPoint":case"MultiLineString":case"MultiPolygon":return t.substring(5);case"Circle":return"Polygon";case"GeometryCollection":return fr(n.getGeometries()[0]);default:return""}}function Ao(){return{variables:{},properties:{},resolution:NaN,featureId:null,geometryType:""}}function Vt(n,t,e){let i=tt(n,t,e);return Xt(i,e)}function Xt(n,t){if(n instanceof Q){if(n.type===vt&&typeof n.value=="string"){let i=si(n.value);return function(){return i}}return function(){return n.value}}let e=n.operator;switch(e){case p.Number:case p.String:case p.Coalesce:return Of(n,t);case p.Get:case p.Var:case p.Has:return Df(n,t);case p.Id:return i=>i.featureId;case p.GeometryType:return i=>i.geometryType;case p.Concat:{let i=n.args.map(r=>Xt(r,t));return r=>"".concat(...i.map(s=>s(r).toString()))}case p.Resolution:return i=>i.resolution;case p.Any:case p.All:case p.Between:case p.In:case p.Not:return Ff(n,t);case p.Equal:case p.NotEqual:case p.LessThan:case p.LessThanOrEqualTo:case p.GreaterThan:case p.GreaterThanOrEqualTo:return Nf(n,t);case p.Multiply:case p.Divide:case p.Add:case p.Subtract:case p.Clamp:case p.Mod:case p.Pow:case p.Abs:case p.Floor:case p.Ceil:case p.Round:case p.Sin:case p.Cos:case p.Atan:case p.Sqrt:return zf(n,t);case p.Case:return kf(n,t);case p.Match:return Gf(n,t);case p.Interpolate:return Uf(n,t);case p.ToString:return Xf(n,t);default:throw new Error(`Unsupported operator ${e}`)}}function Of(n,t){let e=n.operator,i=n.args.length,r=new Array(i);for(let s=0;s<i;++s)r[s]=Xt(n.args[s],t);switch(e){case p.Coalesce:return s=>{for(let o=0;o<i;++o){let a=r[o](s);if(typeof a<"u"&&a!==null)return a}throw new Error("Expected one of the values to be non-null")};case p.Number:case p.String:return s=>{for(let o=0;o<i;++o){let a=r[o](s);if(typeof a===e)return a}throw new Error(`Expected one of the values to be a ${e}`)};default:throw new Error(`Unsupported assertion operator ${e}`)}}function Df(n,t){let i=n.args[0].value;switch(n.operator){case p.Get:return r=>{let s=n.args,o=r.properties[i];for(let a=1,l=s.length;a<l;++a){let h=s[a].value;o=o[h]}return o};case p.Var:return r=>r.variables[i];case p.Has:return r=>{let s=n.args;if(!(i in r.properties))return!1;let o=r.properties[i];for(let a=1,l=s.length;a<l;++a){let h=s[a].value;if(!o||!Object.hasOwn(o,h))return!1;o=o[h]}return!0};default:throw new Error(`Unsupported accessor operator ${n.operator}`)}}function Nf(n,t){let e=n.operator,i=Xt(n.args[0],t),r=Xt(n.args[1],t);switch(e){case p.Equal:return s=>i(s)===r(s);case p.NotEqual:return s=>i(s)!==r(s);case p.LessThan:return s=>i(s)<r(s);case p.LessThanOrEqualTo:return s=>i(s)<=r(s);case p.GreaterThan:return s=>i(s)>r(s);case p.GreaterThanOrEqualTo:return s=>i(s)>=r(s);default:throw new Error(`Unsupported comparison operator ${e}`)}}function Ff(n,t){let e=n.operator,i=n.args.length,r=new Array(i);for(let s=0;s<i;++s)r[s]=Xt(n.args[s],t);switch(e){case p.Any:return s=>{for(let o=0;o<i;++o)if(r[o](s))return!0;return!1};case p.All:return s=>{for(let o=0;o<i;++o)if(!r[o](s))return!1;return!0};case p.Between:return s=>{let o=r[0](s),a=r[1](s),l=r[2](s);return o>=a&&o<=l};case p.In:return s=>{let o=r[0](s);for(let a=1;a<i;++a)if(o===r[a](s))return!0;return!1};case p.Not:return s=>!r[0](s);default:throw new Error(`Unsupported logical operator ${e}`)}}function zf(n,t){let e=n.operator,i=n.args.length,r=new Array(i);for(let s=0;s<i;++s)r[s]=Xt(n.args[s],t);switch(e){case p.Multiply:return s=>{let o=1;for(let a=0;a<i;++a)o*=r[a](s);return o};case p.Divide:return s=>r[0](s)/r[1](s);case p.Add:return s=>{let o=0;for(let a=0;a<i;++a)o+=r[a](s);return o};case p.Subtract:return s=>r[0](s)-r[1](s);case p.Clamp:return s=>{let o=r[0](s),a=r[1](s);if(o<a)return a;let l=r[2](s);return o>l?l:o};case p.Mod:return s=>r[0](s)%r[1](s);case p.Pow:return s=>Math.pow(r[0](s),r[1](s));case p.Abs:return s=>Math.abs(r[0](s));case p.Floor:return s=>Math.floor(r[0](s));case p.Ceil:return s=>Math.ceil(r[0](s));case p.Round:return s=>Math.round(r[0](s));case p.Sin:return s=>Math.sin(r[0](s));case p.Cos:return s=>Math.cos(r[0](s));case p.Atan:return i===2?s=>Math.atan2(r[0](s),r[1](s)):s=>Math.atan(r[0](s));case p.Sqrt:return s=>Math.sqrt(r[0](s));default:throw new Error(`Unsupported numeric operator ${e}`)}}function kf(n,t){let e=n.args.length,i=new Array(e);for(let r=0;r<e;++r)i[r]=Xt(n.args[r],t);return r=>{for(let s=0;s<e-1;s+=2)if(i[s](r))return i[s+1](r);return i[e-1](r)}}function Gf(n,t){let e=n.args.length,i=new Array(e);for(let r=0;r<e;++r)i[r]=Xt(n.args[r],t);return r=>{let s=i[0](r);for(let o=1;o<e-1;o+=2)if(s===i[o](r))return i[o+1](r);return i[e-1](r)}}function Uf(n,t){let e=n.args.length,i=new Array(e);for(let r=0;r<e;++r)i[r]=Xt(n.args[r],t);return r=>{let s=i[0](r),o=i[1](r),a,l;for(let c=2;c<e;c+=2){let h=i[c](r),u=i[c+1](r),f=Array.isArray(u);if(f&&(u=Bc(u)),h>=o)return c===2?u:f?Vf(s,o,a,l,h,u):li(s,o,a,l,h,u);a=h,l=u}return l}}function Xf(n,t){let e=n.operator,i=n.args.length,r=new Array(i);for(let s=0;s<i;++s)r[s]=Xt(n.args[s],t);if(e===p.ToString)return s=>{let o=r[0](s);return n.args[0].type===vt?oi(o):o.toString()};throw new Error(`Unsupported convert operator ${e}`)}function li(n,t,e,i,r,s){let o=r-e;if(o===0)return i;let a=t-e,l=n===1?a/o:(Math.pow(n,a)-1)/(Math.pow(n,o)-1);return i+l*(s-i)}function Vf(n,t,e,i,r,s){if(r-e===0)return i;let a=Ro(i),l=Ro(s),c=l[2]-a[2];c>180?c-=360:c<-180&&(c+=360);let h=[li(n,t,e,a[0],r,l[0]),li(n,t,e,a[1],r,l[1]),a[2]+li(n,t,e,0,r,c),li(n,t,e,i[3],r,s[3])];return Zc(h)}var Lo=class{constructor(){this.cache_={},this.patternCache_={},this.cacheSize_=0,this.maxCacheSize_=1024}clear(){this.cache_={},this.patternCache_={},this.cacheSize_=0}canExpireCache(){return this.cacheSize_>this.maxCacheSize_}expire(){if(this.canExpireCache()){let t=0;for(let e in this.cache_){let i=this.cache_[e];(t++&3)===0&&!i.hasListener()&&(delete this.cache_[e],delete this.patternCache_[e],--this.cacheSize_)}}}get(t,e){let i=So(t,e);return i in this.cache_?this.cache_[i]:null}getPattern(t,e){let i=So(t,e);return i in this.patternCache_?this.patternCache_[i]:null}set(t,e,i,r){let s=So(t,e),o=s in this.cache_;this.cache_[s]=i,r&&(i.getImageState()===M.IDLE&&i.load(),i.getImageState()===M.LOADING?i.ready().then(()=>{this.patternCache_[s]=Un().createPattern(i.getImage(1),"repeat")}):this.patternCache_[s]=Un().createPattern(i.getImage(1),"repeat")),o||++this.cacheSize_}setSize(t){this.maxCacheSize_=t,this.expire()}};function So(n,t){let e=t?kt(t):"null";return n+":"+e}var yt=new Lo;var ci=null,dr=class extends ve{constructor(t,e,i,r,s){super(),this.hitDetectionImage_=null,this.image_=t,this.crossOrigin_=i?.crossOrigin,this.referrerPolicy_=i?.referrerPolicy,this.canvas_={},this.color_=s,this.imageState_=r===void 0?M.IDLE:r,this.size_=t&&t.width&&t.height?[t.width,t.height]:null,this.src_=e,this.tainted_,this.ready_=null}initializeImage_(){this.image_=new Image,this.crossOrigin_!==null&&(this.image_.crossOrigin=this.crossOrigin_),this.referrerPolicy_!==void 0&&(this.image_.referrerPolicy=this.referrerPolicy_)}isTainted_(){if(this.tainted_===void 0&&this.imageState_===M.LOADED){ci||(ci=J(1,1,void 0,{willReadFrequently:!0})),ci.drawImage(this.image_,0,0);try{ci.getImageData(0,0,1,1),this.tainted_=!1}catch{ci=null,this.tainted_=!0}}return this.tainted_===!0}dispatchChangeEvent_(){this.dispatchEvent(A.CHANGE)}handleImageError_(){this.imageState_=M.ERROR,this.dispatchChangeEvent_()}handleImageLoad_(){this.imageState_=M.LOADED,this.size_=[this.image_.width,this.image_.height],this.dispatchChangeEvent_()}getImage(t){return this.image_||this.initializeImage_(),this.replaceColor_(t),this.canvas_[t]?this.canvas_[t]:this.image_}setImage(t){this.image_=t}getPixelRatio(t){return this.replaceColor_(t),this.canvas_[t]?t:1}getImageState(){return this.imageState_}getHitDetectionImage(){if(this.image_||this.initializeImage_(),!this.hitDetectionImage_)if(this.isTainted_()){let t=this.size_[0],e=this.size_[1],i=J(t,e);i.fillRect(0,0,t,e),this.hitDetectionImage_=i.canvas}else this.hitDetectionImage_=this.image_;return this.hitDetectionImage_}getSize(){return this.size_}getSrc(){return this.src_}load(){if(this.imageState_===M.IDLE){this.image_||this.initializeImage_(),this.imageState_=M.LOADING;try{this.src_!==void 0&&(this.image_.src=this.src_)}catch{this.handleImageError_()}this.image_ instanceof HTMLImageElement&&Ha(this.image_,this.src_).then(t=>{this.image_=t,this.handleImageLoad_()}).catch(this.handleImageError_.bind(this))}}replaceColor_(t){if(!this.color_||this.canvas_[t]||this.imageState_!==M.LOADED)return;let e=this.image_,i=J(Math.ceil(e.width*t),Math.ceil(e.height*t)),r=i.canvas;i.scale(t,t),i.drawImage(e,0,0),i.globalCompositeOperation="multiply",i.fillStyle=Yc(this.color_),i.fillRect(0,0,r.width/t,r.height/t),i.globalCompositeOperation="destination-in",i.drawImage(e,0,0),this.canvas_[t]=r}ready(){return this.ready_||(this.ready_=new Promise(t=>{if(this.imageState_===M.LOADED||this.imageState_===M.ERROR)t();else{let e=()=>{(this.imageState_===M.LOADED||this.imageState_===M.ERROR)&&(this.removeEventListener(A.CHANGE,e),t())};this.addEventListener(A.CHANGE,e)}})),this.ready_}};function Me(n,t,e,i,r,s){let o=t===void 0?void 0:yt.get(t,r);return o||(o=new dr(n,n&&"src"in n?n.src||void 0:t,e,i,r),yt.set(t,r,o,s)),s&&o&&!yt.getPattern(t,r)&&yt.set(t,r,o,s),o}var Qc=dr;function Mo(n){return n?Array.isArray(n)?oi(n):typeof n=="object"&&"src"in n?Kf(n):n:null}function Kf(n){if(!n.offset||!n.size)return yt.getPattern(n.src,n.color);let t=n.src+":"+n.offset,e=yt.getPattern(t,n.color);if(e)return e;let i=yt.get(n.src,null);if(i.getImageState()!==M.LOADED)return null;let r=J(n.size[0],n.size[1]);return r.drawImage(i.getImage(1),n.offset[0],n.offset[1],n.size[0],n.size[1],0,0,n.size[0],n.size[1]),Me(r.canvas,t,void 0,M.LOADED,n.color,!0),yt.getPattern(t,n.color)}var bo="#000",Po="round";var Oo="round",th=10;var eh="#000";var nh=1,ih=new ct;var Do=class n{constructor(t){this.opacity_=t.opacity,this.rotateWithView_=t.rotateWithView,this.rotation_=t.rotation,this.scale_=t.scale,this.scaleArray_=H(t.scale),this.displacement_=t.displacement,this.declutterMode_=t.declutterMode}clone(){let t=this.getScale();return new n({opacity:this.getOpacity(),scale:Array.isArray(t)?t.slice():t,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()})}getOpacity(){return this.opacity_}getRotateWithView(){return this.rotateWithView_}getRotation(){return this.rotation_}getScale(){return this.scale_}getScaleArray(){return this.scaleArray_}getDisplacement(){return this.displacement_}getDeclutterMode(){return this.declutterMode_}getAnchor(){return O()}getImage(t){return O()}getHitDetectionImage(){return O()}getPixelRatio(t){return 1}getImageState(){return O()}getImageSize(){return O()}getOrigin(){return O()}getSize(){return O()}setDisplacement(t){this.displacement_=t}setOpacity(t){this.opacity_=t}setRotateWithView(t){this.rotateWithView_=t}setRotation(t){this.rotation_=t}setScale(t){this.scale_=t,this.scaleArray_=H(t)}listenImageChange(t){O()}load(){O()}unlistenImageChange(t){O()}ready(){return Promise.resolve()}},gr=Do;var No=class n extends gr{constructor(t){super({opacity:1,rotateWithView:t.rotateWithView!==void 0?t.rotateWithView:!1,rotation:t.rotation!==void 0?t.rotation:0,scale:t.scale!==void 0?t.scale:1,displacement:t.displacement!==void 0?t.displacement:[0,0],declutterMode:t.declutterMode}),this.hitDetectionCanvas_=null,this.fill_=t.fill!==void 0?t.fill:null,this.origin_=[0,0],this.points_=t.points,this.radius=t.radius,this.radius2_=t.radius2,this.angle_=t.angle!==void 0?t.angle:0,this.stroke_=t.stroke!==void 0?t.stroke:null,this.size_,this.renderOptions_,this.imageState_=this.fill_&&this.fill_.loading()?M.LOADING:M.LOADED,this.imageState_===M.LOADING&&this.ready().then(()=>this.imageState_=M.LOADED),this.render()}clone(){let t=this.getScale(),e=new n({fill:this.getFill()?this.getFill().clone():void 0,points:this.getPoints(),radius:this.getRadius(),radius2:this.getRadius2(),angle:this.getAngle(),stroke:this.getStroke()?this.getStroke().clone():void 0,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:Array.isArray(t)?t.slice():t,displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()});return e.setOpacity(this.getOpacity()),e}getAnchor(){let t=this.size_,e=this.getDisplacement(),i=this.getScaleArray();return[t[0]/2-e[0]/i[0],t[1]/2+e[1]/i[1]]}getAngle(){return this.angle_}getFill(){return this.fill_}setFill(t){this.fill_=t,this.render()}getHitDetectionImage(){return this.hitDetectionCanvas_||(this.hitDetectionCanvas_=this.createHitDetectionCanvas_(this.renderOptions_)),this.hitDetectionCanvas_}getImage(t){let e=this.fill_?.getKey(),i=`${t},${this.angle_},${this.radius},${this.radius2_},${this.points_},${e}`+Object.values(this.renderOptions_).join(","),r=yt.get(i,null)?.getImage(1);if(!r){let s=this.renderOptions_,o=Math.ceil(s.size*t),a=J(o,o);this.draw_(s,a,t),r=a.canvas;let l=new Qc(r,void 0,null,M.LOADED,null);yt.set(i,null,l),createImageBitmap(r).then(c=>{l.setImage(c)})}return r}getPixelRatio(t){return t}getImageSize(){return this.size_}getImageState(){return this.imageState_}getOrigin(){return this.origin_}getPoints(){return this.points_}getRadius(){return this.radius}setRadius(t){this.radius!==t&&(this.radius=t,this.render())}getRadius2(){return this.radius2_}setRadius2(t){this.radius2_!==t&&(this.radius2_=t,this.render())}getSize(){return this.size_}getStroke(){return this.stroke_}setStroke(t){this.stroke_=t,this.render()}listenImageChange(t){}load(){}unlistenImageChange(t){}calculateLineJoinSize_(t,e,i){if(e===0||this.points_===1/0||t!=="bevel"&&t!=="miter")return e;let r=this.radius,s=this.radius2_===void 0?r:this.radius2_;if(r<s){let S=r;r=s,s=S}let o=this.radius2_===void 0?this.points_:this.points_*2,a=2*Math.PI/o,l=s*Math.sin(a),c=Math.sqrt(s*s-l*l),h=r-c,u=Math.sqrt(l*l+h*h),f=u/l;if(t==="miter"&&f<=i)return f*e;let d=e/2/f,g=e/2*(h/u),_=Math.sqrt((r+d)*(r+d)+g*g)-r;if(this.radius2_===void 0||t==="bevel")return _*2;let w=r*Math.sin(a),x=Math.sqrt(r*r-w*w),C=s-x,E=Math.sqrt(w*w+C*C)/w;if(E<=i){let S=E*e/2-s-r;return 2*Math.max(_,S)}return _*2}createRenderOptions(){let t=Po,e=Oo,i=0,r=null,s=0,o,a=0;this.stroke_&&(o=Mo(this.stroke_.getColor()??eh),a=this.stroke_.getWidth()??nh,r=this.stroke_.getLineDash(),s=this.stroke_.getLineDashOffset()??0,e=this.stroke_.getLineJoin()??Oo,t=this.stroke_.getLineCap()??Po,i=this.stroke_.getMiterLimit()??th);let l=this.calculateLineJoinSize_(e,a,i),c=Math.max(this.radius,this.radius2_||0),h=Math.ceil(2*c+l);return{strokeStyle:o,strokeWidth:a,size:h,lineCap:t,lineDash:r,lineDashOffset:s,lineJoin:e,miterLimit:i}}render(){this.renderOptions_=this.createRenderOptions();let t=this.renderOptions_.size;this.hitDetectionCanvas_=null,this.size_=[t,t]}draw_(t,e,i){if(e.scale(i,i),e.translate(t.size/2,t.size/2),this.createPath_(e),this.fill_){let r=this.fill_.getColor();r===null&&(r=bo),e.fillStyle=Mo(r),e.fill()}t.strokeStyle&&(e.strokeStyle=t.strokeStyle,e.lineWidth=t.strokeWidth,t.lineDash&&(e.setLineDash(t.lineDash),e.lineDashOffset=t.lineDashOffset),e.lineCap=t.lineCap,e.lineJoin=t.lineJoin,e.miterLimit=t.miterLimit,e.stroke())}createHitDetectionCanvas_(t){let e;if(this.fill_){let i=this.fill_.getColor(),r=0;typeof i=="string"&&(i=kt(i)),i===null?r=1:Array.isArray(i)&&(r=i.length===4?i[3]:1),r===0&&(e=J(t.size,t.size),this.drawHitDetectionCanvas_(t,e))}return e?e.canvas:this.getImage(1)}createPath_(t){let e=this.points_,i=this.radius;if(e===1/0)t.arc(0,0,i,0,2*Math.PI);else{let r=this.radius2_===void 0?i:this.radius2_;this.radius2_!==void 0&&(e*=2);let s=this.angle_-Math.PI/2,o=2*Math.PI/e;for(let a=0;a<e;a++){let l=s+a*o,c=a%2===0?i:r;t.lineTo(c*Math.cos(l),c*Math.sin(l))}t.closePath()}}drawHitDetectionCanvas_(t,e){e.translate(t.size/2,t.size/2),this.createPath_(e),e.fillStyle=bo,e.fill(),t.strokeStyle&&(e.strokeStyle=t.strokeStyle,e.lineWidth=t.strokeWidth,t.lineDash&&(e.setLineDash(t.lineDash),e.lineDashOffset=t.lineDashOffset),e.lineJoin=t.lineJoin,e.miterLimit=t.miterLimit,e.stroke())}ready(){return this.fill_?this.fill_.ready():Promise.resolve()}},mr=No;var Fo=class n extends mr{constructor(t){t=t||{radius:5},super({points:1/0,fill:t.fill,radius:t.radius,stroke:t.stroke,scale:t.scale!==void 0?t.scale:1,rotation:t.rotation!==void 0?t.rotation:0,rotateWithView:t.rotateWithView!==void 0?t.rotateWithView:!1,displacement:t.displacement!==void 0?t.displacement:[0,0],declutterMode:t.declutterMode})}clone(){let t=this.getScale(),e=new n({fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,radius:this.getRadius(),scale:Array.isArray(t)?t.slice():t,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()});return e.setOpacity(this.getOpacity()),e}},pr=Fo;var zo=class n{constructor(t){t=t||{},this.patternImage_=null,this.color_=null,t.color!==void 0&&this.setColor(t.color)}clone(){let t=this.getColor();return new n({color:Array.isArray(t)?t.slice():t||void 0})}getColor(){return this.color_}setColor(t){if(t!==null&&typeof t=="object"&&"src"in t){let e=Me(null,t.src,{crossOrigin:"anonymous"},void 0,t.offset?null:t.color?t.color:null,!(t.offset&&t.size));e.ready().then(()=>{this.patternImage_=null}),e.getImageState()===M.IDLE&&e.load(),e.getImageState()===M.LOADING&&(this.patternImage_=e)}this.color_=t}getKey(){let t=this.getColor();return t?t instanceof CanvasPattern||t instanceof CanvasGradient?B(t):typeof t=="object"&&"src"in t?t.src+":"+t.offset:kt(t).toString():""}loading(){return!!this.patternImage_}ready(){return this.patternImage_?this.patternImage_.ready():Promise.resolve()}},Ye=zo;function rh(n,t,e,i){return e!==void 0&&i!==void 0?[e/n,i/t]:e!==void 0?e/n:i!==void 0?i/t:1}var ko=class n extends gr{constructor(t){t=t||{};let e=t.opacity!==void 0?t.opacity:1,i=t.rotation!==void 0?t.rotation:0,r=t.scale!==void 0?t.scale:1,s=t.rotateWithView!==void 0?t.rotateWithView:!1;super({opacity:e,rotation:i,scale:r,displacement:t.displacement!==void 0?t.displacement:[0,0],rotateWithView:s,declutterMode:t.declutterMode}),this.anchor_=t.anchor!==void 0?t.anchor:[.5,.5],this.normalizedAnchor_=null,this.anchorOrigin_=t.anchorOrigin!==void 0?t.anchorOrigin:"top-left",this.anchorXUnits_=t.anchorXUnits!==void 0?t.anchorXUnits:"fraction",this.anchorYUnits_=t.anchorYUnits!==void 0?t.anchorYUnits:"fraction",this.crossOrigin_=t.crossOrigin!==void 0?t.crossOrigin:null,this.referrerPolicy_=t.referrerPolicy;let o=t.img!==void 0?t.img:null,a=t.src;P(!(a!==void 0&&o),"`image` and `src` cannot be provided at the same time"),(a===void 0||a.length===0)&&o&&(a=o.src||B(o)),P(a!==void 0&&a.length>0,"A defined and non-empty `src` or `image` must be provided"),P(!((t.width!==void 0||t.height!==void 0)&&t.scale!==void 0),"`width` or `height` cannot be provided together with `scale`");let l;if(t.src!==void 0?l=M.IDLE:o!==void 0&&("complete"in o?o.complete?l=o.src?M.LOADED:M.IDLE:l=M.LOADING:l=M.LOADED),this.color_=t.color!==void 0?kt(t.color):null,this.iconImage_=Me(o,a,{crossOrigin:this.crossOrigin_,referrerPolicy:this.referrerPolicy_},l,this.color_),this.offset_=t.offset!==void 0?t.offset:[0,0],this.offsetOrigin_=t.offsetOrigin!==void 0?t.offsetOrigin:"top-left",this.origin_=null,this.size_=t.size!==void 0?t.size:null,this.initialOptions_,t.width!==void 0||t.height!==void 0){let c,h;if(t.size)[c,h]=t.size;else{let u=this.getImage(1);if(u.width&&u.height)c=u.width,h=u.height;else if(u instanceof HTMLImageElement){this.initialOptions_=t;let f=()=>{if(this.unlistenImageChange(f),!this.initialOptions_)return;let d=this.iconImage_.getSize();this.setScale(rh(d[0],d[1],t.width,t.height))};this.listenImageChange(f);return}}c!==void 0&&this.setScale(rh(c,h,t.width,t.height))}}clone(){let t,e,i;return this.initialOptions_?(e=this.initialOptions_.width,i=this.initialOptions_.height):(t=this.getScale(),t=Array.isArray(t)?t.slice():t),new n({anchor:this.anchor_.slice(),anchorOrigin:this.anchorOrigin_,anchorXUnits:this.anchorXUnits_,anchorYUnits:this.anchorYUnits_,color:this.color_&&this.color_.slice?this.color_.slice():this.color_||void 0,crossOrigin:this.crossOrigin_,referrerPolicy:this.referrerPolicy_,offset:this.offset_.slice(),offsetOrigin:this.offsetOrigin_,opacity:this.getOpacity(),rotateWithView:this.getRotateWithView(),rotation:this.getRotation(),scale:t,width:e,height:i,size:this.size_!==null?this.size_.slice():void 0,src:this.getSrc(),displacement:this.getDisplacement().slice(),declutterMode:this.getDeclutterMode()})}getAnchor(){let t=this.normalizedAnchor_;if(!t){t=this.anchor_;let r=this.getSize();if(this.anchorXUnits_=="fraction"||this.anchorYUnits_=="fraction"){if(!r)return null;t=this.anchor_.slice(),this.anchorXUnits_=="fraction"&&(t[0]*=r[0]),this.anchorYUnits_=="fraction"&&(t[1]*=r[1])}if(this.anchorOrigin_!="top-left"){if(!r)return null;t===this.anchor_&&(t=this.anchor_.slice()),(this.anchorOrigin_=="top-right"||this.anchorOrigin_=="bottom-right")&&(t[0]=-t[0]+r[0]),(this.anchorOrigin_=="bottom-left"||this.anchorOrigin_=="bottom-right")&&(t[1]=-t[1]+r[1])}this.normalizedAnchor_=t}let e=this.getDisplacement(),i=this.getScaleArray();return[t[0]-e[0]/i[0],t[1]+e[1]/i[1]]}setAnchor(t){this.anchor_=t,this.normalizedAnchor_=null}getColor(){return this.color_}setColor(t){let e=t?kt(t):null;if(this.color_===e||this.color_&&e&&this.color_.length===e.length&&this.color_.every((o,a)=>o===e[a]))return;this.color_=e;let i=this.getSrc(),r=i!==void 0?null:this.getHitDetectionImage(),s=i!==void 0?M.IDLE:this.iconImage_.getImageState();this.iconImage_=Me(r,i,{crossOrigin:this.crossOrigin_,referrerPolicy:this.referrerPolicy_},s,this.color_)}getImage(t){return this.iconImage_.getImage(t)}getPixelRatio(t){return this.iconImage_.getPixelRatio(t)}getImageSize(){return this.iconImage_.getSize()}getImageState(){return this.iconImage_.getImageState()}getHitDetectionImage(){return this.iconImage_.getHitDetectionImage()}getOrigin(){if(this.origin_)return this.origin_;let t=this.offset_;if(this.offsetOrigin_!="top-left"){let e=this.getSize(),i=this.iconImage_.getSize();if(!e||!i)return null;t=t.slice(),(this.offsetOrigin_=="top-right"||this.offsetOrigin_=="bottom-right")&&(t[0]=i[0]-e[0]-t[0]),(this.offsetOrigin_=="bottom-left"||this.offsetOrigin_=="bottom-right")&&(t[1]=i[1]-e[1]-t[1])}return this.origin_=t,this.origin_}getSrc(){return this.iconImage_.getSrc()}setSrc(t){this.iconImage_=Me(null,t,{crossOrigin:this.crossOrigin_,referrerPolicy:this.referrerPolicy_},M.IDLE,this.color_)}getSize(){return this.size_?this.size_:this.iconImage_.getSize()}getWidth(){let t=this.getScaleArray();if(this.size_)return this.size_[0]*t[0];if(this.iconImage_.getImageState()==M.LOADED)return this.iconImage_.getSize()[0]*t[0]}getHeight(){let t=this.getScaleArray();if(this.size_)return this.size_[1]*t[1];if(this.iconImage_.getImageState()==M.LOADED)return this.iconImage_.getSize()[1]*t[1]}setScale(t){delete this.initialOptions_,super.setScale(t)}listenImageChange(t){this.iconImage_.addEventListener(A.CHANGE,t)}load(){this.iconImage_.load()}unlistenImageChange(t){this.iconImage_.removeEventListener(A.CHANGE,t)}ready(){return this.iconImage_.ready()}},sh=ko;var Go=class n{constructor(t){t=t||{},this.color_=t.color!==void 0?t.color:null,this.lineCap_=t.lineCap,this.lineDash_=t.lineDash!==void 0?t.lineDash:null,this.lineDashOffset_=t.lineDashOffset,this.lineJoin_=t.lineJoin,this.miterLimit_=t.miterLimit,this.offset_=t.offset,this.width_=t.width}clone(){let t=this.getColor();return new n({color:Array.isArray(t)?t.slice():t||void 0,lineCap:this.getLineCap(),lineDash:this.getLineDash()?this.getLineDash().slice():void 0,lineDashOffset:this.getLineDashOffset(),lineJoin:this.getLineJoin(),miterLimit:this.getMiterLimit(),offset:this.getOffset(),width:this.getWidth()})}getColor(){return this.color_}getLineCap(){return this.lineCap_}getLineDash(){return this.lineDash_}getLineDashOffset(){return this.lineDashOffset_}getLineJoin(){return this.lineJoin_}getMiterLimit(){return this.miterLimit_}getOffset(){return this.offset_}getWidth(){return this.width_}setColor(t){this.color_=t}setLineCap(t){this.lineCap_=t}setLineDash(t){this.lineDash_=t}setLineDashOffset(t){this.lineDashOffset_=t}setLineJoin(t){this.lineJoin_=t}setMiterLimit(t){this.miterLimit_=t}setOffset(t){this.offset_=t}setWidth(t){this.width_=t}},_r=Go;var yr=class n{constructor(t){t=t||{},this.geometry_=null,this.geometryFunction_=oh,t.geometry!==void 0&&this.setGeometry(t.geometry),this.fill_=t.fill!==void 0?t.fill:null,this.image_=t.image!==void 0?t.image:null,this.renderer_=t.renderer!==void 0?t.renderer:null,this.hitDetectionRenderer_=t.hitDetectionRenderer!==void 0?t.hitDetectionRenderer:null,this.stroke_=t.stroke!==void 0?t.stroke:null,this.text_=t.text!==void 0?t.text:null,this.zIndex_=t.zIndex}clone(){let t=this.getGeometry();return t&&typeof t=="object"&&(t=t.clone()),new n({geometry:t??void 0,fill:this.getFill()?this.getFill().clone():void 0,image:this.getImage()?this.getImage().clone():void 0,renderer:this.getRenderer()??void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,text:this.getText()?this.getText().clone():void 0,zIndex:this.getZIndex()})}getRenderer(){return this.renderer_}setRenderer(t){this.renderer_=t}setHitDetectionRenderer(t){this.hitDetectionRenderer_=t}getHitDetectionRenderer(){return this.hitDetectionRenderer_}getGeometry(){return this.geometry_}getGeometryFunction(){return this.geometryFunction_}getFill(){return this.fill_}setFill(t){this.fill_=t}getImage(){return this.image_}setImage(t){this.image_=t}getStroke(){return this.stroke_}setStroke(t){this.stroke_=t}getText(){return this.text_}setText(t){this.text_=t}getZIndex(){return this.zIndex_}setGeometry(t){typeof t=="function"?this.geometryFunction_=t:typeof t=="string"?this.geometryFunction_=function(e){return e.get(t)}:t?t!==void 0&&(this.geometryFunction_=function(){return t}):this.geometryFunction_=oh,this.geometry_=t}setZIndex(t){this.zIndex_=t}};function ah(n){let t;if(typeof n=="function")t=n;else{let e;Array.isArray(n)?e=n:(P(typeof n.getZIndex=="function","Expected an `Style` or an array of `Style`"),e=[n]),t=function(){return e}}return t}var Uo=null;function Xo(n,t){if(!Uo){let e=new Ye({color:"rgba(255,255,255,0.4)"}),i=new _r({color:"#3399CC",width:1.25});Uo=[new yr({image:new pr({fill:e,stroke:i,radius:5}),fill:e,stroke:i})]}return Uo}function oh(n){return n.getGeometry()}var In=yr;var jf="#333",Vo=class n{constructor(t){t=t||{},this.font_=t.font,this.rotation_=t.rotation,this.rotateWithView_=t.rotateWithView,this.keepUpright_=t.keepUpright,this.scale_=t.scale,this.scaleArray_=H(t.scale!==void 0?t.scale:1),this.text_=t.text,this.textAlign_=t.textAlign,this.justify_=t.justify,this.repeat_=t.repeat,this.textBaseline_=t.textBaseline,this.fill_=t.fill!==void 0?t.fill:new Ye({color:jf}),this.maxAngle_=t.maxAngle!==void 0?t.maxAngle:Math.PI/4,this.placement_=t.placement!==void 0?t.placement:"point",this.overflow_=!!t.overflow,this.stroke_=t.stroke!==void 0?t.stroke:null,this.offsetX_=t.offsetX!==void 0?t.offsetX:0,this.offsetY_=t.offsetY!==void 0?t.offsetY:0,this.backgroundFill_=t.backgroundFill?t.backgroundFill:null,this.backgroundStroke_=t.backgroundStroke?t.backgroundStroke:null,this.padding_=t.padding===void 0?null:t.padding,this.declutterMode_=t.declutterMode}clone(){let t=this.getScale();return new n({font:this.getFont(),placement:this.getPlacement(),repeat:this.getRepeat(),maxAngle:this.getMaxAngle(),overflow:this.getOverflow(),rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),keepUpright:this.getKeepUpright(),scale:Array.isArray(t)?t.slice():t,text:this.getText(),textAlign:this.getTextAlign(),justify:this.getJustify(),textBaseline:this.getTextBaseline(),fill:this.getFill()instanceof Ye?this.getFill().clone():this.getFill(),stroke:this.getStroke()?this.getStroke().clone():void 0,offsetX:this.getOffsetX(),offsetY:this.getOffsetY(),backgroundFill:this.getBackgroundFill()?this.getBackgroundFill().clone():void 0,backgroundStroke:this.getBackgroundStroke()?this.getBackgroundStroke().clone():void 0,padding:this.getPadding()||void 0,declutterMode:this.getDeclutterMode()})}getOverflow(){return this.overflow_}getFont(){return this.font_}getMaxAngle(){return this.maxAngle_}getPlacement(){return this.placement_}getRepeat(){return this.repeat_}getOffsetX(){return this.offsetX_}getOffsetY(){return this.offsetY_}getFill(){return this.fill_}getRotateWithView(){return this.rotateWithView_}getKeepUpright(){return this.keepUpright_}getRotation(){return this.rotation_}getScale(){return this.scale_}getScaleArray(){return this.scaleArray_}getStroke(){return this.stroke_}getText(){return this.text_}getTextAlign(){return this.textAlign_}getJustify(){return this.justify_}getTextBaseline(){return this.textBaseline_}getBackgroundFill(){return this.backgroundFill_}getBackgroundStroke(){return this.backgroundStroke_}getPadding(){return this.padding_}getDeclutterMode(){return this.declutterMode_}setOverflow(t){this.overflow_=t}setFont(t){this.font_=t}setMaxAngle(t){this.maxAngle_=t}setOffsetX(t){this.offsetX_=t}setOffsetY(t){this.offsetY_=t}setPlacement(t){this.placement_=t}setRepeat(t){this.repeat_=t}setRotateWithView(t){this.rotateWithView_=t}setKeepUpright(t){this.keepUpright_=t}setFill(t){this.fill_=t}setRotation(t){this.rotation_=t}setScale(t){this.scale_=t,this.scaleArray_=H(t!==void 0?t:1)}setStroke(t){this.stroke_=t}setText(t){this.text_=t}setTextAlign(t){this.textAlign_=t}setJustify(t){this.justify_=t}setTextBaseline(t){this.textBaseline_=t}setBackgroundFill(t){this.backgroundFill_=t}setBackgroundStroke(t){this.backgroundStroke_=t}setPadding(t){this.padding_=t}},lh=Vo;function Wf(n){return!0}function Yf(n,t){t=t??ur();let e=Bf(n,t),i=Ao();return function(r,s){if(i.properties=r.getPropertiesInternal(),i.resolution=s,t.featureId){let o=r.getId();o!==void 0?i.featureId=o:i.featureId=null}return t.geometryType&&(i.geometryType=fr(r.getGeometry())),e(i)}}function ch(n,t){t=t??ur();let e=n.length,i=new Array(e);for(let o=0;o<e;++o)i[o]=Ko(n[o],t);let r=Ao(),s=new Array(e);return function(o,a){if(r.properties=o.getPropertiesInternal(),r.resolution=a,t.featureId){let c=o.getId();c!==void 0?r.featureId=c:r.featureId=null}t.geometryType&&(r.geometryType=fr(o.getGeometry()));let l=0;for(let c=0;c<e;++c){let h=i[c](r);h&&(s[l]=h,l+=1)}return s.length=l,s}}function dh(n,t){if(t=t??ur(),!Array.isArray(n))return ch([n],t);let e=n.length;if("style"in n[0]){let s=new Array(e);for(let o=0;o<e;++o){let a=n[o];if(!("style"in a))throw new Error("Expected a list of rules with a style property");s[o]=a}return Yf(s,t)}return ch(n,t)}function Bf(n,t){let e=n.length,i=new Array(e);for(let r=0;r<e;++r){let s=n[r],o="filter"in s?Vt(s.filter,pt,t):Wf,a;if(Array.isArray(s.style)){let l=s.style.length;a=new Array(l);for(let c=0;c<l;++c)a[c]=Ko(s.style[c],t)}else a=[Ko(s.style,t)];i[r]={filter:o,styles:a}}return function(r){let s=[],o=!1;for(let a=0;a<e;++a){let l=i[a].filter;if(l(r)&&!(n[a].else&&o)){o=!0;for(let c of i[a].styles){let h=c(r);h&&s.push(h)}}}return s}}function Ko(n,t){let e=hi(n,"",t),i=ui(n,"",t),r=Zf(n,t),s=qf(n,t),o=ut(n,"z-index",t);if(!e&&!i&&!r&&!s&&!Si(n))throw new Error("No fill, stroke, point, or text symbolizer properties in style: "+JSON.stringify(n));let a=new In;return function(l){let c=!0;if(e){let h=e(l);h&&(c=!1),a.setFill(h)}if(i){let h=i(l);h&&(c=!1),a.setStroke(h)}if(r){let h=r(l);h&&(c=!1),a.setText(h)}if(s){let h=s(l);h&&(c=!1),a.setImage(h)}return o&&a.setZIndex(o(l)),c?null:a}}function hi(n,t,e){let i;if(t+"fill-pattern-src"in n)i=Qf(n,t+"fill-",e);else{if(n[t+"fill-color"]==="none")return s=>null;i=xr(n,t+"fill-color",e)}if(!i)return null;let r=new Ye;return function(s){let o=i(s);return o===or?null:(r.setColor(o),r)}}function ui(n,t,e){let i=ut(n,t+"stroke-width",e),r=xr(n,t+"stroke-color",e);if(!i&&!r)return null;let s=de(n,t+"stroke-line-cap",e),o=de(n,t+"stroke-line-join",e),a=gh(n,t+"stroke-line-dash",e),l=ut(n,t+"stroke-line-dash-offset",e),c=ut(n,t+"stroke-miter-limit",e),h=ut(n,t+"stroke-offset",e),u=new _r;return function(f){if(r){let d=r(f);if(d===or)return null;u.setColor(d)}if(i&&u.setWidth(i(f)),s){let d=s(f);if(d!=="butt"&&d!=="round"&&d!=="square")throw new Error("Expected butt, round, or square line cap");u.setLineCap(d)}if(o){let d=o(f);if(d!=="bevel"&&d!=="round"&&d!=="miter")throw new Error("Expected bevel, round, or miter line join");u.setLineJoin(d)}return a&&u.setLineDash(a(f)),l&&u.setLineDashOffset(l(f)),c&&u.setMiterLimit(c(f)),h&&u.setOffset(h(f)),u}}function Zf(n,t){let e="text-",i=de(n,e+"value",t);if(!i)return null;let r=hi(n,e,t),s=hi(n,e+"background-",t),o=ui(n,e,t),a=ui(n,e+"background-",t),l=de(n,e+"font",t),c=ut(n,e+"max-angle",t),h=ut(n,e+"offset-x",t),u=ut(n,e+"offset-y",t),f=An(n,e+"overflow",t),d=de(n,e+"placement",t),g=ut(n,e+"repeat",t),m=wr(n,e+"scale",t),_=An(n,e+"rotate-with-view",t),w=ut(n,e+"rotation",t),x=de(n,e+"align",t),C=de(n,e+"justify",t),y=de(n,e+"baseline",t),E=An(n,e+"keep-upright",t),S=gh(n,e+"padding",t),z=Cr(n,e+"declutter-mode"),T=new lh({declutterMode:z});return function(v){if(T.setText(i(v)),r&&T.setFill(r(v)),s&&T.setBackgroundFill(s(v)),o&&T.setStroke(o(v)),a&&T.setBackgroundStroke(a(v)),l&&T.setFont(l(v)),c&&T.setMaxAngle(c(v)),h&&T.setOffsetX(h(v)),u&&T.setOffsetY(u(v)),f&&T.setOverflow(f(v)),d){let R=d(v);if(R!=="point"&&R!=="line")throw new Error("Expected point or line for text-placement");T.setPlacement(R)}if(g&&T.setRepeat(g(v)),m&&T.setScale(m(v)),_&&T.setRotateWithView(_(v)),w&&T.setRotation(w(v)),x){let R=x(v);if(R!=="left"&&R!=="center"&&R!=="right"&&R!=="end"&&R!=="start")throw new Error("Expected left, right, center, start, or end for text-align");T.setTextAlign(R)}if(C){let R=C(v);if(R!=="left"&&R!=="right"&&R!=="center")throw new Error("Expected left, right, or center for text-justify");T.setJustify(R)}if(y){let R=y(v);if(R!=="bottom"&&R!=="top"&&R!=="middle"&&R!=="alphabetic"&&R!=="hanging")throw new Error("Expected bottom, top, middle, alphabetic, or hanging for text-baseline");T.setTextBaseline(R)}return S&&T.setPadding(S(v)),E&&T.setKeepUpright(E(v)),T}}function qf(n,t){return"icon-src"in n?Hf(n,t):"shape-points"in n?$f(n,t):"circle-radius"in n?Jf(n,t):null}function Hf(n,t){let e="icon-",i=e+"src",r=mh(n[i],i),s=Er(n,e+"anchor",t),o=wr(n,e+"scale",t),a=ut(n,e+"opacity",t),l=Er(n,e+"displacement",t),c=ut(n,e+"rotation",t),h=An(n,e+"rotate-with-view",t),u=uh(n,e+"anchor-origin"),f=fh(n,e+"anchor-x-units"),d=fh(n,e+"anchor-y-units"),g=ge(n,e+"color"),m,_=null;g!==void 0&&(Array.isArray(g)&&g.length>0&&typeof g[0]=="string"?_=xr(n,e+"color",t):m=ph(g,e+"color"));let w=ed(n,e+"cross-origin"),x=nd(n,e+"offset"),C=uh(n,e+"offset-origin"),y=jo(n,e+"width"),E=jo(n,e+"height"),S=td(n,e+"size"),z=Cr(n,e+"declutter-mode"),T={src:r,anchorOrigin:u,anchorXUnits:f,anchorYUnits:d,crossOrigin:w,offset:x,offsetOrigin:C,height:E,width:y,size:S,declutterMode:z},v=null;return function(R){if(v)_&&v.setColor(_(R));else{let U=_?_(R):m;v=new sh(U!==void 0?Object.assign({},T,{color:U}):Object.assign({},T))}return a&&v.setOpacity(a(R)),l&&v.setDisplacement(l(R)),c&&v.setRotation(c(R)),h&&v.setRotateWithView(h(R)),o&&v.setScale(o(R)),s&&v.setAnchor(s(R)),v}}function $f(n,t){let e="shape-",i=e+"points",r=e+"radius",s=Wo(n[i],i);if(!(r in n))throw new Error(`Expected a number for ${r}`);let o=ut(n,r,t),a=typeof n[r]=="number"?n[r]:5,l=e+"radius2",c=ut(n,l,t),h=typeof n[l]=="number"?n[l]:void 0,u=hi(n,e,t),f=ui(n,e,t),d=wr(n,e+"scale",t),g=Er(n,e+"displacement",t),m=ut(n,e+"rotation",t),_=An(n,e+"rotate-with-view",t),w=jo(n,e+"angle"),x=Cr(n,e+"declutter-mode"),C=new mr({points:s,radius:a,radius2:h,angle:w,declutterMode:x});return function(y){return o&&C.setRadius(o(y)),c&&C.setRadius2(c(y)),u&&C.setFill(u(y)),f&&C.setStroke(f(y)),g&&C.setDisplacement(g(y)),m&&C.setRotation(m(y)),_&&C.setRotateWithView(_(y)),d&&C.setScale(d(y)),C}}function Jf(n,t){let e="circle-",i=hi(n,e,t),r=ui(n,e,t),s=ut(n,e+"radius",t),o=wr(n,e+"scale",t),a=Er(n,e+"displacement",t),l=ut(n,e+"rotation",t),c=An(n,e+"rotate-with-view",t),h=Cr(n,e+"declutter-mode"),u=new pr({radius:5,declutterMode:h});return function(f){return s&&u.setRadius(s(f)),i&&u.setFill(i(f)),r&&u.setStroke(r(f)),a&&u.setDisplacement(a(f)),l&&u.setRotation(l(f)),c&&u.setRotateWithView(c(f)),o&&u.setScale(o(f)),u}}function ge(n,t){if(!(t in n))return;let e=n[t];return e===void 0?void 0:e}function ut(n,t,e){let i=ge(n,t);if(i===void 0)return;let r=Vt(i,F,e);return function(s){return Wo(r(s),t)}}function de(n,t,e){let i=ge(n,t);if(i===void 0)return null;let r=Vt(i,_t,e);return function(s){return mh(r(s),t)}}function Qf(n,t,e){let i=de(n,t+"pattern-src",e),r=hh(n,t+"pattern-offset",e),s=hh(n,t+"pattern-size",e),o=xr(n,t+"color",e);return function(a){return{src:i(a),offset:r&&r(a),size:s&&s(a),color:o&&o(a)}}}function An(n,t,e){let i=ge(n,t);if(i===void 0)return null;let r=Vt(i,pt,e);return function(s){let o=r(s);if(typeof o!="boolean")throw new Error(`Expected a boolean for ${t}`);return o}}function xr(n,t,e){let i=ge(n,t);if(i===void 0)return null;let r=Vt(i,vt,e);return function(s){return ph(r(s),t)}}function gh(n,t,e){let i=ge(n,t);if(i===void 0)return null;if(Array.isArray(i)&&(i.length===0||typeof i[0]!="string")){let s=i.map((o,a)=>{if(typeof o=="number")return()=>o;let l=Vt(o,F,e);return function(c){return Wo(l(c),`${t}[${a}]`)}});return function(o){let a=new Array(s.length);for(let l=0;l<s.length;++l)a[l]=s[l](o);return a}}let r=Vt(i,fe,e);return function(s){return fi(r(s),t)}}function Er(n,t,e){let i=ge(n,t);if(i===void 0)return null;let r=Vt(i,fe,e);return function(s){let o=fi(r(s),t);if(o.length!==2)throw new Error(`Expected two numbers for ${t}`);return o}}function hh(n,t,e){let i=ge(n,t);if(i===void 0)return null;let r=Vt(i,fe,e);return function(s){return _h(r(s),t)}}function wr(n,t,e){let i=ge(n,t);if(i===void 0)return null;let r=Vt(i,fe|F,e);return function(s){return id(r(s),t)}}function jo(n,t){let e=n[t];if(e!==void 0){if(typeof e!="number")throw new Error(`Expected a number for ${t}`);return e}}function td(n,t){let e=n[t];if(e!==void 0){if(typeof e=="number")return H(e);if(!Array.isArray(e))throw new Error(`Expected a number or size array for ${t}`);if(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number")throw new Error(`Expected a number or size array for ${t}`);return e}}function ed(n,t){let e=n[t];if(e!==void 0){if(typeof e!="string")throw new Error(`Expected a string for ${t}`);return e}}function uh(n,t){let e=n[t];if(e!==void 0){if(e!=="bottom-left"&&e!=="bottom-right"&&e!=="top-left"&&e!=="top-right")throw new Error(`Expected bottom-left, bottom-right, top-left, or top-right for ${t}`);return e}}function fh(n,t){let e=n[t];if(e!==void 0){if(e!=="pixels"&&e!=="fraction")throw new Error(`Expected pixels or fraction for ${t}`);return e}}function nd(n,t){let e=n[t];if(e!==void 0)return fi(e,t)}function Cr(n,t){let e=n[t];if(e!==void 0){if(typeof e!="string")throw new Error(`Expected a string for ${t}`);if(e!=="declutter"&&e!=="obstacle"&&e!=="none")throw new Error(`Expected declutter, obstacle, or none for ${t}`);return e}}function fi(n,t){if(!Array.isArray(n))throw new Error(`Expected an array for ${t}`);let e=n.length;for(let i=0;i<e;++i)if(typeof n[i]!="number")throw new Error(`Expected an array of numbers for ${t}`);return n}function mh(n,t){if(typeof n!="string")throw new Error(`Expected a string for ${t}`);return n}function Wo(n,t){if(typeof n!="number")throw new Error(`Expected a number for ${t}`);return n}function ph(n,t){if(typeof n=="string")return n;let e=fi(n,t),i=e.length;if(i<3||i>4)throw new Error(`Expected a color with 3 or 4 values for ${t}`);return e}function _h(n,t){let e=fi(n,t);if(e.length!==2)throw new Error(`Expected an array of two numbers for ${t}`);return e}function id(n,t){return typeof n=="number"?n:_h(n,t)}var yh={RENDER_ORDER:"renderOrder"},Yo=class extends Ke{constructor(t){t=t||{};let e=Object.assign({},t);delete e.style,delete e.renderBuffer,delete e.updateWhileAnimating,delete e.updateWhileInteracting,super(e),this.declutter_=t.declutter?String(t.declutter):void 0,this.renderBuffer_=t.renderBuffer!==void 0?t.renderBuffer:100,this.style_=null,this.styleFunction_=void 0,this.setStyle(t.style),this.updateWhileAnimating_=t.updateWhileAnimating!==void 0?t.updateWhileAnimating:!1,this.updateWhileInteracting_=t.updateWhileInteracting!==void 0?t.updateWhileInteracting:!1}getDeclutter(){return this.declutter_}getFeatures(t){return super.getFeatures(t)}getRenderBuffer(){return this.renderBuffer_}getRenderOrder(){return this.get(yh.RENDER_ORDER)}getStyle(){return this.style_}getStyleFunction(){return this.styleFunction_}getUpdateWhileAnimating(){return this.updateWhileAnimating_}getUpdateWhileInteracting(){return this.updateWhileInteracting_}renderDeclutter(t,e){let i=this.getDeclutter();i in t.declutter||(t.declutter[i]=new ni(9)),this.getRenderer().renderDeclutter(t,e)}setRenderOrder(t){this.set(yh.RENDER_ORDER,t)}setStyle(t){this.style_=t===void 0?Xo:t;let e=rd(t);this.styleFunction_=t===null?void 0:ah(e),this.changed()}setDeclutter(t){this.declutter_=t?String(t):void 0,this.changed()}};function rd(n){if(n===void 0)return Xo;if(!n)return null;if(typeof n=="function"||n instanceof In)return n;if(Array.isArray(n)&&n.length===0)return[];if(Array.isArray(n)&&n[0]instanceof In){let e=n.length,i=new Array(e);for(let r=0;r<e;++r){let s=n[r];if(!(s instanceof In))throw new Error("Expected a list of style instances");i[r]=s}return i}return dh(n)}var Eh=Yo;var Bo=class extends dt{constructor(t,e,i,r){super(t),this.inversePixelTransform=e,this.frameState=i,this.context=r}},vr=Bo;var Zo=class extends Ce{constructor(t){super(),this.map_=t}dispatchRenderEvent(t,e){O()}calculateMatrices2D(t){let e=t.viewState,i=t.coordinateToPixelTransform,r=t.pixelToCoordinateTransform;ce(i,t.size[0]/2,t.size[1]/2,1/e.resolution,-1/e.resolution,-e.rotation,-e.center[0],-e.center[1]),Ui(r,i)}forEachFeatureAtCoordinate(t,e,i,r,s,o,a,l){let c,h=e.viewState;function u(y,E,S,z){return s.call(o,E,y?S:null,z)}let f=h.projection,d=rl(t.slice(),f),g=[[0,0]];if(f.canWrapX()&&r){let y=f.getExtent(),E=k(y);g.push([-E,0],[E,0])}let m=e.layerStatesArray,_=m.length,w=[],x=[];for(let y=0;y<g.length;y++)for(let E=_-1;E>=0;--E){let S=m[E],z=S.layer;if(z.hasRenderer()&&Jn(S,h)&&a.call(l,z)){let T=z.getRenderer(),v=z.getSource();if(T&&v){let R=v.getWrapX()?d:t,U=u.bind(null,S.managed);x[0]=R[0]+g[y][0],x[1]=R[1]+g[y][1],c=T.forEachFeatureAtCoordinate(x,e,i,U,w)}if(c)return c}}if(w.length===0)return;let C=1/w.length;return w.forEach((y,E)=>y.distanceSq+=E*C),w.sort((y,E)=>y.distanceSq-E.distanceSq),w.some(y=>c=y.callback(y.feature,y.layer,y.geometry)),c}hasFeatureAtCoordinate(t,e,i,r,s,o){return this.forEachFeatureAtCoordinate(t,e,i,r,Ne,this,s,o)!==void 0}getMap(){return this.map_}renderFrame(t){O()}scheduleExpireIconCache(t){yt.canExpireCache()&&t.postRenderFunctions.push(sd)}};function sd(n,t){yt.expire()}var xh=Zo;var qo=class extends xh{constructor(t){super(t),this.fontChangeListenerKey_=b(ih,he.PROPERTYCHANGE,t.redrawText,t),this.element_=gt?Mi():document.createElement("div");let e=this.element_.style;e.position="absolute",e.width="100%",e.height="100%",e.zIndex="0",this.element_.className=Ht+" ol-layers";let i=t.getViewport();i&&i.insertBefore(this.element_,i.firstChild||null),this.children_=[],this.renderedVisible_=!0}dispatchRenderEvent(t,e){let i=this.getMap();if(i.hasListener(t)){let r=new vr(t,void 0,e);i.dispatchEvent(r)}}disposeInternal(){G(this.fontChangeListenerKey_),this.element_.remove(),super.disposeInternal()}renderFrame(t){if(!t){this.renderedVisible_&&(this.element_.style.display="none",this.renderedVisible_=!1);return}this.calculateMatrices2D(t),this.dispatchRenderEvent(St.PRECOMPOSE,t);let e=t.layerStatesArray.sort((h,u)=>h.zIndex-u.zIndex);e.some(h=>h.layer instanceof Eh&&h.layer.getDeclutter())&&(t.declutter={});let r=t.viewState;this.children_.length=0;let o=this.getMap().getTargetElement(),a;Lt(o)&&(a=o.getContext("2d"),a.setTransform(1,0,0,1,0,0),a.clearRect(0,0,o.width,o.height));let l=[],c=a?o:null;for(let h=0,u=e.length;h<u;++h){let f=e[h];t.layerIndex=h;let d=f.layer,g=d.getSourceState();if(!Jn(f,r)||g!="ready"&&g!="undefined"){d.unrender();continue}let m=d.render(t,c);m&&(m!==c&&(this.children_.push(m),c=m),l.push(f))}this.declutter(t,l),tl(this.element_,this.children_);for(let h of a?this.children_:[]){let u=h.firstElementChild||h,f=h.style.backgroundColor;if(f&&(!Lt(u)||u.width>0)&&(a.fillStyle=f,a.fillRect(0,0,a.canvas.width,a.canvas.height)),!Lt(u)||u.width===0)continue;a.save();let d=h.style.opacity||u.style.opacity;a.globalAlpha=d===""?1:Number(d);let g=u.style.transform;if(g)a.transform(...Gi(g));else{let m=parseFloat(u.style.width)/u.width,_=parseFloat(u.style.height)/u.height;a.transform(m,0,0,_,0,0)}a.drawImage(u,0,0),a.restore()}this.dispatchRenderEvent(St.POSTCOMPOSE,t),this.renderedVisible_||(this.element_.style.display="",this.renderedVisible_=!0),this.scheduleExpireIconCache(t)}declutter(t,e){if(t.declutter){for(let i=e.length-1;i>=0;--i){let r=e[i],s=r.layer;s.getDeclutter()&&s.renderDeclutter(t,r)}e.forEach(i=>i.layer.renderDeferred(t))}}},wh=qo;function Ch(n){if(n instanceof Ke){n.setMapInternal(null);return}n instanceof $n&&n.getLayers().forEach(Ch)}function vh(n,t){if(n instanceof Ke){n.setMapInternal(t);return}if(n instanceof $n){let e=n.getLayers().getArray();for(let i=0,r=e.length;i<r;++i)vh(e[i],t)}}var Ho=class extends ct{constructor(t){super(),t=t||{},this.on,this.once,this.un;let e=od(t);this.renderComplete_=!1,this.loaded_=!0,this.boundHandleBrowserEvent_=this.handleBrowserEvent.bind(this),this.maxTilesLoading_=t.maxTilesLoading!==void 0?t.maxTilesLoading:16,this.pixelRatio_=t.pixelRatio!==void 0?t.pixelRatio:Za,this.postRenderTimeoutHandle_,this.animationDelayKey_,this.animationDelay_=this.animationDelay_.bind(this),this.coordinateToPixelTransform_=le(),this.pixelToCoordinateTransform_=le(),this.frameIndex_=0,this.frameState_=null,this.previousExtent_=null,this.viewPropertyListenerKey_=null,this.viewChangeListenerKey_=null,this.layerGroupPropertyListenerKeys_=null,gt||(this.viewport_=document.createElement("div"),this.viewport_.className="ol-viewport"+("ontouchstart"in window?" ol-touch":""),this.viewport_.style.position="relative",this.viewport_.style.overflow="hidden",this.viewport_.style.width="100%",this.viewport_.style.height="100%",this.overlayContainer_=document.createElement("div"),this.overlayContainer_.style.position="absolute",this.overlayContainer_.style.zIndex="0",this.overlayContainer_.style.width="100%",this.overlayContainer_.style.height="100%",this.overlayContainer_.style.pointerEvents="none",this.overlayContainer_.className="ol-overlaycontainer",this.viewport_.appendChild(this.overlayContainer_),this.overlayContainerStopEvent_=document.createElement("div"),this.overlayContainerStopEvent_.style.position="absolute",this.overlayContainerStopEvent_.style.zIndex="0",this.overlayContainerStopEvent_.style.width="100%",this.overlayContainerStopEvent_.style.height="100%",this.overlayContainerStopEvent_.style.pointerEvents="none",this.overlayContainerStopEvent_.className="ol-overlaycontainer-stopevent",this.viewport_.appendChild(this.overlayContainerStopEvent_)),this.mapBrowserEventHandler_=null,this.moveTolerance_=t.moveTolerance,this.keyboardEventTarget_=e.keyboardEventTarget,this.targetChangeHandlerKeys_=null,this.targetElement_=null,gt||(this.resizeObserver_=new ResizeObserver(()=>this.updateSize())),this.controls=e.controls||(gt?new Ct:Rc()),this.interactions=e.interactions||(gt?new Ct:Kc({onFocusOnly:!0})),this.overlays_=e.overlays,this.overlayIdIndex_={},this.renderer_=null,this.postRenderFunctions_=[],this.tileQueue_=new ql(this.getTilePriority.bind(this),this.handleTileChange_.bind(this)),this.addChangeListener(it.LAYERGROUP,this.handleLayerGroupChanged_),this.addChangeListener(it.VIEW,this.handleViewChanged_),this.addChangeListener(it.SIZE,this.handleSizeChanged_),this.addChangeListener(it.TARGET,this.handleTargetChanged_),this.setProperties(e.values);let i=this;t.view&&!(t.view instanceof At)&&t.view.then(function(r){i.setView(new At(r))}),this.controls.addEventListener(wt.ADD,r=>{r.element.setMap(this)}),this.controls.addEventListener(wt.REMOVE,r=>{r.element.setMap(null)}),this.interactions.addEventListener(wt.ADD,r=>{r.element.setMap(this)}),this.interactions.addEventListener(wt.REMOVE,r=>{r.element.setMap(null)}),this.overlays_.addEventListener(wt.ADD,r=>{this.addOverlayInternal_(r.element)}),this.overlays_.addEventListener(wt.REMOVE,r=>{let s=r.element.getId();s!==void 0&&delete this.overlayIdIndex_[s.toString()],r.element.setMap(null)}),this.controls.forEach(r=>{r.setMap(this)}),this.interactions.forEach(r=>{r.setMap(this)}),this.overlays_.forEach(this.addOverlayInternal_.bind(this))}addControl(t){this.getControls().push(t)}addInteraction(t){this.getInteractions().push(t)}addLayer(t){this.getLayerGroup().getLayers().push(t)}handleLayerAdd_(t){vh(t.layer,this)}addOverlay(t){this.getOverlays().push(t)}addOverlayInternal_(t){let e=t.getId();e!==void 0&&(this.overlayIdIndex_[e.toString()]=t),t.setMap(this)}disposeInternal(){this.controls.clear(),this.interactions.clear(),this.overlays_.clear(),this.resizeObserver_?.disconnect(),this.setTarget(null),super.disposeInternal()}forEachFeatureAtPixel(t,e,i){if(!this.frameState_||!this.renderer_)return;let r=this.getCoordinateFromPixelInternal(t);i=i!==void 0?i:{};let s=i.hitTolerance!==void 0?i.hitTolerance:0,o=i.layerFilter!==void 0?i.layerFilter:Ne,a=i.checkWrapped!==!1;return this.renderer_.forEachFeatureAtCoordinate(r,this.frameState_,s,a,e,null,o,null)}getFeaturesAtPixel(t,e){let i=[];return this.forEachFeatureAtPixel(t,function(r){i.push(r)},e),i}getAllLayers(){let t=[];function e(i){i.forEach(function(r){r instanceof $n?e(r.getLayers()):t.push(r)})}return e(this.getLayers()),t}hasFeatureAtPixel(t,e){if(!this.frameState_||!this.renderer_)return!1;let i=this.getCoordinateFromPixelInternal(t);e=e!==void 0?e:{};let r=e.layerFilter!==void 0?e.layerFilter:Ne,s=e.hitTolerance!==void 0?e.hitTolerance:0,o=e.checkWrapped!==!1;return this.renderer_.hasFeatureAtCoordinate(i,this.frameState_,s,o,r,null)}getEventCoordinate(t){return this.getCoordinateFromPixel(this.getEventPixel(t))}getEventCoordinateInternal(t){return this.getCoordinateFromPixelInternal(this.getEventPixel(t))}getEventPixel(t){let i=this.viewport_.getBoundingClientRect(),r=this.getSize(),s=i.width/r[0],o=i.height/r[1],a="changedTouches"in t?t.changedTouches[0]:t;return[(a.clientX-i.left)/s,(a.clientY-i.top)/o]}getTarget(){return this.get(it.TARGET)}getTargetElement(){return this.targetElement_}getCoordinateFromPixel(t){return Kn(this.getCoordinateFromPixelInternal(t),this.getView().getProjection())}getCoordinateFromPixelInternal(t){let e=this.frameState_;return e?ht(e.pixelToCoordinateTransform,t.slice()):null}getControls(){return this.controls}getOverlays(){return this.overlays_}getOverlayById(t){let e=this.overlayIdIndex_[t.toString()];return e!==void 0?e:null}getInteractions(){return this.interactions}getLayerGroup(){return this.get(it.LAYERGROUP)}setLayers(t){let e=this.getLayerGroup();if(t instanceof Ct){e.setLayers(t);return}let i=e.getLayers();i.clear(),i.extend(t)}getLayers(){return this.getLayerGroup().getLayers()}getLoadingOrNotReady(){let t=this.getLayerGroup().getLayerStatesArray();for(let e=0,i=t.length;e<i;++e){let r=t[e];if(!r.visible)continue;let s=r.layer.getRenderer();if(s&&!s.ready)return!0;let o=r.layer.getSource();if(o&&o.loading)return!0}return!1}getPixelFromCoordinate(t){let e=Mt(t,this.getView().getProjection());return this.getPixelFromCoordinateInternal(e)}getPixelFromCoordinateInternal(t){let e=this.frameState_;return e?ht(e.coordinateToPixelTransform,t.slice(0,2)):null}getPixelRatio(){return this.pixelRatio_}setPixelRatio(t){this.pixelRatio_!==t&&(this.pixelRatio_=t,this.render())}getRenderer(){return this.renderer_}getSize(){return this.get(it.SIZE)}getView(){return this.get(it.VIEW)}getViewport(){return this.viewport_}getOverlayContainer(){return this.overlayContainer_}getOverlayContainerStopEvent(){return this.overlayContainerStopEvent_}getOwnerDocument(){let t=this.getTargetElement();return t?t.ownerDocument:document}getTilePriority(t,e,i,r){return Hl(this.frameState_,t,e,i,r)}handleBrowserEvent(t,e){e=e||t.type;let i=new Zt(e,this,t);this.handleMapBrowserEvent(i)}handleMapBrowserEvent(t){if(!this.frameState_)return;let e=t.originalEvent,i=e.type;if(i===Wn.POINTERDOWN||i===A.WHEEL||i===A.KEYDOWN){let r=this.getOwnerDocument(),s=this.viewport_.getRootNode?this.viewport_.getRootNode():r,o=e.target,a=s instanceof ShadowRoot?s.host===o?s.host.ownerDocument:s:s===r?r.documentElement:s;if(this.overlayContainerStopEvent_.contains(o)||!a.contains(o))return}if(t.frameState=this.frameState_,this.dispatchEvent(t)!==!1){let r=this.getInteractions().getArray().slice();for(let s=r.length-1;s>=0;s--){let o=r[s];if(o.getMap()!==this||!o.getActive()||!this.getTargetElement())continue;if(!o.handleEvent(t)||t.propagationStopped)break}}}handlePostRender(){let t=this.frameState_,e=this.tileQueue_;if(!e.isEmpty()){let r=this.maxTilesLoading_,s=r,o=t?t.viewHints:void 0,a=o?o[It.ANIMATING]||o[It.INTERACTING]:!1;if(a){let l=Date.now()-t.time>8;r=l?0:8,s=l?0:2}e.getTilesLoading()<r&&(a&&e.reprioritize(),e.loadMoreTiles(r,s))}t&&this.renderer_&&!t.animate&&(this.renderComplete_?(this.hasListener(St.RENDERCOMPLETE)&&this.renderer_.dispatchRenderEvent(St.RENDERCOMPLETE,t),this.loaded_===!1&&(this.loaded_=!0,this.dispatchEvent(new Te(qt.LOADEND,this,t)))):this.loaded_===!0&&(this.loaded_=!1,this.dispatchEvent(new Te(qt.LOADSTART,this,t))));let i=this.postRenderFunctions_;if(t)for(let r=0,s=i.length;r<s;++r)i[r](this,t);i.length=0}handleSizeChanged_(){this.getView()&&!this.getView().getAnimating()&&this.getView().resolveConstraints(0),this.render()}handleTargetChanged_(){if(this.mapBrowserEventHandler_){for(let i=0,r=this.targetChangeHandlerKeys_.length;i<r;++i)G(this.targetChangeHandlerKeys_[i]);this.targetChangeHandlerKeys_=null,this.viewport_.removeEventListener(A.CONTEXTMENU,this.boundHandleBrowserEvent_),this.viewport_.removeEventListener(A.WHEEL,this.boundHandleBrowserEvent_),this.mapBrowserEventHandler_.dispose(),this.mapBrowserEventHandler_=null,this.viewport_.remove()}if(this.targetElement_&&!Lt(this.targetElement_)){this.resizeObserver_?.unobserve(this.targetElement_);let i=this.targetElement_.getRootNode();i instanceof ShadowRoot&&this.resizeObserver_.unobserve(i.host),this.setSize(void 0)}let t=this.getTarget(),e=typeof t=="string"?document.getElementById(t):t;if(this.targetElement_=e,!e)this.renderer_&&(clearTimeout(this.postRenderTimeoutHandle_),this.postRenderTimeoutHandle_=void 0,this.postRenderFunctions_.length=0,this.renderer_.dispose(),this.renderer_=null),this.animationDelayKey_&&(cancelAnimationFrame(this.animationDelayKey_),this.animationDelayKey_=void 0);else{if(Lt(e)||e.appendChild(this.viewport_),this.renderer_||(this.renderer_=new wh(this)),!Lt(e)){this.mapBrowserEventHandler_=new Bl(this,this.moveTolerance_);for(let r in Z)this.mapBrowserEventHandler_.addEventListener(Z[r],this.handleMapBrowserEvent.bind(this));this.viewport_.addEventListener(A.CONTEXTMENU,this.boundHandleBrowserEvent_,!1),this.viewport_.addEventListener(A.WHEEL,this.boundHandleBrowserEvent_,Li?{passive:!1}:!1);let i;if(this.keyboardEventTarget_)i=this.keyboardEventTarget_;else{let r=e.getRootNode();i=r instanceof ShadowRoot?r.host:e}if(this.targetChangeHandlerKeys_=[b(i,A.KEYDOWN,this.handleBrowserEvent,this),b(i,A.KEYPRESS,this.handleBrowserEvent,this)],!Lt(e)){let r=e.getRootNode();r instanceof ShadowRoot&&this.resizeObserver_.observe(r.host),this.resizeObserver_?.observe(e)}}this.updateSize()}}handleTileChange_(){this.render()}handleViewPropertyChanged_(){this.render()}handleViewChanged_(){this.viewPropertyListenerKey_&&(G(this.viewPropertyListenerKey_),this.viewPropertyListenerKey_=null),this.viewChangeListenerKey_&&(G(this.viewChangeListenerKey_),this.viewChangeListenerKey_=null);let t=this.getView();t&&(this.updateViewportSize_(this.getSize()),this.viewPropertyListenerKey_=b(t,he.PROPERTYCHANGE,this.handleViewPropertyChanged_,this),this.viewChangeListenerKey_=b(t,A.CHANGE,this.handleViewPropertyChanged_,this),t.resolveConstraints(0)),this.render()}handleLayerGroupChanged_(){this.layerGroupPropertyListenerKeys_&&(this.layerGroupPropertyListenerKeys_.forEach(G),this.layerGroupPropertyListenerKeys_=null);let t=this.getLayerGroup();t&&(this.handleLayerAdd_(new Ut("addlayer",t)),this.layerGroupPropertyListenerKeys_=[b(t,he.PROPERTYCHANGE,this.render,this),b(t,A.CHANGE,this.render,this),b(t,"addlayer",this.handleLayerAdd_,this),b(t,"removelayer",this.handleLayerRemove_,this)]),this.render()}isRendered(){return!!this.frameState_}animationDelay_(){this.animationDelayKey_=void 0,this.renderFrame_(Date.now())}renderSync(){this.animationDelayKey_&&cancelAnimationFrame(this.animationDelayKey_),this.animationDelay_()}redrawText(){if(!this.frameState_)return;let t=this.frameState_.layerStatesArray;for(let e=0,i=t.length;e<i;++e){let r=t[e].layer;r.hasRenderer()&&r.getRenderer().handleFontsChanged()}}render(){this.renderer_&&this.animationDelayKey_===void 0&&(this.animationDelayKey_=requestAnimationFrame(this.animationDelay_))}removeControl(t){return this.getControls().remove(t)}removeInteraction(t){return this.getInteractions().remove(t)}removeLayer(t){return this.getLayerGroup().getLayers().remove(t)}handleLayerRemove_(t){Ch(t.layer)}removeOverlay(t){return this.getOverlays().remove(t)}renderFrame_(t){let e=this.getSize(),i=this.getView(),r=this.frameState_,s=null;if(e!==void 0&&Nr(e)&&i&&i.isDef()){let o=i.getHints(this.frameState_?this.frameState_.viewHints:void 0),a=i.getState();if(s={animate:!1,coordinateToPixelTransform:this.coordinateToPixelTransform_,declutter:null,extent:zn(a.center,a.resolution,a.rotation,e),index:this.frameIndex_++,layerIndex:0,layerStatesArray:this.getLayerGroup().getLayerStatesArray(),pixelRatio:this.pixelRatio_,pixelToCoordinateTransform:this.pixelToCoordinateTransform_,postRenderFunctions:[],size:e,tileQueue:this.tileQueue_,time:t,usedTiles:{},viewState:a,viewHints:o,wantedTiles:{},mapId:B(this),renderTargets:{}},a.nextCenter&&a.nextResolution){let l=isNaN(a.nextRotation)?a.rotation:a.nextRotation;s.nextExtent=zn(a.nextCenter,a.nextResolution,l,e)}}this.frameState_=s,this.renderer_.renderFrame(s),s&&(s.animate&&this.render(),Array.prototype.push.apply(this.postRenderFunctions_,s.postRenderFunctions),r&&(!this.previousExtent_||!_e(this.previousExtent_)&&!Dn(s.extent,this.previousExtent_))&&(this.dispatchEvent(new Te(qt.MOVESTART,this,r)),this.previousExtent_=be(this.previousExtent_)),this.previousExtent_&&!s.viewHints[It.ANIMATING]&&!s.viewHints[It.INTERACTING]&&!Dn(s.extent,this.previousExtent_)&&(this.dispatchEvent(new Te(qt.MOVEEND,this,s)),va(s.extent,this.previousExtent_))),this.dispatchEvent(new Te(qt.POSTRENDER,this,s)),this.renderComplete_=(this.hasListener(qt.LOADSTART)||this.hasListener(qt.LOADEND)||this.hasListener(St.RENDERCOMPLETE))&&!this.tileQueue_.getTilesLoading()&&!this.tileQueue_.getCount()&&!this.getLoadingOrNotReady(),this.postRenderTimeoutHandle_||(this.postRenderTimeoutHandle_=setTimeout(()=>{this.postRenderTimeoutHandle_=void 0,this.handlePostRender()},0))}setLayerGroup(t){let e=this.getLayerGroup();e&&this.handleLayerRemove_(new Ut("removelayer",e)),this.set(it.LAYERGROUP,t)}setSize(t){this.set(it.SIZE,t)}setTarget(t){this.set(it.TARGET,t)}setView(t){if(!t||t instanceof At){this.set(it.VIEW,t);return}this.set(it.VIEW,new At);let e=this;t.then(function(i){e.setView(new At(i))})}updateSize(){let t=this.getTargetElement(),e;if(t){let r,s;if(Lt(t)){let o=t.getContext("2d").getTransform();r=t.width/o.a,s=t.height/o.d}else{let o=getComputedStyle(t);r=t.offsetWidth-parseFloat(o.borderLeftWidth)-parseFloat(o.paddingLeft)-parseFloat(o.paddingRight)-parseFloat(o.borderRightWidth),s=t.offsetHeight-parseFloat(o.borderTopWidth)-parseFloat(o.paddingTop)-parseFloat(o.paddingBottom)-parseFloat(o.borderBottomWidth)}!isNaN(r)&&!isNaN(s)&&(e=[Math.max(0,r),Math.max(0,s)],!Nr(e)&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)&&bi("No map visible because the map container's width or height are 0."))}let i=this.getSize();e&&(!i||!ye(e,i))&&(this.updateViewportSize_(e),this.setSize(e))}updateViewportSize_(t){let e=this.getView();e&&e.setViewportSize(t)}};function od(n){let t=null;n.keyboardEventTarget!==void 0&&(t=typeof n.keyboardEventTarget=="string"?document.getElementById(n.keyboardEventTarget):n.keyboardEventTarget);let e={},i=n.layers&&typeof n.layers.getLayers=="function"?n.layers:new $n({layers:n.layers});e[it.LAYERGROUP]=i,e[it.TARGET]=n.target,e[it.VIEW]=n.view instanceof At?n.view:new At;let r;n.controls!==void 0&&(Array.isArray(n.controls)?r=new Ct(n.controls.slice()):(P(typeof n.controls.getArray=="function","Expected `controls` to be an array or an `ol/Collection.js`"),r=n.controls));let s;n.interactions!==void 0&&(Array.isArray(n.interactions)?s=new Ct(n.interactions.slice()):(P(typeof n.interactions.getArray=="function","Expected `interactions` to be an array or an `ol/Collection.js`"),s=n.interactions));let o;return n.overlays!==void 0?Array.isArray(n.overlays)?o=new Ct(n.overlays.slice()):(P(typeof n.overlays.getArray=="function","Expected `overlays` to be an array or an `ol/Collection.js`"),o=n.overlays):o=new Ct,{controls:r,interactions:s,keyboardEventTarget:t,overlays:o,values:e}}var $o=Ho;function Rr(n){return n instanceof Image||n instanceof HTMLCanvasElement||n instanceof HTMLVideoElement||n instanceof ImageBitmap?n:null}var ad=new Error("disposed");var ld=[256,256],Jo=class extends rn{constructor(t){let e=I.IDLE;super(t.tileCoord,e,{transition:t.transition,interpolate:t.interpolate}),this.loader_=t.loader,this.data_=null,this.error_=null,this.size_=t.size||null,this.controller_=t.controller||null}getSize(){if(this.size_)return this.size_;let t=Rr(this.data_);return t?[t.width,t.height]:ld}getData(){return this.data_}getError(){return this.error_}load(){if(this.state!==I.IDLE&&this.state!==I.ERROR)return;this.state=I.LOADING,this.changed();let t=this;this.loader_().then(function(e){t.data_=e,t.state=I.LOADED,t.changed()}).catch(function(e){t.error_=e,t.state=I.ERROR,t.changed()})}disposeInternal(){this.controller_&&(this.controller_.abort(ad),this.controller_=null),super.disposeInternal()}},Qo=Jo;var ta=class{constructor(t){this.highWaterMark=t!==void 0?t:2048,this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null}deleteOldest(){let t=this.pop();t instanceof Ce&&t.dispose()}canExpireCache(){return this.highWaterMark>0&&this.getCount()>this.highWaterMark}expireCache(t){for(;this.canExpireCache();)this.deleteOldest()}clear(){for(;this.oldest_;)this.deleteOldest()}containsKey(t){return this.entries_.hasOwnProperty(t)}forEach(t){let e=this.oldest_;for(;e;)t(e.value_,e.key_,this),e=e.newer}get(t,e){let i=this.entries_[t];return P(i!==void 0,"Tried to get a value for a key that does not exist in the cache"),i===this.newest_||(i===this.oldest_?(this.oldest_=this.oldest_.newer,this.oldest_.older=null):(i.newer.older=i.older,i.older.newer=i.newer),i.newer=null,i.older=this.newest_,this.newest_.newer=i,this.newest_=i),i.value_}remove(t){let e=this.entries_[t];return P(e!==void 0,"Tried to get a value for a key that does not exist in the cache"),e===this.newest_?(this.newest_=e.older,this.newest_&&(this.newest_.newer=null)):e===this.oldest_?(this.oldest_=e.newer,this.oldest_&&(this.oldest_.older=null)):(e.newer.older=e.older,e.older.newer=e.newer),delete this.entries_[t],--this.count_,e.value_}getCount(){return this.count_}getKeys(){let t=new Array(this.count_),e=0,i;for(i=this.newest_;i;i=i.older)t[e++]=i.key_;return t}getValues(){let t=new Array(this.count_),e=0,i;for(i=this.newest_;i;i=i.older)t[e++]=i.value_;return t}peekLast(){return this.oldest_.value_}peekLastKey(){return this.oldest_.key_}peekFirstKey(){return this.newest_.key_}peek(t){return this.entries_[t]?.value_}pop(){let t=this.oldest_;return delete this.entries_[t.key_],t.newer&&(t.newer.older=null),this.oldest_=t.newer,this.oldest_||(this.newest_=null),--this.count_,t.value_}replace(t,e){this.get(t),this.entries_[t].value_=e}set(t,e){P(!(t in this.entries_),"Tried to set a value for a key that is used already");let i={key_:t,newer:null,older:this.newest_,value_:e};this.newest_?this.newest_.newer=i:this.oldest_=i,this.newest_=i,this.entries_[t]=i,++this.count_}setSize(t){this.highWaterMark=t}},ea=ta;var na=class{constructor(){this.instructions_=[],this.zIndex=0,this.offset_=0,this.pendingMethod_,this.context_=new Proxy(Un(),{get:(t,e)=>{if(typeof t[e]=="function")return this.pendingMethod_=e,this.pushMethodArgs_},set:(t,e,i)=>(this.push_(e,i),!0)})}push_(...t){let e=this.instructions_,i=this.zIndex+this.offset_;e[i]||(e[i]=[]),e[i].push(...t)}pushMethodArgs_=(...t)=>{this.push_(this.pendingMethod_,t)};pushFunction(t){this.push_(t)}getContext(){return this.context_}draw(t){this.instructions_.forEach(e=>{for(let i=0,r=e.length;i<r;++i){let s=e[i];if(typeof s=="function"){s(t);continue}let o=e[++i];typeof t[s]=="function"?t[s](...o):typeof o=="function"?t[s]=o(t):t[s]=o}})}clear(){this.instructions_.length=0,this.zIndex=0,this.offset_=0}offset(){this.offset_=this.instructions_.length,this.zIndex=0}},Rh=na;var cd=5,ia=class extends Ki{constructor(t){super(),this.ready=!0,this.boundHandleImageChange_=this.handleImageChange_.bind(this),this.layer_=t,this.staleKeys_=new Array,this.maxStaleKeys=cd,this.renderedSourceKey_}getStaleKeys(){return this.staleKeys_}prependStaleKey(t){this.staleKeys_.unshift(t),this.staleKeys_.length>this.maxStaleKeys&&(this.staleKeys_.length=this.maxStaleKeys)}updateStaleKeys(t){this.renderedSourceKey_?this.renderedSourceKey_!==t&&(this.prependStaleKey(this.renderedSourceKey_),this.renderedSourceKey_=t):this.renderedSourceKey_=t}getFeatures(t){return O()}getData(t){return null}prepareFrame(t){return O()}renderFrame(t,e){return O()}forEachFeatureAtCoordinate(t,e,i,r,s){}getLayer(){return this.layer_}handleFontsChanged(){}handleImageChange_(t){let e=t.target;(e.getState()===M.LOADED||e.getState()===M.ERROR)&&this.renderIfReadyAndVisible()}loadImage(t){let e=t.getState();return e!=M.LOADED&&e!=M.ERROR&&t.addEventListener(A.CHANGE,this.boundHandleImageChange_),e==M.IDLE&&(t.load(),e=t.getState()),e==M.LOADED}renderIfReadyAndVisible(){let t=this.getLayer();t&&t.getVisible()&&t.getSourceState()==="ready"&&t.changed()}renderDeferred(t){}disposeInternal(){delete this.layer_,super.disposeInternal()}},Th=ia;var Sn=null;function hd(){Sn=J(1,1,void 0,{willReadFrequently:!0})}var ra=class extends Th{constructor(t){super(t),this.container=null,this.renderedResolution,this.tempTransform=le(),this.pixelTransform=le(),this.inversePixelTransform=le(),this.context=null,this.deferredContext_=null,this.containerReused=!1,this.frameState=null}getImageData(t,e,i){Sn||hd(),Sn.clearRect(0,0,1,1);let r;try{Sn.drawImage(t,e,i,1,1,0,0,1,1),r=Sn.getImageData(0,0,1,1).data}catch{return Sn=null,null}return r}getBackground(t){let i=this.getLayer().getBackground();return typeof i=="function"&&(i=i(t.viewState.resolution)),i||void 0}useContainer(t,e,i,r,s){if(Lt(t)&&this.pixelTransform[1]===0&&this.pixelTransform[2]===0&&this.pixelTransform[4]===0&&this.pixelTransform[5]===0&&t.width===r&&t.height===s){let c=t,h=c.getContext("2d");if(h){this.container=t,this.context=h,this.containerReused=!0,i&&(h.fillStyle=i,h.fillRect(0,0,c.width,c.height));return}}let o=this.getLayer().getClassName(),a,l;if(t&&t.className===o&&(!i||t&&t.style.backgroundColor&&ye(kt(t.style.backgroundColor),kt(i)))){let c=t.firstElementChild;Lt(c)&&(l=c.getContext("2d"))}if(l&&Ol(l.canvas.style.transform,e)?(this.container=t,this.context=l,this.containerReused=!0):this.containerReused?(this.container=null,this.context=null,this.containerReused=!1):this.container&&(this.container.style.backgroundColor=null),!this.container){a=gt?Mi():document.createElement("div"),a.className=o;let c=a.style;c.position="absolute",c.width="100%",c.height="100%",l=J();let h=l.canvas;a.appendChild(h),c=h.style,c.position="absolute",c.left="0",c.transformOrigin="top left",this.container=a,this.context=l}!this.containerReused&&i&&!this.container.style.backgroundColor&&(this.container.style.backgroundColor=i)}clipUnrotated(t,e,i){let r=Tt(i),s=$e(i),o=He(i),a=qe(i);ht(e.coordinateToPixelTransform,r),ht(e.coordinateToPixelTransform,s),ht(e.coordinateToPixelTransform,o),ht(e.coordinateToPixelTransform,a);let l=this.inversePixelTransform;ht(l,r),ht(l,s),ht(l,o),ht(l,a),t.save(),t.beginPath(),t.moveTo(Math.round(r[0]),Math.round(r[1])),t.lineTo(Math.round(s[0]),Math.round(s[1])),t.lineTo(Math.round(o[0]),Math.round(o[1])),t.lineTo(Math.round(a[0]),Math.round(a[1])),t.clip()}prepareContainer(t,e){let i=t.extent,r=t.viewState.resolution,s=t.viewState.rotation,o=t.pixelRatio,a=Math.round(k(i)/r*o),l=Math.round(rt(i)/r*o);ce(this.pixelTransform,t.size[0]/2,t.size[1]/2,1/o,1/o,s,-a/2,-l/2),Ui(this.inversePixelTransform,this.pixelTransform);let c=Pl(this.pixelTransform),h=this.getBackground(t);if(this.useContainer(e,c,h,a,l),!this.containerReused){let u=this.context.canvas;u.width!=a||u.height!=l?(u.width=a,u.height=l):this.context.clearRect(0,0,a,l),c!==u.style.transform&&(u.style.transform=c)}}dispatchRenderEvent_(t,e,i){let r=this.getLayer();if(r.hasListener(t)){let s=new vr(t,this.inversePixelTransform,i,e);r.dispatchEvent(s)}}preRender(t,e){this.frameState=e,!e.declutter&&this.dispatchRenderEvent_(St.PRERENDER,t,e)}postRender(t,e){e.declutter||this.dispatchRenderEvent_(St.POSTRENDER,t,e)}renderDeferredInternal(t){}getRenderContext(t){return t.declutter&&!this.deferredContext_&&(this.deferredContext_=new Rh),t.declutter?this.deferredContext_.getContext():this.context}renderDeferred(t){t.declutter&&(this.dispatchRenderEvent_(St.PRERENDER,this.context,t),t.declutter&&this.deferredContext_&&(this.deferredContext_.draw(this.context),this.deferredContext_.clear()),this.renderDeferredInternal(t),this.dispatchRenderEvent_(St.POSTRENDER,this.context,t))}getRenderTransform(t,e,i,r,s,o,a){let l=s/2,c=o/2,h=r/e,u=-h,f=-t[0]+a,d=-t[1];return ce(this.tempTransform,l,c,h,u,-i,f,d)}disposeInternal(){delete this.frameState,super.disposeInternal()}},Ih=ra;function sa(n,t,e){if(!(e in n))return n[e]=new Set([t]),!0;let i=n[e],r=i.has(t);return r||i.add(t),!r}function ud(n,t,e){let i=n[e];return i?i.delete(t):!1}function Ah(n,t){let e=n.layerStatesArray[n.layerIndex];e.extent&&(t=Wt(t,Bt(e.extent,n.viewState.projection)));let i=e.layer.getRenderSource();if(!i.getWrapX()){let r=i.getTileGridForProjection(n.viewState.projection).getExtent();r&&(t=Wt(t,r))}return t}var oa=class extends Ih{constructor(t,e){super(t),e=e||{},this.extentChanged=!0,this.renderComplete=!1,this.renderedExtent_=null,this.renderedPixelRatio,this.renderedProjection=null,this.renderedTiles=[],this.renderedSourceRevision_,this.tempExtent=Ot(),this.tempTileRange_=new xi(0,0,0,0),this.tempTileCoord_=Qe(0,0,0);let i=e.cacheSize!==void 0?e.cacheSize:512;this.tileCache_=new ea(i),this.sourceTileCache_=null,this.layerExtent=null,this.maxStaleKeys=i*.5}getTileCache(){return this.tileCache_}getSourceTileCache(){return this.sourceTileCache_||(this.sourceTileCache_=new ea(512)),this.sourceTileCache_}getOrCreateTile(t,e,i,r){let s=this.tileCache_,a=this.getLayer().getSource(),l=tn(a,a.getKey(),t,e,i),c;if(s.containsKey(l))c=s.get(l);else{let h=r.viewState.projection,u=a.getProjection();if(c=a.getTile(t,e,i,r.pixelRatio,h,!u||dn(u,h)?void 0:this.getSourceTileCache()),!c)return null;s.set(l,c)}return c}getTile(t,e,i,r){let s=this.getOrCreateTile(t,e,i,r);return s||null}getData(t){let e=this.frameState;if(!e)return null;let i=this.getLayer(),r=ht(e.pixelToCoordinateTransform,t.slice()),s=i.getExtent();if(s&&!Ze(s,r))return null;let o=e.viewState,a=i.getRenderSource(),l=a.getTileGridForProjection(o.projection),c=a.getTilePixelRatio(e.pixelRatio);for(let h=l.getZForResolution(o.resolution);h>=l.getMinZoom();--h){let u=l.getTileCoordForCoordAndZ(r,h),f=this.getTile(h,u[1],u[2],e);if(!f||f.getState()!==I.LOADED)continue;let d=l.getOrigin(h),g=H(l.getTileSize(h)),m=l.getResolution(h),_;if(f instanceof on||f instanceof Xi)_=f.getImage();else if(f instanceof Qo){if(_=Rr(f.getData()),!_)continue}else continue;let w=Math.floor(c*((r[0]-d[0])/m-u[1]*g[0])),x=Math.floor(c*((d[1]-r[1])/m-u[2]*g[1])),C=Math.round(c*a.getGutterForProjection(o.projection));return this.getImageData(_,w+C,x+C)}return null}prepareFrame(t){this.renderedProjection?t.viewState.projection!==this.renderedProjection&&(this.tileCache_.clear(),this.renderedProjection=t.viewState.projection):this.renderedProjection=t.viewState.projection;let e=this.getLayer().getSource();if(!e)return!1;let i=e.getRevision();return this.renderedSourceRevision_?this.renderedSourceRevision_!==i&&(this.renderedSourceRevision_=i,this.renderedSourceKey_===e.getKey()&&(this.tileCache_.clear(),this.sourceTileCache_?.clear())):this.renderedSourceRevision_=i,!0}enqueueTilesForNextExtent(){return!0}enqueueTiles(t,e,i,r,s){let o=t.viewState,a=this.getLayer(),l=a.getRenderSource(),c=l.getTileGridForProjection(o.projection),h=B(l);h in t.wantedTiles||(t.wantedTiles[h]={});let u=t.wantedTiles[h],f=a.getMapInternal(),d=Math.max(i-s,c.getMinZoom(),c.getZForResolution(Math.min(a.getMaxResolution(),f?f.getView().getResolutionForZoom(Math.max(a.getMinZoom(),0)):c.getResolution(0)),l.zDirection)),g=o.rotation,m=g?Pr(o.center,o.resolution,g,t.size):void 0;for(let _=i;_>=d;--_){let w=c.getTileRangeForExtentAndZ(e,_,this.tempTileRange_),x=c.getResolution(_);for(let C=w.minX;C<=w.maxX;++C)for(let y=w.minY;y<=w.maxY;++y){if(g&&!c.tileCoordIntersectsViewport([_,C,y],m))continue;let E=this.getTile(_,C,y,t);if(!E||!sa(r,E,_))continue;let z=E.getKey();if(u[z]=!0,E.getState()===I.IDLE&&!t.tileQueue.isKeyQueued(z)){let T=Qe(_,C,y,this.tempTileCoord_);t.tileQueue.enqueue([E,h,c.getTileCoordCenter(T),x])}}}}findStaleTile_(t,e){let i=this.tileCache_,r=t[0],s=t[1],o=t[2],a=this.getStaleKeys();for(let l=0;l<a.length;++l){let c=tn(this.getLayer().getSource(),a[l],r,s,o);if(i.containsKey(c)){let h=i.peek(c);if(h.getState()===I.LOADED)return h.endTransition(B(this)),sa(e,h,r),!0}}return!1}findAltTiles_(t,e,i,r){let s=t.getTileRangeForTileCoordAndZ(e,i,this.tempTileRange_);if(!s)return!1;let o=!0,a=this.tileCache_,l=this.getLayer().getRenderSource(),c=l.getKey();for(let h=s.minX;h<=s.maxX;++h)for(let u=s.minY;u<=s.maxY;++u){let f=tn(l,c,i,h,u),d=!1;if(a.containsKey(f)){let g=a.peek(f);g.getState()===I.LOADED&&(sa(r,g,i),d=!0)}d||(o=!1)}return o}renderFrame(t,e){this.renderComplete=!0;let i=t.layerStatesArray[t.layerIndex],r=t.viewState,s=r.projection,o=r.resolution,a=r.center,l=t.pixelRatio,c=this.getLayer(),h=c.getSource(),u=h.getTileGridForProjection(s),f=u.getZForResolution(o,h.zDirection),d=u.getResolution(f);this.updateStaleKeys(h.getKey());let g=t.extent,m=h.getTilePixelRatio(l);this.prepareContainer(t,e);let _=this.context.canvas.width,w=this.context.canvas.height;this.layerExtent=i.extent?Bt(i.extent,s):null,this.layerExtent&&(g=Wt(g,this.layerExtent));let x=d*_/2/m,C=d*w/2/m,y=[a[0]-x,a[1]-C,a[0]+x,a[1]+C],E={};this.renderedTiles.length=0;let S=c.getPreload();if(t.nextExtent&&this.enqueueTilesForNextExtent()){let Y=u.getZForResolution(r.nextResolution,h.zDirection),N=Ah(t,t.nextExtent);this.enqueueTiles(t,N,Y,E,S)}let z=Ah(t,g);if(this.enqueueTiles(t,z,f,E,0),S>0&&setTimeout(()=>{this.enqueueTiles(t,z,f-1,E,S-1)},0),!(f in E))return this.container;let T=B(this),v=t.time;for(let Y of E[f]){let N=Y.getState();if(N===I.EMPTY)continue;let V=Y.tileCoord;if(N===I.LOADED&&Y.getAlpha(T,v)===1){Y.endTransition(T);continue}if(N!==I.ERROR&&(this.renderComplete=!1),this.findStaleTile_(V,E)){ud(E,Y,f),t.animate=!0;continue}if(this.findAltTiles_(u,V,f+1,E))continue;let ot=u.getMinZoom();for(let at=f-1;at>=ot&&!this.findAltTiles_(u,V,at,E);--at);}let R=d/o*l/m,U=this.getRenderContext(t);ce(this.tempTransform,_/2,w/2,R,R,0,-_/2,-w/2),this.layerExtent&&this.clipUnrotated(U,t,this.layerExtent),h.getInterpolate()||(U.imageSmoothingEnabled=!1),this.preRender(U,t);let q=Object.keys(E).map(Number);q.sort(De);let K=[],ft=[],Et=[];for(let Y=q.length-1;Y>=0;--Y){let N=q[Y],V=h.getTilePixelSize(N,l,s),st=u.getResolution(N)/d,ot=V[0]*st*R,at=V[1]*st*R,xt=u.getTileCoordForCoordAndZ(Tt(y),N),Be=u.getTileCoordExtent(xt),Pt=ht(this.tempTransform,[m*(Be[0]-y[0])/d,m*(y[3]-Be[3])/d]),Kt=m*h.getGutterForProjection(s);for(let et of E[N]){if(et.getState()!==I.LOADED)continue;let me=et.tileCoord,Mn=xt[1]-me[1],ee=Math.round(Pt[0]-(Mn-1)*ot),Ea=xt[2]-me[2],Yh=Math.round(Pt[1]-(Ea-1)*at),bn=Math.round(Pt[0]-Mn*ot),Pn=Math.round(Pt[1]-Ea*at),Tr=ee-bn,Ir=Yh-Pn,xa=N===f;if(xa&&et.inTransition(T)){Et.push({tile:et,x:bn,y:Pn,w:Tr,h:Ir,gutter:Kt}),this.renderedTiles.unshift(et),this.updateUsedTiles(t.usedTiles,h,et);continue}let Ar=[bn,Pn,bn+Tr,Pn+Ir],Sr=[];for(let On=0,Bh=K.length;On<Bh;++On)N<ft[On]&&Yt(Ar,K[On])&&Sr.push(K[On]);let wa;Sr.length>0&&(wa=Pa(Ar,Sr)),K.push(Ar),ft.push(N),this.drawTile(et,t,bn,Pn,Tr,Ir,Kt,xa,wa),this.renderedTiles.unshift(et),this.updateUsedTiles(t.usedTiles,h,et)}}for(let Y=0,N=Et.length;Y<N;++Y){let{tile:V,x:$,y:st,w:ot,h:at,gutter:xt}=Et[Y];this.drawTile(V,t,$,st,ot,at,xt,!0,void 0)}if(this.renderedResolution=d,this.extentChanged=!this.renderedExtent_||!Dn(this.renderedExtent_,y),this.renderedExtent_=y,this.renderedPixelRatio=l,this.postRender(this.context,t),this.layerExtent&&U.restore(),U.imageSmoothingEnabled=!0,this.renderComplete){let Y=(N,V)=>{let $=B(h),st=V.wantedTiles[$],ot=st?Object.keys(st).length:0;this.updateCacheSize(ot),this.tileCache_.expireCache(),this.sourceTileCache_?.expireCache()};t.postRenderFunctions.push(Y)}return this.container}updateCacheSize(t){this.tileCache_.highWaterMark=Math.max(this.tileCache_.highWaterMark,t*2)}drawTile(t,e,i,r,s,o,a,l,c){let h;if(t instanceof Qo){if(h=Rr(t.getData()),!h)throw new Error("Rendering array data is not yet supported")}else h=this.getTileImage(t);if(!h)return;let u=this.getRenderContext(e),f=B(this),d=e.layerStatesArray[e.layerIndex],g=d.opacity*(l?t.getAlpha(f,e.time):1),m=g!==u.globalAlpha;m&&(u.save(),u.globalAlpha=g);let _=h.width-2*a,w=h.height-2*a;if(c){let x=_/s,C=w/o;for(let y=0,E=c.length;y<E;++y){let S=c[y],z=S[0],T=S[1],v=S[2]-S[0],R=S[3]-S[1];u.drawImage(h,a+(z-i)*x,a+(T-r)*C,v*x,R*C,z,T,v,R)}}else u.drawImage(h,a,a,_,w,i,r,s,o);m&&u.restore(),g!==d.opacity?e.animate=!0:l&&t.endTransition(f)}getImage(){let t=this.context;return t?t.canvas:null}getTileImage(t){return t.getImage()}updateUsedTiles(t,e,i){let r=B(e);r in t||(t[r]={}),t[r][i.getKey()]=!0}},Sh=oa;var di={PRELOAD:"preload",USE_INTERIM_TILES_ON_ERROR:"useInterimTilesOnError"};var aa=class extends Ke{constructor(t){t=t||{};let e=Object.assign({},t),i=t.cacheSize;delete t.cacheSize,delete e.preload,delete e.useInterimTilesOnError,super(e),this.on,this.once,this.un,this.cacheSize_=i,this.setPreload(t.preload!==void 0?t.preload:0),this.setUseInterimTilesOnError(t.useInterimTilesOnError!==void 0?t.useInterimTilesOnError:!0)}getCacheSize(){return this.cacheSize_}getPreload(){return this.get(di.PRELOAD)}setPreload(t){this.set(di.PRELOAD,t)}getUseInterimTilesOnError(){return this.get(di.USE_INTERIM_TILES_ON_ERROR)}setUseInterimTilesOnError(t){this.set(di.USE_INTERIM_TILES_ON_ERROR,t)}getData(t){return super.getData(t)}},Lh=aa;var la=class extends Lh{constructor(t){super(t)}createRenderer(){return new Sh(this,{cacheSize:this.getCacheSize()})}},ca=la;var Mh=["fullscreenchange","webkitfullscreenchange"],bh={ENTERFULLSCREEN:"enterfullscreen",LEAVEFULLSCREEN:"leavefullscreen"},ha=class extends zt{constructor(t){t=t||{},super({element:document.createElement("div"),target:t.target}),this.on,this.once,this.un,this.keys_=t.keys!==void 0?t.keys:!1,this.source_=t.source,this.isInFullscreen_=!1,this.boundHandleMapTargetChange_=this.handleMapTargetChange_.bind(this),this.cssClassName_=t.className!==void 0?t.className:"ol-full-screen",this.documentListeners_=[],this.activeClassName_=t.activeClassName!==void 0?t.activeClassName.split(" "):[this.cssClassName_+"-true"],this.inactiveClassName_=t.inactiveClassName!==void 0?t.inactiveClassName.split(" "):[this.cssClassName_+"-false"];let e=t.label!==void 0?t.label:"\u2922";this.labelNode_=typeof e=="string"?document.createTextNode(e):e;let i=t.labelActive!==void 0?t.labelActive:"\xD7";this.labelActiveNode_=typeof i=="string"?document.createTextNode(i):i;let r=t.tipLabel?t.tipLabel:"Toggle full-screen";this.button_=document.createElement("button"),this.button_.title=r,this.button_.setAttribute("type","button"),this.button_.appendChild(this.labelNode_),this.button_.addEventListener(A.CLICK,this.handleClick_.bind(this),!1),this.setClassName_(this.button_,this.isInFullscreen_),this.element.className=`${this.cssClassName_} ${Ht} ${Ie}`,this.element.appendChild(this.button_)}handleClick_(t){t.preventDefault(),this.handleFullScreen_()}handleFullScreen_(){let t=this.getMap();if(!t)return;let e=t.getOwnerDocument();if(Ph(e))if(Oh(e))dd(e);else{let i;this.source_?i=typeof this.source_=="string"?e.getElementById(this.source_):this.source_:i=t.getTargetElement(),this.keys_?fd(i):Dh(i)}}handleFullScreenChange_(){let t=this.getMap();if(!t)return;let e=this.isInFullscreen_;this.isInFullscreen_=Oh(t.getOwnerDocument()),e!==this.isInFullscreen_&&(this.setClassName_(this.button_,this.isInFullscreen_),this.isInFullscreen_?(sn(this.labelActiveNode_,this.labelNode_),this.dispatchEvent(bh.ENTERFULLSCREEN)):(sn(this.labelNode_,this.labelActiveNode_),this.dispatchEvent(bh.LEAVEFULLSCREEN)),t.updateSize())}setClassName_(t,e){e?(t.classList.remove(...this.inactiveClassName_),t.classList.add(...this.activeClassName_)):(t.classList.remove(...this.activeClassName_),t.classList.add(...this.inactiveClassName_))}setMap(t){let e=this.getMap();e&&e.removeChangeListener(it.TARGET,this.boundHandleMapTargetChange_),super.setMap(t),this.handleMapTargetChange_(),t&&t.addChangeListener(it.TARGET,this.boundHandleMapTargetChange_)}handleMapTargetChange_(){let t=this.documentListeners_;for(let i=0,r=t.length;i<r;++i)G(t[i]);t.length=0;let e=this.getMap();if(e){let i=e.getOwnerDocument();Ph(i)?this.element.classList.remove(js):this.element.classList.add(js);for(let r=0,s=Mh.length;r<s;++r)t.push(b(i,Mh[r],this.handleFullScreenChange_,this));this.handleFullScreenChange_()}}};function Ph(n){let t=n.body;return!!(t.webkitRequestFullscreen||t.requestFullscreen&&n.fullscreenEnabled)}function Oh(n){return!!(n.webkitIsFullScreen||n.fullscreenElement)}function Dh(n){n.requestFullscreen?n.requestFullscreen():n.webkitRequestFullscreen&&n.webkitRequestFullscreen()}function fd(n){n.webkitRequestFullscreen?n.webkitRequestFullscreen():Dh(n)}function dd(n){n.exitFullscreen?n.exitFullscreen():n.webkitExitFullscreen&&n.webkitExitFullscreen()}var ua=ha;var fa=class{static DEFAULT_COLORSPACE="rec2100-hlg";static SDR_MULTIPLIER=2**16-1;data;height;width;constructor(t,e){this.height=e,this.width=t}static fromImageData(t){throw new Error("Method not implemented!")}static fromImageDataArray(t,e,i){throw new Error("Method not implemented!")}static async loadSDRImageData(t){return fetch(t).then(e=>e.blob()).then(e=>createImageBitmap(e)).then(e=>{let{width:i,height:r}=e,o=new OffscreenCanvas(i,r).getContext("2d");return o.drawImage(e,0,0),o.getImageData(0,0,i,r)})}getPixel(t,e){let i=(e*this.width+t)*4;return this.data.slice(i,i+4)}setPixel(t,e,i){let r=(e*this.width+t)*4;this.data[r+0]=i[0],this.data[r+1]=i[1],this.data[r+2]=i[2],this.data[r+3]=i[3]}clone(){let t=Object.create(Object.getPrototypeOf(this));return Object.assign(t,this),t}};function bt(n){return(t,...e)=>gd(n,t,e)}function Ln(n,t){return bt(md(n,t).get)}var{apply:gd,getOwnPropertyDescriptor:md,getPrototypeOf:ga}=Reflect,{EPSILON:pd,isFinite:h1,isNaN:u1}=Number,{iterator:Fh,toStringTag:_d}=Symbol,{abs:f1}=Math,yd=ArrayBuffer,Ed=yd.prototype;Ln(Ed,"byteLength");var Nh=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null;Nh&&Ln(Nh.prototype,"byteLength");var zh=ga(Uint8Array);zh.from;var Rt=zh.prototype;Rt[Fh];bt(Rt.keys);bt(Rt.values);bt(Rt.entries);bt(Rt.set);bt(Rt.reverse);bt(Rt.fill);bt(Rt.copyWithin);bt(Rt.sort);bt(Rt.slice);bt(Rt.subarray);Ln(Rt,"buffer");Ln(Rt,"byteOffset");Ln(Rt,"length");Ln(Rt,_d);var xd=Uint8Array,kh=Uint16Array,Gh=Uint32Array,Uh=ga([][Fh]());bt(Uh.next);bt((function*(){})().next);ga(Uh);var wd=1/pd;var Cd=6103515625e-14;var Xh=.0009765625,d1=Xh*Cd,g1=Xh*wd;var Qt=new kh(512),te=new xd(512);for(let n=0;n<256;++n){let t=n-127;t<-24?(Qt[n]=0,Qt[n|256]=32768,te[n]=24,te[n|256]=24):t<-14?(Qt[n]=1024>>-t-14,Qt[n|256]=1024>>-t-14|32768,te[n]=-t-1,te[n|256]=-t-1):t<=15?(Qt[n]=t+15<<10,Qt[n|256]=t+15<<10|32768,te[n]=13,te[n|256]=13):t<128?(Qt[n]=31744,Qt[n|256]=64512,te[n]=24,te[n|256]=24):(Qt[n]=31744,Qt[n|256]=64512,te[n]=13,te[n|256]=13)}var Vh=new Gh(2048);for(let n=1;n<1024;++n){let t=n<<13,e=0;for(;(t&8388608)===0;)t<<=1,e-=8388608;t&=-8388609,e+=947912704,Vh[n]=t|e}for(let n=1024;n<2048;++n)Vh[n]=939524096+(n-1024<<13);var gi=new Gh(64);for(let n=1;n<31;++n)gi[n]=n<<23;gi[31]=1199570944;gi[32]=2147483648;for(let n=33;n<63;++n)gi[n]=2147483648+(n-32<<23);gi[63]=3347054592;var vd=new kh(64);for(let n=1;n<64;++n)n!==32&&(vd[n]=1024);function da(){let n={colorSpace:fa.DEFAULT_COLORSPACE,colorType:"float16",toneMapping:{mode:"extended"}};return Array.isArray(navigator.userAgent.match(/Version\/[\d.]+.*Safari/))&&(n.colorSpace="display-p3"),n}function Kh(){HTMLCanvasElement.prototype._getContext=HTMLCanvasElement.prototype.getContext,HTMLCanvasElement.prototype.getContext=function(n,t){return t!==void 0?t=Object.assign({},t,da()):t=da(),this._getContext(n,t)}}function ma(){try{let n=window.matchMedia("(dynamic-range: high)").matches;return!!((window.matchMedia("(color-gamut: rec2020)").matches||window.matchMedia("(color-gamut: p3)").matches)&&n)}catch(n){return console.error("Exception during check for HDR",n),!1}}function jh(){if(!ma()||!Rd())return!1;try{let n=document.createElement("canvas");if(!n.getContext)return!1;let t=da();return n.getContext("2d",t)!==null}catch(n){return console.error("Bad canvas ColorSpace test - make sure that the Chromium browser flag 'enable-experimental-web-platform-features' has been enabled",n),!1}return!1}function Rd(){try{new ImageData(new Float16Array(4),1,1,{pixelFormat:"rgba-float16"})}catch(n){return console.error("Browser doesn't support Float16Array",n),!1}return!0}var pa=class extends At{constructor(t){let e=t||{};super(t),this.pauseableAnimations_=[],this.animationsPointer_=-1,this.lastAnimation_={},this.initalCenter=this.getCenter()}getPauseableAnimation_(){return this.pauseableAnimations_.length-1>this.animationsPointer_?(this.animationsPointer_++,this.pauseableAnimations_[this.animationsPointer_]):(this.animationsPointer_=0,this.pauseableAnimations_[this.animationsPointer_])}nextAnimation_(t){if(t===void 0||t){var e=this,i=this.getPauseableAnimation_();this.animate(i,function(r){e.nextAnimation_(r)})}}pauseAnimation(){if(!this.getAnimating())return;var t=this.animations_[0][0],e=Date.now(),i=e-t.start;let r={center:t.center,zoom:t.zoom,rotation:t.rotation,duration:t.duration-i};this.lastAnimation_=r,this.cancelAnimations()}startAnimation_(){if(!this.getAnimating()){Object.keys(this.lastAnimation_).length!==0&&(this.lastAnimation_={});var t=this;this.animate(this.getPauseableAnimation_,function(e){t.nextAnimation_(e)})}}resumeAnimation(){if(!this.getAnimating())if(Object.keys(this.lastAnimation_).length===0)this.startAnimation_();else{var t=this;this.animate(this.lastAnimation_,function(e){t.nextAnimation_(e)})}}setPauseableAnimation(t){var e=new Array(arguments.length);for(let r=0;r<e.length;++r){var i=arguments[r];e[r]=i}this.animationsPointer_=-1,this.pauseableAnimations_=e}getPauseableAnimation(){return this.pauseableAnimations_}setCenter(t){this.initalCenter=t,this.setCenterInternal(Mt(t,this.getProjection()))}isNoopAnimation(t){return!1}setResolutions(t){this.resolutions_=t}setExtent(t){var e={};e.extent=Bt(t,this.projection_),this.applyOptions_(e)}},_a=class extends zt{constructor(t){let e=t||{},i=e.tipLabel?e.tipLabel:"Rotate 90\xB0 left",r=document.createElement("button");r.innerHTML='<i class="icon-left"></i>',r.title=i;let s=document.createElement("div");s.className="rotate-left ol-unselectable ol-control",s.appendChild(r),super({element:s,target:e.target}),r.addEventListener("click",this.handleRotateLeft.bind(this),!1)}handleRotateLeft(){var t=this.getMap().getView().getRotation();this.getMap().getView().setRotation(t+-90*Math.PI/180)}},ya=class extends zt{constructor(t){let e=t||{},i=e.tipLabel?e.tipLabel:"Rotate 90\xB0 right",r=document.createElement("button");r.innerHTML='<i class="icon-right"></i>',r.title=i;let s=document.createElement("div");s.className="rotate-right ol-unselectable ol-control",s.appendChild(r),super({element:s,target:e.target}),r.addEventListener("click",this.handleRotateRight.bind(this),!1)}handleRotateRight(){var t=this.getMap().getView().getRotation();this.getMap().getView().setRotation(t+90*Math.PI/180)}};window.addMap=function(n,t,e,i,r){var s=0;e!==void 0&&e!=0&&(s=e*Math.PI/180),r===void 0&&(r=!1);var o="en";document.documentElement.lang!==void 0&&(o=new Intl.Locale(document.documentElement.lang).language);var a={de:{zoomIn:"Vergr\xF6\xDFern",zoomOut:"Verkleinern",fullscreen:"Vollbildansicht",rotate:"Rotation zur\xFCcksetzen",rotateLeft:"90\xB0 nach links drehen",rotateRight:"90\xB0 nach rechst drehen"},en:{zoomIn:"Zoom in",zoomOut:"Zoom out",fullscreen:"Toggle full-screen",rotate:"Reset rotation",rotateLeft:"Rotate 90\xB0 left",rotateRight:"Rotate 90\xB0 right"}};console.log("Setting up "+o),r&&ma()&&jh()&&(Kh(),console.log("Enabled HDR Canvas"));var l=new ca,c=new $o({controls:[new qn({zoomInTipLabel:a[o].zoomIn,zoomOutTipLabel:a[o].zoomOut}),new ua({tipLabel:a[o].fullscreen}),new Zn({tipLabel:a[o].rotate}),new _a({tipLabel:a[o].rotateLeft}),new ya({tipLabel:a[o].rotateRight})],layers:[l],target:n});return fetch(t).then(function(h){h.json().then(function(u){var f=new Dr(u).getTileSourceOptions();if(f===void 0||f.version===void 0){console.log("Data seems to be no valid IIIF image information.");return}f.zDirection=-1,i!==void 0&&i!=""&&(f.url=i);var d=new ps(f);l.setSource(d),c.setView(new At({resolutions:d.getTileGrid().getResolutions(),extent:d.getTileGrid().getExtent(),constrainOnlyCenter:!0,rotation:s})),c.getView().fit(d.getTileGrid().getExtent())}).catch(function(u){console.log("Could not read image info json. "+u)})}).catch(function(){console.log("Could not read data from URL.")}),c};window.animatedMap=function(n,t,e,i,r,s,o,a){var l=0;e!==void 0&&e!=0&&(l=e*Math.PI/180);var c=new ca,h=new $o({controls:[],layers:[c],target:n}),u=new pa({constrainOnlyCenter:!0,rotation:l});return fetch(t).then(function(f){f.json().then(function(d){var g=new Dr(d).getTileSourceOptions();if(g===void 0||g.version===void 0){console.log("Data seems to be no valid IIIF image information.");return}g.zDirection=-1,i!==void 0&&i!=""&&(g.url=i);var m=new ps(g);c.setSource(m),u.setExtent(m.getTileGrid().getExtent()),u.setResolutions(m.getTileGrid().getResolutions()),h.setView(u),h.getView().fit(m.getTileGrid().getExtent()),r!==void 0&&r!==""&&h.getView().setZoom(r),a!==void 0&&a!==""&&h.getView().setCenter(a)}).catch(function(d){console.log(`Could not read image info json from "${t}".`+d)})}).catch(function(){console.log("Could not read data from URL.")}),s!==void 0&&s!==""&&o!==void 0&&(Array.isArray(s)?u.setPauseableAnimation(...s):u.setPauseableAnimation(s),h.once("rendercomplete",function(){o.addEventListener("mouseenter",function(){u.resumeAnimation()}),o.addEventListener("mouseleave",function(f){u.pauseAnimation()})})),h};var mi={hasTouch:!1,isToggled:!1},Wh=()=>{mi.hasTouch=!0,window.removeEventListener("touchstart",Wh),window.innerWidth>799&&document.querySelectorAll(".menu-item-has-children").forEach(n=>{n.classList.add("closed"),n.addEventListener("click",t=>{n.classList.contains("closed")&&(t.preventDefault(),n.classList.remove("closed"))})})};window.addEventListener("touchstart",Wh,{passive:!0});var Td=()=>{let n=document.querySelector("#site-header"),t=document.querySelector("#menu-primary"),e=document.querySelector("#overflow-container");mi.isToggled=!mi.isToggled,n.classList.toggle("toggled",mi.isToggled),mi.isToggled?e.style.minHeight=`${window.innerHeight+240}px`:setTimeout(()=>{t.removeAttribute("style"),e.removeAttribute("style")},400)},Id=()=>{let n=new IntersectionObserver(t=>{t.forEach(e=>{if(e.isIntersecting){let i=e.target;i.dataset.src&&(i.src=i.dataset.src),i.dataset.background&&(i.style.backgroundImage=`url(${i.dataset.background})`),i.classList.remove("lazy-image","lazy-bg-image"),n.unobserve(i)}})},{rootMargin:"100px"});document.querySelectorAll(".lazy").forEach(t=>n.observe(t))},Ad=()=>{let n=document.querySelector("#return-top");n!==null&&(window.addEventListener("scroll",()=>{n.classList.toggle("visible",window.scrollY>=600)}),n.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}))};document.addEventListener("DOMContentLoaded",()=>{Id(),Ad(),document.querySelector("#toggle-navigation")?.addEventListener("click",Td),document.querySelectorAll(".menu-item a").forEach(n=>{n.addEventListener("focus",()=>n.closest("li").classList.add("focused")),n.addEventListener("blur",()=>n.closest("li").classList.remove("focused"))})});})();

;
(() => {
  // node_modules/tify/dist/tify.js
  var import_meta = {};
  function Kn(t) {
    const i = /* @__PURE__ */ Object.create(null);
    for (const e of t.split(",")) i[e] = 1;
    return (e) => e in i;
  }
  var xe = {};
  var Yt = [];
  var ft = () => {
  };
  var gr = () => false;
  var $i = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97);
  var en = (t) => t.startsWith("onUpdate:");
  var Ue = Object.assign;
  var Xn = (t, i) => {
    const e = t.indexOf(i);
    e > -1 && t.splice(e, 1);
  };
  var $o = Object.prototype.hasOwnProperty;
  var _e = (t, i) => $o.call(t, i);
  var ue = Array.isArray;
  var Jt = (t) => Ei(t) === "[object Map]";
  var mr = (t) => Ei(t) === "[object Set]";
  var bs = (t) => Ei(t) === "[object Date]";
  var he = (t) => typeof t == "function";
  var Re = (t) => typeof t == "string";
  var Je = (t) => typeof t == "symbol";
  var Te = (t) => t !== null && typeof t == "object";
  var vr = (t) => (Te(t) || he(t)) && he(t.then) && he(t.catch);
  var yr = Object.prototype.toString;
  var Ei = (t) => yr.call(t);
  var ea = (t) => Ei(t).slice(8, -1);
  var wr = (t) => Ei(t) === "[object Object]";
  var tn = (t) => Re(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t;
  var ci = Kn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
  var nn = (t) => {
    const i = /* @__PURE__ */ Object.create(null);
    return (e) => i[e] || (i[e] = t(e));
  };
  var ta = /-\w/g;
  var Ge = nn((t) => t.replace(ta, (i) => i.slice(1).toUpperCase()));
  var ia = /\B([A-Z])/g;
  var At = nn((t) => t.replace(ia, "-$1").toLowerCase());
  var sn = nn((t) => t.charAt(0).toUpperCase() + t.slice(1));
  var wn = nn((t) => t ? `on${sn(t)}` : "");
  var dt = (t, i) => !Object.is(t, i);
  var Mi = (t, ...i) => {
    for (let e = 0; e < t.length; e++) t[e](...i);
  };
  var _r = (t, i, e, n = false) => {
    Object.defineProperty(t, i, { configurable: true, enumerable: false, writable: n, value: e });
  };
  var Yn = (t) => {
    const i = parseFloat(t);
    return isNaN(i) ? t : i;
  };
  var Es;
  var rn = () => Es || (Es = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  function It(t) {
    if (ue(t)) {
      const i = {};
      for (let e = 0; e < t.length; e++) {
        const n = t[e], r = Re(n) ? oa(n) : It(n);
        if (r) for (const s in r) i[s] = r[s];
      }
      return i;
    } else if (Re(t) || Te(t)) return t;
  }
  var na = /;(?![^(]*\))/g;
  var sa = /:([^]+)/;
  var ra = /\/\*[^]*?\*\//g;
  function oa(t) {
    const i = {};
    return t.replace(ra, "").split(na).forEach((e) => {
      if (e) {
        const n = e.split(sa);
        n.length > 1 && (i[n[0].trim()] = n[1].trim());
      }
    }), i;
  }
  function Pe(t) {
    let i = "";
    if (Re(t)) i = t;
    else if (ue(t)) for (let e = 0; e < t.length; e++) {
      const n = Pe(t[e]);
      n && (i += n + " ");
    }
    else if (Te(t)) for (const e in t) t[e] && (i += e + " ");
    return i.trim();
  }
  var aa = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
  var la = Kn(aa);
  function Tr(t) {
    return !!t || t === "";
  }
  function ua(t, i) {
    if (t.length !== i.length) return false;
    let e = true;
    for (let n = 0; e && n < t.length; n++) e = Jn(t[n], i[n]);
    return e;
  }
  function Jn(t, i) {
    if (t === i) return true;
    let e = bs(t), n = bs(i);
    if (e || n) return e && n ? t.getTime() === i.getTime() : false;
    if (e = Je(t), n = Je(i), e || n) return t === i;
    if (e = ue(t), n = ue(i), e || n) return e && n ? ua(t, i) : false;
    if (e = Te(t), n = Te(i), e || n) {
      if (!e || !n) return false;
      const r = Object.keys(t).length, s = Object.keys(i).length;
      if (r !== s) return false;
      for (const o in t) {
        const l = t.hasOwnProperty(o), a = i.hasOwnProperty(o);
        if (l && !a || !l && a || !Jn(t[o], i[o])) return false;
      }
    }
    return String(t) === String(i);
  }
  var xr = (t) => !!(t && t.__v_isRef === true);
  var z = (t) => Re(t) ? t : t == null ? "" : ue(t) || Te(t) && (t.toString === yr || !he(t.toString)) ? xr(t) ? z(t.value) : JSON.stringify(t, br, 2) : String(t);
  var br = (t, i) => xr(i) ? br(t, i.value) : Jt(i) ? { [`Map(${i.size})`]: [...i.entries()].reduce((e, [n, r], s) => (e[_n(n, s) + " =>"] = r, e), {}) } : mr(i) ? { [`Set(${i.size})`]: [...i.values()].map((e) => _n(e)) } : Je(i) ? _n(i) : Te(i) && !ue(i) && !wr(i) ? String(i) : i;
  var _n = (t, i = "") => {
    var e;
    return Je(t) ? `Symbol(${(e = t.description) != null ? e : i})` : t;
  };
  var Oe;
  var ca = class {
    constructor(i = false) {
      this.detached = i, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this._warnOnRun = true, this.__v_skip = true, !i && Oe && (Oe.active ? (this.parent = Oe, this.index = (Oe.scopes || (Oe.scopes = [])).push(this) - 1) : (this._active = false, this._warnOnRun = false));
    }
    get active() {
      return this._active;
    }
    pause() {
      if (this._active) {
        this._isPaused = true;
        let i, e;
        if (this.scopes) {
          const n = this.scopes.slice();
          for (i = 0, e = n.length; i < e; i++) n[i].pause();
        }
        for (i = 0, e = this.effects.length; i < e; i++) this.effects[i].pause();
      }
    }
    resume() {
      if (this._active && this._isPaused) {
        this._isPaused = false;
        let i, e;
        if (this.scopes) {
          const r = this.scopes.slice();
          for (i = 0, e = r.length; i < e; i++) r[i].resume();
        }
        const n = this.effects.slice();
        for (i = 0, e = n.length; i < e; i++) n[i].resume();
      }
    }
    run(i) {
      if (this._active) {
        const e = Oe;
        try {
          return Oe = this, i();
        } finally {
          Oe = e;
        }
      }
    }
    on() {
      ++this._on === 1 && (this.prevScope = Oe, Oe = this);
    }
    off() {
      if (this._on > 0 && --this._on === 0) {
        if (Oe === this) Oe = this.prevScope;
        else {
          let i = Oe;
          for (; i; ) {
            if (i.prevScope === this) {
              i.prevScope = this.prevScope;
              break;
            }
            i = i.prevScope;
          }
        }
        this.prevScope = void 0;
      }
    }
    stop(i) {
      if (this._active) {
        this._active = false;
        let e, n;
        for (e = 0, n = this.effects.length; e < n; e++) this.effects[e].stop();
        for (this.effects.length = 0, e = 0, n = this.cleanups.length; e < n; e++) this.cleanups[e]();
        if (this.cleanups.length = 0, this.scopes) {
          const r = this.scopes.slice();
          for (e = 0, n = r.length; e < n; e++) r[e].stop(true);
          this.scopes.length = 0;
        }
        if (!this.detached && this.parent && !i) {
          const r = this.parent.scopes.pop();
          r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
        }
        this.parent = void 0;
      }
    }
  };
  function Er() {
    return Oe;
  }
  function ha(t, i = false) {
    Oe && Oe.cleanups.push(t);
  }
  var be;
  var Tn = /* @__PURE__ */ new WeakSet();
  var Sr = class {
    constructor(i) {
      this.fn = i, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Oe && (Oe.active ? Oe.effects.push(this) : this.flags &= -2);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && (this.flags &= -65, Tn.has(this) && (Tn.delete(this), this.trigger()));
    }
    notify() {
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Pr(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, Ss(this), Rr(this);
      const i = be, e = nt;
      be = this, nt = true;
      try {
        return this.fn();
      } finally {
        Dr(this), be = i, nt = e, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let i = this.deps; i; i = i.nextDep) es(i);
        this.deps = this.depsTail = void 0, Ss(this), this.onStop && this.onStop(), this.flags &= -2;
      }
    }
    trigger() {
      this.flags & 64 ? Tn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      kn(this) && this.run();
    }
    get dirty() {
      return kn(this);
    }
  };
  var Cr = 0;
  var hi;
  var di;
  function Pr(t, i = false) {
    if (t.flags |= 8, i) {
      t.next = di, di = t;
      return;
    }
    t.next = hi, hi = t;
  }
  function Qn() {
    Cr++;
  }
  function $n() {
    if (--Cr > 0) return;
    if (di) {
      let i = di;
      for (di = void 0; i; ) {
        const e = i.next;
        i.next = void 0, i.flags &= -9, i = e;
      }
    }
    let t;
    for (; hi; ) {
      let i = hi;
      for (hi = void 0; i; ) {
        const e = i.next;
        if (i.next = void 0, i.flags &= -9, i.flags & 1) try {
          i.trigger();
        } catch (n) {
          t || (t = n);
        }
        i = e;
      }
    }
    if (t) throw t;
  }
  function Rr(t) {
    for (let i = t.deps; i; i = i.nextDep) i.version = -1, i.prevActiveLink = i.dep.activeLink, i.dep.activeLink = i;
  }
  function Dr(t) {
    let i, e = t.depsTail, n = e;
    for (; n; ) {
      const r = n.prevDep;
      n.version === -1 ? (n === e && (e = r), es(n), da(n)) : i = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = r;
    }
    t.deps = i, t.depsTail = e;
  }
  function kn(t) {
    for (let i = t.deps; i; i = i.nextDep) if (i.dep.version !== i.version || i.dep.computed && (Ir(i.dep.computed) || i.dep.version !== i.version)) return true;
    return !!t._dirty;
  }
  function Ir(t) {
    if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === gi) || (t.globalVersion = gi, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !kn(t)))) return;
    t.flags |= 2;
    const i = t.dep, e = be, n = nt;
    be = t, nt = true;
    try {
      Rr(t);
      const r = t.fn(t._value);
      (i.version === 0 || dt(r, t._value)) && (t.flags |= 128, t._value = r, i.version++);
    } catch (r) {
      throw i.version++, r;
    } finally {
      be = e, nt = n, Dr(t), t.flags &= -3;
    }
  }
  function es(t, i = false) {
    const { dep: e, prevSub: n, nextSub: r } = t;
    if (n && (n.nextSub = r, t.prevSub = void 0), r && (r.prevSub = n, t.nextSub = void 0), e.subs === t && (e.subs = n, !n && e.computed)) {
      e.computed.flags &= -5;
      for (let s = e.computed.deps; s; s = s.nextDep) es(s, true);
    }
    !i && !--e.sc && e.map && e.map.delete(e.key);
  }
  function da(t) {
    const { prevDep: i, nextDep: e } = t;
    i && (i.nextDep = e, t.prevDep = void 0), e && (e.prevDep = i, t.nextDep = void 0);
  }
  var nt = true;
  var Ar = [];
  function xt() {
    Ar.push(nt), nt = false;
  }
  function bt() {
    const t = Ar.pop();
    nt = t === void 0 ? true : t;
  }
  function Ss(t) {
    const { cleanup: i } = t;
    if (t.cleanup = void 0, i) {
      const e = be;
      be = void 0;
      try {
        i();
      } finally {
        be = e;
      }
    }
  }
  var gi = 0;
  var fa = class {
    constructor(i, e) {
      this.sub = i, this.dep = e, this.version = e.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  };
  var on = class {
    constructor(i) {
      this.computed = i, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
    }
    track(i) {
      if (!be || !nt || be === this.computed) return;
      let e = this.activeLink;
      if (e === void 0 || e.sub !== be) e = this.activeLink = new fa(be, this), be.deps ? (e.prevDep = be.depsTail, be.depsTail.nextDep = e, be.depsTail = e) : be.deps = be.depsTail = e, Or(e);
      else if (e.version === -1 && (e.version = this.version, e.nextDep)) {
        const n = e.nextDep;
        n.prevDep = e.prevDep, e.prevDep && (e.prevDep.nextDep = n), e.prevDep = be.depsTail, e.nextDep = void 0, be.depsTail.nextDep = e, be.depsTail = e, be.deps === e && (be.deps = n);
      }
      return e;
    }
    trigger(i) {
      this.version++, gi++, this.notify(i);
    }
    notify(i) {
      Qn();
      try {
        for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
      } finally {
        $n();
      }
    }
  };
  function Or(t) {
    if (t.dep.sc++, t.sub.flags & 4) {
      const i = t.dep.computed;
      if (i && !t.dep.subs) {
        i.flags |= 20;
        for (let n = i.deps; n; n = n.nextDep) Or(n);
      }
      const e = t.dep.subs;
      e !== t && (t.prevSub = e, e && (e.nextSub = t)), t.dep.subs = t;
    }
  }
  var zi = /* @__PURE__ */ new WeakMap();
  var Nt = /* @__PURE__ */ Symbol("");
  var Hn = /* @__PURE__ */ Symbol("");
  var mi = /* @__PURE__ */ Symbol("");
  function ze(t, i, e) {
    if (nt && be) {
      let n = zi.get(t);
      n || zi.set(t, n = /* @__PURE__ */ new Map());
      let r = n.get(e);
      r || (n.set(e, r = new on()), r.map = n, r.key = e), r.track();
    }
  }
  function wt(t, i, e, n, r, s) {
    const o = zi.get(t);
    if (!o) {
      gi++;
      return;
    }
    const l = (a) => {
      a && a.trigger();
    };
    if (Qn(), i === "clear") o.forEach(l);
    else {
      const a = ue(t), u = a && tn(e);
      if (a && e === "length") {
        const c = Number(n);
        o.forEach((h, f) => {
          (f === "length" || f === mi || !Je(f) && f >= c) && l(h);
        });
      } else switch ((e !== void 0 || o.has(void 0)) && l(o.get(e)), u && l(o.get(mi)), i) {
        case "add":
          a ? u && l(o.get("length")) : (l(o.get(Nt)), Jt(t) && l(o.get(Hn)));
          break;
        case "delete":
          a || (l(o.get(Nt)), Jt(t) && l(o.get(Hn)));
          break;
        case "set":
          Jt(t) && l(o.get(Nt));
          break;
      }
    }
    $n();
  }
  function pa(t, i) {
    const e = zi.get(t);
    return e && e.get(i);
  }
  function Zt(t) {
    const i = we(t);
    return i === t ? i : (ze(i, "iterate", mi), Ye(t) ? i : i.map(st));
  }
  function an(t) {
    return ze(t = we(t), "iterate", mi), t;
  }
  function ct(t, i) {
    return Et(t) ? ti(Ut(t) ? st(i) : i) : st(i);
  }
  var ga = { __proto__: null, [Symbol.iterator]() {
    return xn(this, Symbol.iterator, (t) => ct(this, t));
  }, concat(...t) {
    return Zt(this).concat(...t.map((i) => ue(i) ? Zt(i) : i));
  }, entries() {
    return xn(this, "entries", (t) => (t[1] = ct(this, t[1]), t));
  }, every(t, i) {
    return mt(this, "every", t, i, void 0, arguments);
  }, filter(t, i) {
    return mt(this, "filter", t, i, (e) => e.map((n) => ct(this, n)), arguments);
  }, find(t, i) {
    return mt(this, "find", t, i, (e) => ct(this, e), arguments);
  }, findIndex(t, i) {
    return mt(this, "findIndex", t, i, void 0, arguments);
  }, findLast(t, i) {
    return mt(this, "findLast", t, i, (e) => ct(this, e), arguments);
  }, findLastIndex(t, i) {
    return mt(this, "findLastIndex", t, i, void 0, arguments);
  }, forEach(t, i) {
    return mt(this, "forEach", t, i, void 0, arguments);
  }, includes(...t) {
    return bn(this, "includes", t);
  }, indexOf(...t) {
    return bn(this, "indexOf", t);
  }, join(t) {
    return Zt(this).join(t);
  }, lastIndexOf(...t) {
    return bn(this, "lastIndexOf", t);
  }, map(t, i) {
    return mt(this, "map", t, i, void 0, arguments);
  }, pop() {
    return ri(this, "pop");
  }, push(...t) {
    return ri(this, "push", t);
  }, reduce(t, ...i) {
    return Cs(this, "reduce", t, i);
  }, reduceRight(t, ...i) {
    return Cs(this, "reduceRight", t, i);
  }, shift() {
    return ri(this, "shift");
  }, some(t, i) {
    return mt(this, "some", t, i, void 0, arguments);
  }, splice(...t) {
    return ri(this, "splice", t);
  }, toReversed() {
    return Zt(this).toReversed();
  }, toSorted(t) {
    return Zt(this).toSorted(t);
  }, toSpliced(...t) {
    return Zt(this).toSpliced(...t);
  }, unshift(...t) {
    return ri(this, "unshift", t);
  }, values() {
    return xn(this, "values", (t) => ct(this, t));
  } };
  function xn(t, i, e) {
    const n = an(t), r = n[i]();
    return n !== t && !Ye(t) && (r._next = r.next, r.next = () => {
      const s = r._next();
      return s.done || (s.value = e(s.value)), s;
    }), r;
  }
  var ma = Array.prototype;
  function mt(t, i, e, n, r, s) {
    const o = an(t), l = o !== t && !Ye(t), a = o[i];
    if (a !== ma[i]) {
      const h = a.apply(t, s);
      return l ? st(h) : h;
    }
    let u = e;
    o !== t && (l ? u = function(h, f) {
      return e.call(this, ct(t, h), f, t);
    } : e.length > 2 && (u = function(h, f) {
      return e.call(this, h, f, t);
    }));
    const c = a.call(o, u, n);
    return l && r ? r(c) : c;
  }
  function Cs(t, i, e, n) {
    const r = an(t), s = r !== t && !Ye(t);
    let o = e, l = false;
    r !== t && (s ? (l = n.length === 0, o = function(u, c, h) {
      return l && (l = false, u = ct(t, u)), e.call(this, u, ct(t, c), h, t);
    }) : e.length > 3 && (o = function(u, c, h) {
      return e.call(this, u, c, h, t);
    }));
    const a = r[i](o, ...n);
    return l ? ct(t, a) : a;
  }
  function bn(t, i, e) {
    const n = we(t);
    ze(n, "iterate", mi);
    const r = n[i](...e);
    return (r === -1 || r === false) && un(e[0]) ? (e[0] = we(e[0]), n[i](...e)) : r;
  }
  function ri(t, i, e = []) {
    xt(), Qn();
    const n = we(t)[i].apply(t, e);
    return $n(), bt(), n;
  }
  var va = Kn("__proto__,__v_isRef,__isVue");
  var Mr = new Set(Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Je));
  function ya(t) {
    Je(t) || (t = String(t));
    const i = we(this);
    return ze(i, "has", t), i.hasOwnProperty(t);
  }
  var Fr = class {
    constructor(i = false, e = false) {
      this._isReadonly = i, this._isShallow = e;
    }
    get(i, e, n) {
      if (e === "__v_skip") return i.__v_skip;
      const r = this._isReadonly, s = this._isShallow;
      if (e === "__v_isReactive") return !r;
      if (e === "__v_isReadonly") return r;
      if (e === "__v_isShallow") return s;
      if (e === "__v_raw") return n === (r ? s ? Ra : Br : s ? Hr : kr).get(i) || Object.getPrototypeOf(i) === Object.getPrototypeOf(n) ? i : void 0;
      const o = ue(i);
      if (!r) {
        let a;
        if (o && (a = ga[e])) return a;
        if (e === "hasOwnProperty") return ya;
      }
      const l = Reflect.get(i, e, Me(i) ? i : n);
      if ((Je(e) ? Mr.has(e) : va(e)) || (r || ze(i, "get", e), s)) return l;
      if (Me(l)) {
        const a = o && tn(e) ? l : l.value;
        return r && Te(a) ? Ni(a) : a;
      }
      return Te(l) ? r ? Ni(l) : ln(l) : l;
    }
  };
  var Lr = class extends Fr {
    constructor(i = false) {
      super(false, i);
    }
    set(i, e, n, r) {
      let s = i[e];
      const o = ue(i) && tn(e);
      if (!this._isShallow) {
        const u = Et(s);
        if (!Ye(n) && !Et(n) && (s = we(s), n = we(n)), !o && Me(s) && !Me(n)) return u || (s.value = n), true;
      }
      const l = o ? Number(e) < i.length : _e(i, e), a = Reflect.set(i, e, n, Me(i) ? i : r);
      return i === we(r) && a && (l ? dt(n, s) && wt(i, "set", e, n) : wt(i, "add", e, n)), a;
    }
    deleteProperty(i, e) {
      const n = _e(i, e);
      i[e];
      const r = Reflect.deleteProperty(i, e);
      return r && n && wt(i, "delete", e, void 0), r;
    }
    has(i, e) {
      const n = Reflect.has(i, e);
      return (!Je(e) || !Mr.has(e)) && ze(i, "has", e), n;
    }
    ownKeys(i) {
      return ze(i, "iterate", ue(i) ? "length" : Nt), Reflect.ownKeys(i);
    }
  };
  var wa = class extends Fr {
    constructor(i = false) {
      super(true, i);
    }
    set(i, e) {
      return true;
    }
    deleteProperty(i, e) {
      return true;
    }
  };
  var _a = new Lr();
  var Ta = new wa();
  var xa = new Lr(true);
  var Bn = (t) => t;
  var Ri = (t) => Reflect.getPrototypeOf(t);
  function ba(t, i, e) {
    return function(...n) {
      const r = this.__v_raw, s = we(r), o = Jt(s), l = t === "entries" || t === Symbol.iterator && o, a = t === "keys" && o, u = r[t](...n), c = e ? Bn : i ? ti : st;
      return !i && ze(s, "iterate", a ? Hn : Nt), Ue(Object.create(u), { next() {
        const { value: h, done: f } = u.next();
        return f ? { value: h, done: f } : { value: l ? [c(h[0]), c(h[1])] : c(h), done: f };
      } });
    };
  }
  function Di(t) {
    return function(...i) {
      return t === "delete" ? false : t === "clear" ? void 0 : this;
    };
  }
  function Ea(t, i) {
    const e = { get(r) {
      const s = this.__v_raw, o = we(s), l = we(r);
      t || (dt(r, l) && ze(o, "get", r), ze(o, "get", l));
      const { has: a } = Ri(o), u = i ? Bn : t ? ti : st;
      if (a.call(o, r)) return u(s.get(r));
      if (a.call(o, l)) return u(s.get(l));
      s !== o && s.get(r);
    }, get size() {
      const r = this.__v_raw;
      return !t && ze(we(r), "iterate", Nt), r.size;
    }, has(r) {
      const s = this.__v_raw, o = we(s), l = we(r);
      return t || (dt(r, l) && ze(o, "has", r), ze(o, "has", l)), r === l ? s.has(r) : s.has(r) || s.has(l);
    }, forEach(r, s) {
      const o = this, l = o.__v_raw, a = we(l), u = i ? Bn : t ? ti : st;
      return !t && ze(a, "iterate", Nt), l.forEach((c, h) => r.call(s, u(c), u(h), o));
    } };
    return Ue(e, t ? { add: Di("add"), set: Di("set"), delete: Di("delete"), clear: Di("clear") } : { add(r) {
      const s = we(this), o = Ri(s), l = we(r), a = !i && !Ye(r) && !Et(r) ? l : r;
      return o.has.call(s, a) || dt(r, a) && o.has.call(s, r) || dt(l, a) && o.has.call(s, l) || (s.add(a), wt(s, "add", a, a)), this;
    }, set(r, s) {
      !i && !Ye(s) && !Et(s) && (s = we(s));
      const o = we(this), { has: l, get: a } = Ri(o);
      let u = l.call(o, r);
      u || (r = we(r), u = l.call(o, r));
      const c = a.call(o, r);
      return o.set(r, s), u ? dt(s, c) && wt(o, "set", r, s) : wt(o, "add", r, s), this;
    }, delete(r) {
      const s = we(this), { has: o, get: l } = Ri(s);
      let a = o.call(s, r);
      a || (r = we(r), a = o.call(s, r)), l && l.call(s, r);
      const u = s.delete(r);
      return a && wt(s, "delete", r, void 0), u;
    }, clear() {
      const r = we(this), s = r.size !== 0, o = r.clear();
      return s && wt(r, "clear", void 0, void 0), o;
    } }), ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
      e[r] = ba(r, t, i);
    }), e;
  }
  function ts(t, i) {
    const e = Ea(t, i);
    return (n, r, s) => r === "__v_isReactive" ? !t : r === "__v_isReadonly" ? t : r === "__v_raw" ? n : Reflect.get(_e(e, r) && r in n ? e : n, r, s);
  }
  var Sa = { get: ts(false, false) };
  var Ca = { get: ts(false, true) };
  var Pa = { get: ts(true, false) };
  var kr = /* @__PURE__ */ new WeakMap();
  var Hr = /* @__PURE__ */ new WeakMap();
  var Br = /* @__PURE__ */ new WeakMap();
  var Ra = /* @__PURE__ */ new WeakMap();
  function Da(t) {
    switch (t) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function ln(t) {
    return Et(t) ? t : is(t, false, _a, Sa, kr);
  }
  function Ia(t) {
    return is(t, false, xa, Ca, Hr);
  }
  function Ni(t) {
    return is(t, true, Ta, Pa, Br);
  }
  function is(t, i, e, n, r) {
    if (!Te(t) || t.__v_raw && !(i && t.__v_isReactive) || t.__v_skip || !Object.isExtensible(t)) return t;
    const s = r.get(t);
    if (s) return s;
    const o = Da(ea(t));
    if (o === 0) return t;
    const l = new Proxy(t, o === 2 ? n : e);
    return r.set(t, l), l;
  }
  function Ut(t) {
    return Et(t) ? Ut(t.__v_raw) : !!(t && t.__v_isReactive);
  }
  function Et(t) {
    return !!(t && t.__v_isReadonly);
  }
  function Ye(t) {
    return !!(t && t.__v_isShallow);
  }
  function un(t) {
    return t ? !!t.__v_raw : false;
  }
  function we(t) {
    const i = t && t.__v_raw;
    return i ? we(i) : t;
  }
  function de(t) {
    return !_e(t, "__v_skip") && Object.isExtensible(t) && _r(t, "__v_skip", true), t;
  }
  var st = (t) => Te(t) ? ln(t) : t;
  var ti = (t) => Te(t) ? Ni(t) : t;
  function Me(t) {
    return t ? t.__v_isRef === true : false;
  }
  function vi(t) {
    return zr(t, false);
  }
  function We(t) {
    return zr(t, true);
  }
  function zr(t, i) {
    return Me(t) ? t : new Aa(t, i);
  }
  var Aa = class {
    constructor(i, e) {
      this.dep = new on(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = e ? i : we(i), this._value = e ? i : st(i), this.__v_isShallow = e;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(i) {
      const e = this._rawValue, n = this.__v_isShallow || Ye(i) || Et(i);
      i = n ? i : we(i), dt(i, e) && (this._rawValue = i, this._value = n ? i : st(i), this.dep.trigger());
    }
  };
  function cn(t) {
    return Me(t) ? t.value : t;
  }
  function Ce(t) {
    return he(t) ? t() : cn(t);
  }
  var Oa = { get: (t, i, e) => i === "__v_raw" ? t : cn(Reflect.get(t, i, e)), set: (t, i, e, n) => {
    const r = t[i];
    return Me(r) && !Me(e) ? (r.value = e, true) : Reflect.set(t, i, e, n);
  } };
  function Nr(t) {
    return Ut(t) ? t : new Proxy(t, Oa);
  }
  var Ma = class {
    constructor(i) {
      this.__v_isRef = true, this._value = void 0;
      const e = this.dep = new on(), { get: n, set: r } = i(e.track.bind(e), e.trigger.bind(e));
      this._get = n, this._set = r;
    }
    get value() {
      return this._value = this._get();
    }
    set value(i) {
      this._set(i);
    }
  };
  function Fa(t) {
    return new Ma(t);
  }
  var La = class {
    constructor(i, e, n) {
      this._object = i, this._defaultValue = n, this.__v_isRef = true, this._value = void 0, this._key = Je(e) ? e : String(e), this._raw = we(i);
      let r = true, s = i;
      if (!ue(i) || Je(this._key) || !tn(this._key)) do
        r = !un(s) || Ye(s);
      while (r && (s = s.__v_raw));
      this._shallow = r;
    }
    get value() {
      let i = this._object[this._key];
      return this._shallow && (i = cn(i)), this._value = i === void 0 ? this._defaultValue : i;
    }
    set value(i) {
      if (this._shallow && Me(this._raw[this._key])) {
        const e = this._object[this._key];
        if (Me(e)) {
          e.value = i;
          return;
        }
      }
      this._object[this._key] = i;
    }
    get dep() {
      return pa(this._raw, this._key);
    }
  };
  var ka = class {
    constructor(i) {
      this._getter = i, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
    }
    get value() {
      return this._value = this._getter();
    }
  };
  function Ha(t, i, e) {
    return Me(t) ? t : he(t) ? new ka(t) : Te(t) && arguments.length > 1 ? Ba(t, i, e) : vi(t);
  }
  function Ba(t, i, e) {
    return new La(t, i, e);
  }
  var za = class {
    constructor(i, e, n) {
      this.fn = i, this.setter = e, this._value = void 0, this.dep = new on(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = gi - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !e, this.isSSR = n;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && be !== this) return Pr(this, true), true;
    }
    get value() {
      const i = this.dep.track();
      return Ir(this), i && (i.version = this.dep.version), this._value;
    }
    set value(i) {
      this.setter && this.setter(i);
    }
  };
  function Na(t, i, e = false) {
    let n, r;
    return he(t) ? n = t : (n = t.get, r = t.set), new za(n, r, e);
  }
  var Ii = {};
  var Ui = /* @__PURE__ */ new WeakMap();
  var Lt;
  function Ua(t, i = false, e = Lt) {
    if (e) {
      let n = Ui.get(e);
      n || Ui.set(e, n = []), n.push(t);
    }
  }
  function Va(t, i, e = xe) {
    const { immediate: n, deep: r, once: s, scheduler: o, augmentJob: l, call: a } = e, u = (L) => r ? L : Ye(L) || r === false || r === 0 ? _t(L, 1) : _t(L);
    let c, h, f, m, v = false, y = false;
    if (Me(t) ? (h = () => t.value, v = Ye(t)) : Ut(t) ? (h = () => u(t), v = true) : ue(t) ? (y = true, v = t.some((L) => Ut(L) || Ye(L)), h = () => t.map((L) => {
      if (Me(L)) return L.value;
      if (Ut(L)) return u(L);
      if (he(L)) return a ? a(L, 2) : L();
    })) : he(t) ? i ? h = a ? () => a(t, 2) : t : h = () => {
      if (f) {
        xt();
        try {
          f();
        } finally {
          bt();
        }
      }
      const L = Lt;
      Lt = c;
      try {
        return a ? a(t, 3, [m]) : t(m);
      } finally {
        Lt = L;
      }
    } : h = ft, i && r) {
      const L = h, U = r === true ? 1 / 0 : r;
      h = () => _t(L(), U);
    }
    const T = Er(), x = () => {
      c.stop(), T && T.active && Xn(T.effects, c);
    };
    if (s && i) {
      const L = i;
      i = (...U) => {
        const K = L(...U);
        return x(), K;
      };
    }
    let E = y ? new Array(t.length).fill(Ii) : Ii;
    const M = (L) => {
      if (!(!(c.flags & 1) || !c.dirty && !L)) if (i) {
        const U = c.run();
        if (L || r || v || (y ? U.some((K, q) => dt(K, E[q])) : dt(U, E))) {
          f && f();
          const K = Lt;
          Lt = c;
          try {
            const q = [U, E === Ii ? void 0 : y && E[0] === Ii ? [] : E, m];
            E = U, a ? a(i, 3, q) : i(...q);
          } finally {
            Lt = K;
          }
        }
      } else c.run();
    };
    return l && l(M), c = new Sr(h), c.scheduler = o ? () => o(M, false) : M, m = (L) => Ua(L, false, c), f = c.onStop = () => {
      const L = Ui.get(c);
      if (L) {
        if (a) a(L, 4);
        else for (const U of L) U();
        Ui.delete(c);
      }
    }, i ? n ? M(true) : E = c.run() : o ? o(M.bind(null, true), true) : c.run(), x.pause = c.pause.bind(c), x.resume = c.resume.bind(c), x.stop = x, x;
  }
  function _t(t, i = 1 / 0, e) {
    if (i <= 0 || !Te(t) || t.__v_skip || (e = e || /* @__PURE__ */ new Map(), (e.get(t) || 0) >= i)) return t;
    if (e.set(t, i), i--, Me(t)) _t(t.value, i, e);
    else if (ue(t)) for (let n = 0; n < t.length; n++) _t(t[n], i, e);
    else if (mr(t) || Jt(t)) t.forEach((n) => {
      _t(n, i, e);
    });
    else if (wr(t)) {
      for (const n in t) _t(t[n], i, e);
      for (const n of Object.getOwnPropertySymbols(t)) Object.prototype.propertyIsEnumerable.call(t, n) && _t(t[n], i, e);
    }
    return t;
  }
  function Si(t, i, e, n) {
    try {
      return n ? t(...n) : t();
    } catch (r) {
      hn(r, i, e);
    }
  }
  function rt(t, i, e, n) {
    if (he(t)) {
      const r = Si(t, i, e, n);
      return r && vr(r) && r.catch((s) => {
        hn(s, i, e);
      }), r;
    }
    if (ue(t)) {
      const r = [];
      for (let s = 0; s < t.length; s++) r.push(rt(t[s], i, e, n));
      return r;
    }
  }
  function hn(t, i, e, n = true) {
    const r = i ? i.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: o } = i && i.appContext.config || xe;
    if (i) {
      let l = i.parent;
      const a = i.proxy, u = `https://vuejs.org/error-reference/#runtime-${e}`;
      for (; l; ) {
        const c = l.ec;
        if (c) {
          for (let h = 0; h < c.length; h++) if (c[h](t, a, u) === false) return;
        }
        l = l.parent;
      }
      if (s) {
        xt(), Si(s, null, 10, [t, a, u]), bt();
        return;
      }
    }
    Wa(t, e, r, n, o);
  }
  function Wa(t, i, e, n = true, r = false) {
    if (r) throw t;
    console.error(t);
  }
  var je = [];
  var ut = -1;
  var Qt = [];
  var Dt = null;
  var Kt = 0;
  var Ur = Promise.resolve();
  var Vi = null;
  function ns(t) {
    const i = Vi || Ur;
    return t ? i.then(this ? t.bind(this) : t) : i;
  }
  function ja(t) {
    let i = ut + 1, e = je.length;
    for (; i < e; ) {
      const n = i + e >>> 1, r = je[n], s = yi(r);
      s < t || s === t && r.flags & 2 ? i = n + 1 : e = n;
    }
    return i;
  }
  function ss(t) {
    if (!(t.flags & 1)) {
      const i = yi(t), e = je[je.length - 1];
      !e || !(t.flags & 2) && i >= yi(e) ? je.push(t) : je.splice(ja(i), 0, t), t.flags |= 1, Vr();
    }
  }
  function Vr() {
    Vi || (Vi = Ur.then(jr));
  }
  function Ga(t) {
    if (!ue(t)) Dt && t.id === -1 ? Dt.splice(Kt + 1, 0, t) : t.flags & 1 || (Qt.push(t), t.flags |= 1);
    else for (let i = 0; i < t.length; i++) Qt.push(t[i]);
    Vr();
  }
  function Ps(t, i, e = ut + 1) {
    for (; e < je.length; e++) {
      const n = je[e];
      if (n && n.flags & 2) {
        if (t && n.id !== t.uid) continue;
        je.splice(e, 1), e--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
      }
    }
  }
  function Wr(t) {
    if (Qt.length) {
      const i = [...new Set(Qt)].sort((e, n) => yi(e) - yi(n));
      if (Qt.length = 0, Dt) {
        for (let e = 0; e < i.length; e++) Dt.push(i[e]);
        return;
      }
      for (Dt = i, Kt = 0; Kt < Dt.length; Kt++) {
        const e = Dt[Kt];
        e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
      }
      Dt = null, Kt = 0;
    }
  }
  var yi = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
  function jr(t) {
    try {
      for (ut = 0; ut < je.length; ut++) {
        const i = je[ut];
        i && !(i.flags & 8) && (i.flags & 4 && (i.flags &= -2), Si(i, i.i, i.i ? 15 : 14), i.flags & 4 || (i.flags &= -2));
      }
    } finally {
      for (; ut < je.length; ut++) {
        const i = je[ut];
        i && (i.flags &= -2);
      }
      ut = -1, je.length = 0, Wr(), Vi = null, (je.length || Qt.length) && jr();
    }
  }
  var ke = null;
  var Gr = null;
  function Wi(t) {
    const i = ke;
    return ke = t, Gr = t && t.type.__scopeId || null, i;
  }
  function $e(t, i = ke, e) {
    if (!i || t._n) return t;
    const n = (...r) => {
      n._d && Zi(-1);
      const s = Wi(i), o = Tt.length;
      let l;
      try {
        l = t(...r);
      } finally {
        for (let a = Tt.length; a > o; a--) hs();
        Wi(s), n._d && Zi(1);
      }
      return l;
    };
    return n._n = true, n._c = true, n._d = true, n;
  }
  function Be(t, i) {
    if (ke === null) return t;
    const e = mn(ke), n = t.dirs || (t.dirs = []);
    for (let r = 0; r < i.length; r++) {
      let [s, o, l, a = xe] = i[r];
      s && (he(s) && (s = { mounted: s, updated: s }), s.deep && _t(o), n.push({ dir: s, instance: e, value: o, oldValue: void 0, arg: l, modifiers: a }));
    }
    return t;
  }
  function Mt(t, i, e, n) {
    const r = t.dirs, s = i && i.dirs;
    for (let o = 0; o < r.length; o++) {
      const l = r[o];
      s && (l.oldValue = s[o].value);
      let a = l.dir[n];
      a && (xt(), rt(a, e, 8, [t.el, l, t, i]), bt());
    }
  }
  function qa(t, i) {
    if (Ne) {
      let e = Ne.provides;
      const n = Ne.parent && Ne.parent.provides;
      n === e && (e = Ne.provides = Object.create(n)), e[t] = i;
    }
  }
  function Fi(t, i, e = false) {
    const n = Ci();
    if (n || ei) {
      let r = ei ? ei._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
      if (r && t in r) return r[t];
      if (arguments.length > 1) return e && he(i) ? i.call(n && n.proxy) : i;
    }
  }
  var Za = /* @__PURE__ */ Symbol.for("v-scx");
  var Ka = () => Fi(Za);
  function Rs(t, i) {
    return rs(t, null, i);
  }
  function it(t, i, e) {
    return rs(t, i, e);
  }
  function rs(t, i, e = xe) {
    const { immediate: n, deep: r, flush: s, once: o } = e, l = Ue({}, e), a = i && n || !i && s !== "post";
    let u;
    if (xi) {
      if (s === "sync") {
        const m = Ka();
        u = m.__watcherHandles || (m.__watcherHandles = []);
      } else if (!a) {
        const m = () => {
        };
        return m.stop = ft, m.resume = ft, m.pause = ft, m;
      }
    }
    const c = Ne;
    l.call = (m, v, y) => rt(m, c, v, y);
    let h = false;
    s === "post" ? l.scheduler = (m) => {
      Ze(m, c && c.suspense);
    } : s !== "sync" && (h = true, l.scheduler = (m, v) => {
      v ? m() : ss(m);
    }), l.augmentJob = (m) => {
      i && (m.flags |= 4), h && (m.flags |= 2, c && (m.id = c.uid, m.i = c));
    };
    const f = Va(t, i, l);
    return xi && (u ? u.push(f) : a && f()), f;
  }
  function Xa(t, i, e) {
    const n = this.proxy, r = Re(t) ? t.includes(".") ? qr(n, t) : () => n[t] : t.bind(n, n);
    let s;
    he(i) ? s = i : (s = i.handler, e = i);
    const o = Pi(this), l = rs(r, s.bind(n), e);
    return o(), l;
  }
  function qr(t, i) {
    const e = i.split(".");
    return () => {
      let n = t;
      for (let r = 0; r < e.length && n; r++) n = n[e[r]];
      return n;
    };
  }
  var Ya = /* @__PURE__ */ Symbol("_vte");
  var dn = (t) => t.__isTeleport;
  var En = /* @__PURE__ */ Symbol("_leaveCb");
  function Ja(t) {
    let i = t[0];
    if (t.length > 1) {
      for (const e of t) if (e.type !== pt) {
        i = e;
        break;
      }
    }
    return i;
  }
  function Zr(t) {
    if (!as(t)) return dn(t.type) && t.children ? Ja(t.children) : t;
    if (t.component) return t.component.subTree;
    const { shapeFlag: i, children: e } = t;
    if (e) {
      if (i & 16) return e[0];
      if (i & 32 && he(e.default)) return e.default();
    }
  }
  function os(t, i) {
    if (t.shapeFlag & 6 && t.component) {
      t.transition = i;
      const e = t.component.subTree;
      os(dn(e.type) && Zr(e) || e, i);
    } else t.shapeFlag & 128 ? (t.ssContent.transition = i.clone(t.ssContent), t.ssFallback.transition = i.clone(t.ssFallback)) : t.transition = i;
  }
  function ji() {
    const t = Ci();
    return t ? (t.appContext.config.idPrefix || "v") + "-" + t.ids[0] + t.ids[1]++ : "";
  }
  function Kr(t) {
    t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
  }
  function Qa(t) {
    const i = Ci(), e = We(null);
    if (i) {
      const r = i.refs === xe ? i.refs = {} : i.refs;
      Object.defineProperty(r, t, { enumerable: true, get: () => e.value, set: (s) => e.value = s });
    }
    return e;
  }
  function Ds(t, i) {
    let e;
    return !!((e = Object.getOwnPropertyDescriptor(t, i)) && !e.configurable);
  }
  var Gi = /* @__PURE__ */ new WeakMap();
  function fi(t, i, e, n, r = false) {
    if (ue(t)) {
      t.forEach((y, T) => fi(y, i && (ue(i) ? i[T] : i), e, n, r));
      return;
    }
    if ($t(n) && !r) {
      n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && fi(t, i, e, n.component.subTree);
      return;
    }
    const s = n.shapeFlag & 4 ? mn(n.component) : n.el, o = r ? null : s, { i: l, r: a } = t, u = i && i.r, c = l.refs === xe ? l.refs = {} : l.refs, h = l.setupState, f = we(h), m = h === xe ? gr : (y) => Ds(c, y) ? false : _e(f, y), v = (y, T) => !(T && Ds(c, T));
    if (u != null && u !== a) {
      if (Is(i), Re(u)) c[u] = null, m(u) && (h[u] = null);
      else if (Me(u)) {
        const y = i;
        v(u, y.k) && (u.value = null), y.k && (c[y.k] = null);
      }
    }
    if (he(a)) Si(a, l, 12, [o, c]);
    else {
      const y = Re(a), T = Me(a);
      if (y || T) {
        const x = () => {
          if (t.f) {
            const E = y ? m(a) ? h[a] : c[a] : v() || !t.k ? a.value : c[t.k];
            if (r) ue(E) && Xn(E, s);
            else if (ue(E)) E.includes(s) || E.push(s);
            else if (y) c[a] = [s], m(a) && (h[a] = c[a]);
            else {
              const M = [s];
              v(a, t.k) && (a.value = M), t.k && (c[t.k] = M);
            }
          } else y ? (c[a] = o, m(a) && (h[a] = o)) : T && (v(a, t.k) && (a.value = o), t.k && (c[t.k] = o));
        };
        if (o) {
          const E = () => {
            x(), Gi.delete(t);
          };
          E.id = -1, Gi.set(t, E), Ze(E, e);
        } else Is(t), x();
      }
    }
  }
  function Is(t) {
    const i = Gi.get(t);
    i && (i.flags |= 8, Gi.delete(t));
  }
  rn().requestIdleCallback;
  rn().cancelIdleCallback;
  var $t = (t) => !!t.type.__asyncLoader;
  var as = (t) => t.type.__isKeepAlive;
  function $a(t, i) {
    Xr(t, "a", i);
  }
  function el(t, i) {
    Xr(t, "da", i);
  }
  function Xr(t, i, e = Ne) {
    const n = t.__wdc || (t.__wdc = () => {
      let r = e;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return t();
    });
    if (fn(i, n, e), e) {
      let r = e.parent;
      for (; r && r.parent; ) as(r.parent.vnode) && tl(n, i, e, r), r = r.parent;
    }
  }
  function tl(t, i, e, n) {
    const r = fn(i, t, n, true);
    Yr(() => {
      Xn(n[i], r);
    }, e);
  }
  function fn(t, i, e = Ne, n = false) {
    if (e) {
      const r = e[t] || (e[t] = []), s = i.__weh || (i.__weh = (...o) => {
        xt();
        const l = Pi(e), a = rt(i, e, t, o);
        return l(), bt(), a;
      });
      return n ? r.unshift(s) : r.push(s), s;
    }
  }
  var St = (t) => (i, e = Ne) => {
    (!xi || t === "sp") && fn(t, (...n) => i(...n), e);
  };
  var il = St("bm");
  var ls = St("m");
  var nl = St("bu");
  var sl = St("u");
  var rl = St("bum");
  var Yr = St("um");
  var ol = St("sp");
  var al = St("rtg");
  var ll = St("rtc");
  function ul(t, i = Ne) {
    fn("ec", t, i);
  }
  var Jr = "components";
  function Qr(t, i) {
    return eo(Jr, t, true, i) || t;
  }
  var $r = /* @__PURE__ */ Symbol.for("v-ndc");
  function cl(t) {
    return Re(t) ? eo(Jr, t, false) || t : t || $r;
  }
  function eo(t, i, e = true, n = false) {
    const r = ke || Ne;
    if (r) {
      const s = r.type;
      {
        const l = Zl(s, false);
        if (l && (l === i || l === Ge(i) || l === sn(Ge(i)))) return s;
      }
      const o = As(r[t] || s[t], i) || As(r.appContext[t], i);
      return !o && n ? s : o;
    }
  }
  function As(t, i) {
    return t && (t[i] || t[Ge(i)] || t[sn(Ge(i))]);
  }
  function Ee(t, i, e, n) {
    let r;
    const s = e, o = ue(t);
    if (o || Re(t)) {
      const l = o && Ut(t);
      let a = false, u = false;
      l && (a = !Ye(t), u = Et(t), t = an(t)), r = new Array(t.length);
      for (let c = 0, h = t.length; c < h; c++) r[c] = i(a ? u ? ti(st(t[c])) : st(t[c]) : t[c], c, void 0, s);
    } else if (typeof t == "number") {
      r = new Array(t);
      for (let l = 0; l < t; l++) r[l] = i(l + 1, l, void 0, s);
    } else if (Te(t)) if (t[Symbol.iterator]) r = Array.from(t, (l, a) => i(l, a, void 0, s));
    else {
      const l = Object.keys(t);
      r = new Array(l.length);
      for (let a = 0, u = l.length; a < u; a++) {
        const c = l[a];
        r[a] = i(t[c], c, a, s);
      }
    }
    else r = [];
    return r;
  }
  function Os(t, i, e, n, r, s) {
    if (e == null && (e = {}), ke.ce || ke.parent && $t(ke.parent) && ke.parent.ce) {
      const u = e, c = Object.keys(u).length > 0;
      return i !== "default" && (u.name = i), S(), le(se, null, [ee("slot", u, n)], c ? -2 : 64);
    }
    let o = t[i];
    o && o._c && (o._d = false);
    const l = Tt.length;
    S();
    let a;
    try {
      const u = o && to(o(e)), c = e.key || s || u && u.key;
      a = le(se, { key: (c && !Je(c) ? c : `_${i}`) + (!u && n ? "_fb" : "") }, u || (n ? n() : []), u && t._ === 1 ? 64 : -2);
    } catch (u) {
      for (let c = Tt.length; c > l; c--) hs();
      throw u;
    } finally {
      o && o._c && (o._d = true);
    }
    return a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), a;
  }
  function to(t) {
    return t.some((i) => _i(i) ? !(i.type === pt || i.type === se && !to(i.children)) : true) ? t : null;
  }
  var zn = (t) => t ? xo(t) ? mn(t) : zn(t.parent) : null;
  var pi = Ue(/* @__PURE__ */ Object.create(null), { $: (t) => t, $el: (t) => t.vnode.el, $data: (t) => t.data, $props: (t) => t.props, $attrs: (t) => t.attrs, $slots: (t) => t.slots, $refs: (t) => t.refs, $parent: (t) => zn(t.parent), $root: (t) => zn(t.root), $host: (t) => t.ce, $emit: (t) => t.emit, $options: (t) => no(t), $forceUpdate: (t) => t.f || (t.f = () => {
    ss(t.update);
  }), $nextTick: (t) => t.n || (t.n = ns.bind(t.proxy)), $watch: (t) => Xa.bind(t) });
  var Sn = (t, i) => t !== xe && !t.__isScriptSetup && _e(t, i);
  var hl = { get({ _: t }, i) {
    if (i === "__v_skip") return true;
    const { ctx: e, setupState: n, data: r, props: s, accessCache: o, type: l, appContext: a } = t;
    if (i[0] !== "$") {
      const f = o[i];
      if (f !== void 0) switch (f) {
        case 1:
          return n[i];
        case 2:
          return r[i];
        case 4:
          return e[i];
        case 3:
          return s[i];
      }
      else {
        if (Sn(n, i)) return o[i] = 1, n[i];
        if (r !== xe && _e(r, i)) return o[i] = 2, r[i];
        if (_e(s, i)) return o[i] = 3, s[i];
        if (e !== xe && _e(e, i)) return o[i] = 4, e[i];
        Nn && (o[i] = 0);
      }
    }
    const u = pi[i];
    let c, h;
    if (u) return i === "$attrs" && ze(t.attrs, "get", ""), u(t);
    if ((c = l.__cssModules) && (c = c[i])) return c;
    if (e !== xe && _e(e, i)) return o[i] = 4, e[i];
    if (h = a.config.globalProperties, _e(h, i)) return h[i];
  }, set({ _: t }, i, e) {
    const { data: n, setupState: r, ctx: s } = t;
    return Sn(r, i) ? (r[i] = e, true) : n !== xe && _e(n, i) ? (n[i] = e, true) : _e(t.props, i) || i[0] === "$" && i.slice(1) in t ? false : (s[i] = e, true);
  }, has({ _: { data: t, setupState: i, accessCache: e, ctx: n, appContext: r, props: s, type: o } }, l) {
    let a;
    return !!(e[l] || t !== xe && l[0] !== "$" && _e(t, l) || Sn(i, l) || _e(s, l) || _e(n, l) || _e(pi, l) || _e(r.config.globalProperties, l) || (a = o.__cssModules) && a[l]);
  }, defineProperty(t, i, e) {
    return e.get != null ? t._.accessCache[i] = 0 : _e(e, "value") && this.set(t, i, e.value, null), Reflect.defineProperty(t, i, e);
  } };
  function Ms(t) {
    return ue(t) ? t.reduce((i, e) => (i[e] = null, i), {}) : t;
  }
  var Nn = true;
  function dl(t) {
    const i = no(t), e = t.proxy, n = t.ctx;
    Nn = false, i.beforeCreate && Fs(i.beforeCreate, t, "bc");
    const { data: r, computed: s, methods: o, watch: l, provide: a, inject: u, created: c, beforeMount: h, mounted: f, beforeUpdate: m, updated: v, activated: y, deactivated: T, beforeDestroy: x, beforeUnmount: E, destroyed: M, unmounted: L, render: U, renderTracked: K, renderTriggered: q, errorCaptured: Y, serverPrefetch: te, expose: fe, inheritAttrs: $, components: j, directives: ie, filters: ce } = i;
    if (u && fl(u, n, null), o) for (const pe in o) {
      const oe = o[pe];
      he(oe) && (n[pe] = oe.bind(e));
    }
    if (r) {
      const pe = r.call(e, e);
      Te(pe) && (t.data = ln(pe));
    }
    if (Nn = true, s) for (const pe in s) {
      const oe = s[pe], Ae = he(oe) ? oe.bind(e, e) : he(oe.get) ? oe.get.bind(e, e) : ft, De = !he(oe) && he(oe.set) ? oe.set.bind(e) : ft, et = Le({ get: Ae, set: De });
      Object.defineProperty(n, pe, { enumerable: true, configurable: true, get: () => et.value, set: (qe) => et.value = qe });
    }
    if (l) for (const pe in l) io(l[pe], n, e, pe);
    if (a) {
      const pe = he(a) ? a.call(e) : a;
      Reflect.ownKeys(pe).forEach((oe) => {
        qa(oe, pe[oe]);
      });
    }
    c && Fs(c, t, "c");
    function me(pe, oe) {
      ue(oe) ? oe.forEach((Ae) => pe(Ae.bind(e))) : oe && pe(oe.bind(e));
    }
    if (me(il, h), me(ls, f), me(nl, m), me(sl, v), me($a, y), me(el, T), me(ul, Y), me(ll, K), me(al, q), me(rl, E), me(Yr, L), me(ol, te), ue(fe)) if (fe.length) {
      const pe = t.exposed || (t.exposed = {});
      fe.forEach((oe) => {
        Object.defineProperty(pe, oe, { get: () => e[oe], set: (Ae) => e[oe] = Ae, enumerable: true });
      });
    } else t.exposed || (t.exposed = {});
    U && t.render === ft && (t.render = U), $ != null && (t.inheritAttrs = $), j && (t.components = j), ie && (t.directives = ie), te && Kr(t);
  }
  function fl(t, i, e = ft) {
    ue(t) && (t = Un(t));
    for (const n in t) {
      const r = t[n];
      let s;
      Te(r) ? "default" in r ? s = Fi(r.from || n, r.default, true) : s = Fi(r.from || n) : s = Fi(r), Me(s) ? Object.defineProperty(i, n, { enumerable: true, configurable: true, get: () => s.value, set: (o) => s.value = o }) : i[n] = s;
    }
  }
  function Fs(t, i, e) {
    rt(ue(t) ? t.map((n) => n.bind(i.proxy)) : t.bind(i.proxy), i, e);
  }
  function io(t, i, e, n) {
    let r = n.includes(".") ? qr(e, n) : () => e[n];
    if (Re(t)) {
      const s = i[t];
      he(s) && it(r, s);
    } else if (he(t)) it(r, t.bind(e));
    else if (Te(t)) if (ue(t)) t.forEach((s) => io(s, i, e, n));
    else {
      const s = he(t.handler) ? t.handler.bind(e) : i[t.handler];
      he(s) && it(r, s, t);
    }
  }
  function no(t) {
    const i = t.type, { mixins: e, extends: n } = i, { mixins: r, optionsCache: s, config: { optionMergeStrategies: o } } = t.appContext, l = s.get(i);
    let a;
    return l ? a = l : !r.length && !e && !n ? a = i : (a = {}, r.length && r.forEach((u) => qi(a, u, o, true)), qi(a, i, o)), Te(i) && s.set(i, a), a;
  }
  function qi(t, i, e, n = false) {
    const { mixins: r, extends: s } = i;
    s && qi(t, s, e, true), r && r.forEach((o) => qi(t, o, e, true));
    for (const o in i) if (!(n && o === "expose")) {
      const l = pl[o] || e && e[o];
      t[o] = l ? l(t[o], i[o]) : i[o];
    }
    return t;
  }
  var pl = { data: Ls, props: ks, emits: ks, methods: li, computed: li, beforeCreate: Ve, created: Ve, beforeMount: Ve, mounted: Ve, beforeUpdate: Ve, updated: Ve, beforeDestroy: Ve, beforeUnmount: Ve, destroyed: Ve, unmounted: Ve, activated: Ve, deactivated: Ve, errorCaptured: Ve, serverPrefetch: Ve, components: li, directives: li, watch: ml, provide: Ls, inject: gl };
  function Ls(t, i) {
    return i ? t ? function() {
      return Ue(he(t) ? t.call(this, this) : t, he(i) ? i.call(this, this) : i);
    } : i : t;
  }
  function gl(t, i) {
    return li(Un(t), Un(i));
  }
  function Un(t) {
    if (ue(t)) {
      const i = {};
      for (let e = 0; e < t.length; e++) i[t[e]] = t[e];
      return i;
    }
    return t;
  }
  function Ve(t, i) {
    return t ? [...new Set([].concat(t, i))] : i;
  }
  function li(t, i) {
    return t ? Ue(/* @__PURE__ */ Object.create(null), t, i) : i;
  }
  function ks(t, i) {
    return t ? ue(t) && ue(i) ? [.../* @__PURE__ */ new Set([...t, ...i])] : Ue(/* @__PURE__ */ Object.create(null), Ms(t), Ms(i ?? {})) : i;
  }
  function ml(t, i) {
    if (!t) return i;
    if (!i) return t;
    const e = Ue(/* @__PURE__ */ Object.create(null), t);
    for (const n in i) e[n] = Ve(t[n], i[n]);
    return e;
  }
  function so() {
    return { app: null, config: { isNativeTag: gr, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
  }
  var vl = 0;
  function yl(t, i) {
    return function(n, r = null) {
      he(n) || (n = Ue({}, n)), r != null && !Te(r) && (r = null);
      const s = so(), o = /* @__PURE__ */ new WeakSet(), l = [];
      let a = false;
      const u = s.app = { _uid: vl++, _component: n, _props: r, _container: null, _context: s, _instance: null, version: Yl, get config() {
        return s.config;
      }, set config(c) {
      }, use(c, ...h) {
        return o.has(c) || (c && he(c.install) ? (o.add(c), c.install(u, ...h)) : he(c) && (o.add(c), c(u, ...h))), u;
      }, mixin(c) {
        return s.mixins.includes(c) || s.mixins.push(c), u;
      }, component(c, h) {
        return h ? (s.components[c] = h, u) : s.components[c];
      }, directive(c, h) {
        return h ? (s.directives[c] = h, u) : s.directives[c];
      }, mount(c, h, f) {
        if (!a) {
          const m = u._ceVNode || ee(n, r);
          return m.appContext = s, f === true ? f = "svg" : f === false && (f = void 0), t(m, c, f), a = true, u._container = c, c.__vue_app__ = u, mn(m.component);
        }
      }, onUnmount(c) {
        l.push(c);
      }, unmount() {
        a && (rt(l, u._instance, 16), t(null, u._container), delete u._container.__vue_app__);
      }, provide(c, h) {
        return s.provides[c] = h, u;
      }, runWithContext(c) {
        const h = ei;
        ei = u;
        try {
          return c();
        } finally {
          ei = h;
        }
      } };
      return u;
    };
  }
  var ei = null;
  var wl = (t, i) => i === "modelValue" || i === "model-value" ? t.modelModifiers : t[`${i}Modifiers`] || t[`${Ge(i)}Modifiers`] || t[`${At(i)}Modifiers`];
  function _l(t, i, ...e) {
    if (t.isUnmounted) return;
    const n = t.vnode.props || xe;
    let r = e;
    const s = i.startsWith("update:"), o = s && wl(n, i.slice(7));
    o && (o.trim && (r = e.map((c) => Re(c) ? c.trim() : c)), o.number && (r = e.map(Yn)));
    let l, a = n[l = wn(i)] || n[l = wn(Ge(i))];
    !a && s && (a = n[l = wn(At(i))]), a && rt(a, t, 6, r);
    const u = n[l + "Once"];
    if (u) {
      if (!t.emitted) t.emitted = {};
      else if (t.emitted[l]) return;
      t.emitted[l] = true, rt(u, t, 6, r);
    }
  }
  var Tl = /* @__PURE__ */ new WeakMap();
  function ro(t, i, e = false) {
    const n = e ? Tl : i.emitsCache, r = n.get(t);
    if (r !== void 0) return r;
    const s = t.emits;
    let o = {}, l = false;
    if (!he(t)) {
      const a = (u) => {
        const c = ro(u, i, true);
        c && (l = true, Ue(o, c));
      };
      !e && i.mixins.length && i.mixins.forEach(a), t.extends && a(t.extends), t.mixins && t.mixins.forEach(a);
    }
    return !s && !l ? (Te(t) && n.set(t, null), null) : (ue(s) ? s.forEach((a) => o[a] = null) : Ue(o, s), Te(t) && n.set(t, o), o);
  }
  function pn(t, i) {
    return !t || !$i(i) ? false : (i = i.slice(2), i = i === "Once" ? i : i.replace(/Once$/, ""), _e(t, i[0].toLowerCase() + i.slice(1)) || _e(t, At(i)) || _e(t, i));
  }
  function Hs(t) {
    const { type: i, vnode: e, proxy: n, withProxy: r, propsOptions: [s], slots: o, attrs: l, emit: a, render: u, renderCache: c, props: h, data: f, setupState: m, ctx: v, inheritAttrs: y } = t, T = Wi(t);
    let x, E;
    try {
      if (e.shapeFlag & 4) {
        const L = r || n, U = L;
        x = ht(u.call(U, L, c, h, m, f, v)), E = l;
      } else {
        const L = i;
        x = ht(L.length > 1 ? L(h, { attrs: l, slots: o, emit: a }) : L(h, null)), E = i.props ? l : xl(l);
      }
    } catch (L) {
      Tt.length = 0, hn(L, t, 1), x = ee(pt);
    }
    let M = x;
    if (E && y !== false) {
      const L = Object.keys(E), { shapeFlag: U } = M;
      L.length && U & 7 && (s && L.some(en) && (E = bl(E, s)), M = ii(M, E, false, true));
    }
    if (e.dirs && (M = ii(M, null, false, true), M.dirs = M.dirs ? M.dirs.concat(e.dirs) : e.dirs), e.transition) {
      const L = dn(M.type) && Zr(M) || M;
      os(L, e.transition);
    }
    return x = M, Wi(T), x;
  }
  var xl = (t) => {
    let i;
    for (const e in t) (e === "class" || e === "style" || $i(e)) && ((i || (i = {}))[e] = t[e]);
    return i;
  };
  var bl = (t, i) => {
    const e = {};
    for (const n in t) (!en(n) || !(n.slice(9) in i)) && (e[n] = t[n]);
    return e;
  };
  function El(t, i, e) {
    const { props: n, children: r, component: s } = t, { props: o, children: l, patchFlag: a } = i, u = s.emitsOptions;
    if (i.dirs || i.transition) return true;
    if (e && a >= 0) {
      if (a & 1024) return true;
      if (a & 16) return n ? Bs(n, o, u) : !!o;
      if (a & 8) {
        const c = i.dynamicProps;
        for (let h = 0; h < c.length; h++) {
          const f = c[h];
          if (oo(o, n, f) && !pn(u, f)) return true;
        }
      }
    } else return (r || l) && (!l || !l.$stable) ? true : n === o ? false : n ? o ? Bs(n, o, u) : true : !!o;
    return false;
  }
  function Bs(t, i, e) {
    const n = Object.keys(i);
    if (n.length !== Object.keys(t).length) return true;
    for (let r = 0; r < n.length; r++) {
      const s = n[r];
      if (oo(i, t, s) && !pn(e, s)) return true;
    }
    return false;
  }
  function oo(t, i, e) {
    const n = t[e], r = i[e];
    return e === "style" && Te(n) && Te(r) ? !Jn(n, r) : n !== r;
  }
  function Sl({ vnode: t, parent: i, suspense: e }, n) {
    for (; i; ) {
      const r = i.subTree;
      if (r.suspense && r.suspense.activeBranch === t && (r.suspense.vnode.el = r.el = n, t = r), r === t) (t = i.vnode).el = n, i = i.parent;
      else break;
    }
    e && e.activeBranch === t && (e.vnode.el = n);
  }
  var ao = {};
  var lo = () => Object.create(ao);
  var uo = (t) => Object.getPrototypeOf(t) === ao;
  function Cl(t, i, e, n = false) {
    const r = {}, s = lo();
    t.propsDefaults = /* @__PURE__ */ Object.create(null), co(t, i, r, s);
    for (const o in t.propsOptions[0]) o in r || (r[o] = void 0);
    e ? t.props = n ? r : Ia(r) : t.type.props ? t.props = r : t.props = s, t.attrs = s;
  }
  function Pl(t, i, e, n) {
    const { props: r, attrs: s, vnode: { patchFlag: o } } = t, l = we(r), [a] = t.propsOptions;
    let u = false;
    if ((n || o > 0) && !(o & 16)) {
      if (o & 8) {
        const c = t.vnode.dynamicProps;
        for (let h = 0; h < c.length; h++) {
          let f = c[h];
          if (pn(t.emitsOptions, f)) continue;
          const m = i[f];
          if (a) if (_e(s, f)) m !== s[f] && (s[f] = m, u = true);
          else {
            const v = Ge(f);
            r[v] = Vn(a, l, v, m, t, false);
          }
          else m !== s[f] && (s[f] = m, u = true);
        }
      }
    } else {
      co(t, i, r, s) && (u = true);
      let c;
      for (const h in l) (!i || !_e(i, h) && ((c = At(h)) === h || !_e(i, c))) && (a ? e && (e[h] !== void 0 || e[c] !== void 0) && (r[h] = Vn(a, l, h, void 0, t, true)) : delete r[h]);
      if (s !== l) for (const h in s) (!i || !_e(i, h)) && (delete s[h], u = true);
    }
    u && wt(t.attrs, "set", "");
  }
  function co(t, i, e, n) {
    const [r, s] = t.propsOptions;
    let o = false, l;
    if (i) for (let a in i) {
      if (ci(a)) continue;
      const u = i[a];
      let c;
      r && _e(r, c = Ge(a)) ? !s || !s.includes(c) ? e[c] = u : (l || (l = {}))[c] = u : pn(t.emitsOptions, a) || (!(a in n) || u !== n[a]) && (n[a] = u, o = true);
    }
    if (s) {
      const a = we(e), u = l || xe;
      for (let c = 0; c < s.length; c++) {
        const h = s[c];
        e[h] = Vn(r, a, h, u[h], t, !_e(u, h));
      }
    }
    return o;
  }
  function Vn(t, i, e, n, r, s) {
    const o = t[e];
    if (o != null) {
      const l = _e(o, "default");
      if (l && n === void 0) {
        const a = o.default;
        if (o.type !== Function && !o.skipFactory && he(a)) {
          const { propsDefaults: u } = r;
          if (e in u) n = u[e];
          else {
            const c = Pi(r);
            n = u[e] = a.call(null, i), c();
          }
        } else n = a;
        r.ce && r.ce._setProp(e, n);
      }
      o[0] && (s && !l ? n = false : o[1] && (n === "" || n === At(e)) && (n = true));
    }
    return n;
  }
  var Rl = /* @__PURE__ */ new WeakMap();
  function ho(t, i, e = false) {
    const n = e ? Rl : i.propsCache, r = n.get(t);
    if (r) return r;
    const s = t.props, o = {}, l = [];
    let a = false;
    if (!he(t)) {
      const c = (h) => {
        a = true;
        const [f, m] = ho(h, i, true);
        Ue(o, f), m && l.push(...m);
      };
      !e && i.mixins.length && i.mixins.forEach(c), t.extends && c(t.extends), t.mixins && t.mixins.forEach(c);
    }
    if (!s && !a) return Te(t) && n.set(t, Yt), Yt;
    if (ue(s)) for (let c = 0; c < s.length; c++) {
      const h = Ge(s[c]);
      zs(h) && (o[h] = xe);
    }
    else if (s) for (const c in s) {
      const h = Ge(c);
      if (zs(h)) {
        const f = s[c], m = o[h] = ue(f) || he(f) ? { type: f } : Ue({}, f), v = m.type;
        let y = false, T = true;
        if (ue(v)) for (let x = 0; x < v.length; ++x) {
          const E = v[x], M = he(E) && E.name;
          if (M === "Boolean") {
            y = true;
            break;
          } else M === "String" && (T = false);
        }
        else y = he(v) && v.name === "Boolean";
        m[0] = y, m[1] = T, (y || _e(m, "default")) && l.push(h);
      }
    }
    const u = [o, l];
    return Te(t) && n.set(t, u), u;
  }
  function zs(t) {
    return t[0] !== "$" && !ci(t);
  }
  var us = (t) => t === "_" || t === "_ctx" || t === "$stable";
  var cs = (t) => ue(t) ? t.map(ht) : [ht(t)];
  var Dl = (t, i, e) => {
    if (i._n) return i;
    const n = $e((...r) => cs(i(...r)), e);
    return n._c = false, n;
  };
  var fo = (t, i, e) => {
    const n = t._ctx;
    for (const r in t) {
      if (us(r)) continue;
      const s = t[r];
      if (he(s)) i[r] = Dl(r, s, n);
      else if (s != null) {
        const o = cs(s);
        i[r] = () => o;
      }
    }
  };
  var po = (t, i) => {
    const e = cs(i);
    t.slots.default = () => e;
  };
  var go = (t, i, e) => {
    for (const n in i) (e || !us(n)) && (t[n] = i[n]);
  };
  var Il = (t, i, e) => {
    const n = t.slots = lo();
    if (t.vnode.shapeFlag & 32) {
      const r = i._;
      r ? (go(n, i, e), e && _r(n, "_", r, true)) : fo(i, n);
    } else i && po(t, i);
  };
  var Al = (t, i, e) => {
    const { vnode: n, slots: r } = t;
    let s = true, o = xe;
    if (n.shapeFlag & 32) {
      const l = i._;
      l ? e && l === 1 ? s = false : go(r, i, e) : (s = !i.$stable, fo(i, r)), o = i;
    } else i && (po(t, i), o = { default: 1 });
    if (s) for (const l in r) !us(l) && o[l] == null && delete r[l];
  };
  var Ze = kl;
  function Ol(t) {
    return Ml(t);
  }
  function Ml(t, i) {
    const e = rn();
    e.__VUE__ = true;
    const { insert: n, remove: r, patchProp: s, createElement: o, createText: l, createComment: a, setText: u, setElementText: c, parentNode: h, nextSibling: f, setScopeId: m = ft, insertStaticContent: v } = t, y = (P, I, H, V = null, N = null, d = null, w = void 0, C = null, A = !!I.dynamicChildren) => {
      if (P === I) return;
      P && !oi(P, I) && (V = tt(P), qe(P, N, d, true), P = null), I.patchFlag === -2 && (A = false, I.dynamicChildren = null);
      const { type: O, ref: B, shapeFlag: F } = I;
      switch (O) {
        case gn:
          T(P, I, H, V);
          break;
        case pt:
          x(P, I, H, V);
          break;
        case Li:
          P == null && E(I, H, V, w);
          break;
        case se:
          j(P, I, H, V, N, d, w, C, A);
          break;
        default:
          F & 1 ? U(P, I, H, V, N, d, w, C, A) : F & 6 ? ie(P, I, H, V, N, d, w, C, A) : (F & 64 || F & 128) && O.process(P, I, H, V, N, d, w, C, A, at);
      }
      B != null && N ? fi(B, P && P.ref, d, I || P, !I) : B == null && P && P.ref != null && fi(P.ref, null, d, P, true);
    }, T = (P, I, H, V) => {
      if (P == null) n(I.el = l(I.children), H, V);
      else {
        const N = I.el = P.el;
        I.children !== P.children && u(N, I.children);
      }
    }, x = (P, I, H, V) => {
      P == null ? n(I.el = a(I.children || ""), H, V) : I.el = P.el;
    }, E = (P, I, H, V) => {
      [P.el, P.anchor] = v(P.children, I, H, V, P.el, P.anchor);
    }, M = ({ el: P, anchor: I }, H, V) => {
      let N;
      for (; P && P !== I; ) N = f(P), n(P, H, V), P = N;
      n(I, H, V);
    }, L = ({ el: P, anchor: I }) => {
      let H;
      for (; P && P !== I; ) H = f(P), r(P), P = H;
      r(I);
    }, U = (P, I, H, V, N, d, w, C, A) => {
      if (I.type === "svg" ? w = "svg" : I.type === "math" && (w = "mathml"), P == null) K(I, H, V, N, d, w, C, A);
      else {
        const O = P.el && P.el._isVueCE ? P.el : null;
        try {
          O && O._beginPatch(), te(P, I, N, d, w, C, A);
        } finally {
          O && O._endPatch();
        }
      }
    }, K = (P, I, H, V, N, d, w, C) => {
      let A, O;
      const { props: B, shapeFlag: F, transition: W, dirs: Z } = P;
      if (A = P.el = o(P.type, d, B && B.is, B), F & 8 ? c(A, P.children) : F & 16 && Y(P.children, A, null, V, N, Cn(P, d), w, C), Z && Mt(P, null, V, "created"), q(A, P, P.scopeId, w, V), B) {
        for (const X in B) X !== "value" && !ci(X) && s(A, X, null, B[X], d, V);
        "value" in B && s(A, "value", null, B.value, d), (O = B.onVnodeBeforeMount) && lt(O, V, P);
      }
      Z && Mt(P, null, V, "beforeMount");
      const ne = Fl(N, W);
      ne && W.beforeEnter(A), n(A, I, H), ((O = B && B.onVnodeMounted) || ne || Z) && Ze(() => {
        try {
          O && lt(O, V, P), ne && W.enter(A), Z && Mt(P, null, V, "mounted");
        } finally {
        }
      }, N);
    }, q = (P, I, H, V, N) => {
      if (H && m(P, H), V) for (let d = 0; d < V.length; d++) m(P, V[d]);
      if (N) {
        let d = N.subTree;
        if (I === d || wo(d.type) && (d.ssContent === I || d.ssFallback === I)) {
          const w = N.vnode;
          q(P, w, w.scopeId, w.slotScopeIds, N.parent);
        }
      }
    }, Y = (P, I, H, V, N, d, w, C, A = 0) => {
      for (let O = A; O < P.length; O++) {
        const B = P[O] = C ? yt(P[O]) : ht(P[O]);
        y(null, B, I, H, V, N, d, w, C);
      }
    }, te = (P, I, H, V, N, d, w) => {
      const C = I.el = P.el;
      let { patchFlag: A, dynamicChildren: O, dirs: B } = I;
      A |= P.patchFlag & 16;
      const F = P.props || xe, W = I.props || xe;
      let Z;
      if (H && Ft(H, false), (Z = W.onVnodeBeforeUpdate) && lt(Z, H, I, P), B && Mt(I, P, H, "beforeUpdate"), H && Ft(H, true), O && (!P.dynamicChildren || P.dynamicChildren.length !== O.length) && (A = 0, w = false, O = null), (F.innerHTML && W.innerHTML == null || F.textContent && W.textContent == null) && c(C, ""), O ? fe(P.dynamicChildren, O, C, H, V, Cn(I, N), d) : w || oe(P, I, C, null, H, V, Cn(I, N), d, false), A > 0) {
        if (A & 16) $(C, F, W, H, N);
        else if (A & 2 && F.class !== W.class && s(C, "class", null, W.class, N), A & 4 && s(C, "style", F.style, W.style, N), A & 8) {
          const ne = I.dynamicProps;
          for (let X = 0; X < ne.length; X++) {
            const ae = ne[X], g = F[ae], p = W[ae];
            (p !== g || ae === "value") && s(C, ae, g, p, N, H);
          }
        }
        A & 1 && P.children !== I.children && c(C, I.children);
      } else !w && O == null && $(C, F, W, H, N);
      ((Z = W.onVnodeUpdated) || B) && Ze(() => {
        Z && lt(Z, H, I, P), B && Mt(I, P, H, "updated");
      }, V);
    }, fe = (P, I, H, V, N, d, w) => {
      for (let C = 0; C < I.length; C++) {
        const A = P[C], O = I[C], B = A.el && (A.type === se || !oi(A, O) || A.shapeFlag & 198) ? h(A.el) : H;
        y(A, O, B, null, V, N, d, w, true);
      }
    }, $ = (P, I, H, V, N) => {
      if (I !== H) {
        if (I !== xe) for (const d in I) !ci(d) && !(d in H) && s(P, d, I[d], null, N, V);
        for (const d in H) {
          if (ci(d)) continue;
          const w = H[d], C = I[d];
          w !== C && d !== "value" && s(P, d, C, w, N, V);
        }
        "value" in H && s(P, "value", I.value, H.value, N);
      }
    }, j = (P, I, H, V, N, d, w, C, A) => {
      const O = I.el = P ? P.el : l(""), B = I.anchor = P ? P.anchor : l("");
      let { patchFlag: F, dynamicChildren: W, slotScopeIds: Z } = I;
      Z && (C = C ? C.concat(Z) : Z), P == null ? (n(O, H, V), n(B, H, V), Y(I.children || [], H, B, N, d, w, C, A)) : F > 0 && F & 64 && W && P.dynamicChildren && P.dynamicChildren.length === W.length ? (fe(P.dynamicChildren, W, H, N, d, w, C), (I.key != null || N && I === N.subTree) && mo(P, I, true)) : oe(P, I, H, B, N, d, w, C, A);
    }, ie = (P, I, H, V, N, d, w, C, A) => {
      I.slotScopeIds = C, P == null ? I.shapeFlag & 512 ? N.ctx.activate(I, H, V, w, A) : ce(I, H, V, N, d, w, A) : ye(P, I, A);
    }, ce = (P, I, H, V, N, d, w) => {
      const C = P.component = Vl(P, V, N);
      if (as(P) && (C.ctx.renderer = at), Wl(C, false, w), C.asyncDep) {
        if (N && N.registerDep(C, me, w), !P.el) {
          const A = C.subTree = ee(pt);
          x(null, A, I, H), P.placeholder = A.el;
        }
      } else me(C, P, I, H, N, d, w);
    }, ye = (P, I, H) => {
      const V = I.component = P.component;
      if (El(P, I, H)) if (V.asyncDep && !V.asyncResolved) {
        pe(V, I, H);
        return;
      } else V.next = I, V.update();
      else I.el = P.el, V.vnode = I;
    }, me = (P, I, H, V, N, d, w) => {
      const C = () => {
        if (P.isMounted) {
          let { next: F, bu: W, u: Z, parent: ne, vnode: X } = P;
          {
            const b = vo(P);
            if (b) {
              F && (F.el = X.el, pe(P, F, w)), b.asyncDep.then(() => {
                Ze(() => {
                  P.isUnmounted || O();
                }, N);
              });
              return;
            }
          }
          let ae = F, g;
          Ft(P, false), F ? (F.el = X.el, pe(P, F, w)) : F = X, W && Mi(W), (g = F.props && F.props.onVnodeBeforeUpdate) && lt(g, ne, F, X), Ft(P, true);
          const p = Hs(P), _ = P.subTree;
          P.subTree = p, y(_, p, h(_.el), tt(_), P, N, d), F.el = p.el, ae === null && Sl(P, p.el), Z && Ze(Z, N), (g = F.props && F.props.onVnodeUpdated) && Ze(() => lt(g, ne, F, X), N);
        } else {
          let F;
          const { el: W, props: Z } = I, { bm: ne, m: X, parent: ae, root: g, type: p } = P, _ = $t(I);
          Ft(P, false), ne && Mi(ne), !_ && (F = Z && Z.onVnodeBeforeMount) && lt(F, ae, I), Ft(P, true);
          {
            g.ce && g.ce._hasShadowRoot() && g.ce._injectChildStyle(p, P.parent ? P.parent.type : void 0);
            const b = P.subTree = Hs(P);
            y(null, b, H, V, P, N, d), I.el = b.el;
          }
          if (X && Ze(X, N), !_ && (F = Z && Z.onVnodeMounted)) {
            const b = I;
            Ze(() => lt(F, ae, b), N);
          }
          (I.shapeFlag & 256 || ae && $t(ae.vnode) && ae.vnode.shapeFlag & 256) && P.a && Ze(P.a, N), P.isMounted = true, I = H = V = null;
        }
      };
      P.scope.on();
      const A = P.effect = new Sr(C);
      P.scope.off();
      const O = P.update = A.run.bind(A), B = P.job = A.runIfDirty.bind(A);
      B.i = P, B.id = P.uid, A.scheduler = () => ss(B), Ft(P, true), O();
    }, pe = (P, I, H) => {
      I.component = P;
      const V = P.vnode.props;
      P.vnode = I, P.next = null, Pl(P, I.props, V, H), Al(P, I.children, H), xt(), Ps(P), bt();
    }, oe = (P, I, H, V, N, d, w, C, A = false) => {
      const O = P && P.children, B = P ? P.shapeFlag : 0, F = I.children, { patchFlag: W, shapeFlag: Z } = I;
      if (W > 0) {
        if (W & 128) {
          De(O, F, H, V, N, d, w, C, A);
          return;
        } else if (W & 256) {
          Ae(O, F, H, V, N, d, w, C, A);
          return;
        }
      }
      Z & 8 ? (B & 16 && ot(O, N, d), F !== O && c(H, F)) : B & 16 ? Z & 16 ? De(O, F, H, V, N, d, w, C, A) : ot(O, N, d, true) : (B & 8 && c(H, ""), Z & 16 && Y(F, H, V, N, d, w, C, A));
    }, Ae = (P, I, H, V, N, d, w, C, A) => {
      P = P || Yt, I = I || Yt;
      const O = P.length, B = I.length, F = Math.min(O, B);
      let W;
      for (W = 0; W < F; W++) {
        const Z = I[W] = A ? yt(I[W]) : ht(I[W]);
        y(P[W], Z, H, null, N, d, w, C, A);
      }
      O > B ? ot(P, N, d, true, false, F) : Y(I, H, V, N, d, w, C, A, F);
    }, De = (P, I, H, V, N, d, w, C, A) => {
      let O = 0;
      const B = I.length;
      let F = P.length - 1, W = B - 1;
      for (; O <= F && O <= W; ) {
        const Z = P[O], ne = I[O] = A ? yt(I[O]) : ht(I[O]);
        if (oi(Z, ne)) y(Z, ne, H, null, N, d, w, C, A);
        else break;
        O++;
      }
      for (; O <= F && O <= W; ) {
        const Z = P[F], ne = I[W] = A ? yt(I[W]) : ht(I[W]);
        if (oi(Z, ne)) y(Z, ne, H, null, N, d, w, C, A);
        else break;
        F--, W--;
      }
      if (O > F) {
        if (O <= W) {
          const Z = W + 1, ne = Z < B ? I[Z].el : V;
          for (; O <= W; ) y(null, I[O] = A ? yt(I[O]) : ht(I[O]), H, ne, N, d, w, C, A), O++;
        }
      } else if (O > W) for (; O <= F; ) qe(P[O], N, d, true), O++;
      else {
        const Z = O, ne = O, X = /* @__PURE__ */ new Map();
        for (O = ne; O <= W; O++) {
          const J = I[O] = A ? yt(I[O]) : ht(I[O]);
          J.key != null && X.set(J.key, O);
        }
        let ae, g = 0;
        const p = W - ne + 1;
        let _ = false, b = 0;
        const k = new Array(p);
        for (O = 0; O < p; O++) k[O] = 0;
        for (O = Z; O <= F; O++) {
          const J = P[O];
          if (g >= p) {
            qe(J, N, d, true);
            continue;
          }
          let ve;
          if (J.key != null) ve = X.get(J.key);
          else for (ae = ne; ae <= W; ae++) if (k[ae - ne] === 0 && oi(J, I[ae])) {
            ve = ae;
            break;
          }
          ve === void 0 ? qe(J, N, d, true) : (k[ve - ne] = O + 1, ve >= b ? b = ve : _ = true, y(J, I[ve], H, null, N, d, w, C, A), g++);
        }
        const G = _ ? Ll(k) : Yt;
        for (ae = G.length - 1, O = p - 1; O >= 0; O--) {
          const J = ne + O, ve = I[J], re = I[J + 1], He = J + 1 < B ? re.el || yo(re) : V;
          k[O] === 0 ? y(null, ve, H, He, N, d, w, C, A) : _ && (ae < 0 || O !== G[ae] ? et(ve, H, He, 2) : ae--);
        }
      }
    }, et = (P, I, H, V, N = null) => {
      const { el: d, type: w, transition: C, children: A, shapeFlag: O } = P;
      if (O & 6) {
        et(P.component.subTree, I, H, V);
        return;
      }
      if (O & 128) {
        P.suspense.move(I, H, V);
        return;
      }
      if (O & 64) {
        w.move(P, I, H, at);
        return;
      }
      if (w === se) {
        n(d, I, H);
        for (let F = 0; F < A.length; F++) et(A[F], I, H, V);
        n(P.anchor, I, H);
        return;
      }
      if (w === Li) {
        M(P, I, H);
        return;
      }
      if (V !== 2 && O & 1 && C) if (V === 0) C.persisted && !d[En] ? n(d, I, H) : (C.beforeEnter(d), n(d, I, H), Ze(() => C.enter(d), N));
      else {
        const { leave: F, delayLeave: W, afterLeave: Z } = C, ne = () => {
          P.ctx.isUnmounted ? r(d) : n(d, I, H);
        }, X = () => {
          const ae = d._isLeaving || !!d[En];
          d._isLeaving && d[En](true), C.persisted && !ae ? ne() : F(d, () => {
            ne(), Z && Z();
          });
        };
        W ? W(d, ne, X) : X();
      }
      else n(d, I, H);
    }, qe = (P, I, H, V = false, N = false) => {
      const { type: d, props: w, ref: C, children: A, dynamicChildren: O, shapeFlag: B, patchFlag: F, dirs: W, cacheIndex: Z, memo: ne } = P;
      if (F === -2 && (N = false), C != null && (xt(), fi(C, null, H, P, true), bt()), Z != null && (I.renderCache[Z] = void 0), B & 256) {
        I.ctx.deactivate(P);
        return;
      }
      const X = B & 1 && W, ae = !$t(P);
      let g;
      if (ae && (g = w && w.onVnodeBeforeUnmount) && lt(g, I, P), B & 6) jt(P.component, H, V);
      else {
        if (B & 128) {
          P.suspense.unmount(H, V);
          return;
        }
        X && Mt(P, null, I, "beforeUnmount"), B & 64 ? P.type.remove(P, I, H, at, V) : O && !O.hasOnce && (d !== se || F > 0 && F & 64) ? ot(O, I, H, false, true) : (d === se && F & 384 || !N && B & 16) && ot(A, I, H), V && ge(P);
      }
      const p = ne != null && Z == null;
      (ae && (g = w && w.onVnodeUnmounted) || X || p) && Ze(() => {
        g && lt(g, I, P), X && Mt(P, null, I, "unmounted"), p && (P.el = null);
      }, H);
    }, ge = (P) => {
      const { type: I, el: H, anchor: V, transition: N } = P;
      if (I === se) {
        Wt(H, V);
        return;
      }
      if (I === Li) {
        L(P);
        return;
      }
      const d = () => {
        r(H), N && !N.persisted && N.afterLeave && N.afterLeave();
      };
      if (P.shapeFlag & 1 && N && !N.persisted) {
        const { leave: w, delayLeave: C } = N, A = () => w(H, d);
        C ? C(P.el, d, A) : A();
      } else d();
    }, Wt = (P, I) => {
      let H;
      for (; P !== I; ) H = f(P), r(P), P = H;
      r(I);
    }, jt = (P, I, H) => {
      const { bum: V, scope: N, job: d, subTree: w, um: C, m: A, a: O } = P;
      Ns(A), Ns(O), V && Mi(V), N.stop(), d && (d.flags |= 8, qe(w, P, I, H)), C && Ze(C, I), Ze(() => {
        P.isUnmounted = true;
      }, I);
    }, ot = (P, I, H, V = false, N = false, d = 0) => {
      for (let w = d; w < P.length; w++) qe(P[w], I, H, V, N);
    }, tt = (P) => {
      if (P.shapeFlag & 6) return tt(P.component.subTree);
      if (P.shapeFlag & 128) return P.suspense.next();
      const I = f(P.anchor || P.el), H = I && I[Ya];
      return H ? f(H) : I;
    };
    let Rt = false;
    const Gt = (P, I, H) => {
      let V;
      P == null ? I._vnode && (qe(I._vnode, null, null, true), V = I._vnode.component) : y(I._vnode || null, P, I, null, null, null, H), I._vnode = P, Rt || (Rt = true, Ps(V), Wr(), Rt = false);
    }, at = { p: y, um: qe, m: et, r: ge, mt: ce, mc: Y, pc: oe, pbc: fe, n: tt, o: t };
    return { render: Gt, hydrate: void 0, createApp: yl(Gt) };
  }
  function Cn({ type: t, props: i }, e) {
    return e === "svg" && t === "foreignObject" || e === "mathml" && t === "annotation-xml" && i && i.encoding && i.encoding.includes("html") ? void 0 : e;
  }
  function Ft({ effect: t, job: i }, e) {
    e ? (t.flags |= 32, i.flags |= 4) : (t.flags &= -33, i.flags &= -5);
  }
  function Fl(t, i) {
    return (!t || t && !t.pendingBranch) && i && !i.persisted;
  }
  function mo(t, i, e = false) {
    const n = t.children, r = i.children;
    if (ue(n) && ue(r)) for (let s = 0; s < n.length; s++) {
      const o = n[s];
      let l = r[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[s] = yt(r[s]), l.el = o.el), !e && l.patchFlag !== -2 && mo(o, l)), l.type === gn && (l.patchFlag === -1 && (l = r[s] = yt(l)), l.el = o.el), l.type === pt && !l.el && (l.el = o.el);
    }
  }
  function Ll(t) {
    const i = t.slice(), e = [0];
    let n, r, s, o, l;
    const a = t.length;
    for (n = 0; n < a; n++) {
      const u = t[n];
      if (u !== 0) {
        if (r = e[e.length - 1], t[r] < u) {
          i[n] = r, e.push(n);
          continue;
        }
        for (s = 0, o = e.length - 1; s < o; ) l = s + o >> 1, t[e[l]] < u ? s = l + 1 : o = l;
        u < t[e[s]] && (s > 0 && (i[n] = e[s - 1]), e[s] = n);
      }
    }
    for (s = e.length, o = e[s - 1]; s-- > 0; ) e[s] = o, o = i[o];
    return e;
  }
  function vo(t) {
    const i = t.subTree.component;
    if (i) return i.asyncDep && !i.asyncResolved ? i : vo(i);
  }
  function Ns(t) {
    if (t) for (let i = 0; i < t.length; i++) t[i].flags |= 8;
  }
  function yo(t) {
    if (t.placeholder) return t.placeholder;
    const i = t.component;
    return i ? yo(i.subTree) : null;
  }
  var wo = (t) => t.__isSuspense;
  function kl(t, i) {
    i && i.pendingBranch ? ue(t) ? i.effects.push(...t) : i.effects.push(t) : Ga(t);
  }
  var se = /* @__PURE__ */ Symbol.for("v-fgt");
  var gn = /* @__PURE__ */ Symbol.for("v-txt");
  var pt = /* @__PURE__ */ Symbol.for("v-cmt");
  var Li = /* @__PURE__ */ Symbol.for("v-stc");
  var Tt = [];
  var Xe = null;
  function S(t = false) {
    Tt.push(Xe = t ? null : []);
  }
  function hs() {
    Tt.pop(), Xe = Tt[Tt.length - 1] || null;
  }
  var wi = 1;
  function Zi(t, i = false) {
    wi += t, t < 0 && Xe && i && (Xe.hasOnce = true);
  }
  function _o(t) {
    return t.dynamicChildren = wi > 0 ? Xe || Yt : null, hs(), wi > 0 && Xe && Xe.push(t), t;
  }
  function D(t, i, e, n, r, s) {
    return _o(R(t, i, e, n, r, s, true));
  }
  function le(t, i, e, n, r) {
    return _o(ee(t, i, e, n, r, true));
  }
  function _i(t) {
    return t ? t.__v_isVNode === true : false;
  }
  function oi(t, i) {
    return t.type === i.type && t.key === i.key;
  }
  var To = ({ key: t }) => t ?? null;
  var ki = ({ ref: t, ref_key: i, ref_for: e }) => (typeof t == "number" && (t = "" + t), t != null ? Re(t) || Me(t) || he(t) ? { i: ke, r: t, k: i, f: !!e } : t : null);
  function R(t, i = null, e = null, n = 0, r = null, s = t === se ? 0 : 1, o = false, l = false) {
    const a = { __v_isVNode: true, __v_skip: true, type: t, props: i, key: i && To(i), ref: i && ki(i), scopeId: Gr, slotScopeIds: null, children: e, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: s, patchFlag: n, dynamicProps: r, dynamicChildren: null, appContext: null, ctx: ke };
    return l ? (Ki(a, e), s & 128 && t.normalize(a)) : e && (a.shapeFlag |= Re(e) ? 8 : 16), wi > 0 && !o && Xe && (a.patchFlag > 0 || s & 6) && a.patchFlag !== 32 && Xe.push(a), a;
  }
  var ee = Hl;
  function Hl(t, i = null, e = null, n = 0, r = null, s = false) {
    if ((!t || t === $r) && (t = pt), _i(t)) {
      const l = ii(t, i, true);
      return e && Ki(l, e), wi > 0 && !s && Xe && (l.shapeFlag & 6 ? Xe[Xe.indexOf(t)] = l : Xe.push(l)), l.patchFlag = -2, l;
    }
    if (Kl(t) && (t = t.__vccOpts), i) {
      i = Bl(i);
      let { class: l, style: a } = i;
      l && !Re(l) && (i.class = Pe(l)), Te(a) && (un(a) && !ue(a) && (a = Ue({}, a)), i.style = It(a));
    }
    const o = Re(t) ? 1 : wo(t) ? 128 : dn(t) ? 64 : Te(t) ? 4 : he(t) ? 2 : 0;
    return R(t, i, e, n, r, o, s, true);
  }
  function Bl(t) {
    return t ? un(t) || uo(t) ? Ue({}, t) : t : null;
  }
  function ii(t, i, e = false, n = false) {
    const { props: r, ref: s, patchFlag: o, children: l, transition: a } = t, u = i ? zl(r || {}, i) : r, c = { __v_isVNode: true, __v_skip: true, type: t.type, props: u, key: u && To(u), ref: i && i.ref ? e && s ? ue(s) ? s.concat(ki(i)) : [s, ki(i)] : ki(i) : s, scopeId: t.scopeId, slotScopeIds: t.slotScopeIds, children: l, target: t.target, targetStart: t.targetStart, targetAnchor: t.targetAnchor, staticCount: t.staticCount, shapeFlag: t.shapeFlag, patchFlag: i && t.type !== se ? o === -1 ? 16 : o | 16 : o, dynamicProps: t.dynamicProps, dynamicChildren: t.dynamicChildren, appContext: t.appContext, dirs: t.dirs, transition: a, component: t.component, suspense: t.suspense, ssContent: t.ssContent && ii(t.ssContent), ssFallback: t.ssFallback && ii(t.ssFallback), placeholder: t.placeholder, el: t.el, anchor: t.anchor, ctx: t.ctx, ce: t.ce };
    return a && n && os(c, a.clone(c)), c;
  }
  function Ke(t = " ", i = 0) {
    return ee(gn, null, t, i);
  }
  function Q(t = "", i = false) {
    return i ? (S(), le(pt, null, t)) : ee(pt, null, t);
  }
  function ht(t) {
    return t == null || typeof t == "boolean" ? ee(pt) : ue(t) ? ee(se, null, t.slice()) : _i(t) ? yt(t) : ee(gn, null, String(t));
  }
  function yt(t) {
    return t.el === null && t.patchFlag !== -1 || t.memo ? t : ii(t);
  }
  function Ki(t, i) {
    let e = 0;
    const { shapeFlag: n } = t;
    if (i == null) i = null;
    else if (ue(i)) e = 16;
    else if (typeof i == "object") if (n & 65) {
      const r = i.default;
      r && (r._c && (r._d = false), Ki(t, r()), r._c && (r._d = true));
      return;
    } else {
      e = 32;
      const r = i._;
      !r && !uo(i) ? i._ctx = ke : r === 3 && ke && (ke.slots._ === 1 ? i._ = 1 : (i._ = 2, t.patchFlag |= 1024));
    }
    else if (he(i)) {
      if (n & 65) {
        Ki(t, { default: i });
        return;
      }
      i = { default: i, _ctx: ke }, e = 32;
    } else i = String(i), n & 64 ? (e = 16, i = [Ke(i)]) : e = 8;
    t.children = i, t.shapeFlag |= e;
  }
  function zl(...t) {
    const i = {};
    for (let e = 0; e < t.length; e++) {
      const n = t[e];
      for (const r in n) if (r === "class") i.class !== n.class && (i.class = Pe([i.class, n.class]));
      else if (r === "style") i.style = It([i.style, n.style]);
      else if ($i(r)) {
        const s = i[r], o = n[r];
        o && s !== o && !(ue(s) && s.includes(o)) ? i[r] = s ? [].concat(s, o) : o : o == null && s == null && !en(r) && (i[r] = o);
      } else r !== "" && (i[r] = n[r]);
    }
    return i;
  }
  function lt(t, i, e, n = null) {
    rt(t, i, 7, [e, n]);
  }
  var Nl = so();
  var Ul = 0;
  function Vl(t, i, e) {
    const n = t.type, r = (i ? i.appContext : t.appContext) || Nl, s = { uid: Ul++, vnode: t, type: n, parent: i, appContext: r, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new ca(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: i ? i.provides : Object.create(r.provides), ids: i ? i.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: ho(n, r), emitsOptions: ro(n, r), emit: null, emitted: null, propsDefaults: xe, inheritAttrs: n.inheritAttrs, ctx: xe, data: xe, props: xe, attrs: xe, slots: xe, refs: xe, setupState: xe, setupContext: null, suspense: e, suspenseId: e ? e.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
    return s.ctx = { _: s }, s.root = i ? i.root : s, s.emit = _l.bind(null, s), t.ce && t.ce(s), s;
  }
  var Ne = null;
  var Ci = () => Ne || ke;
  var Xi;
  var Ti;
  {
    const t = rn(), i = (e, n) => {
      let r;
      return (r = t[e]) || (r = t[e] = []), r.push(n), (s) => {
        r.length > 1 ? r.forEach((o) => o(s)) : r[0](s);
      };
    };
    Xi = i("__VUE_INSTANCE_SETTERS__", (e) => Ne = e), Ti = i("__VUE_SSR_SETTERS__", (e) => xi = e);
  }
  var Pi = (t) => {
    const i = Ne;
    return Xi(t), t.scope.on(), () => {
      t.scope.off(), Xi(i);
    };
  };
  var Us = () => {
    Ne && Ne.scope.off(), Xi(null);
  };
  function xo(t) {
    return t.vnode.shapeFlag & 4;
  }
  var xi = false;
  function Wl(t, i = false, e = false) {
    i && Ti(i);
    const { props: n, children: r } = t.vnode, s = xo(t);
    Cl(t, n, s, i), Il(t, r, e || i);
    const o = s ? jl(t, i) : void 0;
    return i && Ti(false), o;
  }
  function jl(t, i) {
    const e = t.type;
    t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, hl);
    const { setup: n } = e;
    if (n) {
      xt();
      const r = t.setupContext = n.length > 1 ? ql(t) : null, s = Pi(t), o = Si(n, t, 0, [t.props, r]), l = vr(o);
      if (bt(), s(), (l || t.sp) && !$t(t) && Kr(t), l) {
        if (o.then(Us, Us), i) return o.then((a) => {
          Ti(true);
          try {
            Vs(t, a, i);
          } finally {
            Ti(false);
          }
        }).catch((a) => {
          hn(a, t, 0);
        });
        t.asyncDep = o;
      } else Vs(t, o);
    } else bo(t);
  }
  function Vs(t, i, e) {
    he(i) ? t.type.__ssrInlineRender ? t.ssrRender = i : t.render = i : Te(i) && (t.setupState = Nr(i)), bo(t);
  }
  function bo(t, i, e) {
    const n = t.type;
    t.render || (t.render = n.render || ft);
    {
      const r = Pi(t);
      xt();
      try {
        dl(t);
      } finally {
        bt(), r();
      }
    }
  }
  var Gl = { get(t, i) {
    return ze(t, "get", ""), t[i];
  } };
  function ql(t) {
    const i = (e) => {
      t.exposed = e || {};
    };
    return { attrs: new Proxy(t.attrs, Gl), slots: t.slots, emit: t.emit, expose: i };
  }
  function mn(t) {
    return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(Nr(de(t.exposed)), { get(i, e) {
      if (e in i) return i[e];
      if (e in pi) return pi[e](t);
    }, has(i, e) {
      return e in i || e in pi;
    } })) : t.proxy;
  }
  function Zl(t, i = true) {
    return he(t) ? t.displayName || t.name : t.name || i && t.__name;
  }
  function Kl(t) {
    return he(t) && "__vccOpts" in t;
  }
  var Le = (t, i) => Na(t, i, xi);
  function Xl(t, i, e) {
    try {
      Zi(-1);
      const n = arguments.length;
      return n === 2 ? Te(i) && !ue(i) ? _i(i) ? ee(t, null, [i]) : ee(t, i) : ee(t, null, i) : (n > 3 ? e = Array.prototype.slice.call(arguments, 2) : n === 3 && _i(e) && (e = [e]), ee(t, i, e));
    } finally {
      Zi(1);
    }
  }
  var Yl = "3.5.41";
  var Wn;
  var Ws = typeof window < "u" && window.trustedTypes;
  if (Ws) try {
    Wn = Ws.createPolicy("vue", { createHTML: (t) => t });
  } catch {
  }
  var Eo = Wn ? (t) => Wn.createHTML(t) : (t) => t;
  var Jl = "http://www.w3.org/2000/svg";
  var Ql = "http://www.w3.org/1998/Math/MathML";
  var vt = typeof document < "u" ? document : null;
  var js = vt && vt.createElement("template");
  var $l = { insert: (t, i, e) => {
    i.insertBefore(t, e || null);
  }, remove: (t) => {
    const i = t.parentNode;
    i && i.removeChild(t);
  }, createElement: (t, i, e, n) => {
    const r = i === "svg" ? vt.createElementNS(Jl, t) : i === "mathml" ? vt.createElementNS(Ql, t) : e ? vt.createElement(t, { is: e }) : vt.createElement(t);
    return t === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
  }, createText: (t) => vt.createTextNode(t), createComment: (t) => vt.createComment(t), setText: (t, i) => {
    t.nodeValue = i;
  }, setElementText: (t, i) => {
    t.textContent = i;
  }, parentNode: (t) => t.parentNode, nextSibling: (t) => t.nextSibling, querySelector: (t) => vt.querySelector(t), setScopeId(t, i) {
    t.setAttribute(i, "");
  }, insertStaticContent(t, i, e, n, r, s) {
    const o = e ? e.previousSibling : i.lastChild;
    if (r && (r === s || r.nextSibling)) for (; i.insertBefore(r.cloneNode(true), e), !(r === s || !(r = r.nextSibling)); ) ;
    else {
      js.innerHTML = Eo(n === "svg" ? `<svg>${t}</svg>` : n === "mathml" ? `<math>${t}</math>` : t);
      const l = js.content;
      if (n === "svg" || n === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; ) l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      i.insertBefore(l, e);
    }
    return [o ? o.nextSibling : i.firstChild, e ? e.previousSibling : i.lastChild];
  } };
  var eu = /* @__PURE__ */ Symbol("_vtc");
  function tu(t, i, e) {
    const n = t[eu];
    n && (i = (i ? [i, ...n] : [...n]).join(" ")), i == null ? t.removeAttribute("class") : e ? t.setAttribute("class", i) : t.className = i;
  }
  var Yi = /* @__PURE__ */ Symbol("_vod");
  var So = /* @__PURE__ */ Symbol("_vsh");
  var Qe = { name: "show", beforeMount(t, { value: i }, { transition: e }) {
    t[Yi] = t.style.display === "none" ? "" : t.style.display, e && i ? e.beforeEnter(t) : ai(t, i);
  }, mounted(t, { value: i }, { transition: e }) {
    e && i && e.enter(t);
  }, updated(t, { value: i, oldValue: e }, { transition: n }) {
    !i != !e && (n ? i ? (n.beforeEnter(t), ai(t, true), n.enter(t)) : n.leave(t, () => {
      ai(t, false);
    }) : ai(t, i));
  }, beforeUnmount(t, { value: i }) {
    ai(t, i);
  } };
  function ai(t, i) {
    t.style.display = i ? t[Yi] : "none", t[So] = !i;
  }
  var iu = /* @__PURE__ */ Symbol("");
  var nu = /(?:^|;)\s*display\s*:/;
  function su(t, i, e) {
    const n = t.style, r = Re(e);
    let s = false;
    if (e && !r) {
      if (i) if (Re(i)) for (const o of i.split(";")) {
        const l = o.slice(0, o.indexOf(":")).trim();
        e[l] == null && ui(n, l, "");
      }
      else for (const o in i) e[o] == null && ui(n, o, "");
      for (const o in e) {
        o === "display" && (s = true);
        const l = e[o];
        l != null ? ou(t, o, !Re(i) && i ? i[o] : void 0, l) || ui(n, o, l) : ui(n, o, "");
      }
    } else if (r) {
      if (i !== e) {
        const o = n[iu];
        o && (e += ";" + o), n.cssText = e, s = nu.test(e);
      }
    } else i && t.removeAttribute("style");
    Yi in t && (t[Yi] = s ? n.display : "", t[So] && (n.display = "none"));
  }
  var Gs = /\s*!important$/;
  function ui(t, i, e) {
    if (ue(e)) e.forEach((n) => ui(t, i, n));
    else if (e == null && (e = ""), i.startsWith("--")) t.setProperty(i, e);
    else {
      const n = ru(t, i);
      Gs.test(e) ? t.setProperty(At(n), e.replace(Gs, ""), "important") : t[n] = e;
    }
  }
  var qs = ["Webkit", "Moz", "ms"];
  var Pn = {};
  function ru(t, i) {
    const e = Pn[i];
    if (e) return e;
    let n = Ge(i);
    if (n !== "filter" && n in t) return Pn[i] = n;
    n = sn(n);
    for (let r = 0; r < qs.length; r++) {
      const s = qs[r] + n;
      if (s in t) return Pn[i] = s;
    }
    return i;
  }
  function ou(t, i, e, n) {
    return t.tagName === "TEXTAREA" && (i === "width" || i === "height") && Re(n) && e === n;
  }
  var Zs = "http://www.w3.org/1999/xlink";
  function Ks(t, i, e, n, r, s = la(i)) {
    n && i.startsWith("xlink:") ? e == null ? t.removeAttributeNS(Zs, i.slice(6, i.length)) : t.setAttributeNS(Zs, i, e) : e == null || s && !Tr(e) ? t.removeAttribute(i) : t.setAttribute(i, s ? "" : Je(e) ? String(e) : e);
  }
  function Xs(t, i, e, n, r) {
    if (i === "innerHTML" || i === "textContent") {
      e != null && (t[i] = i === "innerHTML" ? Eo(e) : e);
      return;
    }
    const s = t.tagName;
    if (i === "value" && s !== "PROGRESS" && !s.includes("-")) {
      const l = s === "OPTION" ? t.getAttribute("value") || "" : t.value, a = e == null ? t.type === "checkbox" ? "on" : "" : String(e);
      (l !== a || !("_value" in t)) && (t.value = a), e == null && t.removeAttribute(i), t._value = e;
      return;
    }
    let o = false;
    if (e === "" || e == null) {
      const l = typeof t[i];
      l === "boolean" ? e = Tr(e) : e == null && l === "string" ? (e = "", o = true) : l === "number" && (e = 0, o = true);
    }
    try {
      t[i] = e;
    } catch {
    }
    o && t.removeAttribute(r || i);
  }
  function Xt(t, i, e, n) {
    t.addEventListener(i, e, n);
  }
  function au(t, i, e, n) {
    t.removeEventListener(i, e, n);
  }
  var Ys = /* @__PURE__ */ Symbol("_vei");
  function lu(t, i, e, n, r = null) {
    const s = t[Ys] || (t[Ys] = {}), o = s[i];
    if (n && o) o.value = n;
    else {
      const [l, a] = hu(i);
      if (n) {
        const u = s[i] = pu(n, r);
        Xt(t, l, u, a);
      } else o && (au(t, l, o, a), s[i] = void 0);
    }
  }
  var uu = /(Once|Passive|Capture)$/;
  var cu = /^on:?(?:Once|Passive|Capture)$/;
  function hu(t) {
    let i, e;
    for (; (e = t.match(uu)) && !cu.test(t); ) i || (i = {}), t = t.slice(0, t.length - e[1].length), i[e[1].toLowerCase()] = true;
    return [t[2] === ":" ? t.slice(3) : At(t.slice(2)), i];
  }
  var Rn = 0;
  var du = Promise.resolve();
  var fu = () => Rn || (du.then(() => Rn = 0), Rn = Date.now());
  function pu(t, i) {
    const e = (n) => {
      if (!n._vts) n._vts = Date.now();
      else if (n._vts <= e.attached) return;
      const r = e.value;
      if (ue(r)) {
        const s = n.stopImmediatePropagation;
        n.stopImmediatePropagation = () => {
          s.call(n), n._stopped = true;
        };
        const o = r.slice(), l = [n];
        for (let a = 0; a < o.length && !n._stopped; a++) {
          const u = o[a];
          u && rt(u, i, 5, l);
        }
      } else rt(r, i, 5, [n]);
    };
    return e.value = t, e.attached = fu(), e;
  }
  var Js = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123;
  var gu = (t, i, e, n, r, s) => {
    const o = r === "svg";
    i === "class" ? tu(t, n, o) : i === "style" ? su(t, e, n) : $i(i) ? en(i) || lu(t, i, e, n, s) : (i[0] === "." ? (i = i.slice(1), true) : i[0] === "^" ? (i = i.slice(1), false) : mu(t, i, n, o)) ? (Xs(t, i, n), !t.tagName.includes("-") && (i === "value" || i === "checked" || i === "selected") && Ks(t, i, n, o, s, i !== "value")) : t._isVueCE && (vu(t, i) || t._def.__asyncLoader && (/[A-Z]/.test(i) || !Re(n))) ? Xs(t, Ge(i), n, s, i) : (i === "true-value" ? t._trueValue = n : i === "false-value" && (t._falseValue = n), Ks(t, i, n, o));
  };
  function mu(t, i, e, n) {
    if (n) return !!(i === "innerHTML" || i === "textContent" || i in t && Js(i) && he(e));
    if (i === "spellcheck" || i === "draggable" || i === "translate" || i === "autocorrect" || i === "sandbox" && t.tagName === "IFRAME" || i === "form" || i === "list" && t.tagName === "INPUT" || i === "type" && t.tagName === "TEXTAREA") return false;
    if (i === "width" || i === "height") {
      const r = t.tagName;
      if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE") return false;
    }
    return Js(i) && Re(e) ? false : i in t;
  }
  function vu(t, i) {
    const e = t._def.props;
    if (!e) return false;
    const n = Ge(i);
    return Array.isArray(e) ? e.some((r) => Ge(r) === n) : Object.keys(e).some((r) => Ge(r) === n);
  }
  var Qs = (t) => {
    const i = t.props["onUpdate:modelValue"] || false;
    return ue(i) ? (e) => Mi(i, e) : i;
  };
  function yu(t) {
    t.target.composing = true;
  }
  function $s(t) {
    const i = t.target;
    i.composing && (i.composing = false, i.dispatchEvent(new Event("input")));
  }
  var Ai = /* @__PURE__ */ Symbol("_assign");
  var Oi = /* @__PURE__ */ Symbol("_initialValue");
  function Dn(t, i, e) {
    return i && (t = t.trim()), e && (t = Yn(t)), t;
  }
  var Ji = { created(t, { modifiers: { lazy: i, trim: e, number: n } }, r) {
    t.parentNode && (t.type === "text" ? t[Oi] = t.defaultValue.replace(/[\r\n]/g, "") : t.type === "textarea" && (t[Oi] = t.defaultValue.replace(/\r\n?/g, `
`))), t[Ai] = Qs(r);
    const s = n || r.props && r.props.type === "number";
    Xt(t, i ? "change" : "input", (o) => {
      o.target.composing || t[Ai](Dn(t.value, e, s));
    }), (e || s) && Xt(t, "change", () => {
      t.value = Dn(t.value, e, s);
    }), i || (Xt(t, "compositionstart", yu), Xt(t, "compositionend", $s), Xt(t, "change", $s));
  }, mounted(t, { value: i, modifiers: { trim: e, number: n } }) {
    const r = i ?? "", s = t[Oi];
    delete t[Oi], s !== void 0 && (t.type === "text" || t.type === "textarea") && t.value !== s ? t[Ai](Dn(t.value, e, n)) : t.value = r;
  }, beforeUpdate(t, { value: i, oldValue: e, modifiers: { lazy: n, trim: r, number: s } }, o) {
    if (t[Ai] = Qs(o), t.composing) return;
    const l = (s || t.type === "number") && !/^0\d/.test(t.value) ? Yn(t.value) : t.value, a = i ?? "";
    if (l === a) return;
    const u = t.getRootNode();
    (u instanceof Document || u instanceof ShadowRoot) && u.activeElement === t && t.type !== "range" && (n && i === e || r && t.value.trim() === a) || (t.value = a);
  } };
  var wu = ["ctrl", "shift", "alt", "meta"];
  var _u = { stop: (t) => t.stopPropagation(), prevent: (t) => t.preventDefault(), self: (t) => t.target !== t.currentTarget, ctrl: (t) => !t.ctrlKey, shift: (t) => !t.shiftKey, alt: (t) => !t.altKey, meta: (t) => !t.metaKey, left: (t) => "button" in t && t.button !== 0, middle: (t) => "button" in t && t.button !== 1, right: (t) => "button" in t && t.button !== 2, exact: (t, i) => wu.some((e) => t[`${e}Key`] && !i.includes(e)) };
  var Vt = (t, i) => {
    if (!t) return t;
    const e = t._withMods || (t._withMods = {}), n = i.join(".");
    return e[n] || (e[n] = (r, ...s) => {
      for (let o = 0; o < i.length; o++) {
        const l = _u[i[o]];
        if (l && l(r, i)) return;
      }
      return t(r, ...s);
    });
  };
  var Tu = { esc: "escape", space: " ", up: "arrow-up", left: "arrow-left", right: "arrow-right", down: "arrow-down", delete: "backspace" };
  var Ht = (t, i) => {
    const e = t._withKeys || (t._withKeys = {}), n = i.join(".");
    return e[n] || (e[n] = (r) => {
      if (!("key" in r)) return;
      const s = At(r.key);
      if (i.some((o) => o === s || Tu[o] === s)) return t(r);
    });
  };
  var xu = Ue({ patchProp: gu }, $l);
  var er;
  function bu() {
    return er || (er = Ol(xu));
  }
  var Eu = (...t) => {
    const i = bu().createApp(...t), { mount: e } = i;
    return i.mount = (n) => {
      const r = Cu(n);
      if (!r) return;
      const s = i._component;
      !he(s) && !s.render && !s.template && (s.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
      const o = e(r, false, Su(r));
      return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
    }, i;
  };
  function Su(t) {
    if (t instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && t instanceof MathMLElement) return "mathml";
  }
  function Cu(t) {
    return Re(t) ? document.querySelector(t) : t;
  }
  var Pu = { viewBox: "0 0 24 24", class: "tify-icon -close", "aria-hidden": "true" };
  function Ru(t, i) {
    return S(), D("svg", Pu, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z" }, null, -1)])]);
  }
  var Co = de({ name: "mdi-Close", render: Ru });
  var Ie = (t, i) => {
    const e = t.__vccOpts || t;
    for (const [n, r] of i) e[n] = r;
    return e;
  };
  var Du = { blobBaseUrl: "https://github.com/tify-iiif-viewer/tify/blob/v0.36.2", bugsUrl: "https://github.com/tify-iiif-viewer/tify/issues", license: "AGPL-3.0", repositoryUrl: "https://github.com/tify-iiif-viewer/tify", version: "0.36.2" };
  var Iu = { computed: { env: () => Du } };
  var Au = { class: "tify-help", tabindex: "0" };
  var Ou = { class: "tify-sr-only" };
  var Mu = ["innerHTML"];
  var Fu = { class: "tify-list" };
  var Lu = ["href"];
  var ku = ["href"];
  var Hu = ["href"];
  var Bu = { class: "tify-help-footer" };
  var zu = ["innerHTML"];
  function Nu(t, i, e, n, r, s) {
    return S(), D("section", Au, [R("h2", Ou, z(t.$translate("Help")), 1), R("h3", null, z(t.$translate("About TIFY")), 1), R("p", { innerHTML: t.$translate("$info") }, null, 8, Mu), R("ul", Fu, [R("li", null, [R("a", { href: `${s.env.blobBaseUrl}/doc/index.md`, rel: "noopener noreferrer", target: "_blank" }, z(t.$translate("Documentation")), 9, Lu)]), R("li", null, [R("a", { href: s.env.bugsUrl, rel: "noopener noreferrer", target: "_blank" }, z(t.$translate("Report a bug")), 9, ku)]), R("li", null, [R("a", { href: s.env.repositoryUrl, rel: "noopener noreferrer", target: "_blank" }, z(t.$translate("Source code")), 9, Hu)])]), R("footer", Bu, [R("p", { innerHTML: t.$translate("$copyright") }, null, 8, zu), R("p", null, [Ke(z(t.$translate("Version")) + " ", 1), R("b", null, z(s.env.version), 1)])])]);
  }
  var Uu = Ie(Iu, [["render", Nu]]);
  var Vu = { viewBox: "0 0 24 24", class: "tify-icon -plus", "aria-hidden": "true" };
  function Wu(t, i) {
    return S(), D("svg", Vu, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" }, null, -1)])]);
  }
  var ds = de({ name: "mdi-Plus", render: Wu });
  var ju = { viewBox: "0 0 24 24", class: "tify-icon -minus", "aria-hidden": "true" };
  function Gu(t, i) {
    return S(), D("svg", ju, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M19 13H5v-2h14z" }, null, -1)])]);
  }
  var fs = de({ name: "mdi-Minus", render: Gu });
  var qu = { name: "CollectionNode", props: { item: { type: Object, default: () => {
  } } }, data() {
    return { children: null, expanded: false };
  }, computed: { id() {
    return this.$getId(ji());
  } }, methods: { toggleChildren() {
    if (this.expanded) {
      this.expanded = false;
      return;
    }
    if (this.children) {
      this.expanded = true;
      return;
    }
    if (this.item.children) {
      this.children = this.item.children, this.expanded = true;
      return;
    }
    this.$store.fetchJson(this.item["@id"] || this.item.id).then((t) => {
      this.children = t.collections || t.items || t.manifests || [], this.expanded = true;
    }, (t) => {
      const i = t.response && (t.response.statusText || t.response.data) || t.message;
      this.$store.addError(`Error loading IIIF manifest: ${i}`), this.children = false;
    });
  } } };
  var Zu = ["aria-controls", "aria-expanded", "aria-label"];
  var Ku = ["id"];
  var Xu = ["id"];
  function Yu(t, i, e, n, r, s) {
    const o = fs, l = ds, a = Qr("CollectionNode", true);
    return S(), D("li", { class: Pe(["tify-collection-item", { "-current": t.$store.manifest && t.$store.manifest.id === (e.item["@id"] || e.item.id) }]) }, [e.item.type === "Collection" ? (S(), D("button", { key: 0, type: "button", class: "tify-collection-link -has-children", "aria-controls": s.id, "aria-expanded": r.expanded, "aria-label": t.$translate(r.expanded ? "Collapse" : "Expand"), onClick: i[0] || (i[0] = (u) => s.toggleChildren()) }, [r.expanded ? (S(), le(o, { key: 0 })) : (S(), le(l, { key: 1 })), Ke(" " + z(t.$store.localize(e.item.label)), 1)], 8, Zu)) : (S(), D("a", { key: 1, href: "javascript:;", class: "tify-collection-link", onClick: i[1] || (i[1] = (u) => t.$store.loadManifest(e.item["@id"] || e.item.id, { expectedType: e.item.type, reset: true })) }, z(t.$store.localize(e.item.label)), 1)), r.children !== false ? Be((S(), D("ol", { key: 2, id: s.id, class: "tify-collection-list" }, [(S(true), D(se, null, Ee(r.children, (u) => (S(), le(a, { key: u.id, item: u }, null, 8, ["item"]))), 128))], 8, Ku)), [[Qe, r.expanded]]) : Be((S(), D("p", { key: 3, id: s.id, class: "tify-collection-error" }, z(t.$translate("Could not load child manifest")), 9, Xu)), [[Qe, r.expanded]])], 2);
  }
  var Ju = Ie(qu, [["render", Yu]]);
  var Qu = { data() {
    return { filter: "" };
  }, computed: { filteredItems() {
    const t = this.filter.trim().toLowerCase().split(/\s+/);
    return this.$store.collection.items.filter((i) => {
      const e = this.$store.localize(i.label).toLowerCase();
      return t.every((n) => e.includes(n));
    });
  } } };
  var $u = { class: "tify-collection", tabindex: "0" };
  var ec = { class: "tify-collection-header" };
  var tc = { class: "tify-sr-only" };
  var ic = { key: 0, class: "tify-collection-controls" };
  var nc = ["aria-label", "placeholder"];
  var sc = ["disabled"];
  var rc = { key: 0, class: "tify-collection-list" };
  var oc = { key: 1, class: "tify-collection-no-results" };
  function ac(t, i, e, n, r, s) {
    const o = Ju;
    return S(), D("section", $u, [R("header", ec, [R("h2", tc, z(t.$translate("Collection")), 1), t.$store.collection.items.length > 5 ? (S(), D("div", ic, [Be(R("input", { "onUpdate:modelValue": i[0] || (i[0] = (l) => r.filter = l), "aria-label": t.$translate("Filter collection"), class: "tify-collection-filter", placeholder: t.$translate("Filter collection"), type: "text", onKeydown: [i[1] || (i[1] = Ht(Vt((l) => r.filter ? r.filter = "" : l.target.blur(), ["prevent"]), ["esc"])), i[2] || (i[2] = Vt(() => {
    }, ["stop"]))] }, null, 40, nc), [[Ji, r.filter]]), R("button", { type: "button", class: "tify-collection-reset", disabled: !r.filter, onClick: i[3] || (i[3] = (l) => r.filter = "") }, z(t.$translate("Reset")), 9, sc)])) : Q("", true)]), s.filteredItems.length ? (S(), D("ol", rc, [(S(true), D(se, null, Ee(s.filteredItems, (l) => (S(), le(o, { key: l.id, item: l }, null, 8, ["item"]))), 128))])) : (S(), D("p", oc, z(t.$translate("No results")), 1))]);
  }
  var lc = Ie(Qu, [["render", ac]]);
  function Po(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  }
  var Hi = { exports: {} };
  var uc = Hi.exports;
  var tr;
  function cc() {
    return tr || (tr = 1, (function(t) {
      (function(i) {
        if (typeof e != "function") {
          var e = function(v) {
            return v;
          };
          e.nonNative = true;
        }
        const n = e("plaintext"), r = e("html"), s = e("comment"), o = /<(\w*)>/g, l = /<\/?([^\s\/>]+)/;
        function a(v, y, T) {
          v = v || "", y = y || [], T = T || "";
          let x = c(y, T);
          return h(v, x);
        }
        function u(v, y) {
          v = v || [], y = y || "";
          let T = c(v, y);
          return function(E) {
            return h(E || "", T);
          };
        }
        a.init_streaming_mode = u;
        function c(v, y) {
          return v = f(v), { allowable_tags: v, tag_replacement: y, state: n, tag_buffer: "", depth: 0, in_quote_char: "" };
        }
        function h(v, y) {
          if (typeof v != "string") throw new TypeError("'html' parameter must be a string");
          let T = y.allowable_tags, x = y.tag_replacement, E = y.state, M = y.tag_buffer, L = y.depth, U = y.in_quote_char, K = "";
          for (let q = 0, Y = v.length; q < Y; q++) {
            let te = v[q];
            if (E === n) switch (te) {
              case "<":
                E = r, M += te;
                break;
              default:
                K += te;
                break;
            }
            else if (E === r) switch (te) {
              case "<":
                if (U) break;
                L++;
                break;
              case ">":
                if (U) break;
                if (L) {
                  L--;
                  break;
                }
                U = "", E = n, M += ">", T.has(m(M)) ? K += M : K += x, M = "";
                break;
              case '"':
              case "'":
                te === U ? U = "" : U = U || te, M += te;
                break;
              case "-":
                M === "<!-" && (E = s), M += te;
                break;
              case " ":
              case `
`:
                if (M === "<") {
                  E = n, K += "< ", M = "";
                  break;
                }
                M += te;
                break;
              default:
                M += te;
                break;
            }
            else if (E === s) switch (te) {
              case ">":
                M.slice(-2) == "--" && (E = n), M = "";
                break;
              default:
                M += te;
                break;
            }
          }
          return y.state = E, y.tag_buffer = M, y.depth = L, y.in_quote_char = U, K;
        }
        function f(v) {
          let y = /* @__PURE__ */ new Set();
          if (typeof v == "string") {
            let T;
            for (; T = o.exec(v); ) y.add(T[1]);
          } else !e.nonNative && typeof v[e.iterator] == "function" ? y = new Set(v) : typeof v.forEach == "function" && v.forEach(y.add, y);
          return y;
        }
        function m(v) {
          let y = l.exec(v);
          return y ? y[1].toLowerCase() : null;
        }
        t.exports ? t.exports = a : i.striptags = a;
      })(uc);
    })(Hi)), Hi.exports;
  }
  var hc = cc();
  var Ro = Po(hc);
  var dc = { props: { number: { type: Number, required: true }, wrap: { type: Boolean, default: false } }, computed: { label() {
    return Ro(this.$store.localize(this.$store.manifest.items[this.number - 1].label)) || this.$translate("$n/a");
  }, html() {
    return `<span>${this.$store.options.pageLabelFormat}</span>`.replace("P", `${this.number}`).replace("T", `${this.$store.pageCount}`).replace("L", `</span>${this.label}<span>`).replace("<span></span>", "");
  } } };
  var fc = ["innerHTML"];
  function pc(t, i, e, n, r, s) {
    return S(), D("span", { class: Pe(["tify-page-name", { "-wrap": e.wrap }]), innerHTML: s.html }, null, 10, fc);
  }
  var ni = Ie(dc, [["render", pc]]);
  var gc = { viewBox: "0 0 24 24", class: "tify-icon -chevron-up", "aria-hidden": "true" };
  function mc(t, i) {
    return S(), D("svg", gc, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z" }, null, -1)])]);
  }
  var Do = de({ name: "mdi-ChevronUp", render: mc });
  var vc = { viewBox: "0 0 24 24", class: "tify-icon -chevron-down", "aria-hidden": "true" };
  function yc(t, i) {
    return S(), D("svg", vc, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z" }, null, -1)])]);
  }
  var Io = de({ name: "mdi-ChevronDown", render: yc });
  function vn(t) {
    const i = ["a", "b", "br", "i", "img", "p", "span"], e = { a: ["href"], img: ["alt", "src"] };
    let n = Ro(t, i);
    const r = /<(\w+)((\s+.+?(\s*=\s*(?:".*?"|'.*?'|.*?|[\^'">\s]+))?)+\s*|\s*)>/g;
    return n = n.replace(r, (s, o, l) => {
      if (!l) return `<${o}>`;
      const a = /(?:([^\s"'=]+)(?:=(?:"(.*?)"|'(.*?)'|([^\s>]+)))?)/g, u = [];
      return l.replace(a, (c, h) => {
        var f;
        (f = e[o]) != null && f.includes(h) && u.push(c);
      }), u.length > 0 ? `<${o} ${u.join(" ")}>` : `<${o}>`;
    }), n;
  }
  function ir(t, i) {
    if (!(t instanceof Array) || !i || new Set(t).size !== t.length) return false;
    for (let e = 0, n = t.length; e < n; e += 1) if (!Number.isInteger(t[e]) || e > 0 && t[e] > 0 && t[e] <= t[e - 1] || t[e] < -1 || t[e] > i) return false;
    return true;
  }
  function ps(t, i = ["https:", "http:"]) {
    let e;
    try {
      e = new URL(t);
    } catch {
      return false;
    }
    return i.includes(e.protocol);
  }
  var wc = { props: { metadata: { type: Array, default: () => [] } }, data() {
    return { infoItems: [] };
  }, watch: { metadata() {
    this.init();
  }, "$store.options.view": { handler(t) {
    t === "info" && this.init();
  }, immediate: true } }, methods: { init() {
    this.$nextTick(() => {
      var t;
      (t = this.$refs.contents) == null || t.forEach((i, e) => {
        const n = i.offsetHeight;
        this.infoItems[e] = { collapsed: true, exceedsHeight: true }, this.$nextTick(() => {
          const r = i.offsetHeight, s = n >= r;
          this.infoItems[e] = { collapsed: s, exceedsHeight: s };
        });
      });
    });
  }, filterHtml: vn, isValidUrl: ps } };
  var _c = { class: "tify-info-metadata" };
  var Tc = { key: 0 };
  var xc = { class: "tify-info-value" };
  var bc = ["href"];
  var Ec = ["innerHTML"];
  var Sc = ["onClick"];
  function Cc(t, i, e, n, r, s) {
    const o = Io, l = Do;
    return S(), D("div", _c, [(S(true), D(se, null, Ee(e.metadata, (a, u) => (S(), D("div", { key: u }, [a.label ? (S(), D("h4", Tc, z(t.$store.localize(a.label)), 1)) : Q("", true), R("div", { ref_for: true, ref: "contents", class: Pe(["tify-info-content", { "-collapsed": r.infoItems[u] && r.infoItems[u].collapsed }]) }, [R("div", xc, [s.isValidUrl(a.value) ? (S(), D("p", { key: `url-${u}` }, [R("a", { href: a.value }, z(a.value), 9, bc)])) : (S(), D("div", { key: `html-${u}`, innerHTML: s.filterHtml(t.$store.localize(a.value)) || t.$translate("$n/a") }, null, 8, Ec))]), r.infoItems[u] && r.infoItems[u].exceedsHeight ? (S(), D("button", { key: 0, type: "button", class: "tify-info-toggle", onClick: (c) => r.infoItems[u].collapsed = !r.infoItems[u].collapsed }, [r.infoItems[u].collapsed ? (S(), D(se, { key: 0 }, [ee(o), Ke(" " + z(t.$translate("Expand")), 1)], 64)) : (S(), D(se, { key: 1 }, [ee(l), Ke(" " + z(t.$translate("Collapse")), 1)], 64))], 8, Sc)) : Q("", true)], 2)]))), 128))]);
  }
  var Pc = Ie(wc, [["render", Cc]]);
  function Rc(t, i) {
    try {
      return new Date(t).toLocaleDateString(i, { month: "long", day: "numeric", year: "numeric" });
    } catch {
      return t;
    }
  }
  var Dc = { data() {
    return { collectionDataShown: false };
  }, computed: { hasProvider() {
    var t;
    return (t = this.manifestOrCollection.provider) == null ? void 0 : t.some((i) => {
      var e;
      return this.$store.localize(i.label) || ((e = i.homepage) == null ? void 0 : e.length);
    });
  }, homepages() {
    return [].concat(this.manifestOrCollection.homepage || []);
  }, logos() {
    var i;
    let t = [].concat(this.manifestOrCollection.logo || []);
    return (i = this.manifestOrCollection.provider) == null || i.forEach((e) => {
      e.logo && (t = t.concat(e.logo));
    }), t = [...new Map(t.map((e) => [e.id, e])).values()], t = t.map((e) => {
      var n, r, s, o;
      return { id: e.id, link: ((r = (n = e.service) == null ? void 0 : n[0]) == null ? void 0 : r.id) || ((o = (s = e.service) == null ? void 0 : s[0]) == null ? void 0 : o["@id"]) };
    }), t;
  }, manifestOrCollection() {
    return this.collectionDataShown ? this.$store.collection : this.$store.manifest || this.$store.collection || {};
  }, pages() {
    return this.$store.options.pages.filter((t) => t > 0).map((t) => {
      var n, r;
      const i = { page: t, media: [] }, e = (r = (n = this.$store.manifest.items[t - 1].items) == null ? void 0 : n[0]) == null ? void 0 : r.items;
      return e == null || e.forEach((s) => {
        var l;
        const o = ((l = s.body) == null ? void 0 : l.items) || [s.body];
        i.media.push(...o.filter((a) => a.label).map((a) => ({ label: a.label })));
      }), i;
    });
  } }, methods: { filterHtml: vn, formatDate: Rc, isValidUrl: ps } };
  var Ic = { class: "tify-info", tabindex: "0" };
  var Ac = { class: "tify-sr-only" };
  var Oc = { key: 0, class: "tify-info-header" };
  var Mc = ["aria-pressed"];
  var Fc = ["aria-pressed"];
  var Lc = { key: 1, class: "tify-info-section -title" };
  var kc = { key: 2, class: "tify-info-section -time" };
  var Hc = { key: 3, class: "tify-info-section -place" };
  var Bc = { key: 4, class: "tify-info-section -metadata" };
  var zc = { key: 5, class: "tify-info-section -description" };
  var Nc = { key: 6, class: "tify-info-section -metadata -structure" };
  var Uc = { key: 0, class: "tify-info-structure" };
  var Vc = { key: 7, class: "tify-info-section -pages" };
  var Wc = { class: "tify-info-pages" };
  var jc = { key: 0, class: "tify-info-image-labels" };
  var Gc = { key: 8, class: "tify-info-section -related" };
  var qc = { class: "tify-list" };
  var Zc = ["href"];
  var Kc = ["href"];
  var Xc = { key: 9, class: "tify-info-section -license" };
  var Yc = ["href"];
  var Jc = { key: 10, class: "tify-info-section -attribution" };
  var Qc = ["innerHTML"];
  var $c = { key: 11, class: "tify-info-section -provider" };
  var eh = { key: 0 };
  var th = { key: 1, class: "tify-list" };
  var ih = ["href"];
  var nh = { key: 12, class: "tify-info-section -logo" };
  var sh = ["href"];
  var rh = ["src", "alt"];
  var oh = ["src", "alt"];
  function ah(t, i, e, n, r, s) {
    var a, u, c, h;
    const o = Pc, l = ni;
    return S(), D("section", Ic, [R("h2", Ac, z(t.$translate("Info")), 1), t.$store.collection && t.$store.manifest ? (S(), D("div", Oc, [R("button", { type: "button", class: "tify-info-button", "aria-pressed": !r.collectionDataShown, onClick: i[0] || (i[0] = (f) => r.collectionDataShown = false) }, z(t.$translate("Document")), 9, Mc), R("button", { type: "button", class: "tify-info-button", "aria-pressed": r.collectionDataShown, onClick: i[1] || (i[1] = (f) => r.collectionDataShown = true) }, z(t.$translate("Collection")), 9, Fc)])) : Q("", true), s.manifestOrCollection.label ? (S(), D("div", Lc, [R("h3", null, z(t.$translate("Title")), 1), R("p", null, z(t.$store.localize(s.manifestOrCollection.label)), 1)])) : Q("", true), s.manifestOrCollection.navDate ? (S(), D("div", kc, [R("h3", null, z(t.$translate("Date")), 1), R("p", null, z(s.formatDate(s.manifestOrCollection.navDate, t.$store.options.language)), 1)])) : Q("", true), s.manifestOrCollection.navPlace ? (S(), D("div", Hc, [R("h3", null, z(t.$translate("Place")), 1), (S(true), D(se, null, Ee(s.manifestOrCollection.navPlace.features, (f) => (S(), D("p", { key: f.id }, z(t.$store.localize(f.properties.label)), 1))), 128))])) : Q("", true), s.manifestOrCollection.metadata && s.manifestOrCollection.metadata.length ? (S(), D("div", Bc, [R("h3", null, z(t.$translate("Metadata")), 1), t.$store.options.view === "info" ? (S(), le(o, { key: 0, metadata: s.manifestOrCollection.metadata }, null, 8, ["metadata"])) : Q("", true)])) : Q("", true), s.manifestOrCollection.summary ? (S(), D("div", zc, [R("h3", null, z(t.$translate("Description")), 1), t.$store.options.view === "info" ? (S(), le(o, { key: 0, metadata: [{ value: s.manifestOrCollection.summary }] }, null, 8, ["metadata"])) : Q("", true)])) : Q("", true), s.manifestOrCollection.structures && ((a = t.$store.currentStructure) != null && a.label || (u = t.$store.currentStructure) != null && u.metadata) ? (S(), D("div", Nc, [R("h3", null, z(t.$translate("Current Section")), 1), (c = t.$store.currentStructure) != null && c.label ? (S(), D("p", Uc, z(t.$store.localize(t.$store.currentStructure.label)), 1)) : Q("", true), t.$store.options.view === "info" && ((h = t.$store.currentStructure) != null && h.metadata) ? (S(), le(o, { key: 1, class: "tify-info-section -metadata", metadata: t.$store.currentStructure.metadata }, null, 8, ["metadata"])) : Q("", true)])) : Q("", true), s.manifestOrCollection.type === "Manifest" ? (S(), D("div", Vc, [R("h3", null, z(t.$translate(s.pages.length > 1 ? "Current Pages" : "Current Page")), 1), R("ol", Wc, [(S(true), D(se, null, Ee(s.pages, (f) => (S(), D("li", { key: f }, [ee(l, { number: f.page, wrap: "" }, null, 8, ["number"]), f.media.length ? (S(), D("ul", jc, [(S(true), D(se, null, Ee(f.media, (m, v) => (S(), D("li", { key: v }, z(t.$store.localize(m.label)), 1))), 128))])) : Q("", true), t.$store.manifest.items[f.page - 1].metadata ? (S(), le(o, { key: 1, class: "tify-info-section -metadata", metadata: t.$store.manifest.items[f.page - 1].metadata }, null, 8, ["metadata"])) : Q("", true)]))), 128))])])) : Q("", true), s.homepages.length ? (S(), D("div", Gc, [R("h3", null, z(t.$translate("Related Resources")), 1), R("ul", qc, [(S(true), D(se, null, Ee(s.homepages, (f, m) => (S(), D("li", { key: m }, [typeof f == "string" ? (S(), D("a", { key: 0, href: f }, z(f), 9, Zc)) : (S(), D("a", { key: 1, href: f.id }, z(f.label ? t.$store.localize(f.label) : f.id), 9, Kc))]))), 128))])])) : Q("", true), s.manifestOrCollection.rights ? (S(), D("div", Xc, [R("h3", null, z(t.$translate("License")), 1), R("p", null, [R("a", { href: s.manifestOrCollection.rights }, z(s.manifestOrCollection.rights), 9, Yc)])])) : Q("", true), s.manifestOrCollection.requiredStatement ? (S(), D("div", Jc, [R("h3", null, z(t.$store.localize(s.manifestOrCollection.requiredStatement.label)), 1), R("div", { innerHTML: s.filterHtml(t.$store.localize(s.manifestOrCollection.requiredStatement.value)) }, null, 8, Qc)])) : Q("", true), s.hasProvider ? (S(), D("div", $c, [R("h3", null, z(t.$translate("Provided by")), 1), (S(true), D(se, null, Ee(s.manifestOrCollection.provider, (f) => {
      var m, v;
      return S(), D("div", { key: f.id }, [f.label ? (S(), D("p", eh, z(t.$store.localize(f.label)), 1)) : Q("", true), (m = f.homepage) != null && m.length || (v = f.seeAlso) != null && v.length ? (S(), D("ul", th, [(S(true), D(se, null, Ee([...f.homepage || [], ...f.seeAlso || []], (y) => (S(), D("li", { key: y.id }, [R("a", { href: y.id }, z(y.label ? t.$store.localize(y.label) : y.id), 9, ih)]))), 128))])) : Q("", true)]);
    }), 128))])) : Q("", true), s.logos.length ? (S(), D("div", nh, [(S(true), D(se, null, Ee(s.logos, (f, m) => (S(), D("p", { key: m }, [f.link ? (S(), D("a", { key: 0, href: f.link }, [R("img", { class: "tify-info-logo", src: f.id, alt: t.$translate("Logo") }, null, 8, rh)], 8, sh)) : (S(), D("img", { key: 1, class: "tify-info-logo", src: f.id, alt: t.$translate("Logo") }, null, 8, oh))]))), 128))])) : Q("", true)]);
  }
  var lh = Ie(Dc, [["render", ah]]);
  var uh = { name: "TocList", props: { level: { type: Number, default: 0 }, structures: { type: Array, default: () => [] }, purpose: { type: String, default: "" } }, data() {
    var t;
    return { expandedStructures: this.level === 0 && this.structures.length === 1 && ((t = this.structures[0].items) != null && t.some((i) => i.items)) ? [true] : [] };
  }, computed: { id() {
    return this.$getId(ji());
  } }, methods: { getFirstPage(t) {
    if (t.items) return this.getFirstPage(t.items[0]);
    const i = this.$store.manifest.items.findIndex((e) => e.id === t.id);
    return i < 0 ? 1 : i + 1;
  }, getFirstPageLabel(t) {
    var e;
    const i = this.getFirstPage(t);
    return this.$store.localize((e = this.$store.manifest.items[i - 1]) == null ? void 0 : e.label);
  }, getLastPage(t) {
    if (t.items) return this.getLastPage(t.items.at(-1));
    const i = this.$store.manifest.items.findLastIndex((e) => e.id === t.id);
    return i < 0 ? this.$store.manifest.items.length : i + 1;
  }, isCurrentPageInStructure(t) {
    if (this.$store.manifest.items.filter((r, s) => this.$store.options.pages.includes(s + 1)).map((r) => r.id).some((r) => {
      var s;
      return (s = t.items) == null ? void 0 : s.some((o) => o.id === r);
    })) return true;
    const e = t.firstPage || this.getFirstPage(t), n = t.lastPage || this.getLastPage(t);
    return this.$store.options.pages.some((r) => r >= e && r <= n);
  }, setPage(t) {
    this.$store.setPage(t), this.$store.isContainerWidthAtLeast("medium") || this.$store.updateOptions({ view: null });
  }, toggleAllChildren(t = null) {
    if (this.$refs.children) {
      for (let i = this.structures.length - 1; i >= 0; i -= 1) this.toggleChildren(i, t);
      this.$refs.children.forEach((i) => {
        i.toggleAllChildren(t);
      });
    }
  }, toggleChildren(t, i = null) {
    var n;
    (n = this.structures[t].items) != null && n.some((r) => r.items) && (this.expandedStructures[t] = i !== null ? i : !this.expandedStructures[t]);
  } } };
  var ch = { class: "tify-toc-list" };
  var hh = ["aria-controls", "aria-expanded", "aria-label", "title", "onClick"];
  var dh = ["href"];
  var fh = ["onClick"];
  var ph = { class: "tify-toc-label" };
  var gh = { class: "tify-toc-page" };
  var mh = ["onClick"];
  var vh = { class: "tify-toc-label" };
  function yh(t, i, e, n, r, s) {
    const o = fs, l = ds, a = Qr("TocList", true);
    return S(), D("ul", ch, [(S(true), D(se, null, Ee(e.structures, (u, c) => {
      var h, f;
      return S(), D("li", { key: c, class: Pe(["tify-toc-structure", { "-current": s.isCurrentPageInStructure(u), "-expanded": r.expandedStructures[c] }]) }, [(h = u.items) != null && h.some((m) => m.items) ? (S(), D("button", { key: 0, type: "button", class: "tify-toc-toggle", "aria-controls": `${s.id}-${c}`, "aria-expanded": !!r.expandedStructures[c], "aria-label": t.$translate(r.expandedStructures[c] ? "Collapse" : "Expand"), title: t.$translate(r.expandedStructures[c] ? "Collapse" : "Expand"), onClick: (m) => s.toggleChildren(c) }, [r.expandedStructures[c] ? (S(), le(o, { key: 0 })) : (S(), le(l, { key: 1 }))], 8, hh)) : Q("", true), e.purpose === "pdf" ? (S(), D("a", { key: 1, class: "tify-toc-link", href: u.rendering[0].id, download: "" }, z(t.$store.localize(u.label)) + " (" + z(u.items.length) + "\xA0" + z(t.$translate(u.items.length === 1 ? "page" : "pages")) + ") ", 9, dh)) : u.label && t.$store.localize(u.label) !== s.getFirstPageLabel(u) ? (S(), D("a", { key: 2, class: "tify-toc-link -dots", href: "javascript:;", onClick: (m) => s.setPage(u.firstPage || s.getFirstPage(u)) }, [R("span", ph, z(t.$store.localize(u.label)), 1), R("span", gh, z(s.getFirstPageLabel(u) || "\u2014"), 1)], 8, fh)) : (S(), D("a", { key: 3, class: "tify-toc-link", href: "javascript:;", onClick: (m) => s.setPage(u.firstPage || s.getFirstPage(u)) }, [R("span", vh, z(t.$store.localize(u.label, "string") || s.getFirstPageLabel(u) || t.$translate("$n/a")), 1)], 8, mh)), (f = u.items) != null && f.some((m) => m.items) ? Be((S(), le(a, { key: 4, id: `${s.id}-${c}`, ref_for: true, ref: "children", level: e.level + 1, purpose: e.purpose, structures: u.items }, null, 8, ["id", "level", "purpose", "structures"])), [[Qe, r.expandedStructures[c]]]) : Q("", true)], 2);
    }), 128))]);
  }
  var Ao = Ie(uh, [["render", yh]]);
  var wh = { viewBox: "0 0 24 24", class: "tify-icon -filmstrip", "aria-hidden": "true" };
  function _h(t, i) {
    return S(), D("svg", wh, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M18 9h-2V7h2m0 6h-2v-2h2m0 6h-2v-2h2M8 9H6V7h2m0 6H6v-2h2m0 6H6v-2h2M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3z" }, null, -1)])]);
  }
  var Th = de({ name: "mdi-Filmstrip", render: _h });
  var xh = { viewBox: "0 0 24 24", class: "tify-icon -waveform", "aria-hidden": "true" };
  function bh(t, i) {
    return S(), D("svg", xh, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "m22 12l-2 1l-1 1l-1-1l-1 3l-1-3l-1 8l-1-8l-1 2l-1-2l-1 4l-1-4l-1 9l-1-9l-1 6l-1-6l-1 1l-1-1l-2-1l2-1l1-1l1 1l1-6l1 6l1-9l1 9l1-4l1 4l1-2l1 2l1-8l1 8l1-3l1 3l1-1l1 1z" }, null, -1)])]);
  }
  var Eh = de({ name: "mdi-Waveform", render: bh });
  var Sh = { data() {
    return { otherItems: [], perElementPdfLinksVisible: false };
  }, computed: { hasElementPdfLinks() {
    var i, e;
    return (e = (i = this.$store.manifest.structures) == null ? void 0 : i[0]) != null && e.rendering ? this.$store.manifest.structures[0].rendering.some((n) => n.format && n.format === "application/pdf") : false;
  }, media() {
    const t = [];
    return this.$store.options.pages.filter((i) => i > 0).forEach((i) => {
      var n, r;
      const e = (r = (n = this.$store.manifest.items[i - 1].items) == null ? void 0 : n[0]) == null ? void 0 : r.items;
      e == null || e.forEach((s, o) => {
        var a;
        (((a = s.body) == null ? void 0 : a.items) || [s.body]).forEach((u, c) => {
          var m;
          const h = (m = u.format) == null ? void 0 : m.split("/")[1], f = { fileName: u.id.split("/").at(-1), format: h == null ? void 0 : h.toUpperCase(), label: u.label, type: u.type, url: u.id, page: i, itemIndex: o, layerIndex: c };
          if (u.service) {
            const v = [].concat(u.service)[0], y = ["ImageService2", "ImageService3"].includes(v.type || v["@type"]) ? "default" : "native", T = v.type === "ImageService3" ? "max" : "full", x = v.id || v["@id"], E = x.at(-1) === "/" ? "" : "/";
            f.url = `${x}${E}full/${T}/0/${y}.${h === "jpeg" ? "jpg" : h}`;
          }
          t.push(f);
        });
      });
    }), t;
  }, pages() {
    return this.$store.options.pages.filter((t) => t > 0);
  }, renderings() {
    return [].concat(this.$store.manifest.rendering || []);
  } } };
  var Ch = { class: "tify-export", tabindex: "0" };
  var Ph = { class: "tify-sr-only" };
  var Rh = { key: 0, class: "tify-export-section -links" };
  var Dh = { class: "tify-export-list" };
  var Ih = ["href"];
  var Ah = { class: "tify-export-link-media" };
  var Oh = ["src"];
  var Mh = { class: "tify-export-link-text" };
  var Fh = { key: 0, class: "tify-export-link-hint" };
  var Lh = { class: "tify-export-link-format" };
  var kh = { key: 1, class: "tify-export-section -renderings" };
  var Hh = { class: "tify-list" };
  var Bh = ["href"];
  var zh = { key: 0, class: "tify-export-container" };
  var Nh = ["aria-controls", "aria-expanded", "aria-label"];
  var Uh = ["id"];
  var Vh = { class: "tify-export-section -iiif" };
  var Wh = { class: "tify-list" };
  var jh = { key: 0 };
  var Gh = ["href"];
  var qh = ["href"];
  var Zh = { key: 2, class: "tify-export-section -other" };
  var Kh = { class: "tify-list" };
  var Xh = ["href"];
  function Yh(t, i, e, n, r, s) {
    var h, f, m;
    const o = Eh, l = Th, a = ni, u = Co, c = Ao;
    return S(), D("section", Ch, [R("h2", Ph, z(t.$translate("Export [noun]")), 1), t.$store.manifest ? (S(), D("div", Rh, [R("h3", null, z(t.$translate("Media Files")), 1), R("ul", Dh, [(S(true), D(se, null, Ee(s.media, (v) => (S(), D("li", { key: v.url }, [R("a", { href: v.url, class: "tify-export-link", download: "", rel: "noopener noreferrer", target: "_blank" }, [R("span", Ah, [t.$store.getThumbnailUrl(v.page, 96, v.itemIndex, v.layerIndex) ? (S(), D("img", { key: 0, src: t.$store.getThumbnailUrl(v.page, 96, v.itemIndex, v.layerIndex), alt: "" }, null, 8, Oh)) : v.type === "Sound" ? (S(), le(o, { key: 1 })) : v.type === "Video" ? (S(), le(l, { key: 2 })) : Q("", true)]), R("span", Mh, [ee(a, { number: v.page, wrap: true }, null, 8, ["number"]), v.label ? (S(), D("span", Fh, z(t.$store.localize(v.label)), 1)) : Q("", true), R("span", Lh, [v.type === "Sound" ? (S(), D(se, { key: 0 }, [Ke(z(t.$translate("Audio")) + " \xB7 ", 1)], 64)) : v.type === "Video" ? (S(), D(se, { key: 1 }, [Ke(z(t.$translate("Video")) + " \xB7 ", 1)], 64)) : v.type === "Image" ? (S(), D(se, { key: 2 }, [Ke(z(t.$translate("Image")) + " \xB7 ", 1)], 64)) : Q("", true), Ke(" " + z(v.format), 1)])])], 8, Ih)]))), 128))])])) : Q("", true), (h = t.$store.manifest) != null && h.rendering ? (S(), D("div", kh, [R("h3", null, z(t.$translate("Renderings")), 1), R("ul", Hh, [(S(true), D(se, null, Ee(s.renderings, (v) => (S(), D("li", { key: v.id }, [R("a", { href: v.id }, z(t.$store.localize(v.label)), 9, Bh)]))), 128))]), s.hasElementPdfLinks ? (S(), D("div", zh, [R("button", { type: "button", class: Pe(["tify-export-toggle", { "-close": r.perElementPdfLinksVisible }]), "aria-controls": t.$getId("export-pdf-list"), "aria-expanded": r.perElementPdfLinksVisible, "aria-label": r.perElementPdfLinksVisible ? t.$translate("Close PDF list") : null, onClick: i[0] || (i[0] = (v) => r.perElementPdfLinksVisible = !r.perElementPdfLinksVisible) }, [r.perElementPdfLinksVisible ? (S(), le(u, { key: 1 })) : (S(), D(se, { key: 0 }, [Ke(z(t.$translate("PDFs for each element")), 1)], 64))], 10, Nh), Be(R("div", { id: t.$getId("export-pdf-list"), class: "tify-export-toc" }, [R("h4", null, z(t.$translate("PDFs for each element")), 1), ee(c, { ref: "children", purpose: "pdf", level: 0, structures: t.$store.structures }, null, 8, ["structures"])], 8, Uh), [[Qe, r.perElementPdfLinksVisible]])])) : Q("", true)])) : Q("", true), R("div", Vh, [i[1] || (i[1] = R("h3", null, "IIIF", -1)), R("ul", Wh, [t.$store.options.childManifestUrl ? (S(), D("li", jh, [R("a", { href: t.$store.options.childManifestUrl, download: "manifest.json" }, z(t.$translate("IIIF manifest (current document)")), 9, Gh)])) : Q("", true), R("li", null, [R("a", { href: t.$store.options.manifestUrl, download: "manifest.json" }, z(t.$translate(t.$store.collection ? "IIIF manifest (collection)" : "IIIF manifest")), 9, qh)])])]), (m = (f = t.$store.manifest) == null ? void 0 : f.seeAlso) != null && m.length ? (S(), D("div", Zh, [R("h3", null, z(t.$translate("Other Formats")), 1), R("ul", Kh, [(S(true), D(se, null, Ee(t.$store.manifest.seeAlso, (v) => (S(), D("li", { key: v.id }, [R("a", { href: v.id, download: "" }, z(v.label ? t.$store.localize(v.label) : v.id), 9, Xh)]))), 128))])])) : Q("", true)]);
  }
  var Jh = Ie(Sh, [["render", Yh]]);
  function Qi(t, i, e = 120) {
    const n = t, r = e === true ? 120 : e;
    if (!r || r < 0) {
      n.scrollTop = i;
      return;
    }
    const o = (i - t.scrollTop) / r / 0.1;
    setTimeout(() => {
      n.scrollTop += o, n.scrollTop !== i && Qi(n, i, r - 10);
    }, 10);
  }
  function jn(t, i, e = true) {
    const n = i.querySelectorAll(t);
    if (!n.length) return;
    let r = n[0];
    const s = n[n.length - 1];
    Array.prototype.forEach.call(n, (u) => {
      u.dataset.level >= r.dataset.level && (r = u);
    });
    const o = i.getBoundingClientRect(), l = r.getBoundingClientRect(), a = s.getBoundingClientRect();
    if (l.top < o.top) {
      const u = l.top - o.top + i.scrollTop;
      Qi(i, u - 50, e);
    } else if (a.bottom > o.bottom) {
      const u = a.bottom - o.bottom + i.scrollTop;
      Qi(i, u + 50, e);
    }
  }
  var nr = ".tify-toc-structure.-current";
  var Qh = { data() {
    return { isInited: false };
  }, computed: { isNested() {
    return this.$store.structures.filter((t) => {
      var i;
      return (i = t.items) == null ? void 0 : i.some((e) => e.items);
    }).length;
  } }, watch: { "$store.options.pages": function() {
    this.$nextTick(() => jn(nr, this.$el));
  }, "$store.options.view": { handler(t) {
    t === "toc" && this.$nextTick(this.init);
  }, immediate: true } }, methods: { init() {
    this.isInited = true, this.$nextTick(() => jn(nr, this.$el, false));
  } } };
  var $h = { class: "tify-toc", tabindex: "0" };
  var ed = { class: "tify-sr-only" };
  var td = { key: 0, class: "tify-toc-header" };
  function id(t, i, e, n, r, s) {
    const o = Ao;
    return S(), D("section", $h, [R("h2", ed, z(t.$translate("Table of Contents")), 1), s.isNested ? (S(), D("div", td, [R("button", { type: "button", class: "tify-toc-toggle-all", onClick: i[0] || (i[0] = (l) => t.$refs.children.toggleAllChildren(true)) }, z(t.$translate("Expand all")), 1), R("button", { type: "button", class: "tify-toc-toggle-all", onClick: i[1] || (i[1] = (l) => t.$refs.children.toggleAllChildren(false)) }, z(t.$translate("Collapse all")), 1)])) : Q("", true), r.isInited ? (S(), le(o, { key: 1, ref: "children", level: 0, structures: t.$store.structures }, null, 8, ["structures"])) : Q("", true)]);
  }
  var nd = Ie(Qh, [["render", id]]);
  var sd = { viewBox: "0 0 24 24", class: "tify-icon -broken-image", "aria-hidden": "true" };
  function rd(t, i) {
    return S(), D("svg", sd, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M21 5v6.59l-3-3.01l-4 4.01l-4-4l-4 4l-3-3.01V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2m-3 6.42l3 3.01V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6.58l3 2.99l4-4l4 4" }, null, -1)])]);
  }
  var od = de({ name: "mdi-BrokenImage", render: rd });
  var ad = 750;
  var ld = { data() {
    return { itemHeight: 0, itemVerticalMargin: 0, items: [{}], itemsPerRow: 0, lastScrollTop: 0, resizeObserver: null, resizeTimeout: null, style: {}, thumbnailWidth: 0, touchTimeout: null };
  }, watch: { "$store.options.pages": function(t) {
    this.$nextTick(() => {
      const i = ".tify-thumbnails-item.-current";
      t.length > 2 || t.length > 1 && t[1] !== t[0] + 1 || (this.$refs.container.querySelector(i) ? jn(i, this.$el) : this.scrollToCurrentPage());
    });
  }, "$store.options.view": { handler(t) {
    t === "thumbnails" && this.$nextTick(this.init);
  }, immediate: true } }, mounted() {
    this.style.flex = this.$el.style.flex;
  }, unmounted() {
    var t;
    (t = this.resizeObserver) == null || t.disconnect(), clearTimeout(this.resizeTimeout);
  }, methods: { init() {
    this.updateDimensions(), this.scrollToCurrentPage(false), this.resizeObserver = new ResizeObserver(this.onResize), this.resizeObserver.observe(this.$el);
  }, onResize() {
    clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(() => {
      this.$store.options.view === "thumbnails" && this.updateDimensions();
    }, 200);
  }, updateDimensions() {
    if (!this.$refs.container) return;
    const t = this.$refs.container.querySelector(".tify-thumbnails-item"), i = t.currentStyle || window.getComputedStyle(t), e = parseInt(i.marginTop, 10) + parseFloat(i.marginBottom, 10);
    this.itemHeight = t.offsetHeight + e, this.itemVerticalMargin = e;
    const n = parseInt(i.marginLeft, 10) + parseFloat(i.marginRight, 10), r = t.offsetWidth + n;
    this.thumbnailWidth = t.querySelector(".tify-thumbnails-button").clientWidth, this.itemsPerRow = Math.floor(this.$refs.container.getBoundingClientRect().width / r);
    const o = Math.ceil(this.$store.manifest.items.length / this.itemsPerRow) * this.itemHeight;
    this.$refs.container.style.height = `${o}px`, this.redrawThumbnails(), this.scrollToCurrentPage(false);
  }, redrawThumbnails() {
    const t = this.$el.scrollTop, i = Math.floor(t / this.itemHeight) * this.itemsPerRow + 1, n = Math.ceil(this.$el.offsetHeight / this.itemHeight) * this.itemsPerRow, r = i + this.itemsPerRow + n, s = Math.min(this.$store.manifest.items.length, r), o = [];
    for (let l = i; l <= s; l += 1) o.push({ thumbnailUrl: this.$store.getThumbnailUrl(l, this.thumbnailWidth), page: l });
    this.items = o, this.$nextTick(() => {
      const l = Math.floor(i / this.itemsPerRow);
      this.$refs.container.style.paddingTop = `${l * this.itemHeight}px`;
    });
  }, scrollToCurrentPage(t = true) {
    const e = Math.floor((this.$store.options.pages[0] - 1) / this.itemsPerRow) * this.itemHeight + (this.itemVerticalMargin - 50);
    t ? Qi(this.$el, e) : this.$el.scrollTop = e;
  }, setPageAndSwitchView(t, i = false) {
    if (i) {
      const e = this.$store.options.pages.slice(0), n = e.indexOf(t);
      n < 0 ? (e.push(t), e.sort((r, s) => r - s), e[0] === 0 && e.shift()) : e.length > 1 && e.splice(n, 1), this.$store.updateOptions({ pages: e });
      return;
    }
    this.$store.setPage(t), this.$store.isContainerWidthAtLeast("medium") || this.$store.updateOptions({ view: null });
  }, touchStartTogglePage(t) {
    this.lastScrollTop = this.$el.scrollTop, this.touchTimeout = setTimeout(() => {
      this.$el.scrollTop === this.lastScrollTop && this.setPageAndSwitchView(t, true);
    }, ad);
  }, touchEnd() {
    clearTimeout(this.touchTimeout);
  } } };
  var ud = { class: "tify-sr-only" };
  var cd = { ref: "container", class: "tify-thumbnails-list" };
  var hd = ["onClick", "onTouchstart"];
  var dd = ["src"];
  var fd = { key: 1, class: "tify-thumbnails-image" };
  var pd = { class: "tify-sr-only" };
  function gd(t, i, e, n, r, s) {
    const o = od, l = ni;
    return S(), D("section", { class: "tify-thumbnails", tabindex: "0", onScroll: i[1] || (i[1] = (...a) => s.redrawThumbnails && s.redrawThumbnails(...a)) }, [R("h2", ud, z(t.$translate("Pages")), 1), R("ol", cd, [(S(true), D(se, null, Ee(r.items, (a) => (S(), D("li", { key: a.page, class: Pe(["tify-thumbnails-item", { "-current": t.$store.options.pages.includes(a.page) }]) }, [R("button", { type: "button", class: "tify-thumbnails-button", onClick: Vt((u) => s.setPageAndSwitchView(a.page, u.ctrlKey), ["prevent"]), onTouchstart: (u) => s.touchStartTogglePage(a.page), onTouchend: i[0] || (i[0] = (...u) => s.touchEnd && s.touchEnd(...u)) }, [a.thumbnailUrl ? (S(), D("img", { key: 0, class: "tify-thumbnails-image", alt: "", src: a.thumbnailUrl }, null, 8, dd)) : (S(), D("span", fd, [ee(o), R("span", pd, z(t.$translate("Image missing")), 1)])), ee(l, { number: a.page || 1 }, null, 8, ["number"])], 40, hd)], 2))), 128))], 512)], 32);
  }
  var md = Ie(ld, [["render", gd]]);
  var vd = { computed: { pages() {
    return this.$store.options.pages.filter((t) => t > 0);
  } }, watch: { "$store.options.annotationId": function() {
    this.scrollToCurrentAnnotation();
  }, "$store.annotationsAvailable": function() {
    this.$store.options.annotationId && this.scrollToCurrentAnnotation();
  } }, mounted() {
    this.$store.options.annotationId && this.$store.annotationsAvailable && this.scrollToCurrentAnnotation();
  }, methods: { filterHtml: vn, scrollToCurrentAnnotation() {
    this.$nextTick(() => {
      var i;
      const t = (i = this.$refs.currentItem) == null ? void 0 : i[0];
      t && t.scrollIntoView({ behavior: "smooth", block: t.offsetHeight < this.$refs.panel.offsetHeight / 2 ? "center" : "start" });
    });
  } } };
  var yd = { ref: "panel", class: "tify-text", tabindex: "0" };
  var wd = { class: "tify-sr-only" };
  var _d = { key: 0, class: "tify-text-pages" };
  var Td = { key: 0 };
  var xd = { class: "tify-text-list" };
  var bd = ["onClick", "onKeydown", "innerHTML"];
  var Ed = { key: 1, class: "tify-text-none" };
  function Sd(t, i, e, n, r, s) {
    const o = ni;
    return S(), D("section", yd, [R("h2", wd, z(t.$translate("Text")), 1), t.$store.annotationsAvailable !== false ? (S(), D("div", _d, [(S(true), D(se, null, Ee(s.pages, (l) => (S(), D("div", { key: l, class: "tify-text-page" }, [t.$store.pageCount > 1 ? (S(), D("h3", Td, [ee(o, { number: l }, null, 8, ["number"])])) : Q("", true), R("ul", xd, [(S(true), D(se, null, Ee(t.$store.annotations[l], (a, u) => (S(), D("li", { key: `${l}-${u}`, ref_for: true, ref: t.$store.options.annotationId === a.id ? "currentItem" : "", class: Pe(["tify-text-item", { "-current": t.$store.options.annotationId === a.id }]) }, [R("div", { role: "button", tabindex: "0", class: "tify-text-toggle", onClick: (c) => t.$store.toggleAnnotationId(a.id), onKeydown: Ht((c) => t.$store.toggleAnnotationId(a.id), ["enter", "space"]), innerHTML: s.filterHtml(a.html) }, null, 40, bd)], 2))), 128))])]))), 128))])) : (S(), D("p", Ed, z(t.$translate("Text not available for this page")), 1))], 512);
  }
  var Cd = Ie(vd, [["render", Sd]]);
  var Pd = { viewBox: "0 0 24 24", class: "tify-icon -volume-high", "aria-hidden": "true" };
  function Rd(t, i) {
    return S(), D("svg", Pd, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.84-5 6.7v2.07c4-.91 7-4.49 7-8.77s-3-7.86-7-8.77M16.5 12c0-1.77-1-3.29-2.5-4.03V16c1.5-.71 2.5-2.24 2.5-4M3 9v6h4l5 5V4L7 9z" }, null, -1)])]);
  }
  var Dd = de({ name: "mdi-VolumeHigh", render: Rd });
  var Id = { viewBox: "0 0 24 24", class: "tify-icon -volume-medium", "aria-hidden": "true" };
  function Ad(t, i) {
    return S(), D("svg", Id, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M5 9v6h4l5 5V4L9 9m9.5 3c0-1.77-1-3.29-2.5-4.03V16c1.5-.71 2.5-2.24 2.5-4" }, null, -1)])]);
  }
  var Od = de({ name: "mdi-VolumeMedium", render: Ad });
  var Md = { viewBox: "0 0 24 24", class: "tify-icon -volume-low", "aria-hidden": "true" };
  function Fd(t, i) {
    return S(), D("svg", Md, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M7 9v6h4l5 5V4l-5 5z" }, null, -1)])]);
  }
  var Ld = de({ name: "mdi-VolumeLow", render: Fd });
  var kd = { viewBox: "0 0 24 24", class: "tify-icon -volume-variant-off", "aria-hidden": "true" };
  function Hd(t, i) {
    return S(), D("svg", kd, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "m5.64 3.64l15.72 15.72l-1.41 1.42L16 16.83V20l-5-5H7V9h1.17L4.22 5.05zM16 4v7.17l-3.59-3.59z" }, null, -1)])]);
  }
  var Bd = de({ name: "mdi-VolumeVariantOff", render: Hd });
  var zd = { viewBox: "0 0 24 24", class: "tify-icon -closed-caption-outline", "aria-hidden": "true" };
  function Nd(t, i) {
    return S(), D("svg", zd, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M5 4c-.55 0-1 .18-1.41.57C3.2 4.96 3 5.44 3 6v12c0 .56.2 1.04.59 1.43c.41.39.86.57 1.41.57h14c.5 0 1-.19 1.39-.59c.41-.41.61-.88.61-1.41V6c0-.53-.2-1-.61-1.41C20 4.19 19.5 4 19 4zm-.5 1.5h15v13h-15zM7 9c-.3 0-.53.09-.72.28S6 9.7 6 10v4c0 .3.09.53.28.72S6.7 15 7 15h3c.27 0 .5-.09.71-.28c.2-.19.29-.42.29-.72v-1H9.5v.5h-2v-3h2v.5H11v-1c0-.3-.09-.53-.29-.72C10.5 9.09 10.27 9 10 9zm7 0c-.27 0-.5.09-.71.28c-.2.19-.29.42-.29.72v4c0 .3.09.53.29.72c.21.19.44.28.71.28h3c.3 0 .53-.09.72-.28S18 14.3 18 14v-1h-1.5v.5h-2v-3h2v.5H18v-1c0-.3-.09-.53-.28-.72S17.3 9 17 9z" }, null, -1)])]);
  }
  var Ud = de({ name: "mdi-ClosedCaptionOutline", render: Nd });
  var Vd = { viewBox: "0 0 24 24", class: "tify-icon -closed-caption", "aria-hidden": "true" };
  function Wd(t, i) {
    return S(), D("svg", Vd, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M18 11h-1.5v-.5h-2v3h2V13H18v1a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1m-7 1H9.5v-.5h-2v3h2V13H11v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1m8-6H5c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" }, null, -1)])]);
  }
  var jd = de({ name: "mdi-ClosedCaption", render: Wd });
  function yn(t) {
    return Er() ? (ha(t), true) : false;
  }
  function sr() {
    const t = /* @__PURE__ */ new Set(), i = (s) => {
      t.delete(s);
    };
    return { on: (s) => {
      t.add(s);
      const o = () => i(s);
      return yn(o), { off: o };
    }, off: i, trigger: (...s) => Promise.all(Array.from(t).map((o) => o(...s))), clear: () => {
      t.clear();
    } };
  }
  var gs = typeof window < "u" && typeof document < "u";
  typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
  var Gd = Object.prototype.toString;
  var Oo = (t) => Gd.call(t) === "[object Object]";
  var kt = () => {
  };
  var qd = Zd();
  function Zd() {
    var t, i;
    return gs && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((i = window == null ? void 0 : window.navigator) == null ? void 0 : i.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
  }
  function Kd(...t) {
    if (t.length !== 1) return Ha(...t);
    const i = t[0];
    return typeof i == "function" ? Ni(Fa(() => ({ get: i, set: kt }))) : vi(i);
  }
  function Xd(t, i) {
    function e(...n) {
      return new Promise((r, s) => {
        Promise.resolve(t(() => i.apply(this, n), { fn: i, thisArg: this, args: n })).then(r).catch(s);
      });
    }
    return e;
  }
  var Yd = (t) => t();
  function In(t) {
    return Array.isArray(t) ? t : [t];
  }
  function Jd(t) {
    return Ci();
  }
  function Qd(t, i = true, e) {
    Jd() ? ls(t, e) : i ? t() : ns(t);
  }
  function rr(t, i, e = {}) {
    const { eventFilter: n = Yd, ...r } = e, s = Xd(n, i);
    let o, l, a;
    if (r.flush === "sync") {
      let u = false;
      l = () => {
      }, o = (c) => {
        u = true, c(), u = false;
      }, a = it(t, (...c) => {
        u || s(...c);
      }, r);
    } else {
      const u = [];
      let c = 0, h = 0;
      l = () => {
        c = h;
      }, u.push(it(t, () => {
        h++;
      }, { ...r, flush: "sync" })), o = (f) => {
        const m = h;
        f(), c += h - m;
      }, u.push(it(t, (...f) => {
        const m = c > 0 && c === h;
        c = 0, h = 0, !m && s(...f);
      }, r)), a = () => {
        u.forEach((f) => f());
      };
    }
    return { stop: a, ignoreUpdates: o, ignorePrevAsyncUpdates: l };
  }
  function $d(t, i, e) {
    return it(t, i, { ...e, immediate: true });
  }
  var Mo = gs ? window : void 0;
  var Fo = gs ? window.document : void 0;
  function Bt(t) {
    var i;
    const e = Ce(t);
    return (i = e == null ? void 0 : e.$el) != null ? i : e;
  }
  function Se(...t) {
    const i = [], e = () => {
      i.forEach((l) => l()), i.length = 0;
    }, n = (l, a, u, c) => (l.addEventListener(a, u, c), () => l.removeEventListener(a, u, c)), r = Le(() => {
      const l = In(Ce(t[0])).filter((a) => a != null);
      return l.every((a) => typeof a != "string") ? l : void 0;
    }), s = $d(() => {
      var l, a;
      return [(a = (l = r.value) == null ? void 0 : l.map((u) => Bt(u))) != null ? a : [Mo].filter((u) => u != null), In(Ce(r.value ? t[1] : t[0])), In(cn(r.value ? t[2] : t[1])), Ce(r.value ? t[3] : t[2])];
    }, ([l, a, u, c]) => {
      if (e(), !(l != null && l.length) || !(a != null && a.length) || !(u != null && u.length)) return;
      const h = Oo(c) ? { ...c } : c;
      i.push(...l.flatMap((f) => a.flatMap((m) => u.map((v) => n(f, m, v, h)))));
    }, { flush: "post" }), o = () => {
      s(), e();
    };
    return yn(e), o;
  }
  var or = false;
  function Lo(t, i, e = {}) {
    const { window: n = Mo, ignore: r = [], capture: s = true, detectIframe: o = false, controls: l = false } = e;
    if (!n) return l ? { stop: kt, cancel: kt, trigger: kt } : kt;
    if (qd && !or) {
      or = true;
      const T = { passive: true };
      Array.from(n.document.body.children).forEach((x) => x.addEventListener("click", kt, T)), n.document.documentElement.addEventListener("click", kt, T);
    }
    let a = true;
    const u = (T) => Ce(r).some((x) => {
      if (typeof x == "string") return Array.from(n.document.querySelectorAll(x)).some((E) => E === T.target || T.composedPath().includes(E));
      {
        const E = Bt(x);
        return E && (T.target === E || T.composedPath().includes(E));
      }
    });
    function c(T) {
      const x = Ce(T);
      return x && x.$.subTree.shapeFlag === 16;
    }
    function h(T, x) {
      const E = Ce(T), M = E.$.subTree && E.$.subTree.children;
      return M == null || !Array.isArray(M) ? false : M.some((L) => L.el === x.target || x.composedPath().includes(L.el));
    }
    const f = (T) => {
      const x = Bt(t);
      if (T.target != null && !(!(x instanceof Element) && c(t) && h(t, T)) && !(!x || x === T.target || T.composedPath().includes(x))) {
        if ("detail" in T && T.detail === 0 && (a = !u(T)), !a) {
          a = true;
          return;
        }
        i(T);
      }
    };
    let m = false;
    const v = [Se(n, "click", (T) => {
      m || (m = true, setTimeout(() => {
        m = false;
      }, 0), f(T));
    }, { passive: true, capture: s }), Se(n, "pointerdown", (T) => {
      const x = Bt(t);
      a = !u(T) && !!(x && !T.composedPath().includes(x));
    }, { passive: true }), o && Se(n, "blur", (T) => {
      setTimeout(() => {
        var x;
        const E = Bt(t);
        ((x = n.document.activeElement) == null ? void 0 : x.tagName) === "IFRAME" && !(E != null && E.contains(n.document.activeElement)) && i(T);
      }, 0);
    }, { passive: true })].filter(Boolean), y = () => v.forEach((T) => T());
    return l ? { stop: y, cancel: () => {
      a = false;
    }, trigger: (T) => {
      a = true, f(T), a = false;
    } } : y;
  }
  function ef() {
    const t = We(false), i = Ci();
    return i && ls(() => {
      t.value = true;
    }, i), t;
  }
  function tf(t) {
    const i = ef();
    return Le(() => (i.value, !!t()));
  }
  var ar = ["fullscreenchange", "webkitfullscreenchange", "webkitendfullscreen", "mozfullscreenchange", "MSFullscreenChange"];
  function nf(t, i = {}) {
    const { document: e = Fo, autoExit: n = false } = i, r = Le(() => {
      var E;
      return (E = Bt(t)) != null ? E : e == null ? void 0 : e.documentElement;
    }), s = We(false), o = Le(() => ["requestFullscreen", "webkitRequestFullscreen", "webkitEnterFullscreen", "webkitEnterFullScreen", "webkitRequestFullScreen", "mozRequestFullScreen", "msRequestFullscreen"].find((E) => e && E in e || r.value && E in r.value)), l = Le(() => ["exitFullscreen", "webkitExitFullscreen", "webkitExitFullScreen", "webkitCancelFullScreen", "mozCancelFullScreen", "msExitFullscreen"].find((E) => e && E in e || r.value && E in r.value)), a = Le(() => ["fullScreen", "webkitIsFullScreen", "webkitDisplayingFullscreen", "mozFullScreen", "msFullscreenElement"].find((E) => e && E in e || r.value && E in r.value)), u = ["fullscreenElement", "webkitFullscreenElement", "mozFullScreenElement", "msFullscreenElement"].find((E) => e && E in e), c = tf(() => r.value && e && o.value !== void 0 && l.value !== void 0 && a.value !== void 0), h = () => u ? (e == null ? void 0 : e[u]) === r.value : false, f = () => {
      if (a.value) {
        if (e && e[a.value] != null) return e[a.value];
        {
          const E = r.value;
          if ((E == null ? void 0 : E[a.value]) != null) return !!E[a.value];
        }
      }
      return false;
    };
    async function m() {
      if (!(!c.value || !s.value)) {
        if (l.value) if ((e == null ? void 0 : e[l.value]) != null) await e[l.value]();
        else {
          const E = r.value;
          (E == null ? void 0 : E[l.value]) != null && await E[l.value]();
        }
        s.value = false;
      }
    }
    async function v() {
      if (!c.value || s.value) return;
      f() && await m();
      const E = r.value;
      o.value && (E == null ? void 0 : E[o.value]) != null && (await E[o.value](), s.value = true);
    }
    async function y() {
      await (s.value ? m() : v());
    }
    const T = () => {
      const E = f();
      (!E || E && h()) && (s.value = E);
    }, x = { capture: false, passive: true };
    return Se(e, ar, T, x), Se(() => Bt(r), ar, T, x), Qd(T, false), n && yn(m), { isSupported: c, isFullscreen: s, enter: v, exit: m, toggle: y };
  }
  function An(t, i) {
    Ce(t) && i(Ce(t));
  }
  function sf(t) {
    let i = [];
    for (let e = 0; e < t.length; ++e) i = [...i, [t.start(e), t.end(e)]];
    return i;
  }
  function On(t) {
    return Array.from(t).map(({ label: i, kind: e, language: n, mode: r, activeCues: s, cues: o, inBandMetadataTrackDispatchType: l }, a) => ({ id: a, label: i, kind: e, language: n, mode: r, activeCues: s, cues: o, inBandMetadataTrackDispatchType: l }));
  }
  var rf = { src: "", tracks: [] };
  function of(t, i = {}) {
    t = Kd(t), i = { ...rf, ...i };
    const { document: e = Fo } = i, n = { passive: true }, r = We(0), s = We(0), o = We(false), l = We(1), a = We(false), u = We(false), c = We(false), h = We(1), f = We(false), m = vi([]), v = vi([]), y = We(-1), T = We(false), x = We(false), E = e && "pictureInPictureEnabled" in e, M = sr(), L = sr(), U = (j) => {
      An(t, (ie) => {
        if (j) {
          const ce = typeof j == "number" ? j : j.id;
          ie.textTracks[ce].mode = "disabled";
        } else for (let ce = 0; ce < ie.textTracks.length; ++ce) ie.textTracks[ce].mode = "disabled";
        y.value = -1;
      });
    }, K = (j, ie = true) => {
      An(t, (ce) => {
        const ye = typeof j == "number" ? j : j.id;
        ie && U(), ce.textTracks[ye].mode = "showing", y.value = ye;
      });
    }, q = () => new Promise((j, ie) => {
      An(t, async (ce) => {
        E && (T.value ? e.exitPictureInPicture().then(j).catch(ie) : ce.requestPictureInPicture().then(j).catch(ie));
      });
    });
    Rs(() => {
      if (!e) return;
      const j = Ce(t);
      if (!j) return;
      const ie = Ce(i.src);
      let ce = [];
      ie && (typeof ie == "string" ? ce = [{ src: ie }] : Array.isArray(ie) ? ce = ie : Oo(ie) && (ce = [ie]), j.querySelectorAll("source").forEach((ye) => {
        ye.remove();
      }), ce.forEach(({ src: ye, type: me, media: pe }) => {
        const oe = e.createElement("source");
        oe.setAttribute("src", ye), oe.setAttribute("type", me || ""), oe.setAttribute("media", pe || ""), Se(oe, "error", M.trigger, n), j.appendChild(oe);
      }), j.load());
    }), it([t, l], () => {
      const j = Ce(t);
      j && (j.volume = l.value);
    }), it([t, x], () => {
      const j = Ce(t);
      j && (j.muted = x.value);
    }), it([t, h], () => {
      const j = Ce(t);
      j && (j.playbackRate = h.value);
    }), Rs(() => {
      if (!e) return;
      const j = Ce(i.tracks), ie = Ce(t);
      !j || !j.length || !ie || (ie.querySelectorAll("track").forEach((ce) => ce.remove()), j.forEach(({ default: ce, kind: ye, label: me, src: pe, srcLang: oe }, Ae) => {
        const De = e.createElement("track");
        De.default = ce || false, De.kind = ye, De.label = me, De.src = pe, De.srclang = oe, De.default && (y.value = Ae), ie.appendChild(De);
      }));
    });
    const { ignoreUpdates: Y } = rr(r, (j) => {
      const ie = Ce(t);
      ie && (ie.currentTime = j);
    }), { ignoreUpdates: te } = rr(c, (j) => {
      const ie = Ce(t);
      ie && (j ? ie.play().catch((ce) => {
        throw L.trigger(ce), ce;
      }) : ie.pause());
    });
    Se(t, "timeupdate", () => Y(() => r.value = Ce(t).currentTime), n), Se(t, "durationchange", () => s.value = Ce(t).duration, n), Se(t, "progress", () => m.value = sf(Ce(t).buffered), n), Se(t, "seeking", () => o.value = true, n), Se(t, "seeked", () => o.value = false, n), Se(t, ["waiting", "loadstart"], () => {
      a.value = true, te(() => c.value = false);
    }, n), Se(t, "loadeddata", () => a.value = false, n), Se(t, "playing", () => {
      a.value = false, u.value = false, te(() => c.value = true);
    }, n), Se(t, "ratechange", () => h.value = Ce(t).playbackRate, n), Se(t, "stalled", () => f.value = true, n), Se(t, "ended", () => u.value = true, n), Se(t, "pause", () => te(() => c.value = false), n), Se(t, "play", () => te(() => c.value = true), n), Se(t, "enterpictureinpicture", () => T.value = true, n), Se(t, "leavepictureinpicture", () => T.value = false, n), Se(t, "volumechange", () => {
      const j = Ce(t);
      j && (l.value = j.volume, x.value = j.muted);
    }, n);
    const fe = [], $ = it([t], () => {
      const j = Ce(t);
      j && ($(), fe[0] = Se(j.textTracks, "addtrack", () => v.value = On(j.textTracks), n), fe[1] = Se(j.textTracks, "removetrack", () => v.value = On(j.textTracks), n), fe[2] = Se(j.textTracks, "change", () => v.value = On(j.textTracks), n));
    });
    return yn(() => fe.forEach((j) => j())), { currentTime: r, duration: s, waiting: a, seeking: o, ended: u, stalled: f, buffered: m, playing: c, rate: h, volume: l, muted: x, tracks: v, selectedTrack: y, enableTrack: K, disableTrack: U, supportsPictureInPicture: E, togglePictureInPicture: q, isPictureInPicture: T, onSourceError: M.on, onPlaybackError: L.on };
  }
  function ms(t) {
    return !!(t.altKey || t.ctrlKey || t.metaKey || ["INPUT", "SELECT", "TEXTAREA"].includes(t.target.nodeName) && t.target.type !== "range");
  }
  var af = { props: { label: { default: null, type: String }, position: { default: "bottom", type: String }, shortcut: { default: null, type: String } }, emits: ["open"], data() {
    return { open: false };
  }, computed: { id() {
    return this.$.appContext.config.globalProperties.$getId ? this.$getId(ji()) : ji();
  } }, mounted() {
    var t;
    (((t = this.$store) == null ? void 0 : t.rootElement) || document.documentElement).addEventListener("keydown", this.onKeydown), Lo(this.$el, () => {
      this.open = false;
    });
  }, beforeUnmount() {
    var t;
    (((t = this.$store) == null ? void 0 : t.rootElement) || document.documentElement).removeEventListener("keydown", this.onKeydown);
  }, methods: { onKeydown(t) {
    if (!ms(t)) {
      if (t.key === "Escape") {
        this.open = false;
        return;
      }
      t.key === this.shortcut && (this.open = !this.open, this.open && this.$emit("open"), t.preventDefault());
    }
  } } };
  var lf = { class: "tify-dropdown" };
  var uf = ["aria-controls", "aria-expanded", "aria-label", "title"];
  var cf = ["id"];
  function hf(t, i, e, n, r, s) {
    return S(), D("div", lf, [R("button", { type: "button", class: "tify-dropdown-button", "aria-controls": s.id, "aria-expanded": r.open, "aria-label": e.label, title: e.label, onClick: i[0] || (i[0] = (o) => {
      r.open = !r.open, r.open && t.$emit("open");
    }) }, [Os(t.$slots, "button")], 8, uf), Be(R("div", { id: s.id, class: Pe(`tify-dropdown-content -${e.position}`), onClick: i[1] || (i[1] = (o) => o.target.closest("a, button") && (r.open = false)) }, [Os(t.$slots, "default")], 10, cf), [[Qe, r.open]])]);
  }
  var vs = Ie(af, [["render", hf]]);
  var df = { viewBox: "0 0 24 24", class: "tify-icon -play-speed", "aria-hidden": "true" };
  function ff(t, i) {
    return S(), D("svg", df, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M13 2.05v2c4.39.54 7.5 4.53 6.96 8.92c-.46 3.64-3.32 6.53-6.96 6.96v2c5.5-.55 9.5-5.43 8.95-10.93c-.45-4.75-4.22-8.5-8.95-8.97zM5.67 19.74A10 10 0 0 0 11 22v-2a8 8 0 0 1-3.9-1.63zm1.43-14c1.12-.9 2.47-1.48 3.9-1.68v-2c-1.95.19-3.81.94-5.33 2.2zM5.69 7.1L4.26 5.67A9.9 9.9 0 0 0 2.05 11h2c.19-1.42.75-2.77 1.64-3.9M4.06 13h-2c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8 8 0 0 1 4.06 13M10 16.5l6-4.5l-6-4.5z" }, null, -1)])]);
  }
  var pf = de({ name: "mdi-PlaySpeed", render: ff });
  var gf = { viewBox: "0 0 24 24", class: "tify-icon -pause", "aria-hidden": "true" };
  function mf(t, i) {
    return S(), D("svg", gf, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M14 19h4V5h-4M6 19h4V5H6z" }, null, -1)])]);
  }
  var vf = de({ name: "mdi-Pause", render: mf });
  var yf = { viewBox: "0 0 24 24", class: "tify-icon -play", "aria-hidden": "true" };
  function wf(t, i) {
    return S(), D("svg", yf, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M8 5.14v14l11-7z" }, null, -1)])]);
  }
  var _f = de({ name: "mdi-Play", render: wf });
  var Tf = { viewBox: "0 0 24 24", class: "tify-icon -loading", "aria-hidden": "true" };
  function xf(t, i) {
    return S(), D("svg", Tf, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8" }, null, -1)])]);
  }
  var bf = de({ name: "mdi-Loading", render: xf });
  var Ef = { props: { src: { required: true, type: String }, format: { required: true, type: String }, hasImage: { type: Boolean, default: false } }, data() {
    return { currentSubtitle: null, media: of(Qa("av")), mouseInterval: null, mouseMoving: true, rates: [0.5, 0.75, 1, 1.25, 1.5, 2] };
  }, computed: { type() {
    var t;
    return (t = this.format) == null ? void 0 : t.split("/")[0];
  }, subtitles() {
    var i, e;
    const t = (e = (i = this.$store.manifest.items[this.$store.options.pages[0] - 1].annotations) == null ? void 0 : i[0].items) == null ? void 0 : e[0].body;
    return t ? t.items || [t] : [];
  } }, watch: { currentSubtitle(t) {
    Object.values(this.$refs.av.textTracks).forEach((i) => {
      i.mode = i.language === (t == null ? void 0 : t.language) ? "showing" : "disabled";
    });
  } }, beforeUnmount() {
    clearInterval(this.mouseInterval);
  }, mounted() {
    window.addEventListener("mousemove", this.onMouseMove);
  }, unmounted() {
    window.removeEventListener("mousemove", this.onMouseMove);
  }, methods: { formatTime(t) {
    const i = Math.floor(t / 3600), e = Math.floor(t % 3600 / 60), n = Math.floor(t % 60);
    return [...this.media.duration > 3600 ? [i.toString().padStart(2, "0")] : [], e.toString().padStart(2, "0"), n.toString().padStart(2, "0")].join(":");
  }, onMouseMove() {
    clearTimeout(this.mouseInterval), this.mouseMoving = true, this.mouseInterval = setInterval(() => {
      this.mouseMoving = this.$store.options.view || this.media.paused;
    }, 2e3);
  } } };
  var Sf = ["src", "type"];
  var Cf = ["srclang", "src"];
  var Pf = { class: "tify-player-controls" };
  var Rf = ["aria-label"];
  var Df = ["max", "aria-label"];
  var If = { class: "tify-player-time" };
  var Af = { class: "tify-player-elapsed" };
  var Of = { class: "tify-player-duration" };
  var Mf = { class: "tify-sr-only" };
  var Ff = { key: 0, class: "tify-player-select-badge" };
  var Lf = { class: "tify-player-select-title" };
  var kf = { class: "tify-button-list" };
  var Hf = ["aria-pressed", "onClick"];
  var Bf = { class: "tify-sr-only" };
  var zf = { class: "tify-player-select-title" };
  var Nf = { class: "tify-button-list" };
  var Uf = ["aria-pressed", "onClick"];
  var Vf = ["aria-pressed"];
  var Wf = ["aria-label", "disabled"];
  var jf = ["aria-label"];
  function Gf(t, i, e, n, r, s) {
    const o = bf, l = _f, a = vf, u = pf, c = vs, h = jd, f = Ud, m = Bd, v = Ld, y = Od, T = Dd;
    return S(), D("div", { class: Pe(["tify-player", `
			-${s.type}
			${r.mouseMoving || r.media.paused ? "-mousing" : ""}
			${r.media.playing || r.media.waiting ? "-playing" : ""}
			${e.hasImage && (s.type === "audio" || !r.media.currentTime) ? "-bottom" : ""}
		`]), onKeydown: i[7] || (i[7] = Ht(Vt((x) => r.media.playing = !r.media.playing, ["prevent"]), ["space"])) }, [(S(), le(cl(s.type), { ref: "av", class: "tify-player-av", poster: t.$store.getThumbnailUrl(t.$store.options.pages[0], 0) || void 0, preload: "metadata", crossorigin: "anonymous", onClick: i[0] || (i[0] = (x) => {
      r.media.playing = !r.media.playing, s.onMouseMove();
    }) }, { default: $e(() => [R("source", { src: e.src, type: e.format }, null, 8, Sf), (S(true), D(se, null, Ee(s.subtitles, (x) => (S(), D("track", { key: x.id, kind: "captions", srclang: x.language, src: x.id }, null, 8, Cf))), 128))]), _: 1 }, 8, ["poster"])), s.type === "video" ? (S(), D("div", { key: 0, class: Pe(["tify-player-overlay", { "-hidden": r.media.playing || e.hasImage && !r.media.currentTime }]) }, [r.media.waiting ? (S(), le(o, { key: 0, class: "-spin" })) : r.media.currentTime ? Q("", true) : (S(), le(l, { key: 1 }))], 2)) : Q("", true), R("div", Pf, [R("div", null, [R("button", { type: "button", class: "tify-player-play-pause", "aria-label": t.$translate(r.media.paused ? "Play [verb]" : "Pause [verb]"), onClick: i[1] || (i[1] = (x) => r.media.playing = !r.media.playing) }, [r.media.playing || r.media.seeking && r.media.waiting ? (S(), le(a, { key: 0 })) : (S(), le(l, { key: 1 }))], 8, Rf), Be(R("input", { "onUpdate:modelValue": i[2] || (i[2] = (x) => r.media.currentTime = x), type: "range", class: "tify-player-seekbar", min: "0", max: r.media.duration, step: "any", "aria-label": t.$translate("Current time"), style: It(`--value: ${r.media.currentTime / r.media.duration * 100}%`) }, null, 12, Df), [[Ji, r.media.currentTime, void 0, { number: true }]]), R("span", If, [R("span", Af, z(s.formatTime(r.media.currentTime)), 1), R("span", Of, " / " + z(s.formatTime(r.media.duration)), 1)]), ee(c, { class: "tify-player-select -rate", alignment: "center", position: "top", shortcut: "r" }, { button: $e(() => [R("span", Mf, z(t.$translate("Playback rate")), 1), ee(u), r.media.rate !== 1 ? (S(), D("span", Ff, z(r.media.rate.toLocaleString(t.$store.options.language)) + "x ", 1)) : Q("", true)]), default: $e(() => [R("h3", Lf, z(t.$translate("Playback rate")), 1), R("ol", kf, [(S(true), D(se, null, Ee(r.rates, (x) => (S(), D("li", { key: x }, [R("button", { type: "button", "aria-pressed": x === r.media.rate, onClick: (E) => r.media.rate = x }, z(x === 1 ? t.$translate("Normal") : `${x.toLocaleString(t.$store.options.language)}x`), 9, Hf)]))), 128))])]), _: 1 }), s.subtitles.length ? (S(), le(c, { key: 0, class: "tify-player-select -captions", alignment: "center", position: "top", shortcut: "c" }, { button: $e(() => [R("span", Bf, z(t.$translate("Closed Captions")), 1), r.currentSubtitle ? (S(), le(h, { key: 0 })) : (S(), le(f, { key: 1 }))]), default: $e(() => [R("h3", zf, z(t.$translate("Closed Captions")), 1), R("ol", Nf, [(S(true), D(se, null, Ee(s.subtitles, (x) => (S(), D("li", { key: x.id }, [R("button", { type: "button", "aria-pressed": x === r.currentSubtitle, onClick: (E) => r.currentSubtitle = x }, z(t.$store.localize(x.label) || x.language), 9, Uf)]))), 128)), R("li", null, [R("button", { type: "button", "aria-pressed": !r.currentSubtitle, onClick: i[3] || (i[3] = (x) => r.currentSubtitle = null) }, z(t.$translate("None")), 9, Vf)])])]), _: 1 })) : Q("", true)]), R("div", null, [R("button", { type: "button", class: "tify-player-mute", "aria-label": t.$translate("Toggle mute"), disabled: r.media.volume === 0, onClick: i[4] || (i[4] = (x) => r.media.muted = !r.media.muted) }, [r.media.muted ? (S(), le(m, { key: 0 })) : r.media.volume < 0.34 ? (S(), le(v, { key: 1 })) : r.media.volume < 0.67 ? (S(), le(y, { key: 2 })) : (S(), le(T, { key: 3 }))], 8, Wf), Be(R("input", { "onUpdate:modelValue": i[5] || (i[5] = (x) => r.media.volume = x), type: "range", class: "tify-player-volume", min: "0", max: "1", step: "0.01", "aria-label": t.$translate("Volume"), style: It(`--value: ${r.media.volume * 100}%`), onInput: i[6] || (i[6] = (x) => r.media.muted = r.media.volume === 0) }, null, 44, jf), [[Ji, r.media.volume, void 0, { number: true }]])])])], 34);
  }
  var qf = Ie(Ef, [["render", Gf]]);
  var Zf = { viewBox: "0 0 24 24", class: "tify-icon -chevron-right", "aria-hidden": "true" };
  function Kf(t, i) {
    return S(), D("svg", Zf, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z" }, null, -1)])]);
  }
  var ko = de({ name: "mdi-ChevronRight", render: Kf });
  var Xf = { viewBox: "0 0 24 24", class: "tify-icon -chevron-left", "aria-hidden": "true" };
  function Yf(t, i) {
    return S(), D("svg", Xf, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6z" }, null, -1)])]);
  }
  var Ho = de({ name: "mdi-ChevronLeft", render: Yf });
  var Jf = { viewBox: "0 0 24 24", class: "tify-icon -layers-outline", "aria-hidden": "true" };
  function Qf(t, i) {
    return S(), D("svg", Jf, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "m12 18.54l7.37-5.74L21 14.07l-9 7l-9-7l1.62-1.26zM12 16L3 9l9-7l9 7zm0-11.47L6.26 9L12 13.47L17.74 9z" }, null, -1)])]);
  }
  var $f = de({ name: "mdi-LayersOutline", render: Qf });
  var ep = { viewBox: "0 0 24 24", class: "tify-icon -comment-off-outline", "aria-hidden": "true" };
  function tp(t, i) {
    return S(), D("svg", ep, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "m7.2 4l-2-2H20a2 2 0 0 1 2 2v12c0 .76-.43 1.41-1.05 1.75L19.2 16h.8V4zm14.91 17.46l-1.27 1.27L16.11 18H13.9l-3.7 3.71c-.2.19-.45.29-.7.29H9c-.55 0-1-.45-1-1v-3H4a2 2 0 0 1-2-2V3.9L1.11 3l1.28-1.27zm-8-5.46L4 5.89V16h6v3.08L13.08 16z" }, null, -1)])]);
  }
  var ip = de({ name: "mdi-CommentOffOutline", render: tp });
  var np = { viewBox: "0 0 24 24", class: "tify-icon -comment-text-outline", "aria-hidden": "true" };
  function sp(t, i) {
    return S(), D("svg", np, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M9 22a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29zm1-6v3.08L13.08 16H20V4H4v12zM6 7h12v2H6zm0 4h9v2H6z" }, null, -1)])]);
  }
  var rp = de({ name: "mdi-CommentTextOutline", render: sp });
  var op = { viewBox: "0 0 24 24", class: "tify-icon -palette-outline", "aria-hidden": "true" };
  function ap(t, i) {
    return S(), D("svg", op, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M12 22A10 10 0 0 1 2 12A10 10 0 0 1 12 2c5.5 0 10 4 10 9a6 6 0 0 1-6 6h-1.8c-.3 0-.5.2-.5.5c0 .1.1.2.1.3c.4.5.6 1.1.6 1.7c.1 1.4-1 2.5-2.4 2.5m0-18a8 8 0 0 0-8 8a8 8 0 0 0 8 8c.3 0 .5-.2.5-.5c0-.2-.1-.3-.1-.4c-.4-.5-.6-1-.6-1.6c0-1.4 1.1-2.5 2.5-2.5H16a4 4 0 0 0 4-4c0-3.9-3.6-7-8-7m-5.5 6c.8 0 1.5.7 1.5 1.5S7.3 13 6.5 13S5 12.3 5 11.5S5.7 10 6.5 10m3-4c.8 0 1.5.7 1.5 1.5S10.3 9 9.5 9S8 8.3 8 7.5S8.7 6 9.5 6m5 0c.8 0 1.5.7 1.5 1.5S15.3 9 14.5 9S13 8.3 13 7.5S13.7 6 14.5 6m3 4c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5" }, null, -1)])]);
  }
  var lp = de({ name: "mdi-PaletteOutline", render: ap });
  var up = { viewBox: "0 0 24 24", class: "tify-icon -circle-half-full", "aria-hidden": "true" };
  function cp(t, i) {
    return S(), D("svg", up, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8a8 8 0 0 1-8 8z" }, null, -1)])]);
  }
  var hp = de({ name: "mdi-CircleHalfFull", render: cp });
  var dp = { viewBox: "0 0 24 24", class: "tify-icon -lightbulb-on-outline", "aria-hidden": "true" };
  function fp(t, i) {
    return S(), D("svg", dp, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M20 11h3v2h-3zM1 11h3v2H1zM13 1v3h-2V1zM4.92 3.5l2.13 2.14l-1.42 1.41L3.5 4.93zm12.03 2.13l2.12-2.13l1.43 1.43l-2.13 2.12zM12 6a6 6 0 0 1 6 6c0 2.22-1.21 4.16-3 5.2V19a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1.8c-1.79-1.04-3-2.98-3-5.2a6 6 0 0 1 6-6m2 15v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1zm-3-3h2v-2.13c1.73-.44 3-2.01 3-3.87a4 4 0 0 0-4-4a4 4 0 0 0-4 4c0 1.86 1.27 3.43 3 3.87z" }, null, -1)])]);
  }
  var pp = de({ name: "mdi-LightbulbOnOutline", render: fp });
  var gp = { emits: ["update"], computed: { saturation() {
    const t = this.$store.options.filters.saturate;
    return typeof t == "number" ? t : 1;
  } } };
  var mp = ["value"];
  var vp = ["value"];
  var yp = ["value"];
  function wp(t, i, e, n, r, s) {
    const o = pp, l = hp, a = lp;
    return S(), D(se, null, [R("p", null, [R("label", null, [ee(o), Ke(" " + z(t.$translate("Brightness")) + " ", 1), R("b", null, z(Math.round((t.$store.options.filters.brightness || 1) * 100)) + "\xA0%", 1), R("input", { ref: "firstSlider", max: "2", min: ".5", step: ".01", type: "range", value: t.$store.options.filters.brightness || 1, style: It(`--value: ${((t.$store.options.filters.brightness || 1) - 0.5) * 0.66667 * 100}%`), onInput: i[0] || (i[0] = (u) => t.$emit("update", "brightness", u)) }, null, 44, mp)])]), R("p", null, [R("label", null, [ee(l), Ke(" " + z(t.$translate("Contrast")) + " ", 1), R("b", null, z(Math.round((t.$store.options.filters.contrast || 1) * 100)) + "\xA0%", 1), R("input", { max: "2", min: ".5", step: ".01", type: "range", value: t.$store.options.filters.contrast || 1, style: It(`--value: ${((t.$store.options.filters.contrast || 1) - 0.5) * 0.66667 * 100}%`), onInput: i[1] || (i[1] = (u) => t.$emit("update", "contrast", u)) }, null, 44, vp)])]), R("p", null, [R("label", null, [ee(a), Ke(" " + z(t.$translate("Saturation")) + " ", 1), R("b", null, z(Math.round(s.saturation * 100)) + "\xA0%", 1), R("input", { max: "3", min: "0", step: ".01", type: "range", value: s.saturation, style: It(`--value: ${s.saturation / 3 * 100}%`), onInput: i[2] || (i[2] = (u) => t.$emit("update", "saturate", u)) }, null, 44, yp)])])], 64);
  }
  var _p = Ie(gp, [["render", wp]]);
  var Tp = { viewBox: "0 0 24 24", class: "tify-icon -tune", "aria-hidden": "true" };
  function xp(t, i) {
    return S(), D("svg", Tp, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M3 17v2h6v-2zM3 5v2h10V5zm10 16v-2h8v-2h-8v-2h-2v6zM7 9v2H3v2h4v2h2V9zm14 4v-2H11v2zm-6-4h2V7h4V5h-4V3h-2z" }, null, -1)])]);
  }
  var bp = de({ name: "mdi-Tune", render: xp });
  var Ep = { viewBox: "0 0 24 24", class: "tify-icon -rotate-right", "aria-hidden": "true" };
  function Sp(t, i) {
    return S(), D("svg", Ep, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "m16.89 15.5l1.42 1.39c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.5M13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03m6.93-6.9a7.9 7.9 0 0 0-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47m-2.36-5.45L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10z" }, null, -1)])]);
  }
  var Cp = de({ name: "mdi-RotateRight", render: Sp });
  var Pp = { viewBox: "0 0 24 24", class: "tify-icon -aspect-ratio", "aria-hidden": "true" };
  function Rp(t, i) {
    return S(), D("svg", Pp, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M19 12h-2v3h-3v2h5zM7 9h3V7H5v5h2zm14-6H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H3V5h18z" }, null, -1)])]);
  }
  var Dp = de({ name: "mdi-AspectRatio", render: Rp });
  var Bi = { exports: {} };
  var Ip = Bi.exports;
  var lr;
  function Ap() {
    return lr || (lr = 1, (function(t) {
      function i(e) {
        return new i.Viewer(e);
      }
      (function(e) {
        e.version = { versionStr: "5.0.1", major: parseInt("5", 10), minor: parseInt("0", 10), revision: parseInt("1", 10) };
        var n = { "[object Boolean]": "boolean", "[object Number]": "number", "[object String]": "string", "[object Function]": "function", "[object AsyncFunction]": "function", "[object Promise]": "promise", "[object Array]": "array", "[object Date]": "date", "[object RegExp]": "regexp", "[object Object]": "object" }, r = Object.prototype.toString, s = Object.prototype.hasOwnProperty;
        e.isFunction = function(o) {
          return e.type(o) === "function";
        }, e.isArray = Array.isArray || function(o) {
          return e.type(o) === "array";
        }, e.isWindow = function(o) {
          return o && typeof o == "object" && "setInterval" in o;
        }, e.type = function(o) {
          return o == null ? String(o) : n[r.call(o)] || "object";
        }, e.isPlainObject = function(o) {
          if (!o || i.type(o) !== "object" || o.nodeType || e.isWindow(o) || o.constructor && !s.call(o, "constructor") && !s.call(o.constructor.prototype, "isPrototypeOf")) return false;
          var l;
          for (var a in o) l = a;
          return l === void 0 || s.call(o, l);
        }, e.isEmptyObject = function(o) {
          for (var l in o) return false;
          return true;
        }, e.freezeObject = function(o) {
          return Object.freeze ? e.freezeObject = Object.freeze : e.freezeObject = function(l) {
            return l;
          }, e.freezeObject(o);
        }, e.supportsCanvas = (function() {
          var o = document.createElement("canvas");
          return !!(e.isFunction(o.getContext) && o.getContext("2d"));
        })(), e.isCanvasTainted = function(o) {
          var l = false;
          try {
            o.getContext("2d").getImageData(0, 0, 1, 1);
          } catch {
            l = true;
          }
          return l;
        }, e.supportsAddEventListener = (function() {
          return !!(document.documentElement.addEventListener && document.addEventListener);
        })(), e.supportsRemoveEventListener = (function() {
          return !!(document.documentElement.removeEventListener && document.removeEventListener);
        })(), e.supportsEventListenerOptions = (function() {
          var o = 0;
          if (e.supportsAddEventListener) try {
            var l = { get capture() {
              return o++, false;
            }, get once() {
              return o++, false;
            }, get passive() {
              return o++, false;
            } };
            window.addEventListener("test", null, l), window.removeEventListener("test", null, l);
          } catch {
            o = 0;
          }
          return o >= 3;
        })(), e.getCurrentPixelDensityRatio = function() {
          if (e.supportsCanvas) {
            var o = document.createElement("canvas").getContext("2d"), l = window.devicePixelRatio || 1, a = o.webkitBackingStorePixelRatio || o.mozBackingStorePixelRatio || o.msBackingStorePixelRatio || o.oBackingStorePixelRatio || o.backingStorePixelRatio || 1;
            return Math.max(l, 1) / a;
          } else return 1;
        }, e.pixelDensityRatio = e.getCurrentPixelDensityRatio();
      })(i), (function(e) {
        e.extend = function() {
          var a, u, c, h, f, m, v = arguments[0] || {}, y = arguments.length, T = false, x = 1;
          for (typeof v == "boolean" && (T = v, v = arguments[1] || {}, x = 2), typeof v != "object" && !i.isFunction(v) && (v = {}), y === x && (v = this, --x); x < y; x++) if (a = arguments[x], a !== null || a !== void 0) for (u in a) {
            var E = Object.getOwnPropertyDescriptor(a, u);
            if (E !== void 0) {
              if (E.get || E.set) {
                Object.defineProperty(v, u, E);
                continue;
              }
              h = E.value;
            } else {
              e.console.warn('Could not copy inherited property "' + u + '".');
              continue;
            }
            v !== h && (T && h && (i.isPlainObject(h) || (f = i.isArray(h))) ? (c = v[u], f ? (f = false, m = c && i.isArray(c) ? c : []) : m = c && i.isPlainObject(c) ? c : {}, v[u] = i.extend(T, m, h)) : h !== void 0 && (v[u] = h));
          }
          return v;
        };
        var n = function() {
          if (typeof navigator != "object") return false;
          var a = navigator.userAgent;
          return typeof a != "string" ? false : a.indexOf("iPhone") !== -1 || a.indexOf("iPad") !== -1 || a.indexOf("iPod") !== -1;
        };
        e.extend(e, { DEFAULT_SETTINGS: { xmlPath: null, tileSources: null, tileHost: null, initialPage: 0, crossOriginPolicy: false, ajaxWithCredentials: false, loadTilesWithAjax: false, ajaxHeaders: {}, splitHashDataForPost: false, panHorizontal: true, panVertical: true, constrainDuringPan: false, wrapHorizontal: false, wrapVertical: false, visibilityRatio: 0.5, minPixelRatio: 0.5, defaultZoomLevel: 0, minZoomLevel: null, maxZoomLevel: null, homeFillsViewer: false, clickTimeThreshold: 300, clickDistThreshold: 5, dblClickTimeThreshold: 300, dblClickDistThreshold: 20, springStiffness: 6.5, animationTime: 1.2, gestureSettingsMouse: { dragToPan: true, scrollToZoom: true, clickToZoom: true, dblClickToZoom: false, dblClickDragToZoom: false, pinchToZoom: false, zoomToRefPoint: true, flickEnabled: false, flickMinSpeed: 120, flickMomentum: 0.25, pinchRotate: false }, gestureSettingsTouch: { dragToPan: true, scrollToZoom: false, clickToZoom: false, dblClickToZoom: true, dblClickDragToZoom: true, pinchToZoom: true, zoomToRefPoint: true, flickEnabled: true, flickMinSpeed: 120, flickMomentum: 0.25, pinchRotate: false }, gestureSettingsPen: { dragToPan: true, scrollToZoom: false, clickToZoom: true, dblClickToZoom: false, dblClickDragToZoom: false, pinchToZoom: false, zoomToRefPoint: true, flickEnabled: false, flickMinSpeed: 120, flickMomentum: 0.25, pinchRotate: false }, gestureSettingsUnknown: { dragToPan: true, scrollToZoom: false, clickToZoom: false, dblClickToZoom: true, dblClickDragToZoom: false, pinchToZoom: true, zoomToRefPoint: true, flickEnabled: true, flickMinSpeed: 120, flickMomentum: 0.25, pinchRotate: false }, zoomPerClick: 2, zoomPerScroll: 1.2, zoomPerDblClickDrag: 1.2, zoomPerSecond: 1, blendTime: 0, alwaysBlend: false, autoHideControls: true, immediateRender: false, minZoomImageRatio: 0.9, maxZoomPixelRatio: 1.1, smoothTileEdgesMinZoom: 1.1, iOSDevice: n(), pixelsPerWheelLine: 40, pixelsPerArrowPress: 40, autoResize: true, preserveImageSizeOnResize: false, minScrollDeltaTime: 50, rotationIncrement: 90, maxTilesPerFrame: 1, showSequenceControl: true, sequenceControlAnchor: null, preserveViewport: false, preserveOverlays: false, navPrevNextWrap: false, showNavigationControl: true, navigationControlAnchor: null, showZoomControl: true, showHomeControl: true, showFullPageControl: true, showRotationControl: false, showFlipControl: false, controlsFadeDelay: 2e3, controlsFadeLength: 1500, mouseNavEnabled: true, showNavigator: false, navigatorElement: null, navigatorId: null, navigatorPosition: null, navigatorSizeRatio: 0.2, navigatorMaintainSizeRatio: false, navigatorTop: null, navigatorLeft: null, navigatorHeight: null, navigatorWidth: null, navigatorAutoResize: true, navigatorAutoFade: true, navigatorRotate: true, navigatorBackground: "#000", navigatorOpacity: 0.8, navigatorBorderColor: "#555", navigatorDisplayRegionColor: "#900", degrees: 0, flipped: false, overlayPreserveContentDirection: true, opacity: 1, compositeOperation: null, drawer: ["webgl", "canvas", "html"], drawerOptions: { webgl: {}, canvas: {}, html: {}, custom: {} }, preload: false, imageSmoothingEnabled: true, placeholderFillStyle: null, subPixelRoundingForTransparency: null, showReferenceStrip: false, referenceStripScroll: "horizontal", referenceStripElement: null, referenceStripHeight: null, referenceStripWidth: null, referenceStripPosition: "BOTTOM_LEFT", referenceStripSizeRatio: 0.2, collectionRows: 3, collectionColumns: 0, collectionLayout: "horizontal", collectionMode: false, collectionTileSize: 800, collectionTileMargin: 80, imageLoaderLimit: 0, maxImageCacheCount: 200, timeout: 3e4, tileRetryMax: 0, tileRetryDelay: 2500, prefixUrl: "/images/", navImages: { zoomIn: { REST: "zoomin_rest.png", GROUP: "zoomin_grouphover.png", HOVER: "zoomin_hover.png", DOWN: "zoomin_pressed.png" }, zoomOut: { REST: "zoomout_rest.png", GROUP: "zoomout_grouphover.png", HOVER: "zoomout_hover.png", DOWN: "zoomout_pressed.png" }, home: { REST: "home_rest.png", GROUP: "home_grouphover.png", HOVER: "home_hover.png", DOWN: "home_pressed.png" }, fullpage: { REST: "fullpage_rest.png", GROUP: "fullpage_grouphover.png", HOVER: "fullpage_hover.png", DOWN: "fullpage_pressed.png" }, rotateleft: { REST: "rotateleft_rest.png", GROUP: "rotateleft_grouphover.png", HOVER: "rotateleft_hover.png", DOWN: "rotateleft_pressed.png" }, rotateright: { REST: "rotateright_rest.png", GROUP: "rotateright_grouphover.png", HOVER: "rotateright_hover.png", DOWN: "rotateright_pressed.png" }, flip: { REST: "flip_rest.png", GROUP: "flip_grouphover.png", HOVER: "flip_hover.png", DOWN: "flip_pressed.png" }, previous: { REST: "previous_rest.png", GROUP: "previous_grouphover.png", HOVER: "previous_hover.png", DOWN: "previous_pressed.png" }, next: { REST: "next_rest.png", GROUP: "next_grouphover.png", HOVER: "next_hover.png", DOWN: "next_pressed.png" } }, debugMode: false, debugGridColor: ["#437AB2", "#1B9E77", "#D95F02", "#7570B3", "#E7298A", "#66A61E", "#E6AB02", "#A6761D", "#666666"], silenceMultiImageWarnings: false }, delegate: function(a, u) {
          return function() {
            var c = arguments;
            return c === void 0 && (c = []), u.apply(a, c);
          };
        }, BROWSERS: { UNKNOWN: 0, IE: 1, FIREFOX: 2, SAFARI: 3, CHROME: 4, OPERA: 5, EDGE: 6, CHROMEEDGE: 7 }, SUBPIXEL_ROUNDING_OCCURRENCES: { NEVER: 0, ONLY_AT_REST: 1, ALWAYS: 2 }, _viewers: /* @__PURE__ */ new Map(), getViewer: function(a) {
          return e._viewers.get(this.getElement(a));
        }, getElement: function(a) {
          return typeof a == "string" && (a = document.getElementById(a)), a;
        }, getElementPosition: function(a) {
          var u = new e.Point(), c, h;
          for (a = e.getElement(a), c = e.getElementStyle(a).position === "fixed", h = l(a, c); h; ) u.x += a.offsetLeft, u.y += a.offsetTop, c && (u = u.plus(e.getPageScroll())), a = h, c = e.getElementStyle(a).position === "fixed", h = l(a, c);
          return u;
        }, getElementOffset: function(a) {
          a = e.getElement(a);
          var u = a && a.ownerDocument, c, h, f = { top: 0, left: 0 };
          return u ? (c = u.documentElement, typeof a.getBoundingClientRect < "u" && (f = a.getBoundingClientRect()), h = u === u.window ? u : u.nodeType === 9 ? u.defaultView || u.parentWindow : false, new e.Point(f.left + (h.pageXOffset || c.scrollLeft) - (c.clientLeft || 0), f.top + (h.pageYOffset || c.scrollTop) - (c.clientTop || 0))) : new e.Point();
        }, getElementSize: function(a) {
          return a = e.getElement(a), new e.Point(a.clientWidth, a.clientHeight);
        }, getElementStyle: document.documentElement.currentStyle ? function(a) {
          return a = e.getElement(a), a.currentStyle;
        } : function(a) {
          return a = e.getElement(a), window.getComputedStyle(a, "");
        }, getCssPropertyWithVendorPrefix: function(a) {
          var u = {};
          return e.getCssPropertyWithVendorPrefix = function(c) {
            if (u[c] !== void 0) return u[c];
            var h = document.createElement("div").style, f = null;
            if (h[c] !== void 0) f = c;
            else for (var m = ["Webkit", "Moz", "MS", "O", "webkit", "moz", "ms", "o"], v = e.capitalizeFirstLetter(c), y = 0; y < m.length; y++) {
              var T = m[y] + v;
              if (h[T] !== void 0) {
                f = T;
                break;
              }
            }
            return u[c] = f, f;
          }, e.getCssPropertyWithVendorPrefix(a);
        }, capitalizeFirstLetter: function(a) {
          return a.charAt(0).toUpperCase() + a.slice(1);
        }, positiveModulo: function(a, u) {
          var c = a % u;
          return c < 0 && (c += u), c;
        }, pointInElement: function(a, u) {
          a = e.getElement(a);
          var c = e.getElementOffset(a), h = e.getElementSize(a);
          return u.x >= c.x && u.x < c.x + h.x && u.y < c.y + h.y && u.y >= c.y;
        }, getMousePosition: function(a) {
          if (typeof a.pageX == "number") e.getMousePosition = function(u) {
            var c = new e.Point();
            return c.x = u.pageX, c.y = u.pageY, c;
          };
          else if (typeof a.clientX == "number") e.getMousePosition = function(u) {
            var c = new e.Point();
            return c.x = u.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, c.y = u.clientY + document.body.scrollTop + document.documentElement.scrollTop, c;
          };
          else throw new Error("Unknown event mouse position, no known technique.");
          return e.getMousePosition(a);
        }, getPageScroll: function() {
          var a = document.documentElement || {}, u = document.body || {};
          if (typeof window.pageXOffset == "number") e.getPageScroll = function() {
            return new e.Point(window.pageXOffset, window.pageYOffset);
          };
          else if (u.scrollLeft || u.scrollTop) e.getPageScroll = function() {
            return new e.Point(document.body.scrollLeft, document.body.scrollTop);
          };
          else if (a.scrollLeft || a.scrollTop) e.getPageScroll = function() {
            return new e.Point(document.documentElement.scrollLeft, document.documentElement.scrollTop);
          };
          else return new e.Point(0, 0);
          return e.getPageScroll();
        }, setPageScroll: function(a) {
          if (typeof window.scrollTo < "u") e.setPageScroll = function(h) {
            window.scrollTo(h.x, h.y);
          };
          else {
            var u = e.getPageScroll();
            if (u.x === a.x && u.y === a.y) return;
            document.body.scrollLeft = a.x, document.body.scrollTop = a.y;
            var c = e.getPageScroll();
            if (c.x !== u.x && c.y !== u.y) {
              e.setPageScroll = function(h) {
                document.body.scrollLeft = h.x, document.body.scrollTop = h.y;
              };
              return;
            }
            if (document.documentElement.scrollLeft = a.x, document.documentElement.scrollTop = a.y, c = e.getPageScroll(), c.x !== u.x && c.y !== u.y) {
              e.setPageScroll = function(h) {
                document.documentElement.scrollLeft = h.x, document.documentElement.scrollTop = h.y;
              };
              return;
            }
            e.setPageScroll = function(h) {
            };
          }
          e.setPageScroll(a);
        }, getWindowSize: function() {
          var a = document.documentElement || {}, u = document.body || {};
          if (typeof window.innerWidth == "number") e.getWindowSize = function() {
            return new e.Point(window.innerWidth, window.innerHeight);
          };
          else if (a.clientWidth || a.clientHeight) e.getWindowSize = function() {
            return new e.Point(document.documentElement.clientWidth, document.documentElement.clientHeight);
          };
          else if (u.clientWidth || u.clientHeight) e.getWindowSize = function() {
            return new e.Point(document.body.clientWidth, document.body.clientHeight);
          };
          else throw new Error("Unknown window size, no known technique.");
          return e.getWindowSize();
        }, makeCenteredNode: function(a) {
          a = e.getElement(a);
          var u = [e.makeNeutralElement("div"), e.makeNeutralElement("div"), e.makeNeutralElement("div")];
          return e.extend(u[0].style, { display: "table", height: "100%", width: "100%" }), e.extend(u[1].style, { display: "table-row" }), e.extend(u[2].style, { display: "table-cell", verticalAlign: "middle", textAlign: "center" }), u[0].appendChild(u[1]), u[1].appendChild(u[2]), u[2].appendChild(a), u[0];
        }, makeNeutralElement: function(a) {
          var u = document.createElement(a), c = u.style;
          return c.background = "transparent none", c.border = "none", c.margin = "0px", c.padding = "0px", c.position = "static", u;
        }, now: function() {
          return Date.now ? e.now = Date.now : e.now = function() {
            return (/* @__PURE__ */ new Date()).getTime();
          }, e.now();
        }, makeTransparentImage: function(a) {
          var u = e.makeNeutralElement("img");
          return u.src = a, u;
        }, setElementOpacity: function(a, u, c) {
          var h, f;
          a = e.getElement(a), c && !e.Browser.alpha && (u = Math.round(u)), e.Browser.opacity ? a.style.opacity = u < 1 ? u : "" : u < 1 ? (h = Math.round(100 * u), f = "alpha(opacity=" + h + ")", a.style.filter = f) : a.style.filter = "";
        }, setElementTouchActionNone: function(a) {
          a = e.getElement(a), typeof a.style.touchAction < "u" ? a.style.touchAction = "none" : typeof a.style.msTouchAction < "u" && (a.style.msTouchAction = "none");
        }, setElementPointerEvents: function(a, u) {
          a = e.getElement(a), typeof a.style < "u" && typeof a.style.pointerEvents < "u" && (a.style.pointerEvents = u);
        }, setElementPointerEventsNone: function(a) {
          e.setElementPointerEvents(a, "none");
        }, addClass: function(a, u) {
          a = e.getElement(a), a.className ? (" " + a.className + " ").indexOf(" " + u + " ") === -1 && (a.className += " " + u) : a.className = u;
        }, indexOf: function(a, u, c) {
          return Array.prototype.indexOf ? this.indexOf = function(h, f, m) {
            return h.indexOf(f, m);
          } : this.indexOf = function(h, f, m) {
            var v, y = m || 0, T;
            if (!h) throw new TypeError();
            if (T = h.length, T === 0 || y >= T) return -1;
            for (y < 0 && (y = T - Math.abs(y)), v = y; v < T; v++) if (h[v] === f) return v;
            return -1;
          }, this.indexOf(a, u, c);
        }, removeClass: function(a, u) {
          var c, h = [], f;
          for (a = e.getElement(a), c = a.className.split(/\s+/), f = 0; f < c.length; f++) c[f] && c[f] !== u && h.push(c[f]);
          a.className = h.join(" ");
        }, normalizeEventListenerOptions: function(a) {
          var u;
          return typeof a < "u" ? typeof a == "boolean" ? u = e.supportsEventListenerOptions ? { capture: a } : a : u = e.supportsEventListenerOptions ? a : typeof a.capture < "u" ? a.capture : false : u = e.supportsEventListenerOptions ? { capture: false } : false, u;
        }, addEvent: (function() {
          if (e.supportsAddEventListener) return function(a, u, c, h) {
            h = e.normalizeEventListenerOptions(h), a = e.getElement(a), a.addEventListener(u, c, h);
          };
          if (document.documentElement.attachEvent && document.attachEvent) return function(a, u, c) {
            a = e.getElement(a), a.attachEvent("on" + u, c);
          };
          throw new Error("No known event model.");
        })(), removeEvent: (function() {
          if (e.supportsRemoveEventListener) return function(a, u, c, h) {
            h = e.normalizeEventListenerOptions(h), a = e.getElement(a), a.removeEventListener(u, c, h);
          };
          if (document.documentElement.detachEvent && document.detachEvent) return function(a, u, c) {
            a = e.getElement(a), a.detachEvent("on" + u, c);
          };
          throw new Error("No known event model.");
        })(), cancelEvent: function(a) {
          a.preventDefault();
        }, eventIsCanceled: function(a) {
          return a.defaultPrevented;
        }, stopEvent: function(a) {
          a.stopPropagation();
        }, createCallback: function(a, u) {
          console.error("The createCallback function is deprecated and will be removed in future versions. Please use alternativeFunction instead.");
          var c = [], h;
          for (h = 2; h < arguments.length; h++) c.push(arguments[h]);
          return function() {
            var f = c.concat([]), m;
            for (m = 0; m < arguments.length; m++) f.push(arguments[m]);
            return u.apply(a, f);
          };
        }, getUrlParameter: function(a) {
          var u = o[a];
          return u || null;
        }, getUrlProtocol: function(a) {
          var u = a.match(/^([a-z]+:)\/\//i);
          return u === null ? window.location.protocol : u[1].toLowerCase();
        }, createAjaxRequest: function() {
          if (window.XMLHttpRequest) return e.createAjaxRequest = function() {
            return new XMLHttpRequest();
          }, new XMLHttpRequest();
          throw new Error("Browser doesn't support XMLHttpRequest.");
        }, makeAjaxRequest: function(a, u, c) {
          var h, f, m, v;
          e.isPlainObject(a) && (u = a.success, c = a.error, h = a.withCredentials, f = a.headers, m = a.responseType || null, v = a.postData || null, a = a.url);
          var y = e.getUrlProtocol(a), T = e.createAjaxRequest();
          if (!e.isFunction(u)) throw new Error("makeAjaxRequest requires a success callback");
          T.onreadystatechange = function() {
            T.readyState === 4 && (T.onreadystatechange = function() {
            }, T.status >= 200 && T.status < 300 || T.status === 0 && y !== "http:" && y !== "https:" ? u(T) : e.isFunction(c) ? c(T) : e.console.error("AJAX request returned %d: %s", T.status, a));
          };
          var x = v ? "POST" : "GET";
          try {
            if (T.open(x, a, true), m && (T.responseType = m), f) for (var E in f) Object.prototype.hasOwnProperty.call(f, E) && f[E] && T.setRequestHeader(E, f[E]);
            h && (T.withCredentials = true), T.send(v);
          } catch (M) {
            e.console.error("%s while making AJAX request: %s", M.name, M.message), T.onreadystatechange = function() {
            }, e.isFunction(c) && c(T, M);
          }
          return T;
        }, jsonp: function(a) {
          var u, c = a.url, h = document.head || document.getElementsByTagName("head")[0] || document.documentElement, f = a.callbackName || "openseadragon" + e.now(), m = window[f], v = "$1" + f + "$2", y = a.param || "callback", T = a.callback;
          c = c.replace(/(=)\?(&|$)|\?\?/i, v), c += (/\?/.test(c) ? "&" : "?") + y + "=" + f, window[f] = function(x) {
            if (m) window[f] = m;
            else try {
              delete window[f];
            } catch {
            }
            T && e.isFunction(T) && T(x);
          }, u = document.createElement("script"), (a.async !== void 0 || a.async !== false) && (u.async = "async"), a.scriptCharset && (u.charset = a.scriptCharset), u.src = c, u.onload = u.onreadystatechange = function(x, E) {
            (E || !u.readyState || /loaded|complete/.test(u.readyState)) && (u.onload = u.onreadystatechange = null, h && u.parentNode && h.removeChild(u), u = void 0);
          }, h.insertBefore(u, h.firstChild);
        }, createFromDZI: function() {
          throw "OpenSeadragon.createFromDZI is deprecated, use Viewer.open.";
        }, parseXml: function(a) {
          if (window.DOMParser) e.parseXml = function(u) {
            var c = null, h;
            return h = new DOMParser(), c = h.parseFromString(u, "text/xml"), c;
          };
          else throw new Error("Browser doesn't support XML DOM.");
          return e.parseXml(a);
        }, parseJSON: function(a) {
          return e.parseJSON = window.JSON.parse, e.parseJSON(a);
        }, imageFormatSupported: function(a) {
          return a = a || "", !!s[a.toLowerCase()];
        }, setImageFormatsSupported: function(a) {
          e.extend(s, a);
        } });
        var r = function(a) {
        };
        e.console = window.console || { log: r, debug: r, info: r, warn: r, error: r, assert: r }, e.Browser = { vendor: e.BROWSERS.UNKNOWN, version: 0, alpha: true };
        var s = { avif: true, bmp: false, jpeg: true, jpg: true, png: true, tif: false, wdp: false, webp: true }, o = {};
        (function() {
          var a = navigator.appVersion, u = navigator.userAgent, c;
          switch (navigator.appName) {
            case "Microsoft Internet Explorer":
              window.attachEvent && window.ActiveXObject && (e.Browser.vendor = e.BROWSERS.IE, e.Browser.version = parseFloat(u.substring(u.indexOf("MSIE") + 5, u.indexOf(";", u.indexOf("MSIE")))));
              break;
            case "Netscape":
              window.addEventListener && (u.indexOf("Edge") >= 0 ? (e.Browser.vendor = e.BROWSERS.EDGE, e.Browser.version = parseFloat(u.substring(u.indexOf("Edge") + 5))) : u.indexOf("Edg") >= 0 ? (e.Browser.vendor = e.BROWSERS.CHROMEEDGE, e.Browser.version = parseFloat(u.substring(u.indexOf("Edg") + 4))) : u.indexOf("Firefox") >= 0 ? (e.Browser.vendor = e.BROWSERS.FIREFOX, e.Browser.version = parseFloat(u.substring(u.indexOf("Firefox") + 8))) : u.indexOf("Safari") >= 0 ? (e.Browser.vendor = u.indexOf("Chrome") >= 0 ? e.BROWSERS.CHROME : e.BROWSERS.SAFARI, e.Browser.version = parseFloat(u.substring(u.substring(0, u.indexOf("Safari")).lastIndexOf("/") + 1, u.indexOf("Safari")))) : (c = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})"), c.exec(u) !== null && (e.Browser.vendor = e.BROWSERS.IE, e.Browser.version = parseFloat(RegExp.$1))));
              break;
            case "Opera":
              e.Browser.vendor = e.BROWSERS.OPERA, e.Browser.version = parseFloat(a);
              break;
          }
          var h = window.location.search.substring(1), f = h.split("&"), m, v, y;
          for (y = 0; y < f.length; y++) if (m = f[y], v = m.indexOf("="), v > 0) {
            var T = m.substring(0, v), x = m.substring(v + 1);
            try {
              o[T] = decodeURIComponent(x);
            } catch {
              e.console.error("Ignoring malformed URL parameter: %s=%s", T, x);
            }
          }
          e.Browser.alpha = !(e.Browser.vendor === e.BROWSERS.CHROME && e.Browser.version < 2), e.Browser.opacity = true, e.Browser.vendor === e.BROWSERS.IE && e.console.error("Internet Explorer is not supported by OpenSeadragon");
        })(), (function(a) {
          var u = a.requestAnimationFrame || a.mozRequestAnimationFrame || a.webkitRequestAnimationFrame || a.msRequestAnimationFrame, c = a.cancelAnimationFrame || a.mozCancelAnimationFrame || a.webkitCancelAnimationFrame || a.msCancelAnimationFrame;
          if (u && c) e.requestAnimationFrame = function() {
            return u.apply(a, arguments);
          }, e.cancelAnimationFrame = function() {
            return c.apply(a, arguments);
          };
          else {
            var h = [], f = [], m = 0, v;
            e.requestAnimationFrame = function(y) {
              return h.push([++m, y]), v || (v = setInterval(function() {
                if (h.length) {
                  var T = e.now(), x = f;
                  for (f = h, h = x; f.length; ) f.shift()[1](T);
                } else clearInterval(v), v = void 0;
              }, 1e3 / 50)), m;
            }, e.cancelAnimationFrame = function(y) {
              var T, x;
              for (T = 0, x = h.length; T < x; T += 1) if (h[T][0] === y) {
                h.splice(T, 1);
                return;
              }
              for (T = 0, x = f.length; T < x; T += 1) if (f[T][0] === y) {
                f.splice(T, 1);
                return;
              }
            };
          }
        })(window);
        function l(a, u) {
          return u && a !== document.body ? document.body : a.offsetParent;
        }
      })(i), (function(e, n) {
        t.exports ? t.exports = n() : e.OpenSeadragon = n();
      })(Ip, function() {
        return i;
      }), (function(e) {
        class n {
          constructor(s) {
            s || (s = [0, 0, 0, 0, 0, 0, 0, 0, 0]), this.values = s;
          }
          static makeIdentity() {
            return new n([1, 0, 0, 0, 1, 0, 0, 0, 1]);
          }
          static makeTranslation(s, o) {
            return new n([1, 0, 0, 0, 1, 0, s, o, 1]);
          }
          static makeRotation(s) {
            var o = Math.cos(s), l = Math.sin(s);
            return new n([o, -l, 0, l, o, 0, 0, 0, 1]);
          }
          static makeScaling(s, o) {
            return new n([s, 0, 0, 0, o, 0, 0, 0, 1]);
          }
          multiply(s) {
            let o = this.values, l = s.values;
            var a = o[0], u = o[1], c = o[2], h = o[3], f = o[4], m = o[5], v = o[6], y = o[7], T = o[8], x = l[0], E = l[1], M = l[2], L = l[3], U = l[4], K = l[5], q = l[6], Y = l[7], te = l[8];
            return new n([x * a + E * h + M * v, x * u + E * f + M * y, x * c + E * m + M * T, L * a + U * h + K * v, L * u + U * f + K * y, L * c + U * m + K * T, q * a + Y * h + te * v, q * u + Y * f + te * y, q * c + Y * m + te * T]);
          }
        }
        e.Mat3 = n;
      })(i), (function(e) {
        var n = { supportsFullScreen: false, isFullScreen: function() {
          return false;
        }, getFullScreenElement: function() {
          return null;
        }, requestFullScreen: function() {
        }, exitFullScreen: function() {
        }, cancelFullScreen: function() {
        }, fullScreenEventName: "", fullScreenErrorEventName: "" };
        document.exitFullscreen ? (n.supportsFullScreen = true, n.getFullScreenElement = function() {
          return document.fullscreenElement;
        }, n.requestFullScreen = function(r) {
          return r.requestFullscreen().catch(function(s) {
            e.console.error("Fullscreen request failed: ", s);
          });
        }, n.exitFullScreen = function() {
          document.exitFullscreen().catch(function(r) {
            e.console.error("Error while exiting fullscreen: ", r);
          });
        }, n.fullScreenEventName = "fullscreenchange", n.fullScreenErrorEventName = "fullscreenerror") : document.msExitFullscreen ? (n.supportsFullScreen = true, n.getFullScreenElement = function() {
          return document.msFullscreenElement;
        }, n.requestFullScreen = function(r) {
          return r.msRequestFullscreen();
        }, n.exitFullScreen = function() {
          document.msExitFullscreen();
        }, n.fullScreenEventName = "MSFullscreenChange", n.fullScreenErrorEventName = "MSFullscreenError") : document.webkitExitFullscreen ? (n.supportsFullScreen = true, n.getFullScreenElement = function() {
          return document.webkitFullscreenElement;
        }, n.requestFullScreen = function(r) {
          return r.webkitRequestFullscreen();
        }, n.exitFullScreen = function() {
          document.webkitExitFullscreen();
        }, n.fullScreenEventName = "webkitfullscreenchange", n.fullScreenErrorEventName = "webkitfullscreenerror") : document.webkitCancelFullScreen ? (n.supportsFullScreen = true, n.getFullScreenElement = function() {
          return document.webkitCurrentFullScreenElement;
        }, n.requestFullScreen = function(r) {
          return r.webkitRequestFullScreen();
        }, n.exitFullScreen = function() {
          document.webkitCancelFullScreen();
        }, n.fullScreenEventName = "webkitfullscreenchange", n.fullScreenErrorEventName = "webkitfullscreenerror") : document.mozCancelFullScreen && (n.supportsFullScreen = true, n.getFullScreenElement = function() {
          return document.mozFullScreenElement;
        }, n.requestFullScreen = function(r) {
          return r.mozRequestFullScreen();
        }, n.exitFullScreen = function() {
          document.mozCancelFullScreen();
        }, n.fullScreenEventName = "mozfullscreenchange", n.fullScreenErrorEventName = "mozfullscreenerror"), n.isFullScreen = function() {
          return n.getFullScreenElement() !== null;
        }, n.cancelFullScreen = function() {
          e.console.error("cancelFullScreen is deprecated. Use exitFullScreen instead."), n.exitFullScreen();
        }, e.extend(e, n);
      })(i), (function(e) {
        e.EventSource = function() {
          this.events = {}, this._rejectedEventList = {};
        }, e.EventSource.prototype = { addOnceHandler: function(n, r, s, o, l) {
          var a = this;
          o = o || 1;
          var u = 0, c = function(h) {
            return u++, u === o && a.removeHandler(n, c), r(h);
          };
          return this.addHandler(n, c, s, l);
        }, addHandler: function(n, r, s, o) {
          if (Object.prototype.hasOwnProperty.call(this._rejectedEventList, n)) return e.console.error(`Error adding handler for ${n}. ${this._rejectedEventList[n]}`), false;
          var l = this.events[n];
          if (l || (this.events[n] = l = []), r && e.isFunction(r)) {
            var a = l.length, u = { handler: r, userData: s || null, priority: o || 0 };
            for (l[a] = u; a > 0 && l[a - 1].priority < l[a].priority; ) l[a] = l[a - 1], l[a - 1] = u, a--;
          }
          return true;
        }, removeHandler: function(n, r) {
          var s = this.events[n], o = [], l;
          if (s && e.isArray(s)) {
            for (l = 0; l < s.length; l++) s[l].handler !== r && o.push(s[l]);
            this.events[n] = o;
          }
        }, numberOfHandlers: function(n) {
          var r = this.events[n];
          return r ? r.length : 0;
        }, removeAllHandlers: function(n) {
          if (n) this.events[n] = [];
          else for (var r in this.events) this.events[r] = [];
        }, getHandler: function(n) {
          var r = this.events[n];
          return !r || !r.length ? null : (r = r.length === 1 ? [r[0]] : Array.apply(null, r), function(s, o) {
            var l, a = r.length;
            for (l = 0; l < a; l++) r[l] && (o.eventSource = s, o.userData = r[l].userData, r[l].handler(o));
          });
        }, raiseEvent: function(n, r) {
          if (Object.prototype.hasOwnProperty.call(this._rejectedEventList, n)) return e.console.error(`Error adding handler for ${n}. ${this._rejectedEventList[n]}`), false;
          var s = this.getHandler(n);
          return s && s(this, r || {}), true;
        }, rejectEventHandler(n, r = "") {
          this._rejectedEventList[n] = r;
        }, allowEventHandler(n) {
          delete this._rejectedEventList[n];
        } };
      })(i), (function(e) {
        var n = {};
        e.MouseTracker = function(g) {
          var p = arguments;
          e.isPlainObject(g) || (g = { element: p[0], clickTimeThreshold: p[1], clickDistThreshold: p[2] }), this.hash = Math.random(), this.element = e.getElement(g.element), this.clickTimeThreshold = g.clickTimeThreshold || e.DEFAULT_SETTINGS.clickTimeThreshold, this.clickDistThreshold = g.clickDistThreshold || e.DEFAULT_SETTINGS.clickDistThreshold, this.dblClickTimeThreshold = g.dblClickTimeThreshold || e.DEFAULT_SETTINGS.dblClickTimeThreshold, this.dblClickDistThreshold = g.dblClickDistThreshold || e.DEFAULT_SETTINGS.dblClickDistThreshold, this.userData = g.userData || null, this.stopDelay = g.stopDelay || 50, this.preProcessEventHandler = g.preProcessEventHandler || null, this.contextMenuHandler = g.contextMenuHandler || null, this.enterHandler = g.enterHandler || null, this.leaveHandler = g.leaveHandler || null, this.exitHandler = g.exitHandler || null, this.overHandler = g.overHandler || null, this.outHandler = g.outHandler || null, this.pressHandler = g.pressHandler || null, this.nonPrimaryPressHandler = g.nonPrimaryPressHandler || null, this.releaseHandler = g.releaseHandler || null, this.nonPrimaryReleaseHandler = g.nonPrimaryReleaseHandler || null, this.moveHandler = g.moveHandler || null, this.scrollHandler = g.scrollHandler || null, this.clickHandler = g.clickHandler || null, this.dblClickHandler = g.dblClickHandler || null, this.dragHandler = g.dragHandler || null, this.dragEndHandler = g.dragEndHandler || null, this.pinchHandler = g.pinchHandler || null, this.stopHandler = g.stopHandler || null, this.keyDownHandler = g.keyDownHandler || null, this.keyUpHandler = g.keyUpHandler || null, this.keyHandler = g.keyHandler || null, this.focusHandler = g.focusHandler || null, this.blurHandler = g.blurHandler || null;
          var _ = this;
          n[this.hash] = { click: function(b) {
            M(_, b);
          }, dblclick: function(b) {
            L(_, b);
          }, keydown: function(b) {
            U(_, b);
          }, keyup: function(b) {
            K(_, b);
          }, keypress: function(b) {
            q(_, b);
          }, focus: function(b) {
            Y(_, b);
          }, blur: function(b) {
            te(_, b);
          }, contextmenu: function(b) {
            fe(_, b);
          }, wheel: function(b) {
            $(_, b);
          }, mousewheel: function(b) {
            j(_, b);
          }, DOMMouseScroll: function(b) {
            j(_, b);
          }, MozMousePixelScroll: function(b) {
            j(_, b);
          }, losecapture: function(b) {
            ce(_, b);
          }, mouseenter: function(b) {
            ge(_, b);
          }, mouseleave: function(b) {
            Wt(_, b);
          }, mouseover: function(b) {
            jt(_, b);
          }, mouseout: function(b) {
            ot(_, b);
          }, mousedown: function(b) {
            tt(_, b);
          }, mouseup: function(b) {
            Rt(_, b);
          }, mousemove: function(b) {
            si(_, b);
          }, touchstart: function(b) {
            ye(_, b);
          }, touchend: function(b) {
            me(_, b);
          }, touchmove: function(b) {
            pe(_, b);
          }, touchcancel: function(b) {
            oe(_, b);
          }, gesturestart: function(b) {
            Ae(_, b);
          }, gesturechange: function(b) {
            De(_, b);
          }, gotpointercapture: function(b) {
            et(_, b);
          }, lostpointercapture: function(b) {
            qe(_, b);
          }, pointerenter: function(b) {
            ge(_, b);
          }, pointerleave: function(b) {
            Wt(_, b);
          }, pointerover: function(b) {
            jt(_, b);
          }, pointerout: function(b) {
            ot(_, b);
          }, pointerdown: function(b) {
            tt(_, b);
          }, pointerup: function(b) {
            Rt(_, b);
          }, pointermove: function(b) {
            si(_, b);
          }, pointercancel: function(b) {
            H(_, b);
          }, pointerupcaptured: function(b) {
            Gt(_, b);
          }, pointermovecaptured: function(b) {
            P(_, b);
          }, tracking: false, activePointersLists: [], lastClickPos: null, dblClickTimeOut: null, pinchGPoints: [], lastPinchDist: 0, currentPinchDist: 0, lastPinchCenter: null, currentPinchCenter: null, sentDragEvent: false }, this.hasGestureHandlers = !!(this.pressHandler || this.nonPrimaryPressHandler || this.releaseHandler || this.nonPrimaryReleaseHandler || this.clickHandler || this.dblClickHandler || this.dragHandler || this.dragEndHandler || this.pinchHandler), this.hasScrollHandler = !!this.scrollHandler, e.MouseTracker.havePointerEvents && e.setElementPointerEvents(this.element, "auto"), this.exitHandler && e.console.error("MouseTracker.exitHandler is deprecated. Use MouseTracker.leaveHandler instead."), g.startDisabled || this.setTracking(true);
        }, e.MouseTracker.prototype = { destroy: function() {
          a(this), this.element = null, n[this.hash] = null, delete n[this.hash];
        }, isTracking: function() {
          return n[this.hash].tracking;
        }, setTracking: function(g) {
          return g ? l(this) : a(this), this;
        }, getActivePointersListByType: function(g) {
          var p = n[this.hash], _, b = p ? p.activePointersLists.length : 0, k;
          for (_ = 0; _ < b; _++) if (p.activePointersLists[_].type === g) return p.activePointersLists[_];
          return k = new e.MouseTracker.GesturePointList(g), p && p.activePointersLists.push(k), k;
        }, getActivePointerCount: function() {
          var g = n[this.hash], p, _ = g.activePointersLists.length, b = 0;
          for (p = 0; p < _; p++) b += g.activePointersLists[p].getLength();
          return b;
        }, preProcessEventHandler: function() {
        }, contextMenuHandler: function() {
        }, enterHandler: function() {
        }, leaveHandler: function() {
        }, exitHandler: function() {
        }, overHandler: function() {
        }, outHandler: function() {
        }, pressHandler: function() {
        }, nonPrimaryPressHandler: function() {
        }, releaseHandler: function() {
        }, nonPrimaryReleaseHandler: function() {
        }, moveHandler: function() {
        }, scrollHandler: function() {
        }, clickHandler: function() {
        }, dblClickHandler: function() {
        }, dragHandler: function() {
        }, dragEndHandler: function() {
        }, pinchHandler: function() {
        }, stopHandler: function() {
        }, keyDownHandler: function() {
        }, keyUpHandler: function() {
        }, keyHandler: function() {
        }, focusHandler: function() {
        }, blurHandler: function() {
        } };
        var r = (function() {
          try {
            return window.self !== window.top;
          } catch {
            return true;
          }
        })();
        function s(g) {
          try {
            return g.addEventListener && g.removeEventListener;
          } catch {
            return false;
          }
        }
        e.MouseTracker.gesturePointVelocityTracker = /* @__PURE__ */ (function() {
          var g = [], p = 0, _ = 0, b = function(ve, re) {
            return ve.hash.toString() + re.type + re.id.toString();
          }, k = function() {
            var ve, re = g.length, He, Fe, qt = e.now(), _s, Ts, xs;
            for (_s = qt - _, _ = qt, ve = 0; ve < re; ve++) He = g[ve], Fe = He.gPoint, Fe.direction = Math.atan2(Fe.currentPos.y - He.lastPos.y, Fe.currentPos.x - He.lastPos.x), Ts = He.lastPos.distanceTo(Fe.currentPos), He.lastPos = Fe.currentPos, xs = 1e3 * Ts / (_s + 1), Fe.speed = 0.75 * xs + 0.25 * Fe.speed;
          }, G = function(ve, re) {
            var He = b(ve, re);
            g.push({ guid: He, gPoint: re, lastPos: re.currentPos }), g.length === 1 && (_ = e.now(), p = window.setInterval(k, 50));
          }, J = function(ve, re) {
            var He = b(ve, re), Fe, qt = g.length;
            for (Fe = 0; Fe < qt; Fe++) if (g[Fe].guid === He) {
              g.splice(Fe, 1), qt--, qt === 0 && window.clearInterval(p);
              break;
            }
          };
          return { addPoint: G, removePoint: J };
        })(), e.MouseTracker.captureElement = document, e.MouseTracker.wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : document.onmousewheel !== void 0 ? "mousewheel" : "DOMMouseScroll", e.MouseTracker.subscribeEvents = ["click", "dblclick", "keydown", "keyup", "keypress", "focus", "blur", "contextmenu", e.MouseTracker.wheelEventName], e.MouseTracker.wheelEventName === "DOMMouseScroll" && e.MouseTracker.subscribeEvents.push("MozMousePixelScroll"), window.PointerEvent ? (e.MouseTracker.havePointerEvents = true, e.MouseTracker.subscribeEvents.push("pointerenter", "pointerleave", "pointerover", "pointerout", "pointerdown", "pointerup", "pointermove", "pointercancel"), e.MouseTracker.havePointerCapture = (function() {
          var g = document.createElement("div");
          return e.isFunction(g.setPointerCapture) && e.isFunction(g.releasePointerCapture);
        })(), e.MouseTracker.havePointerCapture && e.MouseTracker.subscribeEvents.push("gotpointercapture", "lostpointercapture")) : (e.MouseTracker.havePointerEvents = false, e.MouseTracker.subscribeEvents.push("mouseenter", "mouseleave", "mouseover", "mouseout", "mousedown", "mouseup", "mousemove"), e.MouseTracker.mousePointerId = "legacy-mouse", e.MouseTracker.havePointerCapture = (function() {
          var g = document.createElement("div");
          return e.isFunction(g.setCapture) && e.isFunction(g.releaseCapture);
        })(), e.MouseTracker.havePointerCapture && e.MouseTracker.subscribeEvents.push("losecapture"), "ontouchstart" in window && e.MouseTracker.subscribeEvents.push("touchstart", "touchend", "touchmove", "touchcancel"), "ongesturestart" in window && e.MouseTracker.subscribeEvents.push("gesturestart", "gesturechange")), e.MouseTracker.GesturePointList = function(g) {
          this._gPoints = [], this.type = g, this.buttons = 0, this.contacts = 0, this.clicks = 0, this.captureCount = 0;
        }, e.MouseTracker.GesturePointList.prototype = { getLength: function() {
          return this._gPoints.length;
        }, asArray: function() {
          return this._gPoints;
        }, add: function(g) {
          return this._gPoints.push(g);
        }, removeById: function(g) {
          var p, _ = this._gPoints.length;
          for (p = 0; p < _; p++) if (this._gPoints[p].id === g) {
            this._gPoints.splice(p, 1);
            break;
          }
          return this._gPoints.length;
        }, getByIndex: function(g) {
          return g < this._gPoints.length ? this._gPoints[g] : null;
        }, getById: function(g) {
          var p, _ = this._gPoints.length;
          for (p = 0; p < _; p++) if (this._gPoints[p].id === g) return this._gPoints[p];
          return null;
        }, getPrimary: function(g) {
          var p, _ = this._gPoints.length;
          for (p = 0; p < _; p++) if (this._gPoints[p].isPrimary) return this._gPoints[p];
          return null;
        }, addContact: function() {
          ++this.contacts, this.contacts > 1 && (this.type === "mouse" || this.type === "pen") && (e.console.warn("GesturePointList.addContact() Implausible contacts value"), this.contacts = 1);
        }, removeContact: function() {
          --this.contacts, this.contacts < 0 && (this.contacts = 0);
        } };
        function o(g) {
          var p = n[g.hash], _, b, k, G, J, ve = p.activePointersLists.length;
          for (_ = 0; _ < ve; _++) if (k = p.activePointersLists[_], k.getLength() > 0) {
            for (J = [], G = k.asArray(), b = 0; b < G.length; b++) J.push(G[b]);
            for (b = 0; b < J.length; b++) N(g, k, J[b]);
          }
          for (_ = 0; _ < ve; _++) p.activePointersLists.pop();
          p.sentDragEvent = false;
        }
        function l(g) {
          var p = n[g.hash], _, b;
          if (!p.tracking) {
            for (b = 0; b < e.MouseTracker.subscribeEvents.length; b++) _ = e.MouseTracker.subscribeEvents[b], e.addEvent(g.element, _, p[_], _ === e.MouseTracker.wheelEventName ? { passive: false, capture: false } : false);
            o(g), p.tracking = true;
          }
        }
        function a(g) {
          var p = n[g.hash], _, b;
          if (p.tracking) {
            for (b = 0; b < e.MouseTracker.subscribeEvents.length; b++) _ = e.MouseTracker.subscribeEvents[b], e.removeEvent(g.element, _, p[_], false);
            o(g), p.tracking = false;
          }
        }
        function u(g, p) {
          var _ = n[g.hash];
          if (p === "pointerevent") return { upName: "pointerup", upHandler: _.pointerupcaptured, moveName: "pointermove", moveHandler: _.pointermovecaptured };
          if (p === "mouse") return { upName: "pointerup", upHandler: _.pointerupcaptured, moveName: "pointermove", moveHandler: _.pointermovecaptured };
          if (p === "touch") return { upName: "touchend", upHandler: _.touchendcaptured, moveName: "touchmove", moveHandler: _.touchmovecaptured };
          throw new Error("MouseTracker.getCaptureEventParams: Unknown pointer type.");
        }
        function c(g, p) {
          var _;
          if (e.MouseTracker.havePointerCapture) if (e.MouseTracker.havePointerEvents) try {
            g.element.setPointerCapture(p.id);
          } catch {
            e.console.warn("setPointerCapture() called on invalid pointer ID");
            return;
          }
          else g.element.setCapture(true);
          else _ = u(g, e.MouseTracker.havePointerEvents ? "pointerevent" : p.type), r && s(window.top) && e.addEvent(window.top, _.upName, _.upHandler, true), e.addEvent(e.MouseTracker.captureElement, _.upName, _.upHandler, true), e.addEvent(e.MouseTracker.captureElement, _.moveName, _.moveHandler, true);
          C(g, p, true);
        }
        function h(g, p) {
          var _, b, k;
          if (e.MouseTracker.havePointerCapture) if (e.MouseTracker.havePointerEvents) {
            if (b = g.getActivePointersListByType(p.type), k = b.getById(p.id), !k || !k.captured) return;
            try {
              g.element.releasePointerCapture(p.id);
            } catch {
            }
          } else g.element.releaseCapture();
          else _ = u(g, e.MouseTracker.havePointerEvents ? "pointerevent" : p.type), r && s(window.top) && e.removeEvent(window.top, _.upName, _.upHandler, true), e.removeEvent(e.MouseTracker.captureElement, _.moveName, _.moveHandler, true), e.removeEvent(e.MouseTracker.captureElement, _.upName, _.upHandler, true);
          C(g, p, false);
        }
        function f(g) {
          return e.MouseTracker.havePointerEvents ? g.pointerId : e.MouseTracker.mousePointerId;
        }
        function m(g) {
          return e.MouseTracker.havePointerEvents && g.pointerType ? g.pointerType : "mouse";
        }
        function v(g) {
          return e.MouseTracker.havePointerEvents ? g.isPrimary : true;
        }
        function y(g) {
          return e.getMousePosition(g);
        }
        function T(g, p) {
          return x(y(g), p);
        }
        function x(g, p) {
          var _ = e.getElementOffset(p);
          return g.minus(_);
        }
        function E(g, p) {
          return new e.Point((g.x + p.x) / 2, (g.y + p.y) / 2);
        }
        function M(g, p) {
          var _ = { originalEvent: p, eventType: "click", pointerType: "mouse", isEmulated: false };
          w(g, _), _.preventDefault && !_.defaultPrevented && e.cancelEvent(p), _.stopPropagation && e.stopEvent(p);
        }
        function L(g, p) {
          var _ = { originalEvent: p, eventType: "dblclick", pointerType: "mouse", isEmulated: false };
          w(g, _), _.preventDefault && !_.defaultPrevented && e.cancelEvent(p), _.stopPropagation && e.stopEvent(p);
        }
        function U(g, p) {
          var _ = null, b = { originalEvent: p, eventType: "keydown", pointerType: "", isEmulated: false };
          w(g, b), g.keyDownHandler && !b.preventGesture && !b.defaultPrevented && (_ = { eventSource: g, keyCode: p.keyCode ? p.keyCode : p.charCode, ctrl: p.ctrlKey, shift: p.shiftKey, alt: p.altKey, meta: p.metaKey, originalEvent: p, preventDefault: b.preventDefault || b.defaultPrevented, userData: g.userData }, g.keyDownHandler(_)), (_ && _.preventDefault || b.preventDefault && !b.defaultPrevented) && e.cancelEvent(p), b.stopPropagation && e.stopEvent(p);
        }
        function K(g, p) {
          var _ = null, b = { originalEvent: p, eventType: "keyup", pointerType: "", isEmulated: false };
          w(g, b), g.keyUpHandler && !b.preventGesture && !b.defaultPrevented && (_ = { eventSource: g, keyCode: p.keyCode ? p.keyCode : p.charCode, ctrl: p.ctrlKey, shift: p.shiftKey, alt: p.altKey, meta: p.metaKey, originalEvent: p, preventDefault: b.preventDefault || b.defaultPrevented, userData: g.userData }, g.keyUpHandler(_)), (_ && _.preventDefault || b.preventDefault && !b.defaultPrevented) && e.cancelEvent(p), b.stopPropagation && e.stopEvent(p);
        }
        function q(g, p) {
          var _ = null, b = { originalEvent: p, eventType: "keypress", pointerType: "", isEmulated: false };
          w(g, b), g.keyHandler && !b.preventGesture && !b.defaultPrevented && (_ = { eventSource: g, keyCode: p.keyCode ? p.keyCode : p.charCode, ctrl: p.ctrlKey, shift: p.shiftKey, alt: p.altKey, meta: p.metaKey, originalEvent: p, preventDefault: b.preventDefault || b.defaultPrevented, userData: g.userData }, g.keyHandler(_)), (_ && _.preventDefault || b.preventDefault && !b.defaultPrevented) && e.cancelEvent(p), b.stopPropagation && e.stopEvent(p);
        }
        function Y(g, p) {
          var _ = { originalEvent: p, eventType: "focus", pointerType: "", isEmulated: false };
          w(g, _), g.focusHandler && !_.preventGesture && g.focusHandler({ eventSource: g, originalEvent: p, userData: g.userData });
        }
        function te(g, p) {
          var _ = { originalEvent: p, eventType: "blur", pointerType: "", isEmulated: false };
          w(g, _), g.blurHandler && !_.preventGesture && g.blurHandler({ eventSource: g, originalEvent: p, userData: g.userData });
        }
        function fe(g, p) {
          var _ = null, b = { originalEvent: p, eventType: "contextmenu", pointerType: "mouse", isEmulated: false };
          w(g, b), g.contextMenuHandler && !b.preventGesture && !b.defaultPrevented && (_ = { eventSource: g, position: x(y(p), g.element), originalEvent: b.originalEvent, preventDefault: b.preventDefault || b.defaultPrevented, userData: g.userData }, g.contextMenuHandler(_)), (_ && _.preventDefault || b.preventDefault && !b.defaultPrevented) && e.cancelEvent(p), b.stopPropagation && e.stopEvent(p);
        }
        function $(g, p) {
          ie(g, p, p);
        }
        function j(g, p) {
          var _ = { target: p.target || p.srcElement, type: "wheel", shiftKey: p.shiftKey || false, clientX: p.clientX, clientY: p.clientY, pageX: p.pageX ? p.pageX : p.clientX, pageY: p.pageY ? p.pageY : p.clientY, deltaMode: p.type === "MozMousePixelScroll" ? 0 : 1, deltaX: 0, deltaZ: 0 };
          e.MouseTracker.wheelEventName === "mousewheel" ? _.deltaY = -p.wheelDelta / e.DEFAULT_SETTINGS.pixelsPerWheelLine : _.deltaY = p.detail, ie(g, _, p);
        }
        function ie(g, p, _) {
          var b = 0, k, G = null;
          b = p.deltaY ? p.deltaY < 0 ? 1 : -1 : 0, k = { originalEvent: p, eventType: "wheel", pointerType: "mouse", isEmulated: p !== _ }, w(g, k), g.scrollHandler && !k.preventGesture && !k.defaultPrevented && (G = { eventSource: g, pointerType: "mouse", position: T(p, g.element), scroll: b, shift: p.shiftKey, isTouchEvent: false, originalEvent: _, preventDefault: k.preventDefault || k.defaultPrevented, userData: g.userData }, g.scrollHandler(G)), k.stopPropagation && e.stopEvent(_), (G && G.preventDefault || k.preventDefault && !k.defaultPrevented) && e.cancelEvent(_);
        }
        function ce(g, p) {
          var _ = { id: e.MouseTracker.mousePointerId, type: "mouse" }, b = { originalEvent: p, eventType: "lostpointercapture", pointerType: "mouse", isEmulated: false };
          w(g, b), p.target === g.element && C(g, _, false), b.stopPropagation && e.stopEvent(p);
        }
        function ye(g, p) {
          var _, b, k = p.changedTouches.length, G, J = g.getActivePointersListByType("touch");
          _ = e.now(), J.getLength() > p.touches.length - k && e.console.warn("Tracked touch contact count doesn't match event.touches.length");
          var ve = { originalEvent: p, eventType: "pointerdown", pointerType: "touch", isEmulated: false };
          for (w(g, ve), b = 0; b < k; b++) G = { id: p.changedTouches[b].identifier, type: "touch", isPrimary: J.getLength() === 0, currentPos: y(p.changedTouches[b]), currentTime: _ }, A(g, ve, G), W(g, ve, G, 0), C(g, G, true);
          ve.preventDefault && !ve.defaultPrevented && e.cancelEvent(p), ve.stopPropagation && e.stopEvent(p);
        }
        function me(g, p) {
          var _, b, k = p.changedTouches.length, G;
          _ = e.now();
          var J = { originalEvent: p, eventType: "pointerup", pointerType: "touch", isEmulated: false };
          for (w(g, J), b = 0; b < k; b++) G = { id: p.changedTouches[b].identifier, type: "touch", currentPos: y(p.changedTouches[b]), currentTime: _ }, Z(g, J, G, 0), C(g, G, false), O(g, J, G);
          J.preventDefault && !J.defaultPrevented && e.cancelEvent(p), J.stopPropagation && e.stopEvent(p);
        }
        function pe(g, p) {
          var _, b, k = p.changedTouches.length, G;
          _ = e.now();
          var J = { originalEvent: p, eventType: "pointermove", pointerType: "touch", isEmulated: false };
          for (w(g, J), b = 0; b < k; b++) G = { id: p.changedTouches[b].identifier, type: "touch", currentPos: y(p.changedTouches[b]), currentTime: _ }, ne(g, J, G);
          J.preventDefault && !J.defaultPrevented && e.cancelEvent(p), J.stopPropagation && e.stopEvent(p);
        }
        function oe(g, p) {
          var _ = p.changedTouches.length, b, k, G = { originalEvent: p, eventType: "pointercancel", pointerType: "touch", isEmulated: false };
          for (w(g, G), b = 0; b < _; b++) k = { id: p.changedTouches[b].identifier, type: "touch" }, X(g, G, k);
          G.stopPropagation && e.stopEvent(p);
        }
        function Ae(g, p) {
          return e.eventIsCanceled(p) || p.preventDefault(), false;
        }
        function De(g, p) {
          return e.eventIsCanceled(p) || p.preventDefault(), false;
        }
        function et(g, p) {
          var _ = { originalEvent: p, eventType: "gotpointercapture", pointerType: m(p), isEmulated: false };
          w(g, _), p.target === g.element && C(g, { id: p.pointerId, type: m(p) }, true), _.stopPropagation && e.stopEvent(p);
        }
        function qe(g, p) {
          var _ = { originalEvent: p, eventType: "lostpointercapture", pointerType: m(p), isEmulated: false };
          w(g, _), p.target === g.element && C(g, { id: p.pointerId, type: m(p) }, false), _.stopPropagation && e.stopEvent(p);
        }
        function ge(g, p) {
          var _ = { id: f(p), type: m(p), isPrimary: v(p), currentPos: y(p), currentTime: e.now() }, b = { originalEvent: p, eventType: "pointerenter", pointerType: _.type, isEmulated: false };
          w(g, b), A(g, b, _);
        }
        function Wt(g, p) {
          var _ = { id: f(p), type: m(p), isPrimary: v(p), currentPos: y(p), currentTime: e.now() }, b = { originalEvent: p, eventType: "pointerleave", pointerType: _.type, isEmulated: false };
          w(g, b), O(g, b, _);
        }
        function jt(g, p) {
          var _ = { id: f(p), type: m(p), isPrimary: v(p), currentPos: y(p), currentTime: e.now() }, b = { originalEvent: p, eventType: "pointerover", pointerType: _.type, isEmulated: false };
          w(g, b), B(g, b, _), b.preventDefault && !b.defaultPrevented && e.cancelEvent(p), b.stopPropagation && e.stopEvent(p);
        }
        function ot(g, p) {
          var _ = { id: f(p), type: m(p), isPrimary: v(p), currentPos: y(p), currentTime: e.now() }, b = { originalEvent: p, eventType: "pointerout", pointerType: _.type, isEmulated: false };
          w(g, b), F(g, b, _), b.preventDefault && !b.defaultPrevented && e.cancelEvent(p), b.stopPropagation && e.stopEvent(p);
        }
        function tt(g, p) {
          var _ = { id: f(p), type: m(p), isPrimary: v(p), currentPos: y(p), currentTime: e.now() }, b = e.MouseTracker.havePointerEvents && _.type === "touch", k = { originalEvent: p, eventType: "pointerdown", pointerType: _.type, isEmulated: false };
          w(g, k), W(g, k, _, p.button), k.preventDefault && !k.defaultPrevented && e.cancelEvent(p), k.stopPropagation && e.stopEvent(p), k.shouldCapture && (b ? C(g, _, true) : c(g, _));
        }
        function Rt(g, p) {
          at(g, p);
        }
        function Gt(g, p) {
          var _ = g.getActivePointersListByType(m(p));
          _.getById(p.pointerId) && at(g, p), e.stopEvent(p);
        }
        function at(g, p) {
          var _;
          _ = { id: f(p), type: m(p), isPrimary: v(p), currentPos: y(p), currentTime: e.now() };
          var b = { originalEvent: p, eventType: "pointerup", pointerType: _.type, isEmulated: false };
          w(g, b), Z(g, b, _, p.button), b.preventDefault && !b.defaultPrevented && e.cancelEvent(p), b.stopPropagation && e.stopEvent(p), b.shouldReleaseCapture && (p.target === g.element ? h(g, _) : C(g, _, false));
        }
        function si(g, p) {
          I(g, p);
        }
        function P(g, p) {
          var _ = g.getActivePointersListByType(m(p));
          _.getById(p.pointerId) && I(g, p), e.stopEvent(p);
        }
        function I(g, p) {
          var _ = { id: f(p), type: m(p), isPrimary: v(p), currentPos: y(p), currentTime: e.now() }, b = { originalEvent: p, eventType: "pointermove", pointerType: _.type, isEmulated: false };
          w(g, b), ne(g, b, _), b.preventDefault && !b.defaultPrevented && e.cancelEvent(p), b.stopPropagation && e.stopEvent(p);
        }
        function H(g, p) {
          var _ = { id: p.pointerId, type: m(p) }, b = { originalEvent: p, eventType: "pointercancel", pointerType: _.type, isEmulated: false };
          w(g, b), X(g, b, _), b.stopPropagation && e.stopEvent(p);
        }
        function V(g, p) {
          return p.speed = 0, p.direction = 0, p.contactPos = p.currentPos, p.contactTime = p.currentTime, p.lastPos = p.currentPos, p.lastTime = p.currentTime, g.add(p);
        }
        function N(g, p, _) {
          var b, k = p.getById(_.id);
          return k ? (k.captured && (e.console.warn("stopTrackingPointer() called on captured pointer"), h(g, k)), p.removeContact(), b = p.removeById(_.id)) : b = p.getLength(), b;
        }
        function d(g, p) {
          switch (p.eventType) {
            case "pointermove":
              p.isStoppable = true, p.isCancelable = true, p.preventDefault = false, p.preventGesture = !g.hasGestureHandlers, p.stopPropagation = false;
              break;
            case "pointerover":
            case "pointerout":
            case "contextmenu":
            case "keydown":
            case "keyup":
            case "keypress":
              p.isStoppable = true, p.isCancelable = true, p.preventDefault = false, p.preventGesture = false, p.stopPropagation = false;
              break;
            case "pointerdown":
              p.isStoppable = true, p.isCancelable = true, p.preventDefault = false, p.preventGesture = !g.hasGestureHandlers, p.stopPropagation = false;
              break;
            case "pointerup":
              p.isStoppable = true, p.isCancelable = true, p.preventDefault = false, p.preventGesture = !g.hasGestureHandlers, p.stopPropagation = false;
              break;
            case "wheel":
              p.isStoppable = true, p.isCancelable = true, p.preventDefault = false, p.preventGesture = !g.hasScrollHandler, p.stopPropagation = false;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
              p.isStoppable = true, p.isCancelable = false, p.preventDefault = false, p.preventGesture = false, p.stopPropagation = false;
              break;
            case "click":
              p.isStoppable = true, p.isCancelable = true, p.preventDefault = !!g.clickHandler, p.preventGesture = false, p.stopPropagation = false;
              break;
            case "dblclick":
              p.isStoppable = true, p.isCancelable = true, p.preventDefault = !!g.dblClickHandler, p.preventGesture = false, p.stopPropagation = false;
              break;
            case "focus":
            case "blur":
            case "pointerenter":
            case "pointerleave":
            default:
              p.isStoppable = false, p.isCancelable = false, p.preventDefault = false, p.preventGesture = false, p.stopPropagation = false;
              break;
          }
        }
        function w(g, p) {
          p.eventSource = g, p.eventPhase = p.originalEvent && typeof p.originalEvent.eventPhase < "u" ? p.originalEvent.eventPhase : 0, p.defaultPrevented = e.eventIsCanceled(p.originalEvent), p.shouldCapture = false, p.shouldReleaseCapture = false, p.userData = g.userData, d(g, p), g.preProcessEventHandler && g.preProcessEventHandler(p);
        }
        function C(g, p, _) {
          var b = g.getActivePointersListByType(p.type), k = b.getById(p.id);
          k ? _ && !k.captured ? (k.captured = true, b.captureCount++) : !_ && k.captured && (k.captured = false, b.captureCount--, b.captureCount < 0 && (b.captureCount = 0, e.console.warn("updatePointerCaptured() - pointsList.captureCount went negative"))) : e.console.warn("updatePointerCaptured() called on untracked pointer");
        }
        function A(g, p, _) {
          var b = g.getActivePointersListByType(_.type), k;
          k = b.getById(_.id), k ? (k.insideElement = true, k.lastPos = k.currentPos, k.lastTime = k.currentTime, k.currentPos = _.currentPos, k.currentTime = _.currentTime, _ = k) : (_.captured = false, _.insideElementPressed = false, _.insideElement = true, V(b, _)), g.enterHandler && g.enterHandler({ eventSource: g, pointerType: _.type, position: x(_.currentPos, g.element), buttons: b.buttons, pointers: g.getActivePointerCount(), insideElementPressed: _.insideElementPressed, buttonDownAny: b.buttons !== 0, isTouchEvent: _.type === "touch", originalEvent: p.originalEvent, userData: g.userData });
        }
        function O(g, p, _) {
          var b = g.getActivePointersListByType(_.type), k, G;
          k = b.getById(_.id), k ? (k.captured ? (k.insideElement = false, k.lastPos = k.currentPos, k.lastTime = k.currentTime, k.currentPos = _.currentPos, k.currentTime = _.currentTime) : N(g, b, k), _ = k) : (_.captured = false, _.insideElementPressed = false), (g.leaveHandler || g.exitHandler) && (G = { eventSource: g, pointerType: _.type, position: _.currentPos && x(_.currentPos, g.element), buttons: b.buttons, pointers: g.getActivePointerCount(), insideElementPressed: _.insideElementPressed, buttonDownAny: b.buttons !== 0, isTouchEvent: _.type === "touch", originalEvent: p.originalEvent, userData: g.userData }, g.leaveHandler && g.leaveHandler(G), g.exitHandler && g.exitHandler(G));
        }
        function B(g, p, _) {
          var b, k;
          b = g.getActivePointersListByType(_.type), k = b.getById(_.id), k ? _ = k : (_.captured = false, _.insideElementPressed = false), g.overHandler && g.overHandler({ eventSource: g, pointerType: _.type, position: x(_.currentPos, g.element), buttons: b.buttons, pointers: g.getActivePointerCount(), insideElementPressed: _.insideElementPressed, buttonDownAny: b.buttons !== 0, isTouchEvent: _.type === "touch", originalEvent: p.originalEvent, userData: g.userData });
        }
        function F(g, p, _) {
          var b, k;
          b = g.getActivePointersListByType(_.type), k = b.getById(_.id), k ? _ = k : (_.captured = false, _.insideElementPressed = false), g.outHandler && g.outHandler({ eventSource: g, pointerType: _.type, position: _.currentPos && x(_.currentPos, g.element), buttons: b.buttons, pointers: g.getActivePointerCount(), insideElementPressed: _.insideElementPressed, buttonDownAny: b.buttons !== 0, isTouchEvent: _.type === "touch", originalEvent: p.originalEvent, userData: g.userData });
        }
        function W(g, p, _, b) {
          var k = n[g.hash], G = g.getActivePointersListByType(_.type), J;
          if (typeof p.originalEvent.buttons < "u" ? G.buttons = p.originalEvent.buttons : b === 0 ? G.buttons |= 1 : b === 1 ? G.buttons |= 4 : b === 2 ? G.buttons |= 2 : b === 3 ? G.buttons |= 8 : b === 4 ? G.buttons |= 16 : b === 5 && (G.buttons |= 32), b !== 0) {
            p.shouldCapture = false, p.shouldReleaseCapture = false, g.nonPrimaryPressHandler && !p.preventGesture && !p.defaultPrevented && (p.preventDefault = true, g.nonPrimaryPressHandler({ eventSource: g, pointerType: _.type, position: x(_.currentPos, g.element), button: b, buttons: G.buttons, isTouchEvent: _.type === "touch", originalEvent: p.originalEvent, userData: g.userData }));
            return;
          }
          J = G.getById(_.id), J ? (J.insideElementPressed = true, J.insideElement = true, J.originalTarget = p.originalEvent.target, J.contactPos = _.currentPos, J.contactTime = _.currentTime, J.lastPos = J.currentPos, J.lastTime = J.currentTime, J.currentPos = _.currentPos, J.currentTime = _.currentTime, _ = J) : (_.captured = false, _.insideElementPressed = true, _.insideElement = true, _.originalTarget = p.originalEvent.target, V(G, _)), G.addContact(), !p.preventGesture && !p.defaultPrevented ? (p.shouldCapture = true, p.shouldReleaseCapture = false, p.preventDefault = true, (g.dragHandler || g.dragEndHandler || g.pinchHandler) && e.MouseTracker.gesturePointVelocityTracker.addPoint(g, _), G.contacts === 1 ? g.pressHandler && !p.preventGesture && g.pressHandler({ eventSource: g, pointerType: _.type, position: x(_.contactPos, g.element), buttons: G.buttons, isTouchEvent: _.type === "touch", originalEvent: p.originalEvent, userData: g.userData }) : G.contacts === 2 && g.pinchHandler && _.type === "touch" && (k.pinchGPoints = G.asArray(), k.lastPinchDist = k.currentPinchDist = k.pinchGPoints[0].currentPos.distanceTo(k.pinchGPoints[1].currentPos), k.lastPinchCenter = k.currentPinchCenter = E(k.pinchGPoints[0].currentPos, k.pinchGPoints[1].currentPos))) : (p.shouldCapture = false, p.shouldReleaseCapture = false);
        }
        function Z(g, p, _, b) {
          var k = n[g.hash], G = g.getActivePointersListByType(_.type), J, ve, re, He = false, Fe;
          if (typeof p.originalEvent.buttons < "u" ? G.buttons = p.originalEvent.buttons : b === 0 ? G.buttons ^= -2 : b === 1 ? G.buttons ^= -5 : b === 2 ? G.buttons ^= -3 : b === 3 ? G.buttons ^= -9 : b === 4 ? G.buttons ^= -17 : b === 5 && (G.buttons ^= -33), p.shouldCapture = false, b !== 0) {
            p.shouldReleaseCapture = false, g.nonPrimaryReleaseHandler && !p.preventGesture && !p.defaultPrevented && (p.preventDefault = true, g.nonPrimaryReleaseHandler({ eventSource: g, pointerType: _.type, position: x(_.currentPos, g.element), button: b, buttons: G.buttons, isTouchEvent: _.type === "touch", originalEvent: p.originalEvent, userData: g.userData }));
            return;
          }
          re = G.getById(_.id), re ? (G.removeContact(), re.captured && (He = true), re.lastPos = re.currentPos, re.lastTime = re.currentTime, re.currentPos = _.currentPos, re.currentTime = _.currentTime, re.insideElement || N(g, G, re), J = re.currentPos, ve = re.currentTime) : (_.captured = false, _.insideElementPressed = false, _.insideElement = true, V(G, _), re = _), !p.preventGesture && !p.defaultPrevented && (He ? (p.shouldReleaseCapture = true, p.preventDefault = true, (g.dragHandler || g.dragEndHandler || g.pinchHandler) && e.MouseTracker.gesturePointVelocityTracker.removePoint(g, re), G.contacts === 0 ? (g.releaseHandler && J && g.releaseHandler({ eventSource: g, pointerType: re.type, position: x(J, g.element), buttons: G.buttons, insideElementPressed: re.insideElementPressed, insideElementReleased: re.insideElement, isTouchEvent: re.type === "touch", originalEvent: p.originalEvent, userData: g.userData }), g.dragEndHandler && k.sentDragEvent && g.dragEndHandler({ eventSource: g, pointerType: re.type, position: x(re.currentPos, g.element), speed: re.speed, direction: re.direction, shift: p.originalEvent.shiftKey, isTouchEvent: re.type === "touch", originalEvent: p.originalEvent, userData: g.userData }), k.sentDragEvent = false, (g.clickHandler || g.dblClickHandler) && re.insideElement && (Fe = ve - re.contactTime <= g.clickTimeThreshold && re.contactPos.distanceTo(J) <= g.clickDistThreshold, g.clickHandler && g.clickHandler({ eventSource: g, pointerType: re.type, position: x(re.currentPos, g.element), quick: Fe, shift: p.originalEvent.shiftKey, isTouchEvent: re.type === "touch", originalEvent: p.originalEvent, originalTarget: re.originalTarget, userData: g.userData }), g.dblClickHandler && Fe && (G.clicks++, G.clicks === 1 ? (k.lastClickPos = J, k.dblClickTimeOut = setTimeout(function() {
            G.clicks = 0;
          }, g.dblClickTimeThreshold)) : G.clicks === 2 && (clearTimeout(k.dblClickTimeOut), G.clicks = 0, k.lastClickPos.distanceTo(J) <= g.dblClickDistThreshold && g.dblClickHandler({ eventSource: g, pointerType: re.type, position: x(re.currentPos, g.element), shift: p.originalEvent.shiftKey, isTouchEvent: re.type === "touch", originalEvent: p.originalEvent, userData: g.userData }), k.lastClickPos = null)))) : G.contacts === 2 && g.pinchHandler && re.type === "touch" && (k.pinchGPoints = G.asArray(), k.lastPinchDist = k.currentPinchDist = k.pinchGPoints[0].currentPos.distanceTo(k.pinchGPoints[1].currentPos), k.lastPinchCenter = k.currentPinchCenter = E(k.pinchGPoints[0].currentPos, k.pinchGPoints[1].currentPos))) : (p.shouldReleaseCapture = false, g.releaseHandler && J && (g.releaseHandler({ eventSource: g, pointerType: re.type, position: x(J, g.element), buttons: G.buttons, insideElementPressed: re.insideElementPressed, insideElementReleased: re.insideElement, isTouchEvent: re.type === "touch", originalEvent: p.originalEvent, userData: g.userData }), p.preventDefault = true)));
        }
        function ne(g, p, _) {
          var b = n[g.hash], k = g.getActivePointersListByType(_.type), G, J, ve;
          if (typeof p.originalEvent.buttons < "u" && (k.buttons = p.originalEvent.buttons), G = k.getById(_.id), G) G.lastPos = G.currentPos, G.lastTime = G.currentTime, G.currentPos = _.currentPos, G.currentTime = _.currentTime;
          else return;
          p.shouldCapture = false, p.shouldReleaseCapture = false, g.stopHandler && _.type === "mouse" && (clearTimeout(g.stopTimeOut), g.stopTimeOut = setTimeout(function() {
            ae(g, p.originalEvent, _.type);
          }, g.stopDelay)), k.contacts === 0 ? g.moveHandler && g.moveHandler({ eventSource: g, pointerType: _.type, position: x(_.currentPos, g.element), buttons: k.buttons, isTouchEvent: _.type === "touch", originalEvent: p.originalEvent, userData: g.userData }) : k.contacts === 1 ? (g.moveHandler && (G = k.asArray()[0], g.moveHandler({ eventSource: g, pointerType: G.type, position: x(G.currentPos, g.element), buttons: k.buttons, isTouchEvent: G.type === "touch", originalEvent: p.originalEvent, userData: g.userData })), g.dragHandler && !p.preventGesture && !p.defaultPrevented && (G = k.asArray()[0], ve = G.currentPos.minus(G.lastPos), g.dragHandler({ eventSource: g, pointerType: G.type, position: x(G.currentPos, g.element), buttons: k.buttons, delta: ve, speed: G.speed, direction: G.direction, shift: p.originalEvent.shiftKey, isTouchEvent: G.type === "touch", originalEvent: p.originalEvent, userData: g.userData }), p.preventDefault = true, b.sentDragEvent = true)) : k.contacts === 2 && (g.moveHandler && (J = k.asArray(), g.moveHandler({ eventSource: g, pointerType: J[0].type, position: x(E(J[0].currentPos, J[1].currentPos), g.element), buttons: k.buttons, isTouchEvent: J[0].type === "touch", originalEvent: p.originalEvent, userData: g.userData })), g.pinchHandler && _.type === "touch" && !p.preventGesture && !p.defaultPrevented && (ve = b.pinchGPoints[0].currentPos.distanceTo(b.pinchGPoints[1].currentPos), ve !== b.currentPinchDist && (b.lastPinchDist = b.currentPinchDist, b.currentPinchDist = ve, b.lastPinchCenter = b.currentPinchCenter, b.currentPinchCenter = E(b.pinchGPoints[0].currentPos, b.pinchGPoints[1].currentPos), g.pinchHandler({ eventSource: g, pointerType: "touch", gesturePoints: b.pinchGPoints, lastCenter: x(b.lastPinchCenter, g.element), center: x(b.currentPinchCenter, g.element), lastDistance: b.lastPinchDist, distance: b.currentPinchDist, shift: p.originalEvent.shiftKey, originalEvent: p.originalEvent, userData: g.userData }), p.preventDefault = true)));
        }
        function X(g, p, _) {
          var b = g.getActivePointersListByType(_.type), k;
          k = b.getById(_.id), k && N(g, b, k);
        }
        function ae(g, p, _) {
          g.stopHandler && g.stopHandler({ eventSource: g, pointerType: _, position: T(p, g.element), buttons: g.getActivePointersListByType(_).buttons, isTouchEvent: _ === "touch", originalEvent: p, userData: g.userData });
        }
      })(i), (function(e) {
        e.ControlAnchor = { NONE: 0, TOP_LEFT: 1, TOP_RIGHT: 2, BOTTOM_RIGHT: 3, BOTTOM_LEFT: 4, ABSOLUTE: 5 }, e.Control = function(n, r, s) {
          var o = n.parentNode;
          typeof r == "number" && (e.console.error("Passing an anchor directly into the OpenSeadragon.Control constructor is deprecated; please use an options object instead.  Support for this deprecated variant is scheduled for removal in December 2013"), r = { anchor: r }), r.attachToViewer = typeof r.attachToViewer > "u" ? true : r.attachToViewer, this.autoFade = typeof r.autoFade > "u" ? true : r.autoFade, this.element = n, this.anchor = r.anchor, this.container = s, this.anchor === e.ControlAnchor.ABSOLUTE ? (this.wrapper = e.makeNeutralElement("div"), this.wrapper.style.position = "absolute", this.wrapper.style.top = typeof r.top == "number" ? r.top + "px" : r.top, this.wrapper.style.left = typeof r.left == "number" ? r.left + "px" : r.left, this.wrapper.style.height = typeof r.height == "number" ? r.height + "px" : r.height, this.wrapper.style.width = typeof r.width == "number" ? r.width + "px" : r.width, this.wrapper.style.margin = "0px", this.wrapper.style.padding = "0px", this.element.style.position = "relative", this.element.style.top = "0px", this.element.style.left = "0px", this.element.style.height = "100%", this.element.style.width = "100%") : (this.wrapper = e.makeNeutralElement("div"), this.wrapper.style.display = "inline-block", this.anchor === e.ControlAnchor.NONE && (this.wrapper.style.width = this.wrapper.style.height = "100%")), this.wrapper.appendChild(this.element), r.attachToViewer ? this.anchor === e.ControlAnchor.TOP_RIGHT || this.anchor === e.ControlAnchor.BOTTOM_RIGHT ? this.container.insertBefore(this.wrapper, this.container.firstChild) : this.container.appendChild(this.wrapper) : o.appendChild(this.wrapper);
        }, e.Control.prototype = { destroy: function() {
          this.wrapper.removeChild(this.element), this.anchor !== e.ControlAnchor.NONE && this.container.removeChild(this.wrapper);
        }, isVisible: function() {
          return this.wrapper.style.display !== "none";
        }, setVisible: function(n) {
          this.wrapper.style.display = n ? this.anchor === e.ControlAnchor.ABSOLUTE ? "block" : "inline-block" : "none";
        }, setOpacity: function(n) {
          e.setElementOpacity(this.wrapper, n, true);
        } };
      })(i), (function(e) {
        e.ControlDock = function(r) {
          var s = ["topleft", "topright", "bottomright", "bottomleft"], o, l;
          for (e.extend(true, this, { id: "controldock-" + e.now() + "-" + Math.floor(Math.random() * 1e6), container: e.makeNeutralElement("div"), controls: [] }, r), this.container.onsubmit = function() {
            return false;
          }, this.element && (this.element = e.getElement(this.element), this.element.appendChild(this.container), e.getElementStyle(this.element).position === "static" && (this.element.style.position = "relative"), this.container.style.width = "100%", this.container.style.height = "100%"), l = 0; l < s.length; l++) o = s[l], this.controls[o] = e.makeNeutralElement("div"), this.controls[o].style.position = "absolute", o.match("left") && (this.controls[o].style.left = "0px"), o.match("right") && (this.controls[o].style.right = "0px"), o.match("top") && (this.controls[o].style.top = "0px"), o.match("bottom") && (this.controls[o].style.bottom = "0px");
          this.container.appendChild(this.controls.topleft), this.container.appendChild(this.controls.topright), this.container.appendChild(this.controls.bottomright), this.container.appendChild(this.controls.bottomleft);
        }, e.ControlDock.prototype = { addControl: function(r, s) {
          r = e.getElement(r);
          var o = null;
          if (!(n(this, r) >= 0)) {
            switch (s.anchor) {
              case e.ControlAnchor.TOP_RIGHT:
                o = this.controls.topright, r.style.position = "relative", r.style.paddingRight = "0px", r.style.paddingTop = "0px";
                break;
              case e.ControlAnchor.BOTTOM_RIGHT:
                o = this.controls.bottomright, r.style.position = "relative", r.style.paddingRight = "0px", r.style.paddingBottom = "0px";
                break;
              case e.ControlAnchor.BOTTOM_LEFT:
                o = this.controls.bottomleft, r.style.position = "relative", r.style.paddingLeft = "0px", r.style.paddingBottom = "0px";
                break;
              case e.ControlAnchor.TOP_LEFT:
                o = this.controls.topleft, r.style.position = "relative", r.style.paddingLeft = "0px", r.style.paddingTop = "0px";
                break;
              case e.ControlAnchor.ABSOLUTE:
                o = this.container, r.style.margin = "0px", r.style.padding = "0px";
                break;
              default:
              case e.ControlAnchor.NONE:
                o = this.container, r.style.margin = "0px", r.style.padding = "0px";
                break;
            }
            this.controls.push(new e.Control(r, s, o)), r.style.display = "inline-block";
          }
        }, removeControl: function(r) {
          r = e.getElement(r);
          var s = n(this, r);
          return s >= 0 && (this.controls[s].destroy(), this.controls.splice(s, 1)), this;
        }, clearControls: function() {
          for (; this.controls.length > 0; ) this.controls.pop().destroy();
          return this;
        }, areControlsEnabled: function() {
          var r;
          for (r = this.controls.length - 1; r >= 0; r--) if (this.controls[r].isVisible()) return true;
          return false;
        }, setControlsEnabled: function(r) {
          var s;
          for (s = this.controls.length - 1; s >= 0; s--) this.controls[s].setVisible(r);
          return this;
        } };
        function n(r, s) {
          var o = r.controls, l;
          for (l = o.length - 1; l >= 0; l--) if (o[l].element === s) return l;
          return -1;
        }
      })(i), (function(e) {
        e.Placement = e.freezeObject({ CENTER: 0, TOP_LEFT: 1, TOP: 2, TOP_RIGHT: 3, RIGHT: 4, BOTTOM_RIGHT: 5, BOTTOM: 6, BOTTOM_LEFT: 7, LEFT: 8, properties: { 0: { isLeft: false, isHorizontallyCentered: true, isRight: false, isTop: false, isVerticallyCentered: true, isBottom: false }, 1: { isLeft: true, isHorizontallyCentered: false, isRight: false, isTop: true, isVerticallyCentered: false, isBottom: false }, 2: { isLeft: false, isHorizontallyCentered: true, isRight: false, isTop: true, isVerticallyCentered: false, isBottom: false }, 3: { isLeft: false, isHorizontallyCentered: false, isRight: true, isTop: true, isVerticallyCentered: false, isBottom: false }, 4: { isLeft: false, isHorizontallyCentered: false, isRight: true, isTop: false, isVerticallyCentered: true, isBottom: false }, 5: { isLeft: false, isHorizontallyCentered: false, isRight: true, isTop: false, isVerticallyCentered: false, isBottom: true }, 6: { isLeft: false, isHorizontallyCentered: true, isRight: false, isTop: false, isVerticallyCentered: false, isBottom: true }, 7: { isLeft: true, isHorizontallyCentered: false, isRight: false, isTop: false, isVerticallyCentered: false, isBottom: true }, 8: { isLeft: true, isHorizontallyCentered: false, isRight: false, isTop: false, isVerticallyCentered: true, isBottom: false } } });
      })(i), (function(e) {
        var n = {}, r = 1;
        e.Viewer = function(d) {
          var w = arguments, C = this, A;
          e.isPlainObject(d) || (d = { id: w[0], xmlPath: w.length > 1 ? w[1] : void 0, prefixUrl: w.length > 2 ? w[2] : void 0, controls: w.length > 3 ? w[3] : void 0, overlays: w.length > 4 ? w[4] : void 0 }), d.config && (e.extend(true, d, d.config), delete d.config);
          let O = ["useCanvas"];
          if (d.drawerOptions = Object.assign({}, O.reduce((F, W) => (F[W] = d[W], delete d[W], F), {}), d.drawerOptions), e.extend(true, this, { id: d.id, hash: d.hash || r++, initialPage: 0, element: null, container: null, canvas: null, overlays: [], overlaysContainer: null, previousBody: [], customControls: [], source: null, drawer: null, world: null, viewport: null, navigator: null, collectionViewport: null, collectionDrawer: null, navImages: null, buttonGroup: null, profiler: null }, e.DEFAULT_SETTINGS, d), typeof this.hash > "u") throw new Error("A hash must be defined, either by specifying options.id or options.hash.");
          typeof n[this.hash] < "u" && e.console.warn("Hash " + this.hash + " has already been used."), n[this.hash] = { fsBoundsDelta: new e.Point(1, 1), prevContainerSize: null, animating: false, forceRedraw: false, needsResize: false, forceResize: false, mouseInside: false, group: null, zooming: false, zoomFactor: null, lastZoomTime: null, fullPage: false, onfullscreenchange: null, lastClickTime: null, draggingToZoom: false }, this._sequenceIndex = 0, this._firstOpen = true, this._updateRequestId = null, this._loadQueue = [], this.currentOverlays = [], this._updatePixelDensityRatioBind = null, this._lastScrollTime = e.now(), e.EventSource.call(this), this.addHandler("open-failed", function(F) {
            var W = e.getString("Errors.OpenFailed", F.eventSource, F.message);
            C._showMessage(W);
          }), e.ControlDock.call(this, d), this.xmlPath && (this.tileSources = [this.xmlPath]), this.element = this.element || document.getElementById(this.id), this.canvas = e.makeNeutralElement("div"), this.canvas.className = "openseadragon-canvas", (function(F) {
            F.width = "100%", F.height = "100%", F.overflow = "hidden", F.position = "absolute", F.top = "0px", F.left = "0px";
          })(this.canvas.style), e.setElementTouchActionNone(this.canvas), d.tabIndex !== "" && (this.canvas.tabIndex = d.tabIndex === void 0 ? 0 : d.tabIndex), this.container.className = "openseadragon-container", (function(F) {
            F.width = "100%", F.height = "100%", F.position = "relative", F.overflow = "hidden", F.left = "0px", F.top = "0px", F.textAlign = "left";
          })(this.container.style), e.setElementTouchActionNone(this.container), this.container.insertBefore(this.canvas, this.container.firstChild), this.element.appendChild(this.container), this.bodyWidth = document.body.style.width, this.bodyHeight = document.body.style.height, this.bodyOverflow = document.body.style.overflow, this.docOverflow = document.documentElement.style.overflow, this.innerTracker = new e.MouseTracker({ userData: "Viewer.innerTracker", element: this.canvas, startDisabled: !this.mouseNavEnabled, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, dblClickTimeThreshold: this.dblClickTimeThreshold, dblClickDistThreshold: this.dblClickDistThreshold, contextMenuHandler: e.delegate(this, T), keyDownHandler: e.delegate(this, x), keyHandler: e.delegate(this, E), clickHandler: e.delegate(this, M), dblClickHandler: e.delegate(this, L), dragHandler: e.delegate(this, U), dragEndHandler: e.delegate(this, K), enterHandler: e.delegate(this, q), leaveHandler: e.delegate(this, Y), pressHandler: e.delegate(this, te), releaseHandler: e.delegate(this, fe), nonPrimaryPressHandler: e.delegate(this, $), nonPrimaryReleaseHandler: e.delegate(this, j), scrollHandler: e.delegate(this, me), pinchHandler: e.delegate(this, ie), focusHandler: e.delegate(this, ce), blurHandler: e.delegate(this, ye) }), this.outerTracker = new e.MouseTracker({ userData: "Viewer.outerTracker", element: this.container, startDisabled: !this.mouseNavEnabled, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, dblClickTimeThreshold: this.dblClickTimeThreshold, dblClickDistThreshold: this.dblClickDistThreshold, enterHandler: e.delegate(this, pe), leaveHandler: e.delegate(this, oe) }), this.toolbar && (this.toolbar = new e.ControlDock({ element: this.toolbar })), this.bindStandardControls(), n[this.hash].prevContainerSize = s(this.container), window.ResizeObserver ? (this._autoResizePolling = false, this._resizeObserver = new ResizeObserver(function() {
            n[C.hash].needsResize = true;
          }), this._resizeObserver.observe(this.container, {})) : this._autoResizePolling = true, this.world = new e.World({ viewer: this }), this.world.addHandler("add-item", function(F) {
            C.source = C.world.getItemAt(0).source, n[C.hash].forceRedraw = true, C._updateRequestId || (C._updateRequestId = u(C, Ae));
          }), this.world.addHandler("remove-item", function(F) {
            C.world.getItemCount() ? C.source = C.world.getItemAt(0).source : C.source = null, n[C.hash].forceRedraw = true;
          }), this.world.addHandler("metrics-change", function(F) {
            C.viewport && C.viewport._setContentBounds(C.world.getHomeBounds(), C.world.getContentFactor());
          }), this.world.addHandler("item-index-change", function(F) {
            C.source = C.world.getItemAt(0).source;
          }), this.viewport = new e.Viewport({ containerSize: n[this.hash].prevContainerSize, springStiffness: this.springStiffness, animationTime: this.animationTime, minZoomImageRatio: this.minZoomImageRatio, maxZoomPixelRatio: this.maxZoomPixelRatio, visibilityRatio: this.visibilityRatio, wrapHorizontal: this.wrapHorizontal, wrapVertical: this.wrapVertical, defaultZoomLevel: this.defaultZoomLevel, minZoomLevel: this.minZoomLevel, maxZoomLevel: this.maxZoomLevel, viewer: this, degrees: this.degrees, flipped: this.flipped, overlayPreserveContentDirection: this.overlayPreserveContentDirection, navigatorRotate: this.navigatorRotate, homeFillsViewer: this.homeFillsViewer, margins: this.viewportMargins, silenceMultiImageWarnings: this.silenceMultiImageWarnings }), this.viewport._setContentBounds(this.world.getHomeBounds(), this.world.getContentFactor()), this.imageLoader = new e.ImageLoader({ jobLimit: this.imageLoaderLimit, timeout: d.timeout, tileRetryMax: this.tileRetryMax, tileRetryDelay: this.tileRetryDelay }), this.tileCache = new e.TileCache({ maxImageCacheCount: this.maxImageCacheCount }), Object.prototype.hasOwnProperty.call(this.drawerOptions, "useCanvas") && (e.console.error('useCanvas is deprecated, use the "drawer" option to indicate preferred drawer(s)'), this.drawerOptions.useCanvas || (this.drawer = e.HTMLDrawer), delete this.drawerOptions.useCanvas);
          let B = Array.isArray(this.drawer) ? this.drawer : [this.drawer];
          B.length === 0 && (B = [e.DEFAULT_SETTINGS.drawer].flat(), e.console.warn("No valid drawers were selected. Using the default value.")), this.drawer = null;
          for (const F of B) if (this.requestDrawer(F, { mainDrawer: true, redrawImmediately: false })) break;
          if (!this.drawer) throw e.console.error("No drawer could be created!"), "Error with creating the selected drawer(s)";
          for (this.drawer.setImageSmoothingEnabled(this.imageSmoothingEnabled), this.overlaysContainer = e.makeNeutralElement("div"), this.canvas.appendChild(this.overlaysContainer), this.drawer.canRotate() || (this.rotateLeft && (A = this.buttonGroup.buttons.indexOf(this.rotateLeft), this.buttonGroup.buttons.splice(A, 1), this.buttonGroup.element.removeChild(this.rotateLeft.element)), this.rotateRight && (A = this.buttonGroup.buttons.indexOf(this.rotateRight), this.buttonGroup.buttons.splice(A, 1), this.buttonGroup.element.removeChild(this.rotateRight.element))), this._addUpdatePixelDensityRatioEvent(), this.showNavigator && (this.navigator = new e.Navigator({ element: this.navigatorElement, id: this.navigatorId, position: this.navigatorPosition, sizeRatio: this.navigatorSizeRatio, maintainSizeRatio: this.navigatorMaintainSizeRatio, top: this.navigatorTop, left: this.navigatorLeft, width: this.navigatorWidth, height: this.navigatorHeight, autoResize: this.navigatorAutoResize, autoFade: this.navigatorAutoFade, prefixUrl: this.prefixUrl, viewer: this, navigatorRotate: this.navigatorRotate, background: this.navigatorBackground, opacity: this.navigatorOpacity, borderColor: this.navigatorBorderColor, displayRegionColor: this.navigatorDisplayRegionColor, crossOriginPolicy: this.crossOriginPolicy, animationTime: this.animationTime, drawer: this.drawer.getType(), loadTilesWithAjax: this.loadTilesWithAjax, ajaxHeaders: this.ajaxHeaders, ajaxWithCredentials: this.ajaxWithCredentials })), this.sequenceMode && this.bindSequenceControls(), this.tileSources && this.open(this.tileSources), A = 0; A < this.customControls.length; A++) this.addControl(this.customControls[A].id, { anchor: this.customControls[A].anchor });
          e.requestAnimationFrame(function() {
            h(C);
          }), e._viewers.set(this.element, this);
        }, e.extend(e.Viewer.prototype, e.EventSource.prototype, e.ControlDock.prototype, { isOpen: function() {
          return !!this.world.getItemCount();
        }, openDzi: function(d) {
          return e.console.error("[Viewer.openDzi] this function is deprecated; use Viewer.open() instead."), this.open(d);
        }, openTileSource: function(d) {
          return e.console.error("[Viewer.openTileSource] this function is deprecated; use Viewer.open() instead."), this.open(d);
        }, get buttons() {
          return e.console.warn("Viewer.buttons is deprecated; Please use Viewer.buttonGroup"), this.buttonGroup;
        }, open: function(d, w) {
          var C = this;
          if (this.close(), !d) return this;
          if (this.sequenceMode && e.isArray(d)) return this.referenceStrip && (this.referenceStrip.destroy(), this.referenceStrip = null), typeof w < "u" && !isNaN(w) && (this.initialPage = w), this.tileSources = d, this._sequenceIndex = Math.max(0, Math.min(this.tileSources.length - 1, this.initialPage)), this.tileSources.length && (this.open(this.tileSources[this._sequenceIndex]), this.showReferenceStrip && this.addReferenceStrip()), this._updateSequenceButtons(this._sequenceIndex), this;
          if (e.isArray(d) || (d = [d]), !d.length) return this;
          this._opening = true;
          for (var A = d.length, O = 0, B = 0, F, W = function() {
            if (O + B === A) if (O) {
              (C._firstOpen || !C.preserveViewport) && (C.viewport.goHome(true), C.viewport.update()), C._firstOpen = false;
              var X = d[0];
              if (X.tileSource && (X = X.tileSource), C.overlays && !C.preserveOverlays) for (var ae = 0; ae < C.overlays.length; ae++) C.currentOverlays[ae] = l(C, C.overlays[ae]);
              C._drawOverlays(), C._opening = false, C.raiseEvent("open", { source: X });
            } else C._opening = false, C.raiseEvent("open-failed", F);
          }, Z = function(X) {
            (!e.isPlainObject(X) || !X.tileSource) && (X = { tileSource: X }), X.index !== void 0 && (e.console.error("[Viewer.open] setting indexes here is not supported; use addTiledImage instead"), delete X.index), X.collectionImmediately === void 0 && (X.collectionImmediately = true);
            var ae = X.success;
            X.success = function(p) {
              if (O++, X.tileSource.overlays) for (var _ = 0; _ < X.tileSource.overlays.length; _++) C.addOverlay(X.tileSource.overlays[_]);
              ae && ae(p), W();
            };
            var g = X.error;
            X.error = function(p) {
              B++, F || (F = p), g && g(p), W();
            }, C.addTiledImage(X);
          }, ne = 0; ne < d.length; ne++) Z(d[ne]);
          return this;
        }, close: function() {
          return n[this.hash] ? (this._opening = false, this.navigator && this.navigator.close(), this.preserveOverlays || (this.clearOverlays(), this.overlaysContainer.innerHTML = ""), n[this.hash].animating = false, this.world.removeAll(), this.imageLoader.clear(), this.raiseEvent("close"), this) : this;
        }, destroy: function() {
          if (n[this.hash]) {
            if (this.raiseEvent("before-destroy"), this._removeUpdatePixelDensityRatioEvent(), this.close(), this.clearOverlays(), this.overlaysContainer.innerHTML = "", this._resizeObserver && this._resizeObserver.disconnect(), this.referenceStrip && (this.referenceStrip.destroy(), this.referenceStrip = null), this._updateRequestId !== null && (e.cancelAnimationFrame(this._updateRequestId), this._updateRequestId = null), this.drawer && this.drawer.destroy(), this.navigator && (this.navigator.destroy(), n[this.navigator.hash] = null, delete n[this.navigator.hash], this.navigator = null), this.buttonGroup) this.buttonGroup.destroy();
            else if (this.customButtons) for (; this.customButtons.length; ) this.customButtons.pop().destroy();
            if (this.paging && this.paging.destroy(), this.element) for (; this.element.firstChild; ) this.element.removeChild(this.element.firstChild);
            this.container.onsubmit = null, this.clearControls(), this.innerTracker && this.innerTracker.destroy(), this.outerTracker && this.outerTracker.destroy(), n[this.hash] = null, delete n[this.hash], this.canvas = null, this.container = null, e._viewers.delete(this.element), this.element = null, this.raiseEvent("destroy"), this.removeAllHandlers();
          }
        }, requestDrawer(d, w) {
          const C = { mainDrawer: true, redrawImmediately: true, drawerOptions: null };
          w = e.extend(true, C, w);
          const A = w.mainDrawer, O = w.redrawImmediately, B = w.drawerOptions, F = this.drawer;
          let W = null;
          if (d && d.prototype instanceof e.DrawerBase ? (W = d, d = "custom") : typeof d == "string" && (W = e.determineDrawer(d)), W || e.console.warn("Unsupported drawer! Drawer must be an existing string type, or a class that extends OpenSeadragon.DrawerBase."), W && W.isSupported()) {
            F && A && F.destroy();
            const Z = new W({ viewer: this, viewport: this.viewport, element: this.canvas, debugGridColor: this.debugGridColor, options: B || this.drawerOptions[d] });
            return A && (this.drawer = Z, O && this.forceRedraw()), Z;
          }
          return false;
        }, isMouseNavEnabled: function() {
          return this.innerTracker.isTracking();
        }, setMouseNavEnabled: function(d) {
          return this.innerTracker.setTracking(d), this.outerTracker.setTracking(d), this.raiseEvent("mouse-enabled", { enabled: d }), this;
        }, areControlsEnabled: function() {
          var d = this.controls.length, w;
          for (w = 0; w < this.controls.length; w++) d = d && this.controls[w].isVisible();
          return d;
        }, setControlsEnabled: function(d) {
          return d ? m(this) : h(this), this.raiseEvent("controls-enabled", { enabled: d }), this;
        }, setDebugMode: function(d) {
          for (var w = 0; w < this.world.getItemCount(); w++) this.world.getItemAt(w).debugMode = d;
          this.debugMode = d, this.forceRedraw();
        }, setAjaxHeaders: function(d, w) {
          if (d === null && (d = {}), !e.isPlainObject(d)) {
            console.error("[Viewer.setAjaxHeaders] Ignoring invalid headers, must be a plain object");
            return;
          }
          if (w === void 0 && (w = true), this.ajaxHeaders = d, w) {
            for (var C = 0; C < this.world.getItemCount(); C++) this.world.getItemAt(C)._updateAjaxHeaders(true);
            if (this.navigator && this.navigator.setAjaxHeaders(this.ajaxHeaders, true), this.referenceStrip && this.referenceStrip.miniViewers) for (var A in this.referenceStrip.miniViewers) this.referenceStrip.miniViewers[A].setAjaxHeaders(this.ajaxHeaders, true);
          }
        }, addButton: function(d) {
          this.buttonGroup.addButton(d);
        }, isFullPage: function() {
          return n[this.hash] && n[this.hash].fullPage;
        }, setFullPage: function(d) {
          var w = document.body, C = w.style, A = document.documentElement.style, O = this, B, F;
          if (d === this.isFullPage()) return this;
          var W = { fullPage: d, preventDefaultAction: false };
          if (this.raiseEvent("pre-full-page", W), W.preventDefaultAction) return this;
          if (d && this.element) {
            for (this.elementSize = e.getElementSize(this.element), this.pageScroll = e.getPageScroll(), this.elementMargin = this.element.style.margin, this.element.style.margin = "0", this.elementPadding = this.element.style.padding, this.element.style.padding = "0", this.bodyMargin = C.margin, this.docMargin = A.margin, C.margin = "0", A.margin = "0", this.bodyPadding = C.padding, this.docPadding = A.padding, C.padding = "0", A.padding = "0", this.bodyWidth = C.width, this.docWidth = A.width, C.width = "100%", A.width = "100%", this.bodyHeight = C.height, this.docHeight = A.height, C.height = "100%", A.height = "100%", this.bodyDisplay = C.display, C.display = "block", this.previousBody = [], n[this.hash].prevElementParent = this.element.parentNode, n[this.hash].prevNextSibling = this.element.nextSibling, n[this.hash].prevElementWidth = this.element.style.width, n[this.hash].prevElementHeight = this.element.style.height, B = w.childNodes.length, F = 0; F < B; F++) this.previousBody.push(w.childNodes[0]), w.removeChild(w.childNodes[0]);
            this.toolbar && this.toolbar.element && (this.toolbar.parentNode = this.toolbar.element.parentNode, this.toolbar.nextSibling = this.toolbar.element.nextSibling, w.appendChild(this.toolbar.element), e.addClass(this.toolbar.element, "fullpage")), e.addClass(this.element, "fullpage"), w.appendChild(this.element), this.element.style.height = "100vh", this.element.style.width = "100vw", this.toolbar && this.toolbar.element && (this.element.style.height = e.getElementSize(this.element).y - e.getElementSize(this.toolbar.element).y + "px"), n[this.hash].fullPage = true, e.delegate(this, pe)({});
          } else {
            for (this.element.style.margin = this.elementMargin, this.element.style.padding = this.elementPadding, C.margin = this.bodyMargin, A.margin = this.docMargin, C.padding = this.bodyPadding, A.padding = this.docPadding, C.width = this.bodyWidth, A.width = this.docWidth, C.height = this.bodyHeight, A.height = this.docHeight, C.display = this.bodyDisplay, w.removeChild(this.element), B = this.previousBody.length, F = 0; F < B; F++) w.appendChild(this.previousBody.shift());
            e.removeClass(this.element, "fullpage"), n[this.hash].prevElementParent.insertBefore(this.element, n[this.hash].prevNextSibling), this.toolbar && this.toolbar.element && (w.removeChild(this.toolbar.element), e.removeClass(this.toolbar.element, "fullpage"), this.toolbar.parentNode.insertBefore(this.toolbar.element, this.toolbar.nextSibling), delete this.toolbar.parentNode, delete this.toolbar.nextSibling), this.element.style.width = n[this.hash].prevElementWidth, this.element.style.height = n[this.hash].prevElementHeight;
            var Z = 0, ne = function() {
              e.setPageScroll(O.pageScroll);
              var X = e.getPageScroll();
              Z++, Z < 10 && (X.x !== O.pageScroll.x || X.y !== O.pageScroll.y) && e.requestAnimationFrame(ne);
            };
            e.requestAnimationFrame(ne), n[this.hash].fullPage = false, e.delegate(this, oe)({});
          }
          return this.navigator && this.viewport && this.navigator.update(this.viewport), this.raiseEvent("full-page", { fullPage: d }), this;
        }, setFullScreen: function(d) {
          var w = this;
          if (!e.supportsFullScreen) return this.setFullPage(d);
          if (e.isFullScreen() === d) return this;
          var C = { fullScreen: d, preventDefaultAction: false };
          if (this.raiseEvent("pre-full-screen", C), C.preventDefaultAction) return this;
          if (d) {
            if (this.setFullPage(true), !this.isFullPage()) return this;
            this.fullPageStyleWidth = this.element.style.width, this.fullPageStyleHeight = this.element.style.height, this.element.style.width = "100%", this.element.style.height = "100%";
            var A = function() {
              var O = e.isFullScreen();
              O || (e.removeEvent(document, e.fullScreenEventName, A), e.removeEvent(document, e.fullScreenErrorEventName, A), w.setFullPage(false), w.isFullPage() && (w.element.style.width = w.fullPageStyleWidth, w.element.style.height = w.fullPageStyleHeight)), w.navigator && w.viewport && setTimeout(function() {
                w.navigator.update(w.viewport);
              }), w.raiseEvent("full-screen", { fullScreen: O });
            };
            e.addEvent(document, e.fullScreenEventName, A), e.addEvent(document, e.fullScreenErrorEventName, A), e.requestFullScreen(document.body);
          } else e.exitFullScreen();
          return this;
        }, isVisible: function() {
          return this.container.style.visibility !== "hidden";
        }, isFullScreen: function() {
          return e.isFullScreen() && this.isFullPage();
        }, setVisible: function(d) {
          return this.container.style.visibility = d ? "" : "hidden", this.raiseEvent("visible", { visible: d }), this;
        }, addTiledImage: function(d) {
          e.console.assert(d, "[Viewer.addTiledImage] options is required"), e.console.assert(d.tileSource, "[Viewer.addTiledImage] options.tileSource is required"), e.console.assert(!d.replace || d.index > -1 && d.index < this.world.getItemCount(), "[Viewer.addTiledImage] if options.replace is used, options.index must be a valid index in Viewer.world");
          var w = this;
          d.replace && (d.replaceItem = w.world.getItemAt(d.index)), this._hideMessage(), d.placeholderFillStyle === void 0 && (d.placeholderFillStyle = this.placeholderFillStyle), d.opacity === void 0 && (d.opacity = this.opacity), d.preload === void 0 && (d.preload = this.preload), d.compositeOperation === void 0 && (d.compositeOperation = this.compositeOperation), d.crossOriginPolicy === void 0 && (d.crossOriginPolicy = d.tileSource.crossOriginPolicy !== void 0 ? d.tileSource.crossOriginPolicy : this.crossOriginPolicy), d.ajaxWithCredentials === void 0 && (d.ajaxWithCredentials = this.ajaxWithCredentials), d.loadTilesWithAjax === void 0 && (d.loadTilesWithAjax = this.loadTilesWithAjax), e.isPlainObject(d.ajaxHeaders) || (d.ajaxHeaders = {});
          var C = { options: d };
          function A(F) {
            for (var W = 0; W < w._loadQueue.length; W++) if (w._loadQueue[W] === C) {
              w._loadQueue.splice(W, 1);
              break;
            }
            w._loadQueue.length === 0 && O(C), w.raiseEvent("add-item-failed", F), d.error && d.error(F);
          }
          function O(F) {
            w.collectionMode && (w.world.arrange({ immediately: F.options.collectionImmediately, rows: w.collectionRows, columns: w.collectionColumns, layout: w.collectionLayout, tileSize: w.collectionTileSize, tileMargin: w.collectionTileMargin }), w.world.setAutoRefigureSizes(true));
          }
          if (e.isArray(d.tileSource)) {
            setTimeout(function() {
              A({ message: "[Viewer.addTiledImage] Sequences can not be added; add them one at a time instead.", source: d.tileSource, options: d });
            });
            return;
          }
          this._loadQueue.push(C);
          function B() {
            for (var F, W, Z; w._loadQueue.length && (F = w._loadQueue[0], !!F.tileSource); ) {
              if (w._loadQueue.splice(0, 1), F.options.replace) {
                var ne = w.world.getIndexOfItem(F.options.replaceItem);
                ne !== -1 && (F.options.index = ne), w.world.removeItem(F.options.replaceItem);
              }
              W = new e.TiledImage({ viewer: w, source: F.tileSource, viewport: w.viewport, drawer: w.drawer, tileCache: w.tileCache, imageLoader: w.imageLoader, x: F.options.x, y: F.options.y, width: F.options.width, height: F.options.height, fitBounds: F.options.fitBounds, fitBoundsPlacement: F.options.fitBoundsPlacement, clip: F.options.clip, placeholderFillStyle: F.options.placeholderFillStyle, opacity: F.options.opacity, preload: F.options.preload, degrees: F.options.degrees, flipped: F.options.flipped, compositeOperation: F.options.compositeOperation, springStiffness: w.springStiffness, animationTime: w.animationTime, minZoomImageRatio: w.minZoomImageRatio, wrapHorizontal: w.wrapHorizontal, wrapVertical: w.wrapVertical, maxTilesPerFrame: w.maxTilesPerFrame, immediateRender: w.immediateRender, blendTime: w.blendTime, alwaysBlend: w.alwaysBlend, minPixelRatio: w.minPixelRatio, smoothTileEdgesMinZoom: w.smoothTileEdgesMinZoom, iOSDevice: w.iOSDevice, crossOriginPolicy: F.options.crossOriginPolicy, ajaxWithCredentials: F.options.ajaxWithCredentials, loadTilesWithAjax: F.options.loadTilesWithAjax, ajaxHeaders: F.options.ajaxHeaders, debugMode: w.debugMode, subPixelRoundingForTransparency: w.subPixelRoundingForTransparency }), w.collectionMode && w.world.setAutoRefigureSizes(false), w.navigator && (Z = e.extend({}, F.options, { replace: false, originalTiledImage: W, tileSource: F.tileSource }), w.navigator.addTiledImage(Z)), w.world.addItem(W, { index: F.options.index }), w._loadQueue.length === 0 && O(F), w.world.getItemCount() === 1 && !w.preserveViewport && w.viewport.goHome(true), F.options.success && F.options.success({ item: W });
            }
          }
          o(this, d.tileSource, d, function(F) {
            C.tileSource = F, B();
          }, function(F) {
            F.options = d, A(F), B();
          });
        }, addSimpleImage: function(d) {
          e.console.assert(d, "[Viewer.addSimpleImage] options is required"), e.console.assert(d.url, "[Viewer.addSimpleImage] options.url is required");
          var w = e.extend({}, d, { tileSource: { type: "image", url: d.url } });
          delete w.url, this.addTiledImage(w);
        }, addLayer: function(d) {
          var w = this;
          e.console.error("[Viewer.addLayer] this function is deprecated; use Viewer.addTiledImage() instead.");
          var C = e.extend({}, d, { success: function(A) {
            w.raiseEvent("add-layer", { options: d, drawer: A.item });
          }, error: function(A) {
            w.raiseEvent("add-layer-failed", A);
          } });
          return this.addTiledImage(C), this;
        }, getLayerAtLevel: function(d) {
          return e.console.error("[Viewer.getLayerAtLevel] this function is deprecated; use World.getItemAt() instead."), this.world.getItemAt(d);
        }, getLevelOfLayer: function(d) {
          return e.console.error("[Viewer.getLevelOfLayer] this function is deprecated; use World.getIndexOfItem() instead."), this.world.getIndexOfItem(d);
        }, getLayersCount: function() {
          return e.console.error("[Viewer.getLayersCount] this function is deprecated; use World.getItemCount() instead."), this.world.getItemCount();
        }, setLayerLevel: function(d, w) {
          return e.console.error("[Viewer.setLayerLevel] this function is deprecated; use World.setItemIndex() instead."), this.world.setItemIndex(d, w);
        }, removeLayer: function(d) {
          return e.console.error("[Viewer.removeLayer] this function is deprecated; use World.removeItem() instead."), this.world.removeItem(d);
        }, forceRedraw: function() {
          return n[this.hash].forceRedraw = true, this;
        }, forceResize: function() {
          n[this.hash].needsResize = true, n[this.hash].forceResize = true;
        }, bindSequenceControls: function() {
          var d = e.delegate(this, v), w = e.delegate(this, y), C = e.delegate(this, this.goToNextPage), A = e.delegate(this, this.goToPreviousPage), O = this.navImages, B = true;
          return this.showSequenceControl && ((this.previousButton || this.nextButton) && (B = false), this.previousButton = new e.Button({ element: this.previousButton ? e.getElement(this.previousButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.PreviousPage"), srcRest: ge(this.prefixUrl, O.previous.REST), srcGroup: ge(this.prefixUrl, O.previous.GROUP), srcHover: ge(this.prefixUrl, O.previous.HOVER), srcDown: ge(this.prefixUrl, O.previous.DOWN), onRelease: A, onFocus: d, onBlur: w }), this.nextButton = new e.Button({ element: this.nextButton ? e.getElement(this.nextButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.NextPage"), srcRest: ge(this.prefixUrl, O.next.REST), srcGroup: ge(this.prefixUrl, O.next.GROUP), srcHover: ge(this.prefixUrl, O.next.HOVER), srcDown: ge(this.prefixUrl, O.next.DOWN), onRelease: C, onFocus: d, onBlur: w }), this.navPrevNextWrap || this.previousButton.disable(), (!this.tileSources || !this.tileSources.length) && this.nextButton.disable(), B && (this.paging = new e.ButtonGroup({ buttons: [this.previousButton, this.nextButton], clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold }), this.pagingControl = this.paging.element, this.toolbar ? this.toolbar.addControl(this.pagingControl, { anchor: e.ControlAnchor.BOTTOM_RIGHT }) : this.addControl(this.pagingControl, { anchor: this.sequenceControlAnchor || e.ControlAnchor.TOP_LEFT }))), this;
        }, bindStandardControls: function() {
          var d = e.delegate(this, Wt), w = e.delegate(this, ot), C = e.delegate(this, Gt), A = e.delegate(this, jt), O = e.delegate(this, at), B = e.delegate(this, P), F = e.delegate(this, I), W = e.delegate(this, H), Z = e.delegate(this, V), ne = e.delegate(this, N), X = e.delegate(this, v), ae = e.delegate(this, y), g = this.navImages, p = [], _ = true;
          return this.showNavigationControl && ((this.zoomInButton || this.zoomOutButton || this.homeButton || this.fullPageButton || this.rotateLeftButton || this.rotateRightButton || this.flipButton) && (_ = false), this.showZoomControl && (p.push(this.zoomInButton = new e.Button({ element: this.zoomInButton ? e.getElement(this.zoomInButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.ZoomIn"), srcRest: ge(this.prefixUrl, g.zoomIn.REST), srcGroup: ge(this.prefixUrl, g.zoomIn.GROUP), srcHover: ge(this.prefixUrl, g.zoomIn.HOVER), srcDown: ge(this.prefixUrl, g.zoomIn.DOWN), onPress: d, onRelease: w, onClick: C, onEnter: d, onExit: w, onFocus: X, onBlur: ae })), p.push(this.zoomOutButton = new e.Button({ element: this.zoomOutButton ? e.getElement(this.zoomOutButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.ZoomOut"), srcRest: ge(this.prefixUrl, g.zoomOut.REST), srcGroup: ge(this.prefixUrl, g.zoomOut.GROUP), srcHover: ge(this.prefixUrl, g.zoomOut.HOVER), srcDown: ge(this.prefixUrl, g.zoomOut.DOWN), onPress: A, onRelease: w, onClick: O, onEnter: A, onExit: w, onFocus: X, onBlur: ae }))), this.showHomeControl && p.push(this.homeButton = new e.Button({ element: this.homeButton ? e.getElement(this.homeButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.Home"), srcRest: ge(this.prefixUrl, g.home.REST), srcGroup: ge(this.prefixUrl, g.home.GROUP), srcHover: ge(this.prefixUrl, g.home.HOVER), srcDown: ge(this.prefixUrl, g.home.DOWN), onRelease: B, onFocus: X, onBlur: ae })), this.showFullPageControl && p.push(this.fullPageButton = new e.Button({ element: this.fullPageButton ? e.getElement(this.fullPageButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.FullPage"), srcRest: ge(this.prefixUrl, g.fullpage.REST), srcGroup: ge(this.prefixUrl, g.fullpage.GROUP), srcHover: ge(this.prefixUrl, g.fullpage.HOVER), srcDown: ge(this.prefixUrl, g.fullpage.DOWN), onRelease: F, onFocus: X, onBlur: ae })), this.showRotationControl && (p.push(this.rotateLeftButton = new e.Button({ element: this.rotateLeftButton ? e.getElement(this.rotateLeftButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.RotateLeft"), srcRest: ge(this.prefixUrl, g.rotateleft.REST), srcGroup: ge(this.prefixUrl, g.rotateleft.GROUP), srcHover: ge(this.prefixUrl, g.rotateleft.HOVER), srcDown: ge(this.prefixUrl, g.rotateleft.DOWN), onRelease: W, onFocus: X, onBlur: ae })), p.push(this.rotateRightButton = new e.Button({ element: this.rotateRightButton ? e.getElement(this.rotateRightButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.RotateRight"), srcRest: ge(this.prefixUrl, g.rotateright.REST), srcGroup: ge(this.prefixUrl, g.rotateright.GROUP), srcHover: ge(this.prefixUrl, g.rotateright.HOVER), srcDown: ge(this.prefixUrl, g.rotateright.DOWN), onRelease: Z, onFocus: X, onBlur: ae }))), this.showFlipControl && p.push(this.flipButton = new e.Button({ element: this.flipButton ? e.getElement(this.flipButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.Flip"), srcRest: ge(this.prefixUrl, g.flip.REST), srcGroup: ge(this.prefixUrl, g.flip.GROUP), srcHover: ge(this.prefixUrl, g.flip.HOVER), srcDown: ge(this.prefixUrl, g.flip.DOWN), onRelease: ne, onFocus: X, onBlur: ae })), _ ? (this.buttonGroup = new e.ButtonGroup({ buttons: p, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold }), this.navControl = this.buttonGroup.element, this.addHandler("open", e.delegate(this, si)), this.toolbar ? this.toolbar.addControl(this.navControl, { anchor: this.navigationControlAnchor || e.ControlAnchor.TOP_LEFT }) : this.addControl(this.navControl, { anchor: this.navigationControlAnchor || e.ControlAnchor.TOP_LEFT })) : this.customButtons = p), this;
        }, currentPage: function() {
          return this._sequenceIndex;
        }, goToPage: function(d) {
          return this.tileSources && d >= 0 && d < this.tileSources.length && (this._sequenceIndex = d, this._updateSequenceButtons(d), this.open(this.tileSources[d]), this.referenceStrip && this.referenceStrip.setFocus(d), this.raiseEvent("page", { page: d })), this;
        }, addOverlay: function(d, w, C, A) {
          var O;
          if (e.isPlainObject(d) ? O = d : O = { element: d, location: w, placement: C, onDraw: A }, d = e.getElement(O.element), a(this.currentOverlays, d) >= 0) return this;
          var B = l(this, O);
          return this.currentOverlays.push(B), B.drawHTML(this.overlaysContainer, this.viewport), this.raiseEvent("add-overlay", { element: d, location: O.location, placement: O.placement }), this;
        }, updateOverlay: function(d, w, C) {
          var A;
          return d = e.getElement(d), A = a(this.currentOverlays, d), A >= 0 && (this.currentOverlays[A].update(w, C), n[this.hash].forceRedraw = true, this.raiseEvent("update-overlay", { element: d, location: w, placement: C })), this;
        }, removeOverlay: function(d) {
          var w;
          return d = e.getElement(d), w = a(this.currentOverlays, d), w >= 0 && (this.currentOverlays[w].destroy(), this.currentOverlays.splice(w, 1), n[this.hash].forceRedraw = true, this.raiseEvent("remove-overlay", { element: d })), this;
        }, clearOverlays: function() {
          for (; this.currentOverlays.length > 0; ) this.currentOverlays.pop().destroy();
          return n[this.hash].forceRedraw = true, this.raiseEvent("clear-overlay", {}), this;
        }, getOverlayById: function(d) {
          var w;
          return d = e.getElement(d), w = a(this.currentOverlays, d), w >= 0 ? this.currentOverlays[w] : null;
        }, _updateSequenceButtons: function(d) {
          this.nextButton && (!this.tileSources || this.tileSources.length - 1 === d ? this.navPrevNextWrap || this.nextButton.disable() : this.nextButton.enable()), this.previousButton && (d > 0 ? this.previousButton.enable() : this.navPrevNextWrap || this.previousButton.disable());
        }, _showMessage: function(d) {
          this._hideMessage();
          var w = e.makeNeutralElement("div");
          w.appendChild(document.createTextNode(d)), this.messageDiv = e.makeCenteredNode(w), e.addClass(this.messageDiv, "openseadragon-message"), this.container.appendChild(this.messageDiv);
        }, _hideMessage: function() {
          var d = this.messageDiv;
          d && (d.parentNode.removeChild(d), delete this.messageDiv);
        }, gestureSettingsByDeviceType: function(d) {
          switch (d) {
            case "mouse":
              return this.gestureSettingsMouse;
            case "touch":
              return this.gestureSettingsTouch;
            case "pen":
              return this.gestureSettingsPen;
            default:
              return this.gestureSettingsUnknown;
          }
        }, _drawOverlays: function() {
          var d, w = this.currentOverlays.length;
          for (d = 0; d < w; d++) this.currentOverlays[d].drawHTML(this.overlaysContainer, this.viewport);
        }, _cancelPendingImages: function() {
          this._loadQueue = [];
        }, removeReferenceStrip: function() {
          this.showReferenceStrip = false, this.referenceStrip && (this.referenceStrip.destroy(), this.referenceStrip = null);
        }, addReferenceStrip: function() {
          if (this.showReferenceStrip = true, this.sequenceMode) {
            if (this.referenceStrip) return;
            this.tileSources.length && this.tileSources.length > 1 && (this.referenceStrip = new e.ReferenceStrip({ id: this.referenceStripElement, position: this.referenceStripPosition, sizeRatio: this.referenceStripSizeRatio, scroll: this.referenceStripScroll, height: this.referenceStripHeight, width: this.referenceStripWidth, tileSources: this.tileSources, prefixUrl: this.prefixUrl, viewer: this }), this.referenceStrip.setFocus(this._sequenceIndex));
          } else e.console.warn('Attempting to display a reference strip while "sequenceMode" is off.');
        }, _addUpdatePixelDensityRatioEvent: function() {
          this._updatePixelDensityRatioBind = this._updatePixelDensityRatio.bind(this), e.addEvent(window, "resize", this._updatePixelDensityRatioBind);
        }, _removeUpdatePixelDensityRatioEvent: function() {
          e.removeEvent(window, "resize", this._updatePixelDensityRatioBind);
        }, _updatePixelDensityRatio: function() {
          var d = e.pixelDensityRatio, w = e.getCurrentPixelDensityRatio();
          d !== w && (e.pixelDensityRatio = w, this.forceResize());
        }, goToPreviousPage: function() {
          var d = this._sequenceIndex - 1;
          this.navPrevNextWrap && d < 0 && (d += this.tileSources.length), this.goToPage(d);
        }, goToNextPage: function() {
          var d = this._sequenceIndex + 1;
          this.navPrevNextWrap && d >= this.tileSources.length && (d = 0), this.goToPage(d);
        }, isAnimating: function() {
          return n[this.hash].animating;
        } });
        function s(d) {
          return d = e.getElement(d), new e.Point(d.clientWidth === 0 ? 1 : d.clientWidth, d.clientHeight === 0 ? 1 : d.clientHeight);
        }
        function o(d, w, C, A, O) {
          var B = d;
          if (e.type(w) === "string") {
            if (w.match(/^\s*<.*>\s*$/)) w = e.parseXml(w);
            else if (w.match(/^\s*[{[].*[}\]]\s*$/)) try {
              var F = e.parseJSON(w);
              w = F;
            } catch {
            }
          }
          function W(Z, ne) {
            Z.ready ? A(Z) : (Z.addHandler("ready", function() {
              A(Z);
            }), Z.addHandler("open-failed", function(X) {
              O({ message: X.message, source: ne });
            }));
          }
          setTimeout(function() {
            if (e.type(w) === "string") w = new e.TileSource({ url: w, crossOriginPolicy: C.crossOriginPolicy !== void 0 ? C.crossOriginPolicy : d.crossOriginPolicy, ajaxWithCredentials: d.ajaxWithCredentials, ajaxHeaders: C.ajaxHeaders ? C.ajaxHeaders : d.ajaxHeaders, splitHashDataForPost: d.splitHashDataForPost, success: function(ae) {
              A(ae.tileSource);
            } }), w.addHandler("open-failed", function(ae) {
              O(ae);
            });
            else if (e.isPlainObject(w) || w.nodeType) if (w.crossOriginPolicy === void 0 && (C.crossOriginPolicy !== void 0 || d.crossOriginPolicy !== void 0) && (w.crossOriginPolicy = C.crossOriginPolicy !== void 0 ? C.crossOriginPolicy : d.crossOriginPolicy), w.ajaxWithCredentials === void 0 && (w.ajaxWithCredentials = d.ajaxWithCredentials), e.isFunction(w.getTileUrl)) {
              var Z = new e.TileSource(w);
              Z.getTileUrl = w.getTileUrl, A(Z);
            } else {
              var ne = e.TileSource.determineType(B, w);
              if (!ne) {
                O({ message: "Unable to load TileSource", source: w });
                return;
              }
              var X = ne.prototype.configure.apply(B, [w]);
              W(new ne(X), w);
            }
            else W(w, w);
          });
        }
        function l(d, w) {
          if (w instanceof e.Overlay) return w;
          var C = null;
          if (w.element) C = e.getElement(w.element);
          else {
            var A = w.id ? w.id : "openseadragon-overlay-" + Math.floor(Math.random() * 1e7);
            C = e.getElement(w.id), C || (C = document.createElement("a"), C.href = "#/overlay/" + A), C.id = A, e.addClass(C, w.className ? w.className : "openseadragon-overlay");
          }
          var O = w.location, B = w.width, F = w.height;
          if (!O) {
            var W = w.x, Z = w.y;
            if (w.px !== void 0) {
              var ne = d.viewport.imageToViewportRectangle(new e.Rect(w.px, w.py, B || 0, F || 0));
              W = ne.x, Z = ne.y, B = B !== void 0 ? ne.width : void 0, F = F !== void 0 ? ne.height : void 0;
            }
            O = new e.Point(W, Z);
          }
          var X = w.placement;
          return X && e.type(X) === "string" && (X = e.Placement[w.placement.toUpperCase()]), new e.Overlay({ element: C, location: O, placement: X, onDraw: w.onDraw, checkResize: w.checkResize, width: B, height: F, rotationMode: w.rotationMode });
        }
        function a(d, w) {
          var C;
          for (C = d.length - 1; C >= 0; C--) if (d[C].element === w) return C;
          return -1;
        }
        function u(d, w) {
          return e.requestAnimationFrame(function() {
            w(d);
          });
        }
        function c(d) {
          e.requestAnimationFrame(function() {
            f(d);
          });
        }
        function h(d) {
          d.autoHideControls && (d.controlsShouldFade = true, d.controlsFadeBeginTime = e.now() + d.controlsFadeDelay, window.setTimeout(function() {
            c(d);
          }, d.controlsFadeDelay));
        }
        function f(d) {
          var w, C, A, O;
          if (d.controlsShouldFade) {
            for (w = e.now(), C = w - d.controlsFadeBeginTime, A = 1 - C / d.controlsFadeLength, A = Math.min(1, A), A = Math.max(0, A), O = d.controls.length - 1; O >= 0; O--) d.controls[O].autoFade && d.controls[O].setOpacity(A);
            A > 0 && c(d);
          }
        }
        function m(d) {
          var w;
          for (d.controlsShouldFade = false, w = d.controls.length - 1; w >= 0; w--) d.controls[w].setOpacity(1);
        }
        function v() {
          m(this);
        }
        function y() {
          h(this);
        }
        function T(d) {
          var w = { tracker: d.eventSource, position: d.position, originalEvent: d.originalEvent, preventDefault: d.preventDefault };
          this.raiseEvent("canvas-contextmenu", w), d.preventDefault = w.preventDefault;
        }
        function x(d) {
          var w = { originalEvent: d.originalEvent, preventDefaultAction: false, preventVerticalPan: d.preventVerticalPan || !this.panVertical, preventHorizontalPan: d.preventHorizontalPan || !this.panHorizontal };
          if (this.raiseEvent("canvas-key", w), !w.preventDefaultAction && !d.ctrl && !d.alt && !d.meta) switch (d.keyCode) {
            case 38:
              w.preventVerticalPan || (d.shift ? this.viewport.zoomBy(1.1) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, -this.pixelsPerArrowPress))), this.viewport.applyConstraints()), d.preventDefault = true;
              break;
            case 40:
              w.preventVerticalPan || (d.shift ? this.viewport.zoomBy(0.9) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, this.pixelsPerArrowPress))), this.viewport.applyConstraints()), d.preventDefault = true;
              break;
            case 37:
              w.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(-this.pixelsPerArrowPress, 0))), this.viewport.applyConstraints()), d.preventDefault = true;
              break;
            case 39:
              w.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(this.pixelsPerArrowPress, 0))), this.viewport.applyConstraints()), d.preventDefault = true;
              break;
            case 187:
              this.viewport.zoomBy(1.1), this.viewport.applyConstraints(), d.preventDefault = true;
              break;
            case 189:
              this.viewport.zoomBy(0.9), this.viewport.applyConstraints(), d.preventDefault = true;
              break;
            case 48:
              this.viewport.goHome(), this.viewport.applyConstraints(), d.preventDefault = true;
              break;
            case 87:
              w.preventVerticalPan || (d.shift ? this.viewport.zoomBy(1.1) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, -40))), this.viewport.applyConstraints()), d.preventDefault = true;
              break;
            case 83:
              w.preventVerticalPan || (d.shift ? this.viewport.zoomBy(0.9) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, 40))), this.viewport.applyConstraints()), d.preventDefault = true;
              break;
            case 65:
              w.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(-40, 0))), this.viewport.applyConstraints()), d.preventDefault = true;
              break;
            case 68:
              w.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(40, 0))), this.viewport.applyConstraints()), d.preventDefault = true;
              break;
            case 82:
              d.shift ? this.viewport.flipped ? this.viewport.setRotation(this.viewport.getRotation() + this.rotationIncrement) : this.viewport.setRotation(this.viewport.getRotation() - this.rotationIncrement) : this.viewport.flipped ? this.viewport.setRotation(this.viewport.getRotation() - this.rotationIncrement) : this.viewport.setRotation(this.viewport.getRotation() + this.rotationIncrement), this.viewport.applyConstraints(), d.preventDefault = true;
              break;
            case 70:
              this.viewport.toggleFlip(), d.preventDefault = true;
              break;
            case 74:
              this.goToPreviousPage();
              break;
            case 75:
              this.goToNextPage();
              break;
            default:
              d.preventDefault = false;
              break;
          }
          else d.preventDefault = false;
        }
        function E(d) {
          var w = { originalEvent: d.originalEvent };
          this.raiseEvent("canvas-key-press", w);
        }
        function M(d) {
          var w, C = document.activeElement === this.canvas;
          C || this.canvas.focus(), this.viewport.flipped && (d.position.x = this.viewport.getContainerSize().x - d.position.x);
          var A = { tracker: d.eventSource, position: d.position, quick: d.quick, shift: d.shift, originalEvent: d.originalEvent, originalTarget: d.originalTarget, preventDefaultAction: false };
          this.raiseEvent("canvas-click", A), !A.preventDefaultAction && this.viewport && d.quick && (w = this.gestureSettingsByDeviceType(d.pointerType), w.clickToZoom === true && (this.viewport.zoomBy(d.shift ? 1 / this.zoomPerClick : this.zoomPerClick, w.zoomToRefPoint ? this.viewport.pointFromPixel(d.position, true) : null), this.viewport.applyConstraints()), w.dblClickDragToZoom && (n[this.hash].draggingToZoom === true ? (n[this.hash].lastClickTime = null, n[this.hash].draggingToZoom = false) : n[this.hash].lastClickTime = e.now()));
        }
        function L(d) {
          var w, C = { tracker: d.eventSource, position: d.position, shift: d.shift, originalEvent: d.originalEvent, preventDefaultAction: false };
          this.raiseEvent("canvas-double-click", C), !C.preventDefaultAction && this.viewport && (w = this.gestureSettingsByDeviceType(d.pointerType), w.dblClickToZoom && (this.viewport.zoomBy(d.shift ? 1 / this.zoomPerClick : this.zoomPerClick, w.zoomToRefPoint ? this.viewport.pointFromPixel(d.position, true) : null), this.viewport.applyConstraints()));
        }
        function U(d) {
          var w, C = { tracker: d.eventSource, pointerType: d.pointerType, position: d.position, delta: d.delta, speed: d.speed, direction: d.direction, shift: d.shift, originalEvent: d.originalEvent, preventDefaultAction: false };
          if (this.raiseEvent("canvas-drag", C), w = this.gestureSettingsByDeviceType(d.pointerType), !C.preventDefaultAction && this.viewport) {
            if (w.dblClickDragToZoom && n[this.hash].draggingToZoom) {
              var A = Math.pow(this.zoomPerDblClickDrag, d.delta.y / 50);
              this.viewport.zoomBy(A);
            } else if (w.dragToPan && !n[this.hash].draggingToZoom) {
              if (this.panHorizontal || (d.delta.x = 0), this.panVertical || (d.delta.y = 0), this.viewport.flipped && (d.delta.x = -d.delta.x), this.constrainDuringPan) {
                var O = this.viewport.deltaPointsFromPixels(d.delta.negate());
                this.viewport.centerSpringX.target.value += O.x, this.viewport.centerSpringY.target.value += O.y;
                var B = this.viewport.getConstrainedBounds();
                this.viewport.centerSpringX.target.value -= O.x, this.viewport.centerSpringY.target.value -= O.y, B.xConstrained && (d.delta.x = 0), B.yConstrained && (d.delta.y = 0);
              }
              this.viewport.panBy(this.viewport.deltaPointsFromPixels(d.delta.negate()), w.flickEnabled && !this.constrainDuringPan);
            }
          }
        }
        function K(d) {
          var w, C = { tracker: d.eventSource, pointerType: d.pointerType, position: d.position, speed: d.speed, direction: d.direction, shift: d.shift, originalEvent: d.originalEvent, preventDefaultAction: false };
          if (this.raiseEvent("canvas-drag-end", C), w = this.gestureSettingsByDeviceType(d.pointerType), !C.preventDefaultAction && this.viewport) {
            if (!n[this.hash].draggingToZoom && w.dragToPan && w.flickEnabled && d.speed >= w.flickMinSpeed) {
              var A = 0;
              this.panHorizontal && (A = w.flickMomentum * d.speed * Math.cos(d.direction));
              var O = 0;
              this.panVertical && (O = w.flickMomentum * d.speed * Math.sin(d.direction));
              var B = this.viewport.pixelFromPoint(this.viewport.getCenter(true)), F = this.viewport.pointFromPixel(new e.Point(B.x - A, B.y - O));
              this.viewport.panTo(F, false);
            }
            this.viewport.applyConstraints();
          }
          w.dblClickDragToZoom && n[this.hash].draggingToZoom === true && (n[this.hash].draggingToZoom = false);
        }
        function q(d) {
          this.raiseEvent("canvas-enter", { tracker: d.eventSource, pointerType: d.pointerType, position: d.position, buttons: d.buttons, pointers: d.pointers, insideElementPressed: d.insideElementPressed, buttonDownAny: d.buttonDownAny, originalEvent: d.originalEvent });
        }
        function Y(d) {
          this.raiseEvent("canvas-exit", { tracker: d.eventSource, pointerType: d.pointerType, position: d.position, buttons: d.buttons, pointers: d.pointers, insideElementPressed: d.insideElementPressed, buttonDownAny: d.buttonDownAny, originalEvent: d.originalEvent });
        }
        function te(d) {
          var w;
          if (this.raiseEvent("canvas-press", { tracker: d.eventSource, pointerType: d.pointerType, position: d.position, insideElementPressed: d.insideElementPressed, insideElementReleased: d.insideElementReleased, originalEvent: d.originalEvent }), w = this.gestureSettingsByDeviceType(d.pointerType), w.dblClickDragToZoom) {
            var C = n[this.hash].lastClickTime, A = e.now();
            if (C === null) return;
            A - C < this.dblClickTimeThreshold && (n[this.hash].draggingToZoom = true), n[this.hash].lastClickTime = null;
          }
        }
        function fe(d) {
          this.raiseEvent("canvas-release", { tracker: d.eventSource, pointerType: d.pointerType, position: d.position, insideElementPressed: d.insideElementPressed, insideElementReleased: d.insideElementReleased, originalEvent: d.originalEvent });
        }
        function $(d) {
          this.raiseEvent("canvas-nonprimary-press", { tracker: d.eventSource, position: d.position, pointerType: d.pointerType, button: d.button, buttons: d.buttons, originalEvent: d.originalEvent });
        }
        function j(d) {
          this.raiseEvent("canvas-nonprimary-release", { tracker: d.eventSource, position: d.position, pointerType: d.pointerType, button: d.button, buttons: d.buttons, originalEvent: d.originalEvent });
        }
        function ie(d) {
          var w, C, A, O, B = { tracker: d.eventSource, pointerType: d.pointerType, gesturePoints: d.gesturePoints, lastCenter: d.lastCenter, center: d.center, lastDistance: d.lastDistance, distance: d.distance, shift: d.shift, originalEvent: d.originalEvent, preventDefaultPanAction: false, preventDefaultZoomAction: false, preventDefaultRotateAction: false };
          if (this.raiseEvent("canvas-pinch", B), this.viewport && (w = this.gestureSettingsByDeviceType(d.pointerType), w.pinchToZoom && (!B.preventDefaultPanAction || !B.preventDefaultZoomAction) && (C = this.viewport.pointFromPixel(d.center, true), w.zoomToRefPoint && !B.preventDefaultPanAction && (A = this.viewport.pointFromPixel(d.lastCenter, true), O = A.minus(C), this.panHorizontal || (O.x = 0), this.panVertical || (O.y = 0), this.viewport.panBy(O, true)), B.preventDefaultZoomAction || this.viewport.zoomBy(d.distance / d.lastDistance, C, true), this.viewport.applyConstraints()), w.pinchRotate && !B.preventDefaultRotateAction)) {
            var F = Math.atan2(d.gesturePoints[0].currentPos.y - d.gesturePoints[1].currentPos.y, d.gesturePoints[0].currentPos.x - d.gesturePoints[1].currentPos.x), W = Math.atan2(d.gesturePoints[0].lastPos.y - d.gesturePoints[1].lastPos.y, d.gesturePoints[0].lastPos.x - d.gesturePoints[1].lastPos.x);
            C = this.viewport.pointFromPixel(d.center, true), this.viewport.rotateTo(this.viewport.getRotation(true) + (F - W) * (180 / Math.PI), C, true);
          }
        }
        function ce(d) {
          this.raiseEvent("canvas-focus", { tracker: d.eventSource, originalEvent: d.originalEvent });
        }
        function ye(d) {
          this.raiseEvent("canvas-blur", { tracker: d.eventSource, originalEvent: d.originalEvent });
        }
        function me(d) {
          var w, C, A, O, B;
          O = e.now(), B = O - this._lastScrollTime, B > this.minScrollDeltaTime ? (this._lastScrollTime = O, w = { tracker: d.eventSource, position: d.position, scroll: d.scroll, shift: d.shift, originalEvent: d.originalEvent, preventDefaultAction: false, preventDefault: true }, this.raiseEvent("canvas-scroll", w), !w.preventDefaultAction && this.viewport && (this.viewport.flipped && (d.position.x = this.viewport.getContainerSize().x - d.position.x), C = this.gestureSettingsByDeviceType(d.pointerType), C.scrollToZoom && (A = Math.pow(this.zoomPerScroll, d.scroll), this.viewport.zoomBy(A, C.zoomToRefPoint ? this.viewport.pointFromPixel(d.position, true) : null), this.viewport.applyConstraints())), d.preventDefault = w.preventDefault) : d.preventDefault = true;
        }
        function pe(d) {
          n[this.hash].mouseInside = true, m(this), this.raiseEvent("container-enter", { tracker: d.eventSource, pointerType: d.pointerType, position: d.position, buttons: d.buttons, pointers: d.pointers, insideElementPressed: d.insideElementPressed, buttonDownAny: d.buttonDownAny, originalEvent: d.originalEvent });
        }
        function oe(d) {
          d.pointers < 1 && (n[this.hash].mouseInside = false, n[this.hash].animating || h(this)), this.raiseEvent("container-exit", { tracker: d.eventSource, pointerType: d.pointerType, position: d.position, buttons: d.buttons, pointers: d.pointers, insideElementPressed: d.insideElementPressed, buttonDownAny: d.buttonDownAny, originalEvent: d.originalEvent });
        }
        function Ae(d) {
          et(d), d.isOpen() ? d._updateRequestId = u(d, Ae) : d._updateRequestId = false;
        }
        function De(d, w) {
          var C = d.viewport, A = C.getZoom(), O = C.getCenter();
          C.resize(w, d.preserveImageSizeOnResize), C.panTo(O, true);
          var B;
          if (d.preserveImageSizeOnResize) B = n[d.hash].prevContainerSize.x / w.x;
          else {
            var F = new e.Point(0, 0), W = new e.Point(n[d.hash].prevContainerSize.x, n[d.hash].prevContainerSize.y).distanceTo(F), Z = new e.Point(w.x, w.y).distanceTo(F);
            B = Z / W * n[d.hash].prevContainerSize.x / w.x;
          }
          C.zoomTo(A * B, null, true), n[d.hash].prevContainerSize = w, n[d.hash].forceRedraw = true, n[d.hash].needsResize = false, n[d.hash].forceResize = false;
        }
        function et(d) {
          if (!(d._opening || !n[d.hash])) {
            if (d.autoResize || n[d.hash].forceResize) {
              var w;
              if (d._autoResizePolling) {
                w = s(d.container);
                var C = n[d.hash].prevContainerSize;
                w.equals(C) || (n[d.hash].needsResize = true);
              }
              n[d.hash].needsResize && De(d, w || s(d.container));
            }
            var A = d.viewport.update(), O = d.world.update(A) || A;
            A && d.raiseEvent("viewport-change"), d.referenceStrip && (O = d.referenceStrip.update(d.viewport) || O);
            var B = n[d.hash].animating;
            !B && O && (d.raiseEvent("animation-start"), m(d));
            var F = B && !O;
            F && (n[d.hash].animating = false), (O || F || n[d.hash].forceRedraw || d.world.needsDraw()) && (qe(d), d._drawOverlays(), d.navigator && d.navigator.update(d.viewport), n[d.hash].forceRedraw = false, O && d.raiseEvent("animation")), F && (d.raiseEvent("animation-finish"), n[d.hash].mouseInside || h(d)), n[d.hash].animating = O;
          }
        }
        function qe(d) {
          d.imageLoader.clear(), d.world.draw(), d.raiseEvent("update-viewport", {});
        }
        function ge(d, w) {
          return d ? d + w : w;
        }
        function Wt() {
          n[this.hash].lastZoomTime = e.now(), n[this.hash].zoomFactor = this.zoomPerSecond, n[this.hash].zooming = true, tt(this);
        }
        function jt() {
          n[this.hash].lastZoomTime = e.now(), n[this.hash].zoomFactor = 1 / this.zoomPerSecond, n[this.hash].zooming = true, tt(this);
        }
        function ot() {
          n[this.hash].zooming = false;
        }
        function tt(d) {
          e.requestAnimationFrame(e.delegate(d, Rt));
        }
        function Rt() {
          var d, w, C;
          n[this.hash].zooming && this.viewport && (d = e.now(), w = d - n[this.hash].lastZoomTime, C = Math.pow(n[this.hash].zoomFactor, w / 1e3), this.viewport.zoomBy(C), this.viewport.applyConstraints(), n[this.hash].lastZoomTime = d, tt(this));
        }
        function Gt() {
          this.viewport && (n[this.hash].zooming = false, this.viewport.zoomBy(this.zoomPerClick / 1), this.viewport.applyConstraints());
        }
        function at() {
          this.viewport && (n[this.hash].zooming = false, this.viewport.zoomBy(1 / this.zoomPerClick), this.viewport.applyConstraints());
        }
        function si() {
          this.buttonGroup && (this.buttonGroup.emulateEnter(), this.buttonGroup.emulateLeave());
        }
        function P() {
          this.viewport && this.viewport.goHome();
        }
        function I() {
          this.isFullPage() && !e.isFullScreen() ? this.setFullPage(false) : this.setFullScreen(!this.isFullPage()), this.buttonGroup && this.buttonGroup.emulateLeave(), this.fullPageButton.element.focus(), this.viewport && this.viewport.applyConstraints();
        }
        function H() {
          if (this.viewport) {
            var d = this.viewport.getRotation();
            this.viewport.flipped ? d += this.rotationIncrement : d -= this.rotationIncrement, this.viewport.setRotation(d);
          }
        }
        function V() {
          if (this.viewport) {
            var d = this.viewport.getRotation();
            this.viewport.flipped ? d -= this.rotationIncrement : d += this.rotationIncrement, this.viewport.setRotation(d);
          }
        }
        function N() {
          this.viewport.toggleFlip();
        }
        e.determineDrawer = function(d) {
          for (let w in i) {
            const C = i[w], A = C.prototype;
            if (A && A instanceof i.DrawerBase && e.isFunction(A.getType) && A.getType.call(C) === d) return C;
          }
          return null;
        };
      })(i), (function(e) {
        e.Navigator = function(u) {
          var c = u.viewer, h = this, f, m;
          u.element || u.id ? (u.element ? (u.id && e.console.warn("Given option.id for Navigator was ignored since option.element was provided and is being used instead."), u.element.id ? u.id = u.element.id : u.id = "navigator-" + e.now(), this.element = u.element) : this.element = document.getElementById(u.id), u.controlOptions = { anchor: e.ControlAnchor.NONE, attachToViewer: false, autoFade: false }) : (u.id = "navigator-" + e.now(), this.element = e.makeNeutralElement("div"), u.controlOptions = { anchor: e.ControlAnchor.TOP_RIGHT, attachToViewer: true, autoFade: u.autoFade }, u.position && (u.position === "BOTTOM_RIGHT" ? u.controlOptions.anchor = e.ControlAnchor.BOTTOM_RIGHT : u.position === "BOTTOM_LEFT" ? u.controlOptions.anchor = e.ControlAnchor.BOTTOM_LEFT : u.position === "TOP_RIGHT" ? u.controlOptions.anchor = e.ControlAnchor.TOP_RIGHT : u.position === "TOP_LEFT" ? u.controlOptions.anchor = e.ControlAnchor.TOP_LEFT : u.position === "ABSOLUTE" && (u.controlOptions.anchor = e.ControlAnchor.ABSOLUTE, u.controlOptions.top = u.top, u.controlOptions.left = u.left, u.controlOptions.height = u.height, u.controlOptions.width = u.width))), this.element.id = u.id, this.element.className += " navigator", u = e.extend(true, { sizeRatio: e.DEFAULT_SETTINGS.navigatorSizeRatio }, u, { element: this.element, tabIndex: -1, showNavigator: false, mouseNavEnabled: false, showNavigationControl: false, showSequenceControl: false, immediateRender: true, blendTime: 0, animationTime: u.animationTime, autoResize: false, minZoomImageRatio: 1, background: u.background, opacity: u.opacity, borderColor: u.borderColor, displayRegionColor: u.displayRegionColor }), u.minPixelRatio = this.minPixelRatio = c.minPixelRatio, e.setElementTouchActionNone(this.element), this.borderWidth = 2, this.fudge = new e.Point(1, 1), this.totalBorderWidths = new e.Point(this.borderWidth * 2, this.borderWidth * 2).minus(this.fudge), u.controlOptions.anchor !== e.ControlAnchor.NONE && (function(T, x) {
            T.margin = "0px", T.border = x + "px solid " + u.borderColor, T.padding = "0px", T.background = u.background, T.opacity = u.opacity, T.overflow = "hidden";
          })(this.element.style, this.borderWidth), this.displayRegion = e.makeNeutralElement("div"), this.displayRegion.id = this.element.id + "-displayregion", this.displayRegion.className = "displayregion", (function(T, x) {
            T.position = "relative", T.top = "0px", T.left = "0px", T.fontSize = "0px", T.overflow = "hidden", T.border = x + "px solid " + u.displayRegionColor, T.margin = "0px", T.padding = "0px", T.background = "transparent", T.float = "left", T.cssFloat = "left", T.zIndex = 999999999, T.cursor = "default", T.boxSizing = "content-box";
          })(this.displayRegion.style, this.borderWidth), e.setElementPointerEventsNone(this.displayRegion), e.setElementTouchActionNone(this.displayRegion), this.displayRegionContainer = e.makeNeutralElement("div"), this.displayRegionContainer.id = this.element.id + "-displayregioncontainer", this.displayRegionContainer.className = "displayregioncontainer", this.displayRegionContainer.style.width = "100%", this.displayRegionContainer.style.height = "100%", e.setElementPointerEventsNone(this.displayRegionContainer), e.setElementTouchActionNone(this.displayRegionContainer), c.addControl(this.element, u.controlOptions), this._resizeWithViewer = u.controlOptions.anchor !== e.ControlAnchor.ABSOLUTE && u.controlOptions.anchor !== e.ControlAnchor.NONE, u.width && u.height ? (this.setWidth(u.width), this.setHeight(u.height)) : this._resizeWithViewer && (f = e.getElementSize(c.element), this.element.style.height = Math.round(f.y * u.sizeRatio) + "px", this.element.style.width = Math.round(f.x * u.sizeRatio) + "px", this.oldViewerSize = f, m = e.getElementSize(this.element), this.elementArea = m.x * m.y), this.oldContainerSize = new e.Point(0, 0), e.Viewer.apply(this, [u]), this.displayRegionContainer.appendChild(this.displayRegion), this.element.getElementsByTagName("div")[0].appendChild(this.displayRegionContainer);
          function v(T, x) {
            l(h.displayRegionContainer, T), l(h.displayRegion, -T), h.viewport.setRotation(T, x);
          }
          if (u.navigatorRotate) {
            var y = u.viewer.viewport ? u.viewer.viewport.getRotation() : u.viewer.degrees || 0;
            v(y, true), u.viewer.addHandler("rotate", function(T) {
              v(T.degrees, T.immediately);
            });
          }
          this.innerTracker.destroy(), this.innerTracker = new e.MouseTracker({ userData: "Navigator.innerTracker", element: this.element, dragHandler: e.delegate(this, r), clickHandler: e.delegate(this, n), releaseHandler: e.delegate(this, s), scrollHandler: e.delegate(this, o), preProcessEventHandler: function(T) {
            T.eventType === "wheel" && (T.preventDefault = true);
          } }), this.outerTracker.userData = "Navigator.outerTracker", e.setElementPointerEventsNone(this.canvas), e.setElementPointerEventsNone(this.container), this.addHandler("reset-size", function() {
            h.viewport && h.viewport.goHome(true);
          }), c.world.addHandler("item-index-change", function(T) {
            window.setTimeout(function() {
              var x = h.world.getItemAt(T.previousIndex);
              h.world.setItemIndex(x, T.newIndex);
            }, 1);
          }), c.world.addHandler("remove-item", function(T) {
            var x = T.item, E = h._getMatchingItem(x);
            E && h.world.removeItem(E);
          }), this.update(c.viewport);
        }, e.extend(e.Navigator.prototype, e.EventSource.prototype, e.Viewer.prototype, { updateSize: function() {
          if (this.viewport) {
            var u = new e.Point(this.container.clientWidth === 0 ? 1 : this.container.clientWidth, this.container.clientHeight === 0 ? 1 : this.container.clientHeight);
            u.equals(this.oldContainerSize) || (this.viewport.resize(u, true), this.viewport.goHome(true), this.oldContainerSize = u, this.world.update(), this.world.draw(), this.update(this.viewer.viewport));
          }
        }, setWidth: function(u) {
          this.width = u, this.element.style.width = typeof u == "number" ? u + "px" : u, this._resizeWithViewer = false, this.updateSize();
        }, setHeight: function(u) {
          this.height = u, this.element.style.height = typeof u == "number" ? u + "px" : u, this._resizeWithViewer = false, this.updateSize();
        }, setFlip: function(u) {
          return this.viewport.setFlip(u), this.setDisplayTransform(this.viewer.viewport.getFlip() ? "scale(-1,1)" : "scale(1,1)"), this;
        }, setDisplayTransform: function(u) {
          a(this.canvas, u), a(this.element, u);
        }, update: function(u) {
          var c, h, f, m, v, y;
          if (u || (u = this.viewer.viewport), c = e.getElementSize(this.viewer.element), this._resizeWithViewer && c.x && c.y && !c.equals(this.oldViewerSize) && (this.oldViewerSize = c, this.maintainSizeRatio || !this.elementArea ? (h = c.x * this.sizeRatio, f = c.y * this.sizeRatio) : (h = Math.sqrt(this.elementArea * (c.x / c.y)), f = this.elementArea / h), this.element.style.width = Math.round(h) + "px", this.element.style.height = Math.round(f) + "px", this.elementArea || (this.elementArea = h * f), this.updateSize()), u && this.viewport) {
            if (m = u.getBoundsNoRotate(true), v = this.viewport.pixelFromPointNoRotate(m.getTopLeft(), false), y = this.viewport.pixelFromPointNoRotate(m.getBottomRight(), false).minus(this.totalBorderWidths), !this.navigatorRotate) {
              var T = u.getRotation(true);
              l(this.displayRegion, -T);
            }
            var x = this.displayRegion.style;
            x.display = this.world.getItemCount() ? "block" : "none", x.top = v.y.toFixed(2) + "px", x.left = v.x.toFixed(2) + "px";
            var E = y.x - v.x, M = y.y - v.y;
            x.width = Math.round(Math.max(E, 0)) + "px", x.height = Math.round(Math.max(M, 0)) + "px";
          }
        }, addTiledImage: function(u) {
          var c = this, h = u.originalTiledImage;
          delete u.original;
          var f = e.extend({}, u, { success: function(m) {
            var v = m.item;
            v._originalForNavigator = h, c._matchBounds(v, h, true), c._matchOpacity(v, h), c._matchCompositeOperation(v, h);
            function y() {
              c._matchBounds(v, h);
            }
            function T() {
              c._matchOpacity(v, h);
            }
            function x() {
              c._matchCompositeOperation(v, h);
            }
            h.addHandler("bounds-change", y), h.addHandler("clip-change", y), h.addHandler("opacity-change", T), h.addHandler("composite-operation-change", x);
          } });
          return e.Viewer.prototype.addTiledImage.apply(this, [f]);
        }, destroy: function() {
          return e.Viewer.prototype.destroy.apply(this);
        }, _getMatchingItem: function(u) {
          for (var c = this.world.getItemCount(), h, f = 0; f < c; f++) if (h = this.world.getItemAt(f), h._originalForNavigator === u) return h;
          return null;
        }, _matchBounds: function(u, c, h) {
          var f = c.getBoundsNoRotate();
          u.setPosition(f.getTopLeft(), h), u.setWidth(f.width, h), u.setRotation(c.getRotation(), h), u.setClip(c.getClip()), u.setFlip(c.getFlip());
        }, _matchOpacity: function(u, c) {
          u.setOpacity(c.opacity);
        }, _matchCompositeOperation: function(u, c) {
          u.setCompositeOperation(c.compositeOperation);
        } });
        function n(u) {
          var c = { tracker: u.eventSource, position: u.position, quick: u.quick, shift: u.shift, originalEvent: u.originalEvent, preventDefaultAction: false };
          if (this.viewer.raiseEvent("navigator-click", c), !c.preventDefaultAction && u.quick && this.viewer.viewport && (this.panVertical || this.panHorizontal)) {
            this.viewer.viewport.flipped && (u.position.x = this.viewport.getContainerSize().x - u.position.x);
            var h = this.viewport.pointFromPixel(u.position);
            this.panVertical ? this.panHorizontal || (h.x = this.viewer.viewport.getCenter(true).x) : h.y = this.viewer.viewport.getCenter(true).y, this.viewer.viewport.panTo(h), this.viewer.viewport.applyConstraints();
          }
        }
        function r(u) {
          var c = { tracker: u.eventSource, position: u.position, delta: u.delta, speed: u.speed, direction: u.direction, shift: u.shift, originalEvent: u.originalEvent, preventDefaultAction: false };
          this.viewer.raiseEvent("navigator-drag", c), !c.preventDefaultAction && this.viewer.viewport && (this.panHorizontal || (u.delta.x = 0), this.panVertical || (u.delta.y = 0), this.viewer.viewport.flipped && (u.delta.x = -u.delta.x), this.viewer.viewport.panBy(this.viewport.deltaPointsFromPixels(u.delta)), this.viewer.constrainDuringPan && this.viewer.viewport.applyConstraints());
        }
        function s(u) {
          u.insideElementPressed && this.viewer.viewport && this.viewer.viewport.applyConstraints();
        }
        function o(u) {
          var c = { tracker: u.eventSource, position: u.position, scroll: u.scroll, shift: u.shift, originalEvent: u.originalEvent, preventDefault: u.preventDefault };
          this.viewer.raiseEvent("navigator-scroll", c), u.preventDefault = c.preventDefault;
        }
        function l(u, c) {
          a(u, "rotate(" + c + "deg)");
        }
        function a(u, c) {
          u.style.webkitTransform = c, u.style.mozTransform = c, u.style.msTransform = c, u.style.oTransform = c, u.style.transform = c;
        }
      })(i), (function(e) {
        var n = { Errors: { Dzc: "Sorry, we don't support Deep Zoom Collections!", Dzi: "Hmm, this doesn't appear to be a valid Deep Zoom Image.", Xml: "Hmm, this doesn't appear to be a valid Deep Zoom Image.", ImageFormat: "Sorry, we don't support {0}-based Deep Zoom Images.", Security: "It looks like a security restriction stopped us from loading this Deep Zoom Image.", Status: "This space unintentionally left blank ({0} {1}).", OpenFailed: "Unable to open {0}: {1}" }, Tooltips: { FullPage: "Toggle full page", Home: "Go home", ZoomIn: "Zoom in", ZoomOut: "Zoom out", NextPage: "Next page", PreviousPage: "Previous page", RotateLeft: "Rotate left", RotateRight: "Rotate right", Flip: "Flip Horizontally" } };
        e.extend(e, { getString: function(r) {
          var s = r.split("."), o = null, l = arguments, a = n, u;
          for (u = 0; u < s.length - 1; u++) a = a[s[u]] || {};
          return o = a[s[u]], typeof o != "string" && (e.console.error("Untranslated source string:", r), o = ""), o.replace(/\{\d+\}/g, function(c) {
            var h = parseInt(c.match(/\d+/), 10) + 1;
            return h < l.length ? l[h] : "";
          });
        }, setString: function(r, s) {
          var o = r.split("."), l = n, a;
          for (a = 0; a < o.length - 1; a++) l[o[a]] || (l[o[a]] = {}), l = l[o[a]];
          l[o[a]] = s;
        } });
      })(i), (function(e) {
        e.Point = function(n, r) {
          this.x = typeof n == "number" ? n : 0, this.y = typeof r == "number" ? r : 0;
        }, e.Point.prototype = { clone: function() {
          return new e.Point(this.x, this.y);
        }, plus: function(n) {
          return new e.Point(this.x + n.x, this.y + n.y);
        }, minus: function(n) {
          return new e.Point(this.x - n.x, this.y - n.y);
        }, times: function(n) {
          return new e.Point(this.x * n, this.y * n);
        }, divide: function(n) {
          return new e.Point(this.x / n, this.y / n);
        }, negate: function() {
          return new e.Point(-this.x, -this.y);
        }, distanceTo: function(n) {
          return Math.sqrt(Math.pow(this.x - n.x, 2) + Math.pow(this.y - n.y, 2));
        }, squaredDistanceTo: function(n) {
          return Math.pow(this.x - n.x, 2) + Math.pow(this.y - n.y, 2);
        }, apply: function(n) {
          return new e.Point(n(this.x), n(this.y));
        }, equals: function(n) {
          return n instanceof e.Point && this.x === n.x && this.y === n.y;
        }, rotate: function(n, r) {
          r = r || new e.Point(0, 0);
          var s, o;
          if (n % 90 === 0) {
            var l = e.positiveModulo(n, 360);
            switch (l) {
              case 0:
                s = 1, o = 0;
                break;
              case 90:
                s = 0, o = 1;
                break;
              case 180:
                s = -1, o = 0;
                break;
              case 270:
                s = 0, o = -1;
                break;
            }
          } else {
            var a = n * Math.PI / 180;
            s = Math.cos(a), o = Math.sin(a);
          }
          var u = s * (this.x - r.x) - o * (this.y - r.y) + r.x, c = o * (this.x - r.x) + s * (this.y - r.y) + r.y;
          return new e.Point(u, c);
        }, toString: function() {
          return "(" + Math.round(this.x * 100) / 100 + "," + Math.round(this.y * 100) / 100 + ")";
        } };
      })(i), (function(e) {
        e.TileSource = function(r, s, o, l, a, u) {
          var c = this, h = arguments, f, m;
          if (e.isPlainObject(r) ? f = r : f = { width: h[0], height: h[1], tileSize: h[2], tileOverlap: h[3], minLevel: h[4], maxLevel: h[5] }, e.EventSource.call(this), e.extend(true, this, f), !this.success) {
            for (m = 0; m < arguments.length; m++) if (e.isFunction(arguments[m])) {
              this.success = arguments[m];
              break;
            }
          }
          this.success && this.addHandler("ready", function(v) {
            c.success(v);
          }), e.type(arguments[0]) === "string" && (this.url = arguments[0]), this.url ? (this.aspectRatio = 1, this.dimensions = new e.Point(10, 10), this._tileWidth = 0, this._tileHeight = 0, this.tileOverlap = 0, this.minLevel = 0, this.maxLevel = 0, this.ready = false, this.getImageInfo(this.url)) : (this.ready = true, this.aspectRatio = f.width && f.height ? f.width / f.height : 1, this.dimensions = new e.Point(f.width, f.height), this.tileSize ? (this._tileWidth = this._tileHeight = this.tileSize, delete this.tileSize) : (this.tileWidth ? (this._tileWidth = this.tileWidth, delete this.tileWidth) : this._tileWidth = 0, this.tileHeight ? (this._tileHeight = this.tileHeight, delete this.tileHeight) : this._tileHeight = 0), this.tileOverlap = f.tileOverlap ? f.tileOverlap : 0, this.minLevel = f.minLevel ? f.minLevel : 0, this.maxLevel = f.maxLevel !== void 0 && f.maxLevel !== null ? f.maxLevel : f.width && f.height ? Math.ceil(Math.log(Math.max(f.width, f.height)) / Math.log(2)) : 0, this.success && e.isFunction(this.success) && this.success(this));
        }, e.TileSource.prototype = { getTileSize: function(r) {
          return e.console.error("[TileSource.getTileSize] is deprecated. Use TileSource.getTileWidth() and TileSource.getTileHeight() instead"), this._tileWidth;
        }, getTileWidth: function(r) {
          return this._tileWidth ? this._tileWidth : this.getTileSize(r);
        }, getTileHeight: function(r) {
          return this._tileHeight ? this._tileHeight : this.getTileSize(r);
        }, setMaxLevel: function(r) {
          this.maxLevel = r, this._memoizeLevelScale();
        }, getLevelScale: function(r) {
          return this._memoizeLevelScale(), this.getLevelScale(r);
        }, _memoizeLevelScale: function() {
          var r = {}, s;
          for (s = 0; s <= this.maxLevel; s++) r[s] = 1 / Math.pow(2, this.maxLevel - s);
          this.getLevelScale = function(o) {
            return r[o];
          };
        }, getNumTiles: function(r) {
          var s = this.getLevelScale(r), o = Math.ceil(s * this.dimensions.x / this.getTileWidth(r)), l = Math.ceil(s * this.dimensions.y / this.getTileHeight(r));
          return new e.Point(o, l);
        }, getPixelRatio: function(r) {
          var s = this.dimensions.times(this.getLevelScale(r)), o = 1 / s.x * e.pixelDensityRatio, l = 1 / s.y * e.pixelDensityRatio;
          return new e.Point(o, l);
        }, getClosestLevel: function() {
          var r, s;
          for (r = this.minLevel + 1; r <= this.maxLevel && (s = this.getNumTiles(r), !(s.x > 1 || s.y > 1)); r++) ;
          return r - 1;
        }, getTileAtPoint: function(r, s) {
          var o = s.x >= 0 && s.x <= 1 && s.y >= 0 && s.y <= 1 / this.aspectRatio;
          e.console.assert(o, "[TileSource.getTileAtPoint] must be called with a valid point.");
          var l = this.dimensions.x * this.getLevelScale(r), a = s.x * l, u = s.y * l, c = Math.floor(a / this.getTileWidth(r)), h = Math.floor(u / this.getTileHeight(r));
          s.x >= 1 && (c = this.getNumTiles(r).x - 1);
          var f = 1e-15;
          return s.y >= 1 / this.aspectRatio - f && (h = this.getNumTiles(r).y - 1), new e.Point(c, h);
        }, getTileBounds: function(r, s, o, l) {
          var a = this.dimensions.times(this.getLevelScale(r)), u = this.getTileWidth(r), c = this.getTileHeight(r), h = s === 0 ? 0 : u * s - this.tileOverlap, f = o === 0 ? 0 : c * o - this.tileOverlap, m = u + (s === 0 ? 1 : 2) * this.tileOverlap, v = c + (o === 0 ? 1 : 2) * this.tileOverlap, y = 1 / a.x;
          return m = Math.min(m, a.x - h), v = Math.min(v, a.y - f), l ? new e.Rect(0, 0, m, v) : new e.Rect(h * y, f * y, m * y, v * y);
        }, getImageInfo: function(r) {
          var s = this, o, l, a, u, c, h, f;
          r && (c = r.split("/"), h = c[c.length - 1], f = h.lastIndexOf("."), f > -1 && (c[c.length - 1] = h.slice(0, f)));
          var m = null;
          if (this.splitHashDataForPost) {
            var v = r.indexOf("#");
            v !== -1 && (m = r.substring(v + 1), r = r.substr(0, v));
          }
          l = function(y) {
            typeof y == "string" && (y = e.parseXml(y));
            var T = e.TileSource.determineType(s, y, r);
            if (!T) {
              s.raiseEvent("open-failed", { message: "Unable to load TileSource", source: r });
              return;
            }
            u = T.prototype.configure.apply(s, [y, r, m]), u.ajaxWithCredentials === void 0 && (u.ajaxWithCredentials = s.ajaxWithCredentials), a = new T(u), s.ready = true, s.raiseEvent("ready", { tileSource: a });
          }, r.match(/\.js$/) ? (o = r.split("/").pop().replace(".js", ""), e.jsonp({ url: r, async: false, callbackName: o, callback: l })) : e.makeAjaxRequest({ url: r, postData: m, withCredentials: this.ajaxWithCredentials, headers: this.ajaxHeaders, success: function(y) {
            var T = n(y);
            l(T);
          }, error: function(y, T) {
            var x;
            try {
              x = "HTTP " + y.status + " attempting to load TileSource: " + r;
            } catch {
              var E;
              typeof T > "u" || !T.toString ? E = "Unknown error" : E = T.toString(), x = E + " attempting to load TileSource: " + r;
            }
            e.console.error(x), s.raiseEvent("open-failed", { message: x, source: r, postData: m });
          } });
        }, supports: function(r, s) {
          return false;
        }, configure: function(r, s, o) {
          throw new Error("Method not implemented.");
        }, getTileUrl: function(r, s, o) {
          throw new Error("Method not implemented.");
        }, getTilePostData: function(r, s, o) {
          return null;
        }, getTileAjaxHeaders: function(r, s, o) {
          return {};
        }, getTileHashKey: function(r, s, o, l, a, u) {
          function c(h) {
            return a ? h + "+" + JSON.stringify(a) : h;
          }
          return c(typeof l != "string" ? r + "/" + s + "_" + o : l);
        }, tileExists: function(r, s, o) {
          var l = this.getNumTiles(r);
          return r >= this.minLevel && r <= this.maxLevel && s >= 0 && o >= 0 && s < l.x && o < l.y;
        }, hasTransparency: function(r, s, o, l) {
          return !!r || s.match(".png");
        }, downloadTileStart: function(r) {
          var s = r.userData, o = new Image();
          s.image = o, s.request = null;
          var l = function(a) {
            if (!o) {
              r.finish(null, s.request, "Image load failed: undefined Image instance.");
              return;
            }
            o.onload = o.onerror = o.onabort = null, r.finish(a ? null : o, s.request, a);
          };
          o.onload = function() {
            l();
          }, o.onabort = o.onerror = function() {
            l("Image load aborted.");
          }, r.loadWithAjax ? s.request = e.makeAjaxRequest({ url: r.src, withCredentials: r.ajaxWithCredentials, headers: r.ajaxHeaders, responseType: "arraybuffer", postData: r.postData, success: function(a) {
            var u;
            try {
              u = new window.Blob([a.response]);
            } catch (f) {
              var c = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
              if (f.name === "TypeError" && c) {
                var h = new c();
                h.append(a.response), u = h.getBlob();
              }
            }
            u.size === 0 ? l("Empty image response.") : o.src = (window.URL || window.webkitURL).createObjectURL(u);
          }, error: function(a) {
            l("Image load aborted - XHR error");
          } }) : (r.crossOriginPolicy !== false && (o.crossOrigin = r.crossOriginPolicy), o.src = r.src);
        }, downloadTileAbort: function(r) {
          r.userData.request && r.userData.request.abort();
          var s = r.userData.image;
          r.userData.image && (s.onload = s.onerror = s.onabort = null);
        }, createTileCache: function(r, s, o) {
          r._data = s;
        }, destroyTileCache: function(r) {
          r._data = null, r._renderedContext = null;
        }, getTileCacheData: function(r) {
          return r._data;
        }, getTileCacheDataAsImage: function(r) {
          return r._data;
        }, getTileCacheDataAsContext2D: function(r) {
          if (!r._renderedContext) {
            var s = document.createElement("canvas");
            s.width = r._data.width, s.height = r._data.height, r._renderedContext = s.getContext("2d"), r._renderedContext.drawImage(r._data, 0, 0), r._data = null;
          }
          return r._renderedContext;
        } }, e.extend(true, e.TileSource.prototype, e.EventSource.prototype);
        function n(r) {
          var s = r.responseText, o = r.status, l, a;
          if (r) {
            if (r.status !== 200 && r.status !== 0) throw o = r.status, l = o === 404 ? "Not Found" : r.statusText, new Error(e.getString("Errors.Status", o, l));
          } else throw new Error(e.getString("Errors.Security"));
          if (s.match(/^\s*<.*/)) try {
            a = r.responseXML && r.responseXML.documentElement ? r.responseXML : e.parseXml(s);
          } catch {
            a = r.responseText;
          }
          else if (s.match(/\s*[{[].*/)) try {
            a = e.parseJSON(s);
          } catch {
            a = s;
          }
          else a = s;
          return a;
        }
        e.TileSource.determineType = function(r, s, o) {
          var l;
          for (l in i) if (l.match(/.+TileSource$/) && e.isFunction(i[l]) && e.isFunction(i[l].prototype.supports) && i[l].prototype.supports.call(r, s, o)) return i[l];
          return e.console.error("No TileSource was able to open %s %s", o, s), null;
        };
      })(i), (function(e) {
        e.DziTileSource = function(s, o, l, a, u, c, h, f, m) {
          var v, y, T, x;
          if (e.isPlainObject(s) ? x = s : x = { width: arguments[0], height: arguments[1], tileSize: arguments[2], tileOverlap: arguments[3], tilesUrl: arguments[4], fileFormat: arguments[5], displayRects: arguments[6], minLevel: arguments[7], maxLevel: arguments[8] }, this._levelRects = {}, this.tilesUrl = x.tilesUrl, this.fileFormat = x.fileFormat, this.displayRects = x.displayRects, this.displayRects) for (v = this.displayRects.length - 1; v >= 0; v--) for (y = this.displayRects[v], T = y.minLevel; T <= y.maxLevel; T++) this._levelRects[T] || (this._levelRects[T] = []), this._levelRects[T].push(y);
          e.TileSource.apply(this, [x]);
        }, e.extend(e.DziTileSource.prototype, e.TileSource.prototype, { supports: function(s, o) {
          var l;
          return s.Image ? l = s.Image.xmlns : s.documentElement && (s.documentElement.localName === "Image" || s.documentElement.tagName === "Image") && (l = s.documentElement.namespaceURI), l = (l || "").toLowerCase(), l.indexOf("schemas.microsoft.com/deepzoom/2008") !== -1 || l.indexOf("schemas.microsoft.com/deepzoom/2009") !== -1;
        }, configure: function(s, o, l) {
          var a;
          return e.isPlainObject(s) ? a = r(this, s) : a = n(this, s), o && !a.tilesUrl && (a.tilesUrl = o.replace(/([^/]+?)(\.(dzi|xml|js)?(\?[^/]*)?)?\/?$/, "$1_files/"), o.search(/\.(dzi|xml|js)\?/) !== -1 ? a.queryParams = o.match(/\?.*/) : a.queryParams = ""), a;
        }, getTileUrl: function(s, o, l) {
          return [this.tilesUrl, s, "/", o, "_", l, ".", this.fileFormat, this.queryParams].join("");
        }, tileExists: function(s, o, l) {
          var a = this._levelRects[s], u, c, h, f, m, v, y;
          if (this.minLevel && s < this.minLevel || this.maxLevel && s > this.maxLevel) return false;
          if (!a || !a.length) return true;
          for (y = a.length - 1; y >= 0; y--) if (u = a[y], !(s < u.minLevel || s > u.maxLevel) && (c = this.getLevelScale(s), h = u.x * c, f = u.y * c, m = h + u.width * c, v = f + u.height * c, h = Math.floor(h / this._tileWidth), f = Math.floor(f / this._tileWidth), m = Math.ceil(m / this._tileWidth), v = Math.ceil(v / this._tileWidth), h <= o && o < m && f <= l && l < v)) return true;
          return false;
        } });
        function n(s, o) {
          if (!o || !o.documentElement) throw new Error(e.getString("Errors.Xml"));
          var l = o.documentElement, a = l.localName || l.tagName, u = o.documentElement.namespaceURI, c = null, h = [], f, m, v, y, T;
          if (a === "Image") try {
            if (y = l.getElementsByTagName("Size")[0], y === void 0 && (y = l.getElementsByTagNameNS(u, "Size")[0]), c = { Image: { xmlns: "http://schemas.microsoft.com/deepzoom/2008", Url: l.getAttribute("Url"), Format: l.getAttribute("Format"), DisplayRect: null, Overlap: parseInt(l.getAttribute("Overlap"), 10), TileSize: parseInt(l.getAttribute("TileSize"), 10), Size: { Height: parseInt(y.getAttribute("Height"), 10), Width: parseInt(y.getAttribute("Width"), 10) } } }, !e.imageFormatSupported(c.Image.Format)) throw new Error(e.getString("Errors.ImageFormat", c.Image.Format.toUpperCase()));
            for (f = l.getElementsByTagName("DisplayRect"), f === void 0 && (f = l.getElementsByTagNameNS(u, "DisplayRect")[0]), T = 0; T < f.length; T++) m = f[T], v = m.getElementsByTagName("Rect")[0], v === void 0 && (v = m.getElementsByTagNameNS(u, "Rect")[0]), h.push({ Rect: { X: parseInt(v.getAttribute("X"), 10), Y: parseInt(v.getAttribute("Y"), 10), Width: parseInt(v.getAttribute("Width"), 10), Height: parseInt(v.getAttribute("Height"), 10), MinLevel: parseInt(m.getAttribute("MinLevel"), 10), MaxLevel: parseInt(m.getAttribute("MaxLevel"), 10) } });
            return h.length && (c.Image.DisplayRect = h), r(s, c);
          } catch (M) {
            throw M instanceof Error ? M : new Error(e.getString("Errors.Dzi"));
          }
          else {
            if (a === "Collection") throw new Error(e.getString("Errors.Dzc"));
            if (a === "Error") {
              var x = l.getElementsByTagName("Message")[0], E = x.firstChild.nodeValue;
              throw new Error(E);
            }
          }
          throw new Error(e.getString("Errors.Dzi"));
        }
        function r(s, o) {
          var l = o.Image, a = l.Url, u = l.Format, c = l.Size, h = l.DisplayRect || [], f = parseInt(c.Width, 10), m = parseInt(c.Height, 10), v = parseInt(l.TileSize, 10), y = parseInt(l.Overlap, 10), T = [], x, E;
          for (E = 0; E < h.length; E++) x = h[E].Rect, T.push(new e.DisplayRect(parseInt(x.X, 10), parseInt(x.Y, 10), parseInt(x.Width, 10), parseInt(x.Height, 10), parseInt(x.MinLevel, 10), parseInt(x.MaxLevel, 10)));
          return e.extend(true, { width: f, height: m, tileSize: v, tileOverlap: y, minLevel: null, maxLevel: null, tilesUrl: a, fileFormat: u, displayRects: T }, o);
        }
      })(i), (function(e) {
        e.IIIFTileSource = function(l) {
          if (e.extend(true, this, l), this._id = this["@id"] || this.id || this.identifier || null, !(this.height && this.width && this._id)) throw new Error("IIIF required parameters (width, height, or id) not provided.");
          if (l.tileSizePerScaleFactor = {}, this.tileFormat = this.tileFormat || "jpg", this.version = l.version, this.tile_width && this.tile_height) l.tileWidth = this.tile_width, l.tileHeight = this.tile_height;
          else if (this.tile_width) l.tileSize = this.tile_width;
          else if (this.tile_height) l.tileSize = this.tile_height;
          else if (this.tiles) if (this.tiles.length === 1) l.tileWidth = this.tiles[0].width, l.tileHeight = this.tiles[0].height || this.tiles[0].width, this.scale_factors = this.tiles[0].scaleFactors;
          else {
            this.scale_factors = [];
            for (var a = 0; a < this.tiles.length; a++) for (var u = 0; u < this.tiles[a].scaleFactors.length; u++) {
              var c = this.tiles[a].scaleFactors[u];
              this.scale_factors.push(c), l.tileSizePerScaleFactor[c] = { width: this.tiles[a].width, height: this.tiles[a].height || this.tiles[a].width };
            }
          }
          else if (n(l)) {
            for (var h = Math.min(this.height, this.width), f = [256, 512, 1024], m = [], v = 0; v < f.length; v++) f[v] <= h && m.push(f[v]);
            m.length > 0 ? l.tileSize = Math.max.apply(null, m) : l.tileSize = h;
          } else this.sizes && this.sizes.length > 0 ? (this.emulateLegacyImagePyramid = true, l.levels = r(this), e.extend(true, l, { width: l.levels[l.levels.length - 1].width, height: l.levels[l.levels.length - 1].height, tileSize: Math.max(l.height, l.width), tileOverlap: 0, minLevel: 0, maxLevel: l.levels.length - 1 }), this.levels = l.levels) : e.console.error("Nothing in the info.json to construct image pyramids from");
          if (!l.maxLevel && !this.emulateLegacyImagePyramid) if (!this.scale_factors) l.maxLevel = Number(Math.round(Math.log(Math.max(this.width, this.height), 2)));
          else {
            var y = Math.max.apply(null, this.scale_factors);
            l.maxLevel = Math.round(Math.log(y) * Math.LOG2E);
          }
          if (this.sizes) {
            var T = this.sizes.length;
            (T === l.maxLevel || T === l.maxLevel + 1) && (this.levelSizes = this.sizes.slice().sort((x, E) => x.width - E.width), T === l.maxLevel && this.levelSizes.push({ width: this.width, height: this.height }));
          }
          e.TileSource.apply(this, [l]);
        }, e.extend(e.IIIFTileSource.prototype, e.TileSource.prototype, { supports: function(l, a) {
          return l.protocol && l.protocol === "http://iiif.io/api/image" || l["@context"] && (l["@context"] === "http://library.stanford.edu/iiif/image-api/1.1/context.json" || l["@context"] === "http://iiif.io/api/image/1/context.json") || l.profile && l.profile.indexOf("http://library.stanford.edu/iiif/image-api/compliance.html") === 0 || l.identifier && l.width && l.height ? true : !!(l.documentElement && l.documentElement.tagName === "info" && l.documentElement.namespaceURI === "http://library.stanford.edu/iiif/image-api/ns/");
        }, configure: function(l, a, u) {
          if (e.isPlainObject(l)) {
            if (!l["@context"]) l["@context"] = "http://iiif.io/api/image/1.0/context.json", l["@id"] = a.replace("/info.json", ""), l.version = 1;
            else {
              var h = l["@context"];
              if (Array.isArray(h)) {
                for (var f = 0; f < h.length; f++) if (typeof h[f] == "string" && (/^http:\/\/iiif\.io\/api\/image\/[1-3]\/context\.json$/.test(h[f]) || h[f] === "http://library.stanford.edu/iiif/image-api/1.1/context.json")) {
                  h = h[f];
                  break;
                }
              }
              switch (h) {
                case "http://iiif.io/api/image/1/context.json":
                case "http://library.stanford.edu/iiif/image-api/1.1/context.json":
                  l.version = 1;
                  break;
                case "http://iiif.io/api/image/2/context.json":
                  l.version = 2;
                  break;
                case "http://iiif.io/api/image/3/context.json":
                  l.version = 3;
                  break;
                default:
                  e.console.error("Data has a @context property which contains no known IIIF context URI.");
              }
            }
            if (l.preferredFormats) {
              for (var m = 0; m < l.preferredFormats.length; m++) if (i.imageFormatSupported(l.preferredFormats[m])) {
                l.tileFormat = l.preferredFormats[m];
                break;
              }
            }
            return l;
          } else {
            var c = s(l);
            return c["@context"] = "http://iiif.io/api/image/1.0/context.json", c["@id"] = a.replace("/info.xml", ""), c.version = 1, c;
          }
        }, getTileWidth: function(l) {
          if (this.emulateLegacyImagePyramid) return e.TileSource.prototype.getTileWidth.call(this, l);
          var a = Math.pow(2, this.maxLevel - l);
          return this.tileSizePerScaleFactor && this.tileSizePerScaleFactor[a] ? this.tileSizePerScaleFactor[a].width : this._tileWidth;
        }, getTileHeight: function(l) {
          if (this.emulateLegacyImagePyramid) return e.TileSource.prototype.getTileHeight.call(this, l);
          var a = Math.pow(2, this.maxLevel - l);
          return this.tileSizePerScaleFactor && this.tileSizePerScaleFactor[a] ? this.tileSizePerScaleFactor[a].height : this._tileHeight;
        }, getLevelScale: function(l) {
          if (this.emulateLegacyImagePyramid) {
            var a = NaN;
            return this.levels.length > 0 && l >= this.minLevel && l <= this.maxLevel && (a = this.levels[l].width / this.levels[this.maxLevel].width), a;
          }
          return e.TileSource.prototype.getLevelScale.call(this, l);
        }, getNumTiles: function(l) {
          if (this.emulateLegacyImagePyramid) {
            var a = this.getLevelScale(l);
            return a ? new e.Point(1, 1) : new e.Point(0, 0);
          }
          if (this.levelSizes) {
            var u = this.levelSizes[l], c = Math.ceil(u.width / this.getTileWidth(l)), h = Math.ceil(u.height / this.getTileHeight(l));
            return new e.Point(c, h);
          } else return e.TileSource.prototype.getNumTiles.call(this, l);
        }, getTileAtPoint: function(l, a) {
          if (this.emulateLegacyImagePyramid) return new e.Point(0, 0);
          if (this.levelSizes) {
            var u = a.x >= 0 && a.x <= 1 && a.y >= 0 && a.y <= 1 / this.aspectRatio;
            e.console.assert(u, "[TileSource.getTileAtPoint] must be called with a valid point.");
            var c = this.levelSizes[l].width, h = a.x * c, f = a.y * c, m = Math.floor(h / this.getTileWidth(l)), v = Math.floor(f / this.getTileHeight(l));
            a.x >= 1 && (m = this.getNumTiles(l).x - 1);
            var y = 1e-15;
            return a.y >= 1 / this.aspectRatio - y && (v = this.getNumTiles(l).y - 1), new e.Point(m, v);
          }
          return e.TileSource.prototype.getTileAtPoint.call(this, l, a);
        }, getTileUrl: function(l, a, u) {
          if (this.emulateLegacyImagePyramid) {
            var c = null;
            return this.levels.length > 0 && l >= this.minLevel && l <= this.maxLevel && (c = this.levels[l].url), c;
          }
          var h = "0", f = Math.pow(0.5, this.maxLevel - l), m, v, y, T, x, E, M, L, U, K, q, Y, te, fe, $, j;
          return this.levelSizes ? (m = this.levelSizes[l].width, v = this.levelSizes[l].height) : (m = Math.ceil(this.width * f), v = Math.ceil(this.height * f)), y = this.getTileWidth(l), T = this.getTileHeight(l), x = Math.round(y / f), E = Math.round(T / f), this.version === 1 ? $ = "native." + this.tileFormat : $ = "default." + this.tileFormat, m < y && v < T ? (this.version === 2 && m === this.width ? Y = "full" : this.version === 3 && m === this.width && v === this.height ? Y = "max" : this.version === 3 ? Y = m + "," + v : Y = m + ",", M = "full") : (L = a * x, U = u * E, K = Math.min(x, this.width - L), q = Math.min(E, this.height - U), a === 0 && u === 0 && K === this.width && q === this.height ? M = "full" : M = [L, U, K, q].join(","), te = Math.min(y, m - a * y), fe = Math.min(T, v - u * T), this.version === 2 && te === this.width ? Y = "full" : this.version === 3 && te === this.width && fe === this.height ? Y = "max" : this.version === 3 ? Y = te + "," + fe : Y = te + ","), j = [this._id, M, Y, h, $].join("/"), j;
        }, __testonly__: { canBeTiled: n, constructLevels: r } });
        function n(l) {
          var a = ["http://library.stanford.edu/iiif/image-api/compliance.html#level0", "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level0", "http://iiif.io/api/image/2/level0.json", "level0", "https://iiif.io/api/image/3/level0.json"], u = Array.isArray(l.profile) ? l.profile[0] : l.profile, c = a.indexOf(u) !== -1, h = false;
          return l.version === 2 && l.profile.length > 1 && l.profile[1].supports && (h = l.profile[1].supports.indexOf("sizeByW") !== -1), l.version === 3 && l.extraFeatures && (h = l.extraFeatures.indexOf("sizeByWh") !== -1), !c || h;
        }
        function r(l) {
          for (var a = [], u = 0; u < l.sizes.length; u++) a.push({ url: l._id + "/full/" + l.sizes[u].width + "," + (l.version === 3 ? l.sizes[u].height : "") + "/0/default." + l.tileFormat, width: l.sizes[u].width, height: l.sizes[u].height });
          return a.sort(function(c, h) {
            return c.width - h.width;
          });
        }
        function s(l) {
          if (!l || !l.documentElement) throw new Error(e.getString("Errors.Xml"));
          var a = l.documentElement, u = a.tagName, c = null;
          if (u === "info") try {
            return c = {}, o(a, c), c;
          } catch (h) {
            throw h instanceof Error ? h : new Error(e.getString("Errors.IIIF"));
          }
          throw new Error(e.getString("Errors.IIIF"));
        }
        function o(l, a, u) {
          var c, h;
          if (l.nodeType === 3 && u) h = l.nodeValue.trim(), h.match(/^\d*$/) && (h = Number(h)), a[u] ? (e.isArray(a[u]) || (a[u] = [a[u]]), a[u].push(h)) : a[u] = h;
          else if (l.nodeType === 1) for (c = 0; c < l.childNodes.length; c++) o(l.childNodes[c], a, l.nodeName);
        }
      })(i), (function(e) {
        e.OsmTileSource = function(n, r, s, o, l) {
          var a;
          e.isPlainObject(n) ? a = n : a = { width: arguments[0], height: arguments[1], tileSize: arguments[2], tileOverlap: arguments[3], tilesUrl: arguments[4] }, (!a.width || !a.height) && (a.width = 65572864, a.height = 65572864), a.tileSize || (a.tileSize = 256, a.tileOverlap = 0), a.tilesUrl || (a.tilesUrl = "http://tile.openstreetmap.org/"), a.minLevel = 8, e.TileSource.apply(this, [a]);
        }, e.extend(e.OsmTileSource.prototype, e.TileSource.prototype, { supports: function(n, r) {
          return n.type && n.type === "openstreetmaps";
        }, configure: function(n, r, s) {
          return n;
        }, getTileUrl: function(n, r, s) {
          return this.tilesUrl + (n - 8) + "/" + r + "/" + s + ".png";
        } });
      })(i), (function(e) {
        e.TmsTileSource = function(n, r, s, o, l) {
          var a;
          e.isPlainObject(n) ? a = n : a = { width: arguments[0], height: arguments[1], tileSize: arguments[2], tileOverlap: arguments[3], tilesUrl: arguments[4] };
          var u = Math.ceil(a.width / 256) * 256, c = Math.ceil(a.height / 256) * 256, h;
          u > c ? h = u / 256 : h = c / 256, a.maxLevel = Math.ceil(Math.log(h) / Math.log(2)) - 1, a.tileSize = 256, a.width = u, a.height = c, e.TileSource.apply(this, [a]);
        }, e.extend(e.TmsTileSource.prototype, e.TileSource.prototype, { supports: function(n, r) {
          return n.type && n.type === "tiledmapservice";
        }, configure: function(n, r, s) {
          return n;
        }, getTileUrl: function(n, r, s) {
          var o = this.getNumTiles(n).y - 1;
          return this.tilesUrl + n + "/" + r + "/" + (o - s) + ".png";
        } });
      })(i), (function(e) {
        e.ZoomifyTileSource = function(n) {
          typeof n.tileSize > "u" && (n.tileSize = 256), typeof n.fileFormat > "u" && (n.fileFormat = "jpg", this.fileFormat = n.fileFormat);
          var r = { x: n.width, y: n.height };
          for (n.imageSizes = [{ x: n.width, y: n.height }], n.gridSize = [this._getGridSize(n.width, n.height, n.tileSize)]; parseInt(r.x, 10) > n.tileSize || parseInt(r.y, 10) > n.tileSize; ) r.x = Math.floor(r.x / 2), r.y = Math.floor(r.y / 2), n.imageSizes.push({ x: r.x, y: r.y }), n.gridSize.push(this._getGridSize(r.x, r.y, n.tileSize));
          n.imageSizes.reverse(), n.gridSize.reverse(), n.minLevel = 0, n.maxLevel = n.gridSize.length - 1, i.TileSource.apply(this, [n]);
        }, e.extend(e.ZoomifyTileSource.prototype, e.TileSource.prototype, { _getGridSize: function(n, r, s) {
          return { x: Math.ceil(n / s), y: Math.ceil(r / s) };
        }, _calculateAbsoluteTileNumber: function(n, r, s) {
          for (var o = 0, l = {}, a = 0; a < n; a++) l = this.gridSize[a], o += l.x * l.y;
          return l = this.gridSize[n], o += l.x * s + r, o;
        }, supports: function(n, r) {
          return n.type && n.type === "zoomifytileservice";
        }, configure: function(n, r, s) {
          return n;
        }, getTileUrl: function(n, r, s) {
          var o = 0, l = this._calculateAbsoluteTileNumber(n, r, s);
          return o = Math.floor(l / 256), this.tilesUrl + "TileGroup" + o + "/" + n + "-" + r + "-" + s + "." + this.fileFormat;
        } });
      })(i), (function(e) {
        e.LegacyTileSource = function(o) {
          var l, a, u;
          e.isArray(o) && (l = { type: "legacy-image-pyramid", levels: o }), l.levels = n(l.levels), l.levels.length > 0 ? (a = l.levels[l.levels.length - 1].width, u = l.levels[l.levels.length - 1].height) : (a = 0, u = 0, e.console.error("No supported image formats found")), e.extend(true, l, { width: a, height: u, tileSize: Math.max(u, a), tileOverlap: 0, minLevel: 0, maxLevel: l.levels.length > 0 ? l.levels.length - 1 : 0 }), e.TileSource.apply(this, [l]), this.levels = l.levels;
        }, e.extend(e.LegacyTileSource.prototype, e.TileSource.prototype, { supports: function(o, l) {
          return o.type && o.type === "legacy-image-pyramid" || o.documentElement && o.documentElement.getAttribute("type") === "legacy-image-pyramid";
        }, configure: function(o, l, a) {
          var u;
          return e.isPlainObject(o) ? u = s(this, o) : u = r(this, o), u;
        }, getLevelScale: function(o) {
          var l = NaN;
          return this.levels.length > 0 && o >= this.minLevel && o <= this.maxLevel && (l = this.levels[o].width / this.levels[this.maxLevel].width), l;
        }, getNumTiles: function(o) {
          var l = this.getLevelScale(o);
          return l ? new e.Point(1, 1) : new e.Point(0, 0);
        }, getTileUrl: function(o, l, a) {
          var u = null;
          return this.levels.length > 0 && o >= this.minLevel && o <= this.maxLevel && (u = this.levels[o].url), u;
        } });
        function n(o) {
          var l = [], a, u;
          for (u = 0; u < o.length; u++) a = o[u], a.height && a.width && a.url ? l.push({ url: a.url, width: Number(a.width), height: Number(a.height) }) : e.console.error("Unsupported image format: %s", a.url ? a.url : "<no URL>");
          return l.sort(function(c, h) {
            return c.height - h.height;
          });
        }
        function r(o, l) {
          if (!l || !l.documentElement) throw new Error(e.getString("Errors.Xml"));
          var a = l.documentElement, u = a.tagName, c = null, h = [], f, m;
          if (u === "image") try {
            for (c = { type: a.getAttribute("type"), levels: [] }, h = a.getElementsByTagName("level"), m = 0; m < h.length; m++) f = h[m], c.levels.push({ url: f.getAttribute("url"), width: parseInt(f.getAttribute("width"), 10), height: parseInt(f.getAttribute("height"), 10) });
            return s(o, c);
          } catch (v) {
            throw v instanceof Error ? v : new Error("Unknown error parsing Legacy Image Pyramid XML.");
          }
          else {
            if (u === "collection") throw new Error("Legacy Image Pyramid Collections not yet supported.");
            if (u === "error") throw new Error("Error: " + l);
          }
          throw new Error("Unknown element " + u);
        }
        function s(o, l) {
          return l.levels;
        }
      })(i), (function(e) {
        e.ImageTileSource = function(n) {
          n = e.extend({ buildPyramid: true, crossOriginPolicy: false, ajaxWithCredentials: false }, n), e.TileSource.apply(this, [n]);
        }, e.extend(e.ImageTileSource.prototype, e.TileSource.prototype, { supports: function(n, r) {
          return n.type && n.type === "image";
        }, configure: function(n, r, s) {
          return n;
        }, getImageInfo: function(n) {
          var r = this._image = new Image(), s = this;
          this.crossOriginPolicy && (r.crossOrigin = this.crossOriginPolicy), this.ajaxWithCredentials && (r.useCredentials = this.ajaxWithCredentials), e.addEvent(r, "load", function() {
            s.width = r.naturalWidth, s.height = r.naturalHeight, s.aspectRatio = s.width / s.height, s.dimensions = new e.Point(s.width, s.height), s._tileWidth = s.width, s._tileHeight = s.height, s.tileOverlap = 0, s.minLevel = 0, s.levels = s._buildLevels(), s.maxLevel = s.levels.length - 1, s.ready = true, s.raiseEvent("ready", { tileSource: s });
          }), e.addEvent(r, "error", function() {
            s.raiseEvent("open-failed", { message: "Error loading image at " + n, source: n });
          }), r.src = n;
        }, getLevelScale: function(n) {
          var r = NaN;
          return n >= this.minLevel && n <= this.maxLevel && (r = this.levels[n].width / this.levels[this.maxLevel].width), r;
        }, getNumTiles: function(n) {
          var r = this.getLevelScale(n);
          return r ? new e.Point(1, 1) : new e.Point(0, 0);
        }, getTileUrl: function(n, r, s) {
          var o = null;
          return n >= this.minLevel && n <= this.maxLevel && (o = this.levels[n].url), o;
        }, getContext2D: function(n, r, s) {
          var o = null;
          return n >= this.minLevel && n <= this.maxLevel && (o = this.levels[n].context2D), o;
        }, destroy: function(n) {
          this._freeupCanvasMemory(n);
        }, _buildLevels: function() {
          var n = [{ url: this._image.src, width: this._image.naturalWidth, height: this._image.naturalHeight }];
          if (!this.buildPyramid || !e.supportsCanvas) return delete this._image, n;
          var r = this._image.naturalWidth, s = this._image.naturalHeight, o = document.createElement("canvas"), l = o.getContext("2d");
          if (o.width = r, o.height = s, l.drawImage(this._image, 0, 0, r, s), n[0].context2D = l, delete this._image, e.isCanvasTainted(o)) return n;
          for (; r >= 2 && s >= 2; ) {
            r = Math.floor(r / 2), s = Math.floor(s / 2);
            var a = document.createElement("canvas"), u = a.getContext("2d");
            a.width = r, a.height = s, u.drawImage(o, 0, 0, r, s), n.splice(0, 0, { context2D: u, width: r, height: s }), o = a, l = u;
          }
          return n;
        }, _freeupCanvasMemory: function(n) {
          for (var r = 0; r < this.levels.length; r++) this.levels[r].context2D && (this.levels[r].context2D.canvas.height = 0, this.levels[r].context2D.canvas.width = 0, n && n.raiseEvent("image-unloaded", { context2D: this.levels[r].context2D }));
        } });
      })(i), (function(e) {
        e.TileSourceCollection = function(n, r, s, o) {
          e.console.error("TileSourceCollection is deprecated; use World instead");
        };
      })(i), (function(e) {
        e.ButtonState = { REST: 0, GROUP: 1, HOVER: 2, DOWN: 3 }, e.Button = function(u) {
          var c = this;
          e.EventSource.call(this), e.extend(true, this, { tooltip: null, srcRest: null, srcGroup: null, srcHover: null, srcDown: null, clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold, clickDistThreshold: e.DEFAULT_SETTINGS.clickDistThreshold, fadeDelay: 0, fadeLength: 2e3, onPress: null, onRelease: null, onClick: null, onEnter: null, onExit: null, onFocus: null, onBlur: null, userData: null }, u), this.element = u.element || e.makeNeutralElement("div"), u.element || (this.imgRest = e.makeTransparentImage(this.srcRest), this.imgGroup = e.makeTransparentImage(this.srcGroup), this.imgHover = e.makeTransparentImage(this.srcHover), this.imgDown = e.makeTransparentImage(this.srcDown), this.imgRest.alt = this.imgGroup.alt = this.imgHover.alt = this.imgDown.alt = this.tooltip, e.setElementPointerEventsNone(this.imgRest), e.setElementPointerEventsNone(this.imgGroup), e.setElementPointerEventsNone(this.imgHover), e.setElementPointerEventsNone(this.imgDown), this.element.style.position = "relative", e.setElementTouchActionNone(this.element), this.imgGroup.style.position = this.imgHover.style.position = this.imgDown.style.position = "absolute", this.imgGroup.style.top = this.imgHover.style.top = this.imgDown.style.top = "0px", this.imgGroup.style.left = this.imgHover.style.left = this.imgDown.style.left = "0px", this.imgHover.style.visibility = this.imgDown.style.visibility = "hidden", this.element.appendChild(this.imgRest), this.element.appendChild(this.imgGroup), this.element.appendChild(this.imgHover), this.element.appendChild(this.imgDown)), this.addHandler("press", this.onPress), this.addHandler("release", this.onRelease), this.addHandler("click", this.onClick), this.addHandler("enter", this.onEnter), this.addHandler("exit", this.onExit), this.addHandler("focus", this.onFocus), this.addHandler("blur", this.onBlur), this.currentState = e.ButtonState.GROUP, this.fadeBeginTime = null, this.shouldFade = false, this.element.style.display = "inline-block", this.element.style.position = "relative", this.element.title = this.tooltip, this.tracker = new e.MouseTracker({ userData: "Button.tracker", element: this.element, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, enterHandler: function(h) {
            h.insideElementPressed ? (l(c, e.ButtonState.DOWN), c.raiseEvent("enter", { originalEvent: h.originalEvent })) : h.buttonDownAny || l(c, e.ButtonState.HOVER);
          }, focusHandler: function(h) {
            c.tracker.enterHandler(h), c.raiseEvent("focus", { originalEvent: h.originalEvent });
          }, leaveHandler: function(h) {
            a(c, e.ButtonState.GROUP), h.insideElementPressed && c.raiseEvent("exit", { originalEvent: h.originalEvent });
          }, blurHandler: function(h) {
            c.tracker.leaveHandler(h), c.raiseEvent("blur", { originalEvent: h.originalEvent });
          }, pressHandler: function(h) {
            l(c, e.ButtonState.DOWN), c.raiseEvent("press", { originalEvent: h.originalEvent });
          }, releaseHandler: function(h) {
            h.insideElementPressed && h.insideElementReleased ? (a(c, e.ButtonState.HOVER), c.raiseEvent("release", { originalEvent: h.originalEvent })) : h.insideElementPressed ? a(c, e.ButtonState.GROUP) : l(c, e.ButtonState.HOVER);
          }, clickHandler: function(h) {
            h.quick && c.raiseEvent("click", { originalEvent: h.originalEvent });
          }, keyHandler: function(h) {
            h.keyCode === 13 ? (c.raiseEvent("click", { originalEvent: h.originalEvent }), c.raiseEvent("release", { originalEvent: h.originalEvent }), h.preventDefault = true) : h.preventDefault = false;
          } }), a(this, e.ButtonState.REST);
        }, e.extend(e.Button.prototype, e.EventSource.prototype, { notifyGroupEnter: function() {
          l(this, e.ButtonState.GROUP);
        }, notifyGroupExit: function() {
          a(this, e.ButtonState.REST);
        }, disable: function() {
          this.notifyGroupExit(), this.element.disabled = true, this.tracker.setTracking(false), e.setElementOpacity(this.element, 0.2, true);
        }, enable: function() {
          this.element.disabled = false, this.tracker.setTracking(true), e.setElementOpacity(this.element, 1, true), this.notifyGroupEnter();
        }, destroy: function() {
          this.imgRest && (this.element.removeChild(this.imgRest), this.imgRest = null), this.imgGroup && (this.element.removeChild(this.imgGroup), this.imgGroup = null), this.imgHover && (this.element.removeChild(this.imgHover), this.imgHover = null), this.imgDown && (this.element.removeChild(this.imgDown), this.imgDown = null), this.removeAllHandlers(), this.tracker.destroy(), this.element = null;
        } });
        function n(u) {
          e.requestAnimationFrame(function() {
            r(u);
          });
        }
        function r(u) {
          var c, h, f;
          u.shouldFade && (c = e.now(), h = c - u.fadeBeginTime, f = 1 - h / u.fadeLength, f = Math.min(1, f), f = Math.max(0, f), u.imgGroup && e.setElementOpacity(u.imgGroup, f, true), f > 0 && n(u));
        }
        function s(u) {
          u.shouldFade = true, u.fadeBeginTime = e.now() + u.fadeDelay, window.setTimeout(function() {
            n(u);
          }, u.fadeDelay);
        }
        function o(u) {
          u.shouldFade = false, u.imgGroup && e.setElementOpacity(u.imgGroup, 1, true);
        }
        function l(u, c) {
          u.element.disabled || (c >= e.ButtonState.GROUP && u.currentState === e.ButtonState.REST && (o(u), u.currentState = e.ButtonState.GROUP), c >= e.ButtonState.HOVER && u.currentState === e.ButtonState.GROUP && (u.imgHover && (u.imgHover.style.visibility = ""), u.currentState = e.ButtonState.HOVER), c >= e.ButtonState.DOWN && u.currentState === e.ButtonState.HOVER && (u.imgDown && (u.imgDown.style.visibility = ""), u.currentState = e.ButtonState.DOWN));
        }
        function a(u, c) {
          u.element.disabled || (c <= e.ButtonState.HOVER && u.currentState === e.ButtonState.DOWN && (u.imgDown && (u.imgDown.style.visibility = "hidden"), u.currentState = e.ButtonState.HOVER), c <= e.ButtonState.GROUP && u.currentState === e.ButtonState.HOVER && (u.imgHover && (u.imgHover.style.visibility = "hidden"), u.currentState = e.ButtonState.GROUP), c <= e.ButtonState.REST && u.currentState === e.ButtonState.GROUP && (s(u), u.currentState = e.ButtonState.REST));
        }
      })(i), (function(e) {
        e.ButtonGroup = function(n) {
          e.extend(true, this, { buttons: [], clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold, clickDistThreshold: e.DEFAULT_SETTINGS.clickDistThreshold, labelText: "" }, n);
          var r = this.buttons.concat([]), s = this, o;
          if (this.element = n.element || e.makeNeutralElement("div"), !n.group) for (this.element.style.display = "inline-block", o = 0; o < r.length; o++) this.element.appendChild(r[o].element);
          e.setElementTouchActionNone(this.element), this.tracker = new e.MouseTracker({ userData: "ButtonGroup.tracker", element: this.element, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, enterHandler: function(l) {
            var a;
            for (a = 0; a < s.buttons.length; a++) s.buttons[a].notifyGroupEnter();
          }, leaveHandler: function(l) {
            var a;
            if (!l.insideElementPressed) for (a = 0; a < s.buttons.length; a++) s.buttons[a].notifyGroupExit();
          } });
        }, e.ButtonGroup.prototype = { addButton: function(n) {
          this.buttons.push(n), this.element.appendChild(n.element);
        }, emulateEnter: function() {
          this.tracker.enterHandler({ eventSource: this.tracker });
        }, emulateLeave: function() {
          this.tracker.leaveHandler({ eventSource: this.tracker });
        }, destroy: function() {
          for (; this.buttons.length; ) {
            var n = this.buttons.pop();
            this.element.removeChild(n.element), n.destroy();
          }
          this.tracker.destroy(), this.element = null;
        } };
      })(i), (function(e) {
        e.Rect = function(n, r, s, o, l) {
          this.x = typeof n == "number" ? n : 0, this.y = typeof r == "number" ? r : 0, this.width = typeof s == "number" ? s : 0, this.height = typeof o == "number" ? o : 0, this.degrees = typeof l == "number" ? l : 0, this.degrees = e.positiveModulo(this.degrees, 360);
          var a, u;
          this.degrees >= 270 ? (a = this.getTopRight(), this.x = a.x, this.y = a.y, u = this.height, this.height = this.width, this.width = u, this.degrees -= 270) : this.degrees >= 180 ? (a = this.getBottomRight(), this.x = a.x, this.y = a.y, this.degrees -= 180) : this.degrees >= 90 && (a = this.getBottomLeft(), this.x = a.x, this.y = a.y, u = this.height, this.height = this.width, this.width = u, this.degrees -= 90);
        }, e.Rect.fromSummits = function(n, r, s) {
          var o = n.distanceTo(r), l = n.distanceTo(s), a = r.minus(n), u = Math.atan(a.y / a.x);
          return a.x < 0 ? u += Math.PI : a.y < 0 && (u += 2 * Math.PI), new e.Rect(n.x, n.y, o, l, u / Math.PI * 180);
        }, e.Rect.prototype = { clone: function() {
          return new e.Rect(this.x, this.y, this.width, this.height, this.degrees);
        }, getAspectRatio: function() {
          return this.width / this.height;
        }, getTopLeft: function() {
          return new e.Point(this.x, this.y);
        }, getBottomRight: function() {
          return new e.Point(this.x + this.width, this.y + this.height).rotate(this.degrees, this.getTopLeft());
        }, getTopRight: function() {
          return new e.Point(this.x + this.width, this.y).rotate(this.degrees, this.getTopLeft());
        }, getBottomLeft: function() {
          return new e.Point(this.x, this.y + this.height).rotate(this.degrees, this.getTopLeft());
        }, getCenter: function() {
          return new e.Point(this.x + this.width / 2, this.y + this.height / 2).rotate(this.degrees, this.getTopLeft());
        }, getSize: function() {
          return new e.Point(this.width, this.height);
        }, equals: function(n) {
          return n instanceof e.Rect && this.x === n.x && this.y === n.y && this.width === n.width && this.height === n.height && this.degrees === n.degrees;
        }, times: function(n) {
          return new e.Rect(this.x * n, this.y * n, this.width * n, this.height * n, this.degrees);
        }, translate: function(n) {
          return new e.Rect(this.x + n.x, this.y + n.y, this.width, this.height, this.degrees);
        }, union: function(n) {
          var r = this.getBoundingBox(), s = n.getBoundingBox(), o = Math.min(r.x, s.x), l = Math.min(r.y, s.y), a = Math.max(r.x + r.width, s.x + s.width), u = Math.max(r.y + r.height, s.y + s.height);
          return new e.Rect(o, l, a - o, u - l);
        }, intersection: function(n) {
          var r = 1e-10, s = [], o = this.getTopLeft();
          n.containsPoint(o, r) && s.push(o);
          var l = this.getTopRight();
          n.containsPoint(l, r) && s.push(l);
          var a = this.getBottomLeft();
          n.containsPoint(a, r) && s.push(a);
          var u = this.getBottomRight();
          n.containsPoint(u, r) && s.push(u);
          var c = n.getTopLeft();
          this.containsPoint(c, r) && s.push(c);
          var h = n.getTopRight();
          this.containsPoint(h, r) && s.push(h);
          var f = n.getBottomLeft();
          this.containsPoint(f, r) && s.push(f);
          var m = n.getBottomRight();
          this.containsPoint(m, r) && s.push(m);
          for (var v = this._getSegments(), y = n._getSegments(), T = 0; T < v.length; T++) for (var x = v[T], E = 0; E < y.length; E++) {
            var M = y[E], L = U(x[0], x[1], M[0], M[1]);
            L && s.push(L);
          }
          function U(j, ie, ce, ye) {
            var me = ie.minus(j), pe = ye.minus(ce), oe = -pe.x * me.y + me.x * pe.y;
            if (oe === 0) return null;
            var Ae = (me.x * (j.y - ce.y) - me.y * (j.x - ce.x)) / oe, De = (pe.x * (j.y - ce.y) - pe.y * (j.x - ce.x)) / oe;
            return -r <= Ae && Ae <= 1 - r && -r <= De && De <= 1 - r ? new e.Point(j.x + De * me.x, j.y + De * me.y) : null;
          }
          if (s.length === 0) return null;
          for (var K = s[0].x, q = s[0].x, Y = s[0].y, te = s[0].y, fe = 1; fe < s.length; fe++) {
            var $ = s[fe];
            $.x < K && (K = $.x), $.x > q && (q = $.x), $.y < Y && (Y = $.y), $.y > te && (te = $.y);
          }
          return new e.Rect(K, Y, q - K, te - Y);
        }, _getSegments: function() {
          var n = this.getTopLeft(), r = this.getTopRight(), s = this.getBottomLeft(), o = this.getBottomRight();
          return [[n, r], [r, o], [o, s], [s, n]];
        }, rotate: function(n, r) {
          if (n = e.positiveModulo(n, 360), n === 0) return this.clone();
          r = r || this.getCenter();
          var s = this.getTopLeft().rotate(n, r), o = this.getTopRight().rotate(n, r), l = o.minus(s);
          l = l.apply(function(u) {
            var c = 1e-15;
            return Math.abs(u) < c ? 0 : u;
          });
          var a = Math.atan(l.y / l.x);
          return l.x < 0 ? a += Math.PI : l.y < 0 && (a += 2 * Math.PI), new e.Rect(s.x, s.y, this.width, this.height, a / Math.PI * 180);
        }, getBoundingBox: function() {
          if (this.degrees === 0) return this.clone();
          var n = this.getTopLeft(), r = this.getTopRight(), s = this.getBottomLeft(), o = this.getBottomRight(), l = Math.min(n.x, r.x, s.x, o.x), a = Math.max(n.x, r.x, s.x, o.x), u = Math.min(n.y, r.y, s.y, o.y), c = Math.max(n.y, r.y, s.y, o.y);
          return new e.Rect(l, u, a - l, c - u);
        }, getIntegerBoundingBox: function() {
          var n = this.getBoundingBox(), r = Math.floor(n.x), s = Math.floor(n.y), o = Math.ceil(n.width + n.x - r), l = Math.ceil(n.height + n.y - s);
          return new e.Rect(r, s, o, l);
        }, containsPoint: function(n, r) {
          r = r || 0;
          var s = this.getTopLeft(), o = this.getTopRight(), l = this.getBottomLeft(), a = o.minus(s), u = l.minus(s);
          return (n.x - s.x) * a.x + (n.y - s.y) * a.y >= -r && (n.x - o.x) * a.x + (n.y - o.y) * a.y <= r && (n.x - s.x) * u.x + (n.y - s.y) * u.y >= -r && (n.x - l.x) * u.x + (n.y - l.y) * u.y <= r;
        }, toString: function() {
          return "[" + Math.round(this.x * 100) / 100 + ", " + Math.round(this.y * 100) / 100 + ", " + Math.round(this.width * 100) / 100 + "x" + Math.round(this.height * 100) / 100 + ", " + Math.round(this.degrees * 100) / 100 + "deg]";
        } };
      })(i), (function(e) {
        var n = {};
        e.ReferenceStrip = function(f) {
          var m = this, v = f.viewer, y = e.getElementSize(v.element), T, x, E;
          for (f.id || (f.id = "referencestrip-" + e.now(), this.element = e.makeNeutralElement("div"), this.element.id = f.id, this.element.className = "referencestrip"), f = e.extend(true, { sizeRatio: e.DEFAULT_SETTINGS.referenceStripSizeRatio, position: e.DEFAULT_SETTINGS.referenceStripPosition, scroll: e.DEFAULT_SETTINGS.referenceStripScroll, clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold }, f, { element: this.element }), e.extend(this, f), n[this.id] = { animating: false }, this.minPixelRatio = this.viewer.minPixelRatio, this.element.tabIndex = 0, x = this.element.style, x.marginTop = "0px", x.marginRight = "0px", x.marginBottom = "0px", x.marginLeft = "0px", x.left = "0px", x.bottom = "0px", x.border = "0px", x.background = "#000", x.position = "relative", e.setElementTouchActionNone(this.element), e.setElementOpacity(this.element, 0.8), this.viewer = v, this.tracker = new e.MouseTracker({ userData: "ReferenceStrip.tracker", element: this.element, clickHandler: e.delegate(this, r), dragHandler: e.delegate(this, s), scrollHandler: e.delegate(this, o), enterHandler: e.delegate(this, a), leaveHandler: e.delegate(this, u), keyDownHandler: e.delegate(this, c), keyHandler: e.delegate(this, h), preProcessEventHandler: function(M) {
            M.eventType === "wheel" && (M.preventDefault = true);
          } }), f.width && f.height ? (this.element.style.width = f.width + "px", this.element.style.height = f.height + "px", v.addControl(this.element, { anchor: e.ControlAnchor.BOTTOM_LEFT })) : f.scroll === "horizontal" ? (this.element.style.width = y.x * f.sizeRatio * v.tileSources.length + 12 * v.tileSources.length + "px", this.element.style.height = y.y * f.sizeRatio + "px", v.addControl(this.element, { anchor: e.ControlAnchor.BOTTOM_LEFT })) : (this.element.style.height = y.y * f.sizeRatio * v.tileSources.length + 12 * v.tileSources.length + "px", this.element.style.width = y.x * f.sizeRatio + "px", v.addControl(this.element, { anchor: e.ControlAnchor.TOP_LEFT })), this.panelWidth = y.x * this.sizeRatio + 8, this.panelHeight = y.y * this.sizeRatio + 8, this.panels = [], this.miniViewers = {}, E = 0; E < v.tileSources.length; E++) T = e.makeNeutralElement("div"), T.id = this.element.id + "-" + E, T.style.width = m.panelWidth + "px", T.style.height = m.panelHeight + "px", T.style.display = "inline", T.style.float = "left", T.style.cssFloat = "left", T.style.padding = "2px", e.setElementTouchActionNone(T), e.setElementPointerEventsNone(T), this.element.appendChild(T), T.activePanel = false, this.panels.push(T);
          l(this, this.scroll === "vertical" ? y.y : y.x, 0), this.setFocus(0);
        }, e.ReferenceStrip.prototype = { setFocus: function(f) {
          var m = this.element.querySelector("#" + this.element.id + "-" + f), v = e.getElementSize(this.viewer.canvas), y = Number(this.element.style.width.replace("px", "")), T = Number(this.element.style.height.replace("px", "")), x = -Number(this.element.style.marginLeft.replace("px", "")), E = -Number(this.element.style.marginTop.replace("px", "")), M;
          this.currentSelected !== m && (this.currentSelected && (this.currentSelected.style.background = "#000"), this.currentSelected = m, this.currentSelected.style.background = "#999", this.scroll === "horizontal" ? (M = Number(f) * (this.panelWidth + 3), M > x + v.x - this.panelWidth ? (M = Math.min(M, y - v.x), this.element.style.marginLeft = -M + "px", l(this, v.x, -M)) : M < x && (M = Math.max(0, M - v.x / 2), this.element.style.marginLeft = -M + "px", l(this, v.x, -M))) : (M = Number(f) * (this.panelHeight + 3), M > E + v.y - this.panelHeight ? (M = Math.min(M, T - v.y), this.element.style.marginTop = -M + "px", l(this, v.y, -M)) : M < E && (M = Math.max(0, M - v.y / 2), this.element.style.marginTop = -M + "px", l(this, v.y, -M))), this.currentPage = f, a.call(this, { eventSource: this.tracker }));
        }, update: function() {
          return !!n[this.id].animating;
        }, destroy: function() {
          if (this.miniViewers) for (var f in this.miniViewers) this.miniViewers[f].destroy();
          this.tracker.destroy(), this.element && this.viewer.removeControl(this.element);
        } };
        function r(f) {
          if (f.quick) {
            var m;
            this.scroll === "horizontal" ? m = Math.floor(f.position.x / (this.panelWidth + 4)) : m = Math.floor(f.position.y / this.panelHeight), this.viewer.goToPage(m);
          }
          this.element.focus();
        }
        function s(f) {
          if (this.dragging = true, this.element) {
            var m = Number(this.element.style.marginLeft.replace("px", "")), v = Number(this.element.style.marginTop.replace("px", "")), y = Number(this.element.style.width.replace("px", "")), T = Number(this.element.style.height.replace("px", "")), x = e.getElementSize(this.viewer.canvas);
            this.scroll === "horizontal" ? -f.delta.x > 0 ? m > -(y - x.x) && (this.element.style.marginLeft = m + f.delta.x * 2 + "px", l(this, x.x, m + f.delta.x * 2)) : -f.delta.x < 0 && m < 0 && (this.element.style.marginLeft = m + f.delta.x * 2 + "px", l(this, x.x, m + f.delta.x * 2)) : -f.delta.y > 0 ? v > -(T - x.y) && (this.element.style.marginTop = v + f.delta.y * 2 + "px", l(this, x.y, v + f.delta.y * 2)) : -f.delta.y < 0 && v < 0 && (this.element.style.marginTop = v + f.delta.y * 2 + "px", l(this, x.y, v + f.delta.y * 2));
          }
        }
        function o(f) {
          if (this.element) {
            var m = Number(this.element.style.marginLeft.replace("px", "")), v = Number(this.element.style.marginTop.replace("px", "")), y = Number(this.element.style.width.replace("px", "")), T = Number(this.element.style.height.replace("px", "")), x = e.getElementSize(this.viewer.canvas);
            this.scroll === "horizontal" ? f.scroll > 0 ? m > -(y - x.x) && (this.element.style.marginLeft = m - f.scroll * 60 + "px", l(this, x.x, m - f.scroll * 60)) : f.scroll < 0 && m < 0 && (this.element.style.marginLeft = m - f.scroll * 60 + "px", l(this, x.x, m - f.scroll * 60)) : f.scroll < 0 ? v > x.y - T && (this.element.style.marginTop = v + f.scroll * 60 + "px", l(this, x.y, v + f.scroll * 60)) : f.scroll > 0 && v < 0 && (this.element.style.marginTop = v + f.scroll * 60 + "px", l(this, x.y, v + f.scroll * 60)), f.preventDefault = true;
          }
        }
        function l(f, m, v) {
          var y, T, x, E, M, L;
          for (f.scroll === "horizontal" ? y = f.panelWidth : y = f.panelHeight, T = Math.ceil(m / y) + 5, x = Math.ceil((Math.abs(v) + m) / y) + 1, T = x - T, T = T < 0 ? 0 : T, M = T; M < x && M < f.panels.length; M++) if (L = f.panels[M], !L.activePanel) {
            var U, K = f.viewer.tileSources[M];
            K.referenceStripThumbnailUrl ? U = { type: "image", url: K.referenceStripThumbnailUrl } : U = K, E = new e.Viewer({ id: L.id, tileSources: [U], element: L, navigatorSizeRatio: f.sizeRatio, showNavigator: false, mouseNavEnabled: false, showNavigationControl: false, showSequenceControl: false, immediateRender: true, blendTime: 0, animationTime: 0, loadTilesWithAjax: f.viewer.loadTilesWithAjax, ajaxHeaders: f.viewer.ajaxHeaders, drawer: "canvas" }), e.setElementPointerEventsNone(E.canvas), e.setElementPointerEventsNone(E.container), E.innerTracker.setTracking(false), E.outerTracker.setTracking(false), f.miniViewers[L.id] = E, L.activePanel = true;
          }
        }
        function a(f) {
          var m = f.eventSource.element;
          this.scroll === "horizontal" ? m.style.marginBottom = "0px" : m.style.marginLeft = "0px";
        }
        function u(f) {
          var m = f.eventSource.element;
          this.scroll === "horizontal" ? m.style.marginBottom = "-" + e.getElementSize(m).y / 2 + "px" : m.style.marginLeft = "-" + e.getElementSize(m).x / 2 + "px";
        }
        function c(f) {
          if (!f.ctrl && !f.alt && !f.meta) switch (f.keyCode) {
            case 38:
              o.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), f.preventDefault = true;
              break;
            case 40:
              o.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), f.preventDefault = true;
              break;
            case 37:
              o.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), f.preventDefault = true;
              break;
            case 39:
              o.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), f.preventDefault = true;
              break;
            default:
              f.preventDefault = false;
              break;
          }
          else f.preventDefault = false;
        }
        function h(f) {
          if (!f.ctrl && !f.alt && !f.meta) switch (f.keyCode) {
            case 61:
              o.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), f.preventDefault = true;
              break;
            case 45:
              o.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), f.preventDefault = true;
              break;
            case 48:
            case 119:
            case 87:
              o.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), f.preventDefault = true;
              break;
            case 115:
            case 83:
              o.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), f.preventDefault = true;
              break;
            case 97:
              o.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), f.preventDefault = true;
              break;
            case 100:
              o.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), f.preventDefault = true;
              break;
            default:
              f.preventDefault = false;
              break;
          }
          else f.preventDefault = false;
        }
      })(i), (function(e) {
        e.DisplayRect = function(n, r, s, o, l, a) {
          e.Rect.apply(this, [n, r, s, o]), this.minLevel = l, this.maxLevel = a;
        }, e.extend(e.DisplayRect.prototype, e.Rect.prototype);
      })(i), (function(e) {
        e.Spring = function(r) {
          var s = arguments;
          typeof r != "object" && (r = { initial: s.length && typeof s[0] == "number" ? s[0] : void 0, springStiffness: s.length > 1 ? s[1].springStiffness : 5, animationTime: s.length > 1 ? s[1].animationTime : 1.5 }), e.console.assert(typeof r.springStiffness == "number" && r.springStiffness !== 0, "[OpenSeadragon.Spring] options.springStiffness must be a non-zero number"), e.console.assert(typeof r.animationTime == "number" && r.animationTime >= 0, "[OpenSeadragon.Spring] options.animationTime must be a number greater than or equal to 0"), r.exponential && (this._exponential = true, delete r.exponential), e.extend(true, this, r), this.current = { value: typeof this.initial == "number" ? this.initial : this._exponential ? 0 : 1, time: e.now() }, e.console.assert(!this._exponential || this.current.value !== 0, "[OpenSeadragon.Spring] value must be non-zero for exponential springs"), this.start = { value: this.current.value, time: this.current.time }, this.target = { value: this.current.value, time: this.current.time }, this._exponential && (this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value), this.current._logValue = Math.log(this.current.value));
        }, e.Spring.prototype = { resetTo: function(r) {
          e.console.assert(!this._exponential || r !== 0, "[OpenSeadragon.Spring.resetTo] target must be non-zero for exponential springs"), this.start.value = this.target.value = this.current.value = r, this.start.time = this.target.time = this.current.time = e.now(), this._exponential && (this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value), this.current._logValue = Math.log(this.current.value));
        }, springTo: function(r) {
          e.console.assert(!this._exponential || r !== 0, "[OpenSeadragon.Spring.springTo] target must be non-zero for exponential springs"), this.start.value = this.current.value, this.start.time = this.current.time, this.target.value = r, this.target.time = this.start.time + 1e3 * this.animationTime, this._exponential && (this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value));
        }, shiftBy: function(r) {
          this.start.value += r, this.target.value += r, this._exponential && (e.console.assert(this.target.value !== 0 && this.start.value !== 0, "[OpenSeadragon.Spring.shiftBy] spring value must be non-zero for exponential springs"), this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value));
        }, setExponential: function(r) {
          this._exponential = r, this._exponential && (e.console.assert(this.current.value !== 0 && this.target.value !== 0 && this.start.value !== 0, "[OpenSeadragon.Spring.setExponential] spring value must be non-zero for exponential springs"), this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value), this.current._logValue = Math.log(this.current.value));
        }, update: function() {
          this.current.time = e.now();
          let r, s;
          if (this._exponential ? (r = this.start._logValue, s = this.target._logValue) : (r = this.start.value, s = this.target.value), this.current.time >= this.target.time) this.current.value = this.target.value;
          else {
            let o = r + (s - r) * n(this.springStiffness, (this.current.time - this.start.time) / (this.target.time - this.start.time));
            this._exponential ? this.current.value = Math.exp(o) : this.current.value = o;
          }
          return this.current.value !== this.target.value;
        }, isAtTargetValue: function() {
          return this.current.value === this.target.value;
        } };
        function n(r, s) {
          return (1 - Math.exp(r * -s)) / (1 - Math.exp(-r));
        }
      })(i), (function(e) {
        e.ImageJob = function(r) {
          e.extend(true, this, { timeout: e.DEFAULT_SETTINGS.timeout, jobId: null, tries: 0 }, r), this.data = null, this.userData = {}, this.errorMsg = null;
        }, e.ImageJob.prototype = { start: function() {
          this.tries++;
          var r = this, s = this.abort;
          this.jobId = window.setTimeout(function() {
            r.finish(null, null, "Image load exceeded timeout (" + r.timeout + " ms)");
          }, this.timeout), this.abort = function() {
            r.source.downloadTileAbort(r), typeof s == "function" && s();
          }, this.source.downloadTileStart(this);
        }, finish: function(r, s, o) {
          this.data = r, this.request = s, this.errorMsg = o, this.jobId && window.clearTimeout(this.jobId), this.callback(this);
        } }, e.ImageLoader = function(r) {
          e.extend(true, this, { jobLimit: e.DEFAULT_SETTINGS.imageLoaderLimit, timeout: e.DEFAULT_SETTINGS.timeout, jobQueue: [], failedTiles: [], jobsInProgress: 0 }, r);
        }, e.ImageLoader.prototype = { addJob: function(r) {
          if (!r.source) {
            e.console.error("ImageLoader.prototype.addJob() requires [options.source]. TileSource since new API defines how images are fetched. Creating a dummy TileSource.");
            var s = e.TileSource.prototype;
            r.source = { downloadTileStart: s.downloadTileStart, downloadTileAbort: s.downloadTileAbort };
          }
          var o = this, l = function(c) {
            n(o, c, r.callback);
          }, a = { src: r.src, tile: r.tile || {}, source: r.source, loadWithAjax: r.loadWithAjax, ajaxHeaders: r.loadWithAjax ? r.ajaxHeaders : null, crossOriginPolicy: r.crossOriginPolicy, ajaxWithCredentials: r.ajaxWithCredentials, postData: r.postData, callback: l, abort: r.abort, timeout: this.timeout }, u = new e.ImageJob(a);
          !this.jobLimit || this.jobsInProgress < this.jobLimit ? (u.start(), this.jobsInProgress++) : this.jobQueue.push(u);
        }, clear: function() {
          for (var r = 0; r < this.jobQueue.length; r++) {
            var s = this.jobQueue[r];
            typeof s.abort == "function" && s.abort();
          }
          this.jobQueue = [];
        } };
        function n(r, s, o) {
          s.errorMsg !== "" && (s.data === null || s.data === void 0) && s.tries < 1 + r.tileRetryMax && r.failedTiles.push(s);
          var l;
          r.jobsInProgress--, (!r.jobLimit || r.jobsInProgress < r.jobLimit) && r.jobQueue.length > 0 && (l = r.jobQueue.shift(), l.start(), r.jobsInProgress++), r.tileRetryMax > 0 && r.jobQueue.length === 0 && (!r.jobLimit || r.jobsInProgress < r.jobLimit) && r.failedTiles.length > 0 && (l = r.failedTiles.shift(), setTimeout(function() {
            l.start();
          }, r.tileRetryDelay), r.jobsInProgress++), o(s.data, s.errorMsg, s.request);
        }
      })(i), (function(e) {
        e.Tile = function(n, r, s, o, l, a, u, c, h, f, m, v) {
          this.level = n, this.x = r, this.y = s, this.bounds = o, this.positionedBounds = new i.Rect(o.x, o.y, o.width, o.height), this.sourceBounds = f, this.exists = l, this._url = a, this.postData = m, this.context2D = u, this.loadWithAjax = c, this.ajaxHeaders = h, v === void 0 && (e.console.warn("Tile constructor needs 'cacheKey' variable: creation tile cache in Tile class is deprecated. TileSource.prototype.getTileHashKey will be used."), v = e.TileSource.prototype.getTileHashKey(n, r, s, a, h, m)), this.cacheKey = v, this.loaded = false, this.loading = false, this.element = null, this.imgElement = null, this.style = null, this.position = null, this.size = null, this.flipped = false, this.blendStart = null, this.opacity = null, this.squaredDistance = null, this.visibility = null, this.hasTransparency = false, this.beingDrawn = false, this.lastTouchTime = 0, this.isRightMost = false, this.isBottomMost = false;
        }, e.Tile.prototype = { toString: function() {
          return this.level + "/" + this.x + "_" + this.y;
        }, _hasTransparencyChannel: function() {
          return console.warn("Tile.prototype._hasTransparencyChannel() has been deprecated and will be removed in the future. Use TileSource.prototype.hasTransparency() instead."), !!this.context2D || this.getUrl().match(".png");
        }, get image() {
          return e.console.error("[Tile.image] property has been deprecated. Use [Tile.prototype.getImage] instead."), this.getImage();
        }, get url() {
          return e.console.error("[Tile.url] property has been deprecated. Use [Tile.prototype.getUrl] instead."), this.getUrl();
        }, getImage: function() {
          return this.cacheImageRecord.getImage();
        }, getUrl: function() {
          return typeof this._url == "function" ? this._url() : this._url;
        }, getCanvasContext: function() {
          return this.context2D || this.cacheImageRecord && this.cacheImageRecord.getRenderedContext();
        }, getScaleForEdgeSmoothing: function() {
          var n;
          if (this.cacheImageRecord) n = this.cacheImageRecord.getRenderedContext();
          else if (this.context2D) n = this.context2D;
          else return e.console.warn("[Tile.drawCanvas] attempting to get tile scale %s when tile's not cached", this.toString()), 1;
          return n.canvas.width / (this.size.x * e.pixelDensityRatio);
        }, getTranslationForEdgeSmoothing: function(n, r, s) {
          var o = Math.max(1, Math.ceil((s.x - r.x) / 2)), l = Math.max(1, Math.ceil((s.y - r.y) / 2));
          return new e.Point(o, l).minus(this.position.times(e.pixelDensityRatio).times(n || 1).apply(function(a) {
            return a % 1;
          }));
        }, unload: function() {
          this.imgElement && this.imgElement.parentNode && this.imgElement.parentNode.removeChild(this.imgElement), this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element), this.element = null, this.imgElement = null, this.loaded = false, this.loading = false;
        } };
      })(i), (function(e) {
        e.OverlayPlacement = e.Placement, e.OverlayRotationMode = e.freezeObject({ NO_ROTATION: 1, EXACT: 2, BOUNDING_BOX: 3 }), e.Overlay = function(n, r, s) {
          var o;
          e.isPlainObject(n) ? o = n : o = { element: n, location: r, placement: s }, this.elementWrapper = document.createElement("div"), this.element = o.element, this.elementWrapper.appendChild(this.element), this.element.id ? this.elementWrapper.id = "overlay-wrapper-" + this.element.id : this.elementWrapper.id = "overlay-wrapper", this.style = this.elementWrapper.style, this._init(o);
        }, e.Overlay.prototype = { _init: function(n) {
          this.location = n.location, this.placement = n.placement === void 0 ? e.Placement.TOP_LEFT : n.placement, this.onDraw = n.onDraw, this.checkResize = n.checkResize === void 0 ? true : n.checkResize, this.width = n.width === void 0 ? null : n.width, this.height = n.height === void 0 ? null : n.height, this.rotationMode = n.rotationMode || e.OverlayRotationMode.EXACT, this.location instanceof e.Rect && (this.width = this.location.width, this.height = this.location.height, this.location = this.location.getTopLeft(), this.placement = e.Placement.TOP_LEFT), this.scales = this.width !== null && this.height !== null, this.bounds = new e.Rect(this.location.x, this.location.y, this.width, this.height), this.position = this.location;
        }, adjust: function(n, r) {
          var s = e.Placement.properties[this.placement];
          s && (s.isHorizontallyCentered ? n.x -= r.x / 2 : s.isRight && (n.x -= r.x), s.isVerticallyCentered ? n.y -= r.y / 2 : s.isBottom && (n.y -= r.y));
        }, destroy: function() {
          var n = this.elementWrapper, r = this.style;
          n.parentNode && (n.parentNode.removeChild(n), n.prevElementParent && (r.display = "none", document.body.appendChild(n))), this.onDraw = null, r.top = "", r.left = "", r.position = "", this.width !== null && (r.width = ""), this.height !== null && (r.height = "");
          var s = e.getCssPropertyWithVendorPrefix("transformOrigin"), o = e.getCssPropertyWithVendorPrefix("transform");
          s && o && (r[s] = "", r[o] = "");
        }, drawHTML: function(n, r) {
          var s = this.elementWrapper;
          s.parentNode !== n && (s.prevElementParent = s.parentNode, s.prevNextSibling = s.nextSibling, n.appendChild(s), this.style.position = "absolute", this.size = e.getElementSize(this.elementWrapper));
          var o = this._getOverlayPositionAndSize(r), l = o.position, a = this.size = o.size, u = "";
          r.overlayPreserveContentDirection && (u = r.flipped ? " scaleX(-1)" : " scaleX(1)");
          var c = r.flipped ? -o.rotate : o.rotate, h = r.flipped ? " scaleX(-1)" : "";
          if (this.onDraw) this.onDraw(l, a, this.element);
          else {
            var f = this.style, m = this.element.style;
            m.display = "block", f.left = l.x + "px", f.top = l.y + "px", this.width !== null && (m.width = a.x + "px"), this.height !== null && (m.height = a.y + "px");
            var v = e.getCssPropertyWithVendorPrefix("transformOrigin"), y = e.getCssPropertyWithVendorPrefix("transform");
            v && y && (c && !r.flipped ? (m[y] = "", f[v] = this._getTransformOrigin(), f[y] = "rotate(" + c + "deg)") : !c && r.flipped ? (m[y] = u, f[v] = this._getTransformOrigin(), f[y] = h) : c && r.flipped ? (m[y] = u, f[v] = this._getTransformOrigin(), f[y] = "rotate(" + c + "deg)" + h) : (m[y] = "", f[v] = "", f[y] = "")), f.display = "flex";
          }
        }, _getOverlayPositionAndSize: function(n) {
          var r = n.pixelFromPoint(this.location, true), s = this._getSizeInPixels(n);
          this.adjust(r, s);
          var o = 0;
          if (n.getRotation(true) && this.rotationMode !== e.OverlayRotationMode.NO_ROTATION) if (this.rotationMode === e.OverlayRotationMode.BOUNDING_BOX && this.width !== null && this.height !== null) {
            var l = new e.Rect(r.x, r.y, s.x, s.y), a = this._getBoundingBox(l, n.getRotation(true));
            r = a.getTopLeft(), s = a.getSize();
          } else o = n.getRotation(true);
          return n.flipped && (r.x = n.getContainerSize().x - r.x), { position: r, size: s, rotate: o };
        }, _getSizeInPixels: function(n) {
          var r = this.size.x, s = this.size.y;
          if (this.width !== null || this.height !== null) {
            var o = n.deltaPixelsFromPointsNoRotate(new e.Point(this.width || 0, this.height || 0), true);
            this.width !== null && (r = o.x), this.height !== null && (s = o.y);
          }
          if (this.checkResize && (this.width === null || this.height === null)) {
            var l = this.size = e.getElementSize(this.elementWrapper);
            this.width === null && (r = l.x), this.height === null && (s = l.y);
          }
          return new e.Point(r, s);
        }, _getBoundingBox: function(n, r) {
          var s = this._getPlacementPoint(n);
          return n.rotate(r, s).getBoundingBox();
        }, _getPlacementPoint: function(n) {
          var r = new e.Point(n.x, n.y), s = e.Placement.properties[this.placement];
          return s && (s.isHorizontallyCentered ? r.x += n.width / 2 : s.isRight && (r.x += n.width), s.isVerticallyCentered ? r.y += n.height / 2 : s.isBottom && (r.y += n.height)), r;
        }, _getTransformOrigin: function() {
          var n = "", r = e.Placement.properties[this.placement];
          return r && (r.isLeft ? n = "left" : r.isRight && (n = "right"), r.isTop ? n += " top" : r.isBottom && (n += " bottom")), n;
        }, update: function(n, r) {
          var s = e.isPlainObject(n) ? n : { location: n, placement: r };
          this._init({ location: s.location || this.location, placement: s.placement !== void 0 ? s.placement : this.placement, onDraw: s.onDraw || this.onDraw, checkResize: s.checkResize || this.checkResize, width: s.width !== void 0 ? s.width : this.width, height: s.height !== void 0 ? s.height : this.height, rotationMode: s.rotationMode || this.rotationMode });
        }, getBounds: function(n) {
          e.console.assert(n, "A viewport must now be passed to Overlay.getBounds.");
          var r = this.width, s = this.height;
          if (r === null || s === null) {
            var o = n.deltaPointsFromPixelsNoRotate(this.size, true);
            r === null && (r = o.x), s === null && (s = o.y);
          }
          var l = this.location.clone();
          return this.adjust(l, new e.Point(r, s)), this._adjustBoundsForRotation(n, new e.Rect(l.x, l.y, r, s));
        }, _adjustBoundsForRotation: function(n, r) {
          if (!n || n.getRotation(true) === 0 || this.rotationMode === e.OverlayRotationMode.EXACT) return r;
          if (this.rotationMode === e.OverlayRotationMode.BOUNDING_BOX) {
            if (this.width === null || this.height === null) return r;
            var s = this._getOverlayPositionAndSize(n);
            return n.viewerElementToViewportRectangle(new e.Rect(s.position.x, s.position.y, s.size.x, s.size.y));
          }
          return r.rotate(-n.getRotation(true), this._getPlacementPoint(r));
        } };
      })(i), (function(e) {
        const n = e;
        n.DrawerBase = class {
          constructor(s) {
            e.console.assert(s.viewer, "[Drawer] options.viewer is required"), e.console.assert(s.viewport, "[Drawer] options.viewport is required"), e.console.assert(s.element, "[Drawer] options.element is required"), this.viewer = s.viewer, this.viewport = s.viewport, this.debugGridColor = typeof s.debugGridColor == "string" ? [s.debugGridColor] : s.debugGridColor || e.DEFAULT_SETTINGS.debugGridColor, this.options = s.options || {}, this.container = e.getElement(s.element), this._renderingTarget = this._createDrawingElement(), this.canvas.style.width = "100%", this.canvas.style.height = "100%", this.canvas.style.position = "absolute", this.canvas.style.left = "0", e.setElementOpacity(this.canvas, this.viewer.opacity, true), e.setElementPointerEventsNone(this.canvas), e.setElementTouchActionNone(this.canvas), this.container.style.textAlign = "left", this.container.appendChild(this.canvas), this._checkForAPIOverrides();
          }
          get canvas() {
            return this._renderingTarget;
          }
          get element() {
            return e.console.error("Drawer.element is deprecated. Use Drawer.container instead."), this.container;
          }
          getType() {
            e.console.error("Drawer.getType must be implemented by child class");
          }
          static isSupported() {
            e.console.error("Drawer.isSupported must be implemented by child class");
          }
          _createDrawingElement() {
            return e.console.error("Drawer._createDrawingElement must be implemented by child class"), null;
          }
          draw(s) {
            e.console.error("Drawer.draw must be implemented by child class");
          }
          canRotate() {
            e.console.error("Drawer.canRotate must be implemented by child class");
          }
          destroy() {
            e.console.error("Drawer.destroy must be implemented by child class");
          }
          minimumOverlapRequired(s) {
            return false;
          }
          setImageSmoothingEnabled(s) {
            e.console.error("Drawer.setImageSmoothingEnabled must be implemented by child class");
          }
          drawDebuggingRect(s) {
            e.console.warn("[drawer].drawDebuggingRect is not implemented by this drawer");
          }
          clear() {
            e.console.warn("[drawer].clear() is deprecated. The drawer is responsible for clearing itself as needed before drawing tiles.");
          }
          _checkForAPIOverrides() {
            if (this._createDrawingElement === e.DrawerBase.prototype._createDrawingElement) throw new Error("[drawer]._createDrawingElement must be implemented by child class");
            if (this.draw === e.DrawerBase.prototype.draw) throw new Error("[drawer].draw must be implemented by child class");
            if (this.canRotate === e.DrawerBase.prototype.canRotate) throw new Error("[drawer].canRotate must be implemented by child class");
            if (this.destroy === e.DrawerBase.prototype.destroy) throw new Error("[drawer].destroy must be implemented by child class");
            if (this.setImageSmoothingEnabled === e.DrawerBase.prototype.setImageSmoothingEnabled) throw new Error("[drawer].setImageSmoothingEnabled must be implemented by child class");
          }
          viewportToDrawerRectangle(s) {
            var o = this.viewport.pixelFromPointNoRotate(s.getTopLeft(), true), l = this.viewport.deltaPixelsFromPointsNoRotate(s.getSize(), true);
            return new e.Rect(o.x * e.pixelDensityRatio, o.y * e.pixelDensityRatio, l.x * e.pixelDensityRatio, l.y * e.pixelDensityRatio);
          }
          viewportCoordToDrawerCoord(s) {
            var o = this.viewport.pixelFromPointNoRotate(s, true);
            return new e.Point(o.x * e.pixelDensityRatio, o.y * e.pixelDensityRatio);
          }
          _calculateCanvasSize() {
            var s = e.pixelDensityRatio, o = this.viewport.getContainerSize();
            return new n.Point(Math.round(o.x * s), Math.round(o.y * s));
          }
          _raiseTiledImageDrawnEvent(s, o) {
            this.viewer && this.viewer.raiseEvent("tiled-image-drawn", { tiledImage: s, tiles: o });
          }
          _raiseDrawerErrorEvent(s, o) {
            this.viewer && this.viewer.raiseEvent("drawer-error", { tiledImage: s, drawer: this, error: o });
          }
        };
      })(i), (function(e) {
        const n = e;
        class r extends n.DrawerBase {
          constructor(o) {
            super(o), this.viewer.rejectEventHandler("tile-drawing", "The HTMLDrawer does not raise the tile-drawing event"), this.viewer.allowEventHandler("tile-drawn");
          }
          static isSupported() {
            return true;
          }
          getType() {
            return "html";
          }
          minimumOverlapRequired(o) {
            return true;
          }
          _createDrawingElement() {
            return e.makeNeutralElement("div");
          }
          draw(o) {
            var l = this;
            this._prepareNewFrame(), o.forEach(function(a) {
              a.opacity !== 0 && l._drawTiles(a);
            });
          }
          canRotate() {
            return false;
          }
          destroy() {
            this.container.removeChild(this.canvas);
          }
          setImageSmoothingEnabled() {
          }
          _prepareNewFrame() {
            this.canvas.innerHTML = "";
          }
          _drawTiles(o) {
            var l = o.getTilesToDraw().map((c) => c.tile);
            if (!(o.opacity === 0 || l.length === 0 && !o.placeholderFillStyle)) for (var a = l.length - 1; a >= 0; a--) {
              var u = l[a];
              this._drawTile(u), this.viewer && this.viewer.raiseEvent("tile-drawn", { tiledImage: o, tile: u });
            }
          }
          _drawTile(o) {
            e.console.assert(o, "[Drawer._drawTile] tile is required");
            let l = this.canvas;
            if (!o.cacheImageRecord) {
              e.console.warn("[Drawer._drawTileToHTML] attempting to draw tile %s when it's not cached", o.toString());
              return;
            }
            if (!o.loaded) {
              e.console.warn("Attempting to draw tile %s when it's not yet loaded.", o.toString());
              return;
            }
            if (!o.element) {
              var a = o.getImage();
              if (!a) return;
              o.element = e.makeNeutralElement("div"), o.imgElement = a.cloneNode(), o.imgElement.style.msInterpolationMode = "nearest-neighbor", o.imgElement.style.width = "100%", o.imgElement.style.height = "100%", o.style = o.element.style, o.style.position = "absolute";
            }
            o.element.parentNode !== l && l.appendChild(o.element), o.imgElement.parentNode !== o.element && o.element.appendChild(o.imgElement), o.style.top = o.position.y + "px", o.style.left = o.position.x + "px", o.style.height = o.size.y + "px", o.style.width = o.size.x + "px", o.flipped && (o.style.transform = "scaleX(-1)"), e.setElementOpacity(o.element, o.opacity);
          }
        }
        e.HTMLDrawer = r;
      })(i), (function(e) {
        const n = e;
        class r extends n.DrawerBase {
          constructor(c) {
            super(c), this.context = this.canvas.getContext("2d"), this.sketchCanvas = null, this.sketchContext = null, this._imageSmoothingEnabled = true, this.viewer.allowEventHandler("tile-drawn"), this.viewer.allowEventHandler("tile-drawing");
          }
          static isSupported() {
            return e.supportsCanvas;
          }
          getType() {
            return "canvas";
          }
          _createDrawingElement() {
            let c = e.makeNeutralElement("canvas"), h = this._calculateCanvasSize();
            return c.width = h.x, c.height = h.y, c;
          }
          draw(c) {
            this._prepareNewFrame(), this.viewer.viewport.getFlip() !== this._viewportFlipped && this._flip();
            for (const h of c) h.opacity !== 0 && this._drawTiles(h);
          }
          canRotate() {
            return true;
          }
          destroy() {
            this.canvas.width = 1, this.canvas.height = 1, this.sketchCanvas = null, this.sketchContext = null, this.container.removeChild(this.canvas);
          }
          minimumOverlapRequired(c) {
            return true;
          }
          setImageSmoothingEnabled(c) {
            this._imageSmoothingEnabled = !!c, this._updateImageSmoothingEnabled(this.context), this.viewer.forceRedraw();
          }
          drawDebuggingRect(c) {
            var h = this.context;
            h.save(), h.lineWidth = 2 * e.pixelDensityRatio, h.strokeStyle = this.debugGridColor[0], h.fillStyle = this.debugGridColor[0], h.strokeRect(c.x * e.pixelDensityRatio, c.y * e.pixelDensityRatio, c.width * e.pixelDensityRatio, c.height * e.pixelDensityRatio), h.restore();
          }
          get _viewportFlipped() {
            return this.context.getTransform().a < 0;
          }
          _raiseTileDrawingEvent(c, h, f, m) {
            this.viewer.raiseEvent("tile-drawing", { tiledImage: c, context: h, tile: f, rendered: m });
          }
          _prepareNewFrame() {
            var c = this._calculateCanvasSize();
            if ((this.canvas.width !== c.x || this.canvas.height !== c.y) && (this.canvas.width = c.x, this.canvas.height = c.y, this._updateImageSmoothingEnabled(this.context), this.sketchCanvas !== null)) {
              var h = this._calculateSketchCanvasSize();
              this.sketchCanvas.width = h.x, this.sketchCanvas.height = h.y, this._updateImageSmoothingEnabled(this.sketchContext);
            }
            this._clear();
          }
          _clear(c, h) {
            var f = this._getContext(c);
            if (h) f.clearRect(h.x, h.y, h.width, h.height);
            else {
              var m = f.canvas;
              f.clearRect(0, 0, m.width, m.height);
            }
          }
          _drawTiles(c) {
            var h = c.getTilesToDraw().map((j) => j.tile);
            if (!(c.opacity === 0 || h.length === 0 && !c.placeholderFillStyle)) {
              var f = h[0], m;
              f && (m = c.opacity < 1 || c.compositeOperation && c.compositeOperation !== "source-over" || !c._isBottomItem() && c.source.hasTransparency(f.context2D, f.getUrl(), f.ajaxHeaders, f.postData));
              var v, y, T = this.viewport.getZoom(true), x = c.viewportToImageZoom(T);
              h.length > 1 && x > c.smoothTileEdgesMinZoom && !c.iOSDevice && c.getRotation(true) % 360 === 0 && (m = true, v = f.getScaleForEdgeSmoothing(), y = f.getTranslationForEdgeSmoothing(v, this._getCanvasSize(false), this._getCanvasSize(true)));
              var E;
              m && (v || (E = this.viewport.viewportToViewerElementRectangle(c.getClippedBounds(true)).getIntegerBoundingBox(), E = E.times(e.pixelDensityRatio)), this._clear(true, E)), v || this._setRotations(c, m);
              var M = false;
              if (c._clip) {
                this._saveContext(m);
                var L = c.imageToViewportRectangle(c._clip, true);
                L = L.rotate(-c.getRotation(true), c._getRotationPoint(true));
                var U = this.viewportToDrawerRectangle(L);
                v && (U = U.times(v)), y && (U = U.translate(y)), this._setClip(U, m), M = true;
              }
              if (c._croppingPolygons) {
                var K = this;
                M || this._saveContext(m);
                try {
                  var q = c._croppingPolygons.map(function(j) {
                    return j.map(function(ie) {
                      var ce = c.imageToViewportCoordinates(ie.x, ie.y, true).rotate(-c.getRotation(true), c._getRotationPoint(true)), ye = K.viewportCoordToDrawerCoord(ce);
                      return v && (ye = ye.times(v)), y && (ye = ye.plus(y)), ye;
                    });
                  });
                  this._clipWithPolygons(q, m);
                } catch (j) {
                  e.console.error(j);
                }
                M = true;
              }
              if (c._hasOpaqueTile = false, c.placeholderFillStyle && c._hasOpaqueTile === false) {
                let j = this.viewportToDrawerRectangle(c.getBoundsNoRotate(true));
                v && (j = j.times(v)), y && (j = j.translate(y));
                let ie = null;
                typeof c.placeholderFillStyle == "function" ? ie = c.placeholderFillStyle(c, this.context) : ie = c.placeholderFillStyle, this._drawRectangle(j, ie, m);
              }
              var Y = a(c.subPixelRoundingForTransparency), te = false;
              if (Y === e.SUBPIXEL_ROUNDING_OCCURRENCES.ALWAYS) te = true;
              else if (Y === e.SUBPIXEL_ROUNDING_OCCURRENCES.ONLY_AT_REST) {
                var fe = this.viewer && this.viewer.isAnimating();
                te = !fe;
              }
              for (var $ = 0; $ < h.length; $++) f = h[$], this._drawTile(f, c, m, v, y, te, c.source), this.viewer && this.viewer.raiseEvent("tile-drawn", { tiledImage: c, tile: f });
              M && this._restoreContext(m), v || (c.getRotation(true) % 360 !== 0 && this._restoreRotationChanges(m), this.viewport.getRotation(true) % 360 !== 0 && this._restoreRotationChanges(m)), m && (v && this._setRotations(c), this.blendSketch({ opacity: c.opacity, scale: v, translate: y, compositeOperation: c.compositeOperation, bounds: E }), v && (c.getRotation(true) % 360 !== 0 && this._restoreRotationChanges(false), this.viewport.getRotation(true) % 360 !== 0 && this._restoreRotationChanges(false))), this._drawDebugInfo(c, h), this._raiseTiledImageDrawnEvent(c, h);
            }
          }
          _drawDebugInfo(c, h) {
            if (c.debugMode) for (var f = h.length - 1; f >= 0; f--) {
              var m = h[f];
              try {
                this._drawDebugInfoOnTile(m, h.length, f, c);
              } catch (v) {
                e.console.error(v);
              }
            }
          }
          _clipWithPolygons(c, h) {
            var f = this._getContext(h);
            f.beginPath();
            for (const m of c) for (const [v, y] of m.entries()) f[v === 0 ? "moveTo" : "lineTo"](y.x, y.y);
            f.clip();
          }
          _drawTile(c, h, f, m, v, y, T) {
            e.console.assert(c, "[Drawer._drawTile] tile is required"), e.console.assert(h, "[Drawer._drawTile] drawingHandler is required");
            var x = this._getContext(f);
            m = m || 1, this._drawTileToCanvas(c, x, h, m, v, y, T);
          }
          _drawTileToCanvas(c, h, f, m, v, y, T) {
            var x = c.position.times(e.pixelDensityRatio), E = c.size.times(e.pixelDensityRatio), M;
            if (!c.context2D && !c.cacheImageRecord) {
              e.console.warn("[Drawer._drawTileToCanvas] attempting to draw tile %s when it's not cached", c.toString());
              return;
            }
            if (M = c.getCanvasContext(), !c.loaded || !M) {
              e.console.warn("Attempting to draw tile %s when it's not yet loaded.", c.toString());
              return;
            }
            h.save(), typeof m == "number" && m !== 1 && (x = x.times(m), E = E.times(m)), v instanceof e.Point && (x = x.plus(v)), h.globalAlpha === 1 && c.hasTransparency && (y && (x.x = Math.round(x.x), x.y = Math.round(x.y), E.x = Math.round(E.x), E.y = Math.round(E.y)), h.clearRect(x.x, x.y, E.x, E.y)), this._raiseTileDrawingEvent(f, h, c, M);
            var L, U;
            c.sourceBounds ? (L = Math.min(c.sourceBounds.width, M.canvas.width), U = Math.min(c.sourceBounds.height, M.canvas.height)) : (L = M.canvas.width, U = M.canvas.height), h.translate(x.x + E.x / 2, 0), c.flipped && h.scale(-1, 1), h.drawImage(M.canvas, 0, 0, L, U, -E.x / 2, x.y, E.x, E.y), h.restore();
          }
          _getContext(c) {
            var h = this.context;
            if (c) {
              if (this.sketchCanvas === null) {
                this.sketchCanvas = document.createElement("canvas");
                var f = this._calculateSketchCanvasSize();
                if (this.sketchCanvas.width = f.x, this.sketchCanvas.height = f.y, this.sketchContext = this.sketchCanvas.getContext("2d"), this.viewport.getRotation() === 0) {
                  var m = this;
                  this.viewer.addHandler("rotate", function v() {
                    if (m.viewport.getRotation() !== 0) {
                      m.viewer.removeHandler("rotate", v);
                      var y = m._calculateSketchCanvasSize();
                      m.sketchCanvas.width = y.x, m.sketchCanvas.height = y.y;
                    }
                  });
                }
                this._updateImageSmoothingEnabled(this.sketchContext);
              }
              h = this.sketchContext;
            }
            return h;
          }
          _saveContext(c) {
            this._getContext(c).save();
          }
          _restoreContext(c) {
            this._getContext(c).restore();
          }
          _setClip(c, h) {
            var f = this._getContext(h);
            f.beginPath(), f.rect(c.x, c.y, c.width, c.height), f.clip();
          }
          _drawRectangle(c, h, f) {
            var m = this._getContext(f);
            m.save(), m.fillStyle = h, m.fillRect(c.x, c.y, c.width, c.height), m.restore();
          }
          blendSketch(c, h, f, m) {
            var v = c;
            e.isPlainObject(v) || (v = { opacity: c, scale: h, translate: f, compositeOperation: m }), c = v.opacity, m = v.compositeOperation;
            var y = v.bounds;
            if (this.context.save(), this.context.globalAlpha = c, m && (this.context.globalCompositeOperation = m), y) y.x < 0 && (y.width += y.x, y.x = 0), y.x + y.width > this.canvas.width && (y.width = this.canvas.width - y.x), y.y < 0 && (y.height += y.y, y.y = 0), y.y + y.height > this.canvas.height && (y.height = this.canvas.height - y.y), this.context.drawImage(this.sketchCanvas, y.x, y.y, y.width, y.height, y.x, y.y, y.width, y.height);
            else {
              h = v.scale || 1, f = v.translate;
              var T = f instanceof e.Point ? f : new e.Point(0, 0), x = 0, E = 0;
              if (f) {
                var M = this.sketchCanvas.width - this.canvas.width, L = this.sketchCanvas.height - this.canvas.height;
                x = Math.round(M / 2), E = Math.round(L / 2);
              }
              this.context.drawImage(this.sketchCanvas, T.x - x * h, T.y - E * h, (this.canvas.width + 2 * x) * h, (this.canvas.height + 2 * E) * h, -x, -E, this.canvas.width + 2 * x, this.canvas.height + 2 * E);
            }
            this.context.restore();
          }
          _drawDebugInfoOnTile(c, h, f, m) {
            var v = this.viewer.world.getIndexOfItem(m) % this.debugGridColor.length, y = this.context;
            y.save(), y.lineWidth = 2 * e.pixelDensityRatio, y.font = "small-caps bold " + 13 * e.pixelDensityRatio + "px arial", y.strokeStyle = this.debugGridColor[v], y.fillStyle = this.debugGridColor[v], this._setRotations(m), this._viewportFlipped && this._flip({ point: c.position.plus(c.size.divide(2)) }), y.strokeRect(c.position.x * e.pixelDensityRatio, c.position.y * e.pixelDensityRatio, c.size.x * e.pixelDensityRatio, c.size.y * e.pixelDensityRatio);
            var T = (c.position.x + c.size.x / 2) * e.pixelDensityRatio, x = (c.position.y + c.size.y / 2) * e.pixelDensityRatio;
            y.translate(T, x);
            const E = this.viewport.getRotation(true);
            y.rotate(Math.PI / 180 * -E), y.translate(-T, -x), c.x === 0 && c.y === 0 && (y.fillText("Zoom: " + this.viewport.getZoom(), c.position.x * e.pixelDensityRatio, (c.position.y - 30) * e.pixelDensityRatio), y.fillText("Pan: " + this.viewport.getBounds().toString(), c.position.x * e.pixelDensityRatio, (c.position.y - 20) * e.pixelDensityRatio)), y.fillText("Level: " + c.level, (c.position.x + 10) * e.pixelDensityRatio, (c.position.y + 20) * e.pixelDensityRatio), y.fillText("Column: " + c.x, (c.position.x + 10) * e.pixelDensityRatio, (c.position.y + 30) * e.pixelDensityRatio), y.fillText("Row: " + c.y, (c.position.x + 10) * e.pixelDensityRatio, (c.position.y + 40) * e.pixelDensityRatio), y.fillText("Order: " + f + " of " + h, (c.position.x + 10) * e.pixelDensityRatio, (c.position.y + 50) * e.pixelDensityRatio), y.fillText("Size: " + c.size.toString(), (c.position.x + 10) * e.pixelDensityRatio, (c.position.y + 60) * e.pixelDensityRatio), y.fillText("Position: " + c.position.toString(), (c.position.x + 10) * e.pixelDensityRatio, (c.position.y + 70) * e.pixelDensityRatio), this.viewport.getRotation(true) % 360 !== 0 && this._restoreRotationChanges(), m.getRotation(true) % 360 !== 0 && this._restoreRotationChanges(), y.restore();
          }
          _updateImageSmoothingEnabled(c) {
            c.msImageSmoothingEnabled = this._imageSmoothingEnabled, c.imageSmoothingEnabled = this._imageSmoothingEnabled;
          }
          _getCanvasSize(c) {
            var h = this._getContext(c).canvas;
            return new e.Point(h.width, h.height);
          }
          _getCanvasCenter() {
            return new e.Point(this.canvas.width / 2, this.canvas.height / 2);
          }
          _setRotations(c, h = false) {
            var f = false;
            this.viewport.getRotation(true) % 360 !== 0 && (this._offsetForRotation({ degrees: this.viewport.getRotation(true), useSketch: h, saveContext: f }), f = false), c.getRotation(true) % 360 !== 0 && this._offsetForRotation({ degrees: c.getRotation(true), point: this.viewport.pixelFromPointNoRotate(c._getRotationPoint(true), true), useSketch: h, saveContext: f });
          }
          _offsetForRotation(c) {
            var h = c.point ? c.point.times(e.pixelDensityRatio) : this._getCanvasCenter(), f = this._getContext(c.useSketch);
            f.save(), f.translate(h.x, h.y), f.rotate(Math.PI / 180 * c.degrees), f.translate(-h.x, -h.y);
          }
          _flip(c) {
            c = c || {};
            var h = c.point ? c.point.times(e.pixelDensityRatio) : this._getCanvasCenter(), f = this._getContext(c.useSketch);
            f.translate(h.x, 0), f.scale(-1, 1), f.translate(-h.x, 0);
          }
          _restoreRotationChanges(c) {
            var h = this._getContext(c);
            h.restore();
          }
          _calculateCanvasSize() {
            var c = e.pixelDensityRatio, h = this.viewport.getContainerSize();
            return { x: Math.round(h.x * c), y: Math.round(h.y * c) };
          }
          _calculateSketchCanvasSize() {
            var c = this._calculateCanvasSize();
            if (this.viewport.getRotation() === 0) return c;
            var h = Math.ceil(Math.sqrt(c.x * c.x + c.y * c.y));
            return { x: h, y: h };
          }
        }
        e.CanvasDrawer = r;
        var s = e.SUBPIXEL_ROUNDING_OCCURRENCES.NEVER;
        function o(u) {
          return u !== e.SUBPIXEL_ROUNDING_OCCURRENCES.ALWAYS && u !== e.SUBPIXEL_ROUNDING_OCCURRENCES.ONLY_AT_REST && u !== e.SUBPIXEL_ROUNDING_OCCURRENCES.NEVER;
        }
        function l(u) {
          return o(u) ? s : u;
        }
        function a(u) {
          if (typeof u == "number") return l(u);
          if (!u || !e.Browser) return s;
          var c = u[e.Browser.vendor];
          return o(c) && (c = u["*"]), l(c);
        }
      })(i), (function(e) {
        const n = e;
        n.WebGLDrawer = class extends n.DrawerBase {
          constructor(s) {
            super(s), this._destroyed = false, this._TextureMap = /* @__PURE__ */ new Map(), this._TileMap = /* @__PURE__ */ new Map(), this._gl = null, this._firstPass = null, this._secondPass = null, this._glFrameBuffer = null, this._renderToTexture = null, this._glFramebufferToCanvasTransform = null, this._outputCanvas = null, this._outputContext = null, this._clippingCanvas = null, this._clippingContext = null, this._renderingCanvas = null, this._backupCanvasDrawer = null, this._imageSmoothingEnabled = true, this._boundToTileReady = (o) => this._tileReadyHandler(o), this._boundToImageUnloaded = (o) => this._imageUnloadedHandler(o), this.viewer.addHandler("tile-ready", this._boundToTileReady), this.viewer.addHandler("image-unloaded", this._boundToImageUnloaded), this.viewer.rejectEventHandler("tile-drawn", "The WebGLDrawer does not raise the tile-drawn event"), this.viewer.rejectEventHandler("tile-drawing", "The WebGLDrawer does not raise the tile-drawing event"), this._setupCanvases(), this._setupRenderer(), this.context = this._outputContext;
          }
          destroy() {
            if (this._destroyed) return;
            let s = this._gl;
            var o = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS);
            for (let a = 0; a < o; ++a) s.activeTexture(s.TEXTURE0 + a), s.bindTexture(s.TEXTURE_2D, null), s.bindTexture(s.TEXTURE_CUBE_MAP, null);
            s.bindBuffer(s.ARRAY_BUFFER, null), s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, null), s.bindRenderbuffer(s.RENDERBUFFER, null), s.bindFramebuffer(s.FRAMEBUFFER, null), this._unloadTextures(), s.deleteBuffer(this._secondPass.bufferOutputPosition), s.deleteFramebuffer(this._glFrameBuffer), this._renderingCanvas.width = this._renderingCanvas.height = 1, this._clippingCanvas.width = this._clippingCanvas.height = 1, this._outputCanvas.width = this._outputCanvas.height = 1, this._renderingCanvas = null, this._clippingCanvas = this._clippingContext = null, this._outputCanvas = this._outputContext = null;
            let l = s.getExtension("WEBGL_lose_context");
            l && l.loseContext(), this.viewer.removeHandler("tile-ready", this._boundToTileReady), this.viewer.removeHandler("image-unloaded", this._boundToImageUnloaded), this.viewer.removeHandler("resize", this._resizeHandler), this._gl = null, this._backupCanvasDrawer && (this._backupCanvasDrawer.destroy(), this._backupCanvasDrawer = null), this.container.removeChild(this.canvas), this.viewer.drawer === this && (this.viewer.drawer = null), this._destroyed = true;
          }
          canRotate() {
            return true;
          }
          static isSupported() {
            let s = document.createElement("canvas"), o = e.isFunction(s.getContext) && s.getContext("webgl"), l = o && o.getExtension("WEBGL_lose_context");
            return l && l.loseContext(), !!o;
          }
          getType() {
            return "webgl";
          }
          minimumOverlapRequired(s) {
            return s.isTainted();
          }
          _createDrawingElement() {
            let s = e.makeNeutralElement("canvas"), o = this._calculateCanvasSize();
            return s.width = o.x, s.height = o.y, s;
          }
          _getBackupCanvasDrawer() {
            return this._backupCanvasDrawer || (this._backupCanvasDrawer = this.viewer.requestDrawer("canvas", { mainDrawer: false }), this._backupCanvasDrawer.canvas.style.setProperty("visibility", "hidden")), this._backupCanvasDrawer;
          }
          draw(s) {
            let o = this._gl;
            const l = this.viewport.getBoundsNoRotateWithMargins(true);
            let a = { bounds: l, center: new n.Point(l.x + l.width / 2, l.y + l.height / 2), rotation: this.viewport.getRotation(true) * Math.PI / 180 }, u = this.viewport.flipped ? -1 : 1, c = e.Mat3.makeTranslation(-a.center.x, -a.center.y), h = e.Mat3.makeScaling(2 / a.bounds.width * u, -2 / a.bounds.height), f = e.Mat3.makeRotation(-a.rotation), m = h.multiply(f).multiply(c);
            o.bindFramebuffer(o.FRAMEBUFFER, null), o.clear(o.COLOR_BUFFER_BIT), this._outputContext.clearRect(0, 0, this._outputCanvas.width, this._outputCanvas.height);
            let v = false;
            s.forEach((y, T) => {
              if (y.isTainted()) {
                v && (this._outputContext.drawImage(this._renderingCanvas, 0, 0), o.bindFramebuffer(o.FRAMEBUFFER, null), o.clear(o.COLOR_BUFFER_BIT), v = false);
                const x = this._getBackupCanvasDrawer();
                x.draw([y]), this._outputContext.drawImage(x.canvas, 0, 0);
              } else {
                let x = y.getTilesToDraw();
                if (y.placeholderFillStyle && y._hasOpaqueTile === false && this._drawPlaceholder(y), x.length === 0 || y.getOpacity() === 0) return;
                let E = x[0], M = y.compositeOperation || this.viewer.compositeOperation || y._clip || y._croppingPolygons || y.debugMode, L = M || y.opacity < 1 || E.hasTransparency;
                M && (v && this._outputContext.drawImage(this._renderingCanvas, 0, 0), o.bindFramebuffer(o.FRAMEBUFFER, null), o.clear(o.COLOR_BUFFER_BIT)), o.useProgram(this._firstPass.shaderProgram), L ? (o.bindFramebuffer(o.FRAMEBUFFER, this._glFrameBuffer), o.clear(o.COLOR_BUFFER_BIT)) : o.bindFramebuffer(o.FRAMEBUFFER, null);
                let U = m, K = y.getRotation(true);
                if (K % 360 !== 0) {
                  let j = e.Mat3.makeRotation(-K * Math.PI / 180), ie = y.getBoundsNoRotate(true).getCenter(), ce = e.Mat3.makeTranslation(ie.x, ie.y), ye = e.Mat3.makeTranslation(-ie.x, -ie.y), me = ce.multiply(j).multiply(ye);
                  U = m.multiply(me);
                }
                let q = this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS);
                if (q <= 0) throw new Error(`WegGL error: bad value for gl parameter MAX_TEXTURE_IMAGE_UNITS (${q}). This could happen
                        if too many contexts have been created and not released, or there is another problem with the graphics card.`);
                let Y = new Float32Array(q * 12), te = new Array(q), fe = new Array(q), $ = new Array(q);
                for (let j = 0; j < x.length; j++) {
                  let ie = x[j].tile, ce = j % q, ye = ce + 1, me = ie.getCanvasContext(), pe = me ? this._TextureMap.get(me.canvas) : null;
                  if (pe || (this._tileReadyHandler({ tile: ie, tiledImage: y }), pe = me ? this._TextureMap.get(me.canvas) : null), pe && this._getTileData(ie, y, pe, U, ce, Y, te, fe, $), ye === q || j === x.length - 1) {
                    for (let oe = 0; oe <= ye; oe++) o.activeTexture(o.TEXTURE0 + oe), o.bindTexture(o.TEXTURE_2D, te[oe]);
                    o.bindBuffer(o.ARRAY_BUFFER, this._firstPass.bufferTexturePosition), o.bufferData(o.ARRAY_BUFFER, Y, o.DYNAMIC_DRAW), fe.forEach((oe, Ae) => {
                      o.uniformMatrix3fv(this._firstPass.uTransformMatrices[Ae], false, oe);
                    }), o.uniform1fv(this._firstPass.uOpacities, new Float32Array($)), o.bindBuffer(o.ARRAY_BUFFER, this._firstPass.bufferOutputPosition), o.vertexAttribPointer(this._firstPass.aOutputPosition, 2, o.FLOAT, false, 0, 0), o.bindBuffer(o.ARRAY_BUFFER, this._firstPass.bufferTexturePosition), o.vertexAttribPointer(this._firstPass.aTexturePosition, 2, o.FLOAT, false, 0, 0), o.bindBuffer(o.ARRAY_BUFFER, this._firstPass.bufferIndex), o.vertexAttribPointer(this._firstPass.aIndex, 1, o.FLOAT, false, 0, 0), o.drawArrays(o.TRIANGLES, 0, 6 * ye);
                  }
                }
                L && (o.useProgram(this._secondPass.shaderProgram), o.bindFramebuffer(o.FRAMEBUFFER, null), o.activeTexture(o.TEXTURE0), o.bindTexture(o.TEXTURE_2D, this._renderToTexture), this._gl.uniform1f(this._secondPass.uOpacityMultiplier, y.opacity), o.bindBuffer(o.ARRAY_BUFFER, this._secondPass.bufferTexturePosition), o.vertexAttribPointer(this._secondPass.aTexturePosition, 2, o.FLOAT, false, 0, 0), o.bindBuffer(o.ARRAY_BUFFER, this._secondPass.bufferOutputPosition), o.vertexAttribPointer(this._secondPass.aOutputPosition, 2, o.FLOAT, false, 0, 0), o.drawArrays(o.TRIANGLES, 0, 6)), v = true, M && (this._applyContext2dPipeline(y, x, T), v = false, o.bindFramebuffer(o.FRAMEBUFFER, null), o.clear(o.COLOR_BUFFER_BIT)), T === 0 && this._raiseTiledImageDrawnEvent(y, x.map((j) => j.tile));
              }
            }), v && this._outputContext.drawImage(this._renderingCanvas, 0, 0);
          }
          setImageSmoothingEnabled(s) {
            this._imageSmoothingEnabled !== s && (this._imageSmoothingEnabled = s, this._unloadTextures(), this.viewer.world.draw());
          }
          drawDebuggingRect(s) {
            let o = this._outputContext;
            o.save(), o.lineWidth = 2 * e.pixelDensityRatio, o.strokeStyle = this.debugGridColor[0], o.fillStyle = this.debugGridColor[0], o.strokeRect(s.x * e.pixelDensityRatio, s.y * e.pixelDensityRatio, s.width * e.pixelDensityRatio, s.height * e.pixelDensityRatio), o.restore();
          }
          _getTextureDataFromTile(s) {
            return s.getCanvasContext().canvas;
          }
          _applyContext2dPipeline(s, o, l) {
            if (this._outputContext.save(), this._outputContext.globalCompositeOperation = l === 0 ? null : s.compositeOperation || this.viewer.compositeOperation, s._croppingPolygons || s._clip ? (this._renderToClippingCanvas(s), this._outputContext.drawImage(this._clippingCanvas, 0, 0)) : this._outputContext.drawImage(this._renderingCanvas, 0, 0), this._outputContext.restore(), s.debugMode) {
              const a = this.viewer.viewport.getFlip();
              a && this._flip(), this._drawDebugInfo(o, s, a), a && this._flip();
            }
          }
          _getTileData(s, o, l, a, u, c, h, f, m) {
            let v = l.texture, y = l.position;
            c.set(y, u * 12);
            let T = this._calculateOverlapFraction(s, o), x = s.positionedBounds.width * T.x, E = s.positionedBounds.height * T.y, M = s.positionedBounds.x + (s.x === 0 ? 0 : x), L = s.positionedBounds.y + (s.y === 0 ? 0 : E), U = s.positionedBounds.x + s.positionedBounds.width - (s.isRightMost ? 0 : x), K = s.positionedBounds.y + s.positionedBounds.height - (s.isBottomMost ? 0 : E), q = U - M, Y = K - L, te = new e.Mat3([q, 0, 0, 0, Y, 0, M, L, 1]);
            if (s.flipped) {
              let $ = e.Mat3.makeTranslation(0.5, 0), j = e.Mat3.makeTranslation(-0.5, 0), ie = $.multiply(e.Mat3.makeScaling(-1, 1)).multiply(j);
              te = te.multiply(ie);
            }
            let fe = a.multiply(te);
            m[u] = s.opacity, h[u] = v, f[u] = fe.values;
          }
          _textureFilter() {
            return this._imageSmoothingEnabled ? this._gl.LINEAR : this._gl.NEAREST;
          }
          _setupRenderer() {
            let s = this._gl;
            s || e.console.error("_setupCanvases must be called before _setupRenderer"), this._unitQuad = this._makeQuadVertexBuffer(0, 1, 0, 1), this._makeFirstPassShaderProgram(), this._makeSecondPassShaderProgram(), this._renderToTexture = s.createTexture(), s.activeTexture(s.TEXTURE0), s.bindTexture(s.TEXTURE_2D, this._renderToTexture), s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, this._renderingCanvas.width, this._renderingCanvas.height, 0, s.RGBA, s.UNSIGNED_BYTE, null), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, this._textureFilter()), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE), this._glFrameBuffer = s.createFramebuffer(), s.bindFramebuffer(s.FRAMEBUFFER, this._glFrameBuffer), s.framebufferTexture2D(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, this._renderToTexture, 0), s.enable(s.BLEND), s.blendFunc(s.ONE, s.ONE_MINUS_SRC_ALPHA);
          }
          _makeFirstPassShaderProgram() {
            let s = this._glNumTextures = this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS), o = () => [...Array(s).keys()].map((v) => `uniform mat3 u_matrix_${v};`).join(`
`), l = () => [...Array(s).keys()].map((v) => `${v > 0 ? "else " : ""}if(int(a_index) == ${v}) { transform_matrix = u_matrix_${v}; }`).join(`
`);
            const a = `
            attribute vec2 a_output_position;
            attribute vec2 a_texture_position;
            attribute float a_index;

            ${o()} // create a uniform mat3 for each potential tile to draw

            varying vec2 v_texture_position;
            varying float v_image_index;

            void main() {

                mat3 transform_matrix; // value will be set by the if/elses in makeConditional()

                ${l()}

                gl_Position = vec4(transform_matrix * vec3(a_output_position, 1), 1);

                v_texture_position = a_texture_position;
                v_image_index = a_index;
            }
            `, u = `
            precision mediump float;

            // our textures
            uniform sampler2D u_images[${s}];
            // our opacities
            uniform float u_opacities[${s}];

            // the varyings passed in from the vertex shader.
            varying vec2 v_texture_position;
            varying float v_image_index;

            void main() {
                // can't index directly with a variable, need to use a loop iterator hack
                for(int i = 0; i < ${s}; ++i){
                    if(i == int(v_image_index)){
                        gl_FragColor = texture2D(u_images[i], v_texture_position) * u_opacities[i];
                    }
                }
            }
            `;
            let c = this._gl, h = this.constructor.initShaderProgram(c, a, u);
            c.useProgram(h), this._firstPass = { shaderProgram: h, aOutputPosition: c.getAttribLocation(h, "a_output_position"), aTexturePosition: c.getAttribLocation(h, "a_texture_position"), aIndex: c.getAttribLocation(h, "a_index"), uTransformMatrices: [...Array(this._glNumTextures).keys()].map((v) => c.getUniformLocation(h, `u_matrix_${v}`)), uImages: c.getUniformLocation(h, "u_images"), uOpacities: c.getUniformLocation(h, "u_opacities"), bufferOutputPosition: c.createBuffer(), bufferTexturePosition: c.createBuffer(), bufferIndex: c.createBuffer() }, c.uniform1iv(this._firstPass.uImages, [...Array(s).keys()]);
            let f = new Float32Array(s * 12);
            for (let v = 0; v < s; ++v) f.set(Float32Array.from(this._unitQuad), v * 12);
            c.bindBuffer(c.ARRAY_BUFFER, this._firstPass.bufferOutputPosition), c.bufferData(c.ARRAY_BUFFER, f, c.STATIC_DRAW), c.enableVertexAttribArray(this._firstPass.aOutputPosition), c.bindBuffer(c.ARRAY_BUFFER, this._firstPass.bufferTexturePosition), c.enableVertexAttribArray(this._firstPass.aTexturePosition), c.bindBuffer(c.ARRAY_BUFFER, this._firstPass.bufferIndex);
            let m = [...Array(this._glNumTextures).keys()].map((v) => Array(6).fill(v)).flat();
            c.bufferData(c.ARRAY_BUFFER, new Float32Array(m), c.STATIC_DRAW), c.enableVertexAttribArray(this._firstPass.aIndex);
          }
          _makeSecondPassShaderProgram() {
            const s = `
            attribute vec2 a_output_position;
            attribute vec2 a_texture_position;

            uniform mat3 u_matrix;

            varying vec2 v_texture_position;

            void main() {
                gl_Position = vec4(u_matrix * vec3(a_output_position, 1), 1);

                v_texture_position = a_texture_position;
            }
            `, o = `
            precision mediump float;

            // our texture
            uniform sampler2D u_image;

            // the texCoords passed in from the vertex shader.
            varying vec2 v_texture_position;

            // the opacity multiplier for the image
            uniform float u_opacity_multiplier;

            void main() {
                gl_FragColor = texture2D(u_image, v_texture_position);
                gl_FragColor *= u_opacity_multiplier;
            }
            `;
            let l = this._gl, a = this.constructor.initShaderProgram(l, s, o);
            l.useProgram(a), this._secondPass = { shaderProgram: a, aOutputPosition: l.getAttribLocation(a, "a_output_position"), aTexturePosition: l.getAttribLocation(a, "a_texture_position"), uMatrix: l.getUniformLocation(a, "u_matrix"), uImage: l.getUniformLocation(a, "u_image"), uOpacityMultiplier: l.getUniformLocation(a, "u_opacity_multiplier"), bufferOutputPosition: l.createBuffer(), bufferTexturePosition: l.createBuffer() }, l.bindBuffer(l.ARRAY_BUFFER, this._secondPass.bufferOutputPosition), l.bufferData(l.ARRAY_BUFFER, this._unitQuad, l.STATIC_DRAW), l.enableVertexAttribArray(this._secondPass.aOutputPosition), l.bindBuffer(l.ARRAY_BUFFER, this._secondPass.bufferTexturePosition), l.bufferData(l.ARRAY_BUFFER, this._unitQuad, l.DYNAMIC_DRAW), l.enableVertexAttribArray(this._secondPass.aTexturePosition);
            let u = e.Mat3.makeScaling(2, 2).multiply(e.Mat3.makeTranslation(-0.5, -0.5));
            l.uniformMatrix3fv(this._secondPass.uMatrix, false, u.values);
          }
          _resizeRenderer() {
            let s = this._gl, o = this._renderingCanvas.width, l = this._renderingCanvas.height;
            s.viewport(0, 0, o, l), s.deleteTexture(this._renderToTexture), this._renderToTexture = s.createTexture(), s.activeTexture(s.TEXTURE0), s.bindTexture(s.TEXTURE_2D, this._renderToTexture), s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, o, l, 0, s.RGBA, s.UNSIGNED_BYTE, null), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, this._textureFilter()), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE), s.bindFramebuffer(s.FRAMEBUFFER, this._glFrameBuffer), s.framebufferTexture2D(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, this._renderToTexture, 0);
          }
          _setupCanvases() {
            let s = this;
            this._outputCanvas = this.canvas, this._outputContext = this._outputCanvas.getContext("2d"), this._renderingCanvas = document.createElement("canvas"), this._clippingCanvas = document.createElement("canvas"), this._clippingContext = this._clippingCanvas.getContext("2d"), this._renderingCanvas.width = this._clippingCanvas.width = this._outputCanvas.width, this._renderingCanvas.height = this._clippingCanvas.height = this._outputCanvas.height, this._gl = this._renderingCanvas.getContext("webgl"), this._resizeHandler = function() {
              s._outputCanvas !== s.viewer.drawer.canvas && (s._outputCanvas.style.width = s.viewer.drawer.canvas.clientWidth + "px", s._outputCanvas.style.height = s.viewer.drawer.canvas.clientHeight + "px");
              let o = s._calculateCanvasSize();
              (s._outputCanvas.width !== o.x || s._outputCanvas.height !== o.y) && (s._outputCanvas.width = o.x, s._outputCanvas.height = o.y), s._renderingCanvas.style.width = s._outputCanvas.clientWidth + "px", s._renderingCanvas.style.height = s._outputCanvas.clientHeight + "px", s._renderingCanvas.width = s._clippingCanvas.width = s._outputCanvas.width, s._renderingCanvas.height = s._clippingCanvas.height = s._outputCanvas.height, s._resizeRenderer();
            }, this.viewer.addHandler("resize", this._resizeHandler);
          }
          _makeQuadVertexBuffer(s, o, l, a) {
            return new Float32Array([s, a, o, a, s, l, s, l, o, a, o, l]);
          }
          _tileReadyHandler(s) {
            let o = s.tile, l = s.tiledImage;
            if (l.isTainted()) return;
            let a = o.getCanvasContext(), u = a && a.canvas;
            if (!u || e.isCanvasTainted(u)) {
              l.isTainted() || (l.setTainted(true), e.console.warn("WebGL cannot be used to draw this TiledImage because it has tainted data. Does crossOriginPolicy need to be set?"), this._raiseDrawerErrorEvent(l, "Tainted data cannot be used by the WebGLDrawer. Falling back to CanvasDrawer for this TiledImage."));
              return;
            }
            if (!this._TextureMap.get(u)) {
              let h = this._gl, f = h.createTexture(), m, v = l.source.tileOverlap, y, T;
              if (o.sourceBounds ? (y = Math.min(o.sourceBounds.width, u.width) / u.width, T = Math.min(o.sourceBounds.height, u.height) / u.height) : (y = 1, T = 1), v > 0) {
                let E = this._calculateOverlapFraction(o, l), M = (o.x === 0 ? 0 : E.x) * y, L = (o.y === 0 ? 0 : E.y) * T, U = (o.isRightMost ? 1 : 1 - E.x) * y, K = (o.isBottomMost ? 1 : 1 - E.y) * T;
                m = this._makeQuadVertexBuffer(M, U, L, K);
              } else y === 1 && T === 1 ? m = this._unitQuad : m = this._makeQuadVertexBuffer(0, y, 0, T);
              let x = { texture: f, position: m };
              this._TextureMap.set(u, x), h.activeTexture(h.TEXTURE0), h.bindTexture(h.TEXTURE_2D, f), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, this._textureFilter()), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, this._textureFilter()), this._uploadImageData(a);
            }
          }
          _calculateOverlapFraction(s, o) {
            let l = o.source.tileOverlap, a = s.sourceBounds.width, u = s.sourceBounds.height, c = (s.x === 0 ? 0 : l) + (s.isRightMost ? 0 : l), h = (s.y === 0 ? 0 : l) + (s.isBottomMost ? 0 : l), f = l / (a + c), m = l / (u + h);
            return { x: f, y: m };
          }
          _unloadTextures() {
            Array.from(this._TextureMap.keys()).forEach((o) => {
              this._cleanupImageData(o);
            });
          }
          _uploadImageData(s) {
            let o = this._gl, l = s.canvas;
            try {
              if (!l) throw s;
              o.texImage2D(o.TEXTURE_2D, 0, o.RGBA, o.RGBA, o.UNSIGNED_BYTE, l);
            } catch (a) {
              e.console.error("Error uploading image data to WebGL", a);
            }
          }
          _imageUnloadedHandler(s) {
            let o = s.context2D.canvas;
            this._cleanupImageData(o);
          }
          _cleanupImageData(s) {
            let o = this._TextureMap.get(s);
            this._TextureMap.delete(s), o && this._gl.deleteTexture(o.texture);
          }
          _setClip() {
          }
          _renderToClippingCanvas(s) {
            if (this._clippingContext.clearRect(0, 0, this._clippingCanvas.width, this._clippingCanvas.height), this._clippingContext.save(), this.viewer.viewport.getFlip()) {
              const o = new e.Point(this.canvas.width / 2, this.canvas.height / 2);
              this._clippingContext.translate(o.x, 0), this._clippingContext.scale(-1, 1), this._clippingContext.translate(-o.x, 0);
            }
            if (s._clip) {
              let l = [{ x: s._clip.x, y: s._clip.y }, { x: s._clip.x + s._clip.width, y: s._clip.y }, { x: s._clip.x + s._clip.width, y: s._clip.y + s._clip.height }, { x: s._clip.x, y: s._clip.y + s._clip.height }].map((a) => {
                let u = s.imageToViewportCoordinates(a.x, a.y, true).rotate(this.viewer.viewport.getRotation(true), this.viewer.viewport.getCenter(true));
                return this.viewportCoordToDrawerCoord(u);
              });
              this._clippingContext.beginPath(), l.forEach((a, u) => {
                this._clippingContext[u === 0 ? "moveTo" : "lineTo"](a.x, a.y);
              }), this._clippingContext.clip(), this._setClip();
            }
            if (s._croppingPolygons) {
              let o = s._croppingPolygons.map((l) => l.map((a) => {
                let u = s.imageToViewportCoordinates(a.x, a.y, true).rotate(this.viewer.viewport.getRotation(true), this.viewer.viewport.getCenter(true));
                return this.viewportCoordToDrawerCoord(u);
              }));
              this._clippingContext.beginPath(), o.forEach((l) => {
                l.forEach((a, u) => {
                  this._clippingContext[u === 0 ? "moveTo" : "lineTo"](a.x, a.y);
                });
              }), this._clippingContext.clip();
            }
            if (this.viewer.viewport.getFlip()) {
              const o = new e.Point(this.canvas.width / 2, this.canvas.height / 2);
              this._clippingContext.translate(o.x, 0), this._clippingContext.scale(-1, 1), this._clippingContext.translate(-o.x, 0);
            }
            this._clippingContext.drawImage(this._renderingCanvas, 0, 0), this._clippingContext.restore();
          }
          _setRotations(s) {
            var o = false;
            this.viewport.getRotation(true) % 360 !== 0 && (this._offsetForRotation({ degrees: this.viewport.getRotation(true), saveContext: o }), o = false), s.getRotation(true) % 360 !== 0 && this._offsetForRotation({ degrees: s.getRotation(true), point: this.viewport.pixelFromPointNoRotate(s._getRotationPoint(true), true), saveContext: o });
          }
          _offsetForRotation(s) {
            var o = s.point ? s.point.times(e.pixelDensityRatio) : this._getCanvasCenter(), l = this._outputContext;
            l.save(), l.translate(o.x, o.y), l.rotate(Math.PI / 180 * s.degrees), l.translate(-o.x, -o.y);
          }
          _flip(s) {
            s = s || {};
            var o = s.point ? s.point.times(e.pixelDensityRatio) : this._getCanvasCenter(), l = this._outputContext;
            l.translate(o.x, 0), l.scale(-1, 1), l.translate(-o.x, 0);
          }
          _drawDebugInfo(s, o, l) {
            for (var a = s.length - 1; a >= 0; a--) {
              var u = s[a].tile;
              try {
                this._drawDebugInfoOnTile(u, s.length, a, o, l);
              } catch (c) {
                e.console.error(c);
              }
            }
          }
          _drawDebugInfoOnTile(s, o, l, a, u) {
            var c = this.viewer.world.getIndexOfItem(a) % this.debugGridColor.length, h = this.context;
            h.save(), h.lineWidth = 2 * e.pixelDensityRatio, h.font = "small-caps bold " + 13 * e.pixelDensityRatio + "px arial", h.strokeStyle = this.debugGridColor[c], h.fillStyle = this.debugGridColor[c], this._setRotations(a), u && this._flip({ point: s.position.plus(s.size.divide(2)) }), h.strokeRect(s.position.x * e.pixelDensityRatio, s.position.y * e.pixelDensityRatio, s.size.x * e.pixelDensityRatio, s.size.y * e.pixelDensityRatio);
            var f = (s.position.x + s.size.x / 2) * e.pixelDensityRatio, m = (s.position.y + s.size.y / 2) * e.pixelDensityRatio;
            h.translate(f, m);
            const v = this.viewport.getRotation(true);
            h.rotate(Math.PI / 180 * -v), h.translate(-f, -m), s.x === 0 && s.y === 0 && (h.fillText("Zoom: " + this.viewport.getZoom(), s.position.x * e.pixelDensityRatio, (s.position.y - 30) * e.pixelDensityRatio), h.fillText("Pan: " + this.viewport.getBounds().toString(), s.position.x * e.pixelDensityRatio, (s.position.y - 20) * e.pixelDensityRatio)), h.fillText("Level: " + s.level, (s.position.x + 10) * e.pixelDensityRatio, (s.position.y + 20) * e.pixelDensityRatio), h.fillText("Column: " + s.x, (s.position.x + 10) * e.pixelDensityRatio, (s.position.y + 30) * e.pixelDensityRatio), h.fillText("Row: " + s.y, (s.position.x + 10) * e.pixelDensityRatio, (s.position.y + 40) * e.pixelDensityRatio), h.fillText("Order: " + l + " of " + o, (s.position.x + 10) * e.pixelDensityRatio, (s.position.y + 50) * e.pixelDensityRatio), h.fillText("Size: " + s.size.toString(), (s.position.x + 10) * e.pixelDensityRatio, (s.position.y + 60) * e.pixelDensityRatio), h.fillText("Position: " + s.position.toString(), (s.position.x + 10) * e.pixelDensityRatio, (s.position.y + 70) * e.pixelDensityRatio), this.viewport.getRotation(true) % 360 !== 0 && this._restoreRotationChanges(), a.getRotation(true) % 360 !== 0 && this._restoreRotationChanges(), h.restore();
          }
          _drawPlaceholder(s) {
            const o = s.getBounds(true), l = this.viewportToDrawerRectangle(s.getBounds(true)), a = this._outputContext;
            let u;
            typeof s.placeholderFillStyle == "function" ? u = s.placeholderFillStyle(s, a) : u = s.placeholderFillStyle, this._offsetForRotation({ degrees: this.viewer.viewport.getRotation(true) }), a.fillStyle = u, a.translate(l.x, l.y), a.rotate(Math.PI / 180 * o.degrees), a.translate(-l.x, -l.y), a.fillRect(l.x, l.y, l.width, l.height), this._restoreRotationChanges();
          }
          _getCanvasCenter() {
            return new e.Point(this.canvas.width / 2, this.canvas.height / 2);
          }
          _restoreRotationChanges() {
            var s = this._outputContext;
            s.restore();
          }
          static initShaderProgram(s, o, l) {
            function a(f, m, v) {
              const y = f.createShader(m);
              return f.shaderSource(y, v), f.compileShader(y), f.getShaderParameter(y, f.COMPILE_STATUS) ? y : (e.console.error(`An error occurred compiling the shaders: ${f.getShaderInfoLog(y)}`), f.deleteShader(y), null);
            }
            const u = a(s, s.VERTEX_SHADER, o), c = a(s, s.FRAGMENT_SHADER, l), h = s.createProgram();
            return s.attachShader(h, u), s.attachShader(h, c), s.linkProgram(h), s.getProgramParameter(h, s.LINK_STATUS) ? h : (e.console.error(`Unable to initialize the shader program: ${s.getProgramInfoLog(h)}`), null);
          }
        };
      })(i), (function(e) {
        e.Viewport = function(n) {
          var r = arguments;
          r.length && r[0] instanceof e.Point && (n = { containerSize: r[0], contentSize: r[1], config: r[2] }), n.config && (e.extend(true, n, n.config), delete n.config), this._margins = e.extend({ left: 0, top: 0, right: 0, bottom: 0 }, n.margins || {}), delete n.margins, n.initialDegrees = n.degrees, delete n.degrees, e.extend(true, this, { containerSize: null, contentSize: null, zoomPoint: null, rotationPivot: null, viewer: null, springStiffness: e.DEFAULT_SETTINGS.springStiffness, animationTime: e.DEFAULT_SETTINGS.animationTime, minZoomImageRatio: e.DEFAULT_SETTINGS.minZoomImageRatio, maxZoomPixelRatio: e.DEFAULT_SETTINGS.maxZoomPixelRatio, visibilityRatio: e.DEFAULT_SETTINGS.visibilityRatio, wrapHorizontal: e.DEFAULT_SETTINGS.wrapHorizontal, wrapVertical: e.DEFAULT_SETTINGS.wrapVertical, defaultZoomLevel: e.DEFAULT_SETTINGS.defaultZoomLevel, minZoomLevel: e.DEFAULT_SETTINGS.minZoomLevel, maxZoomLevel: e.DEFAULT_SETTINGS.maxZoomLevel, initialDegrees: e.DEFAULT_SETTINGS.degrees, flipped: e.DEFAULT_SETTINGS.flipped, homeFillsViewer: e.DEFAULT_SETTINGS.homeFillsViewer, silenceMultiImageWarnings: e.DEFAULT_SETTINGS.silenceMultiImageWarnings }, n), this._updateContainerInnerSize(), this.centerSpringX = new e.Spring({ initial: 0, springStiffness: this.springStiffness, animationTime: this.animationTime }), this.centerSpringY = new e.Spring({ initial: 0, springStiffness: this.springStiffness, animationTime: this.animationTime }), this.zoomSpring = new e.Spring({ exponential: true, initial: 1, springStiffness: this.springStiffness, animationTime: this.animationTime }), this.degreesSpring = new e.Spring({ initial: n.initialDegrees, springStiffness: this.springStiffness, animationTime: this.animationTime }), this._oldCenterX = this.centerSpringX.current.value, this._oldCenterY = this.centerSpringY.current.value, this._oldZoom = this.zoomSpring.current.value, this._oldDegrees = this.degreesSpring.current.value, this._setContentBounds(new e.Rect(0, 0, 1, 1), 1), this.goHome(true), this.update();
        }, e.Viewport.prototype = { get degrees() {
          return e.console.warn("Accessing [Viewport.degrees] is deprecated. Use viewport.getRotation instead."), this.getRotation();
        }, set degrees(n) {
          e.console.warn("Setting [Viewport.degrees] is deprecated. Use viewport.rotateTo, viewport.rotateBy, or viewport.setRotation instead."), this.rotateTo(n);
        }, resetContentSize: function(n) {
          return e.console.assert(n, "[Viewport.resetContentSize] contentSize is required"), e.console.assert(n instanceof e.Point, "[Viewport.resetContentSize] contentSize must be an OpenSeadragon.Point"), e.console.assert(n.x > 0, "[Viewport.resetContentSize] contentSize.x must be greater than 0"), e.console.assert(n.y > 0, "[Viewport.resetContentSize] contentSize.y must be greater than 0"), this._setContentBounds(new e.Rect(0, 0, 1, n.y / n.x), n.x), this;
        }, setHomeBounds: function(n, r) {
          e.console.error("[Viewport.setHomeBounds] this function is deprecated; The content bounds should not be set manually."), this._setContentBounds(n, r);
        }, _setContentBounds: function(n, r) {
          e.console.assert(n, "[Viewport._setContentBounds] bounds is required"), e.console.assert(n instanceof e.Rect, "[Viewport._setContentBounds] bounds must be an OpenSeadragon.Rect"), e.console.assert(n.width > 0, "[Viewport._setContentBounds] bounds.width must be greater than 0"), e.console.assert(n.height > 0, "[Viewport._setContentBounds] bounds.height must be greater than 0"), this._contentBoundsNoRotate = n.clone(), this._contentSizeNoRotate = this._contentBoundsNoRotate.getSize().times(r), this._contentBounds = n.rotate(this.getRotation()).getBoundingBox(), this._contentSize = this._contentBounds.getSize().times(r), this._contentAspectRatio = this._contentSize.x / this._contentSize.y, this.viewer && this.viewer.raiseEvent("reset-size", { contentSize: this._contentSizeNoRotate.clone(), contentFactor: r, homeBounds: this._contentBoundsNoRotate.clone(), contentBounds: this._contentBounds.clone() });
        }, getHomeZoom: function() {
          if (this.defaultZoomLevel) return this.defaultZoomLevel;
          var n = this._contentAspectRatio / this.getAspectRatio(), r;
          return this.homeFillsViewer ? r = n >= 1 ? n : 1 : r = n >= 1 ? 1 : n, r / this._contentBounds.width;
        }, getHomeBounds: function() {
          return this.getHomeBoundsNoRotate().rotate(-this.getRotation());
        }, getHomeBoundsNoRotate: function() {
          var n = this._contentBounds.getCenter(), r = 1 / this.getHomeZoom(), s = r / this.getAspectRatio();
          return new e.Rect(n.x - r / 2, n.y - s / 2, r, s);
        }, goHome: function(n) {
          return this.viewer && this.viewer.raiseEvent("home", { immediately: n }), this.fitBounds(this.getHomeBounds(), n);
        }, getMinZoom: function() {
          var n = this.getHomeZoom(), r = this.minZoomLevel ? this.minZoomLevel : this.minZoomImageRatio * n;
          return r;
        }, getMaxZoom: function() {
          var n = this.maxZoomLevel;
          return n || (n = this._contentSize.x * this.maxZoomPixelRatio / this._containerInnerSize.x, n /= this._contentBounds.width), Math.max(n, this.getHomeZoom());
        }, getAspectRatio: function() {
          return this._containerInnerSize.x / this._containerInnerSize.y;
        }, getContainerSize: function() {
          return new e.Point(this.containerSize.x, this.containerSize.y);
        }, getMargins: function() {
          return e.extend({}, this._margins);
        }, setMargins: function(n) {
          e.console.assert(e.type(n) === "object", "[Viewport.setMargins] margins must be an object"), this._margins = e.extend({ left: 0, top: 0, right: 0, bottom: 0 }, n), this._updateContainerInnerSize(), this.viewer && this.viewer.forceRedraw();
        }, getBounds: function(n) {
          return this.getBoundsNoRotate(n).rotate(-this.getRotation(n));
        }, getBoundsNoRotate: function(n) {
          var r = this.getCenter(n), s = 1 / this.getZoom(n), o = s / this.getAspectRatio();
          return new e.Rect(r.x - s / 2, r.y - o / 2, s, o);
        }, getBoundsWithMargins: function(n) {
          return this.getBoundsNoRotateWithMargins(n).rotate(-this.getRotation(n), this.getCenter(n));
        }, getBoundsNoRotateWithMargins: function(n) {
          var r = this.getBoundsNoRotate(n), s = this._containerInnerSize.x * this.getZoom(n);
          return r.x -= this._margins.left / s, r.y -= this._margins.top / s, r.width += (this._margins.left + this._margins.right) / s, r.height += (this._margins.top + this._margins.bottom) / s, r;
        }, getCenter: function(n) {
          var r = new e.Point(this.centerSpringX.current.value, this.centerSpringY.current.value), s = new e.Point(this.centerSpringX.target.value, this.centerSpringY.target.value), o, l, a, u, c, h, f, m;
          return n ? r : this.zoomPoint ? (o = this.pixelFromPoint(this.zoomPoint, true), l = this.getZoom(), a = 1 / l, u = a / this.getAspectRatio(), c = new e.Rect(r.x - a / 2, r.y - u / 2, a, u), h = this._pixelFromPoint(this.zoomPoint, c), f = h.minus(o).rotate(-this.getRotation(true)), m = f.divide(this._containerInnerSize.x * l), s.plus(m)) : s;
        }, getZoom: function(n) {
          return n ? this.zoomSpring.current.value : this.zoomSpring.target.value;
        }, _applyZoomConstraints: function(n) {
          return Math.max(Math.min(n, this.getMaxZoom()), this.getMinZoom());
        }, _applyBoundaryConstraints: function(n) {
          var r = this.viewportToViewerElementRectangle(n).getBoundingBox(), s = this.viewportToViewerElementRectangle(this._contentBoundsNoRotate).getBoundingBox(), o = false, l = false;
          if (!this.wrapHorizontal) {
            var a = r.x + r.width, u = s.x + s.width, c, h, f;
            r.width > s.width ? c = this.visibilityRatio * s.width : c = this.visibilityRatio * r.width, h = s.x - a + c, f = u - r.x - c, c > s.width ? (r.x += (h + f) / 2, o = true) : f < 0 ? (r.x += f, o = true) : h > 0 && (r.x += h, o = true);
          }
          if (!this.wrapVertical) {
            var m = r.y + r.height, v = s.y + s.height, y, T, x;
            r.height > s.height ? y = this.visibilityRatio * s.height : y = this.visibilityRatio * r.height, T = s.y - m + y, x = v - r.y - y, y > s.height ? (r.y += (T + x) / 2, l = true) : x < 0 ? (r.y += x, l = true) : T > 0 && (r.y += T, l = true);
          }
          var E = o || l, M = E ? this.viewerElementToViewportRectangle(r) : n.clone();
          return M.xConstrained = o, M.yConstrained = l, M.constraintApplied = E, M;
        }, _raiseConstraintsEvent: function(n) {
          this.viewer && this.viewer.raiseEvent("constrain", { immediately: n });
        }, applyConstraints: function(n) {
          var r = this.getZoom(), s = this._applyZoomConstraints(r);
          r !== s && this.zoomTo(s, this.zoomPoint, n);
          var o = this.getConstrainedBounds(false);
          return o.constraintApplied && (this.fitBounds(o, n), this._raiseConstraintsEvent(n)), this;
        }, ensureVisible: function(n) {
          return this.applyConstraints(n);
        }, _fitBounds: function(n, r) {
          r = r || {};
          var s = r.immediately || false, o = r.constraints || false, l = this.getAspectRatio(), a = n.getCenter(), u = new e.Rect(n.x, n.y, n.width, n.height, n.degrees + this.getRotation()).getBoundingBox();
          u.getAspectRatio() >= l ? u.height = u.width / l : u.width = u.height * l, u.x = a.x - u.width / 2, u.y = a.y - u.height / 2;
          var c = 1 / u.width;
          if (s) return this.panTo(a, true), this.zoomTo(c, null, true), o && this.applyConstraints(true), this;
          var h = this.getCenter(true), f = this.getZoom(true);
          this.panTo(h, true), this.zoomTo(f, null, true);
          var m = this.getBounds(), v = this.getZoom();
          if (v === 0 || Math.abs(c / v - 1) < 1e-8) return this.zoomTo(c, null, true), this.panTo(a, s), o && this.applyConstraints(false), this;
          if (o) {
            this.panTo(a, false), c = this._applyZoomConstraints(c), this.zoomTo(c, null, false);
            var y = this.getConstrainedBounds();
            this.panTo(h, true), this.zoomTo(f, null, true), this.fitBounds(y);
          } else {
            var T = u.rotate(-this.getRotation()), x = T.getTopLeft().times(c).minus(m.getTopLeft().times(v)).divide(c - v);
            this.zoomTo(c, x, s);
          }
          return this;
        }, fitBounds: function(n, r) {
          return this._fitBounds(n, { immediately: r, constraints: false });
        }, fitBoundsWithConstraints: function(n, r) {
          return this._fitBounds(n, { immediately: r, constraints: true });
        }, fitVertically: function(n) {
          var r = new e.Rect(this._contentBounds.x + this._contentBounds.width / 2, this._contentBounds.y, 0, this._contentBounds.height);
          return this.fitBounds(r, n);
        }, fitHorizontally: function(n) {
          var r = new e.Rect(this._contentBounds.x, this._contentBounds.y + this._contentBounds.height / 2, this._contentBounds.width, 0);
          return this.fitBounds(r, n);
        }, getConstrainedBounds: function(n) {
          var r, s;
          return r = this.getBounds(n), s = this._applyBoundaryConstraints(r), s;
        }, panBy: function(n, r) {
          var s = new e.Point(this.centerSpringX.target.value, this.centerSpringY.target.value);
          return this.panTo(s.plus(n), r);
        }, panTo: function(n, r) {
          return r ? (this.centerSpringX.resetTo(n.x), this.centerSpringY.resetTo(n.y)) : (this.centerSpringX.springTo(n.x), this.centerSpringY.springTo(n.y)), this.viewer && this.viewer.raiseEvent("pan", { center: n, immediately: r }), this;
        }, zoomBy: function(n, r, s) {
          return this.zoomTo(this.zoomSpring.target.value * n, r, s);
        }, zoomTo: function(n, r, s) {
          var o = this;
          return this.zoomPoint = r instanceof e.Point && !isNaN(r.x) && !isNaN(r.y) ? r : null, s ? this._adjustCenterSpringsForZoomPoint(function() {
            o.zoomSpring.resetTo(n);
          }) : this.zoomSpring.springTo(n), this.viewer && this.viewer.raiseEvent("zoom", { zoom: n, refPoint: r, immediately: s }), this;
        }, setRotation: function(n, r) {
          return this.rotateTo(n, null, r);
        }, getRotation: function(n) {
          return n ? this.degreesSpring.current.value : this.degreesSpring.target.value;
        }, setRotationWithPivot: function(n, r, s) {
          return this.rotateTo(n, r, s);
        }, rotateTo: function(n, r, s) {
          if (!this.viewer || !this.viewer.drawer.canRotate()) return this;
          if (this.degreesSpring.target.value === n && this.degreesSpring.isAtTargetValue()) return this;
          if (this.rotationPivot = r instanceof e.Point && !isNaN(r.x) && !isNaN(r.y) ? r : null, s) if (this.rotationPivot) {
            var o = n - this._oldDegrees;
            if (!o) return this.rotationPivot = null, this;
            this._rotateAboutPivot(n);
          } else this.degreesSpring.resetTo(n);
          else {
            var l = e.positiveModulo(this.degreesSpring.current.value, 360), a = e.positiveModulo(n, 360), u = a - l;
            u > 180 ? a -= 360 : u < -180 && (a += 360);
            var c = l - a;
            this.degreesSpring.resetTo(n + c), this.degreesSpring.springTo(n);
          }
          return this._setContentBounds(this.viewer.world.getHomeBounds(), this.viewer.world.getContentFactor()), this.viewer.forceRedraw(), this.viewer.raiseEvent("rotate", { degrees: n, immediately: !!s, pivot: this.rotationPivot || this.getCenter() }), this;
        }, rotateBy: function(n, r, s) {
          return this.rotateTo(this.degreesSpring.target.value + n, r, s);
        }, resize: function(n, r) {
          var s = this.getBoundsNoRotate(), o = s, l;
          this.containerSize.x = n.x, this.containerSize.y = n.y, this._updateContainerInnerSize(), r && (l = n.x / this.containerSize.x, o.width = s.width * l, o.height = o.width / this.getAspectRatio()), this.viewer && this.viewer.raiseEvent("resize", { newContainerSize: n, maintain: r });
          var a = this.fitBounds(o, true);
          return this.viewer && this.viewer.raiseEvent("after-resize", { newContainerSize: n, maintain: r }), a;
        }, _updateContainerInnerSize: function() {
          this._containerInnerSize = new e.Point(Math.max(1, this.containerSize.x - (this._margins.left + this._margins.right)), Math.max(1, this.containerSize.y - (this._margins.top + this._margins.bottom)));
        }, update: function() {
          var n = this;
          this._adjustCenterSpringsForZoomPoint(function() {
            n.zoomSpring.update();
          }), this.degreesSpring.isAtTargetValue() && (this.rotationPivot = null), this.centerSpringX.update(), this.centerSpringY.update(), this.rotationPivot ? this._rotateAboutPivot(true) : this.degreesSpring.update();
          var r = this.centerSpringX.current.value !== this._oldCenterX || this.centerSpringY.current.value !== this._oldCenterY || this.zoomSpring.current.value !== this._oldZoom || this.degreesSpring.current.value !== this._oldDegrees;
          this._oldCenterX = this.centerSpringX.current.value, this._oldCenterY = this.centerSpringY.current.value, this._oldZoom = this.zoomSpring.current.value, this._oldDegrees = this.degreesSpring.current.value;
          var s = r || !this.zoomSpring.isAtTargetValue() || !this.centerSpringX.isAtTargetValue() || !this.centerSpringY.isAtTargetValue() || !this.degreesSpring.isAtTargetValue();
          return s;
        }, _rotateAboutPivot: function(n) {
          var r = n === true, s = this.rotationPivot.minus(this.getCenter());
          this.centerSpringX.shiftBy(s.x), this.centerSpringY.shiftBy(s.y), r ? this.degreesSpring.update() : this.degreesSpring.resetTo(n);
          var o = this.degreesSpring.current.value - this._oldDegrees, l = s.rotate(o * -1).times(-1);
          this.centerSpringX.shiftBy(l.x), this.centerSpringY.shiftBy(l.y);
        }, _adjustCenterSpringsForZoomPoint: function(n) {
          if (this.zoomPoint) {
            var r = this.pixelFromPoint(this.zoomPoint, true);
            n();
            var s = this.pixelFromPoint(this.zoomPoint, true), o = s.minus(r), l = this.deltaPointsFromPixels(o, true);
            this.centerSpringX.shiftBy(l.x), this.centerSpringY.shiftBy(l.y), this.zoomSpring.isAtTargetValue() && (this.zoomPoint = null);
          } else n();
        }, deltaPixelsFromPointsNoRotate: function(n, r) {
          return n.times(this._containerInnerSize.x * this.getZoom(r));
        }, deltaPixelsFromPoints: function(n, r) {
          return this.deltaPixelsFromPointsNoRotate(n.rotate(this.getRotation(r)), r);
        }, deltaPointsFromPixelsNoRotate: function(n, r) {
          return n.divide(this._containerInnerSize.x * this.getZoom(r));
        }, deltaPointsFromPixels: function(n, r) {
          return this.deltaPointsFromPixelsNoRotate(n, r).rotate(-this.getRotation(r));
        }, pixelFromPointNoRotate: function(n, r) {
          return this._pixelFromPointNoRotate(n, this.getBoundsNoRotate(r));
        }, pixelFromPoint: function(n, r) {
          return this._pixelFromPoint(n, this.getBoundsNoRotate(r));
        }, _pixelFromPointNoRotate: function(n, r) {
          return n.minus(r.getTopLeft()).times(this._containerInnerSize.x / r.width).plus(new e.Point(this._margins.left, this._margins.top));
        }, _pixelFromPoint: function(n, r) {
          return this._pixelFromPointNoRotate(n.rotate(this.getRotation(true), this.getCenter(true)), r);
        }, pointFromPixelNoRotate: function(n, r) {
          var s = this.getBoundsNoRotate(r);
          return n.minus(new e.Point(this._margins.left, this._margins.top)).divide(this._containerInnerSize.x / s.width).plus(s.getTopLeft());
        }, pointFromPixel: function(n, r) {
          return this.pointFromPixelNoRotate(n, r).rotate(-this.getRotation(r), this.getCenter(r));
        }, _viewportToImageDelta: function(n, r) {
          var s = this._contentBoundsNoRotate.width;
          return new e.Point(n * this._contentSizeNoRotate.x / s, r * this._contentSizeNoRotate.x / s);
        }, viewportToImageCoordinates: function(n, r) {
          if (n instanceof e.Point) return this.viewportToImageCoordinates(n.x, n.y);
          if (this.viewer) {
            var s = this.viewer.world.getItemCount();
            if (s > 1) this.silenceMultiImageWarnings || e.console.error("[Viewport.viewportToImageCoordinates] is not accurate with multi-image; use TiledImage.viewportToImageCoordinates instead.");
            else if (s === 1) {
              var o = this.viewer.world.getItemAt(0);
              return o.viewportToImageCoordinates(n, r, true);
            }
          }
          return this._viewportToImageDelta(n - this._contentBoundsNoRotate.x, r - this._contentBoundsNoRotate.y);
        }, _imageToViewportDelta: function(n, r) {
          var s = this._contentBoundsNoRotate.width;
          return new e.Point(n / this._contentSizeNoRotate.x * s, r / this._contentSizeNoRotate.x * s);
        }, imageToViewportCoordinates: function(n, r) {
          if (n instanceof e.Point) return this.imageToViewportCoordinates(n.x, n.y);
          if (this.viewer) {
            var s = this.viewer.world.getItemCount();
            if (s > 1) this.silenceMultiImageWarnings || e.console.error("[Viewport.imageToViewportCoordinates] is not accurate with multi-image; use TiledImage.imageToViewportCoordinates instead.");
            else if (s === 1) {
              var o = this.viewer.world.getItemAt(0);
              return o.imageToViewportCoordinates(n, r, true);
            }
          }
          var l = this._imageToViewportDelta(n, r);
          return l.x += this._contentBoundsNoRotate.x, l.y += this._contentBoundsNoRotate.y, l;
        }, imageToViewportRectangle: function(n, r, s, o) {
          var l = n;
          if (l instanceof e.Rect || (l = new e.Rect(n, r, s, o)), this.viewer) {
            var a = this.viewer.world.getItemCount();
            if (a > 1) this.silenceMultiImageWarnings || e.console.error("[Viewport.imageToViewportRectangle] is not accurate with multi-image; use TiledImage.imageToViewportRectangle instead.");
            else if (a === 1) {
              var u = this.viewer.world.getItemAt(0);
              return u.imageToViewportRectangle(n, r, s, o, true);
            }
          }
          var c = this.imageToViewportCoordinates(l.x, l.y), h = this._imageToViewportDelta(l.width, l.height);
          return new e.Rect(c.x, c.y, h.x, h.y, l.degrees);
        }, viewportToImageRectangle: function(n, r, s, o) {
          var l = n;
          if (l instanceof e.Rect || (l = new e.Rect(n, r, s, o)), this.viewer) {
            var a = this.viewer.world.getItemCount();
            if (a > 1) this.silenceMultiImageWarnings || e.console.error("[Viewport.viewportToImageRectangle] is not accurate with multi-image; use TiledImage.viewportToImageRectangle instead.");
            else if (a === 1) {
              var u = this.viewer.world.getItemAt(0);
              return u.viewportToImageRectangle(n, r, s, o, true);
            }
          }
          var c = this.viewportToImageCoordinates(l.x, l.y), h = this._viewportToImageDelta(l.width, l.height);
          return new e.Rect(c.x, c.y, h.x, h.y, l.degrees);
        }, viewerElementToImageCoordinates: function(n) {
          var r = this.pointFromPixel(n, true);
          return this.viewportToImageCoordinates(r);
        }, imageToViewerElementCoordinates: function(n) {
          var r = this.imageToViewportCoordinates(n);
          return this.pixelFromPoint(r, true);
        }, windowToImageCoordinates: function(n) {
          e.console.assert(this.viewer, "[Viewport.windowToImageCoordinates] the viewport must have a viewer.");
          var r = n.minus(e.getElementPosition(this.viewer.element));
          return this.viewerElementToImageCoordinates(r);
        }, imageToWindowCoordinates: function(n) {
          e.console.assert(this.viewer, "[Viewport.imageToWindowCoordinates] the viewport must have a viewer.");
          var r = this.imageToViewerElementCoordinates(n);
          return r.plus(e.getElementPosition(this.viewer.element));
        }, viewerElementToViewportCoordinates: function(n) {
          return this.pointFromPixel(n, true);
        }, viewportToViewerElementCoordinates: function(n) {
          return this.pixelFromPoint(n, true);
        }, viewerElementToViewportRectangle: function(n) {
          return e.Rect.fromSummits(this.pointFromPixel(n.getTopLeft(), true), this.pointFromPixel(n.getTopRight(), true), this.pointFromPixel(n.getBottomLeft(), true));
        }, viewportToViewerElementRectangle: function(n) {
          return e.Rect.fromSummits(this.pixelFromPoint(n.getTopLeft(), true), this.pixelFromPoint(n.getTopRight(), true), this.pixelFromPoint(n.getBottomLeft(), true));
        }, windowToViewportCoordinates: function(n) {
          e.console.assert(this.viewer, "[Viewport.windowToViewportCoordinates] the viewport must have a viewer.");
          var r = n.minus(e.getElementPosition(this.viewer.element));
          return this.viewerElementToViewportCoordinates(r);
        }, viewportToWindowCoordinates: function(n) {
          e.console.assert(this.viewer, "[Viewport.viewportToWindowCoordinates] the viewport must have a viewer.");
          var r = this.viewportToViewerElementCoordinates(n);
          return r.plus(e.getElementPosition(this.viewer.element));
        }, viewportToImageZoom: function(n) {
          if (this.viewer) {
            var r = this.viewer.world.getItemCount();
            if (r > 1) this.silenceMultiImageWarnings || e.console.error("[Viewport.viewportToImageZoom] is not accurate with multi-image.");
            else if (r === 1) {
              var s = this.viewer.world.getItemAt(0);
              return s.viewportToImageZoom(n);
            }
          }
          var o = this._contentSizeNoRotate.x, l = this._containerInnerSize.x, a = this._contentBoundsNoRotate.width, u = l / o * a;
          return n * u;
        }, imageToViewportZoom: function(n) {
          if (this.viewer) {
            var r = this.viewer.world.getItemCount();
            if (r > 1) this.silenceMultiImageWarnings || e.console.error("[Viewport.imageToViewportZoom] is not accurate with multi-image. Instead, use [TiledImage.imageToViewportZoom] for the specific image of interest");
            else if (r === 1) {
              var s = this.viewer.world.getItemAt(0);
              return s.imageToViewportZoom(n);
            }
          }
          var o = this._contentSizeNoRotate.x, l = this._containerInnerSize.x, a = this._contentBoundsNoRotate.width, u = o / l / a;
          return n * u;
        }, toggleFlip: function() {
          return this.setFlip(!this.getFlip()), this;
        }, getFlip: function() {
          return this.flipped;
        }, setFlip: function(n) {
          return this.flipped === n ? this : (this.flipped = n, this.viewer.navigator && this.viewer.navigator.setFlip(this.getFlip()), this.viewer.forceRedraw(), this.viewer.raiseEvent("flip", { flipped: n }), this);
        }, getMaxZoomPixelRatio: function() {
          return this.maxZoomPixelRatio;
        }, setMaxZoomPixelRatio: function(n, r = true, s = false) {
          e.console.assert(!isNaN(n), "[Viewport.setMaxZoomPixelRatio] ratio must be a number"), !isNaN(n) && (this.maxZoomPixelRatio = n, r && this.getZoom() > this.getMaxZoom() && this.applyConstraints(s));
        } };
      })(i), (function(e) {
        e.TiledImage = function(n) {
          this._initialized = false, e.console.assert(n.tileCache, "[TiledImage] options.tileCache is required"), e.console.assert(n.drawer, "[TiledImage] options.drawer is required"), e.console.assert(n.viewer, "[TiledImage] options.viewer is required"), e.console.assert(n.imageLoader, "[TiledImage] options.imageLoader is required"), e.console.assert(n.source, "[TiledImage] options.source is required"), e.console.assert(!n.clip || n.clip instanceof e.Rect, "[TiledImage] options.clip must be an OpenSeadragon.Rect if present"), e.EventSource.call(this), this._tileCache = n.tileCache, delete n.tileCache, this._drawer = n.drawer, delete n.drawer, this._imageLoader = n.imageLoader, delete n.imageLoader, n.clip instanceof e.Rect && (this._clip = n.clip.clone()), delete n.clip;
          var r = n.x || 0;
          delete n.x;
          var s = n.y || 0;
          delete n.y, this.normHeight = n.source.dimensions.y / n.source.dimensions.x, this.contentAspectX = n.source.dimensions.x / n.source.dimensions.y;
          var o = 1;
          n.width ? (o = n.width, delete n.width, n.height && (e.console.error("specifying both width and height to a tiledImage is not supported"), delete n.height)) : n.height && (o = n.height / this.normHeight, delete n.height);
          var l = n.fitBounds;
          delete n.fitBounds;
          var a = n.fitBoundsPlacement || i.Placement.CENTER;
          delete n.fitBoundsPlacement;
          var u = n.degrees || 0;
          delete n.degrees;
          var c = n.ajaxHeaders;
          delete n.ajaxHeaders, e.extend(true, this, { viewer: null, tilesMatrix: {}, coverage: {}, loadingCoverage: {}, lastDrawn: [], lastResetTime: 0, _needsDraw: true, _needsUpdate: true, _hasOpaqueTile: false, _tilesLoading: 0, _tilesToDraw: [], _lastDrawn: [], _isBlending: false, _wasBlending: false, _isTainted: false, springStiffness: e.DEFAULT_SETTINGS.springStiffness, animationTime: e.DEFAULT_SETTINGS.animationTime, minZoomImageRatio: e.DEFAULT_SETTINGS.minZoomImageRatio, wrapHorizontal: e.DEFAULT_SETTINGS.wrapHorizontal, wrapVertical: e.DEFAULT_SETTINGS.wrapVertical, immediateRender: e.DEFAULT_SETTINGS.immediateRender, blendTime: e.DEFAULT_SETTINGS.blendTime, alwaysBlend: e.DEFAULT_SETTINGS.alwaysBlend, minPixelRatio: e.DEFAULT_SETTINGS.minPixelRatio, smoothTileEdgesMinZoom: e.DEFAULT_SETTINGS.smoothTileEdgesMinZoom, iOSDevice: e.DEFAULT_SETTINGS.iOSDevice, debugMode: e.DEFAULT_SETTINGS.debugMode, crossOriginPolicy: e.DEFAULT_SETTINGS.crossOriginPolicy, ajaxWithCredentials: e.DEFAULT_SETTINGS.ajaxWithCredentials, placeholderFillStyle: e.DEFAULT_SETTINGS.placeholderFillStyle, opacity: e.DEFAULT_SETTINGS.opacity, preload: e.DEFAULT_SETTINGS.preload, compositeOperation: e.DEFAULT_SETTINGS.compositeOperation, subPixelRoundingForTransparency: e.DEFAULT_SETTINGS.subPixelRoundingForTransparency, maxTilesPerFrame: e.DEFAULT_SETTINGS.maxTilesPerFrame }, n), this._preload = this.preload, delete this.preload, this._fullyLoaded = false, this._xSpring = new e.Spring({ initial: r, springStiffness: this.springStiffness, animationTime: this.animationTime }), this._ySpring = new e.Spring({ initial: s, springStiffness: this.springStiffness, animationTime: this.animationTime }), this._scaleSpring = new e.Spring({ initial: o, springStiffness: this.springStiffness, animationTime: this.animationTime }), this._degreesSpring = new e.Spring({ initial: u, springStiffness: this.springStiffness, animationTime: this.animationTime }), this._updateForScale(), l && this.fitBounds(l, a, true), this._ownAjaxHeaders = {}, this.setAjaxHeaders(c, false), this._initialized = true;
        }, e.extend(e.TiledImage.prototype, e.EventSource.prototype, { needsDraw: function() {
          return this._needsDraw;
        }, redraw: function() {
          this._needsDraw = true;
        }, getFullyLoaded: function() {
          return this._fullyLoaded;
        }, _setFullyLoaded: function(n) {
          n !== this._fullyLoaded && (this._fullyLoaded = n, this.raiseEvent("fully-loaded-change", { fullyLoaded: this._fullyLoaded }));
        }, reset: function() {
          this._tileCache.clearTilesFor(this), this.lastResetTime = e.now(), this._needsDraw = true;
        }, update: function(n) {
          let r = this._xSpring.update(), s = this._ySpring.update(), o = this._scaleSpring.update(), l = this._degreesSpring.update(), a = r || s || o || l || this._needsUpdate;
          if (a || n || !this._fullyLoaded) {
            let u = this._updateLevelsForViewport();
            this._setFullyLoaded(u);
          }
          return this._needsUpdate = false, a ? (this._updateForScale(), this._raiseBoundsChange(), this._needsDraw = true, true) : false;
        }, setDrawn: function() {
          return this._needsDraw = this._isBlending || this._wasBlending, this._needsDraw;
        }, setTainted(n) {
          this._isTainted = n;
        }, isTainted() {
          return this._isTainted;
        }, destroy: function() {
          this.reset(), this.source.destroy && this.source.destroy(this.viewer);
        }, getBounds: function(n) {
          return this.getBoundsNoRotate(n).rotate(this.getRotation(n), this._getRotationPoint(n));
        }, getBoundsNoRotate: function(n) {
          return n ? new e.Rect(this._xSpring.current.value, this._ySpring.current.value, this._worldWidthCurrent, this._worldHeightCurrent) : new e.Rect(this._xSpring.target.value, this._ySpring.target.value, this._worldWidthTarget, this._worldHeightTarget);
        }, getWorldBounds: function() {
          return e.console.error("[TiledImage.getWorldBounds] is deprecated; use TiledImage.getBounds instead"), this.getBounds();
        }, getClippedBounds: function(n) {
          var r = this.getBoundsNoRotate(n);
          if (this._clip) {
            var s = n ? this._worldWidthCurrent : this._worldWidthTarget, o = s / this.source.dimensions.x, l = this._clip.times(o);
            r = new e.Rect(r.x + l.x, r.y + l.y, l.width, l.height);
          }
          return r.rotate(this.getRotation(n), this._getRotationPoint(n));
        }, getTileBounds: function(n, r, s) {
          var o = this.source.getNumTiles(n), l = (o.x + r % o.x) % o.x, a = (o.y + s % o.y) % o.y, u = this.source.getTileBounds(n, l, a);
          return this.getFlip() && (u.x = Math.max(0, 1 - u.x - u.width)), u.x += (r - l) / o.x, u.y += this._worldHeightCurrent / this._worldWidthCurrent * ((s - a) / o.y), u;
        }, getContentSize: function() {
          return new e.Point(this.source.dimensions.x, this.source.dimensions.y);
        }, getSizeInWindowCoordinates: function() {
          var n = this.imageToWindowCoordinates(new e.Point(0, 0)), r = this.imageToWindowCoordinates(this.getContentSize());
          return new e.Point(r.x - n.x, r.y - n.y);
        }, _viewportToImageDelta: function(n, r, s) {
          var o = s ? this._scaleSpring.current.value : this._scaleSpring.target.value;
          return new e.Point(n * (this.source.dimensions.x / o), r * (this.source.dimensions.y * this.contentAspectX / o));
        }, viewportToImageCoordinates: function(n, r, s) {
          var o;
          return n instanceof e.Point ? (s = r, o = n) : o = new e.Point(n, r), o = o.rotate(-this.getRotation(s), this._getRotationPoint(s)), s ? this._viewportToImageDelta(o.x - this._xSpring.current.value, o.y - this._ySpring.current.value) : this._viewportToImageDelta(o.x - this._xSpring.target.value, o.y - this._ySpring.target.value);
        }, _imageToViewportDelta: function(n, r, s) {
          var o = s ? this._scaleSpring.current.value : this._scaleSpring.target.value;
          return new e.Point(n / this.source.dimensions.x * o, r / this.source.dimensions.y / this.contentAspectX * o);
        }, imageToViewportCoordinates: function(n, r, s) {
          n instanceof e.Point && (s = r, r = n.y, n = n.x);
          var o = this._imageToViewportDelta(n, r, s);
          return s ? (o.x += this._xSpring.current.value, o.y += this._ySpring.current.value) : (o.x += this._xSpring.target.value, o.y += this._ySpring.target.value), o.rotate(this.getRotation(s), this._getRotationPoint(s));
        }, imageToViewportRectangle: function(n, r, s, o, l) {
          var a = n;
          a instanceof e.Rect ? l = r : a = new e.Rect(n, r, s, o);
          var u = this.imageToViewportCoordinates(a.getTopLeft(), l), c = this._imageToViewportDelta(a.width, a.height, l);
          return new e.Rect(u.x, u.y, c.x, c.y, a.degrees + this.getRotation(l));
        }, viewportToImageRectangle: function(n, r, s, o, l) {
          var a = n;
          n instanceof e.Rect ? l = r : a = new e.Rect(n, r, s, o);
          var u = this.viewportToImageCoordinates(a.getTopLeft(), l), c = this._viewportToImageDelta(a.width, a.height, l);
          return new e.Rect(u.x, u.y, c.x, c.y, a.degrees - this.getRotation(l));
        }, viewerElementToImageCoordinates: function(n) {
          var r = this.viewport.pointFromPixel(n, true);
          return this.viewportToImageCoordinates(r);
        }, imageToViewerElementCoordinates: function(n) {
          var r = this.imageToViewportCoordinates(n);
          return this.viewport.pixelFromPoint(r, true);
        }, windowToImageCoordinates: function(n) {
          var r = n.minus(i.getElementPosition(this.viewer.element));
          return this.viewerElementToImageCoordinates(r);
        }, imageToWindowCoordinates: function(n) {
          var r = this.imageToViewerElementCoordinates(n);
          return r.plus(i.getElementPosition(this.viewer.element));
        }, _viewportToTiledImageRectangle: function(n) {
          var r = this._scaleSpring.current.value;
          return n = n.rotate(-this.getRotation(true), this._getRotationPoint(true)), new e.Rect((n.x - this._xSpring.current.value) / r, (n.y - this._ySpring.current.value) / r, n.width / r, n.height / r, n.degrees);
        }, viewportToImageZoom: function(n) {
          var r = this._scaleSpring.current.value * this.viewport._containerInnerSize.x / this.source.dimensions.x;
          return r * n;
        }, imageToViewportZoom: function(n) {
          var r = this._scaleSpring.current.value * this.viewport._containerInnerSize.x / this.source.dimensions.x;
          return n / r;
        }, setPosition: function(n, r) {
          var s = this._xSpring.target.value === n.x && this._ySpring.target.value === n.y;
          if (r) {
            if (s && this._xSpring.current.value === n.x && this._ySpring.current.value === n.y) return;
            this._xSpring.resetTo(n.x), this._ySpring.resetTo(n.y), this._needsDraw = true, this._needsUpdate = true;
          } else {
            if (s) return;
            this._xSpring.springTo(n.x), this._ySpring.springTo(n.y), this._needsDraw = true, this._needsUpdate = true;
          }
          s || this._raiseBoundsChange();
        }, setWidth: function(n, r) {
          this._setScale(n, r);
        }, setHeight: function(n, r) {
          this._setScale(n / this.normHeight, r);
        }, setCroppingPolygons: function(n) {
          var r = function(o) {
            return o instanceof e.Point || typeof o.x == "number" && typeof o.y == "number";
          }, s = function(o) {
            return o.map(function(l) {
              try {
                if (r(l)) return { x: l.x, y: l.y };
                throw new Error();
              } catch {
                throw new Error("A Provided cropping polygon point is not supported");
              }
            });
          };
          try {
            if (!e.isArray(n)) throw new Error("Provided cropping polygon is not an array");
            this._croppingPolygons = n.map(function(o) {
              return s(o);
            }), this._needsDraw = true;
          } catch (o) {
            e.console.error("[TiledImage.setCroppingPolygons] Cropping polygon format not supported"), e.console.error(o), this.resetCroppingPolygons();
          }
        }, resetCroppingPolygons: function() {
          this._croppingPolygons = null, this._needsDraw = true;
        }, fitBounds: function(n, r, s) {
          r = r || e.Placement.CENTER;
          var o = e.Placement.properties[r], l = this.contentAspectX, a = 0, u = 0, c = 1, h = 1;
          if (this._clip && (l = this._clip.getAspectRatio(), c = this._clip.width / this.source.dimensions.x, h = this._clip.height / this.source.dimensions.y, n.getAspectRatio() > l ? (a = this._clip.x / this._clip.height * n.height, u = this._clip.y / this._clip.height * n.height) : (a = this._clip.x / this._clip.width * n.width, u = this._clip.y / this._clip.width * n.width)), n.getAspectRatio() > l) {
            var f = n.height / h, m = 0;
            o.isHorizontallyCentered ? m = (n.width - n.height * l) / 2 : o.isRight && (m = n.width - n.height * l), this.setPosition(new e.Point(n.x - a + m, n.y - u), s), this.setHeight(f, s);
          } else {
            var v = n.width / c, y = 0;
            o.isVerticallyCentered ? y = (n.height - n.width / l) / 2 : o.isBottom && (y = n.height - n.width / l), this.setPosition(new e.Point(n.x - a, n.y - u + y), s), this.setWidth(v, s);
          }
        }, getClip: function() {
          return this._clip ? this._clip.clone() : null;
        }, setClip: function(n) {
          e.console.assert(!n || n instanceof e.Rect, "[TiledImage.setClip] newClip must be an OpenSeadragon.Rect or null"), n instanceof e.Rect ? this._clip = n.clone() : this._clip = null, this._needsUpdate = true, this._needsDraw = true, this.raiseEvent("clip-change");
        }, getFlip: function() {
          return this.flipped;
        }, setFlip: function(n) {
          this.flipped = n;
        }, get flipped() {
          return this._flipped;
        }, set flipped(n) {
          let r = this._flipped !== !!n;
          this._flipped = !!n, r && (this.update(true), this._needsDraw = true, this._raiseBoundsChange());
        }, get wrapHorizontal() {
          return this._wrapHorizontal;
        }, set wrapHorizontal(n) {
          let r = this._wrapHorizontal !== !!n;
          this._wrapHorizontal = !!n, this._initialized && r && (this.update(true), this._needsDraw = true);
        }, get wrapVertical() {
          return this._wrapVertical;
        }, set wrapVertical(n) {
          let r = this._wrapVertical !== !!n;
          this._wrapVertical = !!n, this._initialized && r && (this.update(true), this._needsDraw = true);
        }, get debugMode() {
          return this._debugMode;
        }, set debugMode(n) {
          this._debugMode = !!n, this._needsDraw = true;
        }, getOpacity: function() {
          return this.opacity;
        }, setOpacity: function(n) {
          this.opacity = n;
        }, get opacity() {
          return this._opacity;
        }, set opacity(n) {
          n !== this.opacity && (this._opacity = n, this._needsDraw = true, this.raiseEvent("opacity-change", { opacity: this.opacity }));
        }, getPreload: function() {
          return this._preload;
        }, setPreload: function(n) {
          this._preload = !!n, this._needsDraw = true;
        }, getRotation: function(n) {
          return n ? this._degreesSpring.current.value : this._degreesSpring.target.value;
        }, setRotation: function(n, r) {
          this._degreesSpring.target.value === n && this._degreesSpring.isAtTargetValue() || (r ? this._degreesSpring.resetTo(n) : this._degreesSpring.springTo(n), this._needsDraw = true, this._needsUpdate = true, this._raiseBoundsChange());
        }, getDrawArea: function() {
          if (this._opacity === 0 && !this._preload) return false;
          var n = this._viewportToTiledImageRectangle(this.viewport.getBoundsWithMargins(true));
          if (!this.wrapHorizontal && !this.wrapVertical) {
            var r = this._viewportToTiledImageRectangle(this.getClippedBounds(true));
            n = n.intersection(r);
          }
          return n;
        }, getTilesToDraw: function() {
          let n = this._tilesToDraw.flat();
          return this._updateTilesInViewport(n), n = this._tilesToDraw.flat(), n.forEach((r) => {
            r.tile.beingDrawn = true;
          }), this._lastDrawn = n, n;
        }, _getRotationPoint: function(n) {
          return this.getBoundsNoRotate(n).getCenter();
        }, get compositeOperation() {
          return this._compositeOperation;
        }, set compositeOperation(n) {
          n !== this._compositeOperation && (this._compositeOperation = n, this._needsDraw = true, this.raiseEvent("composite-operation-change", { compositeOperation: this._compositeOperation }));
        }, getCompositeOperation: function() {
          return this._compositeOperation;
        }, setCompositeOperation: function(n) {
          this.compositeOperation = n;
        }, setAjaxHeaders: function(n, r) {
          if (n === null && (n = {}), !e.isPlainObject(n)) {
            console.error("[TiledImage.setAjaxHeaders] Ignoring invalid headers, must be a plain object");
            return;
          }
          this._ownAjaxHeaders = n, this._updateAjaxHeaders(r);
        }, _updateAjaxHeaders: function(n) {
          if (n === void 0 && (n = true), e.isPlainObject(this.viewer.ajaxHeaders) ? this.ajaxHeaders = e.extend({}, this.viewer.ajaxHeaders, this._ownAjaxHeaders) : this.ajaxHeaders = this._ownAjaxHeaders, n) {
            var r, s, o, l;
            for (var a in this.tilesMatrix) {
              r = this.source.getNumTiles(a);
              for (var u in this.tilesMatrix[a]) {
                s = (r.x + u % r.x) % r.x;
                for (var c in this.tilesMatrix[a][u]) if (o = (r.y + c % r.y) % r.y, l = this.tilesMatrix[a][u][c], l.loadWithAjax = this.loadTilesWithAjax, l.loadWithAjax) {
                  var h = this.source.getTileAjaxHeaders(a, s, o);
                  l.ajaxHeaders = e.extend({}, this.ajaxHeaders, h);
                } else l.ajaxHeaders = null;
              }
            }
            for (var f = 0; f < this._imageLoader.jobQueue.length; f++) {
              var m = this._imageLoader.jobQueue[f];
              m.loadWithAjax = m.tile.loadWithAjax, m.ajaxHeaders = m.tile.loadWithAjax ? m.tile.ajaxHeaders : null;
            }
          }
        }, _setScale: function(n, r) {
          var s = this._scaleSpring.target.value === n;
          if (r) {
            if (s && this._scaleSpring.current.value === n) return;
            this._scaleSpring.resetTo(n), this._updateForScale(), this._needsDraw = true, this._needsUpdate = true;
          } else {
            if (s) return;
            this._scaleSpring.springTo(n), this._updateForScale(), this._needsDraw = true, this._needsUpdate = true;
          }
          s || this._raiseBoundsChange();
        }, _updateForScale: function() {
          this._worldWidthTarget = this._scaleSpring.target.value, this._worldHeightTarget = this.normHeight * this._scaleSpring.target.value, this._worldWidthCurrent = this._scaleSpring.current.value, this._worldHeightCurrent = this.normHeight * this._scaleSpring.current.value;
        }, _raiseBoundsChange: function() {
          this.raiseEvent("bounds-change");
        }, _isBottomItem: function() {
          return this.viewer.world.getItemAt(0) === this;
        }, _getLevelsInterval: function() {
          var n = Math.max(this.source.minLevel, Math.floor(Math.log(this.minZoomImageRatio) / Math.log(2))), r = this.viewport.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(0), true).x * this._scaleSpring.current.value, s = Math.min(Math.abs(this.source.maxLevel), Math.abs(Math.floor(Math.log(r / this.minPixelRatio) / Math.log(2))));
          return s = Math.max(s, this.source.minLevel || 0), n = Math.min(n, s), { lowestLevel: n, highestLevel: s };
        }, _updateLevelsForViewport: function() {
          var n = this._getLevelsInterval(), r = n.lowestLevel, s = n.highestLevel, o = [], l = this.getDrawArea(), a = e.now();
          if (this._lastDrawn.forEach((U) => {
            U.tile.beingDrawn = false;
          }), this._tilesToDraw = [], this._tilesLoading = 0, this.loadingCoverage = {}, !l) return this._needsDraw = false, this._fullyLoaded;
          var u = new Array(s - r + 1);
          for (let U = 0, K = s; K >= r; K--, U++) u[U] = K;
          for (let U = s + 1; U <= this.source.maxLevel; U++) {
            var c = this.tilesMatrix[U] && this.tilesMatrix[U][0] && this.tilesMatrix[U][0][0];
            if (c && c.isBottomMost && c.isRightMost && c.loaded) {
              u.push(U);
              break;
            }
          }
          let h = false;
          for (let U = 0; U < u.length; U++) {
            let K = u[U];
            var f = this.viewport.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(K), true).x * this._scaleSpring.current.value;
            if (U === u.length - 1 || f >= this.minPixelRatio) h = true;
            else if (!h) continue;
            var m = this.viewport.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(K), false).x * this._scaleSpring.current.value, v = this.viewport.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(Math.max(this.source.getClosestLevel(), 0)), false).x * this._scaleSpring.current.value, y = this.immediateRender ? 1 : v, T = Math.min(1, (f - 0.5) / 0.5), x = y / Math.abs(y - m), E = this._updateLevel(K, T, x, l, a, o);
            o = E.bestTiles;
            var M = E.updatedTiles.filter((q) => q.loaded), L = /* @__PURE__ */ (function(q, Y, te) {
              return function(fe) {
                return { tile: fe, level: q, levelOpacity: Y, currentTime: te };
              };
            })(K, T, a);
            if (this._tilesToDraw[K] = M.map(L), this._providesCoverage(this.coverage, K)) break;
          }
          return o && o.length > 0 ? (o.forEach(function(U) {
            U && !U.context2D && this._loadTile(U, a);
          }, this), this._needsDraw = true, false) : this._tilesLoading === 0;
        }, _updateTilesInViewport: function(n) {
          let r = e.now(), s = this;
          this._tilesLoading = 0, this._wasBlending = this._isBlending, this._isBlending = false, this.loadingCoverage = {};
          let o = n.length ? n[0].level : 0;
          if (!this.getDrawArea()) return;
          function a(c) {
            let h = c.tile;
            if (h && h.loaded) {
              let f = s._blendTile(h, h.x, h.y, c.level, c.levelOpacity, r, o);
              s._isBlending = s._isBlending || f, s._needsDraw = s._needsDraw || f || s._wasBlending;
            }
          }
          let u = 0;
          for (let c = 0; c < n.length; c++) {
            let h = n[c];
            a(h), this._providesCoverage(this.coverage, h.level) && (u = Math.max(u, h.level));
          }
          if (u > 0) for (let c in this._tilesToDraw) c < u && delete this._tilesToDraw[c];
        }, _blendTile: function(n, r, s, o, l, a, u) {
          let c = 1e3 * this.blendTime, h, f;
          return n.blendStart || (n.blendStart = a), h = a - n.blendStart, f = c ? Math.min(1, h / c) : 1, o === u && (f = 1, h = c), this.alwaysBlend && (f *= l), n.opacity = f, f === 1 && (this._setCoverage(this.coverage, o, r, s, true), this._hasOpaqueTile = true), h < c;
        }, _updateLevel: function(n, r, s, o, l, a) {
          var u = o.getBoundingBox().getTopLeft(), c = o.getBoundingBox().getBottomRight();
          this.viewer && this.viewer.raiseEvent("update-level", { tiledImage: this, havedrawn: true, level: n, opacity: r, visibility: s, drawArea: o, topleft: u, bottomright: c, currenttime: l, best: a }), this._resetCoverage(this.coverage, n), this._resetCoverage(this.loadingCoverage, n);
          var h = this._getCornerTiles(n, u, c), f = h.topLeft, m = h.bottomRight, v = this.source.getNumTiles(n), y = this.viewport.pixelFromPoint(this.viewport.getCenter());
          this.getFlip() && (m.x += 1, this.wrapHorizontal || (m.x = Math.min(m.x, v.x - 1)));
          for (var T = Math.max(0, (m.x - f.x) * (m.y - f.y)), x = new Array(T), E = 0, M = f.x; M <= m.x; M++) for (var L = f.y; L <= m.y; L++) {
            var U;
            if (this.getFlip()) {
              var K = (v.x + M % v.x) % v.x;
              U = M + v.x - K - K - 1;
            } else U = M;
            if (o.intersection(this.getTileBounds(n, U, L)) !== null) {
              var q = this._updateTile(U, L, n, s, y, v, l, a);
              a = q.bestTiles, x[E] = q.tile, E += 1;
            }
          }
          return { bestTiles: a, updatedTiles: x };
        }, _positionTile: function(n, r, s, o, l) {
          var a = n.bounds.getTopLeft();
          a.x *= this._scaleSpring.current.value, a.y *= this._scaleSpring.current.value, a.x += this._xSpring.current.value, a.y += this._ySpring.current.value;
          var u = n.bounds.getSize();
          u.x *= this._scaleSpring.current.value, u.y *= this._scaleSpring.current.value, n.positionedBounds.x = a.x, n.positionedBounds.y = a.y, n.positionedBounds.width = u.x, n.positionedBounds.height = u.y;
          var c = s.pixelFromPointNoRotate(a, true), h = s.pixelFromPointNoRotate(a, false), f = s.deltaPixelsFromPointsNoRotate(u, true), m = s.deltaPixelsFromPointsNoRotate(u, false), v = h.plus(m.divide(2)), y = o.squaredDistanceTo(v);
          this.viewer.drawer.minimumOverlapRequired(this) && (r || (f = f.plus(new e.Point(1, 1))), n.isRightMost && this.wrapHorizontal && (f.x += 0.75), n.isBottomMost && this.wrapVertical && (f.y += 0.75)), n.position = c, n.size = f, n.squaredDistance = y, n.visibility = l;
        }, _updateTile: function(n, r, s, o, l, a, u, c) {
          var h = this._getTile(n, r, s, u, a);
          this.viewer && this.viewer.raiseEvent("update-tile", { tiledImage: this, tile: h }), this._setCoverage(this.coverage, s, n, r, false);
          var f = h.loaded || h.loading || this._isCovered(this.loadingCoverage, s, n, r);
          if (this._setCoverage(this.loadingCoverage, s, n, r, f), !h.exists) return { bestTiles: c, tile: h };
          if (h.loaded && h.opacity === 1 && this._setCoverage(this.coverage, s, n, r, true), this._positionTile(h, this.source.tileOverlap, this.viewport, l, o), !h.loaded) if (h.context2D) this._setTileLoaded(h);
          else {
            var m = this._tileCache.getImageRecord(h.cacheKey);
            m && this._setTileLoaded(h, m.getData());
          }
          return h.loading ? this._tilesLoading++ : f || (c = this._compareTiles(c, h, this.maxTilesPerFrame)), { bestTiles: c, tile: h };
        }, _getCornerTiles: function(n, r, s) {
          var o, l;
          this.wrapHorizontal ? (o = e.positiveModulo(r.x, 1), l = e.positiveModulo(s.x, 1)) : (o = Math.max(0, r.x), l = Math.min(1, s.x));
          var a, u, c = 1 / this.source.aspectRatio;
          this.wrapVertical ? (a = e.positiveModulo(r.y, c), u = e.positiveModulo(s.y, c)) : (a = Math.max(0, r.y), u = Math.min(c, s.y));
          var h = this.source.getTileAtPoint(n, new e.Point(o, a)), f = this.source.getTileAtPoint(n, new e.Point(l, u)), m = this.source.getNumTiles(n);
          return this.wrapHorizontal && (h.x += m.x * Math.floor(r.x), f.x += m.x * Math.floor(s.x)), this.wrapVertical && (h.y += m.y * Math.floor(r.y / c), f.y += m.y * Math.floor(s.y / c)), { topLeft: h, bottomRight: f };
        }, _getTile: function(n, r, s, o, l) {
          var a, u, c, h, f, m, v, y, T, x, E = this.tilesMatrix, M = this.source;
          return E[s] || (E[s] = {}), E[s][n] || (E[s][n] = {}), (!E[s][n][r] || !E[s][n][r].flipped != !this.flipped) && (a = (l.x + n % l.x) % l.x, u = (l.y + r % l.y) % l.y, c = this.getTileBounds(s, n, r), h = M.getTileBounds(s, a, u, true), f = M.tileExists(s, a, u), m = M.getTileUrl(s, a, u), v = M.getTilePostData(s, a, u), this.loadTilesWithAjax ? (y = M.getTileAjaxHeaders(s, a, u), e.isPlainObject(this.ajaxHeaders) && (y = e.extend({}, this.ajaxHeaders, y))) : y = null, T = M.getContext2D ? M.getContext2D(s, a, u) : void 0, x = new e.Tile(s, n, r, c, f, m, T, this.loadTilesWithAjax, y, h, v, M.getTileHashKey(s, a, u, m, y, v)), this.getFlip() ? a === 0 && (x.isRightMost = true) : a === l.x - 1 && (x.isRightMost = true), u === l.y - 1 && (x.isBottomMost = true), x.flipped = this.flipped, E[s][n][r] = x), x = E[s][n][r], x.lastTouchTime = o, x;
        }, _loadTile: function(n, r) {
          var s = this;
          n.loading = true, this._imageLoader.addJob({ src: n.getUrl(), tile: n, source: this.source, postData: n.postData, loadWithAjax: n.loadWithAjax, ajaxHeaders: n.ajaxHeaders, crossOriginPolicy: this.crossOriginPolicy, ajaxWithCredentials: this.ajaxWithCredentials, callback: function(o, l, a) {
            s._onTileLoad(n, r, o, l, a);
          }, abort: function() {
            n.loading = false;
          } });
        }, _onTileLoad: function(n, r, s, o, l) {
          if (s) n.exists = true;
          else {
            e.console.error("Tile %s failed to load: %s - error: %s", n, n.getUrl(), o), this.viewer.raiseEvent("tile-load-failed", { tile: n, tiledImage: this, time: r, message: o, tileRequest: l }), n.loading = false, n.exists = false;
            return;
          }
          if (r < this.lastResetTime) {
            e.console.warn("Ignoring tile %s loaded before reset: %s", n, n.getUrl()), n.loading = false;
            return;
          }
          var a = this, u = function() {
            var c = a.source, h = c.getClosestLevel();
            a._setTileLoaded(n, s, h, l);
          };
          u();
        }, _setTileLoaded: function(n, r, s, o) {
          var l = 0, a = false, u = this;
          function c() {
            return a && e.console.error("Event 'tile-loaded' argument getCompletionCallback must be called synchronously. Its return value should be called asynchronously."), l++, h;
          }
          function h() {
            l--, l === 0 && (n.loading = false, n.loaded = true, n.hasTransparency = u.source.hasTransparency(n.context2D, n.getUrl(), n.ajaxHeaders, n.postData), n.context2D || u._tileCache.cacheTile({ data: r, tile: n, cutoff: s, tiledImage: u }), u.viewer.raiseEvent("tile-ready", { tile: n, tiledImage: u, tileRequest: o }), u._needsDraw = true);
          }
          var f = c();
          this.viewer.raiseEvent("tile-loaded", { tile: n, tiledImage: this, tileRequest: o, get image() {
            return e.console.error("[tile-loaded] event 'image' has been deprecated. Use 'data' property instead."), r;
          }, data: r, getCompletionCallback: c }), a = true, f();
        }, _compareTiles: function(n, r, s) {
          return n ? (n.push(r), this._sortTiles(n), n.length > s && n.pop(), n) : [r];
        }, _sortTiles: function(n) {
          n.sort(function(r, s) {
            return r === null ? 1 : s === null ? -1 : r.visibility === s.visibility ? r.squaredDistance - s.squaredDistance : s.visibility - r.visibility;
          });
        }, _providesCoverage: function(n, r, s, o) {
          var l, a, u, c;
          if (!n[r]) return false;
          if (s === void 0 || o === void 0) {
            l = n[r];
            for (u in l) if (Object.prototype.hasOwnProperty.call(l, u)) {
              a = l[u];
              for (c in a) if (Object.prototype.hasOwnProperty.call(a, c) && !a[c]) return false;
            }
            return true;
          }
          return n[r][s] === void 0 || n[r][s][o] === void 0 || n[r][s][o] === true;
        }, _isCovered: function(n, r, s, o) {
          return s === void 0 || o === void 0 ? this._providesCoverage(n, r + 1) : this._providesCoverage(n, r + 1, 2 * s, 2 * o) && this._providesCoverage(n, r + 1, 2 * s, 2 * o + 1) && this._providesCoverage(n, r + 1, 2 * s + 1, 2 * o) && this._providesCoverage(n, r + 1, 2 * s + 1, 2 * o + 1);
        }, _setCoverage: function(n, r, s, o, l) {
          if (!n[r]) {
            e.console.warn("Setting coverage for a tile before its level's coverage has been reset: %s", r);
            return;
          }
          n[r][s] || (n[r][s] = {}), n[r][s][o] = l;
        }, _resetCoverage: function(n, r) {
          n[r] = {};
        } });
      })(i), (function(e) {
        var n = function(s) {
          e.console.assert(s, "[TileCache.cacheTile] options is required"), e.console.assert(s.tile, "[TileCache.cacheTile] options.tile is required"), e.console.assert(s.tiledImage, "[TileCache.cacheTile] options.tiledImage is required"), this.tile = s.tile, this.tiledImage = s.tiledImage;
        }, r = function(s) {
          e.console.assert(s, "[ImageRecord] options is required"), e.console.assert(s.data, "[ImageRecord] options.data is required"), this._tiles = [], s.create.apply(null, [this, s.data, s.ownerTile]), this._destroyImplementation = s.destroy.bind(null, this), this.getImage = s.getImage.bind(null, this), this.getData = s.getData.bind(null, this), this.getRenderedContext = s.getRenderedContext.bind(null, this);
        };
        r.prototype = { destroy: function() {
          this._destroyImplementation(), this._tiles = null;
        }, addTile: function(s) {
          e.console.assert(s, "[ImageRecord.addTile] tile is required"), this._tiles.push(s);
        }, removeTile: function(s) {
          for (var o = 0; o < this._tiles.length; o++) if (this._tiles[o] === s) {
            this._tiles.splice(o, 1);
            return;
          }
          e.console.warn("[ImageRecord.removeTile] trying to remove unknown tile", s);
        }, getTileCount: function() {
          return this._tiles.length;
        } }, e.TileCache = function(s) {
          s = s || {}, this._maxImageCacheCount = s.maxImageCacheCount || e.DEFAULT_SETTINGS.maxImageCacheCount, this._tilesLoaded = [], this._imagesLoaded = [], this._imagesLoadedCount = 0;
        }, e.TileCache.prototype = { numTilesLoaded: function() {
          return this._tilesLoaded.length;
        }, cacheTile: function(s) {
          e.console.assert(s, "[TileCache.cacheTile] options is required"), e.console.assert(s.tile, "[TileCache.cacheTile] options.tile is required"), e.console.assert(s.tile.cacheKey, "[TileCache.cacheTile] options.tile.cacheKey is required"), e.console.assert(s.tiledImage, "[TileCache.cacheTile] options.tiledImage is required");
          var o = s.cutoff || 0, l = this._tilesLoaded.length, a = this._imagesLoaded[s.tile.cacheKey];
          if (a || (s.data || (e.console.error("[TileCache.cacheTile] options.image was renamed to options.data. '.image' attribute has been deprecated and will be removed in the future."), s.data = s.image), e.console.assert(s.data, "[TileCache.cacheTile] options.data is required to create an ImageRecord"), a = this._imagesLoaded[s.tile.cacheKey] = new r({ data: s.data, ownerTile: s.tile, create: s.tiledImage.source.createTileCache, destroy: s.tiledImage.source.destroyTileCache, getImage: s.tiledImage.source.getTileCacheDataAsImage, getData: s.tiledImage.source.getTileCacheData, getRenderedContext: s.tiledImage.source.getTileCacheDataAsContext2D }), this._imagesLoadedCount++), a.addTile(s.tile), s.tile.cacheImageRecord = a, this._imagesLoadedCount > this._maxImageCacheCount) {
            for (var u = null, c = -1, h = null, f, m, v, y, T, x, E = this._tilesLoaded.length - 1; E >= 0; E--) if (x = this._tilesLoaded[E], f = x.tile, !(f.level <= o || f.beingDrawn)) {
              if (!u) {
                u = f, c = E, h = x;
                continue;
              }
              y = f.lastTouchTime, m = u.lastTouchTime, T = f.level, v = u.level, (y < m || y === m && T > v) && (u = f, c = E, h = x);
            }
            u && c >= 0 && (this._unloadTile(h), l = c);
          }
          this._tilesLoaded[l] = new n({ tile: s.tile, tiledImage: s.tiledImage });
        }, clearTilesFor: function(s) {
          e.console.assert(s, "[TileCache.clearTilesFor] tiledImage is required");
          for (var o, l = 0; l < this._tilesLoaded.length; ++l) o = this._tilesLoaded[l], o.tiledImage === s && (this._unloadTile(o), this._tilesLoaded.splice(l, 1), l--);
        }, getImageRecord: function(s) {
          return e.console.assert(s, "[TileCache.getImageRecord] cacheKey is required"), this._imagesLoaded[s];
        }, _unloadTile: function(s) {
          e.console.assert(s, "[TileCache._unloadTile] tileRecord is required");
          var o = s.tile, l = s.tiledImage;
          let a = o.getCanvasContext && o.getCanvasContext();
          o.unload(), o.cacheImageRecord = null;
          var u = this._imagesLoaded[o.cacheKey];
          u && (u.removeTile(o), u.getTileCount() || (u.destroy(), delete this._imagesLoaded[o.cacheKey], this._imagesLoadedCount--, a && (a.canvas.width = 0, a.canvas.height = 0, l.viewer.raiseEvent("image-unloaded", { context2D: a, tile: o }))), l.viewer.raiseEvent("tile-unloaded", { tile: o, tiledImage: l }));
        } };
      })(i), (function(e) {
        e.World = function(n) {
          var r = this;
          e.console.assert(n.viewer, "[World] options.viewer is required"), e.EventSource.call(this), this.viewer = n.viewer, this._items = [], this._needsDraw = false, this._autoRefigureSizes = true, this._needsSizesFigured = false, this._delegatedFigureSizes = function(s) {
            r._autoRefigureSizes ? r._figureSizes() : r._needsSizesFigured = true;
          }, this._figureSizes();
        }, e.extend(e.World.prototype, e.EventSource.prototype, { addItem: function(n, r) {
          if (e.console.assert(n, "[World.addItem] item is required"), e.console.assert(n instanceof e.TiledImage, "[World.addItem] only TiledImages supported at this time"), r = r || {}, r.index !== void 0) {
            var s = Math.max(0, Math.min(this._items.length, r.index));
            this._items.splice(s, 0, n);
          } else this._items.push(n);
          this._autoRefigureSizes ? this._figureSizes() : this._needsSizesFigured = true, this._needsDraw = true, n.addHandler("bounds-change", this._delegatedFigureSizes), n.addHandler("clip-change", this._delegatedFigureSizes), this.raiseEvent("add-item", { item: n });
        }, getItemAt: function(n) {
          return e.console.assert(n !== void 0, "[World.getItemAt] index is required"), this._items[n];
        }, getIndexOfItem: function(n) {
          return e.console.assert(n, "[World.getIndexOfItem] item is required"), e.indexOf(this._items, n);
        }, getItemCount: function() {
          return this._items.length;
        }, setItemIndex: function(n, r) {
          e.console.assert(n, "[World.setItemIndex] item is required"), e.console.assert(r !== void 0, "[World.setItemIndex] index is required");
          var s = this.getIndexOfItem(n);
          if (r >= this._items.length) throw new Error("Index bigger than number of layers.");
          r === s || s === -1 || (this._items.splice(s, 1), this._items.splice(r, 0, n), this._needsDraw = true, this.raiseEvent("item-index-change", { item: n, previousIndex: s, newIndex: r }));
        }, removeItem: function(n) {
          e.console.assert(n, "[World.removeItem] item is required");
          var r = e.indexOf(this._items, n);
          r !== -1 && (n.removeHandler("bounds-change", this._delegatedFigureSizes), n.removeHandler("clip-change", this._delegatedFigureSizes), n.destroy(), this._items.splice(r, 1), this._figureSizes(), this._needsDraw = true, this._raiseRemoveItem(n));
        }, removeAll: function() {
          this.viewer._cancelPendingImages();
          var n, r;
          for (r = 0; r < this._items.length; r++) n = this._items[r], n.removeHandler("bounds-change", this._delegatedFigureSizes), n.removeHandler("clip-change", this._delegatedFigureSizes), n.destroy();
          var s = this._items;
          for (this._items = [], this._figureSizes(), this._needsDraw = true, r = 0; r < s.length; r++) n = s[r], this._raiseRemoveItem(n);
        }, resetItems: function() {
          for (var n = 0; n < this._items.length; n++) this._items[n].reset();
        }, update: function(n) {
          for (var r = false, s = 0; s < this._items.length; s++) r = this._items[s].update(n) || r;
          return r;
        }, draw: function() {
          this.viewer.drawer.draw(this._items), this._needsDraw = false, this._items.forEach((n) => {
            this._needsDraw = n.setDrawn() || this._needsDraw;
          });
        }, needsDraw: function() {
          for (var n = 0; n < this._items.length; n++) if (this._items[n].needsDraw()) return true;
          return this._needsDraw;
        }, getHomeBounds: function() {
          return this._homeBounds.clone();
        }, getContentFactor: function() {
          return this._contentFactor;
        }, setAutoRefigureSizes: function(n) {
          this._autoRefigureSizes = n, n & this._needsSizesFigured && (this._figureSizes(), this._needsSizesFigured = false);
        }, arrange: function(n) {
          n = n || {};
          var r = n.immediately || false, s = n.layout || e.DEFAULT_SETTINGS.collectionLayout, o = n.rows || e.DEFAULT_SETTINGS.collectionRows, l = n.columns || e.DEFAULT_SETTINGS.collectionColumns, a = n.tileSize || e.DEFAULT_SETTINGS.collectionTileSize, u = n.tileMargin || e.DEFAULT_SETTINGS.collectionTileMargin, c = a + u, h;
          !n.rows && l ? h = l : h = Math.ceil(this._items.length / o);
          var f = 0, m = 0, v, y, T, x, E;
          this.setAutoRefigureSizes(false);
          for (var M = 0; M < this._items.length; M++) M && M % h === 0 && (s === "horizontal" ? (m += c, f = 0) : (f += c, m = 0)), v = this._items[M], y = v.getBounds(), y.width > y.height ? T = a : T = a * (y.width / y.height), x = T * (y.height / y.width), E = new e.Point(f + (a - T) / 2, m + (a - x) / 2), v.setPosition(E, r), v.setWidth(T, r), s === "horizontal" ? f += c : m += c;
          this.setAutoRefigureSizes(true);
        }, _figureSizes: function() {
          var n = this._homeBounds ? this._homeBounds.clone() : null, r = this._contentSize ? this._contentSize.clone() : null, s = this._contentFactor || 0;
          if (!this._items.length) this._homeBounds = new e.Rect(0, 0, 1, 1), this._contentSize = new e.Point(1, 1), this._contentFactor = 1;
          else {
            var o = this._items[0], l = o.getBounds();
            this._contentFactor = o.getContentSize().x / l.width;
            for (var a = o.getClippedBounds().getBoundingBox(), u = a.x, c = a.y, h = a.x + a.width, f = a.y + a.height, m = 1; m < this._items.length; m++) o = this._items[m], l = o.getBounds(), this._contentFactor = Math.max(this._contentFactor, o.getContentSize().x / l.width), a = o.getClippedBounds().getBoundingBox(), u = Math.min(u, a.x), c = Math.min(c, a.y), h = Math.max(h, a.x + a.width), f = Math.max(f, a.y + a.height);
            this._homeBounds = new e.Rect(u, c, h - u, f - c), this._contentSize = new e.Point(this._homeBounds.width * this._contentFactor, this._homeBounds.height * this._contentFactor);
          }
          (this._contentFactor !== s || !this._homeBounds.equals(n) || !this._contentSize.equals(r)) && this.raiseEvent("metrics-change", {});
        }, _raiseRemoveItem: function(n) {
          this.raiseEvent("remove-item", { item: n });
        } });
      })(i);
    })(Bi)), Bi.exports;
  }
  var Op = Ap();
  var Mn = Po(Op);
  function Bo(t) {
    if (typeof t != "string") return null;
    const i = t.match(/xywh=(\d+),(\d+),(\d+),(\d+)$/);
    return i ? i.slice(1).map(Number) : null;
  }
  function ys() {
    let t, i;
    const e = new Promise((n, r) => {
      t = n, i = r;
    });
    return e.resolve = t, e.reject = i, e;
  }
  var Fn = 5e-3;
  var ur = 1.5;
  var Mp = { data() {
    return { defaultCanvasCss: "", loadingTimeout: null, avResource: null, overlayElements: [], promise: ys(), tileSources: [], viewer: null, viewerState: { isReset: true } };
  }, computed: { filtersActive() {
    return Object.keys(this.$store.options.filters).length > 0;
  }, paginationButtons() {
    var e;
    const t = ((e = this.$store.manifest.viewingDirection) == null ? void 0 : e.split("-to-")) || ["left", "right"], i = [{ hidden: this.$store.isFirstPage, title: this.$translate("Previous page"), onClick: this.$store.goToPreviousPage, position: t[0] }, { hidden: this.$store.isLastPage, title: this.$translate("Next page"), onClick: this.$store.goToNextPage, position: t[1] }];
    return this.$store.isReversed && i.reverse(), i.filter((n) => !n.hidden);
  }, multiLayerResources() {
    return this.$store.options.pages.filter((t) => t > 0).map((t, i) => {
      var e, n, r, s, o;
      return { pageIndex: i, items: (o = (s = (r = (n = (e = this.$store.manifest.items[t - 1].items) == null ? void 0 : e[0]) == null ? void 0 : n.items) == null ? void 0 : r[0]) == null ? void 0 : s.body) == null ? void 0 : o.items };
    }).filter((t) => {
      var i;
      return ((i = t.items) == null ? void 0 : i.length) > 1;
    });
  } }, watch: { "$store.annotations": { handler() {
    this.updateOverlays();
  }, deep: true }, "$store.options.annotationId": function(t) {
    var s;
    if (!this.viewer || ((s = this.overlayElements.find((o) => o.classList.contains("-current"))) == null || s.classList.remove("-current"), !t)) return;
    const i = this.viewer.viewport.getBounds(), e = this.overlayElements.find((o) => o.id === t);
    if (!e) return;
    e.classList.add("-current");
    const r = this.viewer.getOverlayById(e).getBounds(this.viewer.viewport);
    i.intersection(r) || (r.x -= 0.03, r.y -= 0.03, r.width += 0.06, r.height += 0.06, this.viewer.viewport.fitBoundsWithConstraints(r));
  }, "$store.options.pages": function(t, i) {
    const e = t.length !== i.length;
    this.loadInfo(e);
  }, "$store.options.view": function() {
    this.updateOverlays();
  } }, mounted() {
    this.loadInfo(), this.$store.readyPromises.push(this.promise), this.$store.rootElement.addEventListener("keydown", this.onKeydown), this.$store.rootElement.addEventListener("keypress", this.onKeypress);
  }, beforeUnmount() {
    this.viewer && this.viewer.destroy(), this.$store.rootElement.removeEventListener("keydown", this.onKeydown), this.$store.rootElement.removeEventListener("keypress", this.onKeypress);
  }, methods: { initViewer(t) {
    const i = [];
    let e = 0, n = 0;
    const r = this.$store.isReversed ? this.$store.options.pages.toReversed() : this.$store.options.pages;
    if (r.filter((s) => s > 0).forEach((s, o) => {
      this.tileSources.filter((a) => a.$meta.page === s && a.$meta.layerIndex === (this.$store.options.layers[o] || 0)).forEach((a, u) => {
        var v;
        e = e || a[this.$store.isVertical ? "height" : "width"];
        const c = a[this.$store.isVertical ? "height" : "width"] / e;
        this.$store.options.pages[0] === 0 && (!this.$store.isReversed && s === 1 || this.$store.isReversed && s === this.$store.pageCount) && (i.push({ opacity: 0, tileSource: a, [this.$store.isVertical ? "y" : "x"]: 0, [this.$store.isVertical ? "height" : "width"]: c }), n += 1 + Fn);
        const h = { tileSource: a, [this.$store.isVertical ? "y" : "x"]: n, [this.$store.isVertical ? "height" : "width"]: c }, { target: f } = ((v = this.$store.manifest.items[s - 1].items[0]) == null ? void 0 : v.items[u]) || {}, m = Bo((f == null ? void 0 : f.id) || f);
        m ? [h.x, h.y, h.width] = m.map((y) => y / e) : n += c + Fn, this.$store.options.pages[0] === 0 && (!this.$store.isReversed && s === this.$store.pageCount || this.$store.isReversed && s === 1) && i.push({ opacity: 0, tileSource: a, [this.$store.isVertical ? "y" : "x"]: n, [this.$store.isVertical ? "height" : "width"]: c }), i.push(h);
      });
    }), this.viewer) {
      this.viewer.addOnceHandler("open", () => {
        if (this.viewerState.isReset || t) this.resetImage();
        else {
          if (this.viewer.viewport.applyConstraints(true), !this.$store.options.optionsResetOnPageChange) return;
          this.$store.options.optionsResetOnPageChange.forEach((s) => {
            if (s === "filters") this.resetFilters();
            else if (s === "pan") {
              const o = this.viewer.viewport.getBounds();
              if (o.x <= 0 && o.y <= 0) return;
              const l = r[0] ? 0 : 1;
              this.viewer.viewport.panTo({ x: o.x > 0 ? o.width / 2 + l : this.$store.options.pan.x, y: o.y > 0 ? o.height / 2 : this.$store.options.pan.y }), this.$store.updateOptions({ pan: {} });
            } else s === "rotation" ? (this.viewer.viewport.setRotation(0), this.$store.updateOptions({ rotation: null })) : s === "zoom" && (this.viewer.viewport.goHome(), this.$store.updateOptions({ zoom: null }));
          });
        }
      }), this.viewer.open(i);
      return;
    }
    this.viewer = Mn({ animationTime: 0.4, drawer: "canvas", element: this.$refs.image, immediateRender: this.$store.isContainerWidthAtLeast("small"), placeholderFillStyle: "grey", preserveImageSizeOnResize: true, preserveViewport: true, showNavigationControl: false, showZoomControl: false, tileSources: i, visibilityRatio: 0.2, ...this.$store.options.viewer }), this.viewer.addHandler("canvas-key", (s) => {
      var o;
      ["f", "F", "r", "R", "S", "W", "+", "=", "-", "_"].includes((o = s.originalEvent) == null ? void 0 : o.key) && (s.preventDefaultAction = true);
    }), this.viewer.gestureSettingsMouse.clickToZoom = false, this.viewer.addHandler("animation-finish", () => {
      if (this.viewerState.isReset) {
        this.removeImageOptions();
        return;
      }
      const s = this.viewer.viewport.getCenter();
      this.$store.updateOptions({ pan: { x: Math.round(s.x * 1e3) / 1e3, y: Math.round(s.y * 1e3) / 1e3 }, zoom: Math.round(this.viewer.viewport.getZoom() * 1e3) / 1e3 });
    }), this.viewer.addHandler("open", () => {
      this.startLoadingWatch(), this.$store.options.pan.x !== void 0 || this.$store.options.pan.y !== void 0 || this.$store.options.zoom ? ((this.$store.options.pan.x !== void 0 || this.$store.options.pan.y !== void 0) && this.viewer.viewport.panTo({ x: this.$store.options.pan.x, y: this.$store.options.pan.y }, true), this.$store.options.zoom && this.viewer.viewport.zoomTo(this.$store.options.zoom, null, true)) : this.viewer.viewport.goHome(), this.$store.options.rotation !== null && this.viewer.viewport.setRotation(this.$store.options.rotation), this.updateOverlays();
    }), this.viewer.addHandler("pan", this.updateViewerState), this.viewer.addHandler("resize", () => {
      this.viewerState.isReset && this.$nextTick(() => this.viewer.viewport.goHome(true)), this.updateViewerState();
    }), this.viewer.addHandler("rotate", this.updateViewerState), this.viewer.addHandler("zoom", this.updateViewerState), this.viewer.addHandler("tile-load-failed", (s) => {
      this.$store.addError(`Error loading image: ${s.message}`);
    }), this.defaultCanvasCss = this.viewer.drawer.canvas.style.cssText, this.updateFilterStyle(), this.$api.expose(this.resetImage), this.$api.expose(this.viewer, "viewer"), this.promise.resolve();
  }, loadInfo(t = false) {
    this.stopLoadingWatch(), this.avResource = null;
    let i, e;
    const n = [];
    this.$store.options.pages.filter((r) => r > 0).forEach((r, s) => {
      var a, u, c;
      const o = this.$store.manifest.items[r - 1], l = this.$store.options.layers[s] || 0;
      (c = (u = (a = o.items) == null ? void 0 : a[0]) == null ? void 0 : u.items) == null || c.forEach((h, f) => {
        var y, T, x, E, M, L, U, K;
        const m = ((T = (y = h.body) == null ? void 0 : y.items) == null ? void 0 : T[l]) || h.body;
        if (!m) {
          this.$store.addError(`Resource missing for page ${r}`);
          return;
        }
        if (["Sound", "Video"].includes(m == null ? void 0 : m.type)) {
          if (this.$store.options.pages[1] > -1) {
            this.$store.updateOptions({ pages: [r] });
            return;
          }
          this.avResource = {}, e = { format: m.format, type: m.type, url: m.id }, this.$nextTick(() => {
            this.avResource = e;
          });
          const q = o.accompanyingCanvas || o.placeholderCanvas, Y = (L = (M = (E = (x = q == null ? void 0 : q.items) == null ? void 0 : x[0]) == null ? void 0 : E.items) == null ? void 0 : M[0]) == null ? void 0 : L.body;
          i = ((U = Y == null ? void 0 : Y.items) == null ? void 0 : U[l]) || Y;
        } else i = m;
        if (i && this.tileSources.find((q) => q.$meta.page === r && q.$meta.itemIndex === f && q.$meta.layerIndex === l)) return;
        const v = ((K = i == null ? void 0 : i.source) == null ? void 0 : K.service) || (i == null ? void 0 : i.service);
        if (v) {
          const q = [].concat(v)[0], Y = q.id || q["@id"], te = `${Y}${Y.at(-1) === "/" ? "" : "/"}info.json`;
          n.push(this.$store.fetchJson(te).then((fe) => ({ ...fe, $meta: { page: r, itemIndex: f, layerIndex: l } }), (fe) => {
            let $;
            fe.response && fe.response.statusText ? $ = fe.response.statusText : fe.message && ($ = fe.message), this.$store.addError(`Error loading info file for page ${r}${$ ? `: ${$}` : ""}`);
          }));
        } else i != null && i.id && this.tileSources.push({ $meta: { page: r, itemIndex: f, layerIndex: l }, type: "image", url: i.id, width: i.width, height: i.height });
      }), !i && !e && this.$store.addError(`Image missing for page ${r}`);
    }), n.length ? Promise.all(n).then((r) => {
      r.filter(Boolean).forEach((o) => {
        var l, a;
        if (this.$store.options.preferredImageFormat) {
          const u = o.extraFormats || ((a = (l = o.profile) == null ? void 0 : l[1]) == null ? void 0 : a.formats);
          u != null && u.includes(this.$store.options.preferredImageFormat) && (o.tileFormat = this.$store.options.preferredImageFormat);
        }
        this.tileSources.push(o);
      });
      const s = this.$store.options.pages.filter((o) => o > 0);
      r.some((o) => s.includes(o == null ? void 0 : o.$meta.page)) && this.initViewer(t);
    }) : i && this.initViewer(t);
  }, onKeydown(t) {
    t.key === "Escape" && this.$store.rootElement.focus(), t.key === "Home" && this.resetImage();
  }, onKeypress(t) {
    if (!ms(t)) switch (t.key) {
      case "I":
        this.resetFilters();
        break;
      case "r":
      case "R":
        this.rotate(t);
        break;
      case "+":
      case "=":
      case "W":
        this.zoomIn();
        break;
      case "-":
      case "_":
      case "S":
        this.zoomOut();
        break;
    }
  }, removeImageOptions() {
    this.$store.updateOptions({ pan: {}, zoom: null });
  }, resetFilters() {
    this.viewer.drawer.canvas.style.cssText = this.defaultCanvasCss, this.$store.updateOptions({ filters: {} });
  }, resetImage() {
    this.viewer.viewport.setRotation(0), this.$store.updateOptions({ rotation: null }), this.viewer.viewport.goHome(), this.removeImageOptions();
  }, rotate(t) {
    const { viewport: i } = this.viewer, e = (i.getRotation() + 90 * (t && t.shiftKey ? -1 : 1)) % 360;
    i.setRotation(e), this.$store.updateOptions({ rotation: e || null });
  }, setFilter(t, i) {
    const e = i.target.valueAsNumber;
    e === 1 ? delete this.$store.options.filters[t] : this.$store.options.filters[t] = e, this.$store.updateOptions({ filters: this.$store.options.filters }), this.updateFilterStyle();
  }, startLoadingWatch() {
    this.$store.loading = 0;
    for (let t = this.viewer.world.getItemCount() - 1; t >= 0; t -= 1) {
      const i = this.viewer.world.getItemAt(t);
      if (i && i._tilesLoading) {
        this.$store.loading = 1;
        break;
      }
    }
    this.loadingTimeout = setTimeout(this.startLoadingWatch, 200);
  }, stopLoadingWatch() {
    clearTimeout(this.loadingTimeout);
  }, toggleOverlays() {
    this.$store.updateOptions({ annotationsVisible: this.$store.options.annotationsVisible !== false ? false : null });
  }, updateFilterStyle() {
    if (!this.filtersActive) return;
    const t = [];
    Object.keys(this.$store.options.filters).forEach((e) => {
      t.push(`${e}(${this.$store.options.filters[e]})`);
    });
    const i = t.join(" ");
    this.viewer.drawer.canvas.style.cssText = `${this.defaultCanvasCss} filter: ${i}`;
  }, updateOverlays() {
    if (!this.viewer || !this.$store.options.pages.filter((e) => e > 0).every((e) => this.tileSources.some((n) => n.$meta.page === e)) || (this.viewer.clearOverlays(), this.overlayElements = [], !this.$store.annotationsActive)) return;
    let t, i = 0;
    this.$store.options.pages.filter((e) => e > -1).forEach((e, n) => {
      var s, o, l, a;
      const r = this.tileSources.find((u) => u.$meta.page === (e === 0 ? 1 : e) && u.$meta.layerIndex === (this.$store.options.layers[n] || 0));
      if (n === 0) {
        if (t = r[this.$store.isVertical ? "height" : "width"], e === 0) return;
      } else {
        const u = this.$store.options.pages[n - 1], c = ((s = this.$store.manifest.items[u - 1]) == null ? void 0 : s[this.$store.isVertical ? "height" : "width"]) || t;
        i += (Fn + c / t) * (this.$store.isReversed ? -1 : 1);
      }
      (l = (o = this.$store.annotations[e]) == null ? void 0 : o[0]) != null && l.coords && ((a = this.$store.annotations[e]) == null || a.forEach((u, c) => {
        const h = document.createElement("button");
        h.ariaLabel = `${e}/${c}`, h.className = `tify-media-overlay${this.$store.options.annotationId === u.id ? " -current" : ""}`, h.id = u.id, h.type = "button", new Mn.MouseTracker({ element: h, clickHandler: (f) => {
          f.quick && setTimeout(() => this.$store.toggleAnnotationId(u.id), 5);
        }, keyDownHandler: (f) => f.keyCode === 13 && this.$store.toggleAnnotationId(u.id) }), this.viewer.addOverlay({ element: h, location: new Mn.Rect(u.coords[0] / t + (this.$store.isVertical ? 0 : i), u.coords[1] / t + (this.$store.isVertical ? i : 0), u.coords[2] / t, u.coords[3] / t) }), this.overlayElements.push(h);
      }));
    });
  }, updateViewerState() {
    const t = this.viewer.viewport.getZoom();
    this.viewerState.isMaxZoom = t >= this.viewer.viewport.getMaxZoom(), this.viewerState.isMinZoom = t <= this.viewer.viewport.getMinZoom();
    const i = this.viewer.viewport.getHomeBounds(), e = this.viewer.viewport.getBounds();
    this.viewerState.isReset = Math.abs(i.height - e.height) < 1e-9 && Math.abs(i.width - e.width) < 1e-9 && Math.abs(i.x - e.x) < 1e-9 && Math.abs(i.y - e.y) < 1e-9;
  }, zoomIn() {
    this.viewer.viewport.zoomBy(ur), this.viewer.viewport.applyConstraints();
  }, zoomOut() {
    this.viewer.viewport.zoomBy(1 / ur), this.viewer.viewport.applyConstraints();
  } } };
  var Fp = { class: "tify-media", "aria-live": "polite" };
  var Lp = { class: "tify-sr-only" };
  var kp = { key: 0, class: "tify-media-buttons -controls" };
  var Hp = ["disabled", "title", "aria-label"];
  var Bp = ["disabled", "title", "aria-label"];
  var zp = ["disabled", "title", "aria-label"];
  var Np = ["title", "aria-label"];
  var Up = { class: "tify-sr-only" };
  var Vp = ["disabled"];
  var Wp = ["title", "aria-label"];
  var jp = { class: "tify-sr-only" };
  var Gp = { key: 0 };
  var qp = { class: "tify-button-list" };
  var Zp = ["aria-pressed", "onClick"];
  var Kp = { class: "tify-media-buttons -pagination" };
  var Xp = ["title", "aria-label", "onClick"];
  function Yp(t, i, e, n, r, s) {
    var K;
    const o = ds, l = fs, a = Dp, u = Cp, c = bp, h = _p, f = vs, m = rp, v = ip, y = $f, T = ni, x = Ho, E = ko, M = Do, L = Io, U = qf;
    return S(), D("section", Fp, [R("h2", Lp, z(t.$translate("Media")), 1), R("div", { ref: "image", class: Pe(["tify-media-image", { "-annotations-hidden": t.$store.options.annotationsVisible === false }]) }, null, 2), r.viewer ? (S(), D("div", kp, [R("button", { type: "button", class: "tify-media-button", disabled: r.viewerState.isMaxZoom, title: t.$translate("Zoom in"), "aria-label": t.$translate("Zoom in"), onClick: i[0] || (i[0] = (q) => s.zoomIn()) }, [ee(o)], 8, Hp), R("button", { type: "button", class: "tify-media-button", disabled: r.viewerState.isMinZoom, title: t.$translate("Zoom out"), "aria-label": t.$translate("Zoom out"), onClick: i[1] || (i[1] = (q) => s.zoomOut()) }, [ee(l)], 8, Bp), R("button", { type: "button", class: "tify-media-button", disabled: r.viewerState.isReset, title: t.$translate("Reset"), "aria-label": t.$translate("Reset"), onClick: i[2] || (i[2] = (q) => s.resetImage()) }, [ee(a)], 8, zp), R("button", { type: "button", class: Pe(["tify-media-button", { "-active": !!t.$store.options.rotation }]), title: t.$translate("Rotate"), "aria-label": t.$translate("Rotate"), onClick: i[3] || (i[3] = (q) => s.rotate(q)) }, [ee(u)], 10, Np), ee(f, { class: Pe(["tify-media-dropdown -filters", { "-active": s.filtersActive }]), alignment: "center", position: "right", label: t.$translate("Toggle image filters"), shortcut: "i" }, { button: $e(() => [ee(c)]), default: $e(() => [R("h3", Up, z(t.$translate("Image filters")), 1), ee(h, { onUpdate: i[4] || (i[4] = (q, Y) => s.setFilter(q, Y)) }), R("p", null, [R("button", { type: "button", class: "tify-media-reset", disabled: !s.filtersActive, onClick: i[5] || (i[5] = Vt((q) => s.resetFilters(), ["stop"])) }, z(t.$translate("Reset")), 9, Vp)])]), _: 1 }, 8, ["class", "label"]), t.$store.annotations.length && (t.$store.options.view === "text" || !t.$store.isContainerWidthAtLeast("medium")) ? (S(), D("button", { key: 0, type: "button", class: "tify-media-button", title: t.$translate("Toggle annotations"), "aria-label": t.$translate("Toggle annotations"), onClick: i[6] || (i[6] = (q) => s.toggleOverlays()) }, [t.$store.options.annotationsVisible !== false ? (S(), le(m, { key: 0 })) : (S(), le(v, { key: 1 }))], 8, Wp)) : Q("", true), s.multiLayerResources.length ? (S(), le(f, { key: 1, class: Pe(["tify-media-dropdown -layers", { "-active": t.$store.options.layers.some(Boolean) }]), alignment: "center", position: "right", label: t.$translate("Toggle image layer select"), shortcut: "c" }, { button: $e(() => [ee(y)]), default: $e(() => [R("h3", jp, z(t.$translate("Layer")), 1), (S(true), D(se, null, Ee(s.multiLayerResources, (q) => (S(), D(se, { key: q.pageIndex }, [t.$store.options.pages.filter((Y) => Y > 0).length > 1 ? (S(), D("h4", Gp, [ee(T, { number: t.$store.options.pages[q.pageIndex], wrap: true }, null, 8, ["number"])])) : Q("", true), R("ol", qp, [(S(true), D(se, null, Ee(q.items, (Y, te) => (S(), D("li", { key: Y.id }, [R("button", { type: "button", "aria-pressed": te === (t.$store.options.layers[q.pageIndex] || 0), onClick: (fe) => {
      t.$store.options.layers[q.pageIndex] = te, s.loadInfo();
    } }, z(t.$store.localize(Y.label)), 9, Zp)]))), 128))])], 64))), 128))]), _: 1 }, 8, ["class", "label"])) : Q("", true)])) : Q("", true), R("div", Kp, [(S(true), D(se, null, Ee(s.paginationButtons, (q) => (S(), D("button", { key: q.position, type: "button", class: Pe(["tify-media-button", `-${q.position}`]), title: q.title, "aria-label": q.title, onClick: q.onClick }, [q.position === "left" ? (S(), le(x, { key: 0 })) : q.position === "right" ? (S(), le(E, { key: 1 })) : q.position === "top" ? (S(), le(M, { key: 2 })) : q.position === "bottom" ? (S(), le(L, { key: 3 })) : Q("", true)], 10, Xp))), 128))]), (K = r.avResource) != null && K.url ? (S(), le(U, { key: 1, src: r.avResource.url, format: r.avResource.format, hasImage: !!r.viewer }, null, 8, ["src", "format", "hasImage"])) : Q("", true)]);
  }
  var Jp = Ie(Mp, [["render", Yp]]);
  var Qp = { viewBox: "0 0 24 24", class: "tify-icon -fullscreen-exit", "aria-hidden": "true" };
  function $p(t, i) {
    return S(), D("svg", Qp, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M14 14h5v2h-3v3h-2zm-9 0h5v5H8v-3H5zm3-9h2v5H5V8h3zm11 3v2h-5V5h2v3z" }, null, -1)])]);
  }
  var eg = de({ name: "mdi-FullscreenExit", render: $p });
  var tg = { viewBox: "0 0 24 24", class: "tify-icon -fullscreen", "aria-hidden": "true" };
  function ig(t, i) {
    return S(), D("svg", tg, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M5 5h5v2H7v3H5zm9 0h5v5h-2V7h-3zm3 9h2v5h-5v-2h3zm-7 3v2H5v-5h2v3z" }, null, -1)])]);
  }
  var ng = de({ name: "mdi-Fullscreen", render: ig });
  var sg = { viewBox: "0 0 24 24", class: "tify-icon -help-circle-outline", "aria-hidden": "true" };
  function rg(t, i) {
    return S(), D("svg", sg, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M11 18h2v-2h-2zm1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-14a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2a2 2 0 0 1 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5a4 4 0 0 0-4-4" }, null, -1)])]);
  }
  var og = de({ name: "mdi-HelpCircleOutline", render: rg });
  var ag = { viewBox: "0 0 24 24", class: "tify-icon -list-box-outline", "aria-hidden": "true" };
  function lg(t, i) {
    return S(), D("svg", ag, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M11 15h6v2h-6zM9 7H7v2h2zm2 6h6v-2h-6zm0-4h6V7h-6zm-2 2H7v2h2zm12-6v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2m-2 0H5v14h14zM9 15H7v2h2z" }, null, -1)])]);
  }
  var ug = de({ name: "mdi-ListBoxOutline", render: lg });
  var cg = { viewBox: "0 0 24 24", class: "tify-icon -tray-arrow-down", "aria-hidden": "true" };
  function hg(t, i) {
    return S(), D("svg", cg, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M2 12h2v5h16v-5h2v5c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2zm10 3l5.55-5.46l-1.42-1.41L13 11.25V2h-2v9.25L7.88 8.13L6.46 9.55z" }, null, -1)])]);
  }
  var dg = de({ name: "mdi-TrayArrowDown", render: hg });
  var fg = { viewBox: "0 0 24 24", class: "tify-icon -information-variant", "aria-hidden": "true" };
  function pg(t, i) {
    return S(), D("svg", fg, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M13.5 4A1.5 1.5 0 0 0 12 5.5A1.5 1.5 0 0 0 13.5 7A1.5 1.5 0 0 0 15 5.5A1.5 1.5 0 0 0 13.5 4m-.36 4.77c-1.19.1-4.44 2.69-4.44 2.69c-.2.15-.14.14.02.42c.16.27.14.29.33.16c.2-.13.53-.34 1.08-.68c2.12-1.36.34 1.78-.57 7.07c-.36 2.62 2 1.27 2.61.87c.6-.39 2.21-1.5 2.37-1.61c.22-.15.06-.27-.11-.52c-.12-.17-.24-.05-.24-.05c-.65.43-1.84 1.33-2 .76c-.19-.57 1.03-4.48 1.7-7.17c.11-.64.41-2.04-.75-1.94" }, null, -1)])]);
  }
  var gg = de({ name: "mdi-InformationVariant", render: pg });
  var mg = { viewBox: "0 0 24 24", class: "tify-icon -toc", "aria-hidden": "true" };
  function vg(t, i) {
    return S(), D("svg", mg, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M3 9h14V7H3zm0 4h14v-2H3zm0 4h14v-2H3zm16 0h2v-2h-2zm0-10v2h2V7zm0 6h2v-2h-2z" }, null, -1)])]);
  }
  var yg = de({ name: "mdi-Toc", render: vg });
  var wg = { viewBox: "0 0 24 24", class: "tify-icon -text", "aria-hidden": "true" };
  function _g(t, i) {
    return S(), D("svg", wg, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M21 6v2H3V6zM3 18h9v-2H3zm0-5h18v-2H3z" }, null, -1)])]);
  }
  var Tg = de({ name: "mdi-Text", render: _g });
  var xg = { viewBox: "0 0 24 24", class: "tify-icon -image-area", "aria-hidden": "true" };
  function bg(t, i) {
    return S(), D("svg", xg, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M20 5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7c0-1.11.89-2 2-2zM5 16h14l-4.5-6l-3.5 4.5l-2.5-3z" }, null, -1)])]);
  }
  var Eg = de({ name: "mdi-ImageArea", render: bg });
  var Sg = { viewBox: "0 0 24 24", class: "tify-icon -dots-grid", "aria-hidden": "true" };
  function Cg(t, i) {
    return S(), D("svg", Sg, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M12 16c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2M6 16c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m12 12c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2" }, null, -1)])]);
  }
  var Pg = de({ name: "mdi-DotsGrid", render: Cg });
  var Rg = { viewBox: "0 0 24 24", class: "tify-icon -page-last", "aria-hidden": "true" };
  function Dg(t, i) {
    return S(), D("svg", Rg, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z" }, null, -1)])]);
  }
  var Ig = de({ name: "mdi-PageLast", render: Dg });
  var Ag = { viewBox: "0 0 24 24", class: "tify-icon -skip-next", "aria-hidden": "true" };
  function Og(t, i) {
    return S(), D("svg", Ag, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M16 18h2V6h-2M6 18l8.5-6L6 6z" }, null, -1)])]);
  }
  var Mg = de({ name: "mdi-SkipNext", render: Og });
  var Fg = { viewBox: "0 0 24 24", class: "tify-icon -skip-previous", "aria-hidden": "true" };
  function Lg(t, i) {
    return S(), D("svg", Fg, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M6 18V6h2v12zm3.5-6L18 6v12z" }, null, -1)])]);
  }
  var kg = de({ name: "mdi-SkipPrevious", render: Lg });
  var Hg = { viewBox: "0 0 24 24", class: "tify-icon -page-first", "aria-hidden": "true" };
  function Bg(t, i) {
    return S(), D("svg", Hg, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z" }, null, -1)])]);
  }
  var zg = de({ name: "mdi-PageFirst", render: Bg });
  var Ng = {};
  var Ug = ["disabled", "title", "aria-label"];
  var Vg = ["disabled", "title", "aria-label"];
  var Wg = ["disabled", "title", "aria-label"];
  var jg = ["disabled", "title", "aria-label"];
  var Gg = ["disabled", "title", "aria-label"];
  var qg = ["disabled", "title", "aria-label"];
  function Zg(t, i) {
    const e = zg, n = kg, r = Ho, s = ko, o = Mg, l = Ig;
    return S(), D("div", { class: Pe(["tify-header-button-group -pagination", { "-reversed": t.$store.isReversed, "-vertical": t.$store.isVertical }]) }, [R("button", { type: "button", class: "tify-header-button", disabled: t.$store.isFirstPage, title: t.$translate("First page"), "aria-label": t.$translate("First page"), onClick: i[0] || (i[0] = (a) => t.$store.goToFirstPage()) }, [ee(e)], 8, Ug), t.$store.sections.length > 1 ? (S(), D("button", { key: 0, type: "button", class: "tify-header-button", disabled: t.$store.isFirstPage, title: t.$translate("Previous section"), "aria-label": t.$translate("Previous section"), onClick: i[1] || (i[1] = (a) => t.$store.goToPreviousSection()) }, [ee(n)], 8, Vg)) : Q("", true), R("button", { type: "button", class: "tify-header-button", disabled: t.$store.isFirstPage, title: t.$translate("Previous page"), "aria-label": t.$translate("Previous page"), onClick: i[2] || (i[2] = (a) => t.$store.goToPreviousPage()) }, [ee(r)], 8, Wg), R("button", { type: "button", class: "tify-header-button", disabled: t.$store.isLastPage, title: t.$translate("Next page"), "aria-label": t.$translate("Next page"), onClick: i[3] || (i[3] = (a) => t.$store.goToNextPage()) }, [ee(s)], 8, jg), t.$store.sections.length > 1 ? (S(), D("button", { key: 1, type: "button", class: "tify-header-button", disabled: t.$store.isLastSection, title: t.$translate("Next section"), "aria-label": t.$translate("Next section"), onClick: i[4] || (i[4] = (a) => t.$store.goToNextSection()) }, [ee(o)], 8, Gg)) : Q("", true), R("button", { type: "button", class: "tify-header-button", disabled: t.$store.isLastPage, title: t.$translate("Last page"), "aria-label": t.$translate("Last page"), onClick: i[5] || (i[5] = (a) => t.$store.goToLastPage()) }, [ee(l)], 8, qg)], 2);
  }
  var Kg = Ie(Ng, [["render", Zg]]);
  var Xg = {};
  var Yg = { class: "tify-icon -book-open-blank-outline", "aria-hidden": "true", fill: "currentColor", viewBox: "0 0 24 24" };
  function Jg(t, i) {
    return S(), D("svg", Yg, [...i[0] || (i[0] = [R("path", { d: "M21,4H3A2,2 0 0,0 1,6V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V6A2,2 0 0,0 21,4M3,19V6H11V19H3M21,19H13V6H21V19Z" }, null, -1)])]);
  }
  var Qg = Ie(Xg, [["render", Jg]]);
  var $g = { viewBox: "0 0 24 24", class: "tify-icon -view-module", "aria-hidden": "true" };
  function em(t, i) {
    return S(), D("svg", $g, [...i[0] || (i[0] = [R("path", { fill: "currentColor", d: "M16 5v6h5V5m-11 6h5V5h-5m6 13h5v-6h-5m-6 6h5v-6h-5m-6 6h5v-6H4m0-1h5V5H4z" }, null, -1)])]);
  }
  var tm = de({ name: "mdi-ViewModule", render: em });
  var im = { data() {
    return { filter: "", filteredCanvases: [], highlightIndex: 0 };
  }, watch: { filter() {
    this.updateFilteredCanvases(), this.$nextTick(() => this.updateScroll());
  } }, mounted() {
    this.updateFilteredCanvases();
  }, methods: { onKeyDownArrow() {
    this.highlightIndex < this.filteredCanvases.length - 1 && (this.highlightIndex += 1, this.updateScroll());
  }, onKeyUpArrow() {
    this.highlightIndex > 0 && (this.highlightIndex -= 1, this.updateScroll());
  }, onOpen() {
    this.filter = "", this.highlightIndex = this.$store.options.pages.at(-1) - 1, this.$nextTick(() => {
      window.matchMedia("(pointer: coarse)").matches || this.$refs.search.focus(), this.updateScroll();
    });
  }, resetFilter(t) {
    this.filter && (this.filter = "", t.stopPropagation());
  }, setPage(t) {
    this.$store.setPage(t), this.$store.isContainerWidthAtLeast("medium") || this.$store.updateOptions({ view: null });
  }, updateFilteredCanvases() {
    const t = [], i = this.filter.toLowerCase();
    let e = -1;
    this.$store.manifest.items.forEach((n, r) => {
      const o = this.$store.localize(n.label).toLowerCase().includes(i), l = (r + 1).toFixed().includes(i);
      if (o || l) {
        const a = n;
        a.page = r + 1, a.page === this.$store.options.pages[0] && (e = t.length), t.push(a);
      }
    }), this.highlightIndex = e < 0 ? 0 : e, this.filteredCanvases = t;
  }, updateScroll() {
    const { list: t } = this.$refs, i = t.children[this.highlightIndex];
    t && i && (t.scrollTop = i.offsetTop - t.offsetHeight / 2 + i.offsetHeight / 2);
  } } };
  var nm = { class: "tify-sr-only" };
  var sm = { class: "tify-sr-only" };
  var rm = { class: "tify-page-select-filter" };
  var om = ["aria-label"];
  var am = { ref: "list", class: "tify-button-list tify-page-select-list" };
  var lm = ["onClick"];
  function um(t, i, e, n, r, s) {
    const o = ni, l = vs;
    return S(), le(l, { class: "tify-page-select", shortcut: "x", onOpen: s.onOpen }, { button: $e(() => [R("span", nm, z(`${t.$translate("Current Page")} `), 1), ee(o, { number: t.$store.options.pages.find((a) => a > 0) }, null, 8, ["number"]), R("span", sm, " / " + z(t.$translate("Toggle page select")), 1)]), default: $e(() => [R("div", rm, [Be(R("input", { ref: "search", "onUpdate:modelValue": i[0] || (i[0] = (a) => r.filter = a), "aria-label": t.$translate("Filter pages"), type: "text", class: "tify-page-select-input", onKeyup: i[1] || (i[1] = Ht((a) => {
      var u;
      return (u = t.$refs.list.querySelectorAll("a")[r.highlightIndex]) == null ? void 0 : u.click();
    }, ["enter"])), onKeydown: [i[2] || (i[2] = Ht((a) => s.resetFilter(), ["esc"])), i[3] || (i[3] = Ht(Vt((a) => s.onKeyUpArrow(), ["prevent"]), ["up"])), i[4] || (i[4] = Ht(Vt((a) => s.onKeyDownArrow(), ["prevent"]), ["down"]))] }, null, 40, om), [[Ji, r.filter]])]), R("ol", am, [(S(true), D(se, null, Ee(r.filteredCanvases, (a, u) => (S(), D("li", { key: u }, [R("a", { href: "javascript:;", class: Pe({ "-current": t.$store.options.pages.includes(a.page), "-highlighted": r.highlightIndex === u }), onClick: (c) => s.setPage(a.page) }, [ee(o, { number: a.page, wrap: true }, null, 8, ["number"])], 10, lm)]))), 128))], 512)]), _: 1 }, 8, ["onOpen"]);
  }
  var cm = Ie(im, [["render", um]]);
  var hm = { props: { textEnabled: Boolean, tocEnabled: Boolean }, data() {
    return { controlsVisible: false, fullscreen: nf(this.$store.rootElement.parentNode) };
  }, computed: { availableViews() {
    return [null, ...this.$store.options.views].filter((t) => {
      switch (t) {
        case null:
          return !!this.$store.manifest;
        case "text":
          return this.textEnabled;
        case "thumbnails":
          return !!this.$store.manifest;
        case "toc":
          return this.tocEnabled;
        case "export":
          return !!this.$store.collection || !!this.$store.manifest;
        case "collection":
          return !!this.$store.collection;
        default:
          return true;
      }
    });
  }, doublePageEnabled() {
    var t;
    return (t = this.$store.manifest.behavior) != null && t.some((i) => ["continuous", "individuals"].includes(i)) ? false : this.$store.manifest.items.some((i) => {
      var e, n, r, s, o;
      return ((o = (s = (r = (n = (e = i.items) == null ? void 0 : e[0]) == null ? void 0 : n.items) == null ? void 0 : r[0]) == null ? void 0 : s.body) == null ? void 0 : o.type) === "Image";
    });
  }, title() {
    return this.$store.localize((this.$store.manifest || this.$store.collection || {}).label).replace(/(\S{1,10})\s+(\S{1,10})$/, "$1\xA0$2");
  } }, created() {
    this.$api.expose(this.setView), this.$api.expose(this.toggleDoublePage), this.$api.expose(this.fullscreen.toggle, "toggleFullscreen");
  }, mounted() {
    this.$store.rootElement.addEventListener("keydown", this.onKeyDown), Lo(this.$refs.controls, () => {
      this.closeControlsPopup();
    });
  }, beforeUnmount() {
    this.$store.rootElement.removeEventListener("keydown", this.onKeyDown);
  }, methods: { closeControlsPopup() {
    this.controlsVisible = false;
  }, onKeyDown(t) {
    if (ms(t)) return;
    if (t.key === "Escape") {
      this.controlsVisible = false;
      return;
    }
    const i = Number(t.key);
    switch (i <= this.availableViews.length && this.toggleView(this.availableViews[i]), t.key) {
      case "b":
        this.$store.manifest && this.toggleDoublePage();
        break;
      case "f":
        this.fullscreen.toggle();
        break;
      case "h":
        this.toggleView("help");
        break;
    }
    if (this.$store.manifest) switch (t.key) {
      case "q":
      case ",":
        this.$store.goToPreviousPage();
        break;
      case "e":
      case ".":
        this.$store.goToNextPage();
        break;
      case "Q":
        this.$store.goToFirstPage();
        break;
      case "E":
        this.$store.goToLastPage();
        break;
    }
  }, setView(t) {
    this.$store.updateOptions({ view: t });
  }, toggleControlsPopup() {
    this.controlsVisible = !this.controlsVisible;
  }, toggleDoublePage(t) {
    const { pages: i } = this.$store.options;
    if (!this.doublePageEnabled) return i[0];
    let e;
    return i.length > 1 && t !== true || t === false ? e = [i[1] > 0 ? i[1] : i[0]] : e = [i[0], this.$store.getFacingPage(i[0])].sort(), this.$store.updateOptions({ pages: e }), e;
  }, toggleView(t) {
    if (this.closeControlsPopup(), t !== "help" && !this.availableViews.includes(t)) return false;
    const i = t === this.$store.options.view && this.$store.manifest && this.$store.isContainerWidthAtLeast("medium") ? null : t;
    return this.$store.updateOptions({ view: i }), i;
  } } };
  var dm = { class: "tify-header" };
  var fm = { class: "tify-header-column -title" };
  var pm = ["title"];
  var gm = { key: 0, class: "tify-header-column -pagination" };
  var mm = { class: "tify-sr-only" };
  var vm = { class: "tify-header-button-group -page-select" };
  var ym = ["title", "aria-label", "aria-pressed"];
  var wm = { ref: "controls", class: "tify-header-column -controls" };
  var _m = { class: "tify-sr-only" };
  var Tm = { ref: "switchViewSmall", class: "tify-header-button-group -toggle" };
  var xm = ["aria-controls", "aria-expanded", "title", "aria-label"];
  var bm = ["id"];
  var Em = { class: "tify-header-button-group -view" };
  var Sm = ["aria-controls", "aria-expanded", "onClick"];
  var Cm = { class: "tify-header-button-label" };
  var Pm = { class: "tify-header-button-label" };
  var Rm = { class: "tify-header-button-label" };
  var Dm = { class: "tify-header-button-label" };
  var Im = { class: "tify-header-button-label" };
  var Am = { class: "tify-header-button-label" };
  var Om = { class: "tify-header-button-label" };
  var Mm = { class: "tify-header-button-group -view" };
  var Fm = ["aria-controls", "aria-expanded", "title", "aria-label"];
  var Lm = { class: "tify-header-button-label" };
  var km = ["title", "aria-label"];
  var Hm = { class: "tify-header-button-label" };
  var Bm = ["title", "aria-label"];
  var zm = { class: "tify-header-button-label" };
  function Nm(t, i, e, n, r, s) {
    const o = cm, l = tm, a = Qg, u = Kg, c = Pg, h = Eg, f = Tg, m = yg, v = gg, y = dg, T = ug, x = og, E = ng, M = eg;
    return S(), D("header", dm, [R("div", fm, [R("h1", { class: "tify-header-title", title: s.title }, z(s.title), 9, pm)]), t.$store.pageCount > 1 ? (S(), D("div", gm, [R("h2", mm, z(t.$translate("Page")), 1), R("div", vm, [ee(o), s.doublePageEnabled ? (S(), D("button", { key: 0, type: "button", class: Pe(["tify-header-button", { "-vertical": t.$store.isVertical }]), title: t.$translate("Toggle double-page"), "aria-label": t.$translate("Toggle double-page"), "aria-pressed": t.$store.options.pages.length > 1, onClick: i[0] || (i[0] = (...L) => s.toggleDoublePage && s.toggleDoublePage(...L)) }, [t.$store.isCustomPageView ? (S(), le(l, { key: 0 })) : (S(), le(a, { key: 1 }))], 10, ym)) : Q("", true)]), t.$store.pageCount > 1 ? (S(), le(u, { key: 0 })) : Q("", true)])) : Q("", true), R("div", wm, [R("h2", _m, z(t.$translate("View [noun]")), 1), R("div", Tm, [R("button", { type: "button", "aria-controls": t.$getId("controls"), "aria-expanded": r.controlsVisible, class: "tify-header-button", title: t.$translate("View [noun]"), "aria-label": t.$translate("View [noun]"), onClick: i[1] || (i[1] = (...L) => s.toggleControlsPopup && s.toggleControlsPopup(...L)) }, [ee(c)], 8, xm)], 512), R("div", { id: t.$getId("controls"), class: Pe(["tify-dropdown-content -bottom -mobile-only", { "-visible": r.controlsVisible }]) }, [R("div", Em, [(S(true), D(se, null, Ee(s.availableViews, (L) => (S(), D("button", { key: L, type: "button", class: Pe(`tify-header-button -${L || "media"}`), "aria-controls": t.$getId(L || "media"), "aria-expanded": t.$store.options.view === L, onClick: (U) => s.toggleView(L) }, [L ? Q("", true) : (S(), D(se, { key: 0 }, [ee(h), R("span", Cm, z(t.$translate("Media")), 1)], 64)), L === "text" ? (S(), D(se, { key: 1 }, [ee(f), R("span", Pm, z(t.$translate("Text")), 1)], 64)) : L === "thumbnails" ? (S(), D(se, { key: 2 }, [ee(l), R("span", Rm, z(t.$translate("Pages")), 1)], 64)) : L === "toc" ? (S(), D(se, { key: 3 }, [ee(m), R("span", Dm, z(t.$translate("Contents")), 1)], 64)) : L === "info" ? (S(), D(se, { key: 4 }, [ee(v), R("span", Im, z(t.$translate("Info")), 1)], 64)) : L === "export" ? (S(), D(se, { key: 5 }, [ee(y), R("span", Am, z(t.$translate("Export [noun]")), 1)], 64)) : L === "collection" ? (S(), D(se, { key: 6 }, [ee(T), R("span", Om, z(t.$translate("Collection")), 1)], 64)) : Q("", true)], 10, Sm))), 128))]), R("div", Mm, [R("button", { type: "button", class: "tify-header-button -icon-only", "aria-controls": t.$getId("help"), "aria-expanded": t.$store.options.view === "help", title: t.$translate("Help"), "aria-label": t.$translate("Help"), onClick: i[2] || (i[2] = (L) => s.toggleView("help")) }, [ee(x), R("span", Lm, z(t.$translate("Help")), 1)], 8, Fm), r.fullscreen.isFullscreen ? (S(), D("button", { key: 1, type: "button", class: "tify-header-button -icon-only", title: t.$translate("Exit fullscreen"), "aria-label": t.$translate("Exit fullscreen"), onClick: i[4] || (i[4] = (L) => r.fullscreen.toggle()) }, [ee(M), R("span", zm, z(t.$translate("Exit fullscreen")), 1)], 8, Bm)) : (S(), D("button", { key: 0, type: "button", class: "tify-header-button -icon-only", title: t.$translate("Fullscreen"), "aria-label": t.$translate("Fullscreen"), onClick: i[3] || (i[3] = (L) => r.fullscreen.toggle()) }, [ee(E), R("span", Hm, z(t.$translate("Fullscreen")), 1)], 8, km))]), t.$store.pageCount > 1 ? (S(), le(u, { key: 0 })) : Q("", true)], 10, bm)], 512)]);
  }
  var Um = Ie(hm, [["render", Nm]]);
  var Vm = { version: "0.36.2" };
  var Wm = { props: { readyPromise: { type: Object, default: null, required: true } }, data() {
    return { readyToRender: false };
  }, computed: { hasText() {
    var t, i;
    return (i = (t = this.$store.manifest) == null ? void 0 : t.items) == null ? void 0 : i.some((e) => "annotations" in e);
  }, hasToc() {
    return this.$store.structures.length > 0;
  } }, watch: { "$store.options.pages": function(t, i) {
    i && (this.$store.options.layers = []), this.$store.annotationsActive && this.$store.loadAnnotations();
  }, "$store.options.view": function() {
    this.$store.annotationsActive && this.$store.loadAnnotations();
  } }, created() {
    this.$api.expose(this.setLanguage), this.$api.expose(this.$store.setPage), this.$api.expose(this.$store.updateOptions);
  }, mounted() {
    if (this.$store.rootElement = this.$el, !this.$store.options.manifestUrl) {
      if (this.$store.options.contentStateEnabled) {
        const t = new URLSearchParams(window.location.search);
        this.$store.options.manifestUrl = t.get("iiif-content") || "";
      }
      if (!this.$store.options.manifestUrl) {
        this.$store.addError("Missing IIIF manifest URL");
        return;
      }
    }
    Promise.all([this.$store.loadManifest(this.$store.options.manifestUrl), this.setLanguage(this.$store.options.language)]).then(() => {
      this.readyToRender = true, this.$nextTick(() => {
        Promise.all(this.$store.readyPromises).then(() => {
          setTimeout(this.readyPromise.resolve);
        });
      });
    }, (t) => {
      this.readyPromise.reject(t);
    });
  }, beforeUnmount() {
    clearTimeout(this.$store.urlUpdateTimeout), window.removeEventListener("popstate", this.$store.initOptions);
  }, methods: { setLanguage(t) {
    const i = ys();
    if (t === "en") return this.$store.options.language = "en", this.$translate.setTranslation(null), i.resolve(t), i;
    if (this.$store.options.translationsDirUrl === null) return i.reject(new Error("Could not determine translationsDirUrl")), i;
    const e = `${this.$store.options.translationsDirUrl}/${t}.json?${Vm.version}`;
    return this.$store.fetchJson(e).then((n) => {
      this.$store.options.language = t, this.$translate.setTranslation(n), i.resolve(t);
    }, (n) => {
      const r = n.response ? n.response.statusText : n.message;
      this.$store.addError(`Error loading translation \u201C${t}\u201D: ${r}`), i.resolve(this.$store.options.language);
    }), i;
  } } };
  var jm = { key: 1, class: "tify-main" };
  var Gm = { key: 2, class: "tify-loading", role: "status" };
  var qm = { class: "tify-sr-only" };
  var Zm = { key: 3, class: "tify-error" };
  var Km = ["aria-label"];
  var Xm = { class: "tify-error-messages" };
  function Ym(t, i, e, n, r, s) {
    const o = Um, l = Jp, a = Cd, u = md, c = nd, h = Jh, f = lh, m = lc, v = Uu, y = Co;
    return S(), D("article", { class: Pe(["tify", t.$store.options.colorMode === "auto" ? "" : `-${t.$store.options.colorMode}`]), tabindex: "-1" }, [r.readyToRender && (t.$store.collection || t.$store.manifest) ? (S(), le(o, { key: 0, textEnabled: s.hasText, tocEnabled: s.hasToc }, null, 8, ["textEnabled", "tocEnabled"])) : Q("", true), r.readyToRender ? (S(), D("div", jm, [t.$store.manifest ? (S(), D(se, { key: 0 }, [ee(l, { id: t.$getId("media") }, null, 8, ["id"]), s.hasText ? Be((S(), le(a, { key: 0, id: t.$getId("text") }, null, 8, ["id"])), [[Qe, t.$store.options.view === "text"]]) : Q("", true), Be(ee(u, { id: t.$getId("thumbnails") }, null, 8, ["id"]), [[Qe, t.$store.options.view === "thumbnails"]]), s.hasToc ? Be((S(), le(c, { key: 1, id: t.$getId("toc") }, null, 8, ["id"])), [[Qe, t.$store.options.view === "toc"]]) : Q("", true)], 64)) : Q("", true), t.$store.collection || t.$store.manifest ? Be((S(), le(h, { key: 1, id: t.$getId("export") }, null, 8, ["id"])), [[Qe, t.$store.options.view === "export"]]) : Q("", true), t.$store.collection || t.$store.manifest ? Be((S(), le(f, { key: 2, id: t.$getId("info") }, null, 8, ["id"])), [[Qe, t.$store.options.view === "info"]]) : Q("", true), t.$store.collection ? Be((S(), le(m, { key: 3, id: t.$getId("collection") }, null, 8, ["id"])), [[Qe, t.$store.options.view === "collection"]]) : Q("", true), Be(ee(v, { id: t.$getId("help") }, null, 8, ["id"]), [[Qe, t.$store.options.view === "help"]])])) : Q("", true), t.$store.loading ? (S(), D("div", Gm, [R("span", qm, z(t.$translate("Loading")), 1)])) : Q("", true), t.$store.errors.size ? (S(), D("section", Zm, [R("button", { type: "button", class: "tify-error-close", "aria-label": t.$translate("Dismiss"), onClick: i[0] || (i[0] = (T) => t.$store.clearErrors()) }, [ee(y)], 8, Km), R("div", Xm, [(S(true), D(se, null, Ee(t.$store.errors, (T) => (S(), D("p", { key: T }, z(T), 1))), 128))])])) : Q("", true)], 2);
  }
  var Jm = Ie(Wm, [["render", Ym]]);
  var Qm = { annotationId: null, annotationsVisible: null, childManifestAutoloaded: true, childManifestUrl: null, colorMode: "auto", container: null, contentStateEnabled: false, fallbackLanguage: "en", filters: {}, language: "en", layers: [], manifestUrl: null, optionsResetOnPageChange: ["pan"], pageLabelFormat: "P&nbsp;\xB7 L", pages: null, pan: {}, preferredImageFormat: null, rotation: null, translationsDirUrl: null, urlQueryKey: null, urlQueryParams: ["annotationId", "annotationsVisible", "childManifestUrl", "layers", "filters", "pages", "pan", "rotation", "view", "zoom"], view: null, viewer: {}, views: ["text", "thumbnails", "toc", "info", "export", "collection"], zoom: null };
  function $m(t) {
    return { expose(i, e) {
      t[e || i.name.replace("bound ", "")] = i;
    } };
  }
  var ev = { install: (t, i) => {
    t.config.globalProperties.$api = new $m(i.instance);
  } };
  var tv = "TIFY is a slim and mobile-friendly IIIF document viewer, released under the <a href='https://www.gnu.org/licenses/agpl-3.0.html.en'>GNU Affero General Public License 3.0</a>.";
  var iv = "Copyright &copy; 2017&ndash;2026 <a href='https://www.uni-goettingen.de/en/'>G\xF6ttingen University</a>&nbsp;/ <a href='https://www.sub.uni-goettingen.de/en/'>G\xF6ttingen State and University Library</a>";
  var nv = { $info: tv, $copyright: iv, "$n/a": "\u2012" };
  var sv = { install: (t) => {
    const i = vi(null);
    t.config.globalProperties.$translate = (e) => {
      var s, o, l;
      const { language: n } = t.config.globalProperties.$store.options, r = (o = (s = t.config.globalProperties.$store.options.translations) == null ? void 0 : s[n]) == null ? void 0 : o[e];
      return r || ((l = i.value) != null && l[e] ? i.value[e] : nv[e] || e.replace(/\s*\[.+?\]/g, ""));
    }, t.config.globalProperties.$translate.setTranslation = (e) => {
      i.value = e;
    };
  } };
  var rv = { install: (t) => {
    const i = crypto != null && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString().slice(2);
    t.config.globalProperties.$getId = (e) => `${i}-${e}`;
  } };
  function bi(t) {
    "@babel/helpers - typeof";
    return bi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
      return typeof i;
    } : function(i) {
      return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
    }, bi(t);
  }
  function ov(t, i) {
    if (bi(t) != "object" || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (e !== void 0) {
      var n = e.call(t, i);
      if (bi(n) != "object") return n;
      throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return (i === "string" ? String : Number)(t);
  }
  function av(t) {
    var i = ov(t, "string");
    return bi(i) == "symbol" ? i : i + "";
  }
  function cr(t, i, e) {
    return (i = av(i)) in t ? Object.defineProperty(t, i, { value: e, enumerable: true, configurable: true, writable: true }) : t[i] = e, t;
  }
  function lv(t) {
    return Array.isArray(t) ? t : t ? [t] : [];
  }
  function gt(t) {
    for (let i in t) (t[i] === void 0 || t[i] === null) && delete t[i];
    return t;
  }
  var uv = "http://library.stanford.edu/iiif/image-api/compliance.html#level0";
  var cv = "http://library.stanford.edu/iiif/image-api/compliance.html#level1";
  var zo = "http://library.stanford.edu/iiif/image-api/compliance.html#level2";
  var hv = "http://library.stanford.edu/iiif/image-api/conformance.html#level0";
  var dv = "http://library.stanford.edu/iiif/image-api/conformance.html#level1";
  var No = "http://library.stanford.edu/iiif/image-api/conformance.html#level2";
  var fv = "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level0";
  var pv = "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level1";
  var Uo = "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level2";
  var gv = "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level0";
  var mv = "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level1";
  var Vo = "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level2";
  var vv = "http://iiif.io/api/image/1/level0.json";
  var yv = "http://iiif.io/api/image/1/profiles/level0.json";
  var wv = "http://iiif.io/api/image/1/level1.json";
  var _v = "http://iiif.io/api/image/1/profiles/level1.json";
  var Wo = "http://iiif.io/api/image/1/level2.json";
  var jo = "http://iiif.io/api/image/1/profiles/level2.json";
  var Tv = "http://iiif.io/api/image/2/level0.json";
  var xv = "http://iiif.io/api/image/2/profiles/level0.json";
  var bv = "http://iiif.io/api/image/2/level1.json";
  var Ev = "http://iiif.io/api/image/2/profiles/level1.json";
  var Go = "http://iiif.io/api/image/2/level2.json";
  var qo = "http://iiif.io/api/image/2/profiles/level2.json";
  var Sv = "level0";
  var Cv = "level1";
  var Zo = "level2";
  var Pv = "http://iiif.io/api/image/2/level0";
  var Rv = "http://iiif.io/api/image/2/level1";
  var Ko = "http://iiif.io/api/image/2/level2";
  var Dv = [Ko, zo, No, Uo, Vo, Wo, jo, Go, qo, Zo];
  var Iv = [Pv, Rv, Ko, uv, cv, zo, hv, dv, No, fv, pv, Uo, gv, mv, Vo, vv, yv, wv, _v, Wo, jo, Tv, xv, bv, Ev, Go, qo, Sv, Cv, Zo];
  var Av = Iv;
  var hr = ["sc:Collection", "sc:Manifest", "sc:Canvas", "sc:AnnotationList", "oa:Annotation", "sc:Range", "sc:Layer", "sc:Sequence", "oa:Choice", "Service", "ContentResource"];
  function Ov(t) {
    if (t == null) throw Error("Null or undefined is not a valid entity.");
    if (Array.isArray(t)) throw Error("Array is not a valid entity");
    if (typeof t != "object") throw Error(`${typeof t} is not a valid entity`);
    if (typeof t["@type"] == "string") {
      let i = hr.indexOf(t["@type"]);
      if (i !== -1) return hr[i];
    }
    if (t.profile) return "Service";
    if (t.format || t["@type"]) return "ContentResource";
    throw Error("Resource type is not known");
  }
  var Mv = class Xo {
    constructor(i, e = {}) {
      cr(this, "traversals", void 0), cr(this, "options", void 0), this.traversals = { collection: [], manifest: [], canvas: [], annotationList: [], sequence: [], annotation: [], contentResource: [], choice: [], range: [], service: [], layer: [], ...i }, this.options = { convertPropsToArray: true, mergeMemberProperties: true, allowUndefinedReturn: false, ...e };
    }
    static all(i) {
      return new Xo({ collection: [i], manifest: [i], canvas: [i], annotationList: [i], sequence: [i], annotation: [i], contentResource: [i], choice: [i], range: [i], service: [i], layer: [i] });
    }
    traverseCollection(i) {
      return this.traverseType(this.traverseDescriptive(this.traverseLinking(this.traverseCollectionItems(i))), this.traversals.collection);
    }
    traverseCollectionItems(i) {
      if (this.options.mergeMemberProperties) {
        let e = [...(i.manifests || []).map((s) => typeof s == "string" ? { "@id": s, "@type": "sc:Manifest" } : (s["@type"] || (s["@type"] = "sc:Manifest"), s)), ...(i.collections || []).map((s) => typeof s == "string" ? { "@id": s, "@type": "sc:Collection" } : s), ...i.members || []], n = [], r = e.filter((s) => n.includes(s["@id"]) ? false : (n.push(s["@id"]), true));
        delete i.collections, delete i.manifests, i.members = r;
      }
      return i.manifests && (i.manifests = i.manifests.map((e) => {
        let n = e;
        return typeof e == "string" && (n = { "@id": e, "@type": "sc:Manifest" }), n["@type"] || (n["@type"] = "sc:Manifest"), this.traverseManifest(n);
      })), i.collections && (i.collections = i.collections.map((e) => this.traverseCollection(typeof e == "string" ? { "@id": e, "@type": "sc:Collection" } : e))), i.members && (i.members = i.members.map((e) => typeof e == "string" ? e : e["@type"] === "sc:Collection" ? this.traverseCollection(e) : e["@type"] === "sc:Manifest" ? this.traverseManifest(e) : this.traverseUnknown(e))), i;
    }
    traverseManifest(i) {
      return this.traverseType(this.traverseDescriptive(this.traverseLinking(this.traverseManifestItems(i))), this.traversals.manifest);
    }
    traverseManifestItems(i) {
      return i.sequences && (i.sequences = i.sequences.map((e) => this.traverseSequence(e))), i.structures && (i.structures = i.structures.map((e) => this.traverseRange(e))), i;
    }
    traverseSequence(i) {
      return this.traverseType(this.traverseDescriptive(this.traverseLinking(this.traverseSequenceItems(i))), this.traversals.sequence);
    }
    traverseSequenceItems(i) {
      return i.canvases && (i.canvases = i.canvases.map((e) => this.traverseCanvas(e))), i;
    }
    traverseCanvas(i) {
      return this.traverseType(this.traverseDescriptive(this.traverseLinking(this.traverseCanvasItems(i))), this.traversals.canvas);
    }
    traverseCanvasItems(i) {
      return i.images && (i.images = i.images.map((e) => (e.on && e["@type"] !== "oa:Annotation" && e["@type"] !== "Annotation" && (e["@type"] = "oa:Annotation"), this.traverseAnnotation(e)))), i.otherContent && (i.otherContent = i.otherContent.map((e) => this.traverseAnnotationList(e))), i;
    }
    traverseRange(i) {
      return i["@type"] !== "sc:Range" && (i["@type"] = "sc:Range"), this.traverseType(this.traverseDescriptive(this.traverseLinking(this.traverseRangeItems(i))), this.traversals.range);
    }
    traverseRangeItems(i) {
      if (this.options.mergeMemberProperties) {
        let e = [...(i.ranges || []).map((n) => typeof n == "string" ? { "@id": n, "@type": "sc:Range" } : n), ...(i.canvases || []).map((n) => typeof n == "string" ? { "@id": n, "@type": "sc:Canvas" } : n), ...i.members || []];
        delete i.ranges, delete i.canvases, i.members = e.length ? e.map((n) => this.traverseUnknown(n)) : void 0;
      }
      return i;
    }
    traverseAnnotationList(i) {
      let e = typeof i == "string" ? { "@id": i, "@type": "sc:AnnotationList" } : i;
      return this.traverseType(this.traverseDescriptive(this.traverseAnnotationListItems(e)), this.traversals.annotationList);
    }
    traverseAnnotationListItems(i) {
      return i.resources && (i.resources = i.resources.map((e) => this.traverseAnnotation(e))), i;
    }
    traverseAnnotation(i) {
      return this.traverseType(this.traverseDescriptive(this.traverseLinking(this.traverseAnnotationItems(i))), this.traversals.annotation);
    }
    traverseAnnotationItems(i) {
      return i.resource && (Array.isArray(i.resource) ? i.resource = i.resource.map((e) => this.traverseContentResource(e)) : i.resource = this.traverseContentResource(i.resource)), i.on, i;
    }
    traverseLayer(i) {
      return this.traverseType(this.traverseLinking(this.traverseLayerItems(i)), this.traversals.layer);
    }
    traverseLayerItems(i) {
      return i.otherContent && (i.otherContent = i.otherContent.map((e) => this.traverseAnnotationList(e))), i;
    }
    traverseChoice(i) {
      return this.traverseType(this.traverseChoiceItems(i), this.traversals.choice);
    }
    traverseChoiceItems(i) {
      return i.default && i.default !== "rdf:nil" && (i.default = this.traverseContentResource(i.default)), i.item && i.item !== "rdf:nil" && (i.item = i.item.map((e) => this.traverseContentResource(e))), i;
    }
    traverseService(i) {
      return this.traverseType(this.traverseLinking(i), this.traversals.service);
    }
    traverseContentResource(i) {
      return i["@type"] === "oa:Choice" ? this.traverseChoice(i) : this.traverseType(this.traverseDescriptive(this.traverseLinking(i)), this.traversals.contentResource);
    }
    traverseUnknown(i) {
      if (!i["@type"] || typeof i == "string") return i;
      switch (Ov(i)) {
        case "sc:Collection":
          return this.traverseCollection(i);
        case "sc:Manifest":
          return this.traverseManifest(i);
        case "sc:Canvas":
          return this.traverseCanvas(i);
        case "sc:Sequence":
          return this.traverseSequence(i);
        case "sc:Range":
          return this.traverseRange(i);
        case "oa:Annotation":
          return this.traverseAnnotation(i);
        case "sc:AnnotationList":
          return this.traverseAnnotationList(i);
        case "sc:Layer":
          return this.traverseLayer(i);
        case "Service":
          return this.traverseService(i);
        case "oa:Choice":
          return this.traverseChoice(i);
        case "ContentResource":
          return this.traverseContentResource(i);
      }
      return i.profile ? this.traverseService(i) : i;
    }
    traverseImageResource(i) {
      let e = Array.isArray(i), n = Array.isArray(i) ? i : [i], r = [];
      for (let s of n) typeof s == "string" ? r.push(this.traverseContentResource({ "@id": s, "@type": "dctypes:Image" })) : r.push(this.traverseContentResource(s));
      return !e && !this.options.convertPropsToArray ? r[0] : r;
    }
    traverseDescriptive(i) {
      return i.thumbnail && (i.thumbnail = this.traverseImageResource(i.thumbnail)), i.logo && (i.logo = this.traverseImageResource(i.logo)), i;
    }
    traverseOneOrMoreServices(i) {
      let e = Array.isArray(i), n = Array.isArray(i) ? i : [i], r = [];
      for (let s of n) r.push(this.traverseService(s));
      return !e && !this.options.convertPropsToArray ? r[0] : r;
    }
    traverseLinking(i) {
      return i.related && (i.related = this.traverseOneOrManyType(i.related, this.traversals.contentResource)), i.rendering && (i.rendering = this.traverseOneOrManyType(i.rendering, this.traversals.contentResource)), i.service && (i.service = this.traverseOneOrMoreServices(i.service)), i.seeAlso && (i.seeAlso = this.traverseOneOrManyType(i.seeAlso, this.traversals.contentResource)), i.within && (typeof i.within == "string" || (i.within = this.traverseOneOrManyType(i.within, this.traversals.contentResource))), i.startCanvas && (typeof i.startCanvas == "string" ? i.startCanvas = this.traverseType({ "@id": i.startCanvas, "@type": "sc:Canvas" }, this.traversals.canvas) : i.startCanvas && this.traverseType(i.startCanvas, this.traversals.canvas)), i.contentLayer && (typeof i.contentLayer == "string" ? i.contentLayer = this.traverseLayer({ "@id": i.contentLayer, "@type": "sc:Layer" }) : i.contentLayer = this.traverseLayer(i.contentLayer)), i;
    }
    traverseOneOrManyType(i, e) {
      if (!Array.isArray(i)) if (this.options.convertPropsToArray) i = [i];
      else return this.traverseType(i, e);
      return i.map((n) => this.traverseType(n, e));
    }
    traverseType(i, e) {
      return e.reduce((n, r) => {
        let s = r(n);
        return s === void 0 && !this.options.allowUndefinedReturn ? n : s;
      }, i);
    }
  };
  var Fv = ["http://iiif.io/api/image/2/level1", "http://iiif.io/api/image/2/level2", "http://library.stanford.edu/iiif/image-api/compliance.html#level1", "http://library.stanford.edu/iiif/image-api/compliance.html#level2", "http://library.stanford.edu/iiif/image-api/conformance.html#level1", "http://library.stanford.edu/iiif/image-api/conformance.html#level2", "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level1", "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level2", "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level1", "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level2", "http://iiif.io/api/image/1/level1.json", "http://iiif.io/api/image/1/profiles/level1.json", "http://iiif.io/api/image/1/level2.json", "http://iiif.io/api/image/1/profiles/level2.json", "http://iiif.io/api/image/2/level1.json", "http://iiif.io/api/image/2/profiles/level1.json", "http://iiif.io/api/image/2/level2.json", "http://iiif.io/api/image/2/profiles/level2.json", "level1", "level2"];
  var Gn = { attributionLabel: "Attribution", providerId: "http://example.org/provider", providerName: "" };
  function Lv(t) {
    if (typeof t == "string") return [t];
    if (!t) return [];
    let i = Array.isArray(t) ? t : [t], e = [];
    for (let n of i) {
      if (typeof n == "string") {
        e.push(n);
        continue;
      }
      e.push({ "@language": n["@language"] || n.language, "@value": n["@value"] || n.value });
    }
    return e;
  }
  function zt(t, i = "none") {
    if (!t) return { none: [""] };
    let e = Lv(t), n = {};
    for (let r of e) {
      if (typeof r == "string") {
        n[i] = n[i] ? n[i] : [], n[i].push(r || "");
        continue;
      }
      if (!r["@language"]) {
        n[i] = n[i] ? n[i] : [], n[i].push(r["@value"] || "");
        continue;
      }
      let s = r["@language"];
      n[s] = n[s] ? n[s] : [], n[s].push(r["@value"] || "");
    }
    return Object.keys(n).length === 0 ? { none: [""] } : n;
  }
  function Yo(t) {
    if (Array.isArray(t)) return Yo(t.find((i) => typeof i == "string"));
    if (Dv.indexOf(t) !== -1) return "level2";
    if (Fv.indexOf(t) !== -1) return "level1";
    if (Av.indexOf(t) !== -1) return "level0";
    if (typeof t == "string") return t;
  }
  function kv(t) {
    let i = Array.isArray(t) ? t : [t];
    for (let e of i) switch (e) {
      case "http://iiif.io/api/image/2/context.json":
      case "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level2":
        return "ImageService2";
      case "http://iiif.io/api/image/1/context.json":
      case "http://library.stanford.edu/iiif/image-api/1.1/context.json":
        return "ImageService1";
      case "http://iiif.io/api/annex/openannotation/context.json":
        return "ImageApiSelector";
    }
  }
  function Hv(t) {
    switch (t) {
      case "http://iiif.io/api/image/2/level0.json":
      case "http://iiif.io/api/image/2/level1.json":
      case "http://iiif.io/api/image/2/level2.json":
        return "ImageService2";
      case "http://iiif.io/api/auth/1/kiosk":
      case "http://iiif.io/api/auth/1/login":
      case "http://iiif.io/api/auth/1/clickthrough":
      case "http://iiif.io/api/auth/1/external":
      case "http://iiif.io/api/auth/0/kiosk":
      case "http://iiif.io/api/auth/0/login":
      case "http://iiif.io/api/auth/0/clickthrough":
      case "http://iiif.io/api/auth/0/external":
        return "AuthCookieService1";
      case "http://iiif.io/api/auth/1/token":
      case "http://iiif.io/api/auth/0/token":
        return "AuthTokenService1";
      case "http://iiif.io/api/auth/1/logout":
      case "http://iiif.io/api/auth/0/logout":
        return "AuthLogoutService1";
      case "http://iiif.io/api/search/1/search":
      case "http://iiif.io/api/search/0/search":
        return "SearchService1";
      case "http://iiif.io/api/search/1/autocomplete":
      case "http://iiif.io/api/search/0/autocomplete":
        return "AutoCompleteService1";
    }
  }
  function dr(t) {
    for (let i of ["sc", "oa", "dcterms", "dctypes", "iiif"]) if (t.startsWith(`${i}:`)) return t.slice(i.length + 1);
    return t;
  }
  var Bv = ["Collection", "Manifest", "Annotation", "AnnotationPage", "Range", "Service"];
  function ws(t) {
    let i = t["@id"] || t.id, e = t["@type"] || t.type, n = t.profile || void 0, r = t["@context"] || void 0;
    if (n) {
      let s = Hv(n);
      if (s) return s;
    }
    if (r) {
      let s = kv(r);
      if (s) return s;
    }
    if (e) {
      if (Array.isArray(e)) {
        if (e.indexOf("oa:CssStylesheet") !== -1) return "CssStylesheet";
        if (e.indexOf("cnt:ContentAsText") !== -1) return "TextualBody";
        e = e[0];
      }
      for (let s of ["sc", "oa", "dcterms", "dctypes", "iiif"]) if (e.startsWith(`${s}:`)) {
        e = e.slice(s.length + 1);
        break;
      }
      switch (e) {
        case "Layer":
          return "AnnotationCollection";
        case "AnnotationList":
          return "AnnotationPage";
        case "cnt:ContentAsText":
          return "TextualBody";
      }
    }
    if (e && Bv.indexOf(e) !== -1) return e;
    if (t.format) {
      if (t.format.startsWith("image/")) return "Image";
      if (t.format.startsWith("text/") || t.format === "application/pdf") return "Text";
      if (t.format.startsWith("application/")) return "Dataset";
    }
    return i && (i.endsWith(".jpg") || i.endsWith(".png") || i.endsWith(".jpeg")) ? "Image" : e || "unknown";
  }
  var zv = /^|["'\\>]http(s)?:\/\/(creativecommons.org|rightsstatements.org)\/[^"'\\<\n]+/gm;
  function Nv(t) {
    let i = t.match(zv);
    return i ? i[0] : t;
  }
  function Uv(t, i = "Rights/License", e = "none") {
    let n = null, r = [], s = Array.isArray(t) ? t : [t];
    for (let o of s) {
      let l = o ? Nv(o) : void 0;
      if (l && (l.indexOf("creativecommons.org") !== -1 || l.indexOf("rightsstatements.org") !== -1)) {
        n = l.startsWith("https://") ? `http://${l.slice(8)}` : l;
        continue;
      }
      l && r.push({ label: { [e]: [i] }, value: { [e]: [l] } });
    }
    return [n, r];
  }
  var Vv = ["http://iiif.io/api/presentation/2/context.json", "http://iiif.io/api/image/2/context.json", "http://iiif.io/api/image/1/context.json", "http://library.stanford.edu/iiif/image-api/1.1/context.json", "http://iiif.io/api/search/1/context.json", "http://iiif.io/api/search/0/context.json", "http://iiif.io/api/auth/1/context.json", "http://iiif.io/api/auth/0/context.json", "http://iiif.io/api/annex/openannotation/context.json"];
  function Wv(t) {
    if (t) {
      let i = Array.isArray(t) ? t : [t], e = [];
      for (let n of i) n === "http://iiif.io/api/presentation/2/context.json" && e.push("http://iiif.io/api/presentation/3/context.json"), Vv.indexOf(n) === -1 && e.push(n);
      if (i.length) return e.length === 1 ? e[0] : e;
    }
  }
  function jv(t) {
    return t ? t.map((i) => ({ label: zt(i.label), value: zt(i.value) })) : [];
  }
  var fr = 0;
  function Jo(t, i) {
    let e = encodeURI(t.id || t["@id"] || "").trim();
    return e && i ? `${e}/${i}` : e || (fr++, `http://example.org/${t["@type"]}${i ? `/${i}` : ""}/${fr}`);
  }
  function Ct(t) {
    let i = [...t.behavior || []];
    t.viewingHint && i.push(t.viewingHint);
    let e;
    return Array.isArray(t.motivation) ? e = t.motivation.map(dr) : t.motivation && (e = dr(t.motivation)), { "@context": t["@context"] ? Wv(t["@context"]) : void 0, id: (t["@id"] || Jo(t)).trim(), type: ws(t), behavior: i.length ? i : void 0, height: t.height ? t.height : void 0, width: t.width ? t.width : void 0, motivation: e, viewingDirection: t.viewingDirection, profile: t.profile, format: t.format ? t.format : void 0, duration: void 0, timeMode: void 0 };
  }
  function Pt(t) {
    let [i, e] = Uv(t.license), n = [...t.metadata ? jv(t.metadata) : [], ...e];
    return { rights: i, metadata: n.length ? n : void 0, label: t.label ? zt(t.label) : void 0, requiredStatement: t.attribution ? { label: zt(Gn.attributionLabel), value: zt(t.attribution) } : void 0, navDate: t.navDate, summary: t.description ? zt(t.description) : void 0, thumbnail: Gv(t.thumbnail) };
  }
  function Gv(t) {
    return t && (Array.isArray(t) ? t : [t]).map((e) => typeof e == "string" ? { id: e, type: "Image" } : (e.type === "unknown" && (e.type = "Image"), e));
  }
  function qv(t) {
    if (!t.within) return;
    let i = Array.isArray(t.within) ? t.within : [t.within], e = [];
    for (let n of i) if (typeof n == "string") {
      if (n) switch (t["@type"]) {
        case "sc:Manifest":
          e.push({ id: n, type: "Collection" });
          break;
      }
    } else n["@id"] && e.push({ id: n["@id"], type: ws(n) });
    return e.length ? e : void 0;
  }
  function Ot(t) {
    let i = t.related ? Array.isArray(t.related) ? t.related : [t.related] : [], e = t.contentLayer;
    return { provider: t.logo || i.length ? [{ id: Gn.providerId, type: "Agent", homepage: i.length ? [i[0]] : void 0, logo: t.logo ? Array.isArray(t.logo) ? t.logo : [t.logo] : void 0, label: zt(Gn.providerName) }] : void 0, partOf: qv(t), rendering: t.rendering, seeAlso: t.seeAlso, start: t.startCanvas, service: t.service ? lv(t.service) : void 0, supplementary: e ? [e] : void 0 };
  }
  function Zv(t) {
    return { chars: t.chars, format: t.format ? t.format : void 0, language: t.language };
  }
  function Ln(t, i) {
    return t ? typeof t == "string" ? { id: t, type: i } : typeof (t == null ? void 0 : t["@id"]) == "string" ? { id: t["@id"], type: i } : typeof t.id == "string" ? { id: t.id, type: i } : null : null;
  }
  function Kv(t) {
    let i = {};
    if (t.first) {
      let e = Ln(t.first, "Collection");
      e && (i.first = e);
    }
    if ((t.total || t.total === 0) && (i.total = t.total), t.prev) {
      let e = Ln(t.prev, "Collection");
      e && (i.prev = e);
    }
    if (t.next) {
      let e = Ln(t.next, "Collection");
      e && (i.next = e);
    }
    return i;
  }
  function Xv(t) {
    let i = [];
    for (let e of t) {
      let n = { ...e };
      n.items && n.items.length === 0 && delete n.items, i.push(n);
    }
    return i;
  }
  function Yv(t) {
    return gt({ ...Ct(t), ...Pt(t), ...Ot(t), ...Kv(t), items: Xv(t.members) });
  }
  function Jv(t) {
    let i = [], e = [], n, r;
    for (let o of t.sequences || []) o.canvases.length && i.push(...o.canvases), o.behavior && e.push(...o.behavior), o.viewingDirection && (r = o.viewingDirection), o.startCanvas && (n = o.startCanvas);
    let s = Ct(t);
    return e.length && (s.behavior ? s.behavior.push(...e) : s.behavior = e), gt({ ...s, ...Pt(t), ...Ot(t), viewingDirection: r, start: n, items: i, structures: Qv(t.structures) });
  }
  function Qv(t) {
    if (!t) return t;
    let i = /* @__PURE__ */ new Map();
    for (let n of t) i.set(n.id, n);
    let e = [];
    for (let n of t) if (n.items) {
      let r = n.items.map((s) => typeof s == "string" ? (e.push(s), i.get(s) || s) : s && s.id ? (e.push(s.id), i.get(s.id) || s) : s);
      n.items = r;
    }
    return t.filter((n) => e.indexOf(n.id) === -1);
  }
  function $v(t) {
    return gt({ ...Ct(t), ...Pt(t), ...Ot(t), annotations: t.otherContent && t.otherContent.length ? t.otherContent : void 0, items: t.images && t.images.length ? [{ id: Jo(t, "annotation-page"), type: "AnnotationPage", items: t.images }] : void 0 });
  }
  function ey(t) {
    return gt({ ...Ct(t), ...Pt(t), ...Ot(t), items: t.resources && t.resources.length ? t.resources : void 0 });
  }
  function ty(t) {
    return !t.canvases || t.canvases.length === 0 ? { canvases: [], behavior: [] } : { canvases: t.canvases, behavior: t.viewingHint ? [t.viewingHint] : [], viewingDirection: t.viewingDirection, startCanvas: t.startCanvas };
  }
  function iy(t) {
    function i(e) {
      if (Array.isArray(e)) {
        if (e.length > 1) return { type: "List", items: e.map(i) };
        e = e[0];
      }
      if (typeof e == "string") return encodeURI(e).trim();
      if ("@type" in e) {
        let n;
        if (typeof e.full == "string") n = e.full;
        else if (e.full["@type"] === "dctypes:Image") n = { id: e.full["@id"], type: "Image" };
        else if (e.full["@type"] === "sc:Canvas") n = { id: e.full["@id"], type: "Canvas" };
        else throw Error(`Unsupported source type on annotation: ${e.full["@type"]}`);
        return { type: "SpecificResource", source: n, selector: qn(e.selector) };
      } else return encodeURI(e["@id"]).trim();
    }
    return gt({ ...Ct(t), ...Pt(t), ...Ot(t), target: i(t.on), body: Array.isArray(t.resource) ? t.resource.map(pr) : pr(t.resource) });
  }
  function pr(t) {
    return t.type === "Choice" ? t : Qo(t);
  }
  function Qo(t) {
    let i = t;
    return gt({ ...Ct(i), ...Pt(i), ...Ot(i), ...Zv(i) });
  }
  function ny(t) {
    let i = [];
    return t.default && t.default !== "rdf:nil" && i.push(t.default), t.item && t.item !== "rdf:nil" && i.push(...t.item), gt({ ...Ct(t), ...Pt(t), items: i });
  }
  function sy(t) {
    return gt({ ...Ct(t), ...Pt(t), ...Ot(t), items: t.members });
  }
  function ry(t) {
    let { "@id": i, "@type": e, "@context": n, profile: r, ...s } = t, o = {};
    return i && (o["@id"] = i), o["@type"] = ws(t), o["@type"] === "unknown" && (n && n.length && (o["@context"] = n), o["@type"] = "Service"), r && (o.profile = Yo(r)), gt({ ...o, ...s });
  }
  function oy(t) {
    return gt({ ...Ct(t), ...Pt(t), ...Ot(t) });
  }
  var ay = new Mv({ collection: [Yv], manifest: [Jv], canvas: [$v], annotationList: [ey], sequence: [ty], annotation: [iy], contentResource: [Qo], choice: [ny], range: [sy], service: [ry], layer: [oy] });
  function ly(t) {
    return t && t["@context"] && (t["@context"] === "http://iiif.io/api/presentation/2/context.json" || Array.isArray(t["@context"]) && t["@context"].indexOf("http://iiif.io/api/presentation/2/context.json") !== -1 || t["@context"] === "http://www.shared-canvas.org/ns/context.json") || t["@context"] === "http://iiif.io/api/image/2/context.json" || t["@id"] && t["@type"] === "sc:Collection" || t["@id"] && t["@type"] === "sc:Manifest" ? (t["@context"] || (t["@context"] = "http://iiif.io/api/presentation/2/context.json"), ay.traverseUnknown(t)) : t;
  }
  function qn(t) {
    if ((Array.isArray(t["@type"]) && t["@type"].includes("oa:SvgSelector") || t["@type"] == "oa:SvgSelector") && ("chars" in t || "value" in t)) return { type: "SvgSelector", value: "chars" in t ? t.chars : t.value };
    if (t["@type"] === "oa:FragmentSelector") return { type: "FragmentSelector", value: t.value };
    if (t["@type"] === "oa:Choice") return [qn(t.default), ...(Array.isArray(t.item) ? t.item : [t.item]).map(qn)];
    if (t["@type"] == "iiif:ImageApiSelector") return { type: "ImageApiSelector", region: "region" in t ? t.region : void 0, rotation: "rotation" in t ? t.rotation : void 0 };
    throw Error(`Unsupported selector type: ${t["@type"]}`);
  }
  var uy = ly;
  function Zn(t) {
    var o, l, a, u, c;
    const { license: i, related: e, requiredStatement: n, viewingDirection: r } = t, s = uy(t);
    return t["@context"] === "http://iiif.io/api/presentation/2/context.json" && ([].concat(e || []).forEach((h) => {
      s.homepage = s.homepage || [], s.homepage.push(typeof h == "string" ? h : { id: h["@id"], label: h.label, format: h.format });
    }), (o = s.provider) == null || o.forEach((h, f) => {
      h.homepage && (s.provider[f].homepage = h.homepage.filter((m) => m.id !== "http://example.org/undefined/1" && !s.homepage.find((v) => v.id === m.id)));
    }), ((c = (u = (a = (l = s.provider) == null ? void 0 : l[0]) == null ? void 0 : a.label) == null ? void 0 : u.none) == null ? void 0 : c[0]) === "Unknown" && (delete s.provider[0].label, n && !s.requiredStatement && (s.requiredStatement = n)), i && !s.rights && (s.rights = i), s.viewingDirection = r), s;
  }
  function cy(t = {}) {
    const i = ln({ annotations: [], annotationsAvailable: null, collection: null, errors: /* @__PURE__ */ new Set(), loading: 0, manifest: t.manifest ? Zn(t.manifest) : null, options: t.options || {}, readyPromises: [], rootElement: t.rootElement || null, urlUpdateTimeout: null, annotationsActive: Le(() => i.options.view === "text" || !i.options.view && !i.isContainerWidthAtLeast("medium")), currentStructure: Le(() => {
      if (!(i.manifest.structures instanceof Array)) return false;
      const e = [];
      i.options.pages.filter((o) => o > 0).forEach((o) => {
        e.push(i.manifest.items[o - 1].id);
      });
      const { length: n } = i.manifest.structures;
      let r, s;
      for (let o = n - 1; o >= 0; o -= 1) {
        const l = i.manifest.structures[o], { items: a } = l;
        if (a != null && a.some((u) => e.includes(u.id))) {
          const u = l.items.length;
          if ((u < s || !s) && (r = o, s = u, s === 0)) break;
        }
      }
      return typeof r == "number" && r >= 0 ? i.manifest.structures[r] : false;
    }), isCustomPageView: Le(() => {
      const { pages: e } = i.options;
      return e.length === 1 ? false : e.length > 2 ? true : e[0] < 1 || e[1] < 1 ? false : e[1] - e[0] !== 1;
    }), isFirstPage: Le(() => i.options.pages[0] === 1 || i.options.pages[1] === 1), isLastPage: Le(() => i.options.pages.at(-1) === i.pageCount), isLastSection: Le(() => {
      var s;
      const { pages: e } = i.options, n = e.length - 1;
      return (e[n] ? e[n] : e[n - 1]) >= ((s = i.sections[i.sections.length - 1]) == null ? void 0 : s.firstPage);
    }), isReversed: Le(() => ["right-to-left", "bottom-to-top"].includes(i.manifest.viewingDirection)), isVertical: Le(() => ["top-to-bottom", "bottom-to-top"].includes(i.manifest.viewingDirection)), pageCount: Le(() => {
      var e, n;
      return (n = (e = i.manifest) == null ? void 0 : e.items) == null ? void 0 : n.length;
    }), sections: Le(() => {
      if (!i.manifest.structures) return [];
      const e = [];
      return i.manifest.structures.forEach((n) => {
        if (!n.items) {
          e.push({ firstPage: 1, lastPage: i.pageCount });
          return;
        }
        const r = n.items[0].id, s = i.manifest.items.findIndex((a) => a.id === r) + 1, o = n.items[n.items.length - 1].id, l = i.manifest.items.findIndex((a) => a.id === o) + 1;
        e.push({ firstPage: s, lastPage: l });
      }), e;
    }), structures: Le(() => {
      var a, u, c;
      if (!((a = i.manifest) != null && a.structures)) return [];
      const e = (c = (u = i.manifest.structures[0]) == null ? void 0 : u.behavior) != null && c.includes("top") ? i.manifest.structures[0].items || [] : i.manifest.structures, n = [], r = i.manifest.items, s = e.length;
      for (let h = 0; h < s; h += 1) {
        const f = { ...e[h] };
        if (f.items) {
          const m = f.items[0].id;
          f.firstPage = r.findIndex((y) => y.id === m) + 1;
          const v = f.items.at(-1).id;
          f.lastPage = r.findIndex((y) => y.id === v) + 1;
        }
        f.level = 0, n.push(f);
      }
      let o = 0;
      for (let h = 0; h < n.length; h += 1) {
        const f = n[h];
        for (let m = h + 1; m < n.length; m += 1) {
          const v = n[m];
          v.firstPage >= f.firstPage && v.lastPage <= f.lastPage && (f.items = (f.items || []).filter((y) => y.label), f.items.push(v), v.level += 1, o = Math.max(o, v.level));
        }
      }
      const l = (h, f = 0) => {
        for (let m = 0; m < h.length; m += 1) {
          const v = h[m];
          v.level > f ? h.splice(m, 1) : v.items && l(v.items, f + 1);
        }
      };
      for (let h = 0; h < o; h += 1) l(n);
      return n;
    }), addError(e) {
      i.errors.add(e), console.warn(e);
    }, clearErrors() {
      i.errors.clear();
    }, async fetchJson(e) {
      i.loading += 1;
      const n = await fetch(e).catch((s) => (i.loading = 0, Promise.reject(s)));
      if (!n.ok) return i.loading = 0, Promise.reject(new Error(n.status));
      const r = await n.json().catch((s) => (i.loading = 0, Promise.reject(s)));
      return i.loading > 0 && (i.loading -= 1), r;
    }, async fetchText(e) {
      i.loading += 1;
      const n = await fetch(e).catch((s) => (i.loading = 0, Promise.reject(s)));
      if (!n.ok) return i.loading = 0, console.warn("Error loading annotation"), "";
      const r = await n.text().catch((s) => (i.loading = 0, Promise.reject(s)));
      return i.loading > 0 && (i.loading -= 1), r;
    }, getFacingPage(e) {
      var s, o, l, a, u;
      if ((s = i.manifest.items[e - 1].behavior) != null && s.includes("non-paged")) return -1;
      if (e === 1) return 0;
      const n = i.manifest.items.slice(0, e - 1).filter((c) => {
        var h;
        return (h = c.behavior) == null ? void 0 : h.includes("non-paged");
      });
      return (e + n.length % 2) % 2 === 1 ? (l = (o = i.manifest.items[e - 1 - 1]) == null ? void 0 : o.behavior) != null && l.includes("non-paged") ? -1 : e - 1 : (u = (a = i.manifest.items[e - 1 + 1]) == null ? void 0 : a.behavior) != null && u.includes("non-paged") ? -1 : e < i.pageCount ? e + 1 : 0;
    }, getStartPages() {
      var n;
      let e = 1;
      if (i.manifest.items && i.manifest.start) {
        const r = i.manifest.items.findIndex((s) => s.id === i.manifest.start.id);
        e = r >= 0 ? r + 1 : 1;
      }
      return i.isContainerWidthAtLeast("medium") && ((n = i.manifest.behavior) != null && n.includes("paged")) ? [e, i.getFacingPage(e)].sort() : [e];
    }, getThumbnailUrl(e, n, r = 0, s = 0) {
      var h, f, m, v, y, T, x;
      const o = i.manifest.items[e - 1], l = (h = o.thumbnail) == null ? void 0 : h[0];
      if (l != null && l.id && (l == null ? void 0 : l.width) >= n) return l.id;
      const a = (y = (v = (m = (f = o.items) == null ? void 0 : f[0]) == null ? void 0 : m.items) == null ? void 0 : v[r]) == null ? void 0 : y.body, u = a != null && a.items ? a.items[s] : a, c = (l == null ? void 0 : l.service) || ((T = u == null ? void 0 : u.source) == null ? void 0 : T.service) || (u == null ? void 0 : u.service);
      if (c) {
        const E = [].concat(c)[0], M = ["ImageService2", "ImageService3"].includes(E.type || E["@type"]) ? "default" : "native", L = E.id || E["@id"];
        let U = n;
        l != null && l.service && ((x = E.sizes) == null || x.forEach((Y) => {
          Y.width >= U && Y.width <= U * 2 && (U = Y.width);
        }));
        const K = "jpg", q = L.at(-1) === "/" ? "" : "/";
        return `${L}${q}full/${U},/0/${M}.${K}`;
      }
      return (u == null ? void 0 : u.type) === "Image" ? (l == null ? void 0 : l.id) || (u == null ? void 0 : u.id) : "";
    }, goToFirstPage() {
      i.isFirstPage || i.setPage(1);
    }, goToNextPage() {
      if (i.isLastPage) return;
      const e = i.options.pages.at(-1);
      i.setPage(e + 1);
    }, goToNextSection() {
      if (i.isLastSection) return;
      const { pages: e } = i.options, n = e.length - 1, r = e[n] ? e[n] : e[n - 1];
      let s = 0;
      for (; r >= i.sections[s].firstPage || r && r >= i.sections[s].firstPage; ) s += 1;
      i.setPage(i.sections[s].firstPage);
    }, goToLastPage() {
      i.isLastPage || i.setPage(i.pageCount);
    }, goToPreviousPage() {
      if (i.isFirstPage) return;
      const e = i.options.pages.find((n) => n > 0);
      e > 1 && i.setPage(e - 1);
    }, goToPreviousSection() {
      if (i.isFirstPage) return;
      const { pages: e } = i.options, n = e[0] ? e[0] : e[1];
      let r = i.sections.length - 1;
      for (; n <= i.sections[r].firstPage || n && n <= i.sections[r].firstPage; ) r -= 1;
      i.setPage(i.sections[r].firstPage);
    }, isContainerWidthAtLeast(e) {
      return i.rootElement && window.getComputedStyle(i.rootElement, "::after").content.includes(e);
    }, loadAnnotations() {
      var e;
      i.annotationsAvailable = null, (e = i.options.pages) == null || e.filter((n) => n > 0).forEach(async (n) => {
        if (i.annotations[n]) return;
        const r = i.manifest.items[n - 1];
        if (!("annotations" in r)) {
          i.annotationsAvailable = false;
          return;
        }
        i.annotations[n] = [];
        let s = r.annotations[0].items;
        if (!s) {
          const o = r.annotations[0].id;
          try {
            const l = await i.fetchJson(o);
            s = l.resources || l.items;
          } catch (l) {
            const a = l.response ? l.response.statusText : l.message;
            console.warn(`Could not load annotations: ${a}`), i.annotationsAvailable = false;
            return;
          }
        }
        s instanceof Array && s.forEach(async (o, l) => {
          var m, v, y, T, x, E, M, L, U, K, q, Y;
          let a;
          const u = o.id || o["@id"] || ((m = o.resource) == null ? void 0 : m.id) || ((v = o.resource) == null ? void 0 : v["@id"]);
          if ((y = o.resource) != null && y.chars) a = o.resource.chars;
          else if ((x = (T = o.resource) == null ? void 0 : T[0]) != null && x.chars) a = (M = (E = o.resource) == null ? void 0 : E[0]) == null ? void 0 : M.chars;
          else if ((L = o.resource) != null && L.label) a = `<i>${o.resource.label}</i>`;
          else {
            const te = [].concat(o.body);
            a = (await Promise.all(te.map(async ($) => {
              var ie, ce, ye, me;
              if (($ == null ? void 0 : $.type) === "Image") return `<img src="${$.id}" alt="">`;
              if ($ != null && $.value) return $.value;
              if ((ie = $ == null ? void 0 : $.body) != null && ie.value) return $.body.value;
              const j = ((ce = $ == null ? void 0 : $.items) == null ? void 0 : ce[0].id) || ((ye = $ == null ? void 0 : $.body) == null ? void 0 : ye.id) || ((me = $ == null ? void 0 : $.body) == null ? void 0 : me["@id"]) || ($ == null ? void 0 : $.id) || u;
              return ps(j) ? i.fetchText(j) : "";
            }))).join("<br>");
          }
          if (!a) return;
          (o.format || ((U = o.body) == null ? void 0 : U.format)) === "text/plain" && (a = a.replace(/\n/g, " <br>")), i.annotationsAvailable = true;
          const c = { id: u, html: vn(a) }, h = ((q = (K = o.on) == null ? void 0 : K.selector) == null ? void 0 : q.value) || (typeof o.on == "string" ? o.on : null) || ((Y = o.target) == null ? void 0 : Y.id) || o.target, f = Bo(h);
          f && (c.coords = f), i.annotations[n][l] = c;
        });
      });
    }, initOptions(e) {
      let n = {};
      if (i.options.urlQueryKey) try {
        const r = new URLSearchParams(window.location.search);
        n = JSON.parse(r.get(i.options.urlQueryKey)) || {};
      } catch {
      }
      n.view === "fulltext" ? n.view = "text" : ["scan", ""].includes(n.view) && (n.view = null), n.pages && !ir(n.pages, i.pageCount) && (i.addError("Invalid pages, reset to start page"), n.pages = null), i.options.urlQueryParams.forEach((r) => {
        i.options[r] = n[r] ?? i.options[r];
      }), i.options.pages = e && e.type === "popstate" ? n.pages || i.getStartPages() : n.pages || i.options.pages || i.getStartPages(), i.options.pan = n.panX || n.panY ? { x: n.panX, y: n.panY } : n.pan || i.options.pan, i.options.rotation = parseInt(n.rotation, 10) || i.options.rotation, i.options.view = n.view || n.view === "" ? n.view : i.options.view, i.options.zoom = parseFloat(n.zoom) || i.options.zoom;
    }, loadManifest(e, n = {}) {
      const r = ys();
      return i.fetchJson(e).then(async (s) => {
        const o = Zn(s);
        if (n.expectedType && o.type !== n.expectedType) {
          const a = `Expected manifest of type ${n.expectedType}, but got ${o.type}`;
          return i.addError(a), r.reject(a), r;
        }
        if (i.manifest = null, await ns(), o.type === "Manifest") return i.manifest = o, i.initOptions(), window.addEventListener("popstate", i.initOptions), n.reset && i.updateOptions({ childManifestUrl: e, pages: i.getStartPages(), pan: {}, rotation: null, view: i.isContainerWidthAtLeast("medium") ? "collection" : null, zoom: null }), r.resolve(), r;
        if (o.type === "Collection") {
          i.collection = o;
          const a = new URLSearchParams(window.location.search);
          let u = {};
          try {
            u = JSON.parse(a.get(i.options.urlQueryKey)) || {};
          } catch {
          }
          let c = "";
          if (i.options.urlQueryParams.includes("childManifestUrl") && u.childManifestUrl ? c = u.childManifestUrl : i.collection.manifests && i.options.childManifestAutoloaded && (c = i.collection.manifests[0].id), c) await i.loadManifest(c, { expectedType: "Manifest" }), i.updateOptions({ childManifestUrl: c });
          else {
            const h = u.view || i.options.view;
            i.updateOptions({ view: ["collection", "help", "info"].includes(h) ? h : "collection" });
          }
          return r.resolve(), r;
        }
        const l = "Please provide a valid IIIF Presentation API manifest";
        return i.addError(l), r.reject(l), r;
      }, (s) => {
        const l = `Error loading IIIF manifest: ${s.response && (s.response.statusText || s.response.data) || s.message}`;
        return i.addError(l), r.reject(l), r;
      });
    }, localize(e) {
      if (!i.options.language) throw new Error("language not set");
      if (!e) return "";
      if (typeof e == "string") return e;
      const s = e[i.options.language] || e[i.options.fallbackLanguage] || Object.values(e)[0] || "";
      return ([].concat(s).join("\xA0\xB7 ") || "").trim();
    }, setPage(e) {
      var r;
      let n = [].concat(e);
      if (!ir(n, i.pageCount)) throw new RangeError("Invalid pages");
      return n.length === 1 && ((r = i.options.pages) == null ? void 0 : r.length) === 2 && !this.isCustomPageView && (n = [n[0], i.getFacingPage(n[0])].sort()), i.updateOptions({ pages: n }), n;
    }, toggleAnnotationId(e) {
      const n = { annotationId: i.options.annotationId === e ? null : e, annotationsVisible: i.options.annotationId ? null : i.annotationsVisible };
      n.annotationId && !i.isContainerWidthAtLeast("medium") && (n.view = i.options.view ? null : "text"), i.updateOptions(n);
    }, updateOptions(e) {
      clearTimeout(i.urlUpdateTimeout), Object.assign(i.options, e), e.pages && i.clearErrors(), i.options.urlQueryKey && (i.urlUpdateTimeout = setTimeout(() => {
        const n = {};
        i.options.urlQueryParams.forEach((s) => {
          const o = i.options[s];
          o === null || s === "layers" && !o.some(Boolean) || s === "pages" && o.toString() === i.getStartPages().toString() || typeof o == "object" && !Object.keys(o).length ? delete n[s] : n[s] = i.options[s];
        });
        const r = new URL(window.location);
        Object.keys(n).length ? r.searchParams.set(i.options.urlQueryKey, JSON.stringify(n)) : r.searchParams.delete(i.options.urlQueryKey), window.history && (e.pages || e.view ? window.history.pushState({}, "", r) : window.history.replaceState({}, "", r));
      }, 100));
    } });
    return i;
  }
  var hy = { convertManifest: Zn, install: (t, i = {}) => {
    t.config.globalProperties.$store = new cy(i);
  } };
  window.Tify = function(i = {}) {
    if (this.options = { ...JSON.parse(JSON.stringify(Qm)), ...i }, !this.options.translationsDirUrl) try {
      const { url: s } = import_meta;
      this.options.translationsDirUrl = `${s.slice(0, s.lastIndexOf("/"))}/translations`;
    } catch {
    }
    let e = null;
    this.ready = new Promise((s, o) => {
      e = { resolve: s, reject: o };
    });
    const n = this;
    this.app = Eu({ render: () => Xl(Jm, { readyPromise: e }) }).use(ev, { instance: n }).use(sv).use(rv).use(hy, { options: this.options });
    let r = false;
    this.mount = (s) => {
      if (r) throw new Error("TIFY is already mounted");
      const o = typeof s == "string" ? document.querySelector(s) : s;
      if (!o) throw new Error("Container element not found");
      this.app.mount(o), r = true;
    }, this.destroy = () => {
      this.app.unmount();
    }, this.options.container && this.mount(this.options.container);
  };
  var gy = window.Tify;

  // <stdin>
  function addTify(selector, uri, lang = "en") {
    if (document.documentElement.lang !== void 0) {
      lang = document.documentElement.lang;
    }
    const tify = new Tify({
      container: selector,
      manifestUrl: uri,
      language: lang,
      translationsDirUrl: "/tify/translations/"
    });
    return tify;
  }
  window.iiifPresentationViewer = addTify;
})();
/*! Bundled license information:

tify/dist/tify.js:
  (*!
  TIFY v0.36.2
  (c) 2017-2026 Göttingen State and University Library (https://www.sub.uni-goettingen.de/)
  AGPL-3.0
  https://tify.rocks/
  *)
  (**
  * @vue/shared v3.5.41
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
  (**
  * @vue/reactivity v3.5.41
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
  (**
  * @vue/runtime-core v3.5.41
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

tify/dist/tify.js:
  (**
  * @vue/runtime-dom v3.5.41
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
  (*! openseadragon 5.0.1 *)
  (*! Built on 2024-12-09 *)
  (*! Git commit: v5.0.1-0-480de92d *)
  (*! http://openseadragon.github.io *)
  (*! License: http://openseadragon.github.io/license/ *)
*/
