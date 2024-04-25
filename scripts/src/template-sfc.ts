export const template = `<script lang="ts">
import type { PolimoprhicProps } from '../factory'

export interface {{ PascalCasePart }}Props extends PolimoprhicProps {}
</script>

<script setup lang="ts">
import { ark } from '../factory'
import { use{{ PascalCaseComponent }}Context } from './use-{{ CamelCaseComponent }}-context'

defineProps<{{ PascalCasePart }}Props>()
const {{ CamelCaseComponent }} = use{{ PascalCaseComponent }}Context()
</script>

<template>
  <ark.div v-bind="{{ CamelCaseComponent }}.{{ CamelCasePart }}Props" :as-child="asChild">
    <slot />
  </ark.div>
</template>`