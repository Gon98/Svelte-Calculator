<script lang='ts'>
    export let text: string;
    export let triple: boolean = false;
    export let highlight: boolean = false;
    export let operation: boolean = false;
    export let double: boolean = false;
    export let onClick: (value: string) => void = () => {};
</script>

<main>
    <button class="button" 
    on:click={() => onClick(text)}
    class:triple class:highlight class:operation class:double
    >
        {text}
    </button>
</main>

<style>
    .button{
        padding: 0.9rem;
        font-size: 20px;
        width: 50px;
    }

    .triple{
        width: 150px;
    }

    .double{
        width: 100px;
    }

    .highlight{
        background-color: red;
        color: white;
    }

    .operation{
        background-color: orange;
        color: white
    }
   
</style>