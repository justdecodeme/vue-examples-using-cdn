const app = Vue.createApp({
	data() {
		return {
			postFontSize: 1,
			friends: [
				{
					id: "manuel",
					name: "Manuel Lorenz",
					phone: "01234 5678 991",
					email: "manuel@localhost.com",
				},
				{
					id: "julie",
					name: "Julie Jones",
					phone: "09876 543 221",
					email: "julie@localhost.com",
				},
			],
		};
	},
	methods: {
		onEnlargeText: function () {
			console.log("inside function");
			this.postFontSize += 1;
		},
	},
});

app.component("friend-contact", {
	props: ["friend"],
	template: `
    <li>
      <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails()">
        {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
      </button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
      <button v-on:click="$emit('enlarge-text', 0.5)">
        Enlarge text
      </button>
    </li>
  `,
	data() {
		return {
			detailsAreVisible: false,
		};
	},
	methods: {
		toggleDetails() {
			this.detailsAreVisible = !this.detailsAreVisible;
		},
	},
});

app.mount("#app");
