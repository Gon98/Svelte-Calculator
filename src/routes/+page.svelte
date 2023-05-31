<script>
    import Navbar from "./components/Navbar.svelte";

</script>

<main>
    <h1 class='heading'>Welcome to Svelte</h1>
    <Navbar text='CalculatorApp'/>
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        margin: 0 auto;
        background-color: white;
    }

    .heading{
        color: #ff6433;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    
</style>
