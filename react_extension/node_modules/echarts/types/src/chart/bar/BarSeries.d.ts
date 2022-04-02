import BaseBarSeriesModel, { BaseBarSeriesOption } from './BaseBarSeries';
import { ItemStyleOption, OptionDataValue, SeriesStackOptionMixin, StatesOptionMixin, OptionDataItemObject, SeriesSamplingOptionMixin, SeriesLabelOption, SeriesEncodeOptionMixin } from '../../util/types';
import type Cartesian2D from '../../coord/cartesian/Cartesian2D';
import type Polar from '../../coord/polar/Polar';
import SeriesData from '../../data/SeriesData';
import { BrushCommonSelectorsForSeries } from '../../component/brush/selector';
export declare type PolarBarLabelPosition = SeriesLabelOption['position'] | 'start' | 'insideStart' | 'middle' | 'end' | 'insideEnd';
export declare type BarSeriesLabelOption = Omit<SeriesLabelOption, 'position'> & {
    position?: PolarBarLabelPosition | 'outside';
};
export interface BarStateOption {
    itemStyle?: BarItemStyleOption;
    label?: BarSeriesLabelOption;
}
export interface BarItemStyleOption extends ItemStyleOption {
    borderRadius?: number | number[];
}
export interface BarDataItemOption extends BarStateOption, StatesOptionMixin<BarStateOption>, OptionDataItemObject<OptionDataValue> {
    cursor?: string;
}
export interface BarSeriesOption extends BaseBarSeriesOption<BarStateOption>, BarStateOption, SeriesStackOptionMixin, SeriesSamplingOptionMixin, SeriesEncodeOptionMixin {
    type?: 'bar';
    coordinateSystem?: 'cartesian2d' | 'polar';
    clip?: boolean;
    /**
     * If use caps on two sides of bars
     * Only available on tangential polar bar
     */
    roundCap?: boolean;
    showBackground?: boolean;
    backgroundStyle?: ItemStyleOption & {
        borderRadius?: number | number[];
    };
    data?: (BarDataItemOption | OptionDataValue | OptionDataValue[])[];
    realtimeSort?: boolean;
}
declare class BarSeriesModel extends BaseBarSeriesModel<BarSeriesOption> {
    static type: string;
    type: string;
    static dependencies: string[];
    coordinateSystem: Cartesian2D | Polar;
    getInitialData(): SeriesData;
    /**
     * @override
     */
    getProgressive(): number | false;
    /**
     * @override
     */
    getProgressiveThreshold(): number;
    brushSelector(dataIndex: number, data: SeriesData, selectors: BrushCommonSelectorsForSeries): boolean;
    static defaultOption: BarSeriesOption;
}
export default BarSeriesModel;
