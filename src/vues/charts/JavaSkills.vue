<template lang="html">
  <div class="uk-flex uk-flex-center uk-padding-small">
    <div class="uk-container-small">
      <p>Java was the first Object Oriented language I started learning. I've took three courses during my study in the Diploma programme which were primarly based on Java. Following are the skills I've gained working with Java programming lanugage:</p>
      <ul class="uk-list uk-list-divider skillPoints uk-margin-left uk-padding-small">
        <li>Knowledge and understanding of Inheritance, Encapsulation, Polymorphism, and Abstraction</li>
        <li>Working with various collections or Data Structures avaiable in Java (List, Map, Set)</li>
        <li>File I/O and Serialization</li>
        <li>Exception handling (checked and unchecked)</li>
        <li>Working with the JVM and Memory management</li>
        <li>Basic understanding of Multithreading and synchronization</li>
        <li>Java GUI development with Swing/AWT and Java FX.</li>
        <li>Code modularization, and using Classes and Interfaces effectively</li>
        <li>Knowledge of Guava: Google Core Libraries for Java</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "JavaSkills"
}
</script>

<style lang="css">
ul.skillPoints {
  list-style: disc;
}
ul.skillPoints li::before {
  content: "";
  display: none;
}
ul.skillPoints li::after {
  content: "";
  display: none;
}
</style>
