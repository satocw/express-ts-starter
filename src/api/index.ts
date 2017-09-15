import { Router } from 'express';

export class IndexApi {

    static create(router: Router) {
        const _this = new IndexApi();
        router.get('/', _this.getRoot.bind(_this));
    }

    private getRoot(req: any, res: any) {
        res.send('/GET api ok');
    }
}