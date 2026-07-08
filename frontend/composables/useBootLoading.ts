export function useBootLoading() {
  const hasBootLoadingShown = useState('has-boot-loading-shown', () => false)
  const showBootLoading = computed(() => !hasBootLoadingShown.value)

  function completeBootLoading() {
    hasBootLoadingShown.value = true
  }

  return {
    hasBootLoadingShown,
    showBootLoading,
    completeBootLoading
  }
}
