import{B as E}from"./button-B0sz1g1T.js";import{r as t}from"./iframe-D33y_DQk.js";import{b as K,c as d,S as Q}from"./utils-BXaZC15x.js";import{c as X}from"./createLucideIcon-dHwM2-S-.js";import"./index-DeoUOet9.js";import{j as y}from"./jsx-runtime-D_zvdyIk.js";import"./preload-helper-Dp1pzeXC.js";import"./index-aUmlO2Kf.js";/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],ee=X("chevron-right",Y);function te(e){const r=re(e),n=t.forwardRef((a,o)=>{const{children:s,...i}=a,l=t.Children.toArray(s),c=l.find(ne);if(c){const u=c.props.children,J=l.map(v=>v===c?t.Children.count(u)>1?t.Children.only(null):t.isValidElement(u)?u.props.children:null:v);return y.jsx(r,{...i,ref:o,children:t.isValidElement(u)?t.cloneElement(u,void 0,J):null})}return y.jsx(r,{...i,ref:o,children:s})});return n.displayName=`${e}.Slot`,n}function re(e){const r=t.forwardRef((n,a)=>{const{children:o,...s}=n;if(t.isValidElement(o)){const i=se(o),l=oe(s,o.props);return o.type!==t.Fragment&&(l.ref=a?K(a,i):i),t.cloneElement(o,l)}return t.Children.count(o)>1?t.Children.only(null):null});return r.displayName=`${e}.SlotClone`,r}var ae=Symbol("radix.slottable");function ne(e){return t.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===ae}function oe(e,r){const n={...r};for(const a in r){const o=e[a],s=r[a];/^on[A-Z]/.test(a)?o&&s?n[a]=(...l)=>{const c=s(...l);return o(...l),c}:o&&(n[a]=o):a==="style"?n[a]={...o,...s}:a==="className"&&(n[a]=[o,s].filter(Boolean).join(" "))}return{...e,...n}}function se(e){var a,o;let r=(a=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:a.get,n=r&&"isReactWarning"in r&&r.isReactWarning;return n?e.ref:(r=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=r&&"isReactWarning"in r&&r.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var ie=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],le=ie.reduce((e,r)=>{const n=te(`Primitive.${r}`),a=t.forwardRef((o,s)=>{const{asChild:i,...l}=o,c=i?n:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),y.jsx(c,{...l,ref:s})});return a.displayName=`Primitive.${r}`,{...e,[r]:a}},{}),ce="Separator",N="horizontal",de=["horizontal","vertical"],V=t.forwardRef((e,r)=>{const{decorative:n,orientation:a=N,...o}=e,s=ue(a)?a:N,l=n?{role:"none"}:{"aria-orientation":s==="vertical"?s:void 0,role:"separator"};return y.jsx(le.div,{"data-orientation":s,...l,...o,ref:r})});V.displayName=ce;function ue(e){return de.includes(e)}var me=V;function F({...e}){return t.createElement("nav",{"aria-label":"breadcrumb","data-slot":"breadcrumb",...e})}function z({className:e,...r}){return t.createElement("ol",{"data-slot":"breadcrumb-list",className:d("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",e),...r})}function H({className:e,...r}){return t.createElement("li",{"data-slot":"breadcrumb-item",className:d("inline-flex items-center gap-1.5",e),...r})}function $({asChild:e,className:r,...n}){const a=e?Q:"a";return t.createElement(a,{"data-slot":"breadcrumb-link",className:d("hover:text-foreground transition-colors",r),...n})}function M({className:e,...r}){return t.createElement("span",{"data-slot":"breadcrumb-page",role:"link","aria-disabled":"true","aria-current":"page",className:d("text-foreground font-normal",e),...r})}function U({children:e,className:r,...n}){return t.createElement("li",{"data-slot":"breadcrumb-separator",role:"presentation","aria-hidden":"true",className:d("[&>svg]:size-3.5",r),...n},e??t.createElement(ee,null))}F.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb"};z.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};H.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};$.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}};M.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};U.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"};function Z({className:e,orientation:r="horizontal",decorative:n=!0,...a}){return t.createElement(me,{"data-slot":"separator",decorative:n,orientation:r,className:d("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",e),...a})}Z.__docgenInfo={description:"",methods:[],displayName:"Separator",props:{orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},decorative:{defaultValue:{value:"true",computed:!1},required:!1}}};function G({title:e,subtitle:r,breadcrumbs:n,actions:a,children:o,className:s}){return t.createElement("div",{className:d("space-y-4",s)},n&&n.length>0&&t.createElement(F,null,t.createElement(z,null,n.map((i,l)=>{const c=l===n.length-1;return t.createElement(t.Fragment,{key:`${i.label}-${l}`},t.createElement(H,null,c?t.createElement(M,null,i.label):i.href?t.createElement($,{href:i.href},i.label):t.createElement("span",null,i.label)),!c&&t.createElement(U,null))}))),t.createElement("div",{className:"flex items-start justify-between gap-4"},t.createElement("div",{className:"space-y-1"},t.createElement("h1",{className:"text-2xl font-semibold tracking-tight"},e),r&&t.createElement("p",{className:"text-sm text-muted-foreground"},r)),a&&t.createElement("div",{className:"flex items-center gap-2"},a)),o&&t.createElement("div",{className:"pt-2"},o),t.createElement(Z,null))}G.__docgenInfo={description:"",methods:[],displayName:"PageHeader",props:{title:{required:!0,tsType:{name:"string"},description:"Page title"},subtitle:{required:!1,tsType:{name:"string"},description:"Optional subtitle or description"},breadcrumbs:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  href?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!1}}]}}],raw:`Array<{
  label: string;
  href?: string;
}>`},description:"Breadcrumb items (last item is current page)"},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Actions to display in the header (buttons, etc.)"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom content to render below the title"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"}}};const Ne={title:"Blocks/Layout/PageHeader",component:G,parameters:{layout:"padded"},tags:["autodocs"]},m={args:{title:"Page Title",subtitle:"This is an optional subtitle describing the page"}},p={args:{title:"Page Title",subtitle:"With breadcrumb navigation",breadcrumbs:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Current Page"}]}},f={args:{title:"Page Title",subtitle:"With action buttons",actions:React.createElement(React.Fragment,null,React.createElement(E,{variant:"outline"},"Cancel"),React.createElement(E,null,"Save"))}},g={args:{title:"User Management",subtitle:"Manage user accounts and permissions",breadcrumbs:[{label:"Dashboard",href:"/dashboard"},{label:"Settings"}],actions:React.createElement(React.Fragment,null,React.createElement(E,{variant:"outline"},"Export"),React.createElement(E,null,"Add User"))}},b={args:{title:"Page Title",children:React.createElement("p",{className:"text-sm text-muted-foreground"},"Custom content below the title")}},h={args:{title:"Simple Page Title"}};var S,x,P;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: 'Page Title',
    subtitle: 'This is an optional subtitle describing the page'
  }
}`,...(P=(x=m.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var R,T,B;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: 'Page Title',
    subtitle: 'With breadcrumb navigation',
    breadcrumbs: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Products',
      href: '/products'
    }, {
      label: 'Current Page'
    }]
  }
}`,...(B=(T=p.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var _,C,w;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: 'Page Title',
    subtitle: 'With action buttons',
    actions: <>
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </>
  }
}`,...(w=(C=f.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var I,O,A;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: 'User Management',
    subtitle: 'Manage user accounts and permissions',
    breadcrumbs: [{
      label: 'Dashboard',
      href: '/dashboard'
    }, {
      label: 'Settings'
    }],
    actions: <>
        <Button variant="outline">Export</Button>
        <Button>Add User</Button>
      </>
  }
}`,...(A=(O=g.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var W,k,q;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    title: 'Page Title',
    children: <p className="text-sm text-muted-foreground">Custom content below the title</p>
  }
}`,...(q=(k=b.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var j,L,D;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: 'Simple Page Title'
  }
}`,...(D=(L=h.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};const Se=["Default","WithBreadcrumbs","WithActions","Full","Children","TitleOnly"];export{b as Children,m as Default,g as Full,h as TitleOnly,f as WithActions,p as WithBreadcrumbs,Se as __namedExportsOrder,Ne as default};
