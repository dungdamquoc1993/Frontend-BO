<template>
  <div>
    <section class="header">
      <div class="container">
        <div class="title text-center colorSecondary mb-3">
          How can we help you?
        </div>

        <div class="des text-center colorSecondary mb-3">
          We will quickly and efficiently respond to your questions. What would
          you like to know?
        </div>
      </div>
    </section>

    <section class="content">
      <div class="row" v-if="!isShowDetail">
        <div v-for="faq in faqs" :key="faq.title" class="col-4 item">
          <div class="title">
            <span>
              <svg
                width="18"
                height="15"
                viewBox="0 0 18 15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <path
                    opacity="0.5"
                    d="M16.2935 5.93903H1.44647C1.05942 5.94907 0.691608 6.10988 0.42141 6.38719C0.151212 6.66449 0 7.03635 0 7.42353C0 7.8107 0.151212 8.18256 0.42141 8.45987C0.691608 8.73717 1.05942 8.89798 1.44647 8.90803H16.2935C16.6805 8.89798 17.0483 8.73717 17.3185 8.45987C17.5887 8.18256 17.7399 7.8107 17.7399 7.42353C17.7399 7.03635 17.5887 6.66449 17.3185 6.38719C17.0483 6.10988 16.6805 5.94907 16.2935 5.93903Z"
                    fill="white"
                  />
                  <path
                    opacity="0.5"
                    d="M16.2935 0H1.44647C1.05942 0.0100463 0.691608 0.170857 0.42141 0.448159C0.151212 0.725462 0 1.09733 0 1.4845C0 1.87167 0.151212 2.24354 0.42141 2.52084C0.691608 2.79814 1.05942 2.95895 1.44647 2.969H16.2935C16.6805 2.95895 17.0483 2.79814 17.3185 2.52084C17.5887 2.24354 17.7399 1.87167 17.7399 1.4845C17.7399 1.09733 17.5887 0.725462 17.3185 0.448159C17.0483 0.170857 16.6805 0.0100463 16.2935 0V0Z"
                    fill="white"
                  />
                  <path
                    opacity="0.5"
                    d="M7.38547 11.878H1.44647C1.05942 11.888 0.691608 12.0488 0.42141 12.3261C0.151212 12.6035 0 12.9753 0 13.3625C0 13.7497 0.151212 14.1215 0.42141 14.3988C0.691608 14.6761 1.05942 14.8369 1.44647 14.847H7.38547C7.77251 14.8369 8.14033 14.6761 8.41053 14.3988C8.68072 14.1215 8.83193 13.7497 8.83193 13.3625C8.83193 12.9753 8.68072 12.6035 8.41053 12.3261C8.14033 12.0488 7.77251 11.888 7.38547 11.878V11.878Z"
                    fill="white"
                  />
                </g>
              </svg>
            </span>
            {{ faq.title }}
          </div>

          <ul>
            <li @click="toggleDetailContent()" v-for="item in faq.child" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>

      <div v-else class="detail">

        <vs-button @click="toggleDetailContent()">Back</vs-button>
        <div class="title">
          Communications
        </div>

        <div class="des">
          <div>1. To communicate with the Client, the Company may use: — e-mail; — fax; — telephone; — SMS; — letters sent by post; — different types of messages sent to the Client on the trading terminal, in the Dashboard, browser window, etc. (push notifications, reminders, service messages, etc.); — announcements on the Company website.</div>

          <div>2. To promptly communicate with the Client to resolve problems related to Client transactions, the Company will use the Client's contact information entered when the Client registered or modified the account pursuant to clause 4.5 of the Agreement. The Client agrees to accept message from the Company at any time.</div>

          <div>3. Any correspondence (documents, notices, confirmations, announcements, reports etc.) are deemed received by the Client: 1) one (1) hour after they are sent to the email address (e-mail); 2) immediately after they are faxed; 3) immediately after the telephone call ends; 4) immediately after an SMS message is sent; 5) seven (7) calendar days after they are mailed; 6) immediately after an announcement is posted on the Company website.</div>

          <div>4. The Client may also contact the Company by e-mail, and other email addresses and the telephone numbers listed in this Agreement and on the Company website.</div>

          <div>5. The Client understands and agrees that, if the Client's behavior during conversations with a Company representative is inappropriate, the Company reserves the right to unilaterally terminate this Agreement.</div>

          <div>6. The Company may use contact information provided by the Client to send informational, marketing, and advertising materials, and service messages and to resolve other tasks. The Company will determine the frequency with which it sends messages to the Client at its sole discretion. If the Client wishes not to receive from informational (and other) messages from the Company, he/she must unsubscribe by clicking on the Unsubscribe link (if the message format provides this ability) or by contacting the client support department.</div>
        </div>
      </div>
    </section>
    <footer-home-page />
  </div>
</template>

<style lang="scss" scoped>
.header {
  min-height: 340px;
  position: relative;
  background: url(/landing/img/BackgroundFAQs.jpg) no-repeat;
  background-size: cover;
  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-items: center;
  }

  .title {
    font-size: 1.75rem;
  }
}

.content {
  padding: 30px;
  .row {
    display: flex;
    flex-wrap: wrap;
  }

  .col-4 {
    flex: 0 0 30.33333%;
    max-width: 30.33333%;
    margin-right: 2%;
    margin-top: 30px;
  }

  @media screen and (max-width: 600px) {
      .col-4 {
        flex: 0 0 100%;
        max-width: 100%;
        margin-right: 2%;
        margin-top: 30px;
      }
  }

  .item {
    .title {
      color: #fff;
      font-size: 20px;
      font-weight: 700;
      border-bottom: 1px solid;
      border-color: #fff;
    }

    li {
      border-bottom: 1px dashed #fff;
      padding: .5rem 0;
      cursor: pointer;
    }
  }
}

.detail {
  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .des {

  }
}
</style>

<script>
import FooterHomePage from "@/pages/trade/Home/Footer.vue";

export default {
  components: {
    FooterHomePage
  },
  data() {
    return {
      faqs: [
        {
          title: 'General Questions',
          child: [
            'How to Register on Panazic',
            'Common questions and Limits',
            'Price Index Calculation',
          ]
        },
        {
          title: 'Terms and Conditions',
          child: [
            'General Provisions',
            'Terms of use',
            'Communications',
            'Dispute Resolution',
            'Governing Law',
            'Force Majeure',
            'Liability of the Parties',
            'Term and Termination',
            'Final Provisions',
            'Rights and Obligations',
          ]
        },
        {
          title: 'Fund Management',
          child: [
            'How to Deposit?',
            'How to Withdraw?',
            'Main Wallet - How to do Internal Transfer to other users?',
            'Exchange Wallet - Live Account and Demo Account',
          ]
        },
        {
          title: 'Risks Disclosure',
          child: [
            'Risks Disclosure',
          ]
        },
        {
          title: 'Liability and Indemnity',
          child: [
            'Liability and Indemnity',
          ]
        },
        {
          title: 'Account',
          child: [
            'The differences between the Demo account and the Live account',
            'Account Security - How to Change Password?',
            'Account Security - How to Turn on/off 2FA?',
          ]
        },
        {
          title: 'Trading',
          child: [
            'Common terms explanation',
            'What is a Binary Option?',
            'What happens when you make a BUY or SELL order at Panazic?',
            'How to Open an Order',
            'How to View your Trade History'
          ]
        },
        {
          title: 'Vip Member',
          child: [
            'What is VIP License and how to purchase?',
            'When will I receive VIP Commissions?',
            'When will I receive Trading Commissions?',
            'Commission Level Calculation',
          ]
        },
        {
          title: 'Indicators',
          child: [
            'Using Indicators on the platform',
          ]
        },
      ],
      isShowDetail: false,
    }
  },
  methods: {
    toggleDetailContent() {
      this.isShowDetail = !this.isShowDetail;
    }
  }
};
</script>
