const base = "/";

export const paths = {
    home            : base + 'home',
    layout1         : base + 'layout1',
    layout2         : base + 'layout2',
    layout4         : base + 'layout4',
    auth            : {
        home        : base,
    },
    layout3         : {
        home        : base + 'layout3',
        dashboard   : base + 'layout3/dashboard',
        analytics   : base + 'layout3/analytics',
        revenue     : base + 'layout3/revenue',
        wallet      : base + 'layout3/wallet',
        notification: base + 'layout3/notification',
    }
}