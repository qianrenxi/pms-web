import { CuiLayerRef } from '../layer-ref';

export interface LayerConfig {
    title?: string;
    content?: string | any;
    shade?: boolean;
    shadeClose?: boolean;
}

export class CuiLayerComponent {
    layerRef: CuiLayerRef<any>;

    close() {
        if (this.layerRef) {
            this.layerRef.close();
        }
    };
}
