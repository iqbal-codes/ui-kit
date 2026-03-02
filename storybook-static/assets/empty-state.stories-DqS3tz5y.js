import{B as u}from"./button-B0sz1g1T.js";import{c as h}from"./utils-BXaZC15x.js";import{c as r}from"./createLucideIcon-dHwM2-S-.js";import"./iframe-D33y_DQk.js";import"./preload-helper-Dp1pzeXC.js";import"./jsx-runtime-D_zvdyIk.js";/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],V=r("file-text",H);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"M12 22v-9",key:"x3hkom"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",key:"2ntwy6"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",key:"1pmm1c"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",key:"12ttoo"}]],G=r("package-open",$);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],K=r("plus",J);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],B=r("search",Q);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Y=r("users",X);function a({title:y,description:o,icon:f=G,action:e,secondaryAction:t,compact:F=!1,className:g}){return F?React.createElement("div",{className:h("flex flex-col items-center justify-center p-6 text-center",g)},React.createElement(f,{className:"h-8 w-8 text-muted-foreground/60",strokeWidth:1.5}),React.createElement("h3",{className:"mt-3 text-sm font-medium"},y),o&&React.createElement("p",{className:"mt-1 text-xs text-muted-foreground"},o),e&&React.createElement(u,{size:"sm",variant:e.variant||"outline",className:"mt-3",onClick:e.onClick},e.icon&&React.createElement("span",{className:"mr-2"},e.icon),e.label)):React.createElement("div",{className:h("flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center",g)},React.createElement("div",{className:"rounded-full bg-muted p-3"},React.createElement(f,{className:"h-8 w-8 text-muted-foreground",strokeWidth:1.5})),React.createElement("h3",{className:"mt-4 text-lg font-semibold"},y),o&&React.createElement("p",{className:"mt-2 max-w-sm text-sm text-muted-foreground"},o),(e||t)&&React.createElement("div",{className:"mt-6 flex items-center gap-3"},e&&React.createElement(u,{variant:e.variant||"default",onClick:e.onClick},e.icon&&React.createElement("span",{className:"mr-2"},e.icon),e.label),t&&React.createElement(u,{variant:t.variant||"outline",onClick:t.onClick},t.icon&&React.createElement("span",{className:"mr-2"},t.icon),t.label)))}a.__docgenInfo={description:"",methods:[],displayName:"EmptyState",props:{title:{required:!0,tsType:{name:"string"},description:"Title text"},description:{required:!1,tsType:{name:"string"},description:"Descriptive message"},icon:{required:!1,tsType:{name:"LucideIcon"},description:"Icon to display (defaults to PackageOpen)",defaultValue:{value:"PackageOpen",computed:!0}},action:{required:!1,tsType:{name:"EmptyStateAction"},description:"Primary action button"},secondaryAction:{required:!1,tsType:{name:"EmptyStateAction"},description:"Secondary action button"},compact:{required:!1,tsType:{name:"boolean"},description:"Compact mode for inline empty states",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"}}};const ce={title:"Blocks/Feedback/EmptyState",component:a,parameters:{layout:"padded"},tags:["autodocs"]},c={args:{title:"No items found",description:"Try adjusting your search or filters to find what you're looking for."}},s={args:{title:"No users yet",description:"Start by adding your first user to the system.",action:{label:"Add User",onClick:()=>console.log("Add user clicked")}}},n={args:{title:"No documents",description:"Upload your first document to get started.",action:{label:"Upload Document",onClick:()=>console.log("Upload clicked")},secondaryAction:{label:"Learn More",variant:"outline",onClick:()=>console.log("Learn more clicked")}}},i={args:{title:"No search results",description:"We couldn't find any matches for your search.",icon:B,action:{label:"Clear Search",onClick:()=>console.log("Clear search clicked")}}},l={args:{title:"No items",description:"There are no items to display.",compact:!0}},d={args:{title:"No results",description:"Try a different search term.",compact:!0,action:{label:"Clear",variant:"ghost",onClick:()=>console.log("Clear clicked")}}},m={render:()=>React.createElement("div",{className:"grid gap-4 md:grid-cols-2"},React.createElement(a,{title:"No users",description:"Add users to your organization",icon:Y,action:{label:"Add User",onClick:()=>{}}}),React.createElement(a,{title:"No documents",description:"Upload your first file",icon:V,action:{label:"Upload File",onClick:()=>{}}}),React.createElement(a,{title:"No results",description:"Try a different search",icon:B,action:{label:"Search Again",onClick:()=>{}}}),React.createElement(a,{title:"Empty collection",description:"Create your first item",icon:K,action:{label:"Create New",onClick:()=>{}}}))},p={args:{title:"Nothing here yet"}};var k,C,N;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: 'No items found',
    description: 'Try adjusting your search or filters to find what you\\'re looking for.'
  }
}`,...(N=(C=c.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var E,b,S;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    title: 'No users yet',
    description: 'Start by adding your first user to the system.',
    action: {
      label: 'Add User',
      onClick: () => console.log('Add user clicked')
    }
  }
}`,...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var v,x,R;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: 'No documents',
    description: 'Upload your first document to get started.',
    action: {
      label: 'Upload Document',
      onClick: () => console.log('Upload clicked')
    },
    secondaryAction: {
      label: 'Learn More',
      variant: 'outline',
      onClick: () => console.log('Learn more clicked')
    }
  }
}`,...(R=(x=n.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var T,A,M;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: 'No search results',
    description: 'We couldn\\'t find any matches for your search.',
    icon: Search,
    action: {
      label: 'Clear Search',
      onClick: () => console.log('Clear search clicked')
    }
  }
}`,...(M=(A=i.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var U,_,L;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    title: 'No items',
    description: 'There are no items to display.',
    compact: true
  }
}`,...(L=(_=l.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var W,j,w;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    title: 'No results',
    description: 'Try a different search term.',
    compact: true,
    action: {
      label: 'Clear',
      variant: 'ghost',
      onClick: () => console.log('Clear clicked')
    }
  }
}`,...(w=(j=d.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var q,z,P;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="grid gap-4 md:grid-cols-2">
      <EmptyState title="No users" description="Add users to your organization" icon={Users} action={{
      label: 'Add User',
      onClick: () => {}
    }} />
      <EmptyState title="No documents" description="Upload your first file" icon={FileText} action={{
      label: 'Upload File',
      onClick: () => {}
    }} />
      <EmptyState title="No results" description="Try a different search" icon={Search} action={{
      label: 'Search Again',
      onClick: () => {}
    }} />
      <EmptyState title="Empty collection" description="Create your first item" icon={Plus} action={{
      label: 'Create New',
      onClick: () => {}
    }} />
    </div>
}`,...(P=(z=m.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var D,I,O;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: 'Nothing here yet'
  }
}`,...(O=(I=p.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};const se=["Default","WithPrimaryAction","WithBothActions","CustomIcon","Compact","CompactWithAction","DifferentIcons","TitleOnly"];export{l as Compact,d as CompactWithAction,i as CustomIcon,c as Default,m as DifferentIcons,p as TitleOnly,n as WithBothActions,s as WithPrimaryAction,se as __namedExportsOrder,ce as default};
