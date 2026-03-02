import{r as s}from"./iframe-D33y_DQk.js";import{S as H,c as r,a as z}from"./utils-BXaZC15x.js";import{c as f}from"./createLucideIcon-dHwM2-S-.js";import"./preload-helper-Dp1pzeXC.js";import"./jsx-runtime-D_zvdyIk.js";/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],G=f("arrow-down",F);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],K=f("arrow-up",J);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=[["path",{d:"M5 12h14",key:"1ays0h"}]],X=f("minus",Q),Y=z("inline-flex items-center justify-center rounded-full border border-transparent px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",ghost:"[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",link:"text-primary underline-offset-4 [a&]:hover:underline"}},defaultVariants:{variant:"default"}});function U({className:e,variant:t="default",asChild:n=!1,...a}){const i=n?H:"span";return s.createElement(i,{"data-slot":"badge","data-variant":t,className:r(Y({variant:t}),e),...a})}U.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{defaultValue:{value:'"default"',computed:!1},required:!1}}};function j({className:e,...t}){return s.createElement("div",{"data-slot":"card",className:r("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e),...t})}function M({className:e,...t}){return s.createElement("div",{"data-slot":"card-header",className:r("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...t})}function O({className:e,...t}){return s.createElement("div",{"data-slot":"card-title",className:r("leading-none font-semibold",e),...t})}function P({className:e,...t}){return s.createElement("div",{"data-slot":"card-description",className:r("text-muted-foreground text-sm",e),...t})}function L({className:e,...t}){return s.createElement("div",{"data-slot":"card-content",className:r("px-6",e),...t})}j.__docgenInfo={description:"",methods:[],displayName:"Card"};M.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};O.__docgenInfo={description:"",methods:[],displayName:"CardTitle"};P.__docgenInfo={description:"",methods:[],displayName:"CardDescription"};L.__docgenInfo={description:"",methods:[],displayName:"CardContent"};function Z({direction:e,value:t,label:n}){const a={up:K,down:G,neutral:X},i={up:"bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300",down:"bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",neutral:"bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"},d=a[e];return React.createElement(U,{variant:"outline",className:r("gap-1 font-normal",i[e])},React.createElement(d,{className:"h-3 w-3"}),React.createElement("span",null,t),n&&React.createElement("span",{className:"text-muted-foreground"},n))}function o({title:e,value:t,description:n,trend:a,className:i,onClick:d}){return React.createElement(j,{className:r("transition-colors",d&&"cursor-pointer hover:bg-muted/50",i),onClick:d},React.createElement(M,{className:"flex flex-row items-center justify-between space-y-0 pb-2"},React.createElement("div",{className:"space-y-1"},React.createElement(O,{className:"text-sm font-medium"},e),n&&React.createElement(P,{className:"text-xs"},n)),a&&React.createElement(Z,{direction:a.direction,value:a.value,label:a.label})),React.createElement(L,null,React.createElement("div",{className:"text-2xl font-bold tracking-tight"},t)))}o.__docgenInfo={description:"",methods:[],displayName:"StatCard",props:{title:{required:!0,tsType:{name:"string"},description:"Card title (metric name)"},value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Current value to display"},description:{required:!1,tsType:{name:"string"},description:"Optional description below title"},trend:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  direction: TrendDirection;
  value: string;
  label?: string;
}`,signature:{properties:[{key:"direction",value:{name:"union",raw:"'up' | 'down' | 'neutral'",elements:[{name:"literal",value:"'up'"},{name:"literal",value:"'down'"},{name:"literal",value:"'neutral'"}],required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}}]}},description:"Trend direction for indicator"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler"}}};const se={title:"Blocks/DataDisplay/StatCard",component:o,parameters:{layout:"padded"},tags:["autodocs"]},l={args:{title:"Total Users",value:"1,234"}},c={args:{title:"Total Revenue",value:"$45,678",description:"Last 30 days"}},u={args:{title:"New Signups",value:"567",description:"This month",trend:{direction:"up",value:"12%",label:"vs last month"}}},m={args:{title:"Bounce Rate",value:"42%",description:"This week",trend:{direction:"down",value:"5%",label:"vs last week"}}},p={args:{title:"Active Users",value:"890",description:"Today",trend:{direction:"neutral",value:"0%",label:"no change"}}},v={args:{title:"Total Orders",value:"2,345",description:"Click to view details",onClick:()=>console.log("StatCard clicked")}},g={render:()=>React.createElement("div",{className:"grid gap-4 md:grid-cols-3"},React.createElement(o,{title:"Revenue",value:"$12,345",trend:{direction:"up",value:"8%",label:"vs last month"}}),React.createElement(o,{title:"Expenses",value:"$8,901",trend:{direction:"down",value:"3%",label:"vs last month"}}),React.createElement(o,{title:"Net Profit",value:"$3,444",trend:{direction:"neutral",value:"0%",label:"vs last month"}}))};var h,b,y;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Total Users',
    value: '1,234'
  }
}`,...(y=(b=l.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var x,w,N;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Total Revenue',
    value: '$45,678',
    description: 'Last 30 days'
  }
}`,...(N=(w=c.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var k,C,T;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: 'New Signups',
    value: '567',
    description: 'This month',
    trend: {
      direction: 'up',
      value: '12%',
      label: 'vs last month'
    }
  }
}`,...(T=(C=u.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var E,_,R;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    title: 'Bounce Rate',
    value: '42%',
    description: 'This week',
    trend: {
      direction: 'down',
      value: '5%',
      label: 'vs last week'
    }
  }
}`,...(R=(_=m.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var S,q,D;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: 'Active Users',
    value: '890',
    description: 'Today',
    trend: {
      direction: 'neutral',
      value: '0%',
      label: 'no change'
    }
  }
}`,...(D=(q=p.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var $,I,W;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    title: 'Total Orders',
    value: '2,345',
    description: 'Click to view details',
    onClick: () => console.log('StatCard clicked')
  }
}`,...(W=(I=v.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var A,V,B;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="grid gap-4 md:grid-cols-3">
      <StatCard title="Revenue" value="$12,345" trend={{
      direction: 'up',
      value: '8%',
      label: 'vs last month'
    }} />
      <StatCard title="Expenses" value="$8,901" trend={{
      direction: 'down',
      value: '3%',
      label: 'vs last month'
    }} />
      <StatCard title="Net Profit" value="$3,444" trend={{
      direction: 'neutral',
      value: '0%',
      label: 'vs last month'
    }} />
    </div>
}`,...(B=(V=g.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};const ie=["Default","WithDescription","WithPositiveTrend","WithNegativeTrend","WithNeutralTrend","Clickable","AllVariants"];export{g as AllVariants,v as Clickable,l as Default,c as WithDescription,m as WithNegativeTrend,p as WithNeutralTrend,u as WithPositiveTrend,ie as __namedExportsOrder,se as default};
