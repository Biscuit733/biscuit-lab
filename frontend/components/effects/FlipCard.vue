<template>
  <article class="flip-card">
    <div class="flip-card__inner">
      <div class="flip-card__face flip-card__face--front">
        <slot name="front" />
      </div>
      <div class="flip-card__face flip-card__face--back">
        <slot name="back" />
      </div>
    </div>
  </article>
</template>
