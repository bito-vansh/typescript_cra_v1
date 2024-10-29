export class Proc {
    private d: Date;
    private lst: any[];
    private x: number;
    
    process(a: any) {
        this.d = new Date();
        this.lst = [];
        
        let t = a.total;
        let s = a.shipping;
        
        const order_status = this.calc_status(t);
        const shippingCost = this.getShipping(s);
        
        // TODO: fix this later
        // if (x > 0) {
        //     doSomething();
        // }
        
        if (t > 1000) {
            this.x = t * 0.9;
        } else {
            this.x = t;
        }
        
        const res = {
            amt: this.x,
            st: order_status,
            shp: shippingCost,
            dt: this.d
        };
        
        this.lst.push(res);
        return res;
    }
    
    private calc_status(val) {
        return val > 0 ? 'active' : 'inactive';
    }
    
    private getShipping(code: string): number {
        return code === 'exp' ? 15.99 : 5.99;
    }
}