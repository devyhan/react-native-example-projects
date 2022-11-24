import { StyleSheet } from 'react-native';
import { Canvas, ImageSVG, useSVG, DataSourceParam } from '@shopify/react-native-skia';

type IconProps = {
    source: DataSourceParam
    width: number
    height: number
    x?: number
    y?: number
}

export default function Icon({source, width, height, x = 0, y = 0}: IconProps) {
    const svg = useSVG(source)
    const w = Math.ceil(width)
    const h = Math.ceil(height)

    return (
      <Canvas style={styles(w, h).canvas}>
        {svg && (
          <ImageSVG svg={svg} x={x} y={y} width={w} height={h} />
        )}
      </Canvas>
    );
}

const styles = (width: number, height: number) => StyleSheet.create({
    canvas: {
        width: width,
        height: height,
    }
});