import { Dimmer } from '@/components/Dimmer/Dimmer';
import { tet } from '@/tetrisly';

export const DimmerDocs = () => (
  <tet.section py="$space-component-padding-4xLarge">
    <tet.div px="$dimension-1000" py="$dimension-500">
      <tet.div display="flex">
        <tet.div w="300" h="300" position="relative">
          <Dimmer />
        </tet.div>
      </tet.div>
    </tet.div>
  </tet.section>
);
